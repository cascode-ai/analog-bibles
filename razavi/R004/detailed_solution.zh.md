# 详细步骤 - R004

固定 $V_{DS}$，由饱和条件确定各条栅压扫描曲线的工作区分界。

### 第 1 步 — 分段电流与工作区

源极和衬底接地，阈值无体效应偏移，$V_{TH}=0.7$ V。采用强反型平方律模型，忽略 CLM 和亚阈值电流。令 $u=V_{GS}-V_{TH}$、$\beta=\mu_nC_{ox}(W/L)$，其中 $\beta$ 的单位为 A/V²。题目未给出 $\beta$，因此纵轴取 $I_D/\beta$，单位为 V²。

对 $V_{DS}>0$，$u\le0$ 时截止，$0<u\le V_{DS}$ 时饱和，$u>V_{DS}$ 时处于线性区。模型电流为

$$
\frac{I_D}{\beta}=\begin{cases}
0,&u\le0,\\
u^2/2,&0<u\le V_{DS},\\
uV_{DS}-V_{DS}^2/2,&u>V_{DS}.
\end{cases}
$$

固定 $V_{DS}$ 时，饱和条件 $V_{DS}\ge V_{GS}-V_{TH}$ 等价于 $V_{GS}\le V_{TH}+V_{DS}$。因此随 $V_{GS}$ 增大，工作区依次为截止 → 饱和 → 线性，分界点为
$$
V_{GS,1}=0.7\ \mathrm V,\qquad V_{GS,2}=0.7\ \mathrm V+V_{DS}.
$$

### 第 2 步 — 曲线形状与分界处连续性

饱和段为 $I_D=\beta u^2/2$，所有 $V_{DS}$ 对应同一条抛物线，从阈值处以零斜率起始。在 $u=V_{DS}$ 处，代入两段公式得

$$
I_{D,\mathrm{sat}}=\tfrac12\beta V_{DS}^2,
\qquad I_{D,\mathrm{tri}}=\beta(V_{DS}^2-\tfrac12V_{DS}^2)=\tfrac12\beta V_{DS}^2.
$$
$$
\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{\mathrm{sat}}=\beta u=\beta V_{DS}
=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{\mathrm{tri}}.
$$

因此，各线性区分支都是斜率为 $\beta V_{DS}$ 的直线，与抛物线相切。第二个分界点改变的是曲率，斜率并不突变；$V_{DS}$ 越大，共同的抛物线段越长，后续直线越陡。

### 第 3 步 — 曲线族及关键数值校验

对三种固定漏源电压，利用 $V_{GS,2}=0.7\ \mathrm V+V_{DS}$ 和 $I_D/\beta=V_{DS}^2/2$ 求分界点坐标：

| $V_{DS}$ (V) | $V_{GS,2}$ (V) | 分界处 $I_D/\beta$ (V²) |
|---|---|---|
| 0.2 | 0.9 | 0.020 |
| 0.5 | 1.2 | 0.125 |
| 1.0 | 1.7 | 0.500 |

![标出归一化电流和光滑工作区分界点的转移特性曲线](/q/R004/solution-curves.zh.svg)

例如 $V_{GS}=2$ V、$V_{DS}=0.5$ V 时，$u=1.3$ V 大于 $V_{DS}$，应使用线性区公式：
$$
\frac{I_D}{\beta}=(1.3\ \mathrm V)(0.5\ \mathrm V)-\frac{(0.5\ \mathrm V)^2}{2}=0.525\ \mathrm{V^2}.
$$
当 $V_{DS}\ge2.3$ V 时，在 0–3 V 扫描范围内，导通部分均为饱和区，对应图中的虚线抛物线包络。$V_{DS}=2.3$ V 的分界点恰在右端点。$V_{DS}=0$ 时电流恒为零；当 $0<V_{DS}\ll u$ 时，可忽略 $V_{DS}^2/2$，得到深线性区近似 $I_D\approx\beta uV_{DS}$。
