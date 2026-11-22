# 详细步骤 - A323

主极点由 $C_L$ 决定而次极点固定，因此 GB 与 $1/C_L$ 成正比。满足 60° 相位裕度的最大 GB 只由次极点决定；与之对应的 $C_L$ 就是允许的最小负载。

### 第 1 步 — 60° 相位裕度下的最大 GB

主极点贡献 −90°，次极点在 GB 处最多只能贡献 30°：

$$
2\tan^{-1}\frac{GB}{0.702\ \mathrm{G}}+\tan^{-1}\frac{GB}{1.652\ \mathrm{G}}+\tan^{-1}\frac{GB}{4.176\ \mathrm{G}}+\tan^{-1}\frac{GB}{555\ \mathrm{G}}=30^\circ .
$$

解为

$$
GB_{\max}=143\times10^6\ \mathrm{rad/s}\ (22.8\ \mathrm{MHz}),
$$

各项滞后为 2 × 11.53°、4.96°、1.96° 和 0.01°。

### 第 2 步 — 最小负载电容

$$
|p_d|=\frac{GB_{\max}}{A_{vd}(0)}=\frac{143\times10^6}{3678}=3.89\times10^4\ \mathrm{rad/s},\qquad
C_{L,\min}=\frac1{|p_d|R_{out}}=\frac1{(3.89\times10^4)(7.44\times10^6)}=3.45\ \mathrm{pF}.
$$

更小的 $C_L$ 会使 GB 进一步升高，相位裕度降到 60° 以下。

### 第 3 步 — 相对原负载的改善

$C_L=10$ pF 时 $GB=3678/[(7.44\ \mathrm{M\Omega})(10\ \mathrm{pF})]=49$ Mrad/s（7.9 MHz），因此负载减小到 3.45 pF 使 GB 约提高 2.9 倍。（若在精确的单位增益交越频率处计算相位，则 $GB\approx150$ Mrad/s，$C_L\approx3.3$ pF。）
