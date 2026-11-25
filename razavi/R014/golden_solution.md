# Golden Solution - R014

## Reference answer

In the channel model, $I_X$ and intrinsic $g_m$ decrease as $V_X$ rises while $M_1$ conducts. With $R_1$ across gate and source, the source-node equation and terminal voltages are

$$I_X=I_1-\frac{V_{GS}}{R_1},\quad V_{GS}=V_X-V_S,\quad V_{DS}=2\,\mathrm V-V_S,\quad V_{SB}=V_S.$$

Use the body-dependent threshold $V_{TH}(V_S)$ and define $V_{ov}=V_{GS}-V_{TH}$. For $V_{ov}>0$ and $V_{DS}>0$, the square-law model with $\lambda=0$ gives

| Region | $I_X$ | $g_m$ |
|---|---|---|
| Saturation, $V_X\le2\,\mathrm V+V_{TH}$ | $\beta V_{ov}^2/2$ | $\beta V_{ov}$ |
| Triode, $V_X>2\,\mathrm V+V_{TH}$ | $\beta(V_{ov}V_{DS}-V_{DS}^2/2)$ | $\beta V_{DS}$ |

The saturation segment is flat at fixed threshold and nearly flat when the overdrive changes little relative to its value. Entry into triode requires the channel still to be on at the region boundary.

If $I_1R_1\le V_{TH0}$, the channel is off throughout the portion with $V_S\ge0$. Otherwise, cutoff in that portion occurs if the sweep reaches

$$V_{TH}(V_{S,\mathrm{off}})=I_1R_1,\qquad V_{X,\mathrm{off}}=V_{S,\mathrm{off}}+I_1R_1.$$

Both curves stay zero after cutoff. The gray low-input ranges require junction and current-sink compliance data.

![Drain current versus input voltage for two parameter sets](/q/R014/solution-r014.svg)

![Intrinsic transconductance versus input voltage for the same parameter sets](/q/R014/solution-r014-gm.svg)

## Grading notes

+2: Correct source-node KCL including the resistor current, the body-effect decrease of $I_X$ and $g_m$, and the saturation and triode boundary and formulas. Credit a nearly flat saturation segment under a stated approximation, a substantial decrease, or cutoff when supported by the parameters. A qualitative sketch should identify the validity limit at low input and indicate that the upper branch depends on the parameters.

+1: Correct saturation trend with incomplete region reasoning, or a fixed-threshold approximation with the main circuit relations and operating-region caveat. Minor numerical slips may also receive partial credit.

0: A correct qualitative trend from an incorrect current balance, such as $I_X=I_1$.

-2: A rising square-law curve from grounding the source, a strong increase in $I_X$ asserted for the channel model, or identifying $R_1$ as connected from the gate to ground.
