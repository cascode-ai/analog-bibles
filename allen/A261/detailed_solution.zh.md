# 详细步骤 - A261

把三个紧密聚集的极点视为三个位于 $10^9$ rad/s 的独立极点，各自在 $\omega=GB$ 处贡献相位滞后。相位裕度条件确定 GB；直流增益随后确定主极点，输出电阻再把该极点换算为负载电容。

### 第 1 步 — 60° 相位裕度所需的 GB

单位反馈时，主极点在 GB 处贡献约 $90°$（直流增益很大），三个高阶极点各贡献 $\arctan(GB/10^9)$：

$$
\Phi_M=180°-90°-3\arctan\frac{GB}{10^9\ \mathrm{rad/s}}=60°
\quad\Rightarrow\quad
\arctan\frac{GB}{10^9\ \mathrm{rad/s}}=10°.
$$

$$
GB=10^9\tan10°\ \mathrm{rad/s}=1.763\times10^{8}\ \mathrm{rad/s},\qquad
\frac{GB}{2\pi}=28.1\ \mathrm{MHz}.
$$

### 第 2 步 — 主极点

80 dB 增益即 $A_v(0)=10^{80/20}=10^4$。对主极点型放大器 $GB=A_v(0)|p_1|$，故

$$
|p_1|=\frac{GB}{A_v(0)}=\frac{1.763\times10^8\ \mathrm{rad/s}}{10^4}=1.763\times10^{4}\ \mathrm{rad/s},
$$

$$
p_1=-1.76\times10^{4}\ \mathrm{rad/s}\quad(|p_1|/2\pi=2.81\ \mathrm{kHz}).
$$

### 第 3 步 — 负载电容

自补偿放大器的主极点形成于高阻输出端，$|p_1|=1/(R_{out}C_L)$：

$$
C_L=\frac{1}{R_{out}|p_1|}=\frac{1}{(10\ \mathrm{M\Omega})(1.763\times10^4\ \mathrm{rad/s})}=5.67\ \mathrm{pF}.
$$

$C_L$ 更大会降低 $p_1$ 和 GB，使裕度增大；更小则会把 GB 推向那组高阶极点，使裕度减小。
