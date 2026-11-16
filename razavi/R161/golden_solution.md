# Golden Solution - R161

## Reference answer

$G_m \approx 2.57$ mS (99.4% of its equilibrium value $\sqrt{\beta I_{SS}} = 2.59$ mS), versus 3.61 mS (equilibrium 3.66 mS) for $W/L = 50/0.5$: about $1/\sqrt2$ times smaller, but it degrades less at the same input (smaller normalized input $\Delta V/V_{ov} = 0.129$ instead of 0.183).
- $G_m = \tfrac12\beta\,(4I_{SS}/\beta - 2\Delta V^2)/\sqrt{4I_{SS}/\beta - \Delta V^2} = 3.35\ \mathrm{mS}\times(0.597 - 0.005)/\sqrt{0.5945} = 2.57$ mS.

## Grading notes

+2: $G_m$ evaluated at $\Delta V = 50$ mV, ≈ 2.57 mS (±0.5%; the equilibrium value is only 0.6% higher, so the value must come from the large-signal expression), and the comparison with ≈ 3.61 mS for 50/0.5 (ratio ≈ √2). Noting the smaller relative drop of the narrower pair (0.6% vs 1.3%), either explicitly or by listing both equilibrium values 2.59 and 3.66 mS, is a plus but not required. +1: equilibrium values $\sqrt{\beta I_{SS}}$ (2.59 and 3.66 mS) given as the answer with the comparison, or the comparison missing. 0: one case right only (an error confined to the 50/0.5 comparison case is 0). -2 (asserted as fact): a formula error that makes the 25/0.5 value wrong (e.g., single-device $g_m$ at 1 mA, or $G_m$ claimed larger for the narrower pair).
