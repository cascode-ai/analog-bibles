# Detailed solution - A382

The delay specification fixes the product of the two poles. Splitting it equally between the stages sets the output-stage current from $C_{II}$ and the first-stage current from $C_I$, which must be estimated and later checked. The output swing sizes M6 and M7, the input common-mode range sizes M3 and M5, and the gain needed for the resolution sizes M1–M2. All lengths are 1 µm, so $W/L$ is the width in µm.

### Step 1 — Pole requirement from the propagation delay

With poles $p_I=g_I/C_I$ and $p_{II}=g_{II}/C_{II}$ at the two stage outputs, the response to an input step $V_{in}$ is

$$
v_{out}(t)=A_v(0)V_{in}\left[1-\frac{p_{II}e^{-p_It}-p_Ie^{-p_{II}t}}{p_{II}-p_I}\right]
\approx A_v(0)V_{in}\,\frac{p_Ip_{II}t^2}{2}\quad(t\ll1/p_I,\,1/p_{II}).
$$

The output has crossed the midpoint when it has moved half the swing, $(V_{OH}-V_{OL})/2=A_v(0)V_{in}(\min)/2$, where $A_v(0)=(V_{OH}-V_{OL})/V_{in}(\min)$ is the gain that just resolves $V_{in}(\min)$. With $V_{in}=kV_{in}(\min)$ and the parabolic approximation,

$$
kV_{in}(\min)\frac{p_Ip_{II}t_p^2}{2}=\frac{V_{in}(\min)}{2}
\quad\Rightarrow\quad t_p=\frac1{\sqrt{k\,p_Ip_{II}}} .
$$

For $t_p=25$ ns, $k=10$ and equal poles:

$$
p_I=p_{II}=\frac1{t_p\sqrt k}=\frac1{(25\ \mathrm{ns})\sqrt{10}}=1.265\times10^7\ \mathrm{rad/s}.
$$

### Step 2 — Output stage: $I_7$, M6 and M7

The output conductance is $g_{II}=g_{ds6}+g_{ds7}=(\lambda_N+\lambda_P)I_7$, so

$$
I_7=\frac{p_{II}C_{II}}{\lambda_N+\lambda_P}=\frac{(1.265\times10^7\ \mathrm{s^{-1}})(5\ \mathrm{pF})}{0.09\ \mathrm{V^{-1}}}=703\ \mu\mathrm A\ \rightarrow\ I_6=I_7=750\ \mu\mathrm A .
$$

Rounding up keeps margin on the pole. The swing limits fix the saturation voltages: $V_{SD6}(\mathrm{sat})=V_{DD}-V_{OH}=0.5$ V and $V_{DS7}(\mathrm{sat})=V_{OL}-V_{SS}=0.5$ V. From $I_D=\tfrac12K'(W/L)V_{DS}(\mathrm{sat})^2$:

