# Golden Solution - R618

## Reference answer

$W_{min} \approx 40.5\ \mu$m for 2 mV, versus ≈ 6.5 μm for 5 mV: 6.25 times wider ($W \propto 1/V_{OS}^2$), with 6.25 times the gate area and input capacitance.
- $\sqrt{WL} \ge 9/2 = 4.5\ \mu$m → $WL \ge 20.25\ \mu\mathrm{m^2}$ → $W \ge 40.5\ \mu$m ($W/L$ = 81).
- For 5 mV: $WL \ge 3.24\ \mu\mathrm{m^2}$ → $W \ge 6.48\ \mu$m.

## Grading notes

+2: ≈ 40.5 μm (±3%) and the comparison: 6.25× the width of the 5-mV design (≈ 6.5 μm), i.e., $W \propto 1/V_{OS}^2$ (a note on the larger capacitance is a plus, not required). +1: correct width with the comparison only qualitative. 0: one of the two widths wrong by a slip. -2 (asserted as fact): $W \propto 1/V_{OS}$ (2.5×), a units reading giving sub-micron widths, or the comparison reversed.
