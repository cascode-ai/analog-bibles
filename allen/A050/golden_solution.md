# Golden Solution - A050

## Reference answer

Taking $V_{TS} = V_{TD} = V_T$ and $\beta = K'W/L$:

Constant $v_{GS} = V_{GS} > V_T$:
- $v_{DS} \ge V_{GS} - V_T$: the drain term is off ($v_{GD} \le V_T$), $i_D = \frac{\beta}{2}(V_{GS}-V_T)^2$, constant: saturated region (channel pinched off at the drain end).
- $v_{DS} < V_{GS} - V_T$ (including all negative $v_{DS}$): both terms on, $i_D = \frac{\beta}{2}[(V_{GS}-V_T)^2 - (V_{GS}-v_{DS}-V_T)^2] = \beta[(V_{GS}-V_T)v_{DS} - v_{DS}^2/2]$: nonsaturated region. This is a downward parabola through the origin with slope $\beta(V_{GS}-V_T)$ there, reaching its maximum (zero slope) exactly at $v_{DS} = V_{GS}-V_T$, where it joins the flat line smoothly.
- For $v_{DS} < 0$ the same parabola continues into the third quadrant: $i_D < 0$ and $|i_D|$ grows quadratically without limit, because the drain now acts as the source and its gate drive $v_{GD} = V_{GS} + |v_{DS}|$ keeps increasing; with $v_{GS}$ held constant there is no saturation for negative $v_{DS}$.

Constant $v_{GD} = V_{GD} > V_T$:
- $v_{DS} \le -(V_{GD} - V_T)$: the source term is off ($v_{GS} = V_{GD} + v_{DS} \le V_T$), $i_D = -\frac{\beta}{2}(V_{GD}-V_T)^2$, constant and negative: saturated region with the roles of source and drain interchanged (pinch-off at the source end).
- $v_{DS} > -(V_{GD} - V_T)$: both terms on, $i_D = \beta[(V_{GD}-V_T)v_{DS} + v_{DS}^2/2]$: nonsaturated region, passing through the origin with slope $\beta(V_{GD}-V_T)$; for $v_{DS} > 0$ it rises quadratically without saturating.
- The second sketch is the first one rotated by 180° about the origin (point symmetry), which expresses the source–drain symmetry of the model.

(If $V_{TS} \ne V_{TD}$, the curves are the same except that $i_D \ne 0$ at $v_{DS} = 0$ and the region boundaries are $v_{DS} = v_{GS} - V_{TD}$ and $v_{DS} = V_{TS} - v_{GD}$.)

## Grading notes

+2: both sketches correct: for constant $v_{GS}$, saturation (flat) for $v_{DS} \ge v_{GS} - V_T$ and a single nonsaturated parabola for all smaller $v_{DS}$, continuing to large negative currents for $v_{DS} < 0$; for constant $v_{GD}$, flat negative saturation for $v_{DS} \le -(v_{GD} - V_T)$ and nonsaturation above it, growing quadratically for positive $v_{DS}$; regions labelled. +1: both sketches right in shape with a region boundary mislabelled, or the negative-$v_{DS}$ part of the first sketch drawn but its unbounded growth not noted. 0: one sketch fully correct and the other missing or wrong. −2 (asserted as fact): the first sketch saturating (flat) for negative $v_{DS}$, the regions swapped (saturation near the origin), $i_D$ positive for negative $v_{DS}$ in the first sketch, or the second sketch drawn identical to the first. A text-art (ASCII) sketch is graded together with the written equations and region descriptions: if the piecewise equations, boundaries and stated behaviour are correct, an ambiguous drawing detail (e.g. a horizontal line marking the $-I_R$ level that runs past the boundary while the parabola visibly leaves it) is not a critical claim.
