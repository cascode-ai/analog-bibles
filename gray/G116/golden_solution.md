# Golden Solution - G116

## Reference answer

About 34.7 mW for $R_L = 2\ \mathrm{k\Omega}$ and 31.9 mW for $R_L = 10\ \mathrm{k\Omega}$.
- $\bar P_{c1} = \overline{(I_Q + v_o/R_L)(V_{CC} - v_o)} = V_{CC}I_Q - \hat V_o^2/(2R_L)$: the quiescent dissipation $V_{CC}I_Q = 42.9$ mW minus the load power.
- 2 kΩ: $\hat V_o = I_QR_L = 5.72$ V, $P_L = 8.18$ mW → 34.7 mW.
- 10 kΩ: $\hat V_o = 14.8$ V, $P_L = 10.95$ mW → 31.9 mW.

## Grading notes

+2: both values within ±3% with the correct amplitudes (5.72 V and 14.8 V). +1: correct formula and one amplitude slip (e.g. 14.8 V used for 2 kΩ giving a negative or wrong value noted as suspicious). 0: right method, both numbers off through slips. −2 (asserted as fact): average dissipation claimed equal to the quiescent value or increased by the signal, or computed as $P_{supply} - P_L$ with the total supply power of both transistors (≈77 mW).
