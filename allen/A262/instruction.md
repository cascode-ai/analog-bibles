For the CMOS op amp shown in [Fig. 1] (supplies +1 V and −1 V; a 10-µA reference current flows in the diode-connected n-channel transistor M8, $W_8/L_8$ = 10 µm/1 µm, whose gate drives M5 and M7; $C_c$ = 2 pF; $C_L$ = 10 pF), assume the model parameters for the transistors are $K'_N = 110\ \mu\mathrm{A/V^2}$, $K'_P = 50\ \mu\mathrm{A/V^2}$, $V_{TN} = 0.7$ V, $V_{TP} = -0.7$ V, $\lambda_N = 0.04\ \mathrm{V^{-1}}$ and $\lambda_P = 0.05\ \mathrm{V^{-1}}$ (saturation: $i_D = \frac{K'W}{2L}(v_{GS} - V_T)^2$); ignore the body effect. Let all transistor lengths be 1 µm and design the widths of every transistor and the dc currents $I_5$ (in M5) and $I_7$ (in M7) to satisfy the following specifications:

- Slew rate = 10 V/µs
- +ICMR (maximum input common-mode voltage) = 0.8 V
- −ICMR (minimum input common-mode voltage) = 0 V
- GB = 10 MHz
- Phase margin = 60° (obtained with $g_{mII} = 10g_{mI}$, i.e. $g_{m6} = 10g_{m1}$, and $V_{SG4} = V_{SG6}$)
