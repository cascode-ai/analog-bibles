# Golden Solution - A047

## Reference answer

$i_D = 27.0\ \mu\mathrm{A/V^2}\,(v_{GS} - 0.7\ \mathrm{V})^2$ for $v_{GS} > 0.7$ V and zero below: a parabola that leaves the axis tangentially at 0.7 V and passes through (1 V, 2.4 µA), (2 V, 45.7 µA), (3 V, 143 µA), (4 V, 294 µA), (5 V, 500 µA).

- From the given point: $K'W/(2L) = 500\ \mu\mathrm{A}/(5 - 0.7)^2 = 27.04\ \mu\mathrm{A/V^2}$ (so $K'W/L = 54.1\ \mu\mathrm{A/V^2}$).
- $i_D$ at $V_{GS}$ = 1, 2, 3, 4, 5 V: $27.04\ \mu\mathrm{A/V^2}\times(0.3^2,\ 1.3^2,\ 2.3^2,\ 3.3^2,\ 4.3^2)$ = 2.43, 45.7, 143.1, 294.5, 500 µA.
- The slope of the curve ($g_m = 2\cdot 27.04\ \mu\mathrm{A/V^2}\,(V_{GS} - 0.7)$) rises linearly: 16, 70, 124, 178, 233 µA/V at the five points. A plot of $\sqrt{i_D}$ against $v_{GS}$ would be a straight line with its intercept at 0.7 V.

## Grading notes

+2: a parabolic $i_D$–$v_{GS}$ curve with zero current up to 0.7 V and values within ±5% of 2.4, 45.7, 143, 294 and 500 µA (as plotted points or a table). +1: correct curve and scale with one point wrong, or correct values with the curve described only loosely. 0: right shape but the scale factor wrong through an arithmetic slip that affects several points, or only the $g_m$–$V_{GS}$ line given (correct values) without the $i_D$ curve. −2 (asserted as fact): a linear $i_D$–$v_{GS}$ relation, current starting at $v_{GS} = 0$, $(V_{GS} - V_T)$ replaced by $V_{GS}$, or the factor 1/2 dropped so that the curve no longer passes through 500 µA at 5 V.
