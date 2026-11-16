# Golden Solution - A389

## Reference answer

$p_1 = -1/(R_{out}C_L) = -26.9\times10^3$ rad/s (4.28 kHz); the response is linear (maximum slope ≈ 0.99 V/µs ≪ SR = 20 V/µs); $t_p \approx 0.77\ \mu$s.
- $|p_1| = 1/(7.44\ \mathrm{M\Omega}\times5\ \mathrm{pF}) = 26.9$ krad/s, $\tau = 37.2\ \mu$s.
- Slew rate: when the input pair is fully switched the output current is $I_3 = 100\ \mu$A (e.g. M7 branch $I_5 - I_3 = 25\ \mu$A against a mirrored 125 µA), so $SR = 100\ \mu\mathrm{A}/5\ \mathrm{pF} = 20$ V/µs (this assumes the usual single-ended folded cascode with a 1:1 cascode mirror load; any other reasonable reading gives at least $I_5 - I_3 = 25\ \mu$A of drive, ≥ 5 V/µs, so the conclusion is the same).
- Linear slope: $A_v(0)V_{in}|p_1| = 3678\times0.01\times26.9\times10^3 = 0.99$ V/µs < 20 V/µs → linear (no slewing).
- $V_{in}(\min) = 1.5\ \mathrm{V}/3678 = 0.408$ mV, $k = 24.5$; $t_p = \tau\ln\dfrac{2k}{2k-1} = 37.2\ \mu\mathrm{s}\times0.0206 = 0.77\ \mu$s (≈ 0.75 V / 0.99 V/µs).

## Grading notes

+2: pole ≈ 26.9 krad/s (or 4.3 kHz), the required slope ≈ 1 V/µs (or the required current ≈ 4.9 µA) compared quantitatively with the available slew rate → linear (SR = 20 V/µs expected; a stated conservative bound such as 25 µA → 5 V/µs, not asserted as the actual SR, is also accepted), and $t_p$ ≈ 0.75–0.8 µs. +1: one of the three results off by a slip, or the linear/slewing decision right without the numbers. 0: pole and decision right but $t_p$ computed with the wrong swing or formula. −2 (asserted as fact): response declared slewing, pole computed as $g_m/C_L$, SR taken as $I_4/C_L$ or $(I_4+I_5)/C_L$ with a conclusion that changes, or $t_p = \tau\ln 2$ (25.8 µs).
