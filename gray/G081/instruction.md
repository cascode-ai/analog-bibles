Design a simple MOS current mirror of the type shown in [Fig. 1] (two n-channel transistors, $M_1$ diode-connected, both sources grounded) to meet the following constraints:

(i) Transistor $M_2$ must operate in the active (saturation) region for values of $V_{OUT}$ down to within 0.2 V of ground.
(ii) The output current must be 50 µA.
(iii) The output current must change less than 1 percent for a change in output voltage of 1 V.

Make $M_1$ and $M_2$ identical. You are to minimize the total device area within the given constraints; here the device area is taken to be the total gate area ($W \times L$ product). Give $W$, $L$ and the resulting area.

Device data: $k' = \mu_nC_{ox} = 194\ \mu\mathrm{A/V^2}$ ($\mu_n = 450$ cm²/V·s, $t_{ox} = 80$ Å, $C_{ox} = 4.32$ fF/µm²), $V_t = 0.6$ V, source/drain lateral diffusion $L_d = 0.09$ µm, channel-length modulation $dX_d/dV_{DS} = 0.02$ µm/V. Assume $X_d = 0$, so that $L_{\text{eff}} = L_{\text{drwn}} - 2L_d$, and $\lambda = (dX_d/dV_{DS})/L_{\text{eff}}$. Use $I_D = \frac{k'}{2}\frac{W}{L_{\text{eff}}}(V_{GS}-V_t)^2(1+\lambda V_{DS})$ in saturation.
