# Detailed solution - R679

**Approach.** Identify the circuit as a differential pair whose loads are diode-connected NMOS transistors, use the differential half circuit to get $A_v = -g_{m1}/g_{m3}$, and then substitute the velocity-saturated transconductance $g_m = WC_{ox}v_{sat}$ for both devices. Everything except the widths cancels.

### Step 1 — Reading the circuit

- $M_1$ and $M_2$ form an NMOS differential pair. Their sources meet at a common node P, biased by the tail current $I_{SS}$. The input $V_{in}$ is applied between the two gates.
- $M_3$ and $M_4$ are NMOS devices with **drain and gate both tied to $V_{DD}$** and their sources at the output nodes X (drain of $M_1$) and Y (drain of $M_2$). Each is therefore a diode-connected device (gate tied to drain), acting as a load seen from its source.
- The output $V_{out}$ is taken between X and Y.

By symmetry each branch carries $I_{SS}/2$ in the quiescent state.

### Step 2 — Differential half circuit

For a purely differential input ($+v_{in}/2$ on the gate of $M_1$, $-v_{in}/2$ on the gate of $M_2$), the small-signal currents of $M_1$ and $M_2$ are equal and opposite, so the tail node P does not move: it is a **virtual ground**. Each half then becomes a common-source stage: $M_1$ with its source at AC ground, driving node X, which is loaded by the source of $M_3$.

<!-- diagram: diagram-01.cir -->

### Step 3 — Impedance of the diode-connected NMOS load

In $M_3$ the gate and drain are at $V_{DD}$, i.e. at AC ground; only its source (node X) moves. Its small-signal model is a controlled current source $g_{m3}v_{gs3}$ from drain to source, with

$$v_{gs3} = v_g - v_s = 0 - v_X = -v_X .$$

(With $\lambda = 0$ there is no $r_{O3}$, and with $\gamma = 0$ no body-effect source, even though the source of $M_3$ is not at the bulk potential.) So $M_3$ pushes a current $g_{m3}(-v_X)$ *into* node X; equivalently it draws $g_{m3}v_X$ out of X. A current proportional to the node's own voltage is just a resistance:

$$R_{load} = \frac{v_X}{g_{m3}v_X} = \frac{1}{g_{m3}} .$$

### Step 4 — Half-circuit gain

**Small-signal model of the half circuit.** Node X connects to two controlled sources: $M_1$'s source $g_{m1}(v_{in}/2)$, flowing from X to ground; and $M_3$'s source $g_{m3}(0 - v_X)$, flowing from AC ground into X.

<!-- diagram: diagram-02.cir -->

**KCL at node X** (current in = current out):

$$
\begin{aligned}
g_{m3}(0 - v_X) &= g_{m1}\,\frac{v_{in}}{2}\\
-g_{m3}\,v_X &= g_{m1}\,\frac{v_{in}}{2}\\
v_X &= -\frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2}.
\end{aligned}
$$

By symmetry the other half gives $v_Y = +\dfrac{g_{m1}}{g_{m3}}\cdot\dfrac{v_{in}}{2}$. The differential output is

$$v_{out} = v_X - v_Y = -\frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2} - \frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2} = -\frac{g_{m1}}{g_{m3}}\,v_{in},$$

so

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m3}} .$$

### Step 5 — Transconductance under complete velocity saturation

With the carriers moving at $v_{sat}$ throughout the channel, the drain current is the channel charge per unit length times $v_{sat}$:

$$I_D = WC_{ox}\,(V_{GS} - V_{TH})\,v_{sat},$$

where $C_{ox}$ is the gate-oxide capacitance per unit area. Differentiating with respect to $V_{GS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = WC_{ox}\,v_{sat}.$$

It depends only on the width (and on $C_{ox}$ and $v_{sat}$), not on $L$ or on the bias current. All four devices are NMOS in the same process, so they share the same $C_{ox}$ and $v_{sat}$:

$$g_{m1} = W_1C_{ox}v_{sat}, \qquad g_{m3} = W_3C_{ox}v_{sat}.$$

### Step 6 — The gain

$$A_v = -\frac{g_{m1}}{g_{m3}} = -\frac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\frac{W_1}{W_3} .$$

$C_{ox}$, $v_{sat}$, the channel lengths and $I_{SS}$ all cancel; the gain is set only by the ratio of the widths. (If the saturation velocities differed, the result would read $-W_1v_{sat,1}/(W_3v_{sat,3})$.) For example, $W_1 = 40\ \mu$m and $W_3 = 10\ \mu$m give $A_v = -4$.

**Comparison with the square law.** For long-channel devices with equal currents ($I_{SS}/2$ in $M_1$ and $M_3$), $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ and

$$A_v = -\sqrt{\frac{(W/L)_1}{(W/L)_3}},$$

so the same gain of 4 would need a 16:1 aspect-ratio ratio. Under velocity saturation $g_m$ is linear in $W$ rather than in $\sqrt{W}$, so the gain follows the width ratio directly. Like the square-law version, the gain is set by a ratio of like quantities and is therefore well controlled against process and temperature.

### Result

$$A_v = \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m3}} = -\frac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\frac{W_1}{W_3},$$

independent of $v_{sat}$, $C_{ox}$, $L$ and $I_{SS}$. The diode-connected NMOS loads present $1/g_{m3}$ at each output, and with complete velocity saturation $g_m = WC_{ox}v_{sat}$ for every device.

**Common mistake.** Treating $M_3$ and $M_4$ as ideal current sources (giving infinite gain) or as resistors of unknown value. Their gates are tied to their drains (both at $V_{DD}$), so each is a diode-connected device whose impedance seen from the source is $1/g_{m3}$.

**Common mistake.** Giving the square-law answer $-\sqrt{(W/L)_1/(W/L)_3}$. That relies on $g_m \propto \sqrt{(W/L)I_D}$, which does not hold under complete velocity saturation, where $g_m = WC_{ox}v_{sat}$.

**Common mistake.** Making the gain depend on $I_{SS}$. Under velocity saturation $g_m$ does not depend on the current, and in any case both $g_{m1}$ and $g_{m3}$ are set by the same branch current, so the current cannot appear in their ratio.
