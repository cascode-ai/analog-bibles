# Detailed solution - R227

**Approach.** The resistive divider fixes $V_{GS}$, and it does not care what the threshold is. So a change in $V_{TH}$ changes the overdrive $V_{GS} - V_{TH}$ one-for-one, and the square law turns that into a large change in current. We first find the nominal design point, then recompute $I_{out}$ exactly for $V_{TH} = 0.75$ V and $0.65$ V, and compare with a small-signal estimate.

### Step 1 — Nominal design point

Reading the figure: $R_1$ connects $V_{DD} = 3$ V to the gate of $M_1$, $R_2$ connects the gate to ground, and the source and bulk of $M_1$ are grounded. The gate draws no current, so the gate voltage is $V_{GS} = V_{DD}R_2/(R_1 + R_2)$, which is set by the resistors and $V_{DD}$ only.

**Device parameter** ($W/L = 50/0.5 = 100$):

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} .$$

**Nominal overdrive** $V_{ov} = V_{GS} - V_{TH}$, from the square law in saturation with $\lambda = 0$, $I_{out} = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V} .$$

**Gate–source voltage** fixed by the divider:

$$V_{GS} = V_{TH} + V_{ov} = 0.7\ \mathrm{V} + 0.273\ \mathrm{V} = 0.973\ \mathrm{V} .$$

(This corresponds to $R_2/R_1 = 0.973/2.027 = 0.48$.) This $V_{GS}$ stays at 0.973 V when $V_{TH}$ changes, because the resistors and $V_{DD}$ do not change.

### Step 2 — Threshold 50 mV higher ($V_{TH} = 0.75$ V)

**New overdrive:**

$$V_{ov} = V_{GS} - V_{TH} = 0.973\ \mathrm{V} - 0.75\ \mathrm{V} = 0.223\ \mathrm{V} .$$

**New current:**

$$I_{out} = \frac12(13.4\ \mathrm{mA/V^2})(0.223\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.0498\ \mathrm{V^2}) = 0.334\ \mathrm{mA} .$$

**Change:**

$$\Delta I_{out} = 0.334 - 0.5 = -0.166\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = \frac{-0.166}{0.5} = -33\ \% .$$

A higher threshold leaves less overdrive, so the current **falls**. (The transistor is still saturated if $V_{DS} \ge 0.223$ V.)

### Step 3 — Threshold 50 mV lower ($V_{TH} = 0.65$ V)

**New overdrive:**

$$V_{ov} = 0.973\ \mathrm{V} - 0.65\ \mathrm{V} = 0.323\ \mathrm{V} .$$

**New current:**

$$I_{out} = (6.7\ \mathrm{mA/V^2})(0.323\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.1044\ \mathrm{V^2}) = 0.700\ \mathrm{mA} .$$

**Change:**

$$\Delta I_{out} = 0.700 - 0.5 = +0.200\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = +40\ \% .$$

(Saturation now requires $V_{DS} \ge 0.323$ V.)

The two changes are not symmetric: the square law is convex, so a decrease in $V_{TH}$ raises the current more than an equal increase lowers it.

### Step 4 — Small-signal estimate

For a small threshold change the current changes by the slope of the square law. Since $I_{out}$ depends on $V_{GS} - V_{TH}$, a change of $V_{TH}$ acts like an equal and opposite change of $V_{GS}$:

$$\Delta I_{out} \approx \frac{\partial I_{out}}{\partial V_{TH}}\Delta V_{TH} = -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})\,\Delta V_{TH} = -g_m\,\Delta V_{TH} .$$

**Transconductance** at the nominal point:

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS} .$$

**Estimate:**

$$|\Delta I_{out}| \approx (3.66\ \mathrm{mS})(50\ \mathrm{mV}) = 0.183\ \mathrm{mA}, \qquad \frac{|\Delta I_{out}|}{I_{out}} \approx \frac{0.183}{0.5} = 37\ \% .$$

Equivalently, in relative terms, $\Delta I_{out}/I_{out} \approx -2\Delta V_{TH}/V_{ov} = -2(50\ \mathrm{mV})/(273\ \mathrm{mV}) = -37\ \%$.

The linear estimate ($\mp 0.183$ mA) lies between the exact results ($-0.166$ mA and $+0.200$ mA). The difference is the quadratic term $\tfrac12\mu_nC_{ox}(W/L)\Delta V_{TH}^2 = (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V})^2 = 0.017$ mA, which is added in both cases: $-0.183 + 0.017 = -0.166$ and $+0.183 + 0.017 = +0.200$ mA.

### Step 5 — Interpretation

A 50-mV threshold shift, only about 7 % of $V_{TH}$, changes the current by roughly a third. The reason is that the current depends on the overdrive, and 50 mV is a large fraction (18 %) of the 0.273-V overdrive; the square law then roughly doubles that fraction. Since $V_{TH}$ varies by tens of millivolts with process and temperature, biasing a current source with a fixed $V_{GS}$ from a resistive divider gives a poorly defined current. This motivates current mirrors, which copy a reference current instead of applying a fixed voltage.

### Result

The divider holds $V_{GS} = 0.973$ V (nominal overdrive 0.273 V), so the threshold change goes directly into the overdrive:

- $V_{TH}$ up by 50 mV: $V_{ov} = 0.223$ V, $I_{out} \approx 0.334$ mA, a change of $-0.166$ mA ($-33$ %);
- $V_{TH}$ down by 50 mV: $V_{ov} = 0.323$ V, $I_{out} \approx 0.700$ mA, a change of $+0.20$ mA ($+40$ %);
- small-signal estimate: $\Delta I_{out} \approx -g_m\Delta V_{TH} = \mp(3.66\ \mathrm{mS})(50\ \mathrm{mV}) = \mp 0.18$ mA ($\mp 37$ %).

So $I_{out}$ changes by roughly ±35 %.

**Common mistake.** Comparing the threshold change with $V_{GS}$ or with $V_{TH}$ itself ($50/973 \approx 5$ %, or $50/700 \approx 7$ %) and predicting a change of only a few percent. The current depends on $V_{GS} - V_{TH}$, so the relevant comparison is with the 0.273-V overdrive.

**Common mistake.** Treating the current as linear in the overdrive and answering $50\ \mathrm{mV}/0.273\ \mathrm{V} \approx 18$ %. The square law doubles the relative change ($\Delta I/I \approx 2\Delta V_{ov}/V_{ov}$), giving about 37 %.

**Common mistake.** Getting the direction wrong. A *higher* threshold means *less* overdrive for the same fixed $V_{GS}$, so the current *decreases*.
