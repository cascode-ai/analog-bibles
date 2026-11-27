# Golden Solution - R055

## Reference answer

### Current $I_X$

The two transistors are in series. If $V_G\le 0.7\ \mathrm{V}$ or $V_X\le V_G+0.8\ \mathrm{V}$, then $I_X=0$. When both are on, the transition voltage is $V_k=V_G+0.8\ \mathrm{V}+\sqrt{\beta_n/\beta_p}\,(V_G-0.7\ \mathrm{V})$.

| Region | $I_X$ |
|---|---|
| $V_X<V_k$, PMOS-limited | $\tfrac12\beta_p(V_X-V_G-0.8\ \mathrm{V})^2$ |
| $V_X>V_k$, NMOS-limited | $\tfrac12\beta_n(V_G-0.7\ \mathrm{V})^2$ |

The currents agree at $V_X=V_k$. Increasing $V_G$ delays turn-on and raises the current plateau. The panels use the same axis scales and $\beta_n=\beta_p=1\ \mathrm{mA/V^2}$.

![Illustrative $I_X$ versus $V_X$ curves](/q/R055/solution-ix.svg)

### Equivalent transconductance $g_{m,eq}=\partial I_X/\partial V_G$

The cutoff segment is zero. The PMOS-limited segment is $-\beta_p(V_X-V_G-0.8\ \mathrm{V})$, and the NMOS-limited segment is $+\beta_n(V_G-0.7\ \mathrm{V})$. Where the transition falls within the sweep, open circles mark its one-sided limits. At $V_X=V_k$, the two derivatives with respect to $V_G$ at fixed $V_X$ differ, so the partial derivative is undefined.

![Illustrative equivalent transconductance curves](/q/R055/solution-gm.svg)

## Grading notes

- +2 for zero current unless $V_G>V_{THN}$ and $V_X>V_G+|V_{THP}|$, a PMOS-limited parabolic rise, an NMOS-limited flat ceiling $\tfrac12\beta_n(V_G-V_{THN})^2$, the correct dependence on $V_G$, and negative $g_{m,eq}$ in the PMOS-limited region and positive $g_{m,eq}$ in the NMOS-limited region.
- +1 for correct $I_X$ with $g_{m,eq}$ given for only one region or with the wrong sign in the PMOS-limited region.
- 0 for a partly correct shape, for example a missing ceiling.
- −2 when asserted as fact for treating the devices as parallel, claiming current for $V_G<V_{THN}$, or placing the PMOS source at the middle node and concluding that it conducts at small $V_X$.
