# Detailed solution - R039

**Approach.** Put the saturated MOSFET's small-signal model (with its capacitances) into the test condition that defines $f_T$: drive the gate with a small-signal current $I_{in}$, hold source, drain and bulk at ac ground, and compute the drain current $I_{out}$. Then find the frequency at which $|I_{out}/I_{in}| = 1$.

### Step 1 — The test circuit and the small-signal model

The **transit frequency** is a property of the transistor alone, so it is defined with the simplest possible terminations:

- the **gate** is driven by an ideal small-signal current source $I_{in}$ (a current gain needs an input *current*);
- the **source** and the **drain** are connected to ac ground (in the lab, through large bypass capacitors or 0-V sources that let us measure the current);
- the **bulk** is at ac ground as well (it is tied to the source or to the ground/supply rail, both ac grounds).

The output is the small-signal **drain current** $I_{out}$, i.e. the current that flows from the ac-grounded drain connection into the drain terminal.

**Small-signal model of a saturated MOSFET.** Between its four terminals G, D, S, B the model contains:

- a voltage-controlled current source $g_mV_{gs}$ from drain to source, where $g_m$ is the transconductance and $V_{gs}$ the small-signal gate–source voltage;
- a body-effect source $g_{mb}V_{bs}$ from drain to source, where $g_{mb}$ is the body transconductance and $V_{bs}$ the bulk–source voltage;
- the output resistance $r_O$ between drain and source (channel-length modulation);
- the gate–source capacitance $C_{GS}$ and the gate–drain capacitance $C_{GD}$;
- the junction (depletion) capacitances $C_{SB}$ (source–bulk) and $C_{DB}$ (drain–bulk);
- the gate–bulk capacitance $C_{GB}$. In saturation the inversion layer lies between the gate and the bulk and shields the bulk, so $C_{GB}$ is very small and is neglected, as is standard.

The diagram shows the model in the test condition. Node 0 is the common ac ground of source and bulk; the drain node `d` is returned to ground through a 0-V source `VD`, whose current is $I_{out}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Which elements carry signal current?

With S, D and B all at ac ground, the small-signal voltages are

$$V_s = 0, \qquad V_d = 0, \qquad V_b = 0 .$$

Check every element of the model:

- **$C_{SB}$** connects S to B. Both ends are at 0 V, so the voltage across it is zero and its current $j\omega C_{SB}\cdot 0 = 0$.
- **$C_{DB}$** connects D to B. Again both ends are at 0 V, so it carries no current.
- **$r_O$** connects D to S. Its voltage is $V_{ds} = 0$, so its current $V_{ds}/r_O = 0$.
- **$g_{mb}V_{bs}$**: $V_{bs} = V_b - V_s = 0$, so this source is zero.

This is exactly why the junction capacitances do not appear in $f_T$: with both of their terminals held at ac ground they never see a signal voltage. The only elements left are $C_{GS}$, $C_{GD}$ and the source $g_mV_{gs}$. The only node whose voltage is unknown is the gate.

### Step 3 — KCL at the gate: find $V_{gs}$

The gate voltage is $V_g = V_{gs}$ (because $V_s = 0$). The voltage across $C_{GD}$ is $V_g - V_d = V_{gs} - 0 = V_{gs}$, so for the gate node $C_{GD}$ behaves exactly like a second capacitor to ground, in parallel with $C_{GS}$.

**KCL at the gate node** (current entering = current leaving). The current $I_{in}$ enters; it can leave only through the two capacitors:

$$I_{in} = j\omega C_{GS}V_{gs} + j\omega C_{GD}V_{gs} .$$

Factor out $V_{gs}$:

$$I_{in} = j\omega\,(C_{GS} + C_{GD})\,V_{gs} .$$

Solve for $V_{gs}$:

$$V_{gs} = \frac{I_{in}}{j\omega\,(C_{GS} + C_{GD})} .$$

Physically, the input current simply charges the total gate capacitance $C_{GS} + C_{GD}$. The higher the frequency, the smaller the voltage that a given current can build up on it.

