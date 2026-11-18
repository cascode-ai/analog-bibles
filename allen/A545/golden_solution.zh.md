$f_B \approx 18.8$ kHz（过采样率 $f_s/2f_B \approx 266$）。

- 带内噪声功率：$n_0^2 = \int_0^{f_B}|N(f)|^2df = \dfrac{16\Delta^2}{12}\dfrac{2}{f_s}\int_0^{f_B}\sin^4\dfrac{\pi f}{f_s}\,df$。
- 当 $f_B \ll f_s$ 时，$\sin x \approx x$：$n_0^2 \approx \dfrac{\Delta^2}{12}\dfrac{\pi^4}{5}\left(\dfrac{2f_B}{f_s}\right)^5$。
- 要求 $n_0^2 \le \Delta^2/(12\cdot 2^{36})$：$(2f_B/f_s)^5 \le 5/(\pi^4 2^{36}) = 7.47\times10^{-13}$，因此 $2f_B/f_s \le 3.76\times10^{-3}$，$f_B \le 18.8$ kHz。
- 假设：线性化白噪声模型，理想矩形（brick-wall）抽取滤波器，带内 $\sin x \approx x$（精确积分得到的值相差 < 0.1 %）。
