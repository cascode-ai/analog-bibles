# Golden Solution - A082

## Reference answer

$R_{AB} = \dfrac{1}{2\beta(V_C - V_T)}$, independent of $v_{AB}$; the single transistor gives $R = \dfrac{v_{DS}}{i_D} = \dfrac{1}{\beta(V_C - V_T - v_{DS}/2)}$ (incremental $1/[\beta(V_C - V_T - v_{DS})]$), which depends on $v_{DS}$. The parallel pair of [Fig. 1] is more linear.

- Take $v_{AB} > 0$ (A is the drain of both devices, B the source).
- M1: $V_{GS1} = (v_A + V_C) - v_B = V_C + v_{AB}$, so $i_1 = \beta[(V_C - V_T + v_{AB})v_{AB} - v_{AB}^2/2] = \beta[(V_C - V_T)v_{AB} + v_{AB}^2/2]$.
- M2: $V_{GS2} = V_C$, so $i_2 = \beta[(V_C - V_T)v_{AB} - v_{AB}^2/2]$.
- $i_{AB} = i_1 + i_2 = 2\beta(V_C - V_T)v_{AB}$: the square terms cancel, $R_{AB} = 1/[2\beta(V_C - V_T)]$. The same result follows for $v_{AB} < 0$ by symmetry. It holds while both stay in the triode region, $|v_{AB}| < V_C - V_T$.
- Single device: $i_D = \beta[(V_C - V_T)v_{DS} - v_{DS}^2/2]$, so the resistance varies with $v_{DS}$ (second-order term $-\beta v_{DS}^2/2$, about $v_{DS}/[2(V_C - V_T)]$ fractional change). It reduces to $r_{ds} = 1/[\beta(V_C - V_T)]$ only as $v_{DS} \to 0$. In [Fig. 2] the gate is also tied to a fixed $V_{BIAS}$, so $V_{GS}$ itself moves with the source voltage, adding further nonlinearity.
- The pair is linear to the accuracy of the square-law model; body effect and mobility degradation leave residual nonlinearity. It also has half the resistance of one device of the same size.

## Grading notes

+2: $R_{AB} = 1/[2\beta(V_C - V_T)]$ with the cancellation of the $v_{AB}^2$ terms shown, the single-device expression depending on $v_{DS}$ (either the large-signal $1/[\beta(V_C - V_T - v_{DS}/2)]$ or the incremental $1/[\beta(V_C - V_T - v_{DS})]$), and the parallel pair identified as more linear. +1: correct conclusion with one of the two expressions incomplete (e.g. the cancellation asserted but not shown). 0: both expressions given but no comparison, or only the parallel-pair result. −2 (asserted as fact): the single transistor claimed more linear, $R_{AB} = 1/[\beta(V_C - V_T)]$ (missing factor 2) presented as the linearized result with a wrong conclusion, or the devices treated as saturated.
