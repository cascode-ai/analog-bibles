# Golden Solution - A296

## Reference answer

The lower limit of −3.5 V cannot be met with this bias: whatever $W_1/L_1$, $V_{ic}(\min) > -2.97$ V. The upper limit requires $W_3/L_3 = W_4/L_4 \ge 3.64/(1.3 - 1.91/\sqrt{S_5})^2$ (e.g. ≥ 8.6 if $S_5 = S_3$).

- Tail current: $I_7 = I_{Bias}(S_7/S_{12}) = 80\ \mu\mathrm{A}\times3/6 = 40\ \mu$A; 20 µA per input device.
- Lower limit: $V_{ic}(\min) = V_{SS} + V_{DS7}(\mathrm{sat}) + V_{T1}(\max) + \sqrt{I_7/(K'_NS_1)}$, with $V_{DS7}(\mathrm{sat}) = \sqrt{2\cdot40/(25\cdot3)} = 1.03$ V. So $V_{ic}(\min) = -5 + 1.03 + 1.0 + \sqrt{1.6/S_1} = -2.97\ \mathrm{V} + \sqrt{1.6/S_1}$ V, which is above −3.5 V for every $S_1$ (even with $V_T = 0.8$ V the floor is −3.17 V). $W_1/L_1 = W_2/L_2$ cannot achieve the specification; the tail device would have to be redesigned (e.g. $V_{DS7}(\mathrm{sat}) \le 0.4$ V needs $S_7 \ge 20$ at 40 µA, after which $S_1 \approx 160$ gives −3.5 V).
- Upper limit: $V_{ic}(\max) = V_{DD} - |V_T|(\max) - \sqrt{I_7/(K'_PS_5)} - \sqrt{I_7/(K'_PS_3)} + V_T(\min) \ge 3.5$ V → $\sqrt{3.64/S_5} + \sqrt{3.64/S_3} \le 1.3$ V (needs $S_5 > 2.15$) → $S_3 = S_4 \ge 3.64/(1.3 - \sqrt{3.64/S_5})^2$; for $S_5 = S_3$ this gives $S_3 = S_5 \ge 8.6$. This assumes, as the question says, that M3 and M4 work as saturated cascodes whose gate bias does not limit the range. With their gates tied as drawn to the M11/M12 node, $V_{SS} + V_{GS12}$ ≈ −3 V, saturation of M3 would need its drain below ≈ −2 V, so $V_{ic}(\max)$ ≈ $V_{G3} + |V_{TP}| + V_{TN}$ ≈ −1 V, and the upper limit could not be met either.

## Grading notes

+2: computes $I_7$ = 40 µA, shows that $V_{ic}(\min)$ cannot reach −3.5 V for any $W_1/L_1$ (floor ≈ −2.97 V with $V_T(\max)$, because $V_{DS7}(\mathrm{sat})$ ≈ 1.03 V and $V_{T1}$ already use 2.03 V of the 1.5-V headroom), and gives the upper-limit condition on $W_3/L_3$ (in terms of $W_5/L_5$ or with a stated assumption such as $S_5 = S_3$ → ≈ 8.6). For the upper limit it is equally correct to show that, with the M3/M4 gate bias drawn at $V_{SS} + V_{GS12}$ ≈ −3 V, saturated cascodes limit $V_{ic}(\max)$ to ≈ −1 V, so +3.5 V cannot be met either. +1: infeasibility shown, upper-limit part incomplete or with a slip. 0: upper-limit part right but the lower limit handled with a wrong formula without claiming the spec is met, or infeasibility merely asserted without the numbers. −2 (asserted as fact): any $W_1/L_1$ (e.g. 6.4 = 64 µm/10 µm, obtained by omitting $V_{DS7}(\mathrm{sat})$) presented as meeting the −3.5-V limit, or $I_7$ taken as 80 µA.
