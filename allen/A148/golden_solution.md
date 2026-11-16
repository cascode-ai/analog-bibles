# Golden Solution - A148

## Reference answer

$V_{IC}(\max) \approx 2.28$ V, $V_{IC}(\min) \approx 1.31$ V, worst-case ICMR ≈ 0.98 V.

- $V_{IC}(\max) = V_{DD} - V_{SD5}(\mathrm{sat}) - V_{SG1}$. Worst (lowest) case: $V_{DD} = 4$ V, $|V_{TP}| = 0.85$ V, $K'_P = 45\ \mu\mathrm{A/V^2}$, M1 at 50 µA: $V_{SG1} = 0.85 + \sqrt{2 \cdot 50\ \mu/(45\ \mu \cdot 5)} = 0.85 + 0.667 = 1.517$ V, so $V_{IC}(\max) = 4 - 0.2 - 1.517 = 2.283$ V.
- $V_{IC}(\min) = V_{SS} + V_{GS3} - |V_{TP1}|$. Worst (highest) case: $V_{TN} = 0.85$ V, $K'_N = 99\ \mu\mathrm{A/V^2}$, $|V_{TP1}| = 0.55$ V: $V_{GS3} = 0.85 + \sqrt{2 \cdot 50\ \mu/(99\ \mu \cdot 1)} = 0.85 + 1.005 = 1.855$ V, so $V_{IC}(\min) = 1.855 - 0.55 = 1.305$ V.
- ICMR(worst) = 2.283 − 1.305 = 0.978 V, wider than the 0.71 V of the n-channel-input version under the same assumptions. For reference, nominal values with $V_{DD} = 5$ V give $V_{IC}(\max) = 3.47$ V and $V_{IC}(\min) = 0.95$ V.

## Grading notes

+2: $V_{IC}(\max)$ ≈ 2.28 V, $V_{IC}(\min)$ ≈ 1.31 V, ICMR ≈ 0.98 V (±0.02 V), each limit using its own worst-case corner ($V_{DD} = 4$ V, high $|V_{TP}|$, low $K'_P$ for the maximum; high $V_{TN}$, low $K'_N$, low $|V_{TP1}|$ for the minimum). +1: one corner choice wrong in a way that changes one limit by ≤ 0.15 V, or a slip. 0: $V_{DD} = 5$ V used for the maximum (3.28 V, ICMR 1.98 V) with everything else right, or nominal values throughout. −2 (asserted as fact): the n-channel-input formulas used ($V_{DD} - V_{SG3} + V_{TN1}$), $V_{IC}(\min)$ without the $-|V_{TP1}|$ term, or the worst case taken as the most favourable corner.
