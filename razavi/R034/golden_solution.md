# Golden Solution - R034

## Reference answer

Neglect node-X parasitic capacitance and channel-length modulation ($\lambda=0$).

$V_X = 6$ V for $t < 0$ ($V_{in} = 3$ V plus 3 V on $C_1$; $M_1$ off because its gate at $V_{DD} = 3$ V equals its source voltage). At $t = 0$, $V_X$ drops with the input to 3 V. Now $V_{GS} = 3$ V, $V_{DS} = 3$ V: $M_1$ saturated, discharging $C_1$ (connected between its drain and source) with constant current $\tfrac12\beta(2.3\ \mathrm{V})^2 = 2.645\,\beta\,\mathrm{V^2}$, so $V_X$ ramps down linearly at $\frac{(2.645\ \mathrm{V^2})\beta}{C_1}$ to 2.3 V, then decays in triode roughly exponentially to 0 V (time constant ≈ $C_1/((2.3\ \mathrm{V})\beta)$).

![R034 example $V_X(t)$ waveform](/q/R034/solution-vx.svg)

## Grading notes

+2: $V_X$ = 6 V before the step, drop to 3 V at $t = 0$, linear fall to 2.3 V (saturation) then exponential-like decay to 0 V. +1: right levels but the two discharge phases not distinguished, or the pre-step value omitted. 0: final value right but the step response wrong, or the reverse. -2 (asserted as fact): $V_X$ staying at 3 V after the step, $M_1$ claimed off after the step, or $V_X$ ending at a nonzero value.
