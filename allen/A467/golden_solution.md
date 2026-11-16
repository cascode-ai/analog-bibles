# Golden Solution - A467

## Reference answer

With $x = \frac14 + \delta$, $|\delta| \le \frac{1}{24}$: INL $= 3(4x-1)$ at worst and DNL $= 4x - 1$ or $-3(4x - 1)$, so $|INL| \le 0.5$ LSB and $|DNL| \le 0.5$ LSB, with equality at the ends $x = 5/24$ and $x = 7/24$.

Derivation (1 LSB $= V_{REF}/16$; code $= 4m + n$, $m = 2b_0 + b_1$, $n = 2b_2 + b_3$):
- Output $= 4m + 16x\cdot\frac{n}{4} = 4m + 4xn$ LSB; ideal $4m + n$.
- INL $= (4x - 1)n$; $|4x - 1| \le 4/24 = 1/6$ and $n \le 3$ → $|INL| \le 0.5$ LSB ($x = 7/24$: 0 … +0.5; $x = 5/24$: 0 … −0.5).
- In-group steps: $4x$ LSB → DNL $= 4x - 1 \in [-1/6, +1/6]$.
- Group transitions ($n$: 3 → 0, $m$ → $m+1$): step $= 4 - 12x$ → DNL $= 3 - 12x = -3(4x - 1) \in [-0.5, +0.5]$ ($x = 7/24$: −0.5; $x = 5/24$: +0.5).
- Hence INL and DNL are both within ±0.5 LSB over the whole tolerance range.

## Grading notes

+2: shows both INL and DNL bounded by ±0.5 LSB over the whole range (either symbolically as above or by tabulating both extreme values $x = 5/24$ and $7/24$, noting that the errors are linear in $x$), identifying the group transition as the worst DNL. +1: correct conclusion with only one extreme checked, or DNL checked only inside groups while the INL is fully shown. 0: INL shown correctly but the DNL not addressed. −2 (asserted as fact): a claim that the DNL reaches ±1 LSB or more in this range, or a wrong output model (e.g. $x$ applied to the MSB subDAC).
