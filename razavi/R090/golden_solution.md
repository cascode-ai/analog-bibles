# Golden Solution - R090

## Reference answer

An inverting characteristic: flat at $V_{DD}$ up to $V_{in} = 0.7$ V, a falling region that becomes nearly linear with slope ≈ $-R_D/R_S$ (degeneration), then a flattening in triode toward the floor $V_{DD}R_S/(R_S+R_D)$.

- $V_{in} \le 0.7$ V: $M_1$ off, $V_{out} = V_{DD}$ (turn-on exactly at $V_{TH0}$ because the source is at 0 V when $I_D = 0$).
- Saturation: $V_{in} = V_{TH}(I_DR_S) + \sqrt{2I_D/\beta} + I_DR_S$, $V_{out} = V_{DD} - R_DI_D$; slope $-g_mR_D/[1 + (g_m+g_{mb})R_S]$, growing from 0 toward ≈ $-R_D/[(1+\eta)R_S]$ when $g_mR_S \gg 1$.
- Triode once $V_{out} < V_{in} - V_{TH}(V_S)$ (drain below gate minus threshold): the slope magnitude decreases and $V_{out}$ approaches $V_{DD}R_S/(R_S + R_D)$ (the value with $M_1$ a short), staying somewhat above it at $V_{in} = V_{DD}$.
- Transition points: $V_{in} = 0.7$ V; $V_{out} = V_{in} - V_{TH}$; lower bound $V_{DD}R_S/(R_D+R_S)$.

## Grading notes

+2: $V_{DD}$ up to 0.7 V, a falling region whose slope approaches ≈ $-R_D/R_S$ (with or without the $1+\eta$ factor), triode entry at $V_{out} = V_{in} - V_{TH}$, and the floor ≈ $V_{DD}R_S/(R_D+R_S)$. +1: one of these features missing. 0: drawn like an undegenerated CS falling toward 0 V, without the $R_D/R_S$ slope or the floor. -2 (asserted as fact): non-inverting, $V_{out}$ reaching 0 V, or a large gain $g_mR_D$ claimed independent of $R_S$.
