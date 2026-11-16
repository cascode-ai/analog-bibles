# Golden Solution - A383

## Reference answer

$t_p \approx 0.513\ \mu$s (linear response).
- $V_{in}(\min) = 1\ \mathrm{V}/10^4 = 0.1$ mV, $k = 10$.
- Linear response slope is at most $A_vV_{in}\omega_c = 10\ \mathrm{V}\times10^5\ \mathrm{s^{-1}} = 1$ V/µs < 5 V/µs, so no slewing.
- $t_p = \tau_c\ln\dfrac{2k}{2k-1} = 10\ \mu\mathrm{s}\times\ln(20/19) = 10\ \mu\mathrm{s}\times0.0513 = 0.513\ \mu$s.

## Grading notes

+2: 0.51 µs (±3 %) with the check that the response is linear (slope 1 V/µs < SR). +1: correct value without the slew check. 0: correct method with an arithmetic slip. −2 (asserted as fact): slewing assumed (0.1 µs), $\tau_c\ln 2$ used (6.9 µs) ignoring the overdrive, or the full swing used in place of half.
