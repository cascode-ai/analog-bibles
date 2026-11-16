# Golden Solution - A475

## Reference answer

$|\Delta C_x/C_x| \le$ about 5.25% (≈ ±5%).

Derivation (1 LSB $= V_{REF}/64$; $A = 4b_0 + 2b_1 + b_2$, $B = 4b_3 + 2b_4 + b_5$, $\varepsilon = \Delta C_x/C_x$):
- $v_{OUT}/\text{LSB} = (1 - 0.17\varepsilon)[8A + (1 + 0.8\varepsilon)B]$; ideal $8A + B$.
- Error $\approx \varepsilon(-1.36A + 0.63B)$ LSB (first order; the $\varepsilon^2$ term is negligible).
- Worst case: $A = 7$, $B = 0$ (code 111000): $|{\rm error}| = 9.52|\varepsilon|$ (the B term can only reduce it, at most $4.41|\varepsilon|$ alone).
- $9.52|\varepsilon| \le 0.5$ → $|\varepsilon| \le 0.0525$, i.e. $C_x$ must be accurate to about ±5.25%. (An exact check over all 64 codes gives the same limit, 5.252% for either sign.)

## Grading notes

+2: ±5.2–5.3% (or "about ±5%") with the worst-case code identified as the three MSBs = 1 and LSBs = 0 (or an equivalent exhaustive check). A dropped symbol in one line that the following steps do not carry (e.g. ε missing from one term while the tolerance inequality uses it) is trivial and does not lower +2. +1: right method with a minor arithmetic slip that leaves the tolerance close to ±5.25%. 0: correct error expression without a final tolerance, the right worst case with an arithmetic slip that changes the final tolerance noticeably, or a different but stated tolerance criterion (e.g. 1 LSB, giving ≈ ±10.5%). −2 (asserted as fact): ±1.685% or another value not supported by the given expression, a result that ignores the gain factor $(1 - 0.17\varepsilon)$, or the worst case taken as all bits = 1 (≈ ±9.8%: at that code the two error terms partly cancel, and with that tolerance code 111000 errs by ≈ 0.93 LSB); finding the worst-case code is the point of the question.
