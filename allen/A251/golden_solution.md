# Golden Solution - A251

## Reference answer

$\Phi_M = 180° - \arctan\dfrac{GB}{|p_1|} - \arctan\dfrac{GB}{|p_2|} - \arctan\dfrac{GB}{|p_3|}$, with $\arctan(GB/|p_1|) = \arctan A_v(0) \approx 90°$ and $\arctan(0.1) = 5.71°$:

$60° = 90° - \arctan(GB/|p_2|) - 5.71°$ → $\arctan(GB/|p_2|) = 24.29°$ → $GB/|p_2| = 0.451$ → $|p_2| = 2.22\,GB$; larger $|p_2|$ only increases the margin, so $|p_2| \ge 2.2\,GB$.

## Grading notes

+2: correct phase sum and $|p_2| \approx 2.2\,GB$ (2.2–2.22). +1: correct result without the "at least" argument. 0: method right with an arithmetic slip. −2 (asserted as fact): the third pole's contribution omitted (gives 1.73 GB) presented as the proof, or contributions added as phase lead.
