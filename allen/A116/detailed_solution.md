# Detailed solution - A116

The swing limits come from the large-signal transfer curve: the diode-connected load sets the top, and the balance of M1 (triode) against M2 (saturated) at $v_{IN}=V_{DD}$ sets the bottom. At the 50 µA bias point, the small-signal model gives the gain and output resistance. Because the input is an ideal voltage source, the only node with a time constant is the output, so the circuit has a single pole there, plus a right-half-plane zero through $C_{gd1}$.

### Step 1 — Output swing limits

With $\beta_1=K'_N(W_1/L_1)=220\ \mu\mathrm{A/V^2}$ and $\beta_2=K'_P(W_2/L_2)=50\ \mu\mathrm{A/V^2}$:

- Upper limit: M2 is diode-connected and stops conducting when $v_{SG2}=|V_{TP}|$, so $v_{OUT}(\max)=V_{DD}-|V_{TP}|=4.3$ V (M1 off).
- Lower limit: at $v_{IN}=V_{DD}$, M1 is in the triode region and M2 saturated. With $V_T=0.7$ V for both, equating $\beta_1[(V_{DD}-V_T)v_{OUT}-v_{OUT}^2/2]=\tfrac{\beta_2}{2}(V_{DD}-V_T-v_{OUT})^2$ gives

$$
v_{OUT}(\min)=(V_{DD}-V_T)\left[1-\frac1{\sqrt{1+\beta_2/\beta_1}}\right]
=4.3\ \mathrm V-\frac{4.3\ \mathrm V}{\sqrt{1+50/220}}=0.418\ \mathrm V .
$$

Both limits are set by the transfer curve and do not depend on the bias current. (Keeping $\lambda$ of M2 in the lower-limit equation raises it to about 0.5 V.)

### Step 2 — Bias point and small-signal parameters

At $I_D=50$ µA, with $\lambda$ neglected in the bias, $V_{GS1}=0.7+\sqrt{2(50\ \mu\mathrm A)/(220\ \mu\mathrm{A/V^2})}=1.374$ V and $V_{OUT}=5-0.7-1.414=2.886$ V, so M1 is saturated. With $g_m=\sqrt{2\beta I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(220\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=2\ \mu\mathrm S,\qquad g_{ds2}=2.5\ \mu\mathrm S,\qquad
G_{out}=g_{m2}+g_{ds1}+g_{ds2}=75.2\ \mu\mathrm S .
$$

### Step 3 — Gain and output resistance

The diode-connected M2 loads the output with $g_{m2}$ in parallel with $g_{ds1}$ and $g_{ds2}$:

$$
A_v=-\frac{g_{m1}}{G_{out}}=-\frac{148.3}{75.2}=-1.97\ \mathrm{V/V},\qquad
R_{out}=\frac1{G_{out}}=13.3\ \mathrm{k\Omega}.
$$

If the output conductances are neglected, $A_v=-g_{m1}/g_{m2}=-2.10$ V/V and $R_{out}=14.1$ kΩ.

### Step 4 — Capacitances at the output

$V_{DD}$, ground and the ideally driven input are all ac fixed nodes. Each capacitor therefore connects the output either to a fixed node or to the input:

- $C_{bd1}$ (drain of M1 to ground) and $C_{bd2}$ (drain of M2 to the $V_{DD}$ bulk): output to ac ground;
- $C_{gs2}$: M2's gate is the output and its source is $V_{DD}$, so it also goes from output to ac ground;
- $C_L$: output to ground;
- $C_{gd1}$: between the input and the output.

$$
C_{out}=C_{bd1}+C_{bd2}+C_{gs2}+C_L=10+10+2+1000\ \mathrm{fF}=1022\ \mathrm{fF}.
$$

### Step 5 — Transfer function and −3 dB frequency

KCL at the output, with current through $C_{gd1}$ entering from the input:

$$
(v_{in}-v_{out})sC_{gd1}=g_{m1}v_{in}+G_{out}v_{out}+sC_{out}v_{out}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{G_{out}+s(C_{out}+C_{gd1})}.
$$

The pole is

$$
|p_1|=\frac{G_{out}}{C_{out}+C_{gd1}}=\frac{75.2\ \mu\mathrm S}{1022.5\ \mathrm{fF}}=7.36\times10^7\ \mathrm{rad/s},
\qquad f_{-3\,\mathrm{dB}}=\frac{|p_1|}{2\pi}=11.7\ \mathrm{MHz}
$$

(11.0 MHz with $g_{m2}$ alone). The right-half-plane zero is at $g_{m1}/C_{gd1}=2.97\times10^{11}$ rad/s, i.e. 47 GHz, so far above the pole that it does not affect the bandwidth. The bandwidth is low only because $C_L=1$ pF dominates; the low resistance $1/g_{m2}$ of the diode load is what keeps it as high as 11.7 MHz.
