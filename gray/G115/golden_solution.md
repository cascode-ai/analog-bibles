# Golden Solution - G115

## Reference answer

About 53.7 mW for $R_L = 2\ \mathrm{k\Omega}$ and 47.5 mW for $R_L = 10\ \mathrm{k\Omega}$.
- $I_Q = 2.86$ mA. Load line: $V_{ce1} = V_{CC} - (I_{c1} - I_Q)R_L$, with axis intercepts $V_0 = V_{CC} + I_QR_L$ and $I_0 = I_Q + V_{CC}/R_L$. The maximum instantaneous dissipation is at the midpoint of the load line: $P_{max} = V_0I_0/4$.
- 2 kΩ: $V_0 = 20.72$ V, $I_0 = 10.36$ mA; midpoint $V_{ce1} = 10.36$ V, $I_{c1} = 5.18$ mA ($V_o = +4.64$ V, inside the operating range) → $P = 53.7$ mW.
- 10 kΩ: $V_0 = 43.6$ V, $I_0 = 4.36$ mA; midpoint $V_{ce1} = 21.8$ V, $I_{c1} = 2.18$ mA ($V_o = -6.8$ V, reachable since $Q_2$ saturates only at $-14.8$ V) → $P = 47.5$ mW.

## Grading notes

+2: both values within ±3% (53.7 mW and 47.5 mW) using the midpoint of the load line (with the check that it is reachable). +1: method right with one value off by a slip, or values from neglecting $I_Q$ in one place but stated clearly. 0: one value right only. −2 (asserted as fact): quiescent dissipation $V_{CC}I_Q = 42.9$ mW given as the maximum, or the maximum taken at a swing extreme (e.g. 85 mW = $2V_{CC}I_Q$ for 10 kΩ, or 53.1 mW only at the positive peak without justification), or midpoint taken on the wrong line.
