# Golden Solution - A325

## Reference answer

Input pole ≈ $-2.9\times10^9$ rad/s (≈ −460 MHz); output pole ≈ $-(1+A_o)/(R_2C_o)$ ≈ $-30\times10^6$ rad/s (≈ 4.7 MHz). The input pole is about 100 times higher than the output pole (still about 9 times higher than the intended 50 MHz), so the output pole remains dominant; but it is not above the intended GB of 500 MHz, so it would limit the achievable GB.

- Current-amplifier input resistance: $g_{m1} = \sqrt{2(110\ \mu)(200)(1\ \mathrm{m})} = 6.63$ mS; $r_i = R_3 + 1/g_{m1} = 300 + 151 = 451\ \Omega$ (M3 is transparent: its gate is at the input node). With $R_1$ to the (grounded) input source and $R_2$ to the low-impedance output at this frequency: $R_N = 451\|3200\|352\mathrm{k} \approx 395\ \Omega$.
- Capacitance at the node: $C_{gs3} = 220\mathrm{p}(200\mu) + 0.67(24.7\times10^{-4})(200\times10^{-12}) = 44 + 331 = 375$ fF; $C_{gs4} = 4.4 + 33.1 = 37.5$ fF; $C_{gd3} = 44$ fF; $C_{gd4} = 4.4$ fF; M5 drain: $C_{gd5} = 44$ fF, $C_{bd5} = 560\mu(400\times10^{-12}) + 350\mathrm{p}(404\mu) = 224 + 141 = 365$ fF. Total $C_N \approx 870$ fF.
- $|p_{in}| = 1/(R_NC_N) = 1/(395\times870\ \mathrm{fF}) = 2.91\times10^9$ rad/s (463 MHz); with $r_i$ alone, 2.55×10⁹ rad/s (406 MHz).
- Output pole: $1/(R_2C_o) = 1/(352\ \mathrm{k}\times105\ \mathrm{fF}) = 27\times10^6$ rad/s; in the closed-loop amplifier it becomes $(1+A_o)/(R_2C_o) = 29.8\times10^6$ rad/s (4.7 MHz).

## Grading notes

+2: input pole ≈ 2.5–3.0×10⁹ rad/s (400–470 MHz) from $r_i = R_3 + 1/g_{m1}$ (optionally in parallel with $R_1$) and a node capacitance of ≈ 0.8–0.9 pF dominated by $C_{gs3}$ and the M5 drain junction; output pole from $R_2C_o$ (4.3–4.7 MHz) or compared with the 50 MHz design target; conclusion that $|p_{in}| \gg |p_{out}|$ (output pole dominant) while $p_{in}$ is near the intended 500 MHz GB. +1: right input pole with the comparison only qualitative, or the output pole computed without the $(1+A_o)$ factor. 0: input pole off by more than ~1.5× through a missing major capacitance (e.g., $C_{bd5}$ or $C_{gs3}$) but with the right method. −2 (asserted as fact): input resistance taken as $R_3$ alone or $1/g_{m1}$ alone with a large capacitance error giving a pole off by > 3×, or the conclusion that the input pole is dominant.
