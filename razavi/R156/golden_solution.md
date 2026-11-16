# Golden Solution - R156

## Reference answer

$I_{D1} \approx 0.591$ mA and $I_{D2} \approx 0.409$ mA ($I_{D1} - I_{D2} \approx 0.182$ mA).
- Large-signal relation: $I_{D1} - I_{D2} = \tfrac12\beta\,\Delta V_{in}\sqrt{4I_{SS}/\beta - \Delta V_{in}^2}$ with $\beta = \mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$.
- $4I_{SS}/\beta = 0.2985\ \mathrm{V^2}$, $\Delta V_{in}^2 = 0.0025\ \mathrm{V^2}$: $I_{D1} - I_{D2} = 6.7\ \mathrm{mA/V^2}\times 0.05\times\sqrt{0.2960} = 0.182$ mA; with $I_{D1} + I_{D2} = 1$ mA this gives 0.591 mA and 0.409 mA.
- (The small-signal estimate $G_m\Delta V_{in} = 3.66\ \mathrm{mS}\times 50\ \mathrm{mV} = 0.183$ mA is almost the same.)

## Grading notes

+2: 0.59 mA / 0.41 mA (±2%), from the square-law large-signal relation or an equivalent exact solution. +1: the small-signal linear estimate (0.592/0.408 mA) presented as the answer, or a slip within ±5%. 0: correct method, wrong numbers. -2 (asserted as fact): treating "50 mV" as fully steering the current, a split from a wrong formula (e.g., $\Delta I = \beta\Delta V^2$), or currents not summing to 1 mA.
