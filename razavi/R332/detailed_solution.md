# Detailed solution - R332

**Approach.** The input drives *both* gates of this CMOS inverter amplifier, so both transistors are input devices. Put each transistor's flicker noise in series with its gate, write the output voltage in terms of the input and the two noise voltages, and divide the output noise by the squared gain $(g_{m1}+g_{m2})^2(r_{O1}\parallel r_{O2})^2$.

### Step 1 — Flicker-noise sources

$$\overline{V_{n1}^2} = \frac{K_N}{C_{ox}(WL)_1}\cdot\frac1f, \qquad \overline{V_{n2}^2} = \frac{K_P}{C_{ox}(WL)_2}\cdot\frac1f .$$

The two sources arise in different devices, so they are **uncorrelated**.

### Step 2 — Small-signal model

Both sources sit at ac ground ($V_{DD}$ and ground), so there is no body effect. $M_1$ draws $g_{m1}v_{g1}$ from the output to ground. $M_2$ sources $g_{m2}v_{sg2}$ into the output, and since its source is at ac ground, $v_{sg2} = -v_{g2}$: this is a current $g_{m2}v_{g2}$ flowing *out of* the output node, in the same direction as $M_1$'s. $r_{O1}$ and $r_{O2}$ both connect the output to ac ground. With each noise voltage in series with its own gate,

$$v_{g1} = v_{in} + V_{n1}, \qquad v_{g2} = v_{in} + V_{n2}.$$

<!-- diagram: diagram-01.cir -->

### Step 3 — Output voltage (KCL at the output)

With $R_{out} = r_{O1}\parallel r_{O2}$, the currents leaving the output node sum to zero:

$$g_{m1}(v_{in} + V_{n1}) + g_{m2}(v_{in} + V_{n2}) + \frac{v_{out}}{R_{out}} = 0 ,$$

$$
\begin{aligned}
v_{out} &= -R_{out}\left[g_{m1}(v_{in} + V_{n1}) + g_{m2}(v_{in} + V_{n2})\right]\\
&= -(g_{m1} + g_{m2})R_{out}\,v_{in} \;-\; R_{out}\left(g_{m1}V_{n1} + g_{m2}V_{n2}\right).
\end{aligned}
$$

The first term gives the signal gain,

$$A_v = \frac{v_{out}}{v_{in}} = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}),$$

and the second, with the uncorrelated powers added, the output noise:

$$\overline{V_{n,out}^2} = R_{out}^2\left(g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}\right).$$

### Step 4 — Referring to the input

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{R_{out}^2\left(g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}\right)}{(g_{m1} + g_{m2})^2R_{out}^2}\\
&= \frac{g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}}{(g_{m1} + g_{m2})^2}.
\end{aligned}
$$

$R_{out}$ cancels, so the result does not depend on $r_{O1}$ and $r_{O2}$. With the PSDs of Step 1:

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1} + g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac1f .$$

### Step 5 — Interpretation and a special case

As a weighted sum,

$$\overline{V_{n,in}^2} = \left(\frac{g_{m1}}{g_{m1} + g_{m2}}\right)^2\overline{V_{n1}^2} + \left(\frac{g_{m2}}{g_{m1} + g_{m2}}\right)^2\overline{V_{n2}^2}:$$

the input reaches *both* gates, while each noise voltage reaches only one, so each is weighted by its device's share of the total transconductance.

**Special case $g_{m1} = g_{m2} = g_m$.** Each weight is $\left(\tfrac{g_m}{2g_m}\right)^2 = \tfrac14$:

$$\overline{V_{n,in}^2} = \frac14\left[\frac{K_N}{C_{ox}(WL)_1} + \frac{K_P}{C_{ox}(WL)_2}\right]\frac1f .$$

For comparison, a common-source stage with $M_2$ as a current-source load (gate at a fixed bias) has gain $g_{m1}R_{out}$ and

$$\overline{V_{n,in}^2}\Big|_{CS} = \overline{V_{n1}^2} + \left(\frac{g_{m2}}{g_{m1}}\right)^2\overline{V_{n2}^2},$$

four times larger for equal transconductances: using the PMOS as a second input device doubles the gain without adding a noise source.

### Result

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1}+g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac{1}{f}$$

The gain used is $(g_{m1}+g_{m2})(r_{O1}\parallel r_{O2})$; the output resistance cancels. For $g_{m1} = g_{m2}$ this reduces to $\tfrac14\left[\dfrac{K_N}{C_{ox}(WL)_1} + \dfrac{K_P}{C_{ox}(WL)_2}\right]\dfrac1f$.

**Common mistake.** Treating $M_2$ as a current-source load, i.e. using the gain $g_{m1}(r_{O1}\parallel r_{O2})$ and getting $\overline{V_{n1}^2} + (g_{m2}/g_{m1})^2\overline{V_{n2}^2}$. Here the gate of $M_2$ is tied to the input, so the transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Using $K_N$ for both devices, or dropping $C_{ox}$ or the area from one term. Each term must use its own device's coefficient and gate area $(WL)_i$.

**Common mistake.** Adding the two noise voltages as amplitudes, $(g_{m1}V_{n1} + g_{m2}V_{n2})^2$, with a cross term. The sources are uncorrelated, so only their powers add.
