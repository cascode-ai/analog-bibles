A CMOS op amp capable of operating from a 1.5-V power supply is shown in [Fig. 1] (single supply +1.5 V and ground; the reference current $I$ flows in the diode-connected p-channel M9 and is mirrored by the p-channel M10, M11, M12 and M7; M10 feeds the current $I$ into the diode-connected n-channel M8, which mirrors it to the tail transistor M5; M11 and M12 each supply $1.5I$ to the drains of the n-channel input transistors M1 and M2; M3 (diode-connected) and M4 form an n-channel mirror carrying $I$ each; the first-stage output (drains of M1, M4 and M11) drives the n-channel output transistor M6, which carries $10I$ from its p-channel load M7; $C_c$ connects the gate of M6 to the output; the load is 10 pF). All device lengths are 1 µm and all transistors are to operate in the saturation region. Design all of the W values of every transistor of this op amp to meet the following specifications:

- Slew rate = ±10 V/µs
- $V_{out}(\max) = 1.25$ V, $V_{out}(\min) = 0.75$ V
- $V_{ic}(\min) = 1$ V, $V_{ic}(\max) = 2$ V
- GB = 10 MHz
- Phase margin = 60° when the output pole = 2GB and the RHP zero = 10GB
- Keep the mirror pole ≥ 10GB ($C_{ox} = 0.5\ \mathrm{fF/\mu m^2}$)

Your design should meet or exceed these specifications. Ignore bulk effects, and summarize your W values to the nearest micron, the value of $C_c$ (pF) and $I$ (µA) in a table with the entries $C_c$, $I$, $W_1 = W_2$, $W_3 = W_4$, $W_5 = W_8$, $W_6$, $W_7$, $W_9 = W_{10}$, $W_{11} = W_{12}$, $P_{diss}$. Use the following model parameters: $K'_N = 24\ \mu\mathrm{A/V^2}$, $K'_P = 8\ \mu\mathrm{A/V^2}$, $V_{TN} = -V_{TP} = 0.75$ V, $\lambda_N = 0.01\ \mathrm{V^{-1}}$, $\lambda_P = 0.02\ \mathrm{V^{-1}}$ (saturation: $i_D = \frac{K'W}{2L}(v_{GS} - V_T)^2$).
