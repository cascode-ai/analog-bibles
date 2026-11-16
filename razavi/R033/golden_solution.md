# Golden Solution - R033

## Reference answer

$V_X = 2$ V for $t < 0$ ($M_1$ off, $V_{in} = 0$). At $t = 0$ the step couples through $C_1$: $V_X$ jumps to 3 + 2 = 5 V. $M_1$ (now $V_{GS} = 3$ V) is saturated and discharges X with a constant current $\tfrac12\beta(2.3)^2 = 2.65\beta$, so $V_X$ ramps down linearly at $2.65\beta/C_1$ until it reaches 2.3 V. Then $M_1$ is in triode and $V_X$ decays roughly exponentially to 0 (time constant ≈ $C_1/(2.3\beta)$). Final $C_1$ voltage: −3 V (X at 0, the other plate at 3 V).
- Node X sees only $C_1$ (whose other plate is held by $V_{in}$) and the drain of $M_1$, so the jump is the full 3 V.

## Grading notes

+2: $V_X$ = 2 V before, jump to 5 V at the step, linear (saturation) fall to 2.3 V, then triode decay to 0 V. Times written with the voltage units left implicit (e.g., $t_1 \approx 1.02\,C_1/\beta$, meaning $1.02\ \mathrm{V^{-1}}\cdot C_1/\beta$) are fine. +1: jump and final value right but the two discharge phases not distinguished. 0: final value right but the jump missed (or jump right but end value wrong). -2 (asserted as fact): $V_X$ settling at 5 V, staying at 2 V, or the jump going the wrong way.
