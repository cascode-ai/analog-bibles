# Golden Solution - R624

## Reference answer

$V_{OS,tot} = \dfrac{V_{OS}}{1+A_v}\left(1 + \dfrac{2C_{in}}{C}\right) \approx \dfrac{V_{OS}}{A_v}\cdot\dfrac{C + 2C_{in}}{C}$.
- Cancellation mode: $V_{out} = V_{XY}$ and $V_{out} = -A_v(V_{XY} - V_{OS})$, so $V_{XY} = \dfrac{A_v}{1+A_v}V_{OS}$ is stored on $C_1$, $C_2$ (and $C_{in}$).
- Amplification mode: $X$ and $Y$ float. A differential input $V_{in}$ reaches $X$–$Y$ through the series combination of $C_1$ and $C_2$ ($C/2$) against $C_{in}$: $\Delta V_{XY} = V_{in}\dfrac{C/2}{C/2 + C_{in}} = V_{in}\dfrac{C}{C + 2C_{in}}$, added to the stored $V_{XY}$.
- $V_{out} = -A_v\left[V_{XY} - V_{OS}\right] = -A_v\left[-\dfrac{V_{OS}}{1+A_v} + V_{in}\dfrac{C}{C+2C_{in}}\right]$; $V_{out} = 0$ for $V_{in} = \dfrac{V_{OS}}{1+A_v}\cdot\dfrac{C + 2C_{in}}{C}$.
- The residual offset rises by $1 + 2C_{in}/C$ because the input signal is attenuated by the capacitive divider while the residual error at $X$–$Y$ is not.

## Grading notes

+2: $V_{OS}(1 + 2C_{in}/C)/(1+A_v)$ or the equivalent $(V_{OS}/A_v)(C+2C_{in})/C$ for large $A_v$, from the stored $A_vV_{OS}/(1+A_v)$ and the capacitive divider $C/(C+2C_{in})$. +1: correct result with $1+A_v$ and $A_v$ used interchangeably without comment, or a terse derivation. 0: divider taken as $C/(C+C_{in})$ (series combination of $C_1$, $C_2$ missed), otherwise correct. -2 (asserted as fact): $C_{in}$ claimed to have no effect, the offset claimed to be $V_{OS}$ or $V_{OS}C_{in}/C$, or the divider applied to the stored error rather than to the input.
