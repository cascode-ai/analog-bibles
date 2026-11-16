Consider the circuit shown in [Fig. 1]: an n-channel switch M1 ($W = 5\ \mu$m, $L = 1\ \mu$m, bulk at ground) connects a 2.0-V source to the capacitor $C_1 = 30$ fF. Its gate is driven by the pulse $\phi_1$, which rises from 0 V to 5 V in 10 ns, stays at 5 V, and falls back to 0 V in 10 ns; $t_1$ is a time after the pulse has ended. Initially the charge on $C_1$ is zero, and $\phi_1$ stays high long enough for $C_1$ to charge fully. Assume that the slow regime of charge injection is valid for this circuit, in which the error (desired voltage $V_S$ minus actual voltage on the load capacitor $C_L$) is

$V_{error} = \left(\dfrac{W\cdot CGDO + C_{channel}/2}{C_L}\right)\sqrt{\dfrac{\pi U C_L}{2\beta}} + \dfrac{W\cdot CGDO}{C_L}\,(V_S + V_T - V_L)$,

where the gate voltage falls as $v_G = V_H - Ut$ from $V_H$ to $V_L$, $\beta = K'W/L$, $C_{channel} = WLC_{ox}$, and $V_T$ is the threshold of the switch at its operating point. Calculate $v_{out}$ at time $t_1$. Assume that the overlap capacitances are $W\cdot CGSO = W\cdot CGDO = 5$ fF. You cannot ignore the body effect.

Device data (n-channel): $V_{T0} = 0.7$ V, $K' = 110\ \mu\mathrm{A/V^2}$, $\gamma = 0.4\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.7$ V, $C_{ox} = 24.7\times10^{-4}\ \mathrm{F/m^2}$.
