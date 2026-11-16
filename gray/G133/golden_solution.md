# Golden Solution - G133

## Reference answer

$R_L = 10\ \mathrm{k\Omega}$: $\hat V_o = 13.75$ V, $P_L \approx 9.45$ mW, $\eta \approx 72\%$, ≈ 1.84 mW per output device. $R_L = 2\ \mathrm{k\Omega}$: $\hat V_o = 11.92$ V, $P_L \approx 35.5$ mW, $\eta \approx 62\%$, ≈ 10.7 mW per output device.
- Limits: $V_o^- = -14.1$ V ($Q_3$ saturation); $V_o^+ = (V_{CC} - V_{BE1})/(1 + R_1/(\beta_FR_L))$ = 13.75 V (10 kΩ) and 11.92 V (2 kΩ), the positive limit being drive-limited by $R_1 = 20\ \mathrm{k\Omega}$. A symmetrical sine clips first on the positive side, so $\hat V_o = V_o^+$.
- $P_L = \hat V_o^2/(2R_L)$: 9.45 mW and 35.5 mW.
- Output-device supply power $2V_{CC}\hat V_o/(\pi R_L)$: 13.1 mW and 56.9 mW; $\eta = (\pi/4)\hat V_o/V_{CC}$ = 0.720 and 0.624.
- Per device: $(P_{supply} - P_L)/2$ = 1.84 mW and 10.7 mW.
(With $\beta_F + 1$ in the limit: 9.47 mW, 72.0%, 1.84 mW; 35.7 mW, 62.6%, 10.7 mW.)

## Grading notes

+2: powers, efficiencies and per-device dissipations within ±3% for both loads, using the positive (drive-limited) swing as the amplitude. +1: method right but the amplitude taken as 14.1 V for one load (ignoring the lower positive limit), or one value slipped. 0: amplitudes $V_{CC} - V_{CE(\text{sat})}$ used throughout (giving ≈78% efficiency) with otherwise correct formulas. −2 (asserted as fact): class A supply power, efficiency above 78.6%, or device dissipation equal to the load power.
