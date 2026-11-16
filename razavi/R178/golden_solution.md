# Golden Solution - R178

## Reference answer

$|A_v| = g_{m1}/g_{m3} \approx 4.2$ with λ = 0; ≈ 3.6 including channel-length modulation.
- $g_{m1} = \sqrt{2(134\ \mu\times100)(0.5\ \mathrm{mA})} = 3.66$ mS. $M_3$ carries $0.2 \times 0.5 = 0.1$ mA: $g_{m3} = \sqrt{2(38.4\ \mu\times100)(0.1\ \mathrm{mA})} = 0.876$ mS ($1/g_{m3} = 1.14$ kΩ).
- Half circuit: $|A_v| = g_{m1}(1/g_{m3}\|r_{O1}\|r_{O3}\|r_{O5})$ with $r_{O1} = 20$ kΩ, $r_{O3} = 1/(0.2\times0.1\ \mathrm{m}) = 50$ kΩ, $r_{O5} = 1/(0.2\times0.4\ \mathrm{m}) = 12.5$ kΩ: $3.66\ \mathrm{m}\times 0.974\ \mathrm{k} \approx 3.57$; with λ = 0, $g_{m1}/g_{m3} = 4.18$.
- (Without $M_5$, $M_6$, the same loads carrying 0.5 mA would give $g_{m1}/g_{m3} = 1.87$; reducing the load current to 20% raises the gain by √5 here, since the W/L is not reduced.)

## Grading notes

+2: 4.18 (λ = 0) or ≈ 3.5–3.6 (with $r_O$'s, including $r_{O5}$), ±5%, with $g_{m3}$ evaluated at 0.1 mA. +1: correct structure with one slip, or $r_{O5}$ omitted (≈ 3.9). 0: correct formula, gross numerical error. -2 (asserted as fact): $g_{m3}$ evaluated at 0.5 mA (gain ≈ 1.9), the gain claimed to be 5 times the plain diode-load gain without justification (≈ 9.3), or current sources treated as part of the diode.
