# Golden Solution - R055

## Reference answer

The PMOS (source at X) and NMOS (source at ground) are in series with gates tied to $V_G$, so both must conduct: $I_X = 0$ unless $V_G > 0.7$ V and $V_X > V_G + 0.8$ V.
- Just above $V_X = V_G + 0.8$ the PMOS has small overdrive and limits the current: PMOS saturated, NMOS in triode (middle node near ground), $I_X = \tfrac12\beta_p(V_X - V_G - 0.8)^2$, rising parabolically.
- When this reaches the NMOS saturation current, at $V_X = V_G + 0.8 + \sqrt{\beta_n/\beta_p}\,(V_G - 0.7)$, the NMOS saturates and the PMOS goes into triode: $I_X = \tfrac12\beta_n(V_G - 0.7)^2$, constant (λ = 0).
- Family: larger $V_G$ moves the turn-on point to the right and raises the ceiling; for $V_G < 0.7$ V or $V_G > V_X - 0.8$ the current is zero.
- Equivalent transconductance: in the PMOS-limited region $\partial I_X/\partial V_G = -\beta_p(V_X - V_G - 0.8)$, negative and growing in magnitude; in the NMOS-limited region $+\beta_n(V_G - 0.7)$, constant; it jumps from negative to positive at the transition (with λ = 0); zero where $I_X = 0$.

## Grading notes

+2: zero current until $V_X > V_G + |V_{THP}|$ (and $V_G > V_{THN}$), PMOS-limited parabolic rise, NMOS-limited flat ceiling $\tfrac12\beta_n(V_G - V_{THN})^2$, correct $V_G$ dependence, and the sign change of $g_{m,eq}$ (negative in the PMOS-limited region, positive in the NMOS-limited region). +1: $I_X$ right but $g_{m,eq}$ given only for one region or with the wrong sign in the PMOS-limited part. 0: shape partly right (e.g., ceiling missing). -2 (asserted as fact): devices read as parallel, current for $V_G < V_{THN}$, or the PMOS source taken at the middle node so that it conducts for small $V_X$.
