# Golden Solution - R071

## Reference answer

$V_{out} = 1$ V: $I_D = 1$ mA, $g_m \approx 5.18$ mS. $V_{out} = 2.5$ V: $I_D = 0.25$ mA, $g_m \approx 2.59$ mS.

- $I_D = (V_{DD} - V_{out})/R_D$.
- $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$: $\sqrt{2(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 5.18$ mS and $\sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59$ mS. $M_1$ is saturated in both cases (overdrives 0.386 V and 0.193 V are below $V_{out}$).

## Grading notes

+2: all four values within ±3%. +1: one value wrong by a slip. 0: currents right, transconductances wrong (or vice versa). -2 (asserted as fact): $g_m$ from a wrong formula, or currents not equal to $(V_{DD}-V_{out})/R_D$.
