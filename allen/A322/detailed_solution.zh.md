# 详细步骤 - A322

负载电容减小会提高主极点，从而提高 GB，而次极点保持不变。先求 $C_L=1$ pF 时的标称 GB，再求环路增益实际穿过 1 的频率（此时次极点也会降低幅值），并在该处累加相位滞后。

### 第 1 步 — 主极点与标称 GB

$$
|p_d|=\frac1{R_{out}C_L}=\frac1{(7.44\ \mathrm{M\Omega})(1\ \mathrm{pF})}=1.344\times10^5\ \mathrm{rad/s},\qquad
GB=A_{vd}(0)|p_d|=3678(1.344\times10^5)=494\times10^6\ \mathrm{rad/s}\ (78.7\ \mathrm{MHz}).
$$

### 第 2 步 — 真实单位增益频率

GB 这么高时，次极点离得并不远，因此环路增益在低于 GB 处穿过 1。求解

$$
\frac{GB}{\omega}\prod_i\left[1+\left(\frac{\omega}{|p_i|}\right)^2\right]^{-1/2}=1
$$

得 $\omega_u\approx374\times10^6$ rad/s（约 60 MHz）。

### 第 3 步 — 相位裕度

$\omega_u$ 处的相位滞后：

$$
90^\circ+2\tan^{-1}\frac{374}{702}+\tan^{-1}\frac{374}{1652}+\tan^{-1}\frac{374}{4176}+\tan^{-1}\frac{374}{555000}
=90^\circ+56.1^\circ+12.8^\circ+5.1^\circ+0.04^\circ\approx164^\circ,
$$

因此 $PM\approx180^\circ-164^\circ=16^\circ$：运放只是勉强稳定。在标称 GB = 494 Mrad/s 处计算相位的粗略估计给出 $90^\circ-70.3^\circ-16.6^\circ-6.8^\circ\approx-4^\circ$，夸大了问题；无论哪种算法，相位裕度都远远不够（60° 裕度需要 $C_L\approx3.5$ pF 或更大）。
