# Detailed solution - R229

**Approach.** Fix the divider ratio from the nominal design. Then write $I_{out}$ as a single square-law expression that contains all three variables ($V_{DD}$ through the divider, $V_{TH}$ in the overdrive, $T$ through the mobility). Evaluate it at the "corners" where the changes push the current in the same direction, and pick the largest change. The effects must be combined inside the square law, not added as linear sensitivities.

### Step 1 — Nominal design point

Reading the figure: $R_1$ connects $V_{DD}$ to the gate of $M_1$, $R_2$ connects the gate to ground, and the source and bulk of $M_1$ are grounded. The gate draws no current, so

$$V_{GS} = \alpha V_{DD}, \qquad \alpha = \frac{R_2}{R_1 + R_2} .$$

**Device parameter at 300 K** ($W/L = 50/0.5 = 100$):

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} .$$

**Nominal overdrive** $V_{ov} = V_{GS} - V_{TH}$ (square law in saturation, $\lambda = 0$):

$$V_{ov} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}, \qquad V_{GS} = 0.7 + 0.273 = 0.973\ \mathrm{V} .$$

**Divider ratio** (fixed once the resistors are chosen):

$$\alpha = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 .$$

### Step 2 — One formula containing all three effects

$$I_{out} = \frac12\mu_n(T)\,C_{ox}\frac{W}{L}\left(\alpha V_{DD} - V_{TH}\right)^2, \qquad \frac{\mu_n(T)}{\mu_n(300\ \mathrm{K})} = \left(\frac{T}{300\ \mathrm{K}}\right)^{-3/2} .$$

How each change acts:

- **$V_{DD}$ ± 10 %** (2.7 V or 3.3 V) moves $V_{GS} = \alpha V_{DD}$, and hence the overdrive. Lower $V_{DD}$ gives less current.
- **$V_{TH}$ ± 50 mV** (0.75 V or 0.65 V) moves the overdrive directly. Higher $V_{TH}$ gives less current.
- **$T$: 300 K → 370 K** multiplies the current by the mobility ratio:
$$\left(\frac{370}{300}\right)^{-3/2} = 1.2333^{-3/2} = \frac{1}{1.2333\times\sqrt{1.2333}} = \frac{1}{1.3697} = 0.730 .$$
This change is specified in one direction only, so every corner is evaluated at 370 K. It always reduces the current.

### Step 3 — The low-current corner ($V_{DD} = 2.7$ V, $V_{TH} = 0.75$ V, $T = 370$ K)

All three changes reduce the current here.

$$
\begin{aligned}
V_{GS} &= \alpha V_{DD} = 0.324\times2.7\ \mathrm{V} = 0.876\ \mathrm{V},\\
V_{ov} &= V_{GS} - V_{TH} = 0.876 - 0.75 = 0.126\ \mathrm{V},\\
I_{out} &= 0.730\times\frac12(13.4\ \mathrm{mA/V^2})(0.126\ \mathrm{V})^2\\
&= 0.730\times(6.7\ \mathrm{mA/V^2})(0.01584\ \mathrm{V^2})\\
&= 0.730\times0.106\ \mathrm{mA} = 0.078\ \mathrm{mA} .
\end{aligned}
$$

**Change:**

$$\Delta I_{out} = 0.078 - 0.5 = -0.42\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = -85\ \% .$$

The overdrive has collapsed from 0.273 V to 0.126 V, i.e. to 46 % of its nominal value. Squared, that is 21 %, and the mobility loss brings it to $0.730\times0.212 = 0.155$, i.e. 15 % of the nominal current.

### Step 4 — The high-current corner ($V_{DD} = 3.3$ V, $V_{TH} = 0.65$ V, $T = 370$ K)

Here $V_{DD}$ and $V_{TH}$ push the current up, while the (fixed) temperature rise pulls it down.

