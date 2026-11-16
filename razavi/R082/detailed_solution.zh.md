# 详细步骤 - R082

**思路。** 施加条件 $V_{DS1} = V_{GS1} - V_{TH} - 50$ mV，令 $M_1$ 的**线性区**电流等于二极管连接（diode-connected）负载 $M_2$ 的**饱和区**电流，解所得的二次方程求出 $V_{in}$。然后用 $M_1$ 的线性区参数建立小信号模型（small-signal model）：$g_{m1} = \beta_1V_{DS1}$，以及不再为零的沟道电导 $g_{ds1}$。

### 第 1 步 — 器件参数与“进入线性区 50 mV”的条件

$M_2$ 为二极管连接，其源极接输出端，因此 $V_{GS2} = V_{DS2} = V_{DD} - V_{out}$，且两个器件流过相同的电流。由于 $\lambda = \gamma = 0$，二者都有 $V_{TH} = 0.7$ V，并且

$$
\begin{aligned}
\beta_1 &= (134\ \mu\mathrm{A/V^2})(50/0.5) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\beta_2 &= (134\ \mu\mathrm{A/V^2})(10/0.5) = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.
\end{aligned}
$$

由于 $V_{DS2} = V_{GS2}$，$M_2$ 只要导通就处于饱和区：

$$I_{D2} = \frac12\beta_2(V_{DD} - V_{out} - V_{TH})^2 = \frac12\beta_2(2.3\ \mathrm{V} - V_{out})^2 .$$

令 $V_{ov1} = V_{GS1} - V_{TH} = V_{in} - 0.7$ V，则线性区边缘为 $V_{DS1} = V_{ov1}$，而题目要求比它小 50 mV：

$$V_{DS1} = V_{ov1} - 0.05\ \mathrm{V} \quad\Longrightarrow\quad V_{out} = V_{in} - 0.75\ \mathrm{V},$$

线性区电流为

$$I_{D1} = \beta_1\left[V_{ov1}V_{DS1} - \frac12V_{DS1}^2\right].$$

### 第 2 步 — 列出电流方程

令 $I_{D1} = I_{D2}$，并记 $x = V_{ov1}$，于是 $V_{DS1} = V_{out} = x - 0.05$（所有电压均以伏特为单位）。线性区电流表达式中的方括号可分解为

$$
\begin{aligned}
x(x - 0.05) - \frac12(x - 0.05)^2 &= (x - 0.05)\left[x - \frac12(x - 0.05)\right]\\
&= (x - 0.05)\cdot\frac{x + 0.05}{2}\\
&= \frac{x^2 - 0.0025}{2},
\end{aligned}
$$

而负载管的过驱动电压为 $2.3 - V_{out} = 2.3 - (x - 0.05) = 2.35 - x$。因此

$$13.4\ \mathrm{mA/V^2}\cdot\frac{x^2 - 0.0025}{2} = \frac12(2.68\ \mathrm{mA/V^2})(2.35 - x)^2 .$$

两边同乘 $2/(2.68\ \mathrm{mA/V^2})$，并利用 $13.4/2.68 = 5$：

$$5\,(x^2 - 0.0025) = (2.35 - x)^2 .$$

### 第 3 步 — 解二次方程

$$5x^2 - 0.0125 = 5.5225 - 4.7x + x^2 \quad\Longrightarrow\quad 4x^2 + 4.7x - 5.535 = 0 ,$$

$$
\begin{aligned}
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-4.7 \pm \sqrt{4.7^2 + 4(4)(5.535)}}{8}\\
&= \frac{-4.7 \pm \sqrt{22.09 + 88.56}}{8} = \frac{-4.7 \pm \sqrt{110.65}}{8} = \frac{-4.7 \pm 10.519}{8}.
\end{aligned}
$$

取“−”号的根对应负的过驱动电压，因此

$$x = V_{ov1} = \frac{5.819}{8} = 0.727\ \mathrm{V},$$

$$
\begin{aligned}
V_{in} &= V_{TH} + V_{ov1} = 0.7 + 0.727 = 1.427\ \mathrm{V},\\
V_{out} &= V_{DS1} = 0.727 - 0.05 = 0.677\ \mathrm{V}.
\end{aligned}
$$

**验证电流：**

$$
\begin{aligned}
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(2.3 - 0.677)^2\ \mathrm{V^2} = 1.34\times(1.623)^2\ \mathrm{mA} = 1.34\times2.633\ \mathrm{mA} = 3.53\ \mathrm{mA},\\
I_{D1} &= (13.4\ \mathrm{mA/V^2})\cdot\frac{0.727^2 - 0.0025}{2}\ \mathrm{V^2} = 6.7\times0.5266\ \mathrm{mA} = 3.53\ \mathrm{mA}.
\end{aligned}
$$

