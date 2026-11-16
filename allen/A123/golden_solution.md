# Golden Solution - A123

## Reference answer

$V_{IN} = V_{DD} - 1.594$ V, which is 3.41 V for $V_{DD} = 5$ V.

$100\ \mu\mathrm{A} = \frac{50\ \mu \cdot 5}{2}(V_{SG1} - 0.7)^2$, so $V_{SG1} - 0.7 = \sqrt{0.8} = 0.894$ V, $V_{SG1} = 1.594$ V and $V_{IN} = V_{DD} - V_{SG1}$.

## Grading notes

+2: $V_{IN} = V_{DD} - 1.59$ V (3.40–3.42 V at 5 V). +1: only the number for 5 V or only the expression, correct. 0: $V_{SG1}$ right but the sign handled wrongly in a way the answer flags as uncertain. −2 (asserted as fact): $V_{IN} = V_{SG1} = 1.59$ V (gate–source voltage confused with gate voltage), n-channel parameters used for M1, or W/L = 1 used for M1.
