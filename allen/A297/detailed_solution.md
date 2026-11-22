# Detailed solution - A297

The second stage is an ordinary common-source stage, so its gain and the output resistance follow at once. The first stage needs care: the gate of M8 (node A, the M6 drain and M4 source) is not a high-impedance node, because it looks into the source of the cascode M4. The high-impedance node is the M4 drain (node B), which drives only $C_c$. Find the large swing at B, then the much smaller voltage it produces at A. Take $v_{in}=v_+-v_-$ (+ input at M2), an ideal tail current source, all devices saturated, and $g_{ds}\ll g_m$.

### Step 1 — Second stage and output resistance

M8 is a common-source stage loaded by the current sink M9, so the output node sees $r_{ds8}\parallel r_{ds9}$:

$$
R_{out}=\frac1{g_{ds8}+g_{ds9}},\qquad v_{out}=-\frac{g_{m8}}{g_{ds8}+g_{ds9}}\,v_A .
$$

### Step 2 — Why node A has low impedance

Looking into node A from M8's gate one sees the drain of M6 ($r_{ds6}$) in parallel with the source of the cascode M4, whose drain is loaded only by the current source M2 ($\approx r_{ds2}$). The source resistance of a cascode is

$$
R_A\approx\frac{r_{ds4}+r_{ds2}}{1+g_{m4}r_{ds4}}\sim\frac1{g_{m4}}\ll r_{ds6},
$$

so a signal current into node A produces only a small voltage there.

### Step 3 — Signal currents and the swing at node B

With an ideal tail, $i_{d1}=-i_{d2}$. M1's current flows through M3 into the diode M5 and is copied by M6, so M6 supplies about $i_{d1}=-i_{d2}$ to node A. KCL at A (M8's gate draws no current) makes M4 carry this current, while KCL at B makes M4 carry $i_{d2}$. Both hold only if, to leading order, the pair's signal currents vanish:

$$
i_{d1}\approx i_{d2}\approx0 .
$$

Then node D1 and the M5 gate barely move, the common source follows M1's gate ($v_S\approx-v_{in}/2$), and M2 sees $v_{gs2}\approx v_{in}$. Its drain current is held near zero only by a large swing of its drain, node B:

$$
g_{m2}v_{in}+g_{ds2}v_B\approx0\;\Rightarrow\;v_B\approx-\frac{g_{m1}}{g_{ds2}}\,v_{in}\qquad(g_{m2}=g_{m1}).
$$

### Step 4 — Voltage at node A and overall gain

M4 must also carry almost no signal current, $g_{m4}v_A+g_{ds4}(v_A-v_B)\approx0$, so the swing at B is transferred to A divided by M4's intrinsic gain:

$$
v_A\approx\frac{g_{ds4}}{g_{m4}}v_B=-\frac{g_{m1}}{g_{m4}}\cdot\frac{g_{ds4}}{g_{ds2}}\,v_{in} .
$$

Combining with Step 1:

$$
\frac{v_{out}}{v_{in}}\approx\frac{g_{m1}}{g_{m4}}\cdot\frac{r_{ds2}}{r_{ds4}}\cdot\frac{g_{m8}}{g_{ds8}+g_{ds9}},
$$

which is positive. A numerical solution of the full nodal equations agrees with this leading-order term (for example $-0.97$ against $-1$ for $v_A/v_{in}$ with all $g_m$ equal and all $g_{ds}=0.01g_m$). Treating the tail node as an ac ground instead changes the first-stage factor only by a factor of order one.

### Step 5 — Design form

With $I_7/2$ in M1, M2 and M4, $g_{m1}=\sqrt{K'_NS_1I_7}$, $g_{m4}=\sqrt{K'_PS_4I_7}$, $r_{ds2}/r_{ds4}=\lambda_P/\lambda_N$, $g_{m8}=\sqrt{2K'_PS_8I_9}$ and $g_{ds8}+g_{ds9}=(\lambda_N+\lambda_P)I_9$:

$$
\frac{v_{out}}{v_{in}}\approx\frac{\lambda_P}{\lambda_N}\cdot\frac{\sqrt{2K'_NS_1S_8/(S_4I_9)}}{\lambda_N+\lambda_P} .
$$

The first stage contributes only a gain of order $g_{m1}/g_{m4}$ (a few), so the overall gain of the circuit as drawn is of order $10^2$, not $(g_mr_{ds})^2$.
