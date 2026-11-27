# 详细步骤 - R054

思路： 两个晶体管并联在节点 X 与地之间，栅极都接 $V_G$，因此 $I_X$ 是 NMOS 电流与 PMOS 电流之和。用平方律（square law）分析每个器件（工作区边界、电流），把电流相加得到 $I_X$–$V_X$ 曲线，再对 $V_G$ 求导得到等效跨导。

图中仅取 $\beta_n=\beta_p=1\ \mathrm{mA/V^2}$ 展示曲线形状。$I_X$ 和 $g_{m,eq}$ 曲线如下。

![I_X–V_X 曲线](/q/R054/solution-ix.zh.svg)

![等效跨导曲线](/q/R054/solution-gm.zh.svg)

### 第 1 步 — 并联连接与 NMOS 电流

把由 $V_X$ 驱动的节点称为节点 X。两个器件都从 X 接到地，因此在 X 点列 KCL，

$$I_X = I_N + I_P ,$$

其中 $I_N$ 和 $I_P$ 分别是经 NMOS 和 PMOS 从 X 流到地的电流。

NMOS 的 $V_{GS} = V_G$，$V_{DS} = V_X$，过驱动电压（overdrive voltage）为 $V_{ovN} = V_G - 0.7$ V：

- 截止：当 $V_G \le 0.7$ V 时，$I_N = 0$。
- 线性区：当 $V_X < V_G - 0.7$ V 时，
$$I_N = \beta_n\left[(V_G - 0.7)V_X - \frac{V_X^2}{2}\right].$$
- 饱和区：当 $V_X \ge V_G - 0.7$ V 时（由于 $\lambda = 0$，电流是平坦的），
$$I_N = \frac12\,\beta_n\,(V_G - 0.7)^2 .$$

### 第 2 步 — PMOS 电流

由于 $V_X \ge 0$，电位较高的端子即节点 X 是 PMOS 的源极，接地的端子是其漏极：

$$V_{SG} = V_X - V_G, \qquad V_{SD} = V_X - 0 = V_X .$$

当 $V_{SG} > |V_{THP}|$ 时 PMOS 导通：

$$V_X - V_G > 0.8\ \mathrm{V} \quad\Longleftrightarrow\quad V_X > V_G + 0.8\ \mathrm{V},$$

因此在 $V_X$ 较小时它截止，只有当 $V_X$ 比栅极高出 0.8 V 时才导通。饱和条件 $V_{SD} \ge V_{SG} - |V_{THP}|$ 变为 $V_X \ge V_X - V_G - 0.8$，即 $V_G \ge -0.8$ V，对 $V_G \ge 0$ 总是成立：只要 PMOS 导通，它就处于饱和区。因此

$$I_P = \frac12\,\beta_p\,(V_X - V_G - 0.8)^2 \qquad (V_X > V_G + 0.8\ \mathrm{V}),$$

否则 $I_P = 0$。

### 第 3 步 — 以 $V_G$ 为参变量，$I_X$ 随 $V_X$ 的变化

情形 $V_G > 0.7$ V（NMOS 导通）。随着 $V_X$ 从 0 增大，分为三段：

1. $0 \le V_X \le V_G - 0.7$：NMOS 处于线性区，PMOS 截止。$I_X = \beta_n[(V_G - 0.7)V_X - V_X^2/2]$，从原点出发，初始斜率为 $\beta_n(V_G - 0.7)$，然后逐渐弯曲（一条开口向下的抛物线）。
2. $V_G - 0.7 \le V_X \le V_G + 0.8$：NMOS 饱和，PMOS 仍截止。在 $I_X = \tfrac12\beta_n(V_G - 0.7)^2$ 处形成平坦的平台，宽 1.5 V。
3. $V_X > V_G + 0.8$：PMOS 导通并饱和。$I_X = \tfrac12\beta_n(V_G - 0.7)^2 + \tfrac12\beta_p(V_X - V_G - 0.8)^2$，即第二段向上弯曲的抛物线上升。

