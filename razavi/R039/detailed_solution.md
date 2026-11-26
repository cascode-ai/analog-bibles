# Detailed solution - R039

**Approach:** Drive the gate of the saturated MOSFET's small-signal model with a current $I_{in}$, hold source, drain and bulk at ac ground, compute the drain current $I_{out}$, and find the frequency at which $|I_{out}/I_{in}| = 1$.

### Step 1 — Read the small-signal test circuit

Drive the gate of the saturated MOSFET with $I_{in}$ and hold the source, drain and bulk at AC ground. The drain short fixes $V_d=0$. The arrow on the upper right defines $I_{out}$ as positive toward D, from the short into the transistor. In the source netlist this direction corresponds to $-I(\mathrm{VD})$.

![Reduced small-signal test circuit showing the gate and drain current directions](/q/R039/solution-ft-test.svg)

The junction capacitors $C_{SB}$ and $C_{DB}$ and the output resistance $r_O$ each have zero AC voltage across them. The body-effect current $g_{mb}V_{bs}$ is also zero because $V_{bs}=0$. The reduced diagram omits these branches. In saturation, the channel shields the bulk from the gate, so the model also neglects $C_{GB}$.

### Step 2 — Gate current balance

At G, $I_{in}$ enters the node and the two capacitor currents leave it. Both capacitors see the same voltage from the gate because the source and drain are at AC ground. Applying $I=j\omega C\,\Delta V$ gives

$$
I_{in}=j\omega C_{GS}V_{gs}+j\omega C_{GD}V_{gs},
\qquad
V_{gs}=\frac{I_{in}}{j\omega(C_{GS}+C_{GD})}.
$$

### Step 3 — Drain current balance

At D, the two blue arrows mark the entering currents. The current through $C_{GD}$ flows from G to D in the indicated reference direction. The diamond-shaped controlled source sends $g_mV_{gs}$ from D toward the grounded source.

$$
I_{out}+j\omega C_{GD}V_{gs}=g_mV_{gs},
\qquad
I_{out}=(g_m-j\omega C_{GD})V_{gs}.
$$

At the textbook unity-gain frequency derived in Step 4, the ratio of the feedforward current magnitude to the controlled-source current magnitude is

$$
\frac{\omega_T C_{GD}}{g_m}\approx\frac{C_{GD}}{C_{GS}+C_{GD}}.
$$

When $C_{GD}\ll C_{GS}$, this ratio is small. The two terms also differ in phase by $90^\circ$, so the effect on $|I_{out}|$ is smaller still. The textbook approximation uses $I_{out}\approx g_mV_{gs}$ while keeping both capacitors in the gate equation. Step 5 quantifies the error.

### Step 4 — Current gain and the unity-gain frequency

Substituting $V_{gs}$ from Step 2:

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

In this approximation, the gain falls as $1/\omega$ (−20 dB/decade) and equals 1 at

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

The only approximations are $C_{GB} \approx 0$ in saturation and the neglect of the small feedforward current $j\omega C_{GD}V_{gs}$ (about 1.4% in the Step 5 example).

**Common mistake:** Adding $C_{DB}$ or $C_{SB}$ to the denominator. In the $f_T$ test both terminals of each junction capacitance are at ac ground, so no signal current flows in them; they matter only in a real circuit, where the drain moves.

**Common mistake:** Using $C_{GS}$ alone. With the drain at ac ground, $C_{GD}$ is in parallel with $C_{GS}$ as seen from the gate, and the input current must charge both.

**Common mistake:** "Proving" the result with a voltage gain, for example that of a loaded common-source stage. $f_T$ is defined by the *current* gain with the drain at ac ground; a voltage gain depends on the load and does not give this formula.
