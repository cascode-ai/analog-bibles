# 详细步骤 - R340

**思路。** 两个晶体管都由输入驱动。由于 $\lambda = 0$，$M_2$ 是向输出端注入电流 $-g_{m2}v_{in} + I_{n2}$ 的电流源，进入输出端的所有电流都必须经 $M_1$ 和 $R_F$ 到达源极节点 S，再经 $R_S$ 流到地。由此确定源极电压；再在输出端列一个基尔霍夫电流定律（KCL）方程得到 $v_{out}$，然后把每个噪声项除以（增大了的）信号增益。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_2$**（源极接交流地，栅极接 $v_{in}$）：它向输出端送出电流 $g_{m2}v_{sg2} = g_{m2}(0 - v_{in}) = -g_{m2}v_{in}$，输出电阻（output resistance）为无穷大；其沟道噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$）也流入输出端。
- **$M_1$：** 从输出端流向 S 的电流源 $g_{m1}(v_{in} - v_S)$，其噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）与之并联。
- **$R_F$：** 接在输出端与 S 之间，其诺顿噪声 $I_{nF}$（$\overline{I_{nF}^2} = 4kT/R_F$）与之并联。
- **$R_S$：** 接在 S 与地之间，与其戴维南噪声电压 $V_{nS}$（$\overline{V_{nS}^2} = 4kTR_S$）串联。

定义 $M_2$ 注入的电流：

$$i_2 \equiv -g_{m2}v_{in} + I_{n2}.$$

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输出端与 S 点的 KCL

进入输出端的电流 $i_2$ 经 $M_1$ 和 $R_F$ 流出，两者都通向 S：

$$i_2 = g_{m1}(v_{in} - v_S) + I_{n1} + \frac{v_{out} - v_S}{R_F} + I_{nF}. \tag{1}$$

因此 $i_2$ 到达 S 后只能经 $R_S$ 流出；从 S 经 $V_{nS}$ 和 $R_S$ 应用基尔霍夫电压定律（KVL）：

$$v_S = V_{nS} + R_S\,i_2 = V_{nS} + R_S(I_{n2} - g_{m2}v_{in}). \tag{2}$$

### 第 3 步 — 输出电压

由式 (1) 解出 $v_{out}$：

$$
\begin{aligned}
v_{out} &= v_S + R_F\left[i_2 - I_{n1} - I_{nF} - g_{m1}(v_{in} - v_S)\right]\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)\,v_S + R_F\,i_2 - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

代入式 (2)：

$$
\begin{aligned}
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + (1 + g_{m1}R_F)R_S\,i_2 + R_F\,i_2 - R_F(I_{n1} + I_{nF})\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + K_2\,i_2 - R_F(I_{n1} + I_{nF}),
\end{aligned}
$$

其中

$$K_2 \equiv (1 + g_{m1}R_F)R_S + R_F = R_S + R_F + g_{m1}R_FR_S$$

是从注入输出端的电流到 $v_{out}$ 的跨阻（transresistance）。代入 $i_2 = -g_{m2}v_{in} + I_{n2}$：

$$v_{out} = -\left(g_{m1}R_F + g_{m2}K_2\right)v_{in} + (1 + g_{m1}R_F)V_{nS} + K_2I_{n2} - R_F(I_{n1} + I_{nF}).$$

### 第 4 步 — 信号增益

$$A_v = \frac{v_{out}}{v_{in}} = -\left(g_{m1}R_F + g_{m2}K_2\right) = -\left[g_{m1}R_F + g_{m2}(R_S + R_F + g_{m1}R_FR_S)\right].$$

$M_1$ 的信号电流经 $R_F$ 环流（给出 $g_{m1}R_F$）；而 $M_2$ 的信号电流流过 $M_1$/$R_F$ 组合和 $R_S$，看到的是 $K_2$，与其噪声看到的跨阻相同，因为两者都注入输出端。

### 第 5 步 — 把噪声折算到输入端

| 噪声源 | 在 $v_{out}$ 中的系数 | 噪声源的功率谱密度 |
|---|---|---|
| $I_{n1}$ | $-R_F$ | $4kT\gamma g_{m1}$ |
| $I_{nF}$ | $-R_F$ | $4kT/R_F$ |
| $V_{nS}$ | $1 + g_{m1}R_F$ | $4kTR_S$ |
| $I_{n2}$ | $K_2$ | $4kT\gamma g_{m2}$ |

各噪声源互不相关，因此输出功率谱密度等于各项（系数）² ×（噪声源的功率谱密度）之和：

$$
\begin{aligned}
\overline{V_{n,out}^2} &= R_F^2\cdot4kT\gamma g_{m1} + R_F^2\cdot\frac{4kT}{R_F} + (1 + g_{m1}R_F)^2\cdot4kTR_S + K_2^2\cdot4kT\gamma g_{m2}\\
&= 4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1 + g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right].
\end{aligned}
$$

除以 $A_v^2 = (g_{m1}R_F + g_{m2}K_2)^2$：

$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1 + g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right]}{\left(g_{m1}R_F + g_{m2}K_2\right)^2}, \qquad K_2 = R_S + R_F + g_{m1}R_FR_S .$$

### 第 6 步 — 验证

- **$g_{m2} \to 0$**（$M_2$ 变为无噪声的理想电流源）：
$$\overline{V_{n,in}^2} \to \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1 + g_{m1}R_F)^2\right]}{(g_{m1}R_F)^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_F} + R_S\frac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2}\right],$$
即同一电路上方接理想电流源时的结果。
- **$R_S = 0$：** $K_2 = R_F$，增益为 $(g_{m1} + g_{m2})R_F$，因此
$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma(g_{m1} + g_{m2})R_F^2 + R_F\right]}{(g_{m1} + g_{m2})^2R_F^2} = \frac{4kT\gamma}{g_{m1} + g_{m2}} + \frac{4kT}{(g_{m1} + g_{m2})^2R_F},$$
这正是总跨导（transconductance）为 $g_{m1} + g_{m2}$、以接地的 $R_F$ 为负载的 CMOS 反相器（inverter）的结果，与预期一致。
- **量纲：** $g_{m1}R_F^2$、$R_F$、$R_S(1+g_{m1}R_F)^2$ 和 $g_{m2}K_2^2$ 的单位都是欧姆，分母无量纲，因此结果的单位为 V²/Hz。

### 结果

令 $K_2 \equiv R_S + R_F + g_{m1}R_FR_S$，则

$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1+g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right]}{\left(g_{m1}R_F + g_{m2}K_2\right)^2}$$

增益为 $A_v = -(g_{m1}R_F + g_{m2}K_2)$，因为 $M_2$ 也放大输入信号。分子中的四项依次来自 $M_1$、$R_F$、$R_S$ 和 $M_2$。

**常见错误。** 把增益取为 $g_{m1}R_F$，仿佛 $M_2$ 是固定偏置的电流源。$M_2$ 的栅极由 $v_{in}$ 驱动，因此它在输出端注入信号电流 $-g_{m2}v_{in}$，使增益增加 $g_{m2}K_2$；忽略这一点会高估输入参考噪声。

**常见错误。** 把 $R_F$ 误读为接在输出端与地之间的电阻。它接在输出端与 $M_1$ 的源极之间，因此当 $R_S \ne 0$ 时，注入的电流会产生源极电压，并被 $M_1$ 放大，这正是 $K_2$ 中 $g_{m1}R_FR_S$ 项的来源。

**常见错误。** 用与信号不同的跨阻（例如只用 $R_F$）来折算 $M_2$ 的噪声。两者都是注入输出端的电流，因此都要乘以 $K_2$。
