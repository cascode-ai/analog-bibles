# Detailed solution - R679

**Approach.** The circuit is a differential pair with diode-connected NMOS loads. The differential half circuit gives $A_v = -g_{m1}/g_{m3}$, and substituting the velocity-saturated transconductance $g_m = WC_{ox}v_{sat}$ for both devices leaves only the widths.

### Step 1 — The half circuit

Call the drains of $M_1$ and $M_2$ X and Y, and their common source node P. $M_3$ and $M_4$ have **gate and drain both at $V_{DD}$** and their sources at X and Y, so each is a diode-connected load. By symmetry each branch carries $I_{SS}/2$. For a differential input ($\pm v_{in}/2$ on the gates), P is a virtual ground, and each half is a common-source stage: $M_1$ driving node X, loaded by the source of $M_3$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Half-circuit gain

The gate and drain of $M_3$ are at ac ground, so $v_{gs3} = 0 - v_X = -v_X$, and (no $r_{O3}$ for $\lambda = 0$, no body-effect source for $\gamma = 0$) $M_3$ draws $g_{m3}v_X$ out of X: a load

$$R_{load} = \frac{v_X}{g_{m3}v_X} = \frac{1}{g_{m3}} .$$

$M_1$ draws $g_{m1}(v_{in}/2)$ from X to ground.

<!-- diagram: diagram-02.cir -->

KCL at node X:

$$
\begin{aligned}
g_{m3}(0 - v_X) &= g_{m1}\,\frac{v_{in}}{2}\\
v_X &= -\frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2}.
\end{aligned}
$$

By symmetry $v_Y = +\dfrac{g_{m1}}{g_{m3}}\cdot\dfrac{v_{in}}{2}$, so

$$v_{out} = v_X - v_Y = -\frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2} - \frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2} = -\frac{g_{m1}}{g_{m3}}\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m3}} .$$

### Step 3 — Transconductance under complete velocity saturation

With the carriers at $v_{sat}$ throughout the channel, the current is the channel charge per unit length times $v_{sat}$:

$$I_D = WC_{ox}\,(V_{GS} - V_{TH})\,v_{sat} \quad\Rightarrow\quad g_m = \frac{\partial I_D}{\partial V_{GS}} = WC_{ox}\,v_{sat},$$

independent of $L$ and of the bias current. All four devices are NMOS in the same process, with the same $C_{ox}$ and $v_{sat}$:

$$g_{m1} = W_1C_{ox}v_{sat}, \qquad g_{m3} = W_3C_{ox}v_{sat}.$$

### Step 4 — The gain

$$A_v = -\frac{g_{m1}}{g_{m3}} = -\frac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\frac{W_1}{W_3} .$$

$C_{ox}$, $v_{sat}$, the channel lengths and $I_{SS}$ all cancel. (With different saturation velocities the result would read $-W_1v_{sat,1}/(W_3v_{sat,3})$.) For example, $W_1 = 40\ \mu$m and $W_3 = 10\ \mu$m give $A_v = -4$.

For long-channel devices with equal currents ($I_{SS}/2$ in $M_1$ and $M_3$), $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ gives

$$A_v = -\sqrt{\frac{(W/L)_1}{(W/L)_3}},$$

so the same gain of 4 would need a 16:1 aspect-ratio ratio. Under velocity saturation $g_m$ is linear in $W$ rather than in $\sqrt{W}$, so the gain follows the width ratio directly; in both cases it is a ratio of like quantities and hence well controlled against process and temperature.

### Result

$$A_v = \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m3}} = -\frac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\frac{W_1}{W_3},$$

independent of $v_{sat}$, $C_{ox}$, $L$ and $I_{SS}$. The diode-connected NMOS loads present $1/g_{m3}$ at each output, and with complete velocity saturation $g_m = WC_{ox}v_{sat}$ for every device.

**Common mistake.** Treating $M_3$ and $M_4$ as ideal current sources (infinite gain) or as resistors of unknown value. Their gates are tied to their drains (both at $V_{DD}$), so each presents $1/g_{m3}$ at its source.

**Common mistake.** Giving the square-law answer $-\sqrt{(W/L)_1/(W/L)_3}$, which relies on $g_m \propto \sqrt{(W/L)I_D}$; under complete velocity saturation $g_m = WC_{ox}v_{sat}$.

**Common mistake.** Making the gain depend on $I_{SS}$. Under velocity saturation $g_m$ does not depend on the current, and both $g_{m1}$ and $g_{m3}$ are set by the same branch current anyway.
