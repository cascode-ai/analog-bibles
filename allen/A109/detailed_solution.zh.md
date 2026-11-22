# 详细步骤 - A109

在并联型结构中，$V_{REF}$ 是 PTAT 电压与 CTAT 电压的加权和，权重分别为 $R_3/R_1$ 和 $R_3/R_2$。由于三个电阻的温度特性相同，这些比值与温度无关。零温度系数条件确定两个权重之比 $R_2/R_1$，再由所要求的 1 V 确定总体比例 $R_3$。

### 第 1 步 — 两个电压的温度导数

PTAT 电压 $V_{PTAT}=V_t\ln10$ 与 $T$ 成正比：

$$
\frac{dV_{PTAT}}{dT}=\frac{V_{PTAT}}{T}=\frac{V_{t0}\ln10}{T_0}\quad\text{at }T_0,
\qquad V_{t0}\ln10=(0.026\ \mathrm V)(2.3026)=59.87\ \mathrm{mV}.
$$

在 $T=T_0$ 处对 CTAT 模型求导（此处 $T\ln(T/T_0)$ 的导数等于 1），得

$$
\left.\frac{dV_{CTAT}}{dT}\right|_{T_0}=-\frac{V_{G0}-V_{CTAT}(T_0)+(\gamma-\alpha)V_{t0}}{T_0}.
$$

### 第 2 步 — 由零温度系数条件求 $R_2$

电阻比与温度无关，因此

$$
\frac{dV_{REF}}{dT}=\frac{R_3}{R_1}\frac{V_{t0}\ln10}{T_0}-\frac{R_3}{R_2}\frac{V_{G0}-V_{CTAT}+(\gamma-\alpha)V_{t0}}{T_0}=0 .
$$

$R_3$ 和 $T_0$ 相消，剩下

$$
\frac{R_2}{R_1}=\frac{V_{G0}-V_{CTAT}+(\gamma-\alpha)V_{t0}}{V_{t0}\ln10}
=\frac{1.205-0.6+2.2(0.026)\ \mathrm V}{0.05987\ \mathrm V}=\frac{0.6622}{0.05987}=11.06,
$$

故 $R_1=1$ kΩ 时 $R_2=11.06$ kΩ。

### 第 3 步 — 该比值下 $V_{REF}$ 的值

提出 $R_3/R_2$ 并利用零温度系数比值：

$$
V_{REF}=\frac{R_3}{R_2}\left[\frac{R_2}{R_1}V_{PTAT}+V_{CTAT}\right]
=\frac{R_3}{R_2}\left[V_{G0}+(\gamma-\alpha)V_{t0}\right]
=\frac{R_3}{R_2}\,(1.262\ \mathrm V).
$$

方括号内是熟悉的带隙电压 1.262 V；并联型结构按 $R_3/R_2$ 对它缩放，而该比值可以小于 1。这正是此结构适合低电压基准的优点。

### 第 4 步 — 为 1 V 选取 $R_3$

$$
\frac{R_3}{R_2}=\frac{1\ \mathrm V}{1.262\ \mathrm V}=0.792,
\qquad
R_3=0.792\times11.06\ \mathrm{k\Omega}=8.76\ \mathrm{k\Omega}.
$$

设计结果为 $R_1=1$ kΩ、$R_2=11.06$ kΩ、$R_3=8.76$ kΩ。验算：$V_{REF}=(8.76)(0.05987\ \mathrm V)+(0.792)(0.6\ \mathrm V)=0.525+0.475=1.000$ V。
