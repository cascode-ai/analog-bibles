# Detailed solution - grsim-07-31

Find the bias of each transistor, build the hybrid-π elements (including $\tau_F$ from $f_T$ and the bias-dependent junction capacitances), and compute the gain through the follower and the pair. Then sum the zero-value time constants of the DM half circuit to estimate the bandwidth, and compare with an ngspice ac analysis of the full linear circuit, with and without base resistance.

### Step 1 — Bias and small-signal elements

With $v_i=0$ the bases of $Q_1$, $Q_4$ are at 0 V, the emitters (bases of $Q_2$, $Q_3$) at −0.7 V, the tail at −1.4 V, and the collectors of $Q_2$, $Q_3$ at $6-0.5\ \mathrm{mA}\times5\ \mathrm{k\Omega}=3.5$ V.

| | $Q_1$, $Q_4$ (10 µA) | $Q_2$, $Q_3$ (0.5 mA) |
|---|---|---|
| $g_m=I_C/V_T$ | 0.385 mA/V | 19.2 mA/V |
| $r_\pi=\beta/g_m$ | 520 kΩ | 10.4 kΩ |

$\tau_F$ follows from $f_T$ at 2 mA, where $g_m=76.9$ mA/V and $C_\pi+C_\mu=g_m/\omega_T=24.48$ pF:

$$
\tau_F=\frac{24.48-0.5-4\ \mathrm{pF}}{76.9\ \mathrm{mA/V}}=260\ \mathrm{ps},\qquad C_\pi=\tau_Fg_m+C_{je}:\ C_{\pi1}=4.10\ \mathrm{pF},\ C_{\pi2}=9.00\ \mathrm{pF}.
$$

The junction capacitances follow $C=C_0/\sqrt{1+V_R/0.55}$:

$$
C_{\mu1}\ (V_{CB}=6\ \mathrm V)=0.145\ \mathrm{pF},\quad C_{\mu2}\ (V_{CB}=4.2\ \mathrm V)=0.170\ \mathrm{pF},\quad C_{cs2}\ (V_{CS}=9.5\ \mathrm V)=0.468\ \mathrm{pF}.
$$

$C_{cs1}$ is at ac ground (collector at +6 V).

### Step 2 — (a) Low-frequency gain

$v_i$ drives $Q_1$; the other side is grounded through its own follower. In the DM half circuit $Q_2$'s emitter is at ac ground, so $Q_1$ sees an emitter load of $r_{\pi2}$, and the base of $Q_2$ receives the fraction $(\beta+1)r_{\pi2}/[R_S+r_{\pi1}+(\beta+1)r_{\pi2}]$ of the half-circuit input. The differential output of the pair with a single-ended input $v_i$ is $-g_{m2}R_C$ times that, so

$$
\frac{v_o}{v_i}=-g_{m2}R_C\,\frac{(\beta+1)r_{\pi2}}{R_S+r_{\pi1}+(\beta+1)r_{\pi2}}=-(96.2)\frac{2.09\ \mathrm{M\Omega}}{2.62\ \mathrm{M\Omega}}=-96.2\times0.798=-76.7 .
$$

The 10-µA followers lose about 20 % of the signal, because their $r_{\pi1}=520\ \mathrm{k\Omega}$ is comparable to $(\beta+1)r_{\pi2}$.

### Step 3 — (b) Zero-value time constants of the DM half circuit

For each capacitor, set the others to zero and find the resistance it sees:

- $C_{\pi1}$: $r_{\pi1}\parallel\dfrac{R_S+r_{\pi2}}{1+g_{m1}r_{\pi2}}=520\ \mathrm{k\Omega}\parallel\dfrac{20.4\ \mathrm{k\Omega}}{5.0}=4.05\ \mathrm{k\Omega}$.
- $C_{\mu1}$ (base to ground): $R_S\parallel[r_{\pi1}+(\beta+1)r_{\pi2}]=9.96\ \mathrm{k\Omega}$.
- $C_{\pi2}$: $r_{\pi2}$ in parallel with the follower's output resistance $(R_S+r_{\pi1})/(\beta+1)=2.64\ \mathrm{k\Omega}$, i.e. $R_b=2.10\ \mathrm{k\Omega}$.
- $C_{\mu2}$: $R_b+R_C+g_{m2}R_CR_b=2.10+5+201.9=209\ \mathrm{k\Omega}$.
- $C_{cs2}$: $R_C=5\ \mathrm{k\Omega}$.

