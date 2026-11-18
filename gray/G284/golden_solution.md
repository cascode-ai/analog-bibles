# Golden Solution - G284

## Reference answer

$T \approx 65.9$ ($a = 98.9$, $f = 2/3$).

- Feedback network h parameters: $f = h_{12f} = R_1/(R_1+R_2) = 2/3$; $h_{11f} = R_1\|R_2 = 66.7$ kΩ in series with the op-amp input; $h_{22f}$: $R_1+R_2 = 300$ kΩ across the output.
- Basic amplifier: $v_x = v_i\,R_i/(R_i + 66.7\text{k}) = 0.4286\,v_i$; $v_o = a_vv_x\,\dfrac{300\text{k}}{300\text{k} + 1\text{M}} = 0.2308\,a_vv_x$; $a = 1000\times0.4286\times0.2308 = 98.9$.
- $T = af = 65.9$ (closed-loop gain $a/(1+T) = 1.478$, ideal 1.5). This is the standard unilateral two-port split, neglecting the feedback network's feed-forward $h_{21f} = -2/3$ against $h_{21a} = -a_vR_i/R_o = -50$; keeping it in the forward term gives $T = 66.8$.
- Not the same quantity: the return ratio of the controlled source $a_v$ (with $V_i$ zeroed, all loading kept) is $a_v\,\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i} = 35.1$. It is the exact loop quantity, but it is not the h-parameter $af$ asked for here; the two differ because the two-port split assigns $h_{11f}$ and $h_{22f}$ loading with the other port shorted/opened.

## Grading notes

+2: $T$ = 64–68 with both loadings ($h_{11f}$ at the input and $R_1+R_2$ at the output) included (65.9 unilateral, 66.8 with $h_{21f}$ kept; both fine). +1: one loading omitted but stated, or an arithmetic slip. 0: correct method setup, wrong final value. An answer that computes the return ratio of $a_v$ (≈ 35.1), explicitly identifies it as the return ratio and says it is not (or differs from) the h-parameter $af$, without giving $af$: 0 (correct analysis of a different quantity). An answer that derives $af \approx 65.9$ but then declares the return ratio 35.1 to be the correct or "exact" $af$: 0. Giving 35.1 as an additional, correctly labelled return ratio next to $af \approx 66$ is not penalized. −2 (asserted as fact): $T = a_vf = 667$ (loading ignored and asserted), $f = 1/3$, or ≈ 35.1 presented as the h-parameter two-port $af$ (e.g. with $f$ redefined as a loaded divider $(R_1\|R_i)/(R_2 + R_1\|R_i) = 2/7$ instead of $h_{12f} = 2/3$, or with the claim that the loop gain is the same wherever the loop is cut).
