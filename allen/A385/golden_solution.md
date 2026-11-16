# Golden Solution - A385

## Reference answer

$t_p = 0.100\ \mu$s (slew-rate limited).
- $k = 1000$; the linear delay would be only $10\ \mu\mathrm{s}\times\ln(2000/1999) = 5$ ns, with an initial slope of $1000\ \mathrm{V}\times10^5\ \mathrm{s^{-1}} = 100$ V/µs ≫ 5 V/µs.
- The output therefore slews over the whole half-swing: $t_p = 0.5\ \mathrm{V}/(5\ \mathrm{V/\mu s}) = 0.1\ \mu$s; more overdrive no longer helps.

## Grading notes

+2: 0.1 µs with the slewing argument. +1: right value, weak justification. 0: both values computed, choice left open. −2 (asserted as fact): 5 ns (linear) given as the answer, or 0.2 µs (full swing).
