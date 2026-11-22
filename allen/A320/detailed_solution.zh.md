# 详细步骤 - A320

把补偿零点放在第二个极点上，两者抵消；单位增益频率处的环路相位由主极点（−90°）和两个更高的极点决定。令相位裕度为 60° 得到 GB，再由 $GB=g_{m1}/C_c$ 得到 $C_c$。

### 第 1 步 — 剩余的极点

抵消之后，开环响应只剩主极点和两个位于 $-10^8$ rad/s 的极点。在远高于主极点的频率 $\omega$ 处，相位为

$$
\angle A(j\omega)=-90^\circ-2\tan^{-1}\frac{\omega}{10^8\ \mathrm{rad/s}} .
$$

### 第 2 步 — 60° 相位裕度对应的 GB

在 $\omega=GB$ 处计算相位：

$$
180^\circ-90^\circ-2\tan^{-1}\frac{GB}{10^8}=60^\circ\;\Rightarrow\;\tan^{-1}\frac{GB}{10^8}=15^\circ,
$$
$$
GB=10^8\tan15^\circ=26.8\times10^6\ \mathrm{rad/s}\ (4.26\ \mathrm{MHz}).
$$

### 第 3 步 — 补偿电容

$$
C_c=\frac{g_{m1}}{GB}=\frac{500\ \mu\mathrm S}{26.8\times10^6\ \mathrm{s^{-1}}}=18.7\ \mathrm{pF}.
$$

若改在真实的单位增益频率处计算相位（两个高频极点也使幅值约减小 1.07 倍），则得 $g_{m1}/C_c\approx28.7$ Mrad/s，$C_c\approx17.4$ pF。
