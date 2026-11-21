# 详细步骤 - G298

把 2 kHz 极点下移到主极点位置 $p_1'$，剩下 200 kHz 和 4 MHz 两个极点。20 dB 的闭环增益确定了低频环路增益（loop gain）$T_0$；再选取 $|p_1'|$，使 $|T|$ 在剩余两个极点已消耗 $45^\circ$ 相位处穿过单位值，带宽则由交点得到。

### 第 1 步 — 低频环路增益

20 dB 闭环增益即 $A_0=10$。由 $A_0=a_0/(1+T_0)$，$a_0=40{,}000$：
$$
T_0=\frac{a_0}{A_0}-1=3999,\qquad f=\frac{T_0}{a_0}=0.09998 .
$$
环路增益为
$$
T(jf_\mathrm{s})=\frac{3999}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)} .
$$

### 第 2 步 — 精确的 $45^\circ$ 设计

在交点 $f_0\gg|p_1'|$ 处主极点贡献 $-90^\circ$，因此其余极点必须贡献 $45^\circ$：
$$
\tan^{-1}\frac{f_0}{200\ \mathrm{kHz}}+\tan^{-1}\frac{f_0}{4\ \mathrm{MHz}}=45^\circ\ \Rightarrow\ f_0\approx183\ \mathrm{kHz}.
$$
此处两个次极点因子为 $\sqrt{1+0.913^2}=1.354$ 和 $\sqrt{1+0.046^2}=1.001$，主极点因子 $\approx f_0/|p_1'|$。令 $|T(f_0)|=1$：
$$
|p_1'|=\frac{183\ \mathrm{kHz}\times1.354\times1.001}{3999}=61.9\ \mathrm{Hz}\approx62\ \mathrm{Hz}.
$$

### 第 3 步 — 快速估算与校验

让 $|T|$ 从 3999 以 $-20$ dB/dec 下降，恰在 200 kHz 极点处降到单位值，得
$$
|p_1'|=\frac{200\ \mathrm{kHz}}{3999}=50\ \mathrm{Hz}.
$$
取 50 Hz 时精确交点为 157 kHz，$\angle T=-90.0^\circ-38.2^\circ-2.2^\circ=-130.4^\circ$，故 $\mathrm{PM}\approx49.6^\circ$，略高于要求。两个值都是单位增益补偿值的十倍，因为 $T_0$ 小了十倍。

### 第 4 步 — 加反馈后的带宽

闭环增益 $A=\dfrac1f\cdot\dfrac{T}{1+T}$ 在 $|T|$ 接近单位值之前保持在 $1/f\approx10$ 附近，因此带宽由交点决定：

| 度量 | 50 Hz 设计 | 62 Hz 设计 |
|---|---|---|
| 单位环路增益频率 | 157 kHz | 183 kHz |
| $(1+T_0)\lvert p_1'\rvert$ | 200 kHz | 248 kHz |
| 闭环 $-3$ dB 点（含峰化） | 260 kHz（峰化 1.6 dB） | 300 kHz（峰化 2.3 dB） |

因此加反馈后的带宽名义上约为 200 kHz，与单位增益补偿相同，因为交点同样放在 200 kHz 极点处。结果：$|p_1'|\approx62$ Hz（快速准则为 50 Hz），带宽约为 200 kHz。
