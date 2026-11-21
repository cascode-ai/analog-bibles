# Detailed solution - grsim-12-03

Use the symmetry argument to predict the result, then confirm it with two SPICE experiments on the op amp in open loop: a dc sweep of $V_{od}$ versus $V_{id}$, and a low-frequency transient with Fourier analysis. The open-loop gain is several thousand, so the input must stay within a fraction of a millivolt of the point where $V_{od}=0$. With mismatch, that point moves to the input offset voltage, and the input is centred there.

### Step 1 — Why a balanced circuit is odd

Let $V_{od}=f(V_{id})$ with the input common-mode level fixed. If the two halves are identical, exchanging $V_{i1}$ and $V_{i2}$ turns the circuit into a mirror image of itself, so $V_{o1}$ and $V_{o2}$ exchange. Exchanging the inputs changes $V_{id}$ to $-V_{id}$, and exchanging the outputs changes $V_{od}$ to $-V_{od}$. Hence

$$
f(-V_{id})=-f(V_{id}),
$$

so the power series of $f$ contains only odd powers, and a differential sinusoid produces only odd harmonics in $V_{od}$. The common-mode feedback circuit ($M_{21}$–$M_{24}$, $M_{25}$) is symmetric too, so it does not break the argument. The single-ended outputs need not be odd: any even-order term is common mode, identical in $V_{o1}$ and $V_{o2}$, and it cancels in $V_{od}$.

### Step 2 — Open-loop gain and sweep range

With $L_{\text{eff}}=0.82\ \mu$m, $\lambda_n=0.024$ and $\lambda_p=0.049\ \mathrm{V^{-1}}$, the square law gives $g_{m1}=\sqrt{2(64.7\ \mu\mathrm{A/V^2})(77)(100\ \mu\mathrm A)}=1.0$ mS and $g_{m6}=\sqrt{2(194\ \mu\mathrm{A/V^2})(16)(400\ \mu\mathrm A)}=1.58$ mS. The output resistances are $r_{o2}=1/(\lambda_pI_D)=204$ kΩ, $r_{o4}=417$ kΩ, $r_{o6}=104$ kΩ and $r_{o7}=51$ kΩ. Hence

$$
|a_{dm0}|=g_{m1}(r_{o2}\parallel r_{o4})\cdot g_{m6}(r_{o6}\parallel r_{o7})\approx(1.0\ \mathrm{mS})(137\ \mathrm{k\Omega})\cdot(1.58\ \mathrm{mS})(34\ \mathrm{k\Omega})\approx137\times54\approx7400.
$$

With outputs limited to about ±1.6 V differential, the linear range at the input is only about $\pm0.2$ mV, so the open-loop sweep must be confined to that range.

### Step 3 — SPICE setup

Level-1 models are used with the given $k'$, $V_t$, $t_{ox}=80$ Å, LD $=0.09\ \mu$m (drawn $L=1\ \mu$m gives $L_{\text{eff}}=0.82\ \mu$m), the given $\lambda$, and CGSO $=$ CGDO $=0.35$ fF/µm. Widths are $W=(W/L)\cdot0.82\ \mu$m. $V_{B1}$, $V_{B2}$, $V_{B3}$ come from diode-connected replicas of $M_7$, $M_3$ and $M_{26}$ carrying 400, 100 and 200 µA. The input is driven differentially about 0 V, $V_{i1}=+V_{id}/2$ and $V_{i2}=-V_{id}/2$, with $V_{CM}=0$.

```spice
* grsim-12-03 fully differential op amp (matched: W1 = W2 = 63.14u)
VDD vdd 0 1.65
VSS vss 0 -1.65
IB1 vb1 vss 400u
MB1 vb1 vb1 vdd vdd pm W=41u L=1u
IB2 vdd vb2 100u
MB2 vb2 vb2 vss vss nm W=3.28u L=1u
IB3 vdd vb3 200u
MB3 vb3 vb3 vss vss nm W=11.48u L=1u
M5 t cmc vdd vdd pm W=20.5u L=1u
M1 x1 vi1 t vdd pm W=63.14u L=1u
M2 x2 vi2 t vdd pm W=63.14u L=1u
M3 x1 vb2 vss vss nm W=3.28u L=1u
M4 x2 vb2 vss vss nm W=3.28u L=1u
M6 vo1 x2 vss vss nm W=13.12u L=1u
M7 vo1 vb1 vdd vdd pm W=41u L=1u
M9 vo2 x1 vss vss nm W=13.12u L=1u
M10 vo2 vb1 vdd vdd pm W=41u L=1u
RZ1 x2 z1 758
C1 z1 vo1 1.39p
RZ2 x1 z2 758
C2 z2 vo2 1.39p
M25 cmc cmc vdd vdd pm W=20.5u L=1u
M21 cmc vo1 s1 vss nm W=6.888u L=1u
M22 vdd vcm s1 vss nm W=6.888u L=1u
M23 vdd vcm s2 vss nm W=6.888u L=1u
M24 cmc vo2 s2 vss nm W=6.888u L=1u
M26 s1 vb3 vss vss nm W=11.48u L=1u
M27 s2 vb3 vss vss nm W=11.48u L=1u
VCMS vcm 0 0
VI1 vi1 0 dc 0 sin(0 50u 10)
EI2 vi2 0 vi1 0 -1
.model nm nmos level=1 vto=0.6 kp=194u ld=0.09u lambda=0.024 tox=80e-10 cgso=0.35n cgdo=0.35n
.model pm pmos level=1 vto=-0.8 kp=64.7u ld=0.09u lambda=0.049 tox=80e-10 cgso=0.35n cgdo=0.35n
.options reltol=1e-7 method=gear
.dc VI1 -0.25m 0.75m 0.5u
.tran 20u 0.4 0.2 20u
.four 10 v(vo1,vo2) v(vo1)
.end
```

