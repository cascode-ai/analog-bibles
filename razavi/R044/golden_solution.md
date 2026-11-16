# Golden Solution - R044

## Reference answer

With $k = \mu_nC_{ox}W/L$ and $V_{ov} = V_{GS} - V_{TH}$:
$I_D = 0$ for $V_{GS} \le V_{TH}$; $I_D = \dfrac{k}{2}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right] = \mu_nC_{ox}\dfrac{W}{2L}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right]$ for $V_{DS} \le V_{ov}$; $I_D = \tfrac12\mu_nC_{ox}\dfrac{W}{2L}V_{ov}^2$ for $V_{DS} \ge V_{ov}$. These are exactly the equations of one transistor of aspect ratio $W/(2L)$.

Derivation: let $V_X$ be the middle node. Bottom device: $V_{GS2} = V_{GS}$, $V_{DS2} = V_X$; top device: $V_{GS1} = V_{GS} - V_X$, $V_{DS1} = V_{DS} - V_X$ (same $V_{TH}$ because γ = 0). The top device conducts only if $V_{GS} - V_X > V_{TH}$, i.e. $V_X < V_{ov}$, so the bottom device is always in triode: $I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_X)^2]$.
- Top saturated ($V_{DS} \ge V_{ov}$): $I_D = \tfrac{k}{2}(V_{ov} - V_X)^2$. Equating gives $(V_{ov} - V_X)^2 = V_{ov}^2/2$, so $I_D = \tfrac{k}{4}V_{ov}^2 = \tfrac12\mu_nC_{ox}\tfrac{W}{2L}V_{ov}^2$.
- Top in triode ($V_{DS} < V_{ov}$): $I_D = \tfrac{k}{2}[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2]$. Adding the two expressions: $2I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_{DS})^2]$, so $I_D = \tfrac{k}{2}[V_{ov}V_{DS} - V_{DS}^2/2]$.
(Equivalently, integrating $I_D\,dx = \mu_nC_{ox}W(V_{GS} - V - V_{TH})dV$ over a total channel length 2L.)

## Grading notes

+2: correct $I_D$ in both triode and saturation with the factor $W/(2L)$, a valid proof (node-voltage algebra or gradual-channel integration over 2L), and the observation that the bottom device is always in triode or that γ = 0 is needed for equal thresholds. +1: saturation case proven, triode case only asserted (or vice versa). 0: correct final claim with a proof that has a significant gap. -2 (asserted as fact): equivalent aspect ratio $W/L$ or $2W/L$, both devices assumed saturated simultaneously to derive the result, or an $I_D$ expression inconsistent with $W/(2L)$.
