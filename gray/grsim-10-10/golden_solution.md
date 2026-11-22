# Golden Solution - grsim-10-10

## Reference answer

One valid design: $R = 10$ kΩ, $R_E = 1.08$ kΩ, $I_B = 100\ \mu$A, $V_{\text{in}}$(dc) ≈ 1.0 V (giving $I_1 \approx 250\ \mu$A and $f \approx 10$ kHz; simulated 9.99 kHz at 0.995 V). $V_{\text{in}}$ from 0.895 to 1.095 V sweeps $f$ from ≈ 6.5 to ≈ 13.6 kHz (2:1 about 10 kHz).

Design steps:
- Oscillation frequency: the timing capacitor swings between $\pm V_A$, where $V_A$ is somewhat less than the drop $V_D$ of the diode-connected $Q_5$/$Q_6$. With $R = 10$ kΩ the cross-coupled pair regenerates when the off transistor's current reaches only ≈ $V_T/R$, so its $V_{BE}$ at switching is lower than the conducting one's by ≈ $V_T\ln(2I_1R/V_T) \approx 0.14$ V, and $V_A \approx V_D - V_T\ln(2I_1R/V_T) \approx 0.62$ V. Each half-period is $2CV_A/I_1$, so $f = \dfrac{I_1}{4CV_A}$. (Taking the swing as $\pm V_D$, $f = I_1/(4CV_D)$, gives an $f$ ≈ 20–30 % lower than the actual one at a given current; a design built on it, e.g. $R_E = 850\ \Omega$ at 1.01 V, runs at ≈ 13 kHz in simulation.)
- $R$: it must let the diode on the conducting side turn on, i.e. $2I_1R \gg V_D$. With $R = 10$ kΩ, $2I_1R \approx 3.3$ V even at the lowest current. The diode then carries $2I_1 - V_D/R \approx 2I_1 - 76\ \mu$A. On the off side $R$ carries only the emitter-follower base current (≈ 1 µA, ≈ 10 mV drop).
- Center: at $I_1 \approx 248\ \mu$A the diode current is ≈ 0.42 mA, $V_D = V_T\ln(0.42\ \text{mA}/10^{-16}\ \text{A}) = 0.756$ V and $V_A \approx 0.756 - 0.136 = 0.619$ V. Then $f = 248\ \mu\text{A}/(4 \times 10^{-8} \times 0.619) = 10.0$ kHz.
- 2:1 range about 10 kHz (6.67–13.33 kHz): $I_1$ from 165 to 331 µA. The ratio is 2.01 rather than 2 because $V_A$ rises by ≈ 3 mV with current.
- Current sources: $V_{\text{in}} = V_{BE}(I_1) + (1 + 1/\beta)I_1R_E$. $\Delta V_{BE} = V_T\ln(331/165) = 18.2$ mV, so $R_E = (200 - 18.2)\ \text{mV}/(1.01 \times 166\ \mu\text{A}) \approx 1.08$ kΩ.
- dc input: $V_{\text{in}} = 0.742 + 1.01 \times 248\ \mu\text{A} \times 1.08\ \text{k}\Omega \approx 1.01$ V. The range is 0.91–1.11 V (the simulation needs ≈ 15–20 mV less: 0.995 V for 9.99 kHz, 0.895–1.095 V for 6.53–13.57 kHz).
- Headroom: the $Q_1$/$Q_2$ emitters swing between ≈ $V_{CC} - V_{BE}$ ≈ 4.25 V and ≈ $V_{CC} - V_D - 2V_{BE}$ ≈ 2.75 V, well above the current-source bases (≈ 1 V), so all transistors stay out of saturation.
- Using the geometric center instead (7.07–14.14 kHz) gives $R_E \approx 1.02$ kΩ and $V_{\text{in}} \approx 1.00$ V.

Expected transfer characteristic (hand model, same design): $V_{\text{in}}$ = 0.85, 0.90, 0.95, 1.00, 1.05, 1.10, 1.20, 1.30 V → $f$ ≈ 4.8, 6.3, 7.9, 9.6, 11.3, 13.0, 16.4, 19.9 kHz. The curve is nearly linear, $f \approx 33\ \text{kHz/V} \times (V_{\text{in}} - 0.71\ \text{V})$, bending slightly where $I_1$ becomes small. A simulation should agree within about 5–10% (it runs ≈ 6 % fast: 9.99 kHz at 0.995 V): switching transients, base currents and the current in $R$ shift $f$ slightly, and $V_{\text{in}}$ or $R_E$ may need a small trim.

## Grading notes

Accept any design that meets the specifications with correct supporting calculations:
- $f = I_1/(4CV)$ with $V$ the capacitor half-swing, junction voltages consistent with $I_S = 10^{-16}$ A: best $V_A \approx V_D - V_T\ln(2I_1R/V_T) \approx 0.62$ V; the first-order $V = V_D$ ≈ 0.74–0.77 V is acceptable if the simulation is then used to retrim $R_E$ or $V_{\text{in}}$ (it runs ≈ 25–30 % fast).
- Center current ≈ 0.24–0.32 mA (≈ 0.25 mA with $V_A$, ≈ 0.30 mA with $V_D$).
- $R_E$ giving a 2:1 frequency change for 200 mV: ≈ 1.0–1.1 kΩ with $V_A$ (≈ 0.8–0.9 kΩ with $V_D$) when the current-source $\Delta V_{BE}$ (≈ 18 mV) is included. A design that ignores $\Delta V_{BE}$ (≈ 10–20 % larger $R_E$) is a minor imprecision (+1 level).
- $R$ large enough that $2I_1R$ exceeds a diode drop at the lowest current, with all devices active within 5 V.
- $V_{\text{in}}$(dc) ≈ $V_{BE} + I_1R_E$ ≈ 1.0 V.

A design assuming a generic $V_{BE(on)}$ = 0.6–0.7 V that ignores the given $I_S$ is at most +1. Wrong: a frequency formula missing the factor 4 (or using a swing of one $V_{BE}$), $R$ so small that the diodes never conduct, or a $V_{\text{in}}$ that saturates the current-source transistors. The SPICE check should show ≈ 10 kHz (±10%) at the design $V_{\text{in}}$ (after a trim if the design used the $\pm V_D$ swing), a ≈ 2:1 change over 200 mV, and a nearly linear, slightly bending $f$–$V_{\text{in}}$ curve.
