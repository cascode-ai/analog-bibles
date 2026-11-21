# 详细步骤 - A227

B 类意味着两管在同一个输入电压处交接，且交接点处两管都不导通。在交越点的输出电压下，分别写出 M1 达到阈值时的输入和 M2 离开阈值时的输入，并令二者相等。

### 第 1 步 — 交越点的输出电压

交接时两管都不导通，$R_L$ 中无电流，所以

$$
v_{OUT}=0 .
$$

因此阈值必须在源极为 0 V 时计算。M1 的衬底接 $V_{SS}$，M2 的衬底接 $V_{DD}$，故 $V_{SB1}=|V_{SS}|$，$V_{BS2}=V_{DD}$：

$$
V_{T1}=V_{T0N}+\gamma_N\left(\sqrt{2|\phi_{FN}|+|V_{SS}|}-\sqrt{2|\phi_{FN}|}\right)
=0.7+0.4\left(\sqrt{0.7+|V_{SS}|}-\sqrt{0.7}\right)\ \mathrm V,
$$

$$
|V_{T2}|=|V_{T0P}|+\gamma_P\left(\sqrt{2|\phi_{FP}|+V_{DD}}-\sqrt{2|\phi_{FP}|}\right)
=0.7+0.57\left(\sqrt{0.8+V_{DD}}-\sqrt{0.8}\right)\ \mathrm V .
$$

### 第 2 步 — M1 开始导通与 M2 开始截止

M1 的栅极为 $v_{IN}+V_{BIAS}$，源极为 $v_{OUT}=0$，当

$$
v_{IN}+V_{BIAS}=V_{T1}\quad\Rightarrow\quad v_{IN}=V_{T1}-V_{BIAS}
$$

时开始导通。

M2 的栅极为 $v_{IN}-V_{BIAS}$；当 $V_{SG2}=0-(v_{IN}-V_{BIAS})>|V_{T2}|$ 时导通，在

$$
V_{BIAS}-v_{IN}=|V_{T2}|\quad\Rightarrow\quad v_{IN}=V_{BIAS}-|V_{T2}|
$$

时截止。

### 第 3 步 — B 类条件

要使 M1 恰在 M2 截止处开始导通，两个输入电压必须重合：

$$
V_{T1}-V_{BIAS}=V_{BIAS}-|V_{T2}|\quad\Rightarrow\quad
V_{BIAS}=\frac{V_{T1}+|V_{T2}|}{2},
$$

两个阈值均取第 1 步的值。此时交越发生在 $v_{IN}=(V_{T1}-|V_{T2}|)/2$，略低于 0，因为体效应使 p 沟道阈值升高得更多。$V_{BIAS}$ 更小会留下两管都截止的死区；更大则使两管同时导通（AB 类）。

### 第 4 步 — 数值示例

| 电源 | $V_{T1}$ (V) | $\lvert V_{T2}\rvert$ (V) | $V_{BIAS}$ (V) |
|---|---|---|---|
| ±2.5 V | 1.08 | 1.23 | 1.15 |
| ±5 V | 1.32 | 1.56 | 1.44 |

例如 ±2.5 V 时，$V_{T1}=0.7+0.4(\sqrt{3.2}-\sqrt{0.7})=1.081$ V，$|V_{T2}|=0.7+0.57(\sqrt{3.3}-\sqrt{0.8})=1.226$ V，故 $V_{BIAS}=1.153$ V。若忽略体效应，则 $V_{BIAS}=V_T=0.7$ V。若两个电池可以不同，则各自等于对应器件的阈值即可，$V_{BIAS1}=V_{T1}$，$V_{BIAS2}=|V_{T2}|$。