当 $V_G \ge 2.2$ V 时，PMOS 的导通点 $V_G + 0.8$ 超过 3 V，因此在该范围内只出现第 1 段和第 2 段。

情形 $V_G \le 0.7$ V（NMOS 截止）。在 $V_X = V_G + 0.8$ 之前 $I_X = 0$，之后 $I_X = \tfrac12\beta_p(V_X - V_G - 0.8)^2$。

随 $V_G$ 的变化趋势。 较大的 $V_G$ 会扩展线性区，使平台按 $(V_G - 0.7)^2$ 升高，并把 PMOS 的导通点推向右边。较小的 $V_G$ 使平台较低，但 PMOS 导通更早、电流更大，因此不同 $V_G$ 的曲线在高 $V_X$ 处相交。

示例。 取 $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$（器件尺寸未给定，因此这只是一个例子）。当 $V_G = 1.5$ V 时：$V_{ovN} = 0.8$ V，平台为 $\tfrac12(1)(0.8)^2 = 0.32$ mA，从 $V_X = 0.8$ V 延伸到 2.3 V；在 $V_X = 3$ V 时，$I_X = 0.32 + \tfrac12(1)(3 - 2.3)^2 = 0.32 + 0.245 = 0.565$ mA。$I_X$ 的数值（mA）如下：

| $V_X$（V） | 0 | 0.25 | 0.5 | 0.75 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| $V_G = 0.5$ V | 0 | 0 | 0 | 0 | 0 | 0.020 | 0.245 | 0.72 | 1.445 |
| $V_G = 1.0$ V | 0 | 0.044 | 0.045 | 0.045 | 0.045 | 0.045 | 0.065 | 0.29 | 0.765 |
| $V_G = 1.5$ V | 0 | 0.169 | 0.275 | 0.319 | 0.32 | 0.32 | 0.32 | 0.34 | 0.565 |
| $V_G = 2.0$ V | 0 | 0.294 | 0.525 | 0.694 | 0.80 | 0.845 | 0.845 | 0.845 | 0.865 |
| $V_G = 2.5$ V | 0 | 0.419 | 0.775 | 1.069 | 1.30 | 1.575 | 1.62 | 1.62 | 1.62 |

在 $V_X = 3$ V 处，$V_G = 0.5$ V 的曲线（1.445 mA）位于 $V_G = 1.0$ V 和 1.5 V 的曲线之上：这就是上面提到的交叉。

### 第 4 步 — 等效跨导 $\partial I_X/\partial V_G$

在 $V_X$ 固定时：

$$g_{m,eq} = \frac{\partial I_X}{\partial V_G} = \frac{\partial I_N}{\partial V_G} + \frac{\partial I_P}{\partial V_G} .$$

NMOS 项。

- 线性区：$\dfrac{\partial}{\partial V_G}\beta_n\left[(V_G - 0.7)V_X - \dfrac{V_X^2}{2}\right] = \beta_nV_X$。
- 饱和区：$\dfrac{\partial}{\partial V_G}\tfrac12\beta_n(V_G - 0.7)^2 = \beta_n(V_G - 0.7)$。

PMOS 项（导通时）：

$$\frac{\partial}{\partial V_G}\tfrac12\beta_p(V_X - V_G - 0.8)^2 = \beta_p(V_X - V_G - 0.8)\cdot(-1) = -\beta_p(V_X - V_G - 0.8).$$

它是负的：升高公共栅极电压会减小 PMOS 的 $V_{SG}$，使其电流减小。因此 $g_{m,eq} = g_{mN} - g_{mP}$，其中 $g_{mP} = \beta_p(V_X - V_G - 0.8)$ 是 PMOS 自身的跨导。

当 $V_G > 0.7$ V 时，随 $V_X$ 变化的形状：

1. $0 \le V_X \le V_G - 0.7$：$g_{m,eq} = \beta_nV_X$，一条从 0 出发、斜率为 $\beta_n$ 的直线。
2. $V_G - 0.7 \le V_X \le V_G + 0.8$：恒定值 $g_{m,eq} = \beta_n(V_G - 0.7)$。
3. $V_X > V_G + 0.8$：$g_{m,eq} = \beta_n(V_G - 0.7) - \beta_p(V_X - V_G - 0.8)$，以斜率 $-\beta_p$ 线性下降。它在两项相等处过零，
$$V_X = V_G + 0.8 + \frac{\beta_n}{\beta_p}(V_G - 0.7),$$
此后为负值。

