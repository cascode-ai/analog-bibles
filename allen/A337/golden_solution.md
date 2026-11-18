# Golden Solution - A337

## Reference answer

$A_{vd} = g_{mN}(r_{dsN}\|r_{dsP})\cdot(g_{mN} + g_{mP})(r_{dsN}\|r_{dsP}) \approx 73.7\times123.4 \approx 9.1\times10^3$ V/V.

- $g_{mN} = 331.7\ \mu$S, $g_{mP} = 223.6\ \mu$S, $r_{dsN}\|r_{dsP} = 500\ \mathrm{k}\|400\ \mathrm{k} = 222.2$ kΩ.
- First stage: $g_{mN}(r_{dsN}\|r_{dsP}) = 73.7$.
- Output inverters: both devices are driven by the same gate, so the transconductance is $g_{mN} + g_{mP} = 555.3\ \mu$S and the gain $555.3\ \mu\times222.2\ \mathrm{k} = 123.4$.
- $A_{vd} = 73.7\times123.4 = 9094$ V/V (≈ 79.2 dB), about 2.5 times the ≈ 3.66×10³ V/V of circuit (a) in the same textbook problem (7.3-3(b)) because the push–pull inverter adds both transconductances.

## Grading notes

+2: 8.7–9.5×10³ V/V with the inverter transconductance $g_{mN} + g_{mP}$. +1: right structure with a slip of ≤ 15%. 0: inverter treated as a single common-source device (≈ 3.7×10³ or 5.4×10³) with otherwise correct numbers. −2 (asserted as fact): a gain from a misread topology (e.g., inverters treated as followers with gain ≈ 1), or a value off by orders of magnitude from formula errors.
