# Golden Solution - alsim-06-3-07

## Reference answer

Hand analysis (simple model, body effect ignored except where stated):

- Bias: $I_8 = (5\ \mathrm V - V_{SG8})/R_S$ with $V_{SG8} = 0.7 + \sqrt{2I_8/(50\ \mu \cdot 3)}$ → $I_8 = 36.1$ µA ($V_{SG8}$ = 1.39 V); $I_5 = I_8 = 36.1$ µA (M5 = M8 = 3/1); $I_7 = I_6 = (5/3)I_8 = 60.1$ µA.
- $g_{m1} = \sqrt{2(50\ \mu)(2)(18.0\ \mu)} = 60.1\ \mu$S; $g_{m6} = \sqrt{2(110\ \mu)(10)(60.1\ \mu)} = 364\ \mu$S; $g_{ds2} + g_{ds4} = (0.05 + 0.04)(18.0\ \mu) = 1.62\ \mu$S; $g_{ds6} + g_{ds7} = (0.04 + 0.05)(60.1\ \mu) = 5.41\ \mu$S.
- Gain: $A_v = \dfrac{g_{m1}g_{m6}}{(g_{ds2} + g_{ds4})(g_{ds6} + g_{ds7})} \approx 2.49\times10^3$ V/V (68 dB).
- Output resistance: $R_{out} = 1/(g_{ds6} + g_{ds7}) = 185$ kΩ.
- Power: $P_{diss} = 5\ \mathrm V \times (36.1 + 36.1 + 60.1)\ \mu\mathrm A = 0.66$ mW.
- PSRR at dc (linearized small-signal analysis of the whole circuit including the $R_S$/M8 bias branch): PSRR⁺ ≈ 3.3 × 10³ (≈ 70 dB), PSRR⁻ ≈ 1.3 × 10⁴ (≈ 82 dB).
- ICMR: $V_{in}(\max) = V_{DD} - V_{SD5}(\mathrm{sat}) - V_{SG1} = 2.5 - 0.693 - 1.30 = 0.51$ V; $V_{in}(\min) = V_{SS} + V_{GS3} - |V_{TP}| = -2.5 + 0.986 - 0.7 = -2.21$ V.
- Output swing: $V_{out}(\max) = V_{DD} - V_{SD7}(\mathrm{sat}) = 2.5 - 0.69 = 1.81$ V; $V_{out}(\min) = V_{SS} + V_{DS6}(\mathrm{sat}) = -2.5 + 0.33 = -2.17$ V.
- Slew rate: $I_5/C_c = 36.1\ \mu\mathrm A/6\ \mathrm{pF} = 6.0$ V/µs (falling edges). With 20 pF the rising edge is limited by M7: ≈ $(I_7 - I_5)/C_L$ = 1.2 V/µs at first, ≈ $I_7/(C_L + C_c)$ = 2.3 V/µs once the first-stage output bottoms out.
- GB $= g_{m1}/C_c = 1.0\times10^7$ rad/s = 1.59 MHz; $|p_1| = GB/A_v \approx 4.0\times10^3$ rad/s (640 Hz); with 20 pF, $|p_2| = g_{m6}/C_L = 1.82\times10^7$ rad/s (2.9 MHz).
- M9/M10: node 7 sits at $V_{SS} + V_{GS6} = -1.47$ V. M9 (n-channel, gate 2.5 V): $V_{GS9}$ = 3.97 V, $V_{SB9}$ = 1.03 V → $V_{T9}$ ≈ 0.89 V, $R = 1/[K'_N(W/L)_9(V_{GS9} - V_{T9})]$ = $1/g_{m6}$ = 2.75 kΩ → $(W/L)_9 \approx 1.07$ (1 µm/1 µm gives 2.95 kΩ; ≈ 1.0 without body effect). M10 (p-channel, gate −2.5 V): $V_{SG10}$ ≈ 1.03 V but its threshold with the n-well at $V_{DD}$ is ≈ 1.43 V, so it is off at the operating point; a minimum device (1/1) suffices (it only matters for large excursions of node 7).
- Expected simulation: with $R_z = 1/g_{m6}$ the RHP zero is removed. For $C_L$ = 20 pF the two-pole estimate gives $\Phi_M \approx 90° - \arctan(GB/|p_2|) \approx 61°$; with no load (only parasitic output capacitance, ≈ 0.1–0.3 pF) $|p_2|$ is far above GB and $\Phi_M \approx 80–90°$, limited by the mirror pole and the $R_zC_I$ pole. 1 % settling (small step, unity-gain follower): ≈ 0.5 µs with 20 pF (ζ ≈ 0.67, $\omega_n$ ≈ 1.35 × 10⁷ rad/s), ≈ 0.46 µs ($4.6/GB$) with no load.

## Grading notes

A correct hand analysis gives currents 36/36/60 µA, $A_v$ ≈ 2.5 × 10³, $R_{out}$ ≈ 185 kΩ, $P_{diss}$ ≈ 0.66 mW, PSRR⁺ of order 10³–10⁴ and PSRR⁻ larger, ICMR ≈ −2.2 V to +0.5 V, output ≈ −2.17 V to +1.81 V, SR ≈ 6 V/µs (noting the M7 limit on rising edges into 20 pF is a plus), GB ≈ 1.6 MHz, and $(W/L)_9$ ≈ 1 with M10 essentially off. A correct simulation (LEVEL 1 or 3) shows a phase margin of roughly 55–65° with 20 pF and 75–90° without load, and 1 % small-signal settling times of the order of 0.4–0.7 µs; values within ±10° and ±30 % of these are acceptable, LEVEL-3 results may differ more in gain and PSRR. Wrong: GB computed with $C_L$ instead of $C_c$, gain with $g_{m1}/2$, the n-channel ICMR formulas used for this p-channel input stage, or a nulling resistor sized so that an RHP zero remains.
