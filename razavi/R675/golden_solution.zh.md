令 $V_{ov} = V_{GS}-V_{TH}$，有三种等价形式：
$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\mu_0C_{ox}\frac{W}{L}\,\frac{V_{ov}(2+\theta V_{ov})}{(1+\theta V_{ov})^2} = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1+\theta V_{ov})^2}\right] = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1+\theta V_{ov}}\right].$$
- 推导：由商的求导法则得 $\tfrac12\mu_0C_{ox}(W/L)[2V_{ov}(1+\theta V_{ov}) - \theta V_{ov}^2]/(1+\theta V_{ov})^2$。
- 过驱动电压非常小（$\theta V_{ov} \ll 1$）：$g_m \approx \mu_0C_{ox}(W/L)V_{ov}(1 - \tfrac32\theta V_{ov}) \to \mu_0C_{ox}(W/L)V_{ov} = 2I_D/V_{ov}$。这就是平方律（square law）的结果，只是略有减小。
- 过驱动电压非常大（$\theta V_{ov} \gg 1$）：$I_D \approx \mu_0C_{ox}(W/L)V_{ov}/(2\theta)$ 变为过驱动电压的线性函数，且 $g_m \to \mu_0C_{ox}W/(2\theta L) = I_D/V_{ov}$。这是一个常数，与过驱动电压和电流都无关：提高偏置不再能换来更大的跨导，这与速度饱和（velocity saturation）的情况非常相似。
- 总的来说，$g_m$ 随 $V_{ov}$ 单调上升但趋于饱和，而 $g_m/I_D$ 从 $2/V_{ov}$ 下降并趋近 $1/V_{ov}$。
