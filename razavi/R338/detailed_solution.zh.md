# 详细步骤 - R338

**思路。** 同时计入信号和全部四个噪声源（$M_1$、$M_2$、$R_S$、$R_D$），在折叠节点 X 列 KCL 方程，再由 $M_2$ 送入 $R_D$ 的电流求出输出。把每个噪声项的系数除以信号增益即可折算到输入端，互不相关的各个功率相加。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从 X 流向地的电流源（current source）$g_{m1}v_{in}$（$\lambda = 0$），其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）与之并联，方向相同。
- **$R_S$：** 接在 X 与交流地之间，其诺顿噪声 $I_{nS}$（$\overline{I_{nS}^2} = 4kT/R_S$）从 $V_{DD}$ 流入 X。
- **$M_2$**（栅极接交流地）：从 X 流入输出端的电流 $g_{m2}v_{sg2} = g_{m2}v_X$，其噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$）与之并联，同样从 X 流向输出端。
- **$R_D$：** 接在输出端与地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从地流入输出端。

<!-- diagram: diagram-01.cir -->

$M_1$ 的信号电流从 X 抽取，而 X 同时由 $R_S$ 和 $M_2$（其源极呈现 $1/g_{m2}$ 的阻抗）供电；只有经 $M_2$ 提供的那部分才会到达 $R_D$。

### 第 2 步 — 节点 X 的 KCL

流出 X 的电流之和为零：

$$\underbrace{g_{m1}v_{in} + I_{n1}}_{\text{through } M_1} + \underbrace{g_{m2}v_X + I_{n2}}_{\text{through } M_2} + \underbrace{\frac{v_X}{R_S} - I_{nS}}_{\text{through } R_S} = 0 ,$$

$$
\begin{aligned}
v_X\left(g_{m2} + \frac{1}{R_S}\right) &= I_{nS} - g_{m1}v_{in} - I_{n1} - I_{n2}\\
v_X &= \frac{I_{nS} - g_{m1}v_{in} - I_{n1} - I_{n2}}{g_{m2} + 1/R_S}.
\end{aligned}
$$

### 第 3 步 — 输出电压

$M_2$ 送出的电流 $g_{m2}v_X + I_{n2}$ 与 $I_{nD}$ 一起流入 $R_D$：

$$v_{out} = R_D\left(g_{m2}v_X + I_{n2}\right) + R_DI_{nD}.$$

代入 $v_X$，并通分为公分母 $g_{m2} + 1/R_S$：

$$
\begin{aligned}
g_{m2}v_X + I_{n2} &= \frac{g_{m2}\left(I_{nS} - g_{m1}v_{in} - I_{n1} - I_{n2}\right) + I_{n2}\left(g_{m2} + 1/R_S\right)}{g_{m2} + 1/R_S}\\
&= \frac{g_{m2}I_{nS} - g_{m1}g_{m2}v_{in} - g_{m2}I_{n1} - g_{m2}I_{n2} + g_{m2}I_{n2} + I_{n2}/R_S}{g_{m2} + 1/R_S}\\
&= \frac{g_{m2}I_{nS} - g_{m1}g_{m2}v_{in} - g_{m2}I_{n1} + I_{n2}/R_S}{g_{m2} + 1/R_S}.
\end{aligned}
$$

分子和分母同乘以 $R_S$：

$$g_{m2}v_X + I_{n2} = \frac{g_{m2}R_S\left(I_{nS} - g_{m1}v_{in} - I_{n1}\right) + I_{n2}}{1 + g_{m2}R_S},$$

$$v_{out} = \frac{R_D}{1 + g_{m2}R_S}\Big[g_{m2}R_S\left(I_{nS} - g_{m1}v_{in} - I_{n1}\right) + I_{n2}\Big] + R_DI_{nD}.$$

### 第 4 步 — 信号增益

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_D\,\frac{g_{m2}R_S}{1 + g_{m2}R_S}.$$

因子 $g_{m2}R_S/(1 + g_{m2}R_S) = R_S/(R_S + 1/g_{m2})$ 是 X 点处 $R_S$ 与 $1/g_{m2}$ 之间的分流比，即 $M_1$ 的信号电流中到达输出端的比例。

