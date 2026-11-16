# Detailed solution - R332

**Approach.** The circuit is a CMOS inverter used as an amplifier: the input drives *both* gates, so both transistors are input devices. Put each transistor's flicker noise as a voltage source in series with its gate, write the output voltage in terms of the input and the two noise voltages, and divide the output noise by the squared signal gain $(g_{m1}+g_{m2})^2(r_{O1}\parallel r_{O2})^2$.

### Step 1 — Flicker-noise sources

Flicker ($1/f$) noise is modelled as a voltage source in series with each gate, with PSD

$$\overline{V_{n1}^2} = \frac{K_N}{C_{ox}(WL)_1}\cdot\frac1f, \qquad \overline{V_{n2}^2} = \frac{K_P}{C_{ox}(WL)_2}\cdot\frac1f .$$

Here $K_N$ and $K_P$ are the process-dependent flicker-noise coefficients of the NMOS and PMOS devices, $C_{ox}$ is the gate-oxide capacitance per unit area, $(WL)_i$ is the gate area of transistor $i$, and $f$ is frequency. The two sources arise in different devices, so they are **uncorrelated**.

### Step 2 — Small-signal model

Both transistors are saturated. Their small-signal parameters at the operating point are $g_{m1}$, $r_{O1}$ ($M_1$) and $g_{m2}$, $r_{O2}$ ($M_2$). The ground and $V_{DD}$ are both ac grounds, and the sources of both devices are tied to them, so there is no body effect.

The model has three nodes: ground, the input, and the output.

- $M_1$ (NMOS) draws a current $g_{m1}v_{gs1}$ from the output to ground, where $v_{gs1}$ is its effective gate voltage, and has $r_{O1}$ from the output to ground.
- $M_2$ (PMOS) sources a current $g_{m2}v_{sg2}$ from $V_{DD}$ into the output. Since its source is at ac ground, $v_{sg2} = -v_{g2}$, so this is the same as a current $g_{m2}v_{g2}$ flowing *out of* the output node. $r_{O2}$ connects the output to ac ground ($V_{DD}$).

So both transistors act in the same direction: raising the input makes $M_1$ pull down harder *and* makes $M_2$ push up less. The noise voltage of each device sits in series with its own gate, so the effective gate voltages are

$$v_{g1} = v_{in} + V_{n1}, \qquad v_{g2} = v_{in} + V_{n2}.$$

<!-- diagram: diagram-01.cir -->

### Step 3 — Output voltage (KCL at the output)

Let $R_{out} = r_{O1}\parallel r_{O2}$. KCL at the output node (current leaving through the two dependent sources and through $R_{out}$ sums to zero):

$$g_{m1}(v_{in} + V_{n1}) + g_{m2}(v_{in} + V_{n2}) + \frac{v_{out}}{R_{out}} = 0 .$$

Solve for $v_{out}$:

$$
\begin{aligned}
v_{out} &= -R_{out}\left[g_{m1}(v_{in} + V_{n1}) + g_{m2}(v_{in} + V_{n2})\right]\\
&= -(g_{m1} + g_{m2})R_{out}\,v_{in} \;-\; R_{out}\left(g_{m1}V_{n1} + g_{m2}V_{n2}\right).
\end{aligned}
$$

**Signal gain** (first term):

$$A_v = \frac{v_{out}}{v_{in}} = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}).$$

**Output noise** (second term, $v_{in} = 0$). The two noise voltages are uncorrelated, so their powers add:

$$\overline{V_{n,out}^2} = R_{out}^2\left(g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}\right).$$

### Step 4 — Referring to the input

Divide the output PSD by $A_v^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{R_{out}^2\left(g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}\right)}{(g_{m1} + g_{m2})^2R_{out}^2}\\
&= \frac{g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}}{(g_{m1} + g_{m2})^2}.
\end{aligned}
$$

$R_{out}$ cancels: noise and signal produce output *currents* that are converted to voltage by the same resistance, so the result does not depend on $r_{O1}$ and $r_{O2}$.

Substitute the flicker-noise PSDs from Step 1:

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1} + g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac1f .$$

### Step 5 — Interpretation and a special case

The result can be written as a weighted sum,

$$\overline{V_{n,in}^2} = \left(\frac{g_{m1}}{g_{m1} + g_{m2}}\right)^2\overline{V_{n1}^2} + \left(\frac{g_{m2}}{g_{m1} + g_{m2}}\right)^2\overline{V_{n2}^2},$$

where each device's gate noise is weighted by its share of the total transconductance. This is because the input voltage reaches *both* gates, while each noise voltage reaches only one.

**Special case $g_{m1} = g_{m2} = g_m$.** Each weight is $\left(\tfrac{g_m}{2g_m}\right)^2 = \tfrac14$:

$$\overline{V_{n,in}^2} = \frac14\left[\frac{K_N}{C_{ox}(WL)_1} + \frac{K_P}{C_{ox}(WL)_2}\right]\frac1f .$$

For comparison, a common-source stage with $M_1$ as the only input device and $M_2$ as a current-source load (gate at a fixed bias) would have gain $g_{m1}R_{out}$ and

$$\overline{V_{n,in}^2}\Big|_{CS} = \overline{V_{n1}^2} + \left(\frac{g_{m2}}{g_{m1}}\right)^2\overline{V_{n2}^2},$$

which for equal transconductances is four times larger. Using the PMOS as a second input device doubles the gain without adding any new noise source, so the input-referred noise power drops.

To lower the flicker noise further, the designer can increase the gate areas $(WL)_1$ and $(WL)_2$, since each term is inversely proportional to its device's area.

### Result

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1}+g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac{1}{f}$$

The gain used is $(g_{m1}+g_{m2})(r_{O1}\parallel r_{O2})$; the output resistance cancels. For $g_{m1} = g_{m2}$ this reduces to $\tfrac14\left[\dfrac{K_N}{C_{ox}(WL)_1} + \dfrac{K_P}{C_{ox}(WL)_2}\right]\dfrac1f$.

**Common mistake.** Treating $M_2$ as a current-source load, i.e. using the gain $g_{m1}(r_{O1}\parallel r_{O2})$ and getting $\overline{V_{n1}^2} + (g_{m2}/g_{m1})^2\overline{V_{n2}^2}$. In this circuit the gate of $M_2$ is tied to the input, so $M_2$ also converts the input into output current and the transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Using $K_N$ for both devices, or dropping $C_{ox}$ or the area from one of the terms. NMOS and PMOS devices have different flicker-noise coefficients (PMOS devices are often quieter), and each term must use its own device's coefficient and gate area $(WL)_i$.

**Common mistake.** Adding the two noise voltages as amplitudes, $(g_{m1}V_{n1} + g_{m2}V_{n2})^2$, with a cross term. The two sources come from different transistors and are uncorrelated, so only their powers add.
