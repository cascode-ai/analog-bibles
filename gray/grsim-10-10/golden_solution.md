# Golden Solution - grsim-10-10

## Reference answer

One valid design: $R = 10$ kΩ, $R_E = 850\ \Omega$, $I_B = 100\ \mu$A, $V_{\text{in}}$(dc) ≈ 1.01 V (giving $I_1 \approx 305\ \mu$A and $f \approx 10$ kHz). $V_{\text{in}}$ from 0.91 to 1.11 V sweeps $f$ from ≈ 6.7 to ≈ 13.4 kHz (2:1 about 10 kHz).

Design steps:
- Oscillation frequency: the timing capacitor swings between $\pm V_D$, where $V_D$ is the drop of the diode-connected $Q_5$/$Q_6$. Each half-period is $2CV_D/I_1$, so $f = \dfrac{I_1}{4CV_D}$.
- $R$: it must let the diode on the conducting side turn on, i.e. $2I_1R \gg V_D$. With $R = 10$ kΩ, $2I_1R \approx 4$ V even at the lowest current. The diode then carries $2I_1 - V_D/R \approx 2I_1 - 76\ \mu$A. On the off side $R$ carries only the emitter-follower base current (≈ 1 µA, ≈ 10 mV drop).
- Center: at $I_1 \approx 305\ \mu$A the diode current is ≈ 0.53 mA and $V_D = V_T\ln(0.53\ \text{mA}/10^{-16}\ \text{A}) = 0.762$ V. Then $f = 305\ \mu\text{A}/(4 \times 10^{-8} \times 0.762) = 10.0$ kHz.
- 2:1 range about 10 kHz (6.67–13.33 kHz): $I_1$ from 202 to 413 µA. The ratio is 2.05 rather than 2 because $V_D$ rises by ≈ 22 mV with current.
- Current sources: $V_{\text{in}} = V_{BE}(I_1) + (1 + 1/\beta)I_1R_E$. $\Delta V_{BE} = V_T\ln(413/202) = 18.6$ mV, so $R_E = (200 - 18.6)\ \text{mV}/(1.01 \times 211\ \mu\text{A}) \approx 850\ \Omega$.
- dc input: $V_{\text{in}} = 0.747 + 1.01 \times 305\ \mu\text{A} \times 850\ \Omega \approx 1.01$ V. The range is 0.91–1.11 V.
- Headroom: the $Q_1$/$Q_2$ emitters swing between ≈ $V_{CC} - V_{BE}$ ≈ 4.25 V and ≈ $V_{CC} - V_D - 2V_{BE}$ ≈ 2.75 V, well above the current-source bases (≈ 1 V), so all transistors stay out of saturation.
- Using the geometric center instead (7.07–14.14 kHz) gives $R_E \approx 800\ \Omega$ and $V_{\text{in}} \approx 1.00$ V.

Expected transfer characteristic (hand model, same design): $V_{\text{in}}$ = 0.85, 0.90, 0.95, 1.00, 1.05, 1.10, 1.20, 1.30 V → $f$ ≈ 4.8, 6.4, 8.0, 9.7, 11.4, 13.1, 16.5, 19.9 kHz. The curve is nearly linear, $f \approx 33\ \text{kHz/V} \times (V_{\text{in}} - 0.71\ \text{V})$, bending slightly where $I_1$ becomes small. A simulation should agree within about 5–10%: switching transients, base currents and the current in $R$ shift $f$ slightly, and $V_{\text{in}}$ or $R_E$ may need a small trim.

## Grading notes

Accept any design that meets the specifications with correct supporting calculations:
- $f = I_1/(4CV_{BE})$ (or an equivalent derivation) with junction voltages consistent with $I_S = 10^{-16}$ A (≈ 0.74–0.77 V at these currents).
- Center current ≈ 0.28–0.32 mA.
- $R_E$ giving a 2:1 frequency change for 200 mV: ≈ 0.8–0.9 kΩ when the current-source $\Delta V_{BE}$ (≈ 18 mV) is included. A design that ignores $\Delta V_{BE}$ and the variation of $V_D$ (≈ 1.0–1.1 kΩ) is a minor imprecision (+1 level).
- $R$ large enough that $2I_1R$ exceeds a diode drop at the lowest current, with all devices active within 5 V.
- $V_{\text{in}}$(dc) ≈ $V_{BE} + I_1R_E$ ≈ 1.0 V.

A design assuming a generic $V_{BE(on)}$ = 0.6–0.7 V that ignores the given $I_S$ is at most +1. Wrong: a frequency formula missing the factor 4 (or using a swing of one $V_{BE}$), $R$ so small that the diodes never conduct, or a $V_{\text{in}}$ that saturates the current-source transistors. The SPICE check should show ≈ 10 kHz (±10%) at the design $V_{\text{in}}$, a ≈ 2:1 change over 200 mV, and a nearly linear, slightly bending $f$–$V_{\text{in}}$ curve.
