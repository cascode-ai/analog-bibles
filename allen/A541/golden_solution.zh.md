$k = 1$：$|N(f)| = \dfrac{2\Delta}{\sqrt{6f_s}}\sin\dfrac{\pi f}{f_s}$，$f_B \approx 33$ kHz（过采样率 $M = f_s/2f_B \approx 151$）。
$k = 0.5$：$|N(f)| = \dfrac{\Delta}{\sqrt{6f_s}}\cdot\dfrac{2\sin(\pi f/f_s)}{\sqrt{1.25 - \cos(2\pi f/f_s)}}$，$f_B \approx 21$ kHz（$M \approx 240$）。

推导：
- $V_{out} = Q + \dfrac{k}{z-1}(V_{in} - V_{out})$，因此 $V_{out} = \dfrac{k}{z-1+k}V_{in} + \dfrac{z-1}{z-1+k}Q$，噪声传递函数（noise transfer function）$\mathrm{NTF} = \dfrac{z-1}{z-1+k}$。
- $k = 1$：NTF $= 1 - z^{-1}$（STF $= z^{-1}$），$|\mathrm{NTF}| = 2\sin(\pi f/f_s)$。带内噪声：$n_0^2 = \dfrac{\Delta^2}{12}\dfrac{2}{f_s}\int_0^{f_B}4\sin^2\dfrac{\pi f}{f_s}df \approx \dfrac{\Delta^2}{12}\dfrac{\pi^2}{3}\left(\dfrac{2f_B}{f_s}\right)^3$。
- 要求 $n_0^2 \le \Delta^2/(12\cdot 2^{20})$：$(2f_B/f_s)^3 \le 3/(\pi^2 2^{20}) = 2.9\times10^{-7}$，因此 $2f_B/f_s \le 6.62\times10^{-3}$，$f_B \le 33.1$ kHz。
- $k = 0.5$：NTF $= (z-1)/(z-0.5)$，$|\mathrm{NTF}|^2 = \dfrac{2(1-\cos\theta)}{1.25-\cos\theta}$，其中 $\theta = 2\pi f/f_s$。在低频处 $|\mathrm{NTF}| \approx 4\pi f/f_s$，是 $k = 1$ 时的两倍，因此带内噪声功率大 4 倍，$f_B$ 相应除以 $4^{1/3} = 1.59$：$f_B \approx 20.8$ kHz。（STF $0.5/(z - 0.5)$ 在直流处为单位增益。在 $f_s/2$ 处 $|\mathrm{NTF}|$ 为 4/3 而不是 2。）
