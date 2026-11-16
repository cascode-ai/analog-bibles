# Golden Solution - G047

## Reference answer

Use the gradual-channel form of the drain current, valid in all regions when body effect and channel-length modulation are ignored: for a device with source at $V_S$, drain at $V_D$ and gate at $V_G$,
$$I_D = \frac{k'W}{L}\int_{V_S}^{V_D} g(V)\,dV,\qquad g(V) = \max(V_G - V_t - V,\,0)$$
(cutoff when $V_S \ge V_G - V_t$; triode $I_D = \frac{k'W}{L}[(V_G-V_S-V_t)(V_D-V_S) - (V_D-V_S)^2/2]$; saturation when $V_D \ge V_G - V_t$, the upper limit being effectively clipped at $V_G - V_t$, giving $\frac{k'W}{2L}(V_G-V_S-V_t)^2$).

Let $V_X$ be the internal node. The same current flows in both devices:
$I_DL_1 = k'W\int_{V_S}^{V_X}g\,dV$ (M1) and $I_DL_2 = k'W\int_{V_X}^{V_D}g\,dV$ (M2). Adding,
$$I_D(L_1+L_2) = k'W\int_{V_S}^{V_D}g\,dV \;\Rightarrow\; I_D = \frac{k'W}{L_1+L_2}\int_{V_S}^{V_D}g\,dV,$$
which is the current of a single $W/(L_1+L_2)$ device with the same $V_G$, $V_S$, $V_D$, in every region. The same $V_t$ for both devices (no body effect, although M2's source is at $V_X$) and no CLM are what make $g$ identical for both and the integrals additive. (This limitation belongs to the source-referenced square-law model; in a bulk-referenced gradual-channel (charge-sheet) model the integrand depends only on the local channel potential, so the series equivalence also holds exactly with body effect.)

Explicit check: when the stack conducts, $V_X < V_G - V_t$, so M1 is always in triode. If M2 is saturated, $I_D = \frac{k'W}{2L_2}(V_G - V_X - V_t)^2$ and $I_D = \frac{k'W}{L_1}[V_{ov}(V_X - V_S) - (V_X-V_S)^2/2]$ with $V_{ov} = V_G - V_S - V_t$; writing $u = V_G - V_X - V_t$, the second gives $I_D = \frac{k'W}{2L_1}(V_{ov}^2 - u^2)$; eliminating $u^2 = 2I_DL_2/(k'W)$ yields $I_D = \frac{k'W}{2(L_1+L_2)}V_{ov}^2$. If M2 is in triode the same elimination gives the triode expression with $L_1+L_2$.

## Grading notes

+2: a proof valid for all operating regions — either the integral/charge argument with the clipped integrand, or explicit algebra for both the saturated-M2 and triode-M2 cases — and the observation that M1 is always in triode (or equivalent), with the role of neglecting body effect noted. +1: only one case proved (typically M2 saturated, the harder case) with correct algebra, or the integral argument without mentioning saturation. 0: plausibility argument only ("resistances add") with no derivation. −2 (asserted as fact): claiming M1 can be saturated while M2 conducts, an algebra "proof" that equates $W/L$ by adding $1/L$ incorrectly to get $L_1L_2/(L_1+L_2)$, or claiming that the source-referenced square-law derivation stays exact with body effect included ($M_2$'s $V_t$ unchanged although its source sits at $V_X$). Saying that the equivalence remains exact with body effect in a bulk-referenced charge-sheet model is correct, not a false claim.
