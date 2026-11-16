# Golden Solution - G196

## Reference answer

- Input impedance: $z_i = 1/(g_m + sC_{gs})$, i.e. $1/g_m = 516\ \Omega$ in parallel with $C_{gs} = 74.7$ fF ($g_m = 1.94$ mA/V). $|z_i|$ is flat at 516 Ω up to the corner $g_m/(2\pi C_{gs}) = 4.1$ GHz (365 Ω at 4.1 GHz), then falls at −20 dB/decade to ≈ 197 Ω at 10 GHz and ≈ 21 Ω at 100 GHz. (Unlike the bipolar case there is no gate resistance, so the input impedance is never inductive.)
- Output impedance: with the source driven by an ideal current source, KCL at the source gives $v_{gs}(g_m + sC_{gs}) = 0$, so $v_{gs} = 0$ and the transistor contributes no current; $z_o = 1/(sC_{gd})$, a 14-fF capacitor (infinite resistance at dc since $\lambda = 0$ and $C_{db} = 0$). $|z_o|$ falls at −20 dB/decade from 114 MΩ at 100 kHz to 114 kΩ at 100 MHz and 114 Ω at 100 GHz.

## Grading notes

Two parts, equal weight. Input: $1/g_m \approx 516$ Ω ∥ 74.7 fF, flat to ≈ 4.1 GHz then −20 dB/dec. Output: 14 fF capacitor, 114 MΩ at 100 kHz decreasing 20 dB/dec to 114 Ω at 100 GHz. Both right (±10%): +2; one right and the other with a slip: +1; one right, the other wrong: 0. −2 (asserted as fact): an inductive input impedance, the output impedance taken as resistive ($r_o$ finite or $g_mr_oR_S$), or $C_{gd}$ Miller-multiplied. A "slip" here means one that changes a required result of that part (an element value, the corner frequency or a level of the sketch); an isolated unit-prefix slip in one row of a table of sample values (e.g., 2.754 Ω for 2.754 kΩ), with the element values, corner and sketch correct, is trivial and does not lower +2.
