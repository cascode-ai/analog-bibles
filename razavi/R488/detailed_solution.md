# Detailed solution - R488

**Approach.** X and Y are the gates of the second-stage PMOS devices $M_5$ and $M_6$, whose sources sit at $V_{DD}$ and which must carry the 1 mA forced by their NMOS current-source loads ($M_7$, $M_8$). In saturation the square law then fixes $|V_{GS5}|$, and the common-mode (CM) level of X and Y is $V_{DD} - |V_{GS5}|$.

### Step 1 — What sets the level of X and Y

X is a high-impedance node between two current sources ($M_3$ pushing and $M_1$ pulling $I_{SS}/2 = 0.125$ mA), so the first stage by itself does not pin its DC voltage. But X is also the gate of $M_5$, which is in series with $M_7$ and therefore carries 1 mA in saturation: that allows only one gate–source voltage, which fixes $V_X$. The same holds for Y and $M_6$.

The source and bulk of $M_5$ are both at $V_{DD}$, so there is no body effect:

$$|V_{TH5}| = |V_{TH0}| = 0.8\ \mathrm{V}.$$

### Step 2 — Overdrive needed to carry 1 mA

With channel-length modulation neglected for the bias (no $\lambda$ is given), $I_D = \frac12\mu_pC_{ox}(W/L)(|V_{GS}| - |V_{TH}|)^2$ gives

$$|V_{ov5}| = \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)_5}} .$$

With $(W/L)_5 = 60/0.5 = 120$:

$$
\begin{aligned}
\mu_pC_{ox}\left(\frac WL\right)_5 &= (38.4\ \mu\mathrm{A/V^2})(120) = 4.608\ \mathrm{mA/V^2},\\
\frac{2I_{D5}}{\mu_pC_{ox}(W/L)_5} &= \frac{2\times1\ \mathrm{mA}}{4.608\ \mathrm{mA/V^2}} = 0.434\ \mathrm{V^2},\\
|V_{ov5}| &= \sqrt{0.434\ \mathrm{V^2}} = 0.659\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Gate–source voltage and CM level

$$|V_{GS5}| = |V_{TH5}| + |V_{ov5}| = 0.8\ \mathrm{V} + 0.659\ \mathrm{V} = 1.459\ \mathrm{V}.$$

Node X sits $|V_{GS5}|$ below the source of $M_5$:

$$V_X = V_{DD} - |V_{GS5}| = 3\ \mathrm{V} - 1.459\ \mathrm{V} = 1.541\ \mathrm{V}.$$

$M_6$ is identical and also carries 1 mA, so $V_Y = V_X$: the CM level of X and Y is about **1.54 V**.

### Step 4 — Consistency checks

- **$M_3$, $M_4$ saturated.** $M_3$ carries 0.125 mA with $W/L = 100$, so its overdrive is $\sqrt{2(0.125\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times100)} = \sqrt{0.0651}\ \mathrm{V} = 0.255$ V, far below its source–drain voltage $V_{DD} - V_X = 3 - 1.541 = 1.46$ V.
- **Input pair.** $M_1$ and $M_2$ stay saturated if X and Y (at 1.54 V) do not fall below $V_{in,CM} - V_{TH,n}$; this limits the input CM level but does not change $V_X$.
- **Effect of $\lambda$.** Channel-length modulation would change $|V_{GS5}|$ only by a few percent of the overdrive, so 1.54 V is the intended estimate.

### Result

$$V_X = V_Y = V_{DD} - \left(|V_{TH}| + \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)_5}}\right) = 3 - (0.8 + 0.659) \approx 1.54\ \mathrm{V}.$$

**Common mistake.** Using $W/L = 50/0.5$ for $M_5$, whereas $M_{5,6}$ have $60/0.5$. With 50/0.5 the overdrive would be 0.722 V and $V_X \approx 1.48$ V.

**Common mistake.** Writing $V_X = V_{DD} - |V_{TH}| = 2.2$ V, i.e. forgetting the overdrive. That is the gate voltage at which $M_5$ just turns off, not the one at which it carries 1 mA.

**Common mistake.** Trying to find $V_X$ from the first-stage NMOS devices (or with NMOS parameters). X is driven by two current sources, so its level is set by the PMOS device whose gate it drives, $M_5$, carrying the second-stage bias current.
