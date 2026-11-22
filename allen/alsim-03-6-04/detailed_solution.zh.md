# 详细步骤 - alsim-03-6-04

一族输出特性曲线就是一次带两个扫描变量的直流分析：SPICE 对外层变量（$v_{GS}$）的每个取值完整运行一遍内层扫描（$v_{DS}$），所得各条曲线画在一起。再用 level-1 方程求出拐点和电流值加以核对。

### 第 1 步 — 嵌套直流扫描

```spice
NMOS output characteristics
M1 2 1 0 0 MN W=1U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MN NMOS LEVEL=1 VTO=1 KP=110U LAMBDA=0.04
.DC VDS 0 5 0.1 VGS 1 5 1
.PRINT DC I(VDS)
.END
```

`.DC VDS 0 5 0.1 VGS 1 5 1` 把 $v_{DS}$ 从 0 扫到 5 V（内层），并让 $v_{GS}$ 依次取 1、2、3、4、5 V（外层），因此五条曲线由一次运行得到。SPICE 报告的是流入 VDS 正节点的电流，故漏极电流为 $i_D=-I(\mathrm{VDS})$。取 W = L = 1 µm，电流即为单位 W/L 的值。（在 ngspice 中，在 `.control` 块里配合 `plot -i(vds)` 使用 `.DC` 可直接画出整族曲线；下图采用 10 mV 步长。）

### 第 2 步 — level-1 方程

记 $\beta=K'(W/L)=110\ \mu\mathrm{A/V^2}$，$V_{ov}=v_{GS}-V_T$，level-1 模型在两个工作区都乘以 $(1+\lambda v_{DS})$：

$$
i_D=
\begin{cases}
\beta\left(V_{ov}v_{DS}-\tfrac12v_{DS}^2\right)(1+\lambda v_{DS}), & v_{DS}<V_{ov}\ \text{(nonsaturation)}\\[4pt]
\tfrac12\beta V_{ov}^2(1+\lambda v_{DS}), & v_{DS}\ge V_{ov}\ \text{(saturation)}.
\end{cases}
$$

两段在 $v_{DS}=V_{ov}$ 处相接，因此各拐点位于抛物线 $i_D=\tfrac12\beta v_{DS}^2(1+\lambda v_{DS})$ 上（图中虚线）。

### 第 3 步 — 预期数值

$v_{GS}=1$ V 时 $V_{ov}=0$，器件处于阈值：处处 $i_D=0$。$v_{GS}=5$ V、$v_{DS}=5$ V 时（饱和区，$V_{ov}=4$ V）：

$$
i_D=\tfrac12(110\ \mu\mathrm{A/V^2})(4\ \mathrm V)^2(1+0.04\cdot5)=(880\ \mu\mathrm A)(1.2)=1056\ \mu\mathrm A .
$$

其余曲线同理：

| $v_{GS}$ | 拐点 $v_{DS}=V_{ov}$ | $\tfrac12\beta V_{ov}^2$ | $v_{DS}=1$ V 时的 $i_D$ | $v_{DS}=5$ V 时的 $i_D$ |
|---|---|---|---|---|
| 1 V | 0 | 0 | 0 | 0 |
| 2 V | 1 V | 55 µA | 57.2 µA | 66 µA |
| 3 V | 2 V | 220 µA | 171.6 µA | 264 µA |
| 4 V | 3 V | 495 µA | 286 µA | 594 µA |
| 5 V | 4 V | 880 µA | 400.4 µA | 1056 µA |

在拐点以下，各曲线从原点出发，初始斜率为 $\beta V_{ov}=110$、220、330、440 µA/V。

### 第 4 步 — 仿真曲线族

![vGS = 1 至 5 V 时漏极电流随漏源电压变化的仿真曲线，虚线为饱和边界 vDS = vGS − VT，并标出拐点](/q/alsim-03-6-04/solution-curves.zh.svg)

ngspice 的数值与上表完全一致：$v_{GS}=1$ V 时电流为零，拐点位于 $v_{DS}=1$、2、3、4 V，$v_{DS}=5$ V 处的电流为 66、264、594 和 1056 µA。在饱和区，每条曲线以斜率 $\lambda\cdot\tfrac12\beta V_{ov}^2$ 上升，例如 $v_{GS}=5$ V 时为 35 µA/V。拐点在 $v_{DS}=v_{GS}-V_T$ 而不在 $v_{GS}$，饱和电流用的是 $\beta/2$。
