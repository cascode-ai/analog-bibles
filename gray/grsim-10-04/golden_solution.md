# Golden Solution - grsim-10-04

## Reference answer

(a) Worst-case $|V_{OS}| \approx 17.2$ mV, taking the ±0.3% and ±2% as the mismatch between the two matched devices of a pair. If each resistor and each $I_S$ may deviate by that amount from nominal, the pair differences double and $|V_{OS}| \approx 34.3$ mV.
- With ideal op amps each input transistor's emitter is forced to its op amp's + input. So the current in the 10-kΩ resistor is exactly $V_{\text{in}}/10\ \text{k}\Omega$, independent of the input transistors' $I_S$ (their mismatch does not matter).
- KCL at the two emitter nodes: $I_1 = I_A \pm V_{\text{in}}/R$, $I_2 = I_B \mp V_{\text{in}}/R$, where $I_A$, $I_B$ are the collector currents of the two bias transistors and $R = 10$ kΩ. So $I_1 - I_2 = (I_A - I_B) \pm 2V_{\text{in}}/R$ and $|V_{OS}| = (R/2)|I_A - I_B| = 5\ \text{k}\Omega \times \Delta I$.
- The bias transistors share one base voltage $V_B$: $IR_E + V_T\ln(I/I_S) = V_B$ with $IR_E = 1$ V at $I = 1$ mA. Their mismatch gives $\dfrac{\Delta I}{I} = \dfrac{IR_E(\Delta R_E/R_E) + V_T(\Delta I_S/I_S)}{IR_E + V_T} = \dfrac{1(0.003) + 0.026(0.02)}{1.026} = 3.43\times10^{-3}$, so $\Delta I = 3.43\ \mu$A and $|V_{OS}| = 17.2$ mV.
- The reference branch (its 1-kΩ resistor and $I_S$) shifts both bias currents equally to first order and does not contribute; the single 10-kΩ resistor affects only the gain.

(b) Expected simulation result: the distortion is negligible, with HD2 and HD3 both far below 0.01% (below −80 dB). HD2 is ≈ 0 by symmetry for matched devices.
- The only nonlinearity is the residual $V_{BE}(I)/A$ at each emitter. It gives a differential error of about $(2V_T/A)\tanh^{-1}(V_{\text{in}}/10\ \text{V})$ against a 10-V signal, hence HD3 ≈ 3 × 10⁻⁷.
- The 20-V p-p drive makes the resistor current reach ±1 mA, exactly the bias current, so one transistor's current falls to ≈ 0 at each peak. With β = 100 base currents the bias currents are slightly below 1 mA and that transistor cuts off briefly, raising HD3 to ≈ 4 × 10⁻⁶. With worst-case mismatched bias currents (±1.7 µA) HD2 ≈ HD3 ≈ 4 × 10⁻⁵ (0.004%).
- The results are effectively limited by the simulator's numerical accuracy. Any larger drive, or a lower bias current, would clip the output current at the peaks.

## Grading notes

Credit split equally between (a) and (b). (a) +2 level: ≈ 17 mV (16.5–18 mV) with the mismatch between the two bias transistors/resistors identified as the only source, or ≈ 34 mV if the "each part deviates from nominal" reading is stated explicitly. Wrong: attributing the offset to the input transistors' $V_{BE}$ mismatch ($V_T\Delta I_S/I_S \approx 0.5$ mV), omitting the factor $R/2$, or ignoring emitter degeneration (treating the bias transistors as a simple mirror with $\Delta I/I = \Delta I_S/I_S$, giving ≈ 100 mV). (b) A correct simulation shows HD2 and HD3 both very small, ≲ 0.01%; values between ~10⁻⁷ and a few × 10⁻⁵ depending on bias details and numerical settings are all consistent. HD2 is near zero for matched devices. Results of 0.1% or more indicate a setup error (transistors saturating because of inadequate supplies or collector returns, wrong op-amp feedback polarity, drive exceeding ±10 V peak) and are wrong unless explained by such an intended condition.
