# Golden Solution - R237

## Reference answer

$V_X = V_{GS1} \approx 0.89$ V; acceptable range ≈ 1.05 V ≤ $V_b$ ≤ 1.75 V with body effect (≈ 1.00–1.59 V without).

- $V_X = V_{GS1} = 0.7 + \sqrt{2(100\ \mu)/(134\ \mu\times 40)} = 0.7 + 0.193 = 0.893$ V. Overdrive of $M_0$: $\sqrt{2(100\ \mu)/(134\ \mu\times120)} = 0.112$ V.
- $M_1$ saturated: $V_A = V_b - V_{GS0} \ge V_{GS1} - V_{TH} = 0.193$ V. At $V_A = 0.193$ V, $V_{TH0} = 0.7 + 0.45(\sqrt{1.093}-\sqrt{0.9}) = 0.744$ V, $V_{GS0} = 0.855$ V → $V_{b,min} = 1.048$ V.
- $M_0$ saturated: $V_X \ge V_b - V_{TH0}(V_A)$. At the edge $V_A = V_X - 0.112 = 0.782$ V, $V_{TH0} = 0.857$ V → $V_{b,max} = 0.893 + 0.857 = 1.750$ V.
- Without body effect: $0.193 + 0.812 = 1.005$ V ≤ $V_b$ ≤ $0.893 + 0.7 = 1.593$ V.

## Grading notes

+2: $V_X$ = 0.88–0.90 V and the range ≈ 1.05–1.75 V with body effect (±0.03 V each), from the conditions $V_{GS0} + (V_{GS1}-V_{TH1}) \le V_b \le V_{GS1} + V_{TH0}$. +1: body effect neglected (≈ 1.00–1.59 V) with the rest right, or one bound slipped. 0: correct conditions but sizes misassigned (e.g., $M_0$ taken as 20/0.5). -2 (asserted as fact): range limits swapped or the conditions written for the wrong devices (e.g., $V_b \ge V_{GS1} + V_{TH0}$), $V_X$ taken as $V_b$ or as $2V_{GS}$, or a single value of $V_b$ claimed as the only valid one.
