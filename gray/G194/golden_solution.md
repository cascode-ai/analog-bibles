# Golden Solution - G194

## Reference answer

Input impedance (neglecting $C_\mu$): $z_i = \dfrac{z_\pi + r_b}{1 + g_mz_\pi}$, the same as the output impedance of an emitter follower driven from a source resistance $r_b$. Inductive equivalent circuit: $R_2$ in parallel with ($R_1$ in series with $L$):
- Simple formulas: $R_1 = 1/g_m + r_b/\beta_0 = 52 + 2 = 54\ \Omega$, $R_2 = r_b = 200\ \Omega$, $L = C_\pi r_\pi r_b/\beta_0 = 104$ nH.
- Exact fit for this model: $z_i(0) = (r_\pi + r_b)/(\beta_0 + 1) = 53.5\ \Omega$, $R_2 = 200\ \Omega$, $R_1 = 73\ \Omega$, $L = 141$ nH; zero at 82.6 MHz, pole at 309 MHz.
- Sketch: $|z_i| \approx 53.5\ \Omega$ flat from 100 kHz to ≈ 20 MHz (53.9 Ω at 10 MHz, 57 Ω at 30 MHz), then rising (inductive) to ≈ 80 Ω at 100 MHz (≈ 65 Ω with the simple-formula elements); it would level off at $r_b = 200\ \Omega$ well above 300 MHz.

Output impedance: with the emitter driven by an ideal current source, KCL at the emitter forces $v_1 = 0$, so the $g_m$ generator carries no signal and $z_o = r_b + 1/(sC_\mu)$: $C_\mu = 0.3$ pF in series with $r_b = 200\ \Omega$ (infinite resistance at dc since $r_o = \infty$). Sketch: $|z_o|$ falls at −20 dB/decade from 5.3 MΩ at 100 kHz to 5.3 kΩ at 100 MHz ($r_b$ matters only above ≈ 2.7 GHz).

## Grading notes

Two parts, equal weight. Input: +2-level content is a low-frequency value ≈ 50–55 Ω ($\approx 1/g_m$), an inductive rise starting in the tens of MHz (zero ≈ 80 MHz), $R_2 = r_b = 200$ Ω, and element values consistent with either the simple formulas ($R_1 \approx 54$ Ω, $L \approx 104$ nH) or the exact fit ($R_1 \approx 73$ Ω, $L \approx 141$ nH). Output: capacitive, $C_\mu = 0.3$ pF (in series with $r_b$), 5.3 MΩ at 100 kHz to 5.3 kΩ at 100 MHz. Both right: +2; one right and the other with a minor slip: +1; one right and the other wrong: 0. −2 (asserted as fact): input impedance capacitive (falling) in this range, output impedance taken as $\beta r_o$ or as resistive, or a Miller-multiplied $C_\mu$. Giving $z_i(s)$ with the correct low-frequency level, zero, pole and high-frequency limit but not the requested element values ($R_1$, $R_2$, $L$) is a minor omission (+1 if everything else is right). A unit or exponent slip that puts the sketched $|z_o|$ off by orders of magnitude over most of the range is a computational slip, not −2, but it leaves that part incomplete; together with a flaw in the other part (such as the missing input element values) the score is 0.
