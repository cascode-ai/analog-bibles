# 详细步骤 - A557

把 [图 1] 的内环化简为一个谐振器，闭合外环得到信号与噪声传递函数，在单位圆上计算 NTF，再对 $f_o=f_s/4$ 附近的窄带积分 $|N(f)|^2$。最后代入 12 位判据。

### 第 1 步 — 内环：谐振器

令 $U=X+z^{-1}Y$ 为第一个求和点的输出，$V$ 为前向 $z^{-1}$ 模块的输出。内环在该模块之前减去 $z^{-1}V$：

$$
V=z^{-1}\left(U-z^{-1}V\right)
\;\Rightarrow\;
V=\frac{z^{-1}}{1+z^{-2}}\,U .
$$

其极点位于 $z=\pm j$，使它成为 $f_s/4$ 处的谐振器（resonator），即积分器在带通情形下的对应物。

### 第 2 步 — 外环：STF 与 NTF

由 $Y=V+Q$：

$$
Y=\frac{z^{-1}\left(X+z^{-1}Y\right)}{1+z^{-2}}+Q
\;\Rightarrow\;
Y\,\frac{1+z^{-2}-z^{-2}}{1+z^{-2}}=\frac{z^{-1}X}{1+z^{-2}}+Q ,
$$

$$
Y(z)=z^{-1}X(z)+(1+z^{-2})Q(z),\qquad STF=z^{-1},\quad NTF=1+z^{-2}.
$$

信号只延迟一个采样周期，噪声的零点位于 $z=\pm j$，即 $f_s/4=f_o$。

### 第 3 步 — 噪声谱密度

在单位圆上，令 $\theta=2\pi f/f_s$，有 $|1+e^{-j2\theta}|=2|\cos\theta|$，故

$$
N(f)=\frac{\Delta}{\sqrt{6f_s}}\left|1+e^{-j4\pi f/f_s}\right|
=\frac{2\Delta}{\sqrt{6f_s}}\left|\cos\frac{2\pi f}{f_s}\right|
\approx\frac{2\Delta}{\sqrt{6f_s}}\,\frac{2\pi|f-f_o|}{f_s}\quad(\text{near }f_o),
$$

因为 $2\pi f_o/f_s=\pi/2$ 使 $\cos\theta$ 变为 $-\sin(2\pi(f-f_o)/f_s)$。

### 第 4 步 — 带内噪声功率

令 $u=f-f_o$ 从 $-f_B/2$ 变化到 $f_B/2$：

$$
n_o^2=\frac{4\Delta^2}{6f_s}\int_{-f_B/2}^{f_B/2}\left(\frac{2\pi u}{f_s}\right)^2du
=\frac{4\Delta^2}{6f_s}\,\frac{4\pi^2}{f_s^2}\,\frac{f_B^3}{12}
=\frac{2\pi^2\Delta^2}{9}\left(\frac{f_B}{f_s}\right)^3 .
$$

代入 $f_B/f_s=1/(2M)$：

$$
n_o^2=\frac{\pi^2\Delta^2}{36M^3},\qquad n_o=\frac{\pi\Delta}{6M^{3/2}} .
$$

### 第 5 步 — 100 MHz 下 12 位所需的带宽

由要求 $n_o\le\Delta/(2^{12}\sqrt{12})$ 得

$$
M^{1.5}\ge\frac{\pi}{6}\,2^{12}\sqrt{12}=7.43\times10^3
\;\Rightarrow\;
M\ge381 ,
$$

$$
f_B=\frac{f_s}{2M}\le\frac{100\ \mathrm{MHz}}{2(380.7)}=131\ \mathrm{kHz}.
$$

对精确的 $\cos^2$ 谱密度做数值积分同样得到 131 kHz，频带以 $f_o=25$ MHz 为中心。
