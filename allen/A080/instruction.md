Calculate the effect of charge injection on the circuit shown in [Fig. 1]: a CMOS switch made of the n-channel M1 and the p-channel M2, both $W/L = 0.8\ \mu\mathrm{m}/0.8\ \mu\mathrm{m}$, connects $v_{in} = 2.5$ V (dc) to $C_L = 1$ pF. To open the switch, the gate of M1 falls linearly from 5 V to 0 V while the gate of M2 rises linearly from 0 V to 5 V, both with slope magnitude $U = 5\ \mathrm{V}/50\ \mathrm{ns} = 10^8$ V/s. Find the change of $v_{CL}$. Ignore the bulk effect.

Charge-feedthrough model for the n-channel device (gate falling from $V_H$ = 5 V to $V_L$ = 0 V as $v_G = V_H - Ut$), with $V_{HT} = V_H - v_{in} - V_T$, $\beta = K'W/L$, $C_{channel} = WLC_{ox}$:
- Slow regime: $V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}(v_{in} + V_T - V_L)$.
- Fast regime: $V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\left(V_{HT} - \dfrac{\beta V_{HT}^3}{6UC_L}\right) + \dfrac{W\cdot CGDO}{C_L}(v_{in} + V_T - V_L)$.

For the p-channel device use the mirror-image expressions (gate rising from $V_L$ = 0 to $V_H$ = 5 V, $V_{HT} = v_{in} - |V_T| - V_L$, overlap term $\frac{W\cdot CGDO}{C_L}(V_H - v_{in} + |V_T|)$); its injected charge has the opposite sign. For each transistor use the slow-regime expression if $\beta V_{HT}^2/(2C_L) > U$ and the fast-regime expression if it is smaller.

Device data: n-channel $V_T = 0.7$ V, $K' = 110\ \mu\mathrm{A/V^2}$; p-channel $V_T = -0.7$ V, $K' = 50\ \mu\mathrm{A/V^2}$; $C_{ox} = 24.7\times10^{-4}\ \mathrm{F/m^2}$, $CGDO = 220\times10^{-12}$ F/m for both.
