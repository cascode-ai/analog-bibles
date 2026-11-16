# Golden Solution - R006

## Reference answer

$M_1$ (gate and drain at $V_{DD}$, source at $V_X$) is saturated throughout; $I_X$ falls monotonically, roughly quadratically, and $g_m$ falls almost linearly.
- $I_X = \tfrac12\beta(3 - V_X - V_{TH})^2$ with $V_{SB} = V_X$, $V_{TH} = 0.7 + 0.45(\sqrt{0.9+V_X} - \sqrt{0.9})$.
- Values (β in A/V², $I_X$ in A): $V_X$ = 0: $V_{TH}$ = 0.70 V, $I_X$ = 2.65β (overdrive 2.3 V); 0.5 V: 0.81 V, 1.44β; 1.0 V: 0.89 V, 0.61β; 1.5 V: 0.97 V, 0.14β (overdrive 0.53 V).
- $g_m = \beta(3 - V_X - V_{TH})$: from 2.3β at $V_X = 0$ to 0.53β at 1.5 V, slope magnitude $1 + dV_{TH}/dV_X$ ≈ 1.24 → 1.15, i.e. it falls faster than without body effect.
- $M_1$ would turn off only at $V_X$ ≈ 1.97 V (2.3 V without body effect), outside the range.

## Grading notes

+2: saturation throughout, $I_X$ decreasing (square-law) to about 0.14β at 1.5 V, body effect included ($V_{TH}$ rising to ≈ 0.97 V), $g_m$ decreasing nearly linearly from 2.3β to ≈ 0.53β; values within ±10%. +1: body effect neglected (giving $I_X$ ≈ 0.32β and $g_m$ ≈ 0.8β at 1.5 V) with an otherwise correct analysis, or correct shapes without numbers. 0: right method with a slip that changes the curves noticeably. -2 (asserted as fact): $M_1$ claimed to be in triode, $I_X$ increasing with $V_X$, $g_m$ constant, or the source/drain misidentified.
