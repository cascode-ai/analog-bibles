# Detailed solution - G021

Find the operating point first: $\gamma$ from the process data, the body-affected threshold at $V_{SB}=1$ V, the overdrive and the region. Then compute the transconductances and output resistance from the square-law model, the gate capacitances from the channel charge and overlaps, and the junction capacitances from their reverse biases, and place them in the four-terminal small-signal model.

### Step 1 — Threshold and operating region

$C_{ox}=\epsilon_{ox}/t_{ox}=4.31\times10^{-7}\ \mathrm{F/cm^2}=4.31\ \mathrm{fF/\mu m^2}$ and $\gamma=\sqrt{2q\epsilon_{Si}N_A}/C_{ox}=0.0946\ \mathrm{V^{1/2}}$. With $V_{SB}=1$ V:

$$
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{SB}}-\sqrt{2\phi_f}\right)=0.6\ \mathrm V+(0.0946\ \mathrm{V^{1/2}})\left(\sqrt{1.6}-\sqrt{0.6}\right)\mathrm{V^{1/2}}=0.646\ \mathrm V .
$$

So $V_{ov}=1-0.646=0.354$ V, and since $V_{DS}=2\ \mathrm V>V_{ov}$ the device is in the active region:

$$
I_D=\frac{k'}2\frac WLV_{ov}^2=\frac12(194\ \mu\mathrm{A/V^2})(10)(0.354\ \mathrm V)^2=121\ \mu\mathrm A
$$

(127 µA with the factor $1+\lambda V_{DS}=1.048$).

### Step 2 — $g_m$, $g_{mb}$ and $r_o$

Differentiating $I_D=\tfrac12k'(W/L)(V_{GS}-V_t)^2(1+\lambda V_{DS})$:

$$
g_m=\frac{\partial I_D}{\partial V_{GS}}=k'\frac WLV_{ov}(1+\lambda V_{DS})=(1.94\ \mathrm{mA/V^2})(0.354\ \mathrm V)(1.048)=0.719\ \mathrm{mA/V}
$$

(0.686 mA/V without the CLM factor). The body acts as a back gate through $V_t$; with $\partial V_t/\partial V_{SB}=\gamma/(2\sqrt{2\phi_f+V_{SB}})=\chi$,

$$
\chi=\frac{0.0946}{2(1.265)}=0.0374,\qquad g_{mb}=\chi g_m=(0.0374)(0.719\ \mathrm{mA/V})=26.9\ \mu\mathrm{A/V}.
$$

The output resistance from channel-length modulation is

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.024\ \mathrm{V^{-1}})(121\ \mu\mathrm A)}=343\ \mathrm{k\Omega}
$$

(328 kΩ if $I_D$ includes the CLM factor).

### Step 3 — Capacitances

In the active region the channel is pinched off at the drain, and the channel charge gives $\tfrac23WLC_{ox}$ to $C_{gs}$ and nothing to $C_{gd}$; the overlaps add 2 fF to each:

$$
C_{gs}=\frac23(10\ \mu\mathrm m)(1\ \mu\mathrm m)(4.31\ \mathrm{fF/\mu m^2})+2\ \mathrm{fF}=28.8\ \mathrm{fF}+2\ \mathrm{fF}=30.8\ \mathrm{fF},\qquad C_{gd}=2\ \mathrm{fF},\qquad C_{gb}=5\ \mathrm{fF}.
$$

The source–body junction is reverse biased by $V_{SB}=1$ V and the drain–body junction by $V_{DB}=V_{DS}+V_{SB}=3$ V:

$$
C_{sb}=\frac{20\ \mathrm{fF}}{\sqrt{1+1/0.7}}=12.8\ \mathrm{fF},\qquad
C_{db}=\frac{20\ \mathrm{fF}}{\sqrt{1+3/0.7}}=8.7\ \mathrm{fF}.
$$

### Step 4 — The equivalent circuit

- $C_{gs}=30.8$ fF from G to S, $C_{gd}=2$ fF from G to D, $C_{gb}=5$ fF from G to B;
- the source $g_mv_{gs}$ ($g_m=0.719$ mA/V) and the source $g_{mb}v_{bs}$ ($g_{mb}=26.9\ \mu$A/V), both from D to S;
- $r_o=343$ kΩ from D to S;
- $C_{sb}=12.8$ fF from S to B and $C_{db}=8.7$ fF from D to B.

<!-- diagram: diagram-01.cir -->
