# Golden Solution - alsim-06-3-17

## Reference answer

One design (two-stage, p-channel input, n-channel output, pole–zero-cancelling nulling resistor; all L = 1 µm, W in µm):

- Input pair M1, M2: p-channel 100 (16.9 µA each); mirror load M3, M4: n-channel 14; tail M5: p-channel 25 (33.8 µA).
- Output: M6 n-channel 100 (driver), M7 p-channel 100 (135 µA load).
- Bias (MOSFETs only): diode-connected p-channel M8 = 10 (gate common with M5, M7, overdrive 0.23 V) in series with two diode-connected p-channel 1/1 devices (bulks tied to their own sources) and one diode-connected n-channel 1/1 device to $V_{SS}$: $I_{ref}$ ≈ 13.5 µA (0.93 + 2 × 1.44 + 1.20 ≈ 5.0 V).
- $C_c$ = 2.5 pF (a capacitor, or about ten 100/1 gate-oxide MOS capacitors in parallel if only MOSFETs are allowed), in series with $R_z$ realized by an n-channel 1/1 transistor with its gate at $V_{DD}$, placed between the gate of M6 (≈ −1.64 V) and $C_c$: $R_{on} \approx 2.8$ kΩ ≈ $(C_c + C_L)/(g_{m6}C_c)$ = 2.9 kΩ, so the zero cancels the output pole.

Hand values:
- $A_{vd} = \dfrac{2g_{m1}}{I_5(\lambda_P + \lambda_N)}\cdot\dfrac{g_{m6}}{I_6(\lambda_N + \lambda_P)}$ with $g_{m1}$ = 411 µS, $g_{m6}$ = 1.73 mS: 270 × 142 ≈ 3.8 × 10⁴ (91.7 dB).
- OVSR: $V_o(\max) = 2.5 - V_{SD7}(\mathrm{sat}) = 2.27$ V (M7 still saturated while sourcing 50 µA), $V_o(\min) = -2.5 + \sqrt{2(185\ \mu)/(110\ \mu \cdot 100)} = -2.32$ V (M6 sinking 135 + 50 µA) → OVSR ≈ 4.58 V.
- SR: internal $I_5/C_c$ = 13.5 V/µs; rising output edges limited by $(I_7 - I_5)/C_L$ = 10.1 V/µs → SR ≈ 10 V/µs.
- $R_{id}$: MOS gates, effectively infinite (≫ 1 MΩ).
- ICMR: $V_{in}(\max) = 2.5 - V_{SD5}(\mathrm{sat}) - V_{SG1} = 2.5 - 0.23 - 0.78 = 1.49$ V; $V_{in}(\min) = -2.5 + V_{GS3} - |V_{TP}| = -2.35$ V → ≈ 3.8 V.
- CMRR ≈ $\dfrac{g_{m1}}{g_{ds2} + g_{ds4}}\cdot\dfrac{2g_{m3}}{g_{ds5}}$ ≈ 7 × 10⁴ (≈ 97 dB).
- GB $= g_{m1}/C_c$ = 26 MHz.
- Phase margin: with the output pole cancelled, the remaining nondominant roots are $1/(R_zC_I)$ and the mirror pole/zero; ignoring junction capacitances ≈ 80°, and with the junction capacitances implied by AD = AS = W × 10 µm (≈ 0.5 pF at the gate of M6, ≈ 0.4 pF at the mirror node) ≈ 65–70°.
- $P_{diss} = 5\ \mathrm V \times (13.5 + 33.8 + 135)\ \mu\mathrm A \approx 0.91$ mW.
- Score ≈ 9 × 5 + simplicity (≈ 4) ≈ 49 if SPICE confirms the margins (GB and phase margin are the items most likely to fall slightly short: the input devices are near weak inversion, $V_{ov1}$ ≈ 0.08 V, so a LEVEL-1 model overstates $g_{m1}$ compared with real devices).

Expected simulation (LEVEL 1): open-loop gain ≈ 3–4 × 10⁴, GB ≈ 22–27 MHz, phase margin ≈ 60–75° at 10 pF, SR ≈ 10 V/µs (asymmetric: faster falling edges), output limits ≈ ±2.3 V at ±50 µA, ICMR ≈ 3.5–3.8 V from the follower sweep, CMRR ≥ 80 dB in a mismatch-free simulation, $P_{diss}$ ≈ 0.9 mW. The design is a trade-off: the slew-rate spec forces $I_7 - I_5 \ge 100$ µA, which together with $P_{diss}$ ≤ 1 mW and W ≤ 100 µm limits $g_{m6}$; without the pole–zero cancellation ($R_z = 1/g_{m6}$) the phase margin at GB ≈ 26 MHz would be only ≈ 40°.

## Grading notes

Design problem with a self-computed score: no single correct answer. A correct response gives a complete MOSFET-based design within the constraints (L = 1 µm, 1 µm ≤ W ≤ 100 µm, ±2.5 V, 10 pF), hand values for all nine table entries derived with correct formulas for its topology, SPICE values from a simulation that includes the device capacitances with the stated AD/AS/PD/PS rule, and a score computed with each term capped at 5. Hand and SPICE values should agree reasonably (gain within ≈ ×2, GB within ≈ 20 %, phase margin within ≈ 10°, swings and ICMR within ≈ 0.2 V); discrepancies should be explained. A strong design reaches ≈ 45 points plus simplicity, as in the reference. Wrong: W > 100 µm or L ≠ 1 µm, ideal current sources or resistors left in the final circuit, OVSR evaluated without the ±50-µA load condition, phase margin or GB reported for a load other than 10 pF, slew rate computed only as $I_5/C_c$ when the output stage is the limit, or score terms not capped at 5.
