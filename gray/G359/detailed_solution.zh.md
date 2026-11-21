# 详细步骤 - G359

输出节点由白噪声电流驱动，节点阻抗为 $R_{eq}=r_d\parallel R$ 再并联 $C$，构成单极点低通响应。求出低频谱密度和极点，把极点频率换算为单极点响应的等效噪声带宽，二者相乘即可。

### 第 1 步 — 低频噪声谱密度

与无电容时相同，$I_D=(10-0.7)\ \mathrm V/20\ \mathrm{k\Omega}=0.465$ mA，$r_d=(26\ \mathrm{mV})/I_D=55.9\ \Omega$，因此 $R_{eq}=r_d\parallel20\ \mathrm{k\Omega}=55.8\ \Omega$。二极管散粒噪声和电阻热噪声是流入该节点的互不相关的电流：

$$
S_0=\left(2qI_D+\frac{4kT}{R}\right)R_{eq}^2=(1.496\times10^{-22}\ \mathrm{A^2/Hz})(55.8\ \Omega)^2=4.65\times10^{-19}\ \mathrm{V^2/Hz}.
$$

### 第 2 步 — 频率响应与极点

二极管两端并联电容后，节点阻抗为 $R_{eq}/(1+j\omega R_{eq}C)$，因此输出谱密度为

$$
S_o(f)=\frac{S_0}{1+(f/f_1)^2},\qquad
f_1=\frac{1}{2\pi R_{eq}C}=\frac{1}{2\pi(55.8\ \Omega)(100\ \mathrm{pF})}=28.5\ \mathrm{MHz}.
$$

由于二者并联，极点由较小的二极管电阻决定，而不是由 20 kΩ 电阻决定。

### 第 3 步 — 噪声带宽

噪声带宽 $f_N$ 是峰值谱密度相同、通过相同总噪声的理想矩形滤波器的宽度：

$$
f_N=\frac{1}{S_0}\int_0^\infty S_o(f)\,df=\int_0^\infty\frac{df}{1+(f/f_1)^2}=f_1\left[\tan^{-1}\frac{f}{f_1}\right]_0^\infty=\frac{\pi}{2}f_1 .
$$

$$
f_N=\frac{\pi}{2}(28.5\ \mathrm{MHz})=44.8\ \mathrm{MHz}.
$$

### 第 4 步 — 总输出噪声

$$
\overline{v_o^2}=S_0f_N=(4.65\times10^{-19}\ \mathrm{V^2/Hz})(4.48\times10^{7}\ \mathrm{Hz})=2.09\times10^{-11}\ \mathrm{V^2},\qquad
v_{o,\mathrm{rms}}=4.57\ \mu\mathrm V .
$$

验算：忽略 $R$ 时，$f_N=1/(4r_dC)$，$S_0f_N=2qI_Dr_d^2/(4r_dC)=2kTr_d/(4r_dC)=kT/2C$，因为二极管散粒噪声等于电阻 $r_d$ 热噪声的一半。数值上 $kT/2C=(1.66\times10^{-20}\ \mathrm{V\cdot C})/(8\times100\ \mathrm{pF})=2.07\times10^{-11}$ V²，与上面一致。总噪声与偏置电流无关：电流增大使 $r_d$ 和谱密度减小，但带宽按比例展宽。
