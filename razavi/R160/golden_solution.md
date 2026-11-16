# Golden Solution - R160

## Reference answer

$I_{D1} \approx 0.565$ mA, $I_{D2} \approx 0.435$ mA ($\Delta I_D = 0.129$ mA), versus 0.591/0.409 mA ($\Delta I_D = 0.182$ mA) for $W/L = 50/0.5$: the narrower pair is less sensitive (lower $G_m$) and more linear.
- $\beta = 6.7\ \mathrm{mA/V^2}$, $4I_{SS}/\beta = 0.597\ \mathrm{V^2}$: $\Delta I_D = \tfrac12(6.7\ \mathrm{m})(0.05)\sqrt{0.597 - 0.0025} = 0.129$ mA.
- For 50/0.5: $\Delta I_D = \tfrac12(13.4\ \mathrm{m})(0.05)\sqrt{0.2985 - 0.0025} = 0.182$ mA. The ratio is ≈ $1/\sqrt2$, as for $G_m$.

## Grading notes

+2: 0.565/0.435 mA (±2%) and the comparison with 0.591/0.409 mA (smaller imbalance, about 1/√2), whether obtained from the exact square-law formula or from the small-signal estimate $G_m\Delta V$ (they differ by < 0.3% here). A notational slip that does not enter the result (e.g., an overdrive written as $V_{in} - V_{TH}$ without the common-source voltage when only the difference of overdrives is used) does not cost credit. +1: comparison missing. 0: one of the two cases right (an error confined to the 50/0.5 comparison case, with the 25/0.5 sharing right, is 0). -2 (asserted as fact): currents not summing to 1 mA, or a formula error that makes the 25/0.5 sharing wrong (e.g., the narrower devices giving the larger imbalance).
