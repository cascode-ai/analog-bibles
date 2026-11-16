# Golden Solution - grsim-07-31

## Reference answer

Bias: $Q_1$ at 10 µA ($g_{m1} = 0.385$ mA/V, $r_{\pi1} = 520\ \mathrm{k\Omega}$), $Q_2$ at 0.5 mA ($g_{m2} = 19.2$ mA/V, $r_{\pi2} = 10.4\ \mathrm{k\Omega}$); $\tau_F = (24.48 - 0.5 - 4)\ \mathrm{pF}/76.9\ \mathrm{mA/V} = 260$ ps → $C_{\pi1} = 4.10$ pF, $C_{\pi2} = 9.00$ pF. $C_{\mu1}$ ($V_{CB} = 6$ V) = 0.145 pF, $C_{\mu2}$ ($V_{CB} = 4.2$ V) = 0.170 pF, $C_{cs2}$ (9.5 V) = 0.468 pF ($C_{cs1}$ is at ac ground).

(a) $v_o/v_i = -g_{m2}R_C\cdot\dfrac{(\beta+1)r_{\pi2}}{R_S + r_{\pi1} + (\beta+1)r_{\pi2}} = -96.2\times0.798 = -76.7$ (differential output, input on one side).

(b) DM half-circuit time constants: $C_{\pi1}$: 4.05 kΩ → 16.6 ns; $C_{\mu1}$ (base to ground): $R_S\|R_{i1} = 9.96\ \mathrm{k\Omega}$ → 1.44 ns; $C_{\pi2}$: $r_{\pi2}\|$(output resistance of the follower ≈ $(R_S + r_{\pi1})/(\beta + 1) = 2.64\ \mathrm{k\Omega}$) $= 2.10\ \mathrm{k\Omega}$ → 18.9 ns; $C_{\mu2}$: $2.10\ \mathrm{k} + 5\ \mathrm{k} + g_{m2}(5\ \mathrm{k})(2.10\ \mathrm{k}) = 209\ \mathrm{k\Omega}$ → 35.6 ns; $C_{cs2}$: 5 kΩ → 2.3 ns. $T_0 = 74.9$ ns → $f_{-3\text{dB}} \approx 2.1$ MHz.

(c) Expected simulation (linear model of the above): gain −76.7 (37.7 dB); −3-dB bandwidth ≈ 3.1 MHz (the zero-value estimate is pessimistic: there is a left-half-plane zero near 15 MHz from $C_{\pi1}$ feedforward and a complex pole pair near 2.6 MHz ± j2.1 MHz); at 100 MHz $|v_o/v_i| \approx 0.47$ (−6.6 dB) and the phase has fallen ≈ 131° from its low-frequency value of 180° (absolute ≈ +49°).

(d) With $r_b = 200\ \Omega$: gain −75.5, zero-value estimate 2.03 MHz, simulated bandwidth ≈ 2.95 MHz, $|v_o/v_i|$ at 100 MHz ≈ 0.45 (−7.0 dB), phase ≈ −132° relative. Base resistance has only a small effect (≈ 5%) because the source resistance (10 kΩ) and the follower already dominate the input-side impedances.

## Grading notes

Hand parts: +2 needs (a) ≈ −77 (±5%) and (b) ≈ 2.1 MHz (1.9–2.3) with $C_{\mu2}$, $C_{\pi2}$, $C_{\pi1}$ the main terms. A correct simulation of a model with these parameters shows gain ≈ 37.7 dB, −3 dB ≈ 3 MHz (anything 2.5–3.5 MHz with a consistent model), and at 100 MHz a magnitude ≈ −6 to −8 dB with a phase lag ≈ 125–140° relative to low frequency; $r_b = 200$ Ω must give a small reduction (a few percent) of gain and bandwidth. −2 (asserted as fact): followers treated as having gain β, the zero-value estimate equated with the exact −3-dB frequency while the simulation shows ≈ 1.5× more without comment, or $r_b$ claimed to change the bandwidth by a large factor.
