噪声带宽 $f_N = \frac{\pi}{2}f_1 \approx 45$ MHz，其中 $f_1 \approx 28.5$ MHz；总输出噪声 ≈ $2.1\times10^{-11}$ V²，即 ≈ 4.6 µV rms。

- $I_D = 0.465$ mA，$r_d = 55.9\ \Omega$，$R_{eq} = r_d\parallel20\text{ k} = 55.8\ \Omega$。
- 低频谱密度 $S_0 = (2qI_D + 4kT/20\text{ k})R_{eq}^2 = 4.65\times10^{-19}$ V²/Hz。
- 单极点：$f_1 = 1/(2\pi R_{eq}C) = 1/(2\pi\cdot55.8\cdot100\text{ pF}) = 28.5$ MHz；对于单极点响应，$f_N = \frac{\pi}{2}f_1 = 44.8$ MHz。
- 总噪声：$S_0f_N = 4.65\times10^{-19}\times4.48\times10^7 = 2.09\times10^{-11}$ V² → 4.57 µV rms。验算：二极管的散粒噪声（shot noise）等于 $r_d$ 热噪声的一半，因此总噪声 ≈ $kT/2C = 2.07\times10^{-11}$ V²。