### Step 4 — KCL at the drain: find $I_{out}$

At the drain node:

- $I_{out}$ enters from the external ac-ground connection;
- the current through $C_{GD}$ enters from the gate side: $j\omega C_{GD}(V_g - V_d) = j\omega C_{GD}V_{gs}$;
- the controlled source takes the current $g_mV_{gs}$ out of the drain toward the source;
- $r_O$ and $C_{DB}$ carry nothing (Step 2).

**KCL at the drain node** (entering = leaving):

$$I_{out} + j\omega C_{GD}V_{gs} = g_mV_{gs}$$

$$I_{out} = (g_m - j\omega C_{GD})\,V_{gs} .$$

The second term is the **feedforward current** that passes directly from the gate to the drain through $C_{GD}$ without being "amplified". Near $f_T$ it is small compared with $g_mV_{gs}$: at $\omega = \omega_T \approx g_m/(C_{GS} + C_{GD})$ its size is

$$\omega_TC_{GD} \approx g_m\,\frac{C_{GD}}{C_{GS} + C_{GD}} \ll g_m \qquad (C_{GD} \ll C_{GS}),$$

and it is $90^\circ$ out of phase with $g_mV_{gs}$, so it changes $|I_{out}|$ even less. With this standard approximation:

$$I_{out} \approx g_mV_{gs} .$$

(Step 6 checks how small the error is.)

### Step 5 — Current gain and the unity-gain frequency

Substitute $V_{gs}$ from Step 3 into $I_{out} = g_mV_{gs}$:

$$I_{out} = g_m\,\frac{I_{in}}{j\omega\,(C_{GS} + C_{GD})} .$$

Divide by $I_{in}$ to get the small-signal current gain:

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})} .$$

Its magnitude ($|j| = 1$):

$$\left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

The gain falls as $1/\omega$ (−20 dB/decade). Set it equal to 1 at $\omega = \omega_T$:

$$\frac{g_m}{\omega_T\,(C_{GS} + C_{GD})} = 1$$

$$\omega_T = \frac{g_m}{C_{GS} + C_{GD}} .$$

Convert angular frequency to frequency with $\omega_T = 2\pi f_T$:

$$f_T = \frac{\omega_T}{2\pi} = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

This is the required result.

### Step 6 — Check of the neglected feedforward term

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

The only difference from Step 5 is the term $C_{GD}^2$ under the root. For a typical $C_{GD} = 0.2\,C_{GS}$:

$$\frac{C_{GD}^2}{(C_{GS} + C_{GD})^2} = \frac{0.04}{1.44} = 0.028, \qquad \frac{1}{\sqrt{1 - 0.028}} = 1.014,$$

so the exact $f_T$ is only about 1.4 % higher than $g_m/[2\pi(C_{GS} + C_{GD})]$. Neglecting the feedforward current is therefore well justified.

### Result

With the gate driven by a current and source, drain and bulk at ac ground, the junction capacitances, $r_O$ and $g_{mb}$ carry no signal, all of $I_{in}$ charges $C_{GS} + C_{GD}$, and $I_{out} \approx g_mV_{gs}$:

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})} \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

The only approximations are $C_{GB} \approx 0$ in saturation and the neglect of the small feedforward current $j\omega C_{GD}V_{gs}$ (about a 1 % effect).

**Common mistake.** Adding $C_{DB}$ or $C_{SB}$ to the denominator. In the $f_T$ test both terminals of each junction capacitance are held at ac ground, so no signal current flows in them. They matter in a real circuit, where the drain moves, but not in the definition of $f_T$.

**Common mistake.** Using $C_{GS}$ alone. Because the drain is at ac ground, $C_{GD}$ sits directly in parallel with $C_{GS}$ as seen from the gate, and the input current must charge both.

**Common mistake.** "Proving" the result with a voltage gain, for example the gain of a common-source stage with a load. $f_T$ is defined by the *current* gain with the drain shorted to ac ground; a voltage gain depends on the load and does not give this formula.
