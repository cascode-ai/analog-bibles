# Golden Solution - A336

## Reference answer

$A_{vd} = v_{od}/v_{id} = +g_{m1}(r_{ds1}\|r_{ds3})\cdot g_{m6}(r_{ds6}\|r_{ds9}) \approx +73.7\times49.7 \approx +3.66\times10^3$ V/V (≈ 71.3 dB), non-inverting for the labelled polarities.

- $g_{mN} = \sqrt{2(110\ \mu)(10)(50\ \mu)} = 331.7\ \mu$S; $g_{mP} = \sqrt{2(50\ \mu)(10)(50\ \mu)} = 223.6\ \mu$S; $r_{dsN} = 1/(0.04\times50\ \mu) = 500$ kΩ; $r_{dsP} = 400$ kΩ; $r_{dsN}\|r_{dsP} = 222.2$ kΩ.
- First stage (n-pair, p current-source loads): differential gain $g_{mN}(r_{dsN}\|r_{dsP}) = 73.7$.
- Second stage (p-pair M6–M7, n current-sink loads; sources at ac ground for differential signals): $g_{mP}(r_{dsN}\|r_{dsP}) = 49.7$.
- $A_{vd} = (+)73.7\times49.7 = +3662$ V/V (≈ 71.3 dB). The sign is positive for the labelled polarities: $v_{out}^+$ is the M6/M9 drain and M6's gate is driven from the M1 drain ($v_{in}^+$ side), so each stage inverts once.

## Grading notes

+2: 3.5–3.8×10³ V/V from the product of the two stage gains with $g_{mN}$ in the first stage and $g_{mP}$ in the second, both loaded by $r_{dsN}\|r_{dsP}$; positive, or given as a magnitude. The sign is secondary: a correct magnitude (3.5–3.8×10³ V/V) with a negative sign caused by mis-assigning the output terminals is +1, not −2. +1: right structure with a slip in one $g_m$ or $r_{ds}$ (≤ 15% error). 0: right method with a factor-of-2 error from treating the output as single-ended (≈ 1.8×10³). −2 (asserted as fact): second stage taken as a mirror-loaded or single-transistor stage with a different structure, $g_m$ of the wrong polarity in a stage (e.g., $g_{mN}$ for M6–M7, giving ≈ 5.4×10³), or λ applied as a divisor.
