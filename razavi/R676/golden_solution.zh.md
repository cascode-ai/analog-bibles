令 $\theta' = \mu_0/(2v_{sat}L) + \theta$，$V_{ov} = V_{GS}-V_{TH}$，则 $I_D = \tfrac12\mu_0C_{ox}(W/L)V_{ov}^2/(1+\theta'V_{ov})$。
- 由商的求导法则：$g_m = \tfrac12\mu_0C_{ox}\dfrac{W}{L}\,\dfrac{2V_{ov}(1+\theta'V_{ov}) - \theta'V_{ov}^2}{(1+\theta'V_{ov})^2} = \tfrac12\mu_0C_{ox}\dfrac{W}{L}\,\dfrac{V_{ov}(2+\theta'V_{ov})}{(1+\theta'V_{ov})^2}$。
- 提出 $I_D$：$g_m = \dfrac{I_D}{V_{ov}}\cdot\dfrac{2+\theta'V_{ov}}{1+\theta'V_{ov}}$；由于 $\dfrac{2+x}{1+x} = 1 + \dfrac{1}{1+x}$，得 $g_m = \dfrac{I_D}{V_{ov}}\left[1 + \dfrac{1}{1+\theta'V_{ov}}\right]$，即题中所给的结果。
- 等价的做法：$\ln I_D = \text{const} + 2\ln V_{ov} - \ln(1+\theta'V_{ov})$，因此 $g_m/I_D = 2/V_{ov} - \theta'/(1+\theta'V_{ov}) = (2+\theta'V_{ov})/[V_{ov}(1+\theta'V_{ov})]$。
- 极限情况：当 $\theta'V_{ov} \ll 1$ 时，$g_m \to 2I_D/V_{ov}$，即平方律（square law）的结果。当 $\theta'V_{ov} \gg 1$ 时，$g_m \to I_D/V_{ov} \to \mu_0C_{ox}W/(2\theta'L)$；当速度饱和占主导（$\theta \ll \mu_0/(2v_{sat}L)$）时，它等于 $WC_{ox}v_{sat}$，即完全速度饱和器件的跨导。因此 $g_m$ 总是介于 $I_D/V_{ov}$ 与 $2I_D/V_{ov}$ 之间。
