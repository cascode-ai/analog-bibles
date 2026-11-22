# 详细步骤 - G015

在均匀掺杂的基区中，少数载流子以扩散方式穿越基区，浓度呈线性分布，由此得到基区渡越时间 $\tau_F=W_B^2/(2D_p)$。再加上发射结耗尽层电容的充电时间即得 $\tau_T=1/(2\pi f_T)$，基区存储电荷为 $\tau_F|I_C|$。$pnp$ 管的电流取幅值计算。

### 第 1 步 — 基区渡越时间

空穴浓度从发射结边缘的 $p(0)$ 线性下降到集电结边缘的约零值，因此存储电荷为 $Q_B=\tfrac12qAp(0)W_B$，扩散电流为 $|I_C|=qAD_pp(0)/W_B$。两者之比即渡越时间（transit time）：

$$
\tau_F=\frac{Q_B}{|I_C|}=\frac{W_B^2}{2D_p}=\frac{(10\times10^{-4}\ \mathrm{cm})^2}{2(13\ \mathrm{cm^2/s})}=3.85\times10^{-8}\ \mathrm s=38.5\ \mathrm{ns}.
$$

### 第 2 步 — $f_T$

由忽略 $C_\mu$ 的混合 π 模型，$f_T=g_m/(2\pi C_\pi)$，其中 $C_\pi=\tau_Fg_m+C_{je}$，故

$$
\tau_T=\frac1{2\pi f_T}=\tau_F+\frac{C_{je}}{g_m},\qquad
g_m=\frac{|I_C|}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V}.
$$

$$
\frac{C_{je}}{g_m}=\frac{2\ \mathrm{pF}}{19.2\ \mathrm{mA/V}}=0.104\ \mathrm{ns},\qquad
\tau_T=38.5\ \mathrm{ns}+0.104\ \mathrm{ns}=38.6\ \mathrm{ns},\qquad
f_T=\frac1{2\pi(38.6\ \mathrm{ns})}=4.13\ \mathrm{MHz}.
$$

宽基区起主导作用：耗尽层电容项只使 $f_T$ 改变 0.3%。这就是横向 $pnp$ 管速度慢的原因。

### 第 3 步 — 基区存储电荷

$$
Q_B=\tau_F|I_C|=(38.5\ \mathrm{ns})(0.5\ \mathrm{mA})=1.92\times10^{-11}\ \mathrm C=19.2\ \mathrm{pC}.
$$

结果：$f_T\approx4.1$ MHz，$Q_B\approx19$ pC。
