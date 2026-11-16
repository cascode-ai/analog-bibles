# Golden Solution - A315

## Reference answer

$R_{out} \approx 0.30$ kΩ (≈ 297 Ω); $f_{-3\,dB} \approx 10.7$ MHz; $v_{OUT}$ limited to about ±1 V into 1 kΩ; $P_{diss} = 3.9$ mW.

- Quiescent currents: M1 = M2 = 50 µA; M3, M4 = 50 µA; M8 (= M3) = 50 µA → M9 = 50 µA → M7 (100/1 vs 10/1) = 500 µA; M6 (100/1 vs M4 10/1) = 500 µA.
- Open loop: $R_o = 1/(g_{ds6} + g_{ds7}) = 1/[(0.05 + 0.04)(500\ \mu)] = 22.2$ kΩ.
- Loop: $v_{out}$ drives M2; $i_2 = g_{m2}v/2$ goes through M3 → M8 → M9 → M7 (×10 sink), and $i_1 = -g_{m1}v/2$ through M4 → M6 (×10 less source). $g_{m1} = \sqrt{2(110\ \mu)(10)(50\ \mu)} = 331.7\ \mu$S; $|LG| = \tfrac12 g_{m1}(10 + 10)R_o = 10\,g_{m1}R_o = 73.7$.
- $R_{out} = R_o/(1 + LG) = 22.2\ \mathrm{k}/74.7 = 297\ \Omega$; $f_{-3\,dB} = 1/(2\pi\cdot 297\cdot 50\ \mathrm{pF}) = 10.7$ MHz.
- Output swing into 1 kΩ: the largest source current is when M1 takes all 100 µA: M6 = 10 × 100 µA = 1 mA (M7 off), so $v_{OUT}(\max) = 1\ \mathrm{mA}\times 1\ \mathrm{k\Omega} = +1$ V; symmetrically M7 sinks at most 1 mA, $v_{OUT}(\min) = -1$ V (voltage headroom of M6/M7, about 0.63 V, is not the limit).
- $P_{diss} = (V_{DD} - V_{SS})(I_5 + I_8 + I_6) = 6\ \mathrm{V}\times(100 + 50 + 500)\ \mu\mathrm{A} = 3.9$ mW.
- These values use the standard hand model: ideal 100 µA tail, mirror ratios set by W/L alone (λ used only for the small-signal $r_o$), and the 50 pF output pole as the only pole. If channel-length modulation is also kept in the DC bias ($I_D \propto 1+\lambda|V_{DS}|$, $v_{IN} = 0$), the unequal mirror $V_{DS}$ raise $I_6 = I_7$ to ≈ 587 µA; a level-1 simulation then gives $R_{out} \approx 246\ \Omega$, $f_{-3\,dB} \approx 13.0$ MHz, limits ≈ +1.03 V / −1.20 V and $P_{diss} \approx 4.45$ mW.

## Grading notes

Credit split: $R_{out}$ and bandwidth 50%, output limits 25%, power 25%. +2: $R_{out}$ ≈ 285–310 Ω, $f_{-3\,dB}$ ≈ 10–11.2 MHz, ±1 V (current-limited by 10 × 100 µA into 1 kΩ), 3.9 mW. An answer that explicitly keeps λ in the DC mirror currents and works it through consistently (values near 246 Ω, 13 MHz, about +1.03 V / −1.20 V, 4.45 mW) is equally correct; also accept a stated λ correction to one limit (e.g., −1.2 V) alongside the ±1 V result. +1: one of the four quantities off through a slip, others right. 0: about half right (e.g., $R_{out}$ and bandwidth correct, swing and power wrong; or $R_{out}$ taken as the open-loop 22 kΩ, hence a bandwidth near 143 kHz, with ±1 V and 3.9 mW correct). −2 (asserted as fact): most of the credit lost through critical errors, e.g., $R_{out}$ equal to the open-loop 22 kΩ or $1/(g_{m6}+g_{m7})$ ignoring the loop together with a wrong swing or power; swing limits set by the rails (e.g., ±2.3 V) without noticing the 1 mA current limit together with a wrong $R_{out}$; or a power that omits the 500 µA output branch together with a wrong $R_{out}$.
