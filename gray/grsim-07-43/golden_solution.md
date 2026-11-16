# Golden Solution - grsim-07-43

## Reference answer

$g_m = \sqrt{2(180\ \mu)(40)(100\ \mu)} = 1.2$ mA/V, $r_o = 1/(0.04\times100\ \mu) = 250\ \mathrm{k\Omega}$ for both.

(a) Zero-value: $C_L$ sees the cascode output resistance $r_{o2} + r_{o1} + g_{m2}r_{o2}r_{o1} = 75.5$ MΩ → 151 µs; $C_p$ sees $r_{o1}$ (the source of $M_2$ looks like an open circuit when the output is open) → 50 ns. $T_0 = 151.05\ \mu$s → $|p_1| \approx 6.6\times10^3$ rad/s (1.05 kHz). (DC gain $-g_{m1}R_{\text{out}} \approx -9.0\times10^4$.)

(b) Short-circuit: with $C_L$ shorted, $C_p$ sees $r_{o1}\|r_{o2}/(1 + g_{m2}r_{o2}) = 250\ \mathrm{k}\|831 = 828\ \Omega$ → 0.166 ns; with $C_p$ shorted, $C_L$ sees $r_{o2} = 250\ \mathrm{k\Omega}$ → 0.5 µs. $|p_2| \approx 1/0.166\ \mathrm{ns} + 1/0.5\ \mu\mathrm{s} = 6.04\times10^9$ rad/s (962 MHz).

(c) An exact (simulated) solution of this two-pole circuit gives $p_1 = -6.62\times10^3$ rad/s and $p_2 = -6.04\times10^9$ rad/s, essentially identical to the estimates because the poles are separated by ≈ 10⁶.

## Grading notes

Hand parts: +2 needs (a) ≈ 6.6×10³ rad/s (≈ 1.05 kHz, ±5%) using the full cascode output resistance, and (b) ≈ 6.0×10⁹ rad/s (≈ 0.96 GHz, ±5%). A correct simulation reproduces both within a few percent. −2 (asserted as fact): $C_L$'s resistance taken as $r_o$ or $1/g_m$ (dominant pole off by orders of magnitude), $C_p$ in (b) seeing $r_{o1}$ (≈ 20 MHz), or the poles reported as complex.
