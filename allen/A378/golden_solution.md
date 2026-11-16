# Golden Solution - A378

## Reference answer

$V_{TRP} \approx 1.89$ V nominal; worst case $V_{TRP}(\max) \approx 3.22$ V and $V_{TRP}(\min) \approx 0.39$ V.
- Equating saturation currents, $\tfrac{K'_P}{2}(W/L)_6(V_{DD}-v_{in}-|V_{TP}|)^2 = \tfrac{K'_N}{2}(W/L)_7(V_{BIAS}-V_{SS}-V_{TN})^2$, gives
$V_{TRP} = V_{DD}-|V_{TP}|-\sqrt{\dfrac{K'_N(W/L)_7}{K'_P(W/L)_6}}\,(V_{BIAS}-V_{SS}-V_{TN})$.
- Nominal: $4-0.7-\sqrt{22}\,(0.3) = 3.3-1.407 = 1.89$ V.
- Maximum: $V_{DD} = 4.4$, $|V_{TP}| = 0.63$, $K'_N = 99$, $K'_P = 55$, $V_{BIAS} = 0.9$, $V_{TN} = 0.77$: $4.4-0.63-\sqrt{18}\,(0.13) = 3.22$ V.
- Minimum: $V_{DD} = 3.6$, $|V_{TP}| = 0.77$, $K'_N = 121$, $K'_P = 45$, $V_{BIAS} = 1.1$, $V_{TN} = 0.63$: $3.6-0.77-\sqrt{26.9}\,(0.47) = 0.39$ V.
- The trip point is very sensitive to $V_{BIAS}-V_{TN}$ (only 0.3 V nominal, multiplied by $\sqrt{22} \approx 4.7$).

## Grading notes

+2: correct trip-voltage expression, nominal ≈ 1.89 V, and both worst-case values within ±0.05 V (3.22 V and 0.39 V) with the parameter directions stated. +1: nominal right and one worst case right, or both worst cases with a small slip. 0: nominal right but worst cases wrong in direction for one parameter. −2 (asserted as fact): the sizes or $K'$ swapped between the devices (e.g., giving ≈ 3.16 V), the square root omitted, or $V_{BIAS}$ treated as the gate-source voltage of M6.
