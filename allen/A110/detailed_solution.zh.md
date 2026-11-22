# 详细步骤 - A110

所有电阻相等时，原设计中的电阻比不能再为三个电流加权，加权改由 M24、M25 和 M23 的复制比实现。用这些比值写出 $V_{REF}$，代入二极管模型，再施加三个条件：$T\ln T$ 项抵消、$T_0$ 处一阶温度系数为零、$V_{REF}=1.0$ V。

### 第 1 步 — 用复制比表示 $V_{REF}$

M24、M25 和 M23 分别与总线器件 M3、M8 和 M18（$W/L=10$）共栅共源，在饱和区按 $W/L$ 的比例复制总线电流。定义

$$
a=\frac{(W/L)_{24}}{10},\qquad b=\frac{(W/L)_{25}}{10},\qquad c=\frac{(W/L)_{23}}{10}.
$$

M21 与 M22 的 $W/L$ 相同，故 $I_{22}=I_{23}$。取 $R_1=R_2=R_4=R_5=R$：

$$
V_{REF}=R\left(a\frac{V_{PTAT}}{R}+b\frac{V_{D3}}{R}-c\frac{V_{D4}}{R}\right)=aV_{PTAT}+bV_{D3}-cV_{D4}.
$$

公共电阻值相消：$V_{REF}$ 只取决于复制比和二极管电压。

### 第 2 步 — 代入二极管模型

$V_{PTAT}=V_t\ln10$ 与 $T$ 成正比。D3 由 PTAT 电流偏置（$\alpha=1$），D4 由恒定电流偏置（$\alpha=0$）；两者在 $T_0$ 时都是 0.7 V，因此线性部分相同：

$$
V_{D3}=V_L(T)-(\gamma-1)V_t\ln\frac{T}{T_0},\qquad
V_{D4}=V_L(T)-\gamma V_t\ln\frac{T}{T_0},\qquad
V_L(T)=V_{G0}-\frac{T}{T_0}\left[V_{G0}-V_D(T_0)\right].
$$

于是

$$
V_{REF}=aV_{PTAT}(T)+(b-c)V_L(T)+\left[c\gamma-b(\gamma-1)\right]V_t\ln\frac{T}{T_0}.
$$

### 第 3 步 — 消去曲率项

若满足

$$
b(\gamma-1)=c\gamma\quad\Rightarrow\quad\frac cb=\frac{\gamma-1}{\gamma}=\frac{2.2}{3.2}=0.6875 .
$$

则 $V_t\ln(T/T_0)$ 项在任何温度下都为零。减去恒流偏置二极管的电压，抵消了 PTAT 偏置二极管的 $T\ln T$ 曲率。

### 第 4 步 — 零温度系数与 $V_{REF}$ 的值

剩余部分是 $T$ 的线性函数。其斜率为零的条件为

$$
a\,\frac{V_{PTAT}(T_0)}{T_0}=(b-c)\,\frac{V_{G0}-V_D(T_0)}{T_0}
\quad\Rightarrow\quad
a\,V_{t0}\ln10=(b-c)\left[V_{G0}-V_D(T_0)\right].
$$

代入 $T_0$ 处的 $V_{REF}$：

$$
V_{REF}=a\,V_{t0}\ln10+(b-c)V_D(T_0)=(b-c)V_{G0},
$$

在该模型中它在任何温度下都相同，因为线性项和 $T\ln T$ 项都已抵消。

### 第 5 步 — 求解各比值

由 $V_{REF}=1.0$ V：

$$
b-c=\frac{1.0\ \mathrm V}{1.205\ \mathrm V}=0.8299,\qquad
b=\frac{0.8299}{1-0.6875}=2.656,\qquad c=0.6875\,b=1.826,
$$

$$
a=\frac{(b-c)\left[V_{G0}-V_D(T_0)\right]}{V_{t0}\ln10}=\frac{0.8299\times0.505\ \mathrm V}{0.05987\ \mathrm V}=7.00 .
$$

| 器件 | 复制的电流 | 比值 | $W/L$ |
|---|---|---|---|
| M24 | $I_{PTAT}'$（总线 M3） | $a=7.00$ | 70.0 |
| M25 | $I_{CTAT}'$（总线 M8） | $b=2.656$ | 26.6 |
| M23 | $I_{\alpha=0}'$（总线 M18） | $c=1.826$ | 18.3 |

这些比值等于原 1:1 设计中的电阻比 $R_5/R_1=7.0$、$R_5/R_2=2.66$、$R_5/R_4=1.83$。

用模型在三个温度下验算：

| $T$ | $V_{D3}$ | $V_{D4}$ | $V_{REF}=aV_{PTAT}+bV_{D3}-cV_{D4}$ |
|---|---|---|---|
| 273 K | 0.7504 V | 0.7526 V | 1.000 V |
| 300 K | 0.7000 V | 0.7000 V | 1.000 V |
| 343 K | 0.6189 V | 0.6149 V | 1.000 V |

### 第 6 步 — 相等电阻的取值

由于 $R$ 不出现在 $V_{REF}$ 中，它只决定电流大小，从而决定功耗以及使所有器件保持饱和所需的电压余度。保留原来的 $R_4$，取 $R=10$ kΩ，室温下

$$
I_{PTAT}'=\frac{59.87\ \mathrm{mV}}{10\ \mathrm{k\Omega}}=5.99\ \mu\mathrm A,\qquad
I_{CTAT}'=I_{\alpha=0}'=\frac{0.7\ \mathrm V}{10\ \mathrm{k\Omega}}=70\ \mu\mathrm A
$$

$R_5=10$ kΩ 中流过 $aI_{PTAT}'+bI_{CTAT}'-cI_{\alpha=0}'=100$ µA，产生 1.0 V。$R_3$ 不属于这组电阻；它仍按使 M11 偏置在零温度系数点来确定。
