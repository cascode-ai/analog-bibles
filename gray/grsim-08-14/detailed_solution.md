# Detailed solution - grsim-08-14

This is the MOS version of the series-shunt amplifier: the divider samples $v_o$ and feeds $v_o/11$ back to the gate of $M_2$, in series with the input across the differential pair. First solve the square-law bias point. Then build the basic amplifier with the feedback-network loading, find $a$, $T=af$, the closed-loop gain and the impedances, and refine them with an exact nodal solution. Finally, ngspice provides the small-signal check, the loop gain by double injection, the large-signal transfer characteristic and the harmonic distortion. With $\lambda=0$ and $\gamma=0$ every transistor is a pure transconductance in saturation.

### Step 1 — DC operating point

Each device obeys $I_D=\tfrac12k'(W/L)(V_{GS}-V_t)^2$ in saturation, with $k_n'(W/L)=6\ \mathrm{mA/V^2}$ and $k_p'(W/L)=2\ \mathrm{mA/V^2}$.

- **$M_3$.** With $V_o\approx0$, the output current is $I_{D3}=(V_o+6)/6\ \mathrm{k\Omega}+V_o/11\ \mathrm{k\Omega}\approx1.0$ mA, so $V_{SG3}=1+\sqrt{2(1.0\ \mathrm{mA})/(2\ \mathrm{mA/V^2})}=2.0$ V.
- **$M_1$.** The 4.35-kΩ resistor must drop $V_{SG3}$, so $I_{D1}=2.0\ \mathrm{V}/4.35\ \mathrm{k\Omega}=0.460$ mA and $V_{GS1}=1+\sqrt{2(0.460\ \mathrm{mA})/(6\ \mathrm{mA/V^2})}=1.392$ V. The common source node is at $-1.392$ V.
- **Tail and $M_2$.** $I_{\text{tail}}=(6-1.392)\ \mathrm{V}/5\ \mathrm{k\Omega}=0.922$ mA, leaving $I_{D2}=0.462$ mA. The 4.35-kΩ value is what balances the pair.

Solving these equations together (with $V_{G2}=V_o/11$, since no gate current flows) gives

| $I_{D1}$ | $I_{D2}$ | $I_{D3}$ | $V_S$ | $V_o$ |
|---|---|---|---|---|
| 0.4600 mA | 0.4617 mA | 1.002 mA | −1.3916 V | +7.9 mV |

$V_o$ is not exactly zero because $M_2$ carries slightly more current than $M_1$, so its gate must sit 0.7 mV higher, and the divider multiplies this by 11.

### Step 2 — Small-signal parameters

