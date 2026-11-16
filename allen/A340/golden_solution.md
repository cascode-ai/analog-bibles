# Golden Solution - A340

## Reference answer

$A_{vd} = v_{out}/v_{in} \approx (g_mr_{ds})^2/3$; differential output resistance $\approx \tfrac23 g_mr_{ds}^2$ (each output to ground $g_mr_{ds}^2/3$).

- Single-ended output resistance: looking up, M6 cascodes the folding node whose resistance is $r_{ds4}\|r_{ds1} = r_{ds}/2$: $R_{up} \approx g_{m6}r_{ds6}(r_{ds}/2) = g_mr_{ds}^2/2$; looking down, M8 over M10: $R_{dn} \approx g_mr_{ds}^2$. $R_{out,se} = R_{up}\|R_{dn} = g_mr_{ds}^2/3$; between the outputs $2g_mr_{ds}^2/3$.
- Transconductance: the input-pair current $\pm g_mv_{in}/2$ enters the low-resistance source of the cascode (≈ $1/g_m$ with the output shorted) rather than the $r_{ds}/2$ at the folding node, so essentially all of it reaches the output: $i_{o} = \pm g_mv_{in}/2$.
- Each output: $v_o = \pm(g_m/2)(g_mr_{ds}^2/3)v_{in} = \pm(g_mr_{ds})^2v_{in}/6$; differential $(g_mr_{ds})^2/3$. (A nodal analysis gives 0.336 $(g_mr_{ds})^2$.)

## Grading notes

+2: gain ≈ $(g_mr_{ds})^2/3$ differential (or $(g_mr_{ds})^2/6$ per output, clearly labelled) and output resistance ≈ $\tfrac23 g_mr_{ds}^2$ differential (or $g_mr_{ds}^2/3$ per output), with the folding-node resistance $r_{ds}/2$ in the upper cascode. +1: both right with an unclear single-ended/differential label, or a small coefficient slip (e.g., folding node taken as $r_{ds}$, giving $g_mr_{ds}^2/2$ per output). 0: one of the two quantities right; or the gain reduced by a current-division factor such as $(2+k)/(2+2k)$ with open-circuit cascode input resistance (which double counts the loading). −2 (asserted as fact): an output resistance of order $r_{ds}$ or $g_mr_{ds}^2$ with no division, or a gain of order $g_mr_{ds}$ (single-stage without cascode effect).
