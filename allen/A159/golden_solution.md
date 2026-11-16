# Golden Solution - A159

## Reference answer

$f_{-3\,\mathrm{dB}} \approx 143$ kHz.

- M2 and M4 carry 50 µA each and M7 carries 100 µA, so the output conductance is $g_{ds2} + g_{ds4} + g_{ds7} = 2 + 2 + 5 = 9\ \mu$S ($R_{out} = 111$ kΩ).
- With device capacitances neglected, the only pole is at the output: $f_{-3\,\mathrm{dB}} = 9\ \mu\mathrm{S}/(2\pi \cdot 10\ \mathrm{pF}) = 143$ kHz.

## Grading notes

+2: 138–148 kHz. +1: a slip in one conductance (within ±15 %). 0: one output conductance omitted (≈ 111 kHz, the book's value). −2 (asserted as fact): $R_{out}$ taken as $1/g_m$ or a cascode value (giving MHz or Hz-range results), the pole placed at the M3 diode node, or rad/s reported as Hz (0.9 "MHz").
