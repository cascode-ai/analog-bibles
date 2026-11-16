# Golden Solution - grsim-07-46

## Reference answer

(a) Zero-value: $C$ sees $R + R_o + (a_v/R_o)R_oR = R + R_o + a_vR = 20.025$ MΩ → 1.001 ms; $C_{\text{in}}$ sees $R = 20\ \mathrm{k\Omega}$ → 4 ns. $|p_1| \approx 1/1.001\ \mathrm{ms} = 999$ rad/s (159 Hz).
Short-circuit: with $C_{\text{in}}$ shorted ($v_x = 0$), $C$ sees $R_o$ → 0.25 µs; with $C$ shorted (input node tied to the output), $C_{\text{in}}$ sees $R\|[R_o/(1 + a_v)] = 4.99\ \Omega$ → 1.0 ps. $|p_2| \approx 1/1\ \mathrm{ps} + 1/0.25\ \mu\mathrm{s} \approx 1.0\times10^{12}$ rad/s (159 GHz).
(b) Simulation (linear model): poles at $-999$ rad/s and $-1.00\times10^{12}$ rad/s, a right-half-plane zero at $a_v/(R_oC) = 4\times10^9$ rad/s; dc gain −1000. The estimates agree essentially exactly.

## Grading notes

Hand part: +2 needs $|p_1| \approx 1.0\times10^3$ rad/s (≈ 159 Hz) and $|p_2| \approx 1.0\times10^{12}$ rad/s, with the Miller-type resistance $\approx a_vR$ for $C$. A correct simulation confirms both poles (±2%). −2 (asserted as fact): $C$'s resistance taken as $R$ only (pole at ≈ 1 MHz), or the nondominant pole computed from $R_oC_{\text{in}}$ without the feedback (≈ 1 GHz).
