# Golden Solution - R164

## Reference answer

$I_{D1} \approx 1.129$ mA, $I_{D2} \approx 0.871$ mA ($\Delta I_D = 0.258$ mA), versus 0.591/0.409 mA ($\Delta I_D = 0.182$ mA) at 1 mA: the current difference grows by ≈ √2 (higher $G_m$), while the fractional imbalance $\Delta I_D/I_{SS}$ falls from 18% to 13% (more linear).
- $4I_{SS}/\beta = 0.597\ \mathrm{V^2}$: $\Delta I_D = \tfrac12(13.4\ \mathrm{m})(0.05)\sqrt{0.597 - 0.0025} = 0.258$ mA.

## Grading notes

+2: 1.13/0.87 mA (±2%) and the comparison (larger absolute, smaller relative imbalance). The small-signal estimate $G_m\Delta V$ gives 1.129/0.871 mA here, within 0.3% of the exact result, and is accepted. +1: values right but comparison missing. 0: one case right (an error confined to the 1-mA comparison case, with the 2-mA sharing right, is 0). -2 (asserted as fact): currents not summing to 2 mA, or a formula error that makes the 2-mA sharing wrong (e.g., a smaller absolute difference than at 1 mA).
