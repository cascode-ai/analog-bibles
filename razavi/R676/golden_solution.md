# Golden Solution - R676

## Reference answer

Let $\theta' = \mu_0/(2v_{sat}L) + \theta$ and $V_{ov} = V_{GS}-V_{TH}$, so that $I_D = \tfrac12\mu_0C_{ox}(W/L)V_{ov}^2/(1+\theta'V_{ov})$.
- Quotient rule: $g_m = \tfrac12\mu_0C_{ox}\dfrac{W}{L}\,\dfrac{2V_{ov}(1+\theta'V_{ov}) - \theta'V_{ov}^2}{(1+\theta'V_{ov})^2} = \tfrac12\mu_0C_{ox}\dfrac{W}{L}\,\dfrac{V_{ov}(2+\theta'V_{ov})}{(1+\theta'V_{ov})^2}$.
- Factor out $I_D$: $g_m = \dfrac{I_D}{V_{ov}}\cdot\dfrac{2+\theta'V_{ov}}{1+\theta'V_{ov}}$, and since $\dfrac{2+x}{1+x} = 1 + \dfrac{1}{1+x}$, $g_m = \dfrac{I_D}{V_{ov}}\left[1 + \dfrac{1}{1+\theta'V_{ov}}\right]$, which is the stated result.
- Equivalent route: $\ln I_D = \text{const} + 2\ln V_{ov} - \ln(1+\theta'V_{ov})$, so $g_m/I_D = 2/V_{ov} - \theta'/(1+\theta'V_{ov}) = (2+\theta'V_{ov})/[V_{ov}(1+\theta'V_{ov})]$.
- Limits: for $\theta'V_{ov} \ll 1$, $g_m \to 2I_D/V_{ov}$ (square law). For $\theta'V_{ov} \gg 1$, $g_m \to I_D/V_{ov} \to \mu_0C_{ox}W/(2\theta'L)$; when velocity saturation dominates ($\theta \ll \mu_0/(2v_{sat}L)$), this is $WC_{ox}v_{sat}$, the transconductance of a fully velocity-saturated device. So $g_m$ always lies between $I_D/V_{ov}$ and $2I_D/V_{ov}$.

## Grading notes

- +2: a correct derivation that reaches the stated expression (quotient rule or logarithmic derivative), with the step $(2+x)/(1+x) = 1 + 1/(1+x)$ or an equivalent made explicit. Discussing the limits is a plus, not required.
- +1: correct derivation with a skipped but straightforward step.
- 0: correct derivative not brought to the stated form.
- -2 (asserted as fact): an algebraically invalid step presented as a proof, or a wrong derivative claimed to match the target.