$$
\left(\frac WL\right)_6=\frac{2(750\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=120,\qquad
\left(\frac WL\right)_7=\frac{2(750\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=54.5\rightarrow55 .
$$

### Step 3 — First-stage current from an estimate of $C_I$

The first-stage output conductance is $g_I=g_{ds2}+g_{ds4}=(\lambda_N+\lambda_P)I_5/2$, so equal poles require $I_5=2I_7C_I/C_{II}$. $C_I$ is dominated by the gate of the large M6. With $C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(1\ \mu\mathrm m^2)=2.47$ fF per µm of width,

$$
C_{gs6}=\tfrac23C_{ox}W_6L+C_{GSO}W_6=\tfrac23(120)(2.47\ \mathrm{fF})+(220\ \mathrm{pF/m})(120\ \mu\mathrm m)=198+26=224\ \mathrm{fF},
$$

so $C_I\approx0.3$ pF once drain junctions are added. Then

$$
I_5=\frac{2(750\ \mu\mathrm A)(0.3\ \mathrm{pF})}{5\ \mathrm{pF}}=90\ \mu\mathrm A\ \rightarrow\ 100\ \mu\mathrm A .
$$

### Step 4 — M3–M4 from the positive common-mode limit

At $V_{icm}^+=2$ V, M1 stays saturated only if its drain, $V_{DD}-V_{SG3}$, is at least $V_{icm}^+-V_{TN}$, so

$$
V_{SG3}\le V_{DD}-V_{icm}^++V_{TN}=2.5-2+0.7=1.2\ \mathrm V,
$$
$$
\left(\frac WL\right)_3=\left(\frac WL\right)_4=\frac{2(I_5/2)}{K'_P(V_{SG3}-|V_{TP}|)^2}=\frac{100\ \mu\mathrm A}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=8 .
$$

### Step 5 — M1–M2 from the gain requirement

The comparator must amplify $V_{in}(\min)=1$ mV to the full swing, so $A_v(0)=(2-(-2))\ \mathrm V/1\ \mathrm{mV}=4000$. The two-stage gain is

$$
A_v(0)=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}},
$$

with $g_{ds2}+g_{ds4}=(0.09\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=4.5\ \mu$S, $g_{ds6}+g_{ds7}=(0.09\ \mathrm{V^{-1}})(750\ \mu\mathrm A)=67.5\ \mu$S and $g_{m6}=\sqrt{2K'_P(W/L)_6I_6}=\sqrt{2(50)(120)(750)}\ \mu\mathrm S=3.0$ mS. Hence

$$
g_{m1}=\frac{A_v(0)(4.5\ \mu\mathrm S)(67.5\ \mu\mathrm S)}{3.0\ \mathrm{mS}}=405\ \mu\mathrm S,\qquad
\left(\frac WL\right)_1=\frac{g_{m1}^2}{2K'_N(I_5/2)}=\frac{(405\ \mu\mathrm S)^2}{(110\ \mu\mathrm{A/V^2})(100\ \mu\mathrm A)}=14.9\rightarrow15 .
$$

With $(W/L)_1=15$, $g_{m1}=406\ \mu$S and $A_v(0)=(90.3)(44.4)=4012$.

### Step 6 — M5 from the negative common-mode limit

At $V_{icm}^-=-1.25$ V the tail node sits at $V_{icm}^--V_{GS1}$, with $V_{GS1}=V_{TN}+\sqrt{2(50\ \mu\mathrm A)/((110\ \mu\mathrm{A/V^2})(15))}=0.946$ V. M5 must remain saturated with

$$
V_{DS5}(\mathrm{sat})=V_{icm}^--V_{GS1}-V_{SS}=-1.25-0.946+2.5=0.304\ \mathrm V,
$$
$$
\left(\frac WL\right)_5=\frac{2I_5}{K'_NV_{DS5}(\mathrm{sat})^2}=\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.304\ \mathrm V)^2}=19.7\rightarrow20 .
$$

M5 and M7 need different gate voltages ($V_{ov5}=0.30$ V, $V_{ov7}=0.5$ V), so each is biased from its own diode-connected reference.

### Step 7 — Check $C_I$ and the delay

The capacitance at the first-stage output, with zero-bias junctions on a $W\times3\ \mu$m drain (area $3W$, perimeter $2W+6\ \mu$m):

| Component | Expression | Value |
|---|---|---|
| $C_{gd2}$ | $C_{GDO}W_2$ | 3.3 fF |
| $C_{gd4}$ | $C_{GDO}W_4$ | 1.8 fF |
| $C_{gs6}$ | $\tfrac23C_{ox}W_6L+C_{GSO}W_6$ | 224 fF |
| $C_{bd2}$ | $(770\ \mu\mathrm{F/m^2})(45\ \mu\mathrm m^2)+(380\ \mathrm{pF/m})(36\ \mu\mathrm m)$ | 48.3 fF |
| $C_{bd4}$ | $(560\ \mu\mathrm{F/m^2})(24\ \mu\mathrm m^2)+(350\ \mathrm{pF/m})(22\ \mu\mathrm m)$ | 21.1 fF |
| $C_I$ | sum | 0.299 pF |

This agrees with the 0.3-pF assumption. The poles are

$$
p_I=\frac{4.5\ \mu\mathrm S}{0.299\ \mathrm{pF}}=1.51\times10^7\ \mathrm{rad/s},\qquad
p_{II}=\frac{67.5\ \mu\mathrm S}{5\ \mathrm{pF}}=1.35\times10^7\ \mathrm{rad/s},
$$
$$
t_p=\frac1{\sqrt{10(1.51\times10^7)(1.35\times10^7)}}=22.2\ \mathrm{ns}.
$$

The parabola overestimates the early response slightly; solving the exact two-pole expression of Step 1 for $1-(\ldots)=1/(2k)=0.05$ gives $t_p=24.9$ ns, still within 25 ns.

| Device | M1, M2 | M3, M4 | M5 | M6 | M7 |
|---|---|---|---|---|---|
| $W/L$ (µm/µm) | 15/1 | 8/1 | 20/1 | 120/1 | 55/1 |
| Current | 50 µA each | 50 µA each | $I_5=100$ µA | 750 µA | $I_7=750$ µA |

The two-pole model treats the stages as isolated. $C_{gd6}=C_{GDO}W_6=26.4$ fF, which the $C_I$ table omits, actually bridges the two stage outputs across a second-stage gain of 44. That Miller coupling splits the poles to about $2.5\times10^6$ and $7.3\times10^7$ rad/s and lengthens the exact linear delay to about 33 ns; a level-1 ngspice step response with all device capacitances gives 30 ns. In silicon this design therefore needs extra margin, for example larger currents, beyond what the specified two-pole calculation shows.
