# Golden Solution - A250

## Reference answer

Phase margin with an RHP zero (which adds phase lag like an LHP pole):

$\Phi_M = 180° - \arctan\dfrac{GB}{|p_1|} - \arctan\dfrac{GB}{|p_2|} - \arctan\dfrac{GB}{z}$.

- $GB/|p_1| = A_v(0)$ is large, so the first term is ≈ 90°; $GB/z = 0.1$ gives 5.71°.
- $45° = 90° - \arctan(GB/|p_2|) - 5.71°$ → $\arctan(GB/|p_2|) = 39.29°$ → $GB/|p_2| = 0.818$ → $|p_2| = 1.22\,GB$.
- Since the margin increases monotonically with $|p_2|$, $|p_2| \ge 1.22\,GB$ is required.

## Grading notes

+2: correct phase expression with the RHP zero contributing lag, dominant pole ≈ 90°, and the result $|p_2| = 1.22\,GB$. +1: correct result with the "at least" (monotonicity) argument missing. 0: right method, arithmetic slip. −2 (asserted as fact): RHP zero treated as adding phase lead (gives $|p_2| \approx 0.86\,GB$), or the dominant pole ignored entirely.
