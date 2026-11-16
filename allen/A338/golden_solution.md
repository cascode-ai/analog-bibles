# Golden Solution - A338

## Reference answer

$A_{vd} = v_{od}/v_{id} \approx (g_mr_{ds})^2/4$; differential output resistance (between $v_{o1}$ and $v_{o2}$) $\approx r_{ds}$ (each output to ground: $r_{ds}/2$).

- First stage: $v_{d1} - v_{d2} = -g_{m1}(r_{ds1}\|r_{ds3})v_{id} = -(g_mr_{ds}/2)v_{id}$.
- Second stage (each side common source M7/M6 with current-sink load M9/M8): gain $-g_m(r_{ds}\|r_{ds}) = -g_mr_{ds}/2$.
- $A_{vd} = (g_mr_{ds}/2)^2 = (g_mr_{ds})^2/4$; each single-ended output gives half, $(g_mr_{ds})^2/8$.
- Output: each node has $r_{ds6}\|r_{ds8} = r_{ds}/2$ to ground; between the two outputs $2(r_{ds}/2) = r_{ds}$ ($C_c$, $R_z$ play no role at dc).

## Grading notes

+2: gain $(g_mr_{ds})^2/4$ (differential; or $(g_mr_{ds})^2/8$ per output, clearly labelled) and output resistance $r_{ds}$ between the outputs ($r_{ds}/2$ per output, clearly labelled). +1: both right but the single-ended/differential labelling of one quantity unclear (e.g., "$r_{out} = r_{ds}/2$" without saying it is per output). 0: one of the two quantities right. −2 (asserted as fact): stage gains $g_mr_{ds}$ (load $r_{ds}$ instead of $r_{ds}/2$, giving $(g_mr_{ds})^2$), or an output resistance of the order $g_mr_{ds}^2$ (cascode-like) for this circuit.
