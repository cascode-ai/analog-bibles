# 详细步骤 - A047

利用给定的一个偏置点求出饱和区平方律中的器件常数，再在所要求的栅压下计算电流，并按比例画出曲线。

### 第 1 步 — 由给定点求器件常数

$\lambda=0$ 时，n 沟道晶体管在饱和区（$v_{GS}>V_T$，$v_{DS}\ge v_{GS}-V_T$）的平方律漏极电流为

$$
i_D=\frac{K'W}{2L}\,(v_{GS}-V_T)^2,
$$

其中 $K'=\mu_nC_{ox}$（A/V²），$W/L$ 为宽长比（aspect ratio）。二者没有单独给出，但其乘积可由 $V_{GS}=5$ V 时 $I_D=500\ \mu\mathrm A$ 求得：

$$
\frac{K'W}{2L}=\frac{500\ \mu\mathrm A}{(5\ \mathrm V-0.7\ \mathrm V)^2}=\frac{500\ \mu\mathrm A}{18.49\ \mathrm{V^2}}=27.04\ \mu\mathrm{A/V^2},
\qquad \frac{K'W}{L}=54.08\ \mu\mathrm{A/V^2}.
$$

$v_{GS}\le V_T=0.7$ V 时晶体管截止，$i_D=0$（亚阈值电流不在平方律模型范围内）。

### 第 2 步 — 各栅压下的电流

以 $V_{GS}=3$ V 为代表代入：

$$
i_D=27.04\ \mu\mathrm{A/V^2}\,(3\ \mathrm V-0.7\ \mathrm V)^2=27.04\ \mu\mathrm{A/V^2}\times5.29\ \mathrm{V^2}=143.1\ \mu\mathrm A .
$$

特性曲线的斜率即跨导（transconductance）$g_m=\partial i_D/\partial v_{GS}=2(27.04\ \mu\mathrm{A/V^2})(v_{GS}-0.7\ \mathrm V)$。同样的公式给出：

| $V_{GS}$ (V) | $V_{GS}-V_T$ (V) | $i_D$ (µA) | $g_m$ (µA/V) |
|---|---|---|---|
| 1 | 0.3 | 2.43 | 16.2 |
| 2 | 1.3 | 45.7 | 70.3 |
| 3 | 2.3 | 143.1 | 124 |
| 4 | 3.3 | 294.5 | 178 |
| 5 | 4.3 | 500 | 233 |

### 第 3 步 — 按比例画出的特性曲线

![饱和区转移特性 iD 随 vGS 变化：0.7 V 以下为零，之后为抛物线，在 1 至 5 V 处分别经过 2.4、45.7、143、294 和 500 µA](/q/A047/solution-curves.zh.svg)

曲线在 $V_T=0.7$ V 以下为零，之后按抛物线上升。它在 0.7 V 处以零斜率离开横轴（因为 $g_m\propto v_{GS}-V_T$）；$v_{GS}>V_T$ 时二阶导数 $d^2i_D/dv_{GS}^2=2(27.04\ \mu\mathrm{A/V^2})$ 为正的常数，曲线向上凹，斜率从 1 V 处的 16 µA/V 线性增大到 5 V 处的 233 µA/V。等价地，$\sqrt{i_D}=\sqrt{27.04\ \mu\mathrm{A/V^2}}\,(v_{GS}-0.7\ \mathrm V)$ 是一条直线，它在 $v_{GS}$ 轴上的截距为 $V_T=0.7$ V。每个点都假设漏极电压使器件保持饱和，即 $v_{DS}\ge v_{GS}-0.7$ V。
