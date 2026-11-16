# Golden Solution - R213

## Reference answer

$|A_v| = g_{m1}(r_{O1}\|r_{O3}) \approx 24.4$.
- $g_{m1} = \sqrt{2(134\ \mu\times100)(0.5\ \mathrm{mA})} = 3.66$ mS.
- $r_{O1} = 1/(0.1\times0.5\ \mathrm{mA}) = 20$ kΩ, $r_{O3} = 1/(0.2\times0.5\ \mathrm{mA}) = 10$ kΩ, $r_{O1}\|r_{O3} = 6.67$ kΩ; gain $3.66\ \mathrm{mS}\times6.67\ \mathrm{k\Omega} = 24.4$.

## Grading notes

+2: 24.4 (±5%; small differences from including $1 + \lambda V_{DS}$ are fine). +1: one $r_O$ value slipped (result within ±25%). 0: correct formula, gross arithmetic error. -2 (asserted as fact): gain $g_{m1}/g_{m3}$ (diode formula), $r_O$ computed with the full 1 mA, or the single-ended half of the gain given as the differential gain with the wrong formula.
