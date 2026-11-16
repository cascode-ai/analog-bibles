# Detailed solution - R240

**Approach.** $V_{out}$ can rise until $M_4$ leaves saturation and fall until $M_2$ leaves saturation. The upper limit needs the overdrive of $M_4$; the lower limit needs the threshold of $M_2$, which includes the body effect because its source sits at $V_P$ above the grounded bulk, so first solve for $V_P$.

### Step 1 — Bias currents

$M_4$ mirrors $M_3$, which is biased by $I_1$, so $I_{D4} = I_1 = 0.25$ mA. With no load at the output, $I_{D2} = I_{D4} = 0.25$ mA, and $I_{D1} = I_{SS} - I_{D2} = 0.25$ mA (the drain of $M_1$ goes to $V_{DD}$). Every transistor carries 0.25 mA, and all have $W/L = 50/0.5 = 100$.

### Step 2 — Upper limit: $M_4$ saturated

$V_{SD4} = V_{DD} - V_{out} \ge |V_{ov4}|$ means $V_{out} \le V_{DD} - |V_{ov4}|$ (no body effect: the PMOS sources and bulks are at $V_{DD}$, and the threshold drops out). At 0.25 mA,

$$|V_{ov4}| = \sqrt{\frac{2I_{D4}}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{\frac{0.5\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.1302\ \mathrm{V^2}} = 0.361\ \mathrm{V} ,$$

$$V_{out,max} = 3 - 0.361 = 2.639\ \mathrm{V} .$$

### Step 3 — Lower limit: $M_2$ saturated

$V_{DS2} \ge V_{GS2} - V_{TH2}$ gives

$$V_{out} - V_P \ge V_{in,CM} - V_P - V_{TH2} \quad\Longleftrightarrow\quad V_{out} \ge V_{in,CM} - V_{TH2} .$$

The drain may go at most one threshold below the gate. With the bulk grounded and the source at $V_P$,

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right) .$$

### Step 4 — Solving for $V_P$

At 0.25 mA,

$$V_{ov1} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}} = \sqrt{\frac{0.5\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.03731\ \mathrm{V^2}} = 0.193\ \mathrm{V} ,$$

and KVL at the gate of $M_2$ gives

$$V_P = V_{in,CM} - V_{TH2} - V_{ov1} = 1.3 - 0.193 - \left[0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right)\right] .$$

With $u = \sqrt{0.9 + V_P}$ ($V_P = u^2 - 0.9$):

$$
\begin{aligned}
u^2 - 0.9 &= 1.3 - 0.193 - 0.7 - 0.45u + 0.4269,\\
u^2 + 0.45u - (0.9 + 1.3 - 0.193 - 0.7 + 0.4269) &= 0,\\
u^2 + 0.45u - 1.7337 &= 0 .
\end{aligned}
$$

Taking the positive root,

$$u = \frac{-0.45 + \sqrt{0.2025 + 4(1.7337)}}{2} = \frac{-0.45 + \sqrt{7.1375}}{2} = \frac{-0.45 + 2.6716}{2} = 1.1108 ,$$

$$V_P = u^2 - 0.9 = 1.2339 - 0.9 = 0.334\ \mathrm{V}, \qquad V_{TH2} = 0.7 + 0.45(1.1108 - 0.9487) = 0.7 + 0.0730 = 0.773\ \mathrm{V}$$

(check: $V_P = 1.3 - 0.773 - 0.193 = 0.334$ V ✓).

### Step 5 — The lower limit and the swing

$$V_{out,min} = V_{in,CM} - V_{TH2} = 1.3 - 0.773 = 0.527\ \mathrm{V}$$

(equivalently $V_P + V_{ov2} = 0.334 + 0.193 = 0.527$ V), so the swing is

$$V_{out,max} - V_{out,min} = 2.639 - 0.527 = 2.11\ \mathrm{V} .$$

Without the body effect, $V_{TH2} = 0.7$ V would give $V_{out,min} = 0.60$ V and a swing of $2.64 - 0.60 = 2.04$ V: here the larger threshold *helps*, letting the drain go further below the gate.

$M_1$ (drain at $V_{DD}$) and the diode $M_3$ are always saturated, so only $M_2$ and $M_4$ limit the swing. The input common-mode level is assumed fixed; raising it would raise $V_{out,min}$ one-for-one.

### Result

$$0.53\ \mathrm{V} \lesssim V_{out} \lesssim 2.64\ \mathrm{V},$$

**a swing of about 2.1 V** (peak-to-peak).

- Upper limit: $V_{DD} - |V_{GS4} - V_{TH4}| = 3 - 0.361 = 2.64$ V.
- Lower limit: $V_{in,CM} - V_{TH2} = 1.3 - 0.773 = 0.527$ V, with $V_P = 0.334$ V from the body-effect equation.
- If the body effect were neglected: 0.60–2.64 V, i.e. 2.04 V.

**Common mistake.** Using cutoff instead of saturation as the limit, e.g. $V_{out,min} = V_P$ or $V_{out,max} = V_{DD} - |V_{TH}|$. The gain is lost as soon as a device enters triode, so the limits are $V_{DS2} = V_{ov2}$ and $V_{SD4} = |V_{ov4}|$.

**Common mistake.** Using 0.5 mA per device, or assuming the drain of $M_1$ feeds the $M_3$/$I_1$ node. The drain of $M_1$ goes to $V_{DD}$ and $M_4$ copies only $I_1 = 0.25$ mA.

**Common mistake.** Mixing up device data: the lower limit uses the NMOS threshold (with body effect), the upper limit the PMOS overdrive ($\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$).
