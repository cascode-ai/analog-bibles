# Golden Solution - R675

## Reference answer

With $V_{ov} = V_{GS}-V_{TH}$, three equivalent forms:
$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\mu_0C_{ox}\frac{W}{L}\,\frac{V_{ov}(2+\theta V_{ov})}{(1+\theta V_{ov})^2} = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1+\theta V_{ov})^2}\right] = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1+\theta V_{ov}}\right].$$
- Derivation: the quotient rule gives $\tfrac12\mu_0C_{ox}(W/L)[2V_{ov}(1+\theta V_{ov}) - \theta V_{ov}^2]/(1+\theta V_{ov})^2$.
- Very small overdrive ($\theta V_{ov} \ll 1$): $g_m \approx \mu_0C_{ox}(W/L)V_{ov}(1 - \tfrac32\theta V_{ov}) \to \mu_0C_{ox}(W/L)V_{ov} = 2I_D/V_{ov}$. This is the square-law result, slightly reduced.
- Very large overdrive ($\theta V_{ov} \gg 1$): $I_D \approx \mu_0C_{ox}(W/L)V_{ov}/(2\theta)$ becomes linear in the overdrive, and $g_m \to \mu_0C_{ox}W/(2\theta L) = I_D/V_{ov}$. This is a constant, independent of the overdrive and the current: a higher bias no longer buys transconductance, much as with velocity saturation.
- Overall, $g_m$ rises monotonically with $V_{ov}$ but saturates, and $g_m/I_D$ falls from $2/V_{ov}$ toward $1/V_{ov}$.

## Grading notes

- +2: the correct derivative in any equivalent form; the small-overdrive limit equal to the square-law value $\mu_0C_{ox}(W/L)(V_{GS}-V_{TH})$; the large-overdrive limit equal to the constant $\mu_0C_{ox}W/(2\theta L)$ (current linear in the overdrive).
- +1: correct expression, with one limit only described qualitatively ("saturates") or missing.
- 0: a derivative that treats the denominator as constant, giving $\mu_0C_{ox}(W/L)V_{ov}/(1+\theta V_{ov})$ with limit $\mu_0C_{ox}W/(\theta L)$, but with qualitatively right limits.
- -2 (asserted as fact): $g_m$ claimed to keep growing linearly at large overdrive, to fall to zero, or to decrease with overdrive.