当 $V_G \le 0.7$ V 时： 在 $V_X = V_G + 0.8$ 之前 $g_{m,eq} = 0$，之后为 $-\beta_p(V_X - V_G - 0.8)$，为负值且幅度不断增大。

示例。 取 $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$，$g_{m,eq}$ 的数值（mS）如下：

| $V_X$（V） | 0 | 0.25 | 0.5 | 0.75 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| $V_G = 0.5$ V | 0 | 0 | 0 | 0 | 0 | −0.2 | −0.7 | −1.2 | −1.7 |
| $V_G = 1.0$ V | 0 | 0.25 | 0.3 | 0.3 | 0.3 | 0.3 | 0.1 | −0.4 | −0.9 |
| $V_G = 1.5$ V | 0 | 0.25 | 0.5 | 0.75 | 0.8 | 0.8 | 0.8 | 0.6 | 0.1 |
| $V_G = 2.0$ V | 0 | 0.25 | 0.5 | 0.75 | 1.0 | 1.3 | 1.3 | 1.3 | 1.1 |

当 $V_G = 1$ V 时，过零点位于 $V_X = 1.8 + 0.3 = 2.1$ V，与表中数据一致（2.0 V 时为 0.1 mS，2.5 V 时为 −0.4 mS）。

### 结果

$$I_X = I_N + I_P, \qquad I_N = \begin{cases}0, & V_G \le 0.7\\ \beta_n[(V_G - 0.7)V_X - V_X^2/2], & V_X < V_G - 0.7\\ \tfrac12\beta_n(V_G - 0.7)^2, & V_X \ge V_G - 0.7\end{cases}, \qquad I_P = \begin{cases}0, & V_X \le V_G + 0.8\\ \tfrac12\beta_p(V_X - V_G - 0.8)^2, & V_X > V_G + 0.8\end{cases}$$

当 $V_G > 0.7$ V 时，曲线在 NMOS 线性区上升，从 $V_X = V_G - 0.7$ 到 $V_G + 0.8$ 在 $\tfrac12\beta_n(V_G - 0.7)^2$ 处保持平坦，然后随着（总是饱和的）PMOS 导通而按抛物线上升。当 $V_G \le 0.7$ V 时，只出现 PMOS 的抛物线。较大的 $V_G$ 抬高平台并推迟 PMOS 的导通（当 $V_G > 2.2$ V 时不出现），因此曲线在高 $V_X$ 处可能相交。

$$g_{m,eq} = \frac{\partial I_X}{\partial V_G} = g_{mN} - g_{mP}:\quad \beta_nV_X\ \text{(NMOS triode)},\quad \beta_n(V_G - 0.7)\ \text{(plateau)},\quad \beta_n(V_G - 0.7) - \beta_p(V_X - V_G - 0.8)\ \text{(PMOS on)},$$

一旦 PMOS 导通，它就以斜率 $-\beta_p$ 下降，并在 $V_X = V_G + 0.8 + (\beta_n/\beta_p)(V_G - 0.7)$ 之后变为负值。

常见错误： 把 PMOS 的源极当作接地端，这会得到 $V_{SG} = -V_G < 0$，曲线没有第二段上升（或者反过来，让 PMOS 在 $V_X$ 很小时就导通）。PMOS 的源极是节点 X，因此只有当 $V_X > V_G + 0.8$ V 时它才导通，而且导通后总是饱和。

常见错误： 把两个跨导相加为 $g_{mN} + g_{mP}$。由于栅极连在一起，$V_G$ 升高会使 NMOS 电流增大，却使 PMOS 电流减小，因此 PMOS 的贡献是负的，$g_{m,eq}$ 可能变号。

常见错误： 把两个器件看成串联。两个晶体管都直接从 X 接到地，因此它们的电流相加。
