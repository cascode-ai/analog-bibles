# Detailed solution - R488

**Approach.** Nodes X and Y are the gates of the second-stage PMOS devices $M_5$ and $M_6$, whose sources sit at $V_{DD}$. Each of these devices must carry the 1 mA forced by its NMOS current-source load ($M_7$, $M_8$). With all transistors saturated, the square law then fixes $|V_{GS5}|$, and the common-mode (CM) level of X and Y is $V_{DD} - |V_{GS5}|$.

### Step 1 — Reading the circuit

- **First stage.** NMOS differential pair $M_1$–$M_2$ with tail current $I_{SS} = 0.25$ mA. Its loads are the PMOS current sources $M_3$ (drain at X) and $M_4$ (drain at Y), each carrying $I_{SS}/2 = 0.125$ mA. X and Y are the first-stage outputs.
- **Second stage.** Two PMOS common-source amplifiers: $M_5$ (gate at X, source at $V_{DD}$, drain at $V_{out1}$) and $M_6$ (gate at Y, source at $V_{DD}$, drain at $V_{out2}$). Their loads are the NMOS current sources $M_7$ and $M_8$, each biased at 1 mA.

**Why the second stage sets the level.** X is a high-impedance node between two current sources ($M_3$ pushing and $M_1$ pulling 0.125 mA), so the first stage by itself does not pin its DC voltage. But X is also the gate of $M_5$. $M_5$ and $M_7$ are in series, so they carry the same current, 1 mA; and $M_5$ is in saturation. The square law then allows only one gate–source voltage for $M_5$, which fixes $V_X$. The same holds for Y and $M_6$.

### Step 2 — Threshold voltage of $M_5$

The bulk of each PMOS is at $V_{DD}$, and the source of $M_5$ is also at $V_{DD}$. So the source–bulk voltage is zero and there is no body effect:

$$|V_{TH5}| = |V_{TH0}| = 0.8\ \mathrm{V}.$$

### Step 3 — Overdrive needed to carry 1 mA

**Square-law saturation current** of a PMOS (channel-length modulation neglected for the bias calculation, as no $\lambda$ is given):

$$I_D = \frac12\,\mu_pC_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2 .$$

Solve for the overdrive $|V_{ov}| = |V_{GS}| - |V_{TH}|$:

$$|V_{ov5}| = \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)_5}} .$$

**Numbers.** $(W/L)_5 = 60/0.5 = 120$, so

$$
\begin{aligned}
\mu_pC_{ox}\left(\frac WL\right)_5 &= (38.4\ \mu\mathrm{A/V^2})(120) = 4.608\ \mathrm{mA/V^2},\\
\frac{2I_{D5}}{\mu_pC_{ox}(W/L)_5} &= \frac{2\times1\ \mathrm{mA}}{4.608\ \mathrm{mA/V^2}} = 0.434\ \mathrm{V^2},\\
|V_{ov5}| &= \sqrt{0.434\ \mathrm{V^2}} = 0.659\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Gate–source voltage and CM level

$$|V_{GS5}| = |V_{TH5}| + |V_{ov5}| = 0.8\ \mathrm{V} + 0.659\ \mathrm{V} = 1.459\ \mathrm{V}.$$

The gate of $M_5$ (node X) sits $|V_{GS5}|$ below its source ($V_{DD}$):

$$V_X = V_{DD} - |V_{GS5}| = 3\ \mathrm{V} - 1.459\ \mathrm{V} = 1.541\ \mathrm{V}.$$

By symmetry ($M_6$ is identical to $M_5$ and also carries 1 mA), $V_Y = V_X$. So the CM level of X and Y is about **1.54 V**.

### Step 5 — Consistency checks

- **$M_3$, $M_4$ in saturation.** $M_3$ carries 0.125 mA with $W/L = 100$, so its overdrive is $\sqrt{2(0.125\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times100)} = \sqrt{0.0651}\ \mathrm{V} = 0.255$ V. Its source–drain voltage is $V_{DD} - V_X = 3 - 1.541 = 1.46$ V, far more than 0.255 V, so $M_3$ (and $M_4$) are comfortably saturated.
- **Input pair.** For $M_1$ and $M_2$ to stay saturated, their drains (X, Y at 1.54 V) must not fall below $V_{in,CM} - V_{TH,n}$; this limits the input CM level but does not change $V_X$.
- **Effect of $\lambda$.** Including channel-length modulation would change $|V_{GS5}|$ only slightly (by a few percent of the overdrive), so 1.54 V is the intended estimate.

### Result

$$V_X = V_Y = V_{DD} - \left(|V_{TH}| + \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)_5}}\right) = 3 - (0.8 + 0.659) \approx 1.54\ \mathrm{V}.$$

**Common mistake.** Using $W/L = 50/0.5$ for $M_5$. The problem gives $M_{5,6}$ a larger width, $60/0.5$. With 50/0.5 the overdrive would be 0.722 V and $V_X \approx 1.48$ V, which is wrong.

**Common mistake.** Writing $V_X = V_{DD} - |V_{TH}| = 2.2$ V, i.e. forgetting the overdrive. A device carrying 1 mA needs $|V_{GS}|$ well above threshold; $V_{DD} - |V_{TH}|$ is the gate voltage at which $M_5$ just turns off.

**Common mistake.** Trying to find $V_X$ from the first-stage NMOS devices (or using NMOS parameters). X is driven by two current sources, so its level is set by the PMOS device whose gate it drives, $M_5$, carrying the second-stage bias current.
