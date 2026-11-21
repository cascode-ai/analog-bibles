# Detailed solution - G047

Write the drain current of each device in gradual-channel form, as an integral over the channel potential between its source and drain. With body effect and channel-length modulation ignored, the integrand is the same function for both transistors, so the two integrals over adjacent voltage ranges add to a single integral from $V_S$ to $V_D$, which is the current of one device of length $L_1+L_2$.

### Step 1 — Gradual-channel form valid in every region

For a device with gate at $V_G$, source at $V_S$ and drain at $V_D$ (all referred to ground), integrating $I_D=k'W[V_G-V_t-V(y)]\,dV/dy$ along the channel gives

$$
I_D=\frac{k'W}L\int_{V_S}^{V_D}g(V)\,dV,\qquad g(V)=\max(V_G-V_t-V,\ 0).
$$

The $\max$ takes care of all regions: if $V_S\ge V_G-V_t$ the integrand is zero (cutoff); if $V_D<V_G-V_t$ the integral is the triode expression $\frac{k'W}L[(V_G-V_S-V_t)(V_D-V_S)-(V_D-V_S)^2/2]$; and if $V_D\ge V_G-V_t$ the integrand vanishes beyond pinch-off, giving the saturation current $\frac{k'W}{2L}(V_G-V_S-V_t)^2$. Since body effect is ignored, $V_t$, and hence $g$, is the same for both devices even though the upper device's source is at the internal node.

### Step 2 — Series connection

Let $V_X$ be the internal node. M1 (length $L_1$) runs from $V_S$ to $V_X$, M2 (length $L_2$) from $V_X$ to $V_D$, both with gate $V_G$, and they carry the same current:

$$
I_DL_1=k'W\int_{V_S}^{V_X}g(V)\,dV,\qquad I_DL_2=k'W\int_{V_X}^{V_D}g(V)\,dV .
$$

Adding the two equations eliminates $V_X$:

$$
I_D(L_1+L_2)=k'W\int_{V_S}^{V_D}g(V)\,dV\quad\Rightarrow\quad I_D=\frac{k'W}{L_1+L_2}\int_{V_S}^{V_D}g(V)\,dV ,
$$

the current of a single transistor of width $W$ and length $L_1+L_2$ with the same $V_G$, $V_S$, $V_D$, in every region.

### Step 3 — Explicit check with M2 saturated

When the stack conducts, $V_X<V_G-V_t$, so M1 is always in triode. If M2 is saturated, with $V_{ov}=V_G-V_S-V_t$ and $u=V_G-V_X-V_t$,

$$
I_D=\frac{k'W}{2L_2}u^2,\qquad
I_D=\frac{k'W}{L_1}\left[V_{ov}(V_X-V_S)-\frac{(V_X-V_S)^2}2\right]=\frac{k'W}{2L_1}\left(V_{ov}^2-u^2\right).
$$

Substituting $u^2=2I_DL_2/(k'W)$ into the second equation gives $I_D=\dfrac{k'W}{2(L_1+L_2)}V_{ov}^2$, the saturation current of the combined device. With M2 in triode the same elimination gives the triode expression with $L_1+L_2$.

### Step 4 — Role of the assumptions

The equivalence relies on the integrand being identical for both devices: no body effect (the same $V_t$ although M2's source sits at $V_X$) and no channel-length modulation (no extra $V_{DS}$ dependence that would differ between the two). This limitation belongs to the source-referenced square-law model; in a body-referenced charge-sheet model the integrand depends only on the local channel potential, and the series equivalence holds exactly even with body effect.