**为什么 $V_{in}$ 相对边缘值 1.411 V 只变化了约 17 mV**：条件针对的是 $V_{in} - V_{out}$，而 $V_{in}$ 每升高一点，$V_{out}$ 就下降约 $|A_v| \approx 2$ 倍于此的量，因此 $V_{in} - V_{out}$ 约增大 $3\,\Delta V_{in}$。所以 $\Delta V_{in} \approx 50\ \mathrm{mV}/3 \approx 17$ mV，与 $1.427 - 1.411 = 0.016$ V 相符。

### 第 4 步 — 小信号参数

**处于线性区的 $M_1$。** 对 $I_{D1} = \beta_1[(V_{GS1} - V_{TH})V_{DS1} - \frac12V_{DS1}^2]$ 求导：

$$
\begin{aligned}
g_{m1} &= \frac{\partial I_{D1}}{\partial V_{GS1}} = \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.677\ \mathrm{V}) = 9.08\ \mathrm{mS},\\
g_{ds1} &= \frac{\partial I_{D1}}{\partial V_{DS1}} = \beta_1(V_{GS1} - V_{TH} - V_{DS1}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}.
\end{aligned}
$$

因此，即使 $\lambda = 0$，$M_1$ 也具有有限的沟道电阻 $r_{ds1} = 1/g_{ds1} = 1/(0.67\ \mathrm{mS}) = 1.49\ \mathrm{k}\Omega$（在线性区边缘处 $g_{ds1}$ 为零）。

**处于饱和区的 $M_2$：**

$$g_{m2} = \beta_2(V_{GS2} - V_{TH}) = (2.68\ \mathrm{mA/V^2})(2.3 - 0.677)\ \mathrm{V} = (2.68\ \mathrm{mA/V^2})(1.623\ \mathrm{V}) = 4.35\ \mathrm{mS}.$$

### 第 5 步 — 小信号模型与增益

$V_{DD}$ 为交流地，模型中只有一个节点 $out$：

- **$M_1$：** 一个从 $out$ 流向地的电流源（current source）$g_{m1}v_{in}$，与 $r_{ds1}$ 并联。
- **$M_2$：** 栅极和漏极接交流地，源极接 $out$，因此 $v_{gs2} = -v_{out}$；它向 $out$ 注入电流 $g_{m2}v_{gs2} = -g_{m2}v_{out}$（相当于一个接地的电阻 $1/g_{m2}$）。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in} + g_{ds1}v_{out}\\
-(g_{m2} + g_{ds1})\,v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{ds1}} .
\end{aligned}
$$

**数值计算：**

$$A_v = -\frac{9.08\ \mathrm{mS}}{4.35\ \mathrm{mS} + 0.67\ \mathrm{mS}} = -\frac{9.08}{5.02} = -1.81 .$$

**与线性区边缘处的比较**（$A_v = -\sqrt5 = -2.24$，$g_{m1} = 9.52$ mS，$g_{m2} = 4.26$ mS）：

- $g_{m1}$ 降到了 9.08 mS，因为它与 $V_{DS1}$ 成正比，而后者减小了；$g_{m2}$ 则因 $V_{out}$ 下降而略微升高到 4.35 mS。仅这些变化就给出 $-9.08/4.35 = -2.09$。
- 沟道电导 $g_{ds1} = 0.67$ mS 现在与 $1/g_{m2}$ 并联，构成输出端的负载，使增益降到 $-1.81$。

仅仅进入线性区 50 mV，增益就已经下降了约 19 %。

### 结果

$$V_{in} \approx 1.427\ \mathrm{V} \qquad (V_{out} \approx 0.677\ \mathrm{V},\ I_D \approx 3.53\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{ds1}} = -\frac{9.08\ \mathrm{mS}}{4.35\ \mathrm{mS} + 0.67\ \mathrm{mS}} \approx -1.81 ,$$

其中 $g_{m1} = \beta_1V_{DS1}$ 和 $g_{ds1} = \beta_1(V_{GS1} - V_{TH} - V_{DS1})$ 是处于线性区的 $M_1$ 的参数。

**常见错误。** 仍沿用饱和区的增益 $-\sqrt5 = -2.24$，或者使用了线性区的 $g_{m1}$ 却漏掉 $g_{ds1}$（这会得到 $-2.09$）。在线性区，即使 $\lambda = 0$，沟道也是一个阻值为 $1/[\beta_1(V_{ov1} - V_{DS1})] = 1.49\ \mathrm{k}\Omega$ 的电阻，与负载并联。

**常见错误。** 直接在边缘处的输入电压上加 50 mV（$1.411 + 0.05 = 1.461$ V）。条件针对的是 $V_{in} - V_{out}$，而 $V_{out}$ 以约 2 的增益与 $V_{in}$ 反向变化，因此输入只需升高约 17 mV。

**常见错误。** 认为 $M_2$ 也进入线性区。二极管连接的晶体管满足 $V_{DS} = V_{GS}$，只要导通就保持饱和。