The operating point is $|I_{D1}|=100\ \mu$A, $|I_{D5}|=200\ \mu$A, $I_{D6}=406\ \mu$A, with both outputs at 17 mV, so the CMFB loop holds the output common mode near $V_{CM}=0$. For part (b), $W_1=63.46\ \mu$m and $W_2=62.82\ \mu$m (1% apart).

### Step 4 — (a) Matched: dc characteristic

The simulated slope at the origin is $-8740$ V/V; the sign is negative because the input labelled $V_{i1}$ drives $V_{o2}$ through the non-inverting path $M_1\to M_9$. The characteristic passes exactly through the origin and is odd over the whole sweep, including saturation:

| $V_{id}$ (mV) | $V_{od}(+V_{id})$ (V) | $V_{od}(-V_{id})$ (V) |
|---|---|---|
| 0.1 | −0.874631 | +0.874631 |
| 0.2 | −1.632311 | +1.632311 |
| 0.5 | −1.795631 | +1.795631 |

Over $|V_{id}|\le0.15$ mV, $|V_{od}(V_{id})+V_{od}(-V_{id})|\le2\times10^{-8}$ V, which is at the level of the simulator's numerical resolution.

![Simulated open-loop Vod versus Vid: the matched curve is odd about the origin, the 1%-mismatched curve is shifted by a 0.97 mV offset and is no longer odd](/q/grsim-12-03/solution-curves.svg)

### Step 5 — (a) Matched: harmonics of a sinusoidal input

A 10-Hz differential sinusoid of 100 µV peak (50 µV on each input) gives an output fundamental of 0.874 V. The Fourier analysis of the steady state gives:

| Output | $HD_2$ | $HD_3$ | $HD_4$ |
|---|---|---|---|
| $V_{od}$ | $1.2\times10^{-13}$ | $1.0\times10^{-4}$ | $1.0\times10^{-13}$ |
| $V_{o1}$ alone | $3.0\times10^{-2}$ | $1.0\times10^{-4}$ | $1.2\times10^{-2}$ |

In $V_{od}$, the even harmonics sit at the numerical floor, about 180 dB below the third. The single-ended output carries a large second harmonic and a dc shift of 27 mV. These come mainly from the CMFB pairs, which are driven nonlinearly by the ±0.44-V output swing ($|V_{ov}|\approx0.35$ V). They are pure common mode and cancel in $V_{od}$, as Step 1 predicts.

### Step 6 — (b) 1% mismatch between $W_1$ and $W_2$

The symmetry argument no longer applies. First, an input offset appears. For the square-law pair, a width mismatch is equivalent to

$$
V_{OS}\approx\frac{|V_{ov1}|}{2}\frac{\Delta W}{W}=\frac{0.2\ \mathrm V}{2}(0.01)=1\ \mathrm{mV};
$$

the simulation gives $V_{od}=0$ at $V_{id}=0.967$ mV. Since $0.967\ \mathrm{mV}\times8740\gg1.65$ V, the open-loop output is saturated at $V_{id}=0$, so the sweep and the sinusoid are centred on the offset.

About that centre the characteristic is no longer odd: $V_{od}(V_{OS}+0.1\ \mathrm{mV})=-0.87477$ V but $V_{od}(V_{OS}-0.1\ \mathrm{mV})=+0.87447$ V, a 0.30-mV asymmetry instead of $10^{-8}$ V (dashed curve above). With the same 100-µV sinusoid added to the offset:

| Mismatch | $V_{OS}$ | $HD_2$ of $V_{od}$ | $HD_3$ of $V_{od}$ | $HD_4$ of $V_{od}$ |
|---|---|---|---|---|
| 0 | 0 | $1.2\times10^{-13}$ | $1.0\times10^{-4}$ | $1.0\times10^{-13}$ |
| 1% | 0.97 mV | $7.1\times10^{-5}$ | $1.0\times10^{-4}$ | $3.0\times10^{-5}$ |
| 2% | 1.93 mV | $1.4\times10^{-4}$ | $1.0\times10^{-4}$ | $6.0\times10^{-5}$ |

Even-order distortion now exists in $V_{od}$, and it is proportional to the mismatch, while $HD_3$ is unchanged. The mismatch unbalances the two halves, so the large common-mode even harmonics of Step 5 are no longer exactly equal in $V_{o1}$ and $V_{o2}$, and part of them converts to the differential output. The input pair itself adds a smaller even-order term: for $\beta_{1,2}=\beta(1\pm\delta)$ its square-law current has $|a_2/a_1|\approx\delta/(2|V_{ov}|)=0.0125\ \mathrm{V^{-1}}$ for $\delta=0.005$, zero when matched.
