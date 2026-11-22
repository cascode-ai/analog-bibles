# 详细步骤 - A272

在密勒补偿的两级运放中，$C_c$ 主导第一级输出节点，因此在主极点以上，输入级的输出电流 $g_{m1}v_{id}$ 流过 $C_c$，增益按 $g_{m1}/(\omega C_c)$ 下降。令其等于 1，得 $GB=g_{m1}/C_c$（rad/s）。

### 第 1 步 — 输入跨导

每个输入管在饱和区流过一半尾电流 $I_5/2=22.8$ µA：

$$
g_{m1}=\sqrt{2K'_N\left(\frac WL\right)_1\frac{I_5}{2}}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(22.8\ \mu\mathrm A)}=224\ \mu\mathrm S .
$$

### 第 2 步 — 单位增益带宽

$$
GB=\frac{g_{m1}}{C_c}=\frac{224\ \mu\mathrm S}{5\ \mathrm{pF}}=4.48\times10^7\ \mathrm{rad/s},\qquad
f_{GB}=\frac{4.48\times10^7\ \mathrm{rad/s}}{2\pi}=7.1\ \mathrm{MHz}.
$$
