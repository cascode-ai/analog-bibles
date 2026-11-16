# 详细步骤 - R341

**思路。** $M_1$ 是带源极负反馈的共源器件，$M_2$ 是与 $R_D$ 并联的电流源（current source），其栅极由 $M_1$ 的源极节点 S 驱动。由 S 点的基尔霍夫电流定律（KCL）求出 $v_S$，再由输出端的 KCL 用信号和四个噪声源（$M_1$、$M_2$、$R_S$、$R_D$）表示 $v_{out}$。把每个噪声项的系数除以信号增益，再把互不相关的功率相加。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从输出端流向 S 的电流 $g_{m1}(v_{in} - v_S)$，其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）与之并联。
- **$R_S$：** 接在 S 与地之间，其诺顿噪声 $I_{nS}$（$\overline{I_{nS}^2} = 4kT/R_S$）从 S 流向地。
- **$M_2$**（源极接交流地，栅极接 S，$\lambda = 0$）：它向输出端送入 $g_{m2}v_{sg2} = g_{m2}(0 - v_S) = -g_{m2}v_S$，其噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$）也流入输出端。它的栅极不从 S 吸取电流。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。

<!-- diagram: diagram-01.cir -->

当 $v_{in}$ 升高时，$v_S$ 随之升高，使 $M_2$ 的电流**减小**，于是 $M_2$ 与 $M_1$ 朝同一方向拉动输出，从而提高增益。

### 第 2 步 — 源极节点 S 的 KCL

经 $M_1$ 流来的电流经 $R_S$ 及其噪声源流出：

$$g_{m1}(v_{in} - v_S) + I_{n1} = \frac{v_S}{R_S} + I_{nS}. \tag{1}$$

$$
\begin{aligned}
v_S\left(g_{m1} + \frac{1}{R_S}\right) &= g_{m1}v_{in} + I_{n1} - I_{nS}\\
v_S &= \frac{g_{m1}v_{in} + I_{n1} - I_{nS}}{g_{m1} + 1/R_S}.
\end{aligned}
\tag{2}
$$

### 第 3 步 — 输出端的 KCL

从 $R_D$（含其噪声）和 $M_2$ 流入输出端的电流经 $M_1$ 流出：

$$\frac{0 - v_{out}}{R_D} + I_{nD} + \left(-g_{m2}v_S + I_{n2}\right) = g_{m1}(v_{in} - v_S) + I_{n1}.$$

由式 (1)，等式右边等于 $v_S/R_S + I_{nS}$，因此

$$
\begin{aligned}
-\frac{v_{out}}{R_D} &= \frac{v_S}{R_S} + I_{nS} + g_{m2}v_S - I_{nD} - I_{n2}\\
v_{out} &= R_D\left[I_{nD} + I_{n2} - I_{nS} - \left(g_{m2} + \frac{1}{R_S}\right)v_S\right].
\end{aligned}
$$

为了代入式 (2)，定义

$$\rho \equiv \frac{g_{m2} + 1/R_S}{g_{m1} + 1/R_S} = \frac{1 + g_{m2}R_S}{1 + g_{m1}R_S},$$

于是 $\left(g_{m2} + 1/R_S\right)v_S = \rho\left(g_{m1}v_{in} + I_{n1} - I_{nS}\right)$，且

$$
\begin{aligned}
v_{out} &= R_D\left[I_{nD} + I_{n2} - I_{nS} - \rho g_{m1}v_{in} - \rho I_{n1} + \rho I_{nS}\right]\\
&= -\rho g_{m1}R_D\,v_{in} - \rho R_D\,I_{n1} + (\rho - 1)R_D\,I_{nS} + R_D\,(I_{n2} + I_{nD}).
\end{aligned}
$$

### 第 4 步 — 信号增益

$$A_v = \frac{v_{out}}{v_{in}} = -\rho\,g_{m1}R_D = -g_{m1}R_D\,\frac{1 + g_{m2}R_S}{1 + g_{m1}R_S}.$$

当 $g_{m2} = 0$ 时，这就是带源极负反馈的增益 $g_{m1}R_D/(1 + g_{m1}R_S)$；$M_2$ 使它乘以 $1 + g_{m2}R_S$；当 $g_{m2} = g_{m1}$ 时，负反馈的作用被完全抵消，$A_v = -g_{m1}R_D$。

### 第 5 步 — 把各噪声源折算到输入端

