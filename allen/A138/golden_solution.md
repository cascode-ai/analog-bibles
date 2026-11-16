# Golden Solution - A138

## Reference answer

$v_{IC}(\max) = V_{DD} - 0.141$ V = 4.86 V, $v_{IC}(\min) = 0.93$ V, ICMR = 4.86 − 0.93 = 3.93 V (for $V_{DD} = 5$ V).

- $v_{IC}(\max) = V_{DD} - V_{SG3} + V_{TN1}$: M1's drain is one $V_{SG3}$ below $V_{DD}$ and M1 stays saturated while $V_{G1} \le V_{D1} + V_{TN}$. $V_{SG3} = 0.7 + \sqrt{2 \cdot 5\ \mu/(50\ \mu \cdot 10)} = 0.7 + 0.141 = 0.841$ V, so $v_{IC}(\max) = V_{DD} - 0.141$ V.
- $v_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1}$: $V_{DS5}(\mathrm{sat}) = \sqrt{2 \cdot 10\ \mu/(110\ \mu \cdot 10)} = 0.135$ V and $V_{GS1} = 0.7 + \sqrt{2 \cdot 5\ \mu/(110\ \mu \cdot 10)} = 0.795$ V, giving 0.930 V.
- The M2/M4 path allows a slightly higher limit, so the M1/M3 path sets $v_{IC}(\max)$.

## Grading notes

+2: $v_{IC}(\max)$ ≈ 4.86 V (or $V_{DD} - 0.14$ V), $v_{IC}(\min)$ ≈ 0.93 V, ICMR ≈ 3.93 V, stated either as the span or as the interval 0.93 V ≤ $v_{IC}$ ≤ 4.86 V (each ±0.02 V; the interval alone is a complete answer for the range). +1: a rounding-level slip that leaves one value just outside ±0.02 V. 0: correct expressions with wrong currents (e.g. $I_{SS}$ instead of $I_{SS}/2$ in M1 and M3), or one limit right and the other wrong by a computational slip or missing. −2 (asserted as fact): $v_{IC}(\max)$ taken as $V_{DD}$ or $V_{DD} - V_{SG3}$ (forgetting $+V_{TN}$), $V_{DS5}(\mathrm{sat})$ omitted, or the limits assigned to the wrong transistors.
