# 详细步骤 - R055

思路： PMOS 和 NMOS 串联在 X 与地之间，栅极都接 $V_G$，因此两者流过相同的电流，并且两者都必须导通。引入中间节点 Y，求出在 $V_X$ 的各个范围内哪个器件处于饱和，并证明 $I_X$ 等于两个饱和电流中较小的那个。然后对 $V_G$ 求导，得到等效跨导。

图中取 $\beta_n=\beta_p=1\ \mathrm{mA/V^2}$，四种栅压分面采用相同坐标尺度。虚线标出范围内的导通和转折边界。

![I_X–V_X 曲线](/q/R055/solution-ix.zh.svg)

![等效跨导曲线](/q/R055/solution-gm.zh.svg)

### 第 1 步 — 端电压以及何时有电流

把两个器件之间的节点称为 Y（$0 \le V_Y \le V_X$）；PMOS 的源极在 X。两个器件串联，因此 $I_X = I_P = I_N$，并且

$$
\begin{aligned}
\text{NMOS:}&\quad V_{GS} = V_G, & V_{DS} &= V_Y,\\
\text{PMOS:}&\quad V_{SG} = V_X - V_G, & V_{SD} &= V_X - V_Y ,
\end{aligned}
$$

过驱动电压分别为

$$V_{ovN} = V_G - 0.7, \qquad V_{ovP} = V_X - V_G - 0.8 .$$

串联通路只有在两个器件都导通时才导电：NMOS 需要 $V_G > 0.7$ V，PMOS 需要 $V_{SG} > 0.8$ V，即 $V_X > V_G + 0.8$ V。因此

$$I_X = 0 \quad\text{if}\quad V_G \le 0.7\ \mathrm{V}\quad\text{or}\quad V_X \le V_G + 0.8\ \mathrm{V}.$$

当 $V_G \ge 2.2$ V 时，在 $0 \le V_X \le 3$ V 范围内 PMOS 始终不导通，因此在整个范围内 $I_X = 0$。

### 第 2 步 — 哪个器件饱和？

NMOS 饱和的条件是 $V_{DS} \ge V_{GS} - V_{THN}$：

$$V_Y \ge V_G - 0.7 .$$

PMOS 饱和的条件是 $V_{SD} \ge V_{SG} - |V_{THP}|$：

$$V_X - V_Y \ge V_X - V_G - 0.8 \quad\Longleftrightarrow\quad V_Y \le V_G + 0.8 .$$

由此可得：

- 若 NMOS 处于线性区（$V_Y < V_G - 0.7$），则 $V_Y < V_G + 0.8$，因此 PMOS 饱和。
- 若 PMOS 处于线性区（$V_Y > V_G + 0.8$），则 $V_Y > V_G - 0.7$，因此 NMOS 饱和。

至少总有一个器件饱和，并由该器件决定电流。只有在唯一的转折点（transition point）上两者才同时饱和（$\lambda = 0$ 时）。

### 第 3 步 — 区域 I：PMOS 饱和，NMOS 处于线性区（PMOS 限流）

刚超过 $V_X = V_G + 0.8$ V 时，PMOS 的过驱动电压极小，只能通过很小的电流；而 NMOS 有完整的过驱动电压 $V_G - 0.7$，只需很小的 $V_{DS}$ 就能承载这一电流：节点 Y 接近地，NMOS 处于线性区。由饱和的 PMOS 决定电流：

$$I_X = \frac12\,\beta_p\,(V_X - V_G - 0.8)^2 ,$$

随着 $V_X$ 增大，电流从零开始按抛物线上升。（这时 NMOS 的线性区方程 $I_X = \beta_n[V_{ovN}V_Y - V_Y^2/2]$ 决定了 $V_Y = V_{ovN} - \sqrt{V_{ovN}^2 - 2I_X/\beta_n}$，它随 $I_X$ 的增大从 0 开始增大。）

适用条件：只有当电流低于 NMOS 自身的饱和电流时，NMOS 才保持在线性区：

$$\frac12\beta_p(V_X - V_G - 0.8)^2 < \frac12\beta_n(V_G - 0.7)^2 .$$

### 第 4 步 — 区域 II：NMOS 饱和，PMOS 处于线性区（NMOS 限流）

当 PMOS 的饱和电流超过 NMOS 的饱和电流时，NMOS 饱和，PMOS 处于线性区。饱和的 NMOS 决定电流。

$$I_X = \frac12\,\beta_n\,(V_G - 0.7)^2 ,$$

它与 $V_X$ 无关（因为 $\lambda = 0$）：一个平坦的上限。

转折点：令两个饱和电流相等：

$$
\begin{aligned}
\frac12\beta_p(V_X - V_G - 0.8)^2 &= \frac12\beta_n(V_G - 0.7)^2\\
V_X - V_G - 0.8 &= \sqrt{\frac{\beta_n}{\beta_p}}\,(V_G - 0.7)\\
V_X &= V_G + 0.8 + \sqrt{\frac{\beta_n}{\beta_p}}\,(V_G - 0.7) .
\end{aligned}
$$

紧凑形式：只要两个器件都导通，

$$I_X = \min\left\{\tfrac12\beta_p(V_X - V_G - 0.8)^2,\ \tfrac12\beta_n(V_G - 0.7)^2\right\}:$$

较弱的器件决定电流，就像串联的两根管道中较细的那根。

### 第 5 步 — 曲线族

对于 0.7 V 到 2.2 V 之间的每个 $V_G$，曲线在 $V_X = V_G + 0.8$ 之前为零，然后按抛物线上升，再进入 $\tfrac12\beta_n(V_G - 0.7)^2$ 处的平坦上限（如果转折点低于 3 V）。增大 $V_G$ 会：

