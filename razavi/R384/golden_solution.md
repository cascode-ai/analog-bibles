# Golden Solution - R384

## Reference answer

$$\overline{V_{n,in}^2} = \frac{8kT\gamma}{g_{m1}} + 4kTR_S + \frac{2K_N}{C_{ox}(WL)_1f}$$
$M_3$ and $M_4$ contribute nothing.

- With ideal current sources and λ = 0, $M_1$'s drain current is fixed, so $g_{m1}(V_{G1} - V_{S1}) + I_{n1} = 0$: the source follows the gate exactly, $V_{S1} = V_{G1} + I_{n1}/g_{m1}$ ($M_1$'s noise appears as a gate voltage).
- KCL at the source node: $I_{D3}$ = (bottom source) − (top source) + current into $R_S$. So $I_{D3} - I_{D4} = 2\left[\dfrac{V_{S1} - V_{S2}}{R_S} + I_{n,RS}\right]$: transconductance $2/R_S$.
- $M_3$'s noise is absorbed by the loop (its gate node has infinite impedance, so the loop gain is infinite): $I_{D3}$ is set by KCL, not by $M_3$.
- Referred: $M_1$, $M_2$: $2\times4kT\gamma/g_{m1}$ (thermal) and $2K_N/(C_{ox}(WL)_1f)$ (flicker); $R_S$: $I_{n,RS}R_S$ → $4kTR_S$.

## Grading notes

+2: transconductance $2/R_S$, the three contributions ($M_1$/$M_2$ thermal and flicker, $R_S$ as $4kTR_S$) and the statement that $M_3$, $M_4$ contribute nothing. +1: correct result with the $R_S$ term off by a factor of 2 or 4 through a gain slip, or a weak argument for dropping $M_3$/$M_4$. 0: $M_3$/$M_4$ noise included but marked small, rest right. -2 (asserted as fact): $M_3$/$M_4$ noise asserted to appear directly in the output, $M_1$/$M_2$ noise said to be suppressed by the loop, or the transconductance taken as $g_{m1}$ or $g_{m3}$.
