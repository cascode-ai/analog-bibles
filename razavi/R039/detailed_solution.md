# Detailed solution - R039

**Approach.** Drive the gate of the saturated MOSFET's small-signal model with a current $I_{in}$, hold source, drain and bulk at ac ground, compute the drain current $I_{out}$, and find the frequency at which $|I_{out}/I_{in}| = 1$.

### Step 1 — The test circuit and the elements that carry signal

The gate is driven by a small-signal current $I_{in}$; source, drain and bulk are at ac ground, and the output is the drain current $I_{out}$. The model contains $g_mV_{gs}$, $g_{mb}V_{bs}$, $r_O$, $C_{GS}$, $C_{GD}$, $C_{SB}$ and $C_{DB}$; $C_{GB}$ is neglected, since in saturation the channel shields the bulk from the gate. In the diagram, node 0 is the common ac ground of source and bulk, and the drain node `d` returns to ground through the 0-V source `VD`, whose current is $I_{out}$.

<!-- diagram: diagram-01.cir -->

With $V_s = V_d = V_b = 0$, the elements $C_{SB}$, $C_{DB}$ and $r_O$ have zero voltage across them and $g_{mb}V_{bs} = 0$, so none of them carries signal current. This is why the junction capacitances do not appear in $f_T$. Only $C_{GS}$, $C_{GD}$ and $g_mV_{gs}$ remain, and the gate is the only node with an unknown voltage.

### Step 2 — KCL at the gate: find $V_{gs}$

Since $V_s = V_d = 0$, $C_{GD}$ also sees the voltage $V_{gs}$ and acts at the gate like a second capacitor to ground, in parallel with $C_{GS}$. KCL at the gate:

$$I_{in} = j\omega C_{GS}V_{gs} + j\omega C_{GD}V_{gs} = j\omega\,(C_{GS} + C_{GD})\,V_{gs} \quad\Longrightarrow\quad V_{gs} = \frac{I_{in}}{j\omega\,(C_{GS} + C_{GD})} .$$

### Step 3 — KCL at the drain: find $I_{out}$

At the drain, $I_{out}$ (from the ac-ground connection) and the $C_{GD}$ current $j\omega C_{GD}V_{gs}$ enter, and $g_mV_{gs}$ leaves toward the source:

$$I_{out} + j\omega C_{GD}V_{gs} = g_mV_{gs} \quad\Longrightarrow\quad I_{out} = (g_m - j\omega C_{GD})\,V_{gs} .$$

The second term is the feedforward current from gate to drain through $C_{GD}$. At $\omega = \omega_T \approx g_m/(C_{GS} + C_{GD})$ its size is

$$\omega_TC_{GD} \approx g_m\,\frac{C_{GD}}{C_{GS} + C_{GD}} \ll g_m \qquad (C_{GD} \ll C_{GS}),$$

and it is $90^\circ$ out of phase with $g_mV_{gs}$, so it changes $|I_{out}|$ even less. With this standard approximation (checked in Step 5):

$$I_{out} \approx g_mV_{gs} .$$

### Step 4 — Current gain and the unity-gain frequency

Substituting $V_{gs}$ from Step 2:

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

The gain falls as $1/\omega$ (−20 dB/decade) and equals 1 at

$$\omega_T = \frac{g_m}{C_{GS} + C_{GD}}, \qquad f_T = \frac{\omega_T}{2\pi} = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} ,$$

which is the required result.

### Step 5 — Check of the neglected feedforward term

Keeping $I_{out} = (g_m - j\omega C_{GD})V_{gs}$ exactly:

$$\frac{I_{out}}{I_{in}} = \frac{g_m - j\omega C_{GD}}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right|^2 = \frac{g_m^2 + \omega^2C_{GD}^2}{\omega^2\,(C_{GS} + C_{GD})^2} .$$

Setting this to 1:

$$
\begin{aligned}
g_m^2 + \omega_T^2C_{GD}^2 &= \omega_T^2\,(C_{GS} + C_{GD})^2\\
g_m^2 &= \omega_T^2\left[(C_{GS} + C_{GD})^2 - C_{GD}^2\right]\\
\omega_T &= \frac{g_m}{\sqrt{(C_{GS} + C_{GD})^2 - C_{GD}^2}} .
\end{aligned}
$$

The only change from Step 4 is the term $C_{GD}^2$ under the root. For a typical $C_{GD} = 0.2\,C_{GS}$:

$$\frac{C_{GD}^2}{(C_{GS} + C_{GD})^2} = \frac{0.04}{1.44} = 0.028, \qquad \frac{1}{\sqrt{1 - 0.028}} = 1.014,$$

so the exact $f_T$ is only about 1.4 % higher than $g_m/[2\pi(C_{GS} + C_{GD})]$, and neglecting the feedforward current is well justified.

### Result

With the gate driven by a current and source, drain and bulk at ac ground, the junction capacitances, $r_O$ and $g_{mb}$ carry no signal, all of $I_{in}$ charges $C_{GS} + C_{GD}$, and $I_{out} \approx g_mV_{gs}$:

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})} \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

The only approximations are $C_{GB} \approx 0$ in saturation and the neglect of the small feedforward current $j\omega C_{GD}V_{gs}$ (about a 1 % effect).

**Common mistake.** Adding $C_{DB}$ or $C_{SB}$ to the denominator. In the $f_T$ test both terminals of each junction capacitance are at ac ground, so no signal current flows in them; they matter only in a real circuit, where the drain moves.

**Common mistake.** Using $C_{GS}$ alone. With the drain at ac ground, $C_{GD}$ is in parallel with $C_{GS}$ as seen from the gate, and the input current must charge both.

**Common mistake.** "Proving" the result with a voltage gain, for example that of a loaded common-source stage. $f_T$ is defined by the *current* gain with the drain at ac ground; a voltage gain depends on the load and does not give this formula.
