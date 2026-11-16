# Golden Solution - A339

## Reference answer

$A_{vd} \approx (g_mr_{ds})^2/2$; differential output resistance ≈ $r_{ds}$ (each output to ground $r_{ds}/2$).

- First stage: node A (drain of the input device driven by the + side of $v_{in}$) moves by $-g_m(r_{ds}/2)(v_{id}/2) = -(g_mr_{ds}/4)v_{id}$; node B by $+(g_mr_{ds}/4)v_{id}$.
- Output $v_{o1}$: the outer p-channel device (gate A) adds $g_m(g_mr_{ds}/4)v_{id}$; the inner p-channel device (gate B) reduces its current by the same amount, and the n-channel mirror copies that reduction, so the sink at $v_{o1}$ drops by $g_m(g_mr_{ds}/4)v_{id}$. Net current $(g_m^2r_{ds}/2)v_{id}$ into $r_{ds}\|r_{ds} = r_{ds}/2$: $v_{o1} = (g_mr_{ds})^2v_{id}/4$; $v_{o2}$ is the negative of it.
- $A_{vd} = (v_{o1} - v_{o2})/v_{id} = (g_mr_{ds})^2/2$ — twice the simple two-stage design because the push–pull output uses both transconductances.
- Output resistance: $r_{ds}/2$ per output, $r_{ds}$ between the outputs.

## Grading notes

+2: $(g_mr_{ds})^2/2$ differential (or $(g_mr_{ds})^2/4$ per output, labelled) and $r_{ds}$ between outputs ($r_{ds}/2$ per output, labelled), with the push–pull doubling explained. +1: both right with unclear single-ended/differential labelling. 0: gain missing the push–pull doubling ($(g_mr_{ds})^2/4$ claimed as differential) with output resistance right. −2 (asserted as fact): first-stage outputs both driving the same output with opposite effects cancelling (gain ≈ 0), or a cascode-level output resistance.