### 第 5 步 — 把各噪声源折算到输入端

$v_{out}$ 中的每个噪声项都除以 $A_v$，它等于 $-g_{m1}g_{m2}R_S$ 乘以公因子 $\frac{R_D}{1 + g_{m2}R_S}$（每个噪声源都要平方，因此符号无关紧要）。

- **$M_1$：** 系数为 $-g_{m2}R_S\cdot\frac{R_D}{1 + g_{m2}R_S}$。折算到输入端：$\dfrac{-g_{m2}R_SI_{n1}}{-g_{m1}g_{m2}R_S} = \dfrac{I_{n1}}{g_{m1}}$，因此
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$
- **$R_S$：** 系数为 $+g_{m2}R_S\cdot\frac{R_D}{1 + g_{m2}R_S}$，与 $M_1$ 的系数大小相同，因为 $I_{nS}$ 恰好在 $M_1$ 信号电流进入的同一节点 X 注入。折算到输入端：$I_{nS}/g_{m1}$，因此
$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{4kT/R_S}{g_{m1}^2} = \frac{4kT}{g_{m1}^2R_S}.$$
- **$M_2$：** 系数为 $\frac{R_D}{1 + g_{m2}R_S}$。折算到输入端：$\dfrac{I_{n2}}{g_{m1}g_{m2}R_S}$，因此
$$\overline{V_{n,in}^2}\Big|_{M_2} = \frac{4kT\gamma g_{m2}}{(g_{m1}g_{m2}R_S)^2} = \frac{4kT\gamma}{g_{m1}^2g_{m2}R_S^2}.$$
$M_2$ 的噪声只有比例为 $1/(1 + g_{m2}R_S)$ 的部分到达输出端：$R_S$ 对共源共栅器件起到了源极负反馈（source degeneration）的作用。
- **$R_D$：** 系数为 $R_D$。折算到输入端：$\dfrac{I_{nD}(1 + g_{m2}R_S)}{g_{m1}g_{m2}R_S}$，因此
$$\overline{V_{n,in}^2}\Big|_{R_D} = \frac{4kT}{R_D}\cdot\frac{(1 + g_{m2}R_S)^2}{(g_{m1}g_{m2}R_S)^2} = \frac{4kT(1 + g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}.$$

### 第 6 步 — 总噪声

四个噪声源互不相关，因此它们的输入参考功率相加：

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_S} + \frac{\gamma}{g_{m1}^2g_{m2}R_S^2} + \frac{(1 + g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}\right].$$

**验证。** 当 $R_S \to \infty$（相当于用理想电流源代替它）时，第二项和第三项消失，最后一项变为 $1/(g_{m1}^2R_D)$，得到 $4kT\left[\gamma/g_{m1} + 1/(g_{m1}^2R_D)\right]$：即负载为 $R_D$ 的简单共源级（common-source stage），这正是理想折叠式共源共栅应有的结果。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_S} + \frac{\gamma}{g_{m1}^2g_{m2}R_S^2} + \frac{(1+g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}\right]$$

增益为 $A_v = -g_{m1}R_D\,\dfrac{g_{m2}R_S}{1 + g_{m2}R_S}$。四项依次来自 $M_1$、$R_S$、$M_2$ 和 $R_D$。

**常见错误。** 把 $R_S$ 当作 $M_1$ 的源极负反馈电阻，或当作无噪声元件。$R_S$ 在 X 点为 $M_1$ 提供偏置电流，其噪声电流与 $M_1$ 的信号电流完全一样地进入 X，因此折算到输入端为 $4kT/(g_{m1}^2R_S)$。

**常见错误。** 忽略 X 点的分流，把增益取为 $g_{m1}R_D$。$M_1$ 的信号电流只有比例为 $g_{m2}R_S/(1 + g_{m2}R_S)$ 的部分到达输出端，这个因子会影响 $R_D$ 和 $M_2$ 噪声的折算。

**常见错误。** 以为“共源共栅器件不增加噪声”而略去 $M_2$。这只在其源极看到无穷大阻抗时才成立；X 点接有有限的 $R_S$ 时，$M_2$ 的噪声电流中有比例为 $1/(1 + g_{m2}R_S)$ 的部分到达输出端。
