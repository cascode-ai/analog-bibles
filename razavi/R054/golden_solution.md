# Golden Solution - R054

## Reference answer

The NMOS and PMOS are in parallel between X and ground with gates tied to $V_G$; $I_X = I_N + I_P$.
- NMOS (source at ground): off if $V_G < 0.7$ V. Otherwise triode for $V_X < V_G - 0.7$: $I_N = \beta_n[(V_G - 0.7)V_X - V_X^2/2]$; saturated for $V_X > V_G - 0.7$: $I_N = \tfrac12\beta_n(V_G - 0.7)^2$.
- PMOS (source at X, drain at ground): on only for $V_X > V_G + 0.8$, and then always saturated (its $V_{SD} = V_X$ exceeds $V_{SG} - |V_{THP}|$): $I_P = \tfrac12\beta_p(V_X - V_G - 0.8)^2$.
- $I_X$ vs $V_X$ for a given $V_G > 0.7$ V: triode rise, flat plateau $\tfrac12\beta_n(V_G - 0.7)^2$ from $V_G - 0.7$ to $V_G + 0.8$, then a second parabolic rise from the PMOS. For $V_G < 0.7$ V: zero until $V_X = V_G + 0.8$, then the PMOS parabola. Increasing $V_G$ raises the plateau and pushes the PMOS turn-on to the right (it disappears from the 0–3 V range for $V_G > 2.2$ V); curves for different $V_G$ can cross at high $V_X$.
- Equivalent transconductance $g_{m,eq} = \partial I_X/\partial V_G = g_{mN} - g_{mP}$: $\beta_nV_X$ in the NMOS triode region, $\beta_n(V_G - 0.7)$ on the plateau, then $\beta_n(V_G - 0.7) - \beta_p(V_X - V_G - 0.8)$ once the PMOS conducts, decreasing linearly with slope $-\beta_p$, crossing zero at $V_X = V_G + 0.8 + (\beta_n/\beta_p)(V_G - 0.7)$ and becoming negative (raising $V_G$ turns the PMOS down). For $V_G < 0.7$ V it is 0 and then $-\beta_p(V_X - V_G - 0.8)$.

![Illustrative $I_X$ versus $V_X$ curves](/q/R054/solution-ix.svg)

![Illustrative equivalent transconductance curves](/q/R054/solution-gm.svg)

## Grading notes

+2: correct regions for both devices (NMOS triode/saturation boundary at $V_G - V_{THN}$; PMOS on above $V_G + |V_{THP}|$ and always saturated), resulting $I_X$ shape (rise, plateau, second rise) with correct dependence on $V_G$, and $g_{m,eq} = g_{mN} - g_{mP}$ that becomes negative where the PMOS dominates. +1: $I_X$ correct but $g_{m,eq}$ sign or region partly wrong, or the PMOS saturation not justified. 0: one device analysed correctly, the other wrong. -2 (asserted as fact): devices read as in series, PMOS source taken at ground, PMOS conducting for small $V_X$, or $g_{m,eq}$ always positive with both contributions added. A slip in a single expression that contradicts the answer's own correct boundaries and currents (e.g. the NMOS triode current written as $\beta_n(V_GV_X - V_X^2/2)$ while the boundary $V_G - 0.7$ and the plateau $\tfrac12\beta_n(V_G - 0.7)^2$ are right) is a minor computational slip: +1 if the $I_X$ sketch and $g_{m,eq}$ are otherwise right.