把每个系数除以 $|A_v| = \rho g_{m1}R_D$：

- **$M_1$：** $\dfrac{\rho R_D}{\rho g_{m1}R_D} = \dfrac{1}{g_{m1}}$，因此
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$
- **$R_S$：** 系数为 $(\rho - 1)R_D$，其中
$$\rho - 1 = \frac{(1 + g_{m2}R_S) - (1 + g_{m1}R_S)}{1 + g_{m1}R_S} = \frac{(g_{m2} - g_{m1})R_S}{1 + g_{m1}R_S},$$
因此
$$\frac{(\rho - 1)R_D}{\rho g_{m1}R_D} = \frac{(g_{m2} - g_{m1})R_S}{1 + g_{m1}R_S}\cdot\frac{1 + g_{m1}R_S}{g_{m1}(1 + g_{m2}R_S)} = \frac{(g_{m2} - g_{m1})R_S}{g_{m1}(1 + g_{m2}R_S)}.$$
平方后乘以 $4kT/R_S$：
$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{(g_{m1} - g_{m2})^2R_S^2}{g_{m1}^2(1 + g_{m2}R_S)^2}\cdot\frac{4kT}{R_S} = \frac{4kTR_S\,(g_{m1} - g_{m2})^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$
- **$M_2$ 和 $R_D$：** 两者都直接注入输出端，系数为 $R_D$。折算到输入端：$\dfrac{R_D}{\rho g_{m1}R_D} = \dfrac{1 + g_{m1}R_S}{g_{m1}(1 + g_{m2}R_S)}$，因此
$$\overline{V_{n,in}^2}\Big|_{M_2,R_D} = \left(4kT\gamma g_{m2} + \frac{4kT}{R_D}\right)\frac{(1 + g_{m1}R_S)^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$

### 第 6 步 — 总噪声与验证

把互不相关的各项贡献相加：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1} - g_{m2})^2}{g_{m1}^2(1 + g_{m2}R_S)^2} + \frac{4kT\left(\gamma g_{m2} + 1/R_D\right)(1 + g_{m1}R_S)^2}{g_{m1}^2(1 + g_{m2}R_S)^2}.$$

**验证（$g_{m2} = 0$）：** 中间项变为 $4kTR_Sg_{m1}^2/g_{m1}^2 = 4kTR_S$，最后一项变为 $4kT(1 + g_{m1}R_S)^2/(g_{m1}^2R_D)$，得到带源极负反馈的共源级结果

$$4kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1 + g_{m1}R_S)^2}{g_{m1}^2R_D}\right].$$

$R_S$ 的噪声会部分抵消，因为变化量 $\Delta v_S$ 使 $M_1$ 的电流改变 $-g_{m1}\Delta v_S$，使 $M_2$ 的电流改变 $-g_{m2}\Delta v_S$，而 $R_D$ 只看到两者之差；当 $g_{m2} = g_{m1}$ 时，$R_S$ 的噪声从输出端完全消失。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1}-g_{m2})^2}{g_{m1}^2(1+g_{m2}R_S)^2} + \frac{4kT(\gamma g_{m2} + 1/R_D)(1+g_{m1}R_S)^2}{g_{m1}^2(1+g_{m2}R_S)^2}$$

增益为 $A_v = -g_{m1}R_D\,\dfrac{1 + g_{m2}R_S}{1 + g_{m1}R_S}$；$M_2$ 提高了带源极负反馈时的增益。三项分别来自 $M_1$、$R_S$，以及 $M_2$ 与 $R_D$ 两者。

**常见错误。** 把 $M_2$ 的栅极误读为接输出端或接固定偏置。它接在 $M_1$ 的源极上，因此 $M_2$ 受 $v_S$ 控制，这使增益乘以 $1 + g_{m2}R_S$，并在 $R_S$ 项中产生 $(g_{m1} - g_{m2})$ 形式的抵消。

**常见错误。** 像普通的源极负反馈级那样，把 $R_S$ 项写成 $4kTR_S$。本题中源极电压噪声**同时**驱动 $M_1$ 和 $M_2$，它们的电流变化在输出端部分抵消。

**常见错误。** 忽略 $M_2$，用增益 $g_{m1}R_D/(1 + g_{m1}R_S)$ 来折算 $M_2$ 和 $R_D$ 的噪声。两者都直接向输出端注入噪声，必须除以包含因子 $1 + g_{m2}R_S$ 的实际增益。