- 把导通点 $V_G + 0.8$ 向右移；
- 把上限 $\tfrac12\beta_n(V_G - 0.7)^2$ 向上移；
- 把转折点更快地向右移，因此当 $V_G$ 较大时，上限可能位于 3 V 之外，只能看到抛物线部分。

示例：取 $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$（尺寸未给定，这只是一个例子）。此时转折点位于 $V_X = 2V_G + 0.1$。当 $V_G = 1.2$ V 时：导通点为 2.0 V，在 $V_X = 2.5$ V 处达到上限 $\tfrac12(0.5)^2 = 0.125$ mA。$I_X$ 的数值（mA）如下：

| $V_X$（V） | 1.8 | 2.0 | 2.2 | 2.4 | 2.6 | 2.8 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_G = 1.0$ V | 0 | 0.020 | 0.045 | 0.045 | 0.045 | 0.045 | 0.045 |
| $V_G = 1.2$ V | 0 | 0 | 0.020 | 0.080 | 0.125 | 0.125 | 0.125 |
| $V_G = 1.5$ V | 0 | 0 | 0 | 0.005 | 0.045 | 0.125 | 0.245 |
| $V_G = 2.0$ V | 0 | 0 | 0 | 0 | 0 | 0 | 0.020 |

当 $V_G = 1.5$ V 时，只有在 $V_X = 3.1$ V 处才会达到上限（0.32 mA），已超出范围。当 $V_G \le 0.7$ V 时，电流处处为零。

### 第 6 步 — 等效跨导 $\partial I_X/\partial V_G$

在 $V_X$ 固定时，对每个区域中成立的表达式求导。

区域 I（PMOS 限流）：

$$\frac{\partial I_X}{\partial V_G} = \frac{\partial}{\partial V_G}\left[\tfrac12\beta_p(V_X - V_G - 0.8)^2\right] = \beta_p(V_X - V_G - 0.8)\cdot(-1) = -\beta_p(V_X - V_G - 0.8) .$$

它是负的，因为升高栅极电压会减小 PMOS 的 $V_{SG}$，而这时正是 PMOS 控制着电流。$g_{m,eq}$ 随 $V_X$ 以斜率 $-\beta_p$ 下降，转折点左极限为 $-\sqrt{\beta_n\beta_p}\,(V_G-0.7\ \mathrm{V})$。

区域 II（NMOS 限流）：

$$\frac{\partial I_X}{\partial V_G} = \frac{\partial}{\partial V_G}\left[\tfrac12\beta_n(V_G - 0.7)^2\right] = +\beta_n(V_G - 0.7),$$

为正，且与 $V_X$ 无关。

在 $I_X = 0$ 处（$V_X \le V_G + 0.8$ 或 $V_G \le 0.7$ V）：$\partial I_X/\partial V_G = 0$。

固定 $V_G$ 扫描 $V_X$，跨导先为零，再沿负斜坡下降，若扫描越过第 4 步的转折电压，则跳到正平台。转折点处固定 $V_X$ 微调 $V_G$，增大 $V_G$ 选中 PMOS 限流支路，减小 $V_G$ 选中 NMOS 限流支路。两侧导数不同，所以该点的偏导数未定义，图中用两个空心圆标出极限。以 $V_G=1.2\ \mathrm{V}$ 为例，转折在 $V_X=2.5\ \mathrm{V}$，左、右极限分别为 $-0.5\ \mathrm{mS}$ 和 $+0.5\ \mathrm{mS}$。

示例：取 $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$，$\partial I_X/\partial V_G$ 的数值（mS）如下：

| $V_X$（V） | 1.8 | 2.0 | 2.2 | 2.4 | 2.6 | 2.8 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_G = 1.0$ V | 0 | −0.2 | 0.3 | 0.3 | 0.3 | 0.3 | 0.3 |
| $V_G = 1.2$ V | 0 | 0 | −0.2 | −0.4 | 0.5 | 0.5 | 0.5 |
| $V_G = 1.5$ V | 0 | 0 | 0 | −0.1 | −0.3 | −0.5 | −0.7 |

### 结果

两个器件都必须导通，因此除非 $V_G > 0.7$ V 且 $V_X > V_G + 0.8$ V，否则 $I_X = 0$。此时

$$I_X = \min\left\{\tfrac12\beta_p(V_X - V_G - 0.8)^2,\ \tfrac12\beta_n(V_G - 0.7)^2\right\}:$$

先是 PMOS 饱和、NMOS 处于线性区时的抛物线上升；从 $V_X = V_G + 0.8 + \sqrt{\beta_n/\beta_p}\,(V_G - 0.7)$ 开始，NMOS 饱和、PMOS 处于线性区，电流为平坦的上限 $\tfrac12\beta_n(V_G - 0.7)^2$。较大的 $V_G$ 使导通点右移并抬高上限。等效跨导在 PMOS 限流区为 $-\beta_p(V_X - V_G - 0.8)$（负值），在 NMOS 限流区为 $+\beta_n(V_G - 0.7)$，在没有电流的地方为零。

常见错误： 把两个器件看成并联并把电流相加。只有一条通路 X → PMOS → Y → NMOS → 地，因此两者流过相同的电流，由较弱的器件决定。

常见错误： 让电流在 $V_G < 0.7$ V 或 $V_X$ 很小时流动。NMOS 需要 $V_G > 0.7$ V，而源极在 X（不在中间节点）的 PMOS 需要 $V_X > V_G + 0.8$ V；任何一个截止，都有 $I_X = 0$。

常见错误： 认为 $\partial I_X/\partial V_G$ 处处同号。在 PMOS 限流区，栅极电压升高会减小电流，因此等效跨导在那里为负，只有在 NMOS 限流的区域才为正。
