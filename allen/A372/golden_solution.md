# Golden Solution - A372

## Reference answer

$t_p = 0.5\ \mu$s (500 ns); the response is slew-rate limited.
- Resolution $V_{in}(\min) = 1\ \mathrm{V}/10^4 = 0.1$ mV, so $k = 10\ \mathrm{mV}/0.1\ \mathrm{mV} = 100$.
- Linear (single-pole) estimate: $t_p = \tau_c\ln\dfrac{2k}{2k-1} = 10\ \mu\mathrm{s}\times\ln(200/199) = 50.1$ ns.
- But the linear response would start with slope $A_v(0)V_{in}\,\omega_c = 100\ \mathrm{V}\times10^5\ \mathrm{s^{-1}} = 10$ V/µs > SR = 1 V/µs, so the output slews: $t_p = \dfrac{V_{OH}-V_{OL}}{2\,SR} = \dfrac{1\ \mathrm{V}}{2\times1\ \mathrm{V/\mu s}} = 0.5\ \mu$s. The larger (slew-limited) value applies.

## Grading notes

+2: $t_p = 0.5\ \mu$s with the reason that the comparator slews (linear slope 10 V/µs or linear delay 50 ns compared with the slew limit). +1: 0.5 µs stated with a weak or missing justification of why slewing governs. 0: both values computed correctly but the wrong one selected with a hedge. −2 (asserted as fact): 50 ns given as the answer (slewing ignored), 5.01 µs (pole of $10^3$ rad/s used), or 1 µs (full swing instead of half swing).
