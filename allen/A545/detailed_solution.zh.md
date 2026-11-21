# 详细步骤 - A545

把给定的噪声谱密度平方，在信号频带内积分得到带内噪声功率，并令其等于满量程为 $\Delta$ 的理想 18 位量化器的量化噪声功率。解出 $f_B$ 即为可用带宽。

### 第 1 步 — 假设

- 线性化模型：量化误差为白噪声，因此给定的 $|N(f)|$ 就是单边输出噪声密度。
- 抽取滤波器为截止于 $f_B$ 的理想低通滤波器，因此只计入 0 到 $f_B$ 内的噪声。
- $f_B\ll f_s$，因此带内取 $\sin x\approx x$（最后加以核对）。

### 第 2 步 — 带内噪声功率

由 $\omega\tau/2=\pi f/f_s$，

$$
n_0^2=\int_0^{f_B}|N(f)|^2df=\frac{16\Delta^2}{12}\,\frac2{f_s}\int_0^{f_B}\sin^4\frac{\pi f}{f_s}\,df .
$$

取 $\sin x\approx x$，

$$
n_0^2\approx\frac{16\Delta^2}{12}\,\frac2{f_s}\,\frac{\pi^4}{f_s^4}\,\frac{f_B^5}{5}
=\frac{\Delta^2}{12}\,\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5 .
$$

### 第 3 步 — 18 位要求

$$
\frac{\Delta^2}{12}\,\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5\le\frac{\Delta^2}{12\cdot2^{36}}
\;\Longrightarrow\;
\left(\frac{2f_B}{f_s}\right)^5\le\frac{5}{\pi^4\,2^{36}}=7.47\times10^{-13},
$$

$$
\frac{2f_B}{f_s}\le3.76\times10^{-3}
\;\Longrightarrow\;
f_B\le\frac{(3.76\times10^{-3})(10\ \mathrm{MHz})}{2}=18.8\ \text{kHz}.
$$

过采样率为 $f_s/(2f_B)\approx266$。

### 第 4 步 — 近似的核对

在 $f_B$ 处 $\pi f_B/f_s=5.9\times10^{-3}$，因此 $\sin x\approx x$ 非常精确；对 $\sin^4$ 精确积分得 $f_B=18.78$ kHz，差别小于 0.1%。