| Capacitor | $C$ (pF) | $R$ (kΩ) | $RC$ (ns) |
|---|---|---|---|
| $C_{\pi1}$ | 4.10 | 4.05 | 16.6 |
| $C_{\mu1}$ | 0.145 | 9.96 | 1.4 |
| $C_{\pi2}$ | 9.00 | 2.10 | 18.9 |
| $C_{\mu2}$ | 0.170 | 209 | 35.6 |
| $C_{cs2}$ | 0.468 | 5 | 2.3 |
| Sum $T_0$ | | | 74.9 |

$$
f_{-3\text{dB}}\approx\frac{1}{2\pi T_0}=\frac{1}{2\pi(74.9\ \mathrm{ns})}=2.1\ \mathrm{MHz}.
$$

The Miller-multiplied $C_{\mu2}$ is the largest term, followed by $C_{\pi2}$ and $C_{\pi1}$.

### Step 4 — (c) SPICE gain and bandwidth

The full circuit (both followers and both pair transistors) is simulated with the linear hybrid-π elements of Step 1; the bias current sources are open at ac and $v_o=v_{c2}-v_{c3}$.

```spice
* grsim-07-31 linear model of the full stage (rb = 0; 200 for part d)
.subckt q c b e params: gm=1 rpi=1 cpi=1p cmu=1p rbb=1m
Rbb b  bi {rbb}
Rpi bi e  {rpi}
Cpi bi e  {cpi}
Cmu bi c  {cmu}
G   c  e  bi e {gm}
.ends
Vi  s 0 ac 1
RS1 s b1 10k
X1 0  b1 e1 q params: gm=0.384615m rpi=520k  cpi=4.1p cmu=0.1449p
X2 c2 e1 t  q params: gm=19.2308m  rpi=10.4k cpi=9.0p cmu=0.1701p
X3 c3 e4 t  q params: gm=19.2308m  rpi=10.4k cpi=9.0p cmu=0.1701p
X4 0  b4 e4 q params: gm=0.384615m rpi=520k  cpi=4.1p cmu=0.1449p
RS4 b4 0 10k
RC2 c2 0 5k
RC3 c3 0 5k
Ccs2 c2 0 0.4679p
Ccs3 c3 0 0.4679p
.ac dec 200 1k 1G
.end
```

| Quantity | Hand | ngspice, $r_b=0$ |
|---|---|---|
| Low-frequency gain | −76.7 | −76.7 (37.70 dB) |
| −3-dB bandwidth | 2.1 MHz (zero-value) | 3.10 MHz |
| $\lvert v_o/v_i\rvert$ at 100 MHz | — | 0.467 (−6.6 dB) |
| Phase at 100 MHz | — | +48.6°, a lag of 131° from the low-frequency 180° |

The zero-value estimate is about 1.5 times pessimistic. It assumes a single dominant pole, but here $C_{\pi1}$ feeds the signal forward around $r_{\pi1}$ (a left-half-plane zero in the tens of megahertz), and the follower and the Miller node interact to give a complex pole pair. Both extend the bandwidth beyond $1/(2\pi T_0)$.

### Step 5 — (d) Effect of $r_b=200\ \Omega$

With 200 Ω added in series with every base:

| Quantity | $r_b=0$ | $r_b=200\ \Omega$ |
|---|---|---|
| Gain (hand / SPICE) | −76.7 / −76.7 | −75.6 / −75.5 (37.56 dB) |
| Zero-value estimate | 2.12 MHz | 2.03 MHz |
| Simulated −3-dB bandwidth | 3.10 MHz | 2.94 MHz |
| At 100 MHz: magnitude, phase lag | −6.6 dB, 131° | −7.0 dB, 132° |

Base resistance reduces the gain and bandwidth by only about 5 %. It adds to resistances that are already large: 200 Ω in series with the 10-kΩ source, and 200 Ω added to the 2.1 kΩ seen by $C_{\pi2}$ and the Miller capacitance $C_{\mu2}$.
