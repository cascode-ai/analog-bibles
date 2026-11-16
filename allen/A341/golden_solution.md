# Golden Solution - A341

## Reference answer

$A_{vd} \approx g_mr_{ds}$ (each output $\pm\tfrac12 g_mr_{ds}v_{in}$; output resistance $r_{ds}$ per output, $2r_{ds}$ between the outputs).

- Small-signal currents: with $\pm v_{in}/2$ on the gates of M1 and M4 and M2, M3 at ac ground, each pair sees half of its gate voltage: $i_1 = 0.25g_mv_{in}$, $i_2 = -0.25g_mv_{in}$, $i_3 = 0.25g_mv_{in}$, $i_4 = -0.25g_mv_{in}$.
- The drains of M1 and M3 share the node at M7's drain (source of M9): $i_1 + i_3 = 0.5g_mv_{in}$ is drawn away from M9; the drains of M2 and M4 share M8's node: $-0.5g_mv_{in}$ for M10.
- Output resistance: down, the current sink $r_{ds11}$ (or $r_{ds12}$) = $r_{ds}$; up, the cascode M9 over a node of ≈ $r_{ds}/2$ gives ≈ $g_mr_{ds}^2/2 \gg r_{ds}$. So $R_{out} \approx r_{ds}$ per output.
- $v_{out}^- \approx -0.5g_mr_{ds}v_{in}$, $v_{out}^+ \approx +0.5g_mr_{ds}v_{in}$; $v_{out} = v_{out}^+ - v_{out}^- \approx g_mr_{ds}v_{in}$ (a nodal analysis gives 0.94 $g_mr_{ds}$, the difference coming from the finite cascode resistance).

## Grading notes

+2: differential gain ≈ $g_mr_{ds}$ (or $\pm g_mr_{ds}/2$ per output, labelled), from the quarter-$g_m$ currents summed at the two folding nodes and an output resistance ≈ $r_{ds}$ set by the n-channel sinks. +1: right gain with the output-resistance reasoning thin or slightly off (e.g., $r_{ds}\|g_mr_{ds}^2/2$ not simplified). 0: $g_mr_{ds}/2$ stated as the differential gain without labelling, or $i_1 = 0.5g_mv_{in}$ per device giving $2g_mr_{ds}$. −2 (asserted as fact): gain of order $(g_mr_{ds})^2$ (cascode output resistance assumed at the output), or M2/M3 treated as signal inputs.
