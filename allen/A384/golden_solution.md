# Golden Solution - A384

## Reference answer

$t_p = 0.100\ \mu$s (slew-rate limited).
- $k = 10\ \mathrm{mV}/0.1\ \mathrm{mV} = 100$; the linear estimate would be $10\ \mu\mathrm{s}\times\ln(200/199) = 50.1$ ns.
- But the linear response would start with slope $A_vV_{in}\omega_c = 100\ \mathrm{V}\times10^5\ \mathrm{s^{-1}} = 10$ V/µs > 5 V/µs, and over the first half-swing it stays above SR, so the output slews: $t_p = 0.5\ \mathrm{V}/(5\ \mathrm{V/\mu s}) = 0.1\ \mu$s.

## Grading notes

+2: 0.1 µs with the reason (linear slope ≈ 10 V/µs exceeds 5 V/µs). +1: 0.1 µs with a weak justification. 0: both the linear (50 ns) and slew (100 ns) values computed but the choice left open. −2 (asserted as fact): 50 ns given as the answer, or 0.2 µs (full swing).
