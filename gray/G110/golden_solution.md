# Golden Solution - G110

## Reference answer

Both load lines pass through the quiescent point $Q$: $V_{ce1} = 15$ V, $I_{c1} = I_Q = 2.86$ mA, and follow $V_{ce1} = V_{CC} - (I_{c1} - I_Q)R_L$.
- $R_L = 2\ \mathrm{k\Omega}$: slope $-1/R_L = -0.5$ mA/V. Upper end at $Q_1$ saturation: $V_{ce1} = 0.2$ V, $I_{c1} = 2.86 + 14.8/2 = 10.26$ mA. Lower end at $Q_1$ cutoff: $I_{c1} = 0$, $V_{ce1} = V_{CC} + I_QR_L = 20.72$ V (output stuck at $-I_QR_L = -5.72$ V, $Q_2$ still active). The line ends on the $V_{ce}$ axis.
- $R_L = 10\ \mathrm{k\Omega}$: slope $-0.1$ mA/V. Upper end at $Q_1$ saturation: $V_{ce1} = 0.2$ V, $I_{c1} = 2.86 + 1.48 = 4.34$ mA. Lower end at $Q_2$ saturation ($V_o = -14.8$ V, since $I_QR_L = 28.6\ \mathrm{V} > V_{CC}$): $V_{ce1} = 29.8$ V, $I_{c1} = 2.86 - 1.48 = 1.38$ mA. The line does not reach the $V_{ce}$ axis (its extension would hit it at 43.6 V).

Bias: $I_Q = I_R = (0 - 0.7 + 15)\ \mathrm{V}/5\ \mathrm{k\Omega} = 2.86$ mA (equal-area mirror, $R_1 = R_2 = 0$).

## Grading notes

+2: correct $I_Q$ (2.86 mA; 3.0 mA from neglecting $V_{BE}$ is acceptable), both lines through $(15\ \mathrm{V}, I_Q)$ with slopes $-1/R_L$, and correct end points within ±3%: 2 kΩ from (0.2 V, 10.26 mA) to the cutoff point (20.7 V, 0); 10 kΩ from (0.2 V, 4.34 mA) to the $Q_2$-saturation point (29.8 V, 1.38 mA). +1: lines correct but one end point wrong or missing (e.g. the 10 kΩ line drawn down to the $V_{ce}$ axis at 43.6 V, or the 2 kΩ line continued past 20.7 V). 0: only the Q point and slopes, no end points, or only the upper ($Q_1$-saturation) end points with both lower end points missing (the $Q_1$-cutoff end of the 2 kΩ line and the $Q_2$-saturation end of the 10 kΩ line). −2 (asserted as fact): quiescent point not at $V_{ce1} = V_{CC}$, slopes of the wrong sign or magnitude (e.g. $-1/(R_L + R_3)$), or lines through the origin.
