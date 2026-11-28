# Golden Solution - R090

## Reference answer

- Cutoff: $V_{out}=3$ V up to $V_{in}=V_{TH0}=0.7$ V. At turn-on $I_D=0$, so $V_S=0$ and there is zero body bias.
- Saturation: $V_{in}=V_{TH}(I_DR_S)+\sqrt{2I_D/\beta}+I_DR_S$ and $V_{out}=V_{DD}-R_DI_D$. The falling curve starts with zero slope and approaches $-R_D/[(1+\eta)R_S]$ if $g_m R_S\gg1$, where $\eta=dV_{TH}/dV_S$.
- The triode boundary is $V_{out}=V_{in}-V_{TH}(V_S)$. Solve $V_{DD}-(R_D+R_S)I_D=\sqrt{2I_D/\beta}$ and insert the current into the saturation input formula to locate the boundary. If the sweep enters triode, the curve flattens toward the lower bound $V_{DD}R_S/(R_D+R_S)$.

![Example transfer characteristic](/q/R090/solution-01.svg)

## Grading notes

+2: $V_{DD}$ up to 0.7 V, a falling region whose slope approaches ≈ $-R_D/R_S$ (with or without the $1+\eta$ factor), triode entry at $V_{out} = V_{in} - V_{TH}$, and the floor ≈ $V_{DD}R_S/(R_D+R_S)$. +1: one of these features missing. 0: drawn like an undegenerated CS falling toward 0 V, without the $R_D/R_S$ slope or the floor. -2 (asserted as fact): non-inverting, $V_{out}$ reaching 0 V, or a large gain $g_mR_D$ claimed independent of $R_S$.

