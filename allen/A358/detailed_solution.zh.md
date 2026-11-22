# 详细步骤 - A358

两级运放的输入参考噪声由第一级决定：n 沟道输入对 M1–M2 和 p 沟道电流镜负载 M3–M4，后者的噪声电流与输入信号电流流入同一节点。把它们的 1/f 噪声和热噪声折算到输入端，在 1 Hz–100 kHz 内分别对谱密度积分，再把均方值相加。

### 第 1 步 — 输入参考噪声密度

$$
e_{eq}^2=2e_{n1}^2\Bigl[1+\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}\Bigr].
$$

按题意忽略第二级（M6、M7）和电流源（M5、M8）；第二级的噪声要除以第一级增益。

### 第 2 步 — 1/f 噪声

取 $e_{ni}^2=B/(fW_iL_i)$，$B=KF/(2C_{ox}K')$：

$$
B_N=\frac{4\times10^{-28}}{2(24.7\times10^{-4})(110\times10^{-6})}=7.36\times10^{-22}\ \mathrm{V^2\cdot m^2},\qquad B_P=2.02\times10^{-22}\ \mathrm{V^2\cdot m^2}.
$$

对 M1（$W_1L_1=3\ \mu\mathrm m^2$）：

$$
e_{n1}^2=\frac{7.36\times10^{-22}}{(3\times10^{-12}\ \mathrm{m^2})f}=\frac{2.45\times10^{-10}}f .
$$

由于 $g_m^2\propto K'W/L$，负载项化为

$$
\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}=\frac{K'_PB_P}{K'_NB_N}\Bigl(\frac{L_1}{L_3}\Bigr)^2=\frac{(50)(2.02)}{(110)(7.36)}(1)^2=0.125,
$$
$$
e_{eq}^2(1/f)=2\,\frac{2.45\times10^{-10}}f(1.125)=\frac{5.52\times10^{-10}}f\ \mathrm{V^2/Hz}.
$$

### 第 3 步 — 热噪声

$e_{ni}^2=8kT/(3g_{mi})$ 时括号变为 $1+g_{m3}/g_{m1}$。在 15 µA 下由 $g_m=\sqrt{2K'(W/L)I_D}$ 得

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S,\qquad
g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(15)(15\ \mu\mathrm A)}=150\ \mu\mathrm S,
$$
$$
e_{eq}^2(\text{th})=2\,\frac{8kT}{3g_{m1}}\Bigl(1+\frac{g_{m3}}{g_{m1}}\Bigr)=2(1.11\times10^{-16})(2.51)=5.57\times10^{-16}\ \mathrm{V^2/Hz}\quad(23.6\ \mathrm{nV/\sqrt{Hz}}).
$$

转折频率 $5.52\times10^{-10}/5.57\times10^{-16}\approx1$ MHz 位于频带之上，因此整个频带内 1/f 噪声占主导。

### 第 4 步 — 1 Hz–100 kHz 内的均方根噪声

$$
v_n^2=(5.52\times10^{-10})\ln(10^5)+(5.57\times10^{-16})(10^5)=6.36\times10^{-9}+5.6\times10^{-11}=6.41\times10^{-9}\ \mathrm{V^2},
$$
$$
v_n\approx80\ \mu\mathrm V\ \mathrm{rms}.
$$

仅 1/f 部分即为 79.7 µV；若略去 M3/M4 的 1/f 项则为 75.3 µV，所以负载约占噪声功率的 11 %。