$$
\begin{aligned}
V_{GS} &= 0.324\times3.3\ \mathrm{V} = 1.070\ \mathrm{V},\\
V_{ov} &= 1.070 - 0.65 = 0.420\ \mathrm{V},\\
I_{out} &= 0.730\times(6.7\ \mathrm{mA/V^2})(0.420\ \mathrm{V})^2\\
&= 0.730\times(6.7\ \mathrm{mA/V^2})(0.1768\ \mathrm{V^2})\\
&= 0.730\times1.185\ \mathrm{mA} = 0.865\ \mathrm{mA} .
\end{aligned}
$$

**Change:** $+0.365$ mA, i.e. $+73$ %.

### Step 5 — All four corners and the worst case

With $T = 370$ K in every case (mobility factor 0.730):

| $V_{DD}$ | $V_{TH}$ | $V_{GS}$ | $V_{ov}$ | $I_{out}$ | change |
|---|---|---|---|---|---|
| 2.7 V | 0.75 V | 0.876 V | 0.126 V | 0.078 mA | −85 % |
| 2.7 V | 0.65 V | 0.876 V | 0.226 V | 0.249 mA | −50 % |
| 3.3 V | 0.75 V | 1.070 V | 0.320 V | 0.502 mA | +0.5 % |
| 3.3 V | 0.65 V | 1.070 V | 0.420 V | 0.865 mA | +73 % |

The largest change is at the first corner: **$-0.42$ mA ($-85$ %)**.

### Step 6 — Why the effects must be combined in the square law

The individual linearized sensitivities around the nominal point are:

- $V_{DD}$: $(1/I)\,\partial I/\partial V_{DD} = 2\alpha/V_{ov} = 2.37\ \mathrm{V^{-1}}$, so $\Delta V_{DD} = -0.3$ V gives $-71$ %;
- $V_{TH}$: $\Delta I/I \approx -2\Delta V_{TH}/V_{ov} = -2(0.05)/0.273 = -37$ %;
- $T$: $-27$ %.

Adding them gives $-135$ %, i.e. a *negative* current, which is meaningless. Linearization fails because the changes are not small compared with the 0.273-V overdrive, and because they multiply (mobility factor × squared overdrive) rather than add. The exact square-law evaluation shows that the current approaches zero but cannot go below it.

(The transistor must still be saturated at each corner, which requires $V_{DS} \ge V_{ov}$; this is the most demanding at the high-current corner, $V_{DS} \ge 0.42$ V.)

### Result

The worst case is $V_{DD} = 2.7$ V, $V_{TH} = 0.75$ V, $T = 370$ K:

$$V_{GS} = 0.324\times2.7 = 0.876\ \mathrm{V}, \quad V_{ov} = 0.126\ \mathrm{V}, \quad I_{out} = 0.730\times\tfrac12(13.4\ \mathrm{mA/V^2})(0.126\ \mathrm{V})^2 \approx 0.078\ \mathrm{mA},$$

**a change of about $-0.42$ mA ($-85$ %).** The opposite corner ($V_{DD} = 3.3$ V, $V_{TH} = 0.65$ V, at 370 K) gives about 0.865 mA ($+73$ %), a smaller change.

**Common mistake.** Adding the three linear sensitivities ($-71\ \% - 37\ \% - 27\ \%$) and reporting a change beyond $-100$ %, i.e. a negative current. The deviations are far too large for linearization; the square law must be evaluated directly at the corner.

**Common mistake.** Taking the temperature effect in the wrong direction (current rising with $T$), or leaving the temperature at 300 K in the high-current corner (giving 1.18 mA, $+137$ %). The problem specifies a temperature *rise* to 370 K, and mobility falls with temperature, so the temperature effect is a factor of 0.730 in every corner.

**Common mistake.** Concluding that the worst case is only a few tens of percent, for instance by comparing the changes with $V_{GS}$ rather than with the overdrive. The current depends on $V_{GS} - V_{TH}$ (only 0.273 V nominally), so 0.097 V less $V_{GS}$ and 50 mV more $V_{TH}$ remove more than half of the overdrive.
