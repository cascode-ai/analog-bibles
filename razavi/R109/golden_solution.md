# Golden Solution - R109

## Reference answer

$I_X = I_{D1} - |I_{D2}|$ with $M_2$ diode-connected: $I_X$ starts at $-\tfrac12\beta_p(2.2)^2 = -2.42\beta_p$, rises (both currents push it up), and is flat at $I_1 = \tfrac12\beta_n(V_b - 0.7)^2$ for $V_X$ above both $V_b - 0.7$ V and 2.2 V.

- $M_2$: $V_{SG} = V_{SD} = 3 - V_X$, saturated when on: $|I_{D2}| = \tfrac12\beta_p(2.2 - V_X)^2$ for $V_X < 2.2$ V, zero above.
- $M_1$: triode for $V_X < V_b - 0.7$ V ($\beta_n[(V_b - 0.7)V_X - V_X^2/2]$), saturated at $I_1$ above.
- $I_X$ is monotonically increasing; zero crossing where $I_{D1} = |I_{D2}|$; final value $I_1$ (slope $\lambda I_1$ with channel-length modulation).
- Transition points: $V_X = V_b - 0.7$ V ($M_1$ saturates), $V_X = 2.2$ V ($M_2$ turns off).

## Grading notes

+2: $M_2$ diode-connected (square-law decrease to zero at $V_X = V_{DD} - |V_{THP}| = 2.2$ V), $M_1$ triode then constant above $V_b - V_{TH}$, $I_X$ from $-\tfrac12\beta_p(2.2\ \mathrm{V})^2$ rising to $I_1$. +1: one breakpoint or the initial value missing. 0: only one device handled. -2 (asserted as fact): $M_2$ treated as a current source with fixed gate voltage, $M_2$ turning off at 0.8 V, or $I_X$ decreasing.
