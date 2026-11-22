# 详细步骤 - G296

把 300 kHz 极点下移到主极点位置 $p_1'$，剩下的次极点只有 2 MHz 和 25 MHz 两个。20 dB 的闭环增益确定了低频环路增益 $T_0$；再选取 $|p_1'|$，使环路增益在其余极点已消耗 $45^\circ$ 相位处穿过单位值。最后由交点频率得到带宽。

### 第 1 步 — 低频环路增益

20 dB 闭环增益即 $A_0=10$。由 $A_0=a_0/(1+T_0)$，$a_0=5000$：
$$
T_0=\frac{a_0}{A_0}-1=499,\qquad f=\frac{T_0}{a_0}=0.0998 .
$$
环路增益为
$$
T(jf_\mathrm{s})=\frac{499}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$

### 第 2 步 — 精确的 $45^\circ$ 设计

在交点 $f_0\gg|p_1'|$ 处，主极点贡献几乎恰好 $-90^\circ$，因此 $45^\circ$ 裕度要求另外两个极点共贡献 $45^\circ$：
$$
\tan^{-1}\frac{f_0}{2\ \mathrm{MHz}}+\tan^{-1}\frac{f_0}{25\ \mathrm{MHz}}=45^\circ\ \Rightarrow\ f_0\approx1.75\ \mathrm{MHz}.
$$
在 $f_0$ 处主极点因子 $\approx f_0/|p_1'|$，另外两个因子为 $\sqrt{1+0.874^2}=1.33$ 和 $\sqrt{1+0.070^2}=1.00$。令 $|T(f_0)|=1$：
$$
|p_1'|\approx\frac{f_0\times1.33\times1.00}{499}=4.65\ \mathrm{kHz}.
$$
不作 $-90^\circ$ 近似、联立求解幅值和相位条件，得 $|p_1'|=4.66$ kHz，$f_0=1.75$ MHz。

### 第 3 步 — 快速估算与校验

常用准则是让 $|T|$ 从 499 以 $-20$ dB/dec 下降，恰在第二个极点 2 MHz 处降到单位值：
$$
|p_1'|=\frac{2\ \mathrm{MHz}}{499}=4.0\ \mathrm{kHz}.
$$
取此值时精确交点在 1.57 MHz，此处 $\angle T=-90.0^\circ-38.1^\circ-3.6^\circ\approx-131.6^\circ$，即 $\mathrm{PM}\approx48^\circ$，略高于要求。$|p_1'|\approx4.0$ kHz（准则）或 4.66 kHz（精确 $45^\circ$）都满足指标；它是单位增益设计值的十倍，因为 $T_0$ 小了十倍。

### 第 4 步 — 加反馈后的带宽

闭环增益 $A=\dfrac1f\cdot\dfrac{T}{1+T}$ 在 $|T|$ 接近单位值之前保持在 $1/f\approx10$ 附近，因此带宽由交点决定。几种等价的度量：

| 度量 | 4.0 kHz 设计 | 4.66 kHz 设计 |
|---|---|---|
| 单位环路增益频率 | 1.57 MHz | 1.75 MHz |
| $(1+T_0)\lvert p_1'\rvert$ | 2.0 MHz | 2.3 MHz |
| 闭环 $-3$ dB 点（含峰化） | 2.6 MHz（峰化 1.8 dB） | 2.9 MHz（峰化 2.3 dB） |

因此加反馈后的带宽名义上约为 2 MHz，与上一种情况的单位增益设计相同，因为两种情况都把交点放在 2 MHz 极点处。结果：$|p_1'|\approx4.6$ kHz（快速准则为 4.0 kHz），带宽约为 2 MHz。
