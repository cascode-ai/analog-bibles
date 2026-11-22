# 详细步骤 - A550

理想抽取滤波器滤除 $f_B$ 以上的全部成分，因此带内噪声功率等于 $|N(f)|^2$ 从 0 到 $f_B$ 的积分。由于 $f_B\ll f_s$，用小角度展开可把积分化为 $f_B$ 的幂，再令其等于 16 位的噪声功率。

### 第 1 步 — 带内噪声功率

由 $\omega/(2f_s)=\pi f/f_s$，把题给谱密度平方得

$$
|N(f)|^2=\frac{4V_{REF}^2}{12}\,\frac{2}{f_s}\,\sin^4\!\left(\frac{\pi f}{f_s}\right),
\qquad
n_0^2=\int_0^{f_B}|N(f)|^2\,df .
$$

### 第 2 步 — 小角度近似求积分

当 $f\le f_B\ll f_s$ 时，$\sin(\pi f/f_s)\approx\pi f/f_s$，故

$$
n_0^2\approx\frac{4V_{REF}^2}{12}\,\frac{2}{f_s}\,\frac{\pi^4}{f_s^4}\,\frac{f_B^5}{5}
=\frac{V_{REF}^2}{12}\,\frac{8\pi^4}{5}\left(\frac{f_B}{f_s}\right)^5 .
$$

$f_B$ 的五次方是一阶噪声整形（noise shaping）的特征：谱密度幅值按 $f^2$ 增长，功率按 $f^4$ 增长，积分后再多一次幂。

### 第 3 步 — 代入 16 位判据

要求 $n_0^2\le V_{REF}^2/(12\cdot2^{32})$。消去 $V_{REF}^2/12$：

$$
\frac{8\pi^4}{5}\left(\frac{f_B}{f_s}\right)^5\le 2^{-32}
\;\Rightarrow\;
\left(\frac{f_B}{f_s}\right)^5\le\frac{5}{8\pi^4\,2^{32}}=1.494\times10^{-12}.
$$

### 第 4 步 — 最大带宽

开五次方：

$$
\frac{f_B}{f_s}\le 4.314\times10^{-3},\qquad
f_B\le(4.314\times10^{-3})(10\ \mathrm{MHz})=43.1\ \mathrm{kHz}.
$$

对应的过采样率为 $f_s/(2f_B)=116$。对 $\sin^4$ 做精确的数值积分同样得到 43.1 kHz，因为 $\pi f_B/f_s=0.0136$ rad，小角度近似的误差可以忽略。
