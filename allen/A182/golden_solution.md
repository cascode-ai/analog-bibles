# Golden Solution - A182

## Reference answer

$R_{out} \approx 8.8$ MΩ and $A_v \approx -4.1\times10^3$ V/V (exact nodal analysis: 9.1 MΩ and −4.2×10³ V/V).

- The output branch M4–M3–M2–M1 carries 100 µA (M8–M7 mirror the 100-µA reference into M4–M3; M5–M6 bias the gate of the cascode M2).
- $g_{mN}$ = $\sqrt{2\cdot110\cdot10\cdot100}$ µS = 469 µS, $g_{mP}$ = 316 µS, $r_{dsN}$ = 250 kΩ, $r_{dsP}$ = 200 kΩ.
- Looking up into the cascoded p-channel source M3–M4: $g_{m3}r_{ds3}r_{ds4}$ ≈ 316 µS × 200 kΩ × 200 kΩ = 12.6 MΩ. Looking down into the cascode M2–M1: $g_{m2}r_{ds2}r_{ds1}$ ≈ 469 µS × 250 kΩ × 250 kΩ = 29.3 MΩ.
- $R_{out}$ = 12.6 MΩ ∥ 29.3 MΩ = 8.84 MΩ (9.08 MΩ when the $r_{ds}$ terms $r_{ds1}+r_{ds2}$, $r_{ds3}+r_{ds4}$ are kept).
- $A_v \approx -g_{m1}R_{out}$ = −469 µS × 8.84 MΩ ≈ −4.1×10³ V/V (exact: −4.2×10³ V/V).

## Grading notes

+2: both cascoded output resistances, $R_{out}$ in 8.5–9.3 MΩ, and $A_v$ between −3.9×10³ and −4.4×10³ V/V. +1: correct method with one numerical slip, or $R_{out}$ right and the gain off by a minor factor. 0: correct expressions without numbers, or only one quantity. −2 (asserted as fact): $R_{out}$ taken as a single $r_{ds}$ or as only one of the two cascode resistances, a gain of order −40 V/V, or the cascode treated as reducing the gain.
