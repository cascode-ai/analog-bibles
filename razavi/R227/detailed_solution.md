# Detailed solution - R227

**Approach.** The divider fixes $V_{GS}$ regardless of the threshold, so a change in $V_{TH}$ changes the overdrive $V_{GS} - V_{TH}$ one-for-one, and the square law turns that into a large change in current. Find the nominal design point, recompute $I_{out}$ exactly for $V_{TH} = 0.75$ V and $0.65$ V, and compare with a small-signal estimate.

### Step 1 — Nominal design point

The gate draws no current, so $V_{GS} = V_{DD}R_2/(R_1 + R_2)$ is set by the resistors and $V_{DD}$ alone. With $W/L = 50/0.5 = 100$,

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

and $I_{out} = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ ($\lambda = 0$) gives the nominal overdrive

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V} ,$$

$$V_{GS} = V_{TH} + V_{ov} = 0.7\ \mathrm{V} + 0.273\ \mathrm{V} = 0.973\ \mathrm{V}$$

(corresponding to $R_2/R_1 = 0.973/2.027 = 0.48$). This $V_{GS}$ stays at 0.973 V when $V_{TH}$ changes.

### Step 2 — Threshold 50 mV higher ($V_{TH} = 0.75$ V)

$$V_{ov} = V_{GS} - V_{TH} = 0.973\ \mathrm{V} - 0.75\ \mathrm{V} = 0.223\ \mathrm{V} ,$$

$$I_{out} = \frac12(13.4\ \mathrm{mA/V^2})(0.223\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.0498\ \mathrm{V^2}) = 0.334\ \mathrm{mA} ,$$

$$\Delta I_{out} = 0.334 - 0.5 = -0.166\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = \frac{-0.166}{0.5} = -33\ \% .$$

Less overdrive, so the current **falls** ($M_1$ stays saturated if $V_{DS} \ge 0.223$ V).

### Step 3 — Threshold 50 mV lower ($V_{TH} = 0.65$ V)

$$V_{ov} = 0.973\ \mathrm{V} - 0.65\ \mathrm{V} = 0.323\ \mathrm{V} ,$$

$$I_{out} = (6.7\ \mathrm{mA/V^2})(0.323\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.1044\ \mathrm{V^2}) = 0.700\ \mathrm{mA} ,$$

$$\Delta I_{out} = 0.700 - 0.5 = +0.200\ \mathrm{mA}, \qquad \frac{\Delta I_{out}}{I_{out}} = +40\ \% ,$$

with saturation now requiring $V_{DS} \ge 0.323$ V. The changes are not symmetric because the square law is convex.

### Step 4 — Small-signal estimate

$I_{out}$ depends on $V_{GS} - V_{TH}$, so a change of $V_{TH}$ acts like an equal and opposite change of $V_{GS}$:

$$\Delta I_{out} \approx \frac{\partial I_{out}}{\partial V_{TH}}\Delta V_{TH} = -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})\,\Delta V_{TH} = -g_m\,\Delta V_{TH} ,$$

with

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS} ,$$

$$|\Delta I_{out}| \approx (3.66\ \mathrm{mS})(50\ \mathrm{mV}) = 0.183\ \mathrm{mA}, \qquad \frac{|\Delta I_{out}|}{I_{out}} \approx \frac{0.183}{0.5} = 37\ \% .$$

Equivalently, $\Delta I_{out}/I_{out} \approx -2\Delta V_{TH}/V_{ov} = -2(50\ \mathrm{mV})/(273\ \mathrm{mV}) = -37\ \%$.

The linear estimate ($\mp 0.183$ mA) lies between the exact results. The difference is the quadratic term $\tfrac12\mu_nC_{ox}(W/L)\Delta V_{TH}^2 = (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V})^2 = 0.017$ mA, added in both cases: $-0.183 + 0.017 = -0.166$ and $+0.183 + 0.017 = +0.200$ mA.

### Step 5 — Interpretation

A 50-mV shift, about 7 % of $V_{TH}$, is 18 % of the 0.273-V overdrive, and the square law roughly doubles that fraction, so the current changes by about a third. Since $V_{TH}$ varies by tens of millivolts with process and temperature, a fixed $V_{GS}$ from a divider gives a poorly defined current; this motivates current mirrors, which copy a reference current instead.

### Result

The divider holds $V_{GS} = 0.973$ V (nominal overdrive 0.273 V), so the threshold change goes directly into the overdrive:

- $V_{TH}$ up by 50 mV: $V_{ov} = 0.223$ V, $I_{out} \approx 0.334$ mA, a change of $-0.166$ mA ($-33$ %);
- $V_{TH}$ down by 50 mV: $V_{ov} = 0.323$ V, $I_{out} \approx 0.700$ mA, a change of $+0.20$ mA ($+40$ %);
- small-signal estimate: $\Delta I_{out} \approx -g_m\Delta V_{TH} = \mp(3.66\ \mathrm{mS})(50\ \mathrm{mV}) = \mp 0.18$ mA ($\mp 37$ %).

So $I_{out}$ changes by roughly ±35 %.

**Common mistake.** Comparing the threshold change with $V_{GS}$ or $V_{TH}$ ($50/973 \approx 5$ %, or $50/700 \approx 7$ %) and predicting a change of a few percent. The relevant comparison is with the 0.273-V overdrive.

**Common mistake.** Treating the current as linear in the overdrive and answering $50\ \mathrm{mV}/0.273\ \mathrm{V} \approx 18$ %. The square law doubles the relative change ($\Delta I/I \approx 2\Delta V_{ov}/V_{ov}$), giving about 37 %.
