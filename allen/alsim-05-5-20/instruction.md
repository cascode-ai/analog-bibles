(Design problem.) You are to design a CMOS output amplifier having a single-ended input and a single-ended output and a voltage gain of +1. The amplifier is to use ±2 V power supplies, and all W/L values should be between 1 and 100. You may only use MOSFETs or substrate (vertical) BJTs of one type, NPN, in your design (a substrate NPN has its collector tied to the positive supply), with the exception of a load capacitor ($C_L$) and a load resistor ($R_L$). Use the following model parameters for SPICE: n-channel K′ = 110 µA/V², $V_T$ = 0.7 V, γ = 0.4 V$^{1/2}$, $2\phi_F$ = 0.7 V, λ = 0.04 V⁻¹ (L = 1 µm) or 0.01 V⁻¹ (L = 2 µm); p-channel K′ = 50 µA/V², $V_T$ = −0.7 V, γ = 0.57 V$^{1/2}$, $2\phi_F$ = 0.8 V, λ = 0.05 V⁻¹ (L = 1 µm) or 0.01 V⁻¹ (L = 2 µm); NPN $\beta_F$ = 100 and $I_s$ = 10 fA.

The definitions used in the specifications are:
1. Slew rate (SR) is the smallest ± output voltage rate across a 1-nF load capacitance when the output voltage is between ±1 V.
2. The peak output voltage ($V_P$) is the minimum ± deviation from the quiescent output voltage when a sinusoid is applied to the input and a 100-Ω resistor is attached to the output.
3. Efficiency in percent (η) = (power to the 100-Ω load resistor / power from the supplies) × 100.
4. Voltage gain ($A_v$) is the peak-to-peak output voltage over the peak-to-peak input voltage when the output is loaded with a 100-Ω resistor.

The values must come from computer simulation; provide the supporting information (labelled schematic, netlist, simulation results) showing how the score was determined. Your score is

SCORE = $10^{-6}\cdot\min[SR,\ 10\ \mathrm{V/\mu s}]$ (SR in V/s) + $10\cdot\min[V_P,\ 1\ \mathrm{V}]$ (with $V_P$ in volts) + $0.4\cdot\min[\eta,\ 25]$ + $\dfrac{10}{|A_v-1|+1}$,

so each of the four terms contributes at most 10 points (maximum SCORE = 40).
