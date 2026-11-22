# 详细步骤 - A556

求解 [图 1] 中的环路得到噪声传递函数，在单位圆上取值得到 $N(f)$，再在噪声零点附近作线性展开，对 $f_o=f_s/4$ 附近的窄带积分 $|N(f)|^2$。最后代入 14 位判据。

### 第 1 步 — 环路方程与 NTF

反馈模块 $1/(1+z^{-2})$ 把 $Y$ 送回输入求和点；求和结果经过 $z^{-2}$，量化器再叠加 $Q$：

$$
Y=z^{-2}\left(X+\frac{Y}{1+z^{-2}}\right)+Q .
$$

合并 $Y$ 的各项，$1-\dfrac{z^{-2}}{1+z^{-2}}=\dfrac{1}{1+z^{-2}}$，故

$$
\frac{Y}{1+z^{-2}}=z^{-2}X+Q
\;\Rightarrow\;
Y=(1+z^{-2})\left(z^{-2}X+Q\right),\qquad NTF=\frac{Y}{Q}=1+z^{-2}.
$$

NTF 的零点满足 $z^2=-1$，即 $z=\pm j$，对应 $f=f_s/4=f_o$：噪声在频带中心而不是在直流处被陷波。（按图所画，信号通路 $z^{-2}(1+z^{-2})$ 也含有同一因子。）

### 第 2 步 — 噪声谱密度

在单位圆上 $z^{-2}=e^{-j4\pi f/f_s}$。令 $\theta=2\pi f/f_s$，则 $|1+e^{-j2\theta}|=|e^{-j\theta}(e^{j\theta}+e^{-j\theta})|=2|\cos\theta|$，故

$$
N(f)=\frac{\Delta}{\sqrt{6f_s}}\left|1+e^{-j4\pi f/f_s}\right|
=\frac{2\Delta}{\sqrt{6f_s}}\left|\cos\frac{2\pi f}{f_s}\right| .
$$

### 第 3 步 — 带内噪声功率

记 $f=f_o+u$。由于 $2\pi f_o/f_s=\pi/2$，当 $|u|\le f_B/2\ll f_s$ 时，$|\cos\theta|=|\sin(2\pi u/f_s)|\approx2\pi|u|/f_s$。于是

$$
\begin{aligned}
n_o^2&=\int_{f_1}^{f_2}|N(f)|^2df\approx\frac{4\Delta^2}{6f_s}\int_{-f_B/2}^{f_B/2}\left(\frac{2\pi u}{f_s}\right)^2du
=\frac{4\Delta^2}{6f_s}\,\frac{4\pi^2}{f_s^2}\,\frac{2}{3}\left(\frac{f_B}{2}\right)^3\\
&=\frac{2\pi^2\Delta^2}{9}\left(\frac{f_B}{f_s}\right)^3 .
\end{aligned}
$$

代入 $f_B/f_s=1/(2M)$：

$$
n_o^2=\frac{\pi^2\Delta^2}{36M^3},\qquad n_o=\frac{\pi\Delta}{6M^{3/2}} .
$$

这与相同 $M$ 下一阶低通调制器的带内噪声相同：带通环路只是把唯一的噪声零点从直流移到了 $f_s/4$。

### 第 4 步 — 10 MHz 下 14 位所需的带宽

由要求 $n_o\le\Delta/(2^{14}\sqrt{12})$ 得

$$
\frac{\pi}{6M^{1.5}}\le\frac{1}{2^{14}\sqrt{12}}
\;\Rightarrow\;
M^{1.5}\ge\frac{\pi}{6}\,2^{14}\sqrt{12}=2.97\times10^4
\;\Rightarrow\;
M\ge959 .
$$

$$
f_B=\frac{f_s}{2M}\le\frac{10\ \mathrm{MHz}}{2(959)}=5.2\ \mathrm{kHz}.
$$

对精确的 $\cos^2$ 谱密度做数值积分同样得到 5.21 kHz，因为该频带在零点两侧只跨越 $\pm0.0016$ rad。