$g_m=\sqrt{2k'(W/L)I_D}$:

$$
g_{m1}=2.349\ \mathrm{mS},\qquad g_{m2}=2.354\ \mathrm{mS},\qquad g_{m3}=\sqrt{2(2\ \mathrm{mA/V^2})(1.002\ \mathrm{mA})}=2.002\ \mathrm{mS}.
$$

### Step 3 — Basic amplifier and two-port estimate

The feedback factor is $f=1\ \mathrm{k\Omega}/11\ \mathrm{k\Omega}=1/11$. The divider loads the output with 11 kΩ (input side open); at the gate of $M_2$ it adds 909 Ω, which carries no current and has no effect.

- **Differential pair.** $v_i$ sees $1/g_{m1}=425.6\ \Omega$ in series with the source node, where $1/g_{m2}=424.9\ \Omega$ is in parallel with the 5-kΩ tail (391.6 Ω):
$$
i_{d1}=\frac{v_i}{425.6\ \Omega+391.6\ \Omega}=(1.224\ \mathrm{mS})\,v_i,\qquad v_{d1}=-(4.35\ \mathrm{k\Omega})\,i_{d1}=-5.32\,v_i .
$$
- **Output stage.** $M_3$ is common source with its source at ac ground, so its drain current into the output is $g_{m3}v_{sg3}=-g_{m3}v_{d1}$, flowing into $6\ \mathrm{k\Omega}\parallel11\ \mathrm{k\Omega}=3.88\ \mathrm{k\Omega}$.

$$
a=(5.32)(2.002\ \mathrm{mS})(3.88\ \mathrm{k\Omega})=41.4,\qquad T=af=3.76,\qquad A=\frac{a}{1+T}=8.69 .
$$

The input impedance is infinite (the input drives a MOS gate), and

$$
Z_{\text{out}}=\frac{6\ \mathrm{k\Omega}\parallel11\ \mathrm{k\Omega}}{1+T}=\frac{3.88\ \mathrm{k\Omega}}{4.76}=815\ \Omega .
$$

### Step 4 — Exact small-signal result

The exact nodal solution of the same small-signal circuit gives $v_o/v_i=9.26$, a return ratio (for $M_3$'s $g_m$ source) of $T=3.47$, and $Z_{\text{out}}=869\ \Omega$. The two-port estimate is low because the tail resistor is grounded, so the input is not exactly in series with the feedback voltage. If $i_{d1}\to0$, the source node follows $v_i$, and the tail current $v_i/5\ \mathrm{k\Omega}$ must come from $M_2$, which requires $v_{g2}=v_i[1+1/(g_{m2}\cdot5\ \mathrm{k\Omega})]$. The effective ideal gain is therefore

$$
A_\infty=11\left(1+\frac{1}{(2.354\ \mathrm{mS})(5\ \mathrm{k\Omega})}\right)=11.93,\qquad A=A_\infty\frac{T}{1+T}=11.93\cdot\frac{3.47}{4.47}=9.26 .
$$

With a loop gain of only about 3.5, the closed-loop gain is well below 11 and depends noticeably on the transistor parameters.

### Step 5 — SPICE setup

Level-1 models with the given $k'$, $V_t$, $\lambda=0$ and $\gamma=0$ ($W=100\ \mu$m, $L=1\ \mu$m) implement the square law exactly.

```spice
* grsim-08-14 MOS feedback amplifier
.model nm nmos level=1 kp=60u vto=1 lambda=0 gamma=0
.model pm pmos level=1 kp=20u vto=-1 lambda=0 gamma=0
VDD vdd 0 6
VSS vss 0 -6
R1 vdd d1 4.35k
M1 d1 g1 s s nm w=100u l=1u
M2 vdd g2 s s nm w=100u l=1u
RT s vss 5k
M3 o d1 vdd vdd pm w=100u l=1u
RL o vss 6k
R2 g2 0 1k
R10 o g2 10k
Vi g1 0 dc 0 ac 1 sin(0 0.25 1k)
.op
.ac lin 1 10 10
.dc Vi -1.5 1.5 5m
.tran 1u 5m 0 0.5u
.four 1k v(o)
.end
```

$Z_{\text{out}}$ is found by driving a 1-A ac current into the output with $v_i=0$. The loop gain uses the same double injection as for the bipolar version: the loop is broken between the output $o$ and the 10-kΩ resistor (node $f$); a series voltage source gives $T_v=-v_o/v_f$, a shunt current source gives $T_i=i_a/i_f$ (the shares of the injected current flowing into the amplifier side and the feedback side), and

$$
T=\frac{T_vT_i-1}{T_v+T_i+2}.
$$

### Step 6 — Small-signal results

The simulated operating point is identical to Step 1 ($I_{D1}=0.4600$ mA, $I_{D2}=0.4617$ mA, $I_{D3}=1.002$ mA, $V_o=7.85$ mV), as it must be with the same square-law model.

| Quantity | Two-port | Exact nodal | ngspice |
|---|---|---|---|
| $v_o/v_i$ | 8.69 | 9.26 | 9.263 |
| Loop gain $T$ | 3.76 | 3.47 | 3.47 ($T_v=5.90$, $T_i=11.66$) |
| $Z_{\text{in}}$ | ∞ | ∞ | ∞ ($i(V_i)=0$) |
| $Z_{\text{out}}$ | 815 Ω | 869 Ω | 869 Ω |

### Step 7 — Large-signal transfer characteristic

![Output voltage versus input voltage from −1.5 V to 1.5 V: flat at −3.88 V below vi ≈ −0.525 V, rising with slope between 8.2 and 9.8 around zero, then levelling off near 5.69 V](/q/grsim-08-14/solution-transfer.svg)

- **Negative side.** As $v_i$ falls, $M_1$'s current drops, its drain rises and $M_3$'s current decreases. Because the square law reaches zero current smoothly, $g_{m3}$ and the loop gain fall gradually, and the slope softens from about $v_i=-0.3$ V on. For $v_i\lesssim-0.525$ V, $M_3$ is off, and the output is the passive divider value $-6\ \mathrm{V}\cdot11/17=-3.88$ V.
- **Around zero.** The slope is 9.26 at $v_i=0$, but 8.2 at $v_i=-0.25$ V and 9.8 at $+0.25$ V: the low loop gain cannot hide the variation of $g_{m3}$ with $M_3$'s current.
- **Positive side.** Above $v_o\approx4.5$ V, $M_3$'s source-drain voltage falls below its overdrive and it enters the triode region; the slope collapses and the output levels off near 5.69 V.

### Step 8 — Harmonic distortion

For the 0.5-V peak-to-peak input ($\pm0.25$ V, dashed lines in the figure) the output is 2.30 V peak. Writing the characteristic around zero as $v_o=a_1v_i+a_2v_i^2+a_3v_i^3$, its slope is $a_1+2a_2v_i+3a_3v_i^2$, so the three slopes give $a_1=9.26$, $a_2=(9.78-8.20)/(4\cdot0.25)=1.58\ \mathrm{V^{-1}}$ and $a_3=(9.78+8.20-2\cdot9.26)/(6\cdot0.25^2)=-1.47\ \mathrm{V^{-2}}$. Then, for $\hat v_i=0.25$ V,

$$
HD_2\approx\frac{a_2\hat v_i}{2a_1}=\frac{(1.58)(0.25)}{2(9.26)}=2.1\ \%,\qquad HD_3\approx\frac{|a_3|\hat v_i^2}{4a_1}=\frac{(1.47)(0.0625)}{4(9.26)}=0.25\ \%.
$$

The transient Fourier analysis gives

| Harmonic | Amplitude | Relative to fundamental |
|---|---|---|
| Fundamental (1 kHz) | 2.300 V | — |
| Second | 46.0 mV | HD2 = 2.0 % |
| Third | 5.47 mV | HD3 = 0.24 % |

The distortion is more than ten times that of the bipolar version: the loop gain is only about 3.5 instead of about 110, and $M_3$'s current, which swings by about ±0.6 mA around 1 mA, varies its $g_m$ strongly. The second harmonic dominates because the single-ended output stage is asymmetric.
