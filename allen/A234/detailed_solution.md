# Detailed solution - A234

Both halves of this stage are cascodes, so the output resistance is the parallel combination of two cascode resistances of the form $g_mr_{ds}^2$. Find that resistance, the gain $-g_{m1}R_{out}$ and the output pole, then insert $g_m\propto\sqrt{I_D}$ and $g_{ds}=\lambda I_D$ at fixed geometry.

### Step 1 — Output resistance

From the small-signal model, looking down into the drain of M2 (gate at ac ground, source loaded by $r_{ds1}$) and up into the drain of M3 (gate at ac ground, source loaded by $r_{ds4}$):

$$
R_{down}=r_{ds1}+r_{ds2}+(g_{m2}+g_{mbs2})r_{ds1}r_{ds2}\approx g_{m2}r_{ds1}r_{ds2},
$$

$$
R_{up}=r_{ds3}+r_{ds4}+(g_{m3}+g_{mbs3})r_{ds3}r_{ds4}\approx g_{m3}r_{ds3}r_{ds4},
$$

$$
R_{out}=R_{down}\parallel R_{up}\approx\big[g_{m2}r_{ds1}r_{ds2}\big]\parallel\big[g_{m3}r_{ds3}r_{ds4}\big].
$$

The body transconductances only multiply $g_m$ by a factor $1+\eta$ fixed by the bias voltages, so they do not change the current scaling and are dropped below.

### Step 2 — Current dependence of one cascode resistance

With $g_m=\sqrt{2K'(W/L)I_D}$ and $r_{ds}=1/(\lambda I_D)$,

$$
g_{m2}r_{ds1}r_{ds2}=\frac{\sqrt{2K'_2(W/L)_2I_D}}{\lambda_1\lambda_2I_D^2}=\frac{\sqrt{2K'_2(W/L)_2}}{\lambda_1\lambda_2}\,I_D^{-3/2},
$$

and similarly for the upper branch. Adding the two conductances,

$$
R_{out}=\frac{I_D^{-3/2}}{\dfrac{\lambda_1\lambda_2}{\sqrt{2K'_2(W/L)_2}}+\dfrac{\lambda_3\lambda_4}{\sqrt{2K'_3(W/L)_3}}}\ \propto\ I_D^{-3/2}.
$$

### Step 3 — Voltage gain

The cascode M2 delivers M1's small-signal current $g_{m1}v_{in}$ to the output almost unchanged, so

$$
A_v=-g_{m1}R_{out}=-\frac{\sqrt{2K'_1(W/L)_1}\,I_D^{-1}}{\dfrac{\lambda_1\lambda_2}{\sqrt{2K'_2(W/L)_2}}+\dfrac{\lambda_3\lambda_4}{\sqrt{2K'_3(W/L)_3}}}\ \propto\ I_D^{1/2}\cdot I_D^{-3/2}=I_D^{-1}.
$$

### Step 4 — Dominant pole

The output node carries the very large $R_{out}$ and the fixed load capacitance $C_{out}$; the internal cascode nodes see only about $1/g_m$. The dominant pole is therefore

$$
|p_1|=\frac{1}{R_{out}C_{out}}\ \propto\ I_D^{3/2}.
$$

Summary: $R_{out}\propto I_D^{-3/2}$, $|A_v|\propto I_D^{-1}$, $|p_1|\propto I_D^{3/2}$. Each exponent is one half-power stronger than for the simple cascode with a plain current-source load, because here neither branch has a single $r_{ds}$ to limit the output resistance.
