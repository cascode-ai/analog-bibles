# Golden Solution - A388

## Reference answer

$t_p \approx 40$ ns.
- With a large input, all 100 µA flows through M1 (into M3) or through M2 (into M4).
- Sourcing: M4 carries 100 µA and M6 mirrors it ×5 → 500 µA into $C_L$ (M7 off since M3/M8 carry nothing). Sinking: M3 carries 100 µA, M8 mirrors ×5 → 500 µA into M9, and M7 (= M9) sinks 500 µA (M6 off).
- $SR = 500\ \mu\mathrm{A}/10\ \mathrm{pF} = 50$ V/µs in both directions.
- Output swing ±2 V, so the half swing is 2 V: $t_p = \dfrac{V_{OH}-V_{OL}}{2\,SR} = \dfrac{4\ \mathrm{V}}{2\times50\ \mathrm{V/\mu s}} = 40$ ns (same for both edges).

## Grading notes

+2: 500 µA push–pull output current, SR = 50 V/µs, and $t_p$ ≈ 40 ns. +1: correct current and SR, with the delay computed for a stated different swing convention (e.g., to the full rail-to-rail swing → 80 ns, or 20 ns from an explicitly assumed 2 V total swing). 0: correct large-signal mirror reasoning (the full tail current steered to one side) but an arithmetic slip in the current or the delay. −2 (asserted as fact): output current taken as 100 µA (200 ns), as the quiescent 250 µA (5 × 50 µA, giving 25 V/µs and 80 ns; this is a model error, not a slip), or as 1 mA, or a Class-A fixed-sink behaviour assumed.
