# Golden Solution - A386

## Reference answer

$t_p \approx 125$ ns for both edges (slew limited).
- A 1 V differential input fully switches the 50 µA tail current (full switching needs only $\sqrt{2I_{SS}/\beta_1} = \sqrt{100/1100} = 0.30$ V).
- Each input transistor feeds a diode-connected PMOS (M3, M4). M4 is mirrored 1:10 by M6 (100/1 vs 10/1); M3 is mirrored 1:1 by M8 into the diode M9, which is mirrored 1:10 by M7. So the output sources 500 µA (M6, when M2 carries the 50 µA) or sinks 500 µA (M7, when M1 carries it): push–pull with $SR = 500\ \mu\mathrm{A}/25\ \mathrm{pF} = 20$ V/µs.
- The output swings between ≈ ±2.5 V; to reach the 0 V trip point it moves 2.5 V: $t_p = 25\ \mathrm{pF}\times2.5\ \mathrm{V}/500\ \mu\mathrm{A} = 125$ ns (same for rising and falling). Internal-node delays (diode-connected mirror nodes) are neglected: no internal capacitances are given, and the load slewing dominates. An answer that adds that the internal settling cannot be quantified from the data is not docked.

## Grading notes

+2: 125 ns (±10 %) with the 10:1 mirror currents (500 µA source and sink) identified. +1: correct currents and slew rate with the delay computed for a different but stated swing convention, or only one edge analysed. 0: correct topology reading with a wrong current ratio from a slip. −2 (asserted as fact): output current taken as 50 µA (1.25 µs), 1:1 mirrors assumed, the output treated as a Class-A stage with a fixed sink, or a full 5 V swing used (250 ns).
