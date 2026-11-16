Calculate the effect of charge feedthrough on the circuit shown in [Fig. 1]: an n-channel switch with $W/L = 1.6\ \mu\mathrm{m}/0.8\ \mu\mathrm{m}$ (bulk at ground) connects the source $V_S = 1.5$ V to the load capacitor $C_L = 150$ fF. To open the switch, the gate voltage $\phi_1$ falls linearly from 5 V to 0 V. Find the error voltage on $C_L$ and the final voltage on $C_L$ for two cases: Case 1, a fall time of 0.1 ns; Case 2, a fall time of 8 ns. Neglect ΔL and ΔW effects.

Charge-feedthrough model: the gate voltage is $v_G = V_H - Ut$ ($V_H$ = 5 V, $V_L$ = 0 V, $U$ the magnitude of the slope); $V_{HT} = V_H - V_S - V_T$, with $V_T$ the threshold of the switch at its operating point; $\beta = K'W/L$, $C_{channel} = WLC_{ox}$.
- Slow regime, $\beta V_{HT}^2/(2C_L) \gg U$: $V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}(V_S + V_T - V_L)$.
- Fast regime, $\beta V_{HT}^2/(2C_L) \ll U$: $V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\left(V_{HT} - \dfrac{\beta V_{HT}^3}{6UC_L}\right) + \dfrac{W\cdot CGDO}{C_L}(V_S + V_T - V_L)$.

Device data (n-channel): $V_{T0} = 0.7$ V, $K' = 110\ \mu\mathrm{A/V^2}$, $\gamma = 0.4\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.7$ V, $C_{ox} = 24.7\times10^{-4}\ \mathrm{F/m^2}$, $CGDO = 220\times10^{-12}$ F/m.
