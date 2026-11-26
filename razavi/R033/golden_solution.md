# Golden Solution - R033

## Reference answer

Neglect node-X parasitic capacitance and channel-length modulation ($\lambda=0$).

### Initial voltage and jump

Before the step, $M_1$ is off and $V_X=2\ \mathrm{V}$. The capacitor voltage stays at 2 V at the instant of the input step, so $V_X$ jumps by the full 3 V to 5 V.

### Discharge

With the gate at 3 V, the overdrive is 2.3 V. In saturation $I_D=2.645\,\beta\,\mathrm{V^2}$, so $V_X$ falls linearly with slope $-I_D/C_1$ to 2.3 V.

In triode $V_X$ approaches 0 V, with exponential time constant $\tau=C_1/[\beta(2.3\ \mathrm{V})]$ in the tail. The X plate ends up 3 V below the input plate, so $V_{C1}\to-3\ \mathrm{V}$.

![R033 example $V_X(t)$ waveform](/q/R033/solution-vx.svg)

## Grading notes

- +2: $V_X$ = 2 V before, jump to 5 V at the step, linear (saturation) fall to 2.3 V, then triode decay to 0 V. Times written with the voltage units left implicit (e.g., $t_1 \approx 1.02\,C_1/\beta$, meaning $1.02\ \mathrm{V^{-1}}\cdot C_1/\beta$) are fine.
- +1: jump and final value right but the two discharge phases not distinguished.
- 0: final value right but the jump missed (or jump right but end value wrong).
- −2 (asserted as fact): $V_X$ settling at 5 V, staying at 2 V, or the jump going the wrong way.
