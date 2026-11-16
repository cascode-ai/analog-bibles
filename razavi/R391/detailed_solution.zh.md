# 详细步骤 - R391

**思路。** 五管运算跨导放大器（OTA）的低频开环增益为 $A_0 = g_{m1}(r_{O2}\parallel r_{O4})$。分压器 $C_1$/$C_2$ 把输出的一部分 $\beta$ 反馈到 $M_2$ 的栅极，构成标称增益为 $1/\beta$ 的同相放大器，其增益误差 $\approx 1/(\beta A_0)$。由器件参数算出 $A_0$，5 % 的限制随即决定了 $1/\beta$ 的上限。

### 第 1 步 — 偏置与小信号参数

把 $M_2$ 的栅极记为节点 X。$M_1$ 栅极电压升高会使 $I_{D1}$ 增大（并镜像到 $M_4$），同时使 $I_{D2}$ 减小，两者都把电流推入输出端，因此 $M_1$ 的栅极是同相输入端，把输出反馈到 X 构成的是**负反馈**。

平衡时尾电流（tail current）平均分配：

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

由 $(W/L)_{1,2} = 50/0.5 = 100$ 得：

$$g_{m1} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O2}\parallel r_{O4} &= \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

$(W/L)_{3,4}$ 不影响低频增益。

### 第 2 步 — 开环增益

采用电流镜（current mirror）负载时，输出电流为 $g_{m1}(V_{in} - V_X)$，流入 $r_{O2}\parallel r_{O4}$：

$$A_0 = g_{m1}\,(r_{O2}\parallel r_{O4}) = (3.66\times10^{-3}\ \mathrm{S})(6.67\times10^{3}\ \Omega) = 24.4 .$$

### 第 3 步 — 闭环增益与增益误差

OTA 相当于向输出端注入电流 $g_{m1}(V_{in} - V_X)$ 的电流源（current source），与 $r_{O2}\parallel r_{O4}$ 并联；$C_1$ 接在输出端与 X 之间，$C_2$ 接在 X 与地之间。

<!-- diagram: diagram-01.cir -->

$M_2$ 的栅极不吸取电流，且低频时电容不对输出构成负载，因此

$$V_X = \frac{C_1}{C_1 + C_2}V_{out} = \beta V_{out}, \qquad \beta = \frac{C_1}{C_1 + C_2}, \qquad \frac1\beta = 1 + \frac{C_2}{C_1}.$$

由 $V_{out} = A_0(V_{in} - \beta V_{out})$ 得：

$$
\begin{aligned}
V_{out}(1 + \beta A_0) &= A_0V_{in}\\
\frac{V_{out}}{V_{in}} &= \frac{A_0}{1 + \beta A_0} = \frac1\beta\cdot\frac{1}{1 + \dfrac{1}{\beta A_0}} \approx \frac1\beta\left(1 - \frac{1}{\beta A_0}\right).
\end{aligned}
$$

理想增益为 $1/\beta = 1 + C_2/C_1$，一阶近似下的相对误差为 $\varepsilon \approx 1/(\beta A_0)$：所需增益 $1/\beta$ 越大，环路增益（loop gain）越小，误差越大。

### 第 4 步 — 误差低于 5 % 时的最大增益

$$
\begin{aligned}
\frac{1}{\beta A_0} &\le 0.05\\
\frac1\beta &\le 0.05\,A_0 = 0.05\times24.4 = 1.22 .
\end{aligned}
$$

在此极限下 $\beta A_0 = 24.4/1.22 = 20$，实际闭环增益为

$$\frac{A_0}{1 + \beta A_0} = \frac{24.4}{1 + 20} = 1.16 .$$

因此最大闭环增益**约为 1.2**（标称值 $1 + C_2/C_1 = 1.22$，即 $C_2/C_1 = 0.22$；实际值为 1.16）。

**严格的误差定义。** 若要求实际增益至少为 $1/\beta$ 的 95 %，则 $\beta A_0/(1 + \beta A_0) \ge 0.95$，即 $\beta A_0 \ge 19$，因此 $1/\beta \le 24.4/19 = 1.28$，实际增益为 $0.95\times1.28 = 1.22$。

开环增益只有约 24 时，精度为 5 % 的闭环放大器只能提供略高于单位增益的增益；实际的运算放大器（op amp）需要高得多的开环增益，例如采用共源共栅（cascode）结构或两级结构。

### 结果

$A_0 = g_{m1}(r_{O2}\parallel r_{O4}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4$。由增益误差 $\approx 1/(\beta A_0) \le 5\%$ 和 $\beta = C_1/(C_1 + C_2)$ 得：

$$\frac1\beta = 1 + \frac{C_2}{C_1} \le 0.05A_0 \approx 1.22,$$

因此**最大闭环增益 ≈ 1.2**（标称值 1.22，实际值 $24.4/21 \approx 1.16$）。按严格的误差定义（$\beta A_0 \ge 19$）：标称值 1.28，实际值 ≈ 1.22。

**常见错误。** 把增益误差取为 $1/A_0$，从而允许闭环增益高达约 $0.95A_0$。误差应为 $1/(\beta A_0)$：闭环增益 $1/\beta$ 本身就用掉了开环增益中的 $1/\beta$ 倍。

**常见错误。** 用全部尾电流（1 mA）计算单个晶体管的 $g_{m1}$，得到 5.18 mS 和 $A_0 \approx 34.5$。实际上每个器件的电流为 $I_{SS}/2 = 0.5$ mA。

**常见错误。** 使用 $A_0 = g_{m1}r_{O2}$ 而忽略 $r_{O4}$，或者把 NMOS 和 PMOS 的 $\lambda$ 值弄反（$M_2$ 应取 $\lambda_n = 0.1\ \mathrm{V^{-1}}$，$M_4$ 应取 $\lambda_p = 0.2\ \mathrm{V^{-1}}$）。
