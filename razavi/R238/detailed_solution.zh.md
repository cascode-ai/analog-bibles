# 详细步骤 - R238

**思路。** 当 $M_3$ 的漏极处于 $V_X$ 时，输出支路是基准支路的精确复制，因此即使存在沟道长度调制（channel-length modulation），也有 $I_{out} = I_{REF}$。把该漏极电压提高 1 V，电流变化 $\Delta V/R_{out}$，其中 $R_{out}$ 是共源共栅结构 $M_3$–$M_2$ 的输出电阻（output resistance）。推导 $R_{out}$（计入 $M_3$ 的体效应），求出其数值，并与简单电流镜比较。

### 第 1 步 — 标称电流

$M_3$（60/0.5，栅极接 $V_b$）叠在 $M_2$（20/0.5，栅极接 X）之上，以相同的尺寸和栅极电压镜像 $M_0$ 叠在 $M_1$ 之上的结构。若 $M_3$ 的漏极处于 $V_X$（即 $M_0$ 的漏极电压），两条支路满足完全相同的方程，因此 $V_B = V_A$，且

$$I_{out,nom} = I_{REF} = 100\ \mu\mathrm{A},$$

不存在沟道长度调制误差，因为每个器件的 $V_{DS}$ 都与其对应器件相同。

### 第 2 步 — 共源共栅结构的输出电阻

$V_X$ 和 $V_b$ 不随输出变化，因此两个栅极都是交流地。$M_2$（$v_{gs2} = 0$）只是从 B 接到地的 $r_{O2}$；$M_3$ 的 $v_{gs3} = -v_B$，且由于衬底接地，$v_{bs3} = -v_B$。在 $M_3$ 的漏极 D 加测试电压 $v_t$，驱动电流 $i_t$ 流入漏极。

<!-- diagram: diagram-01.cir -->

$i_t$ 全部流过 $r_{O2}$，因此 $v_B = i_tr_{O2}$，而流过 $M_3$ 的电流为

$$i_t = g_{m3}(-v_B) + g_{mb3}(-v_B) + \frac{v_t - v_B}{r_{O3}} = -(g_{m3} + g_{mb3})r_{O2}i_t + \frac{v_t - i_tr_{O2}}{r_{O3}} .$$

两边乘以 $r_{O3}$，并合并 $i_t$ 项：

$$
\begin{aligned}
i_tr_{O3} &= -(g_{m3} + g_{mb3})r_{O3}r_{O2}i_t + v_t - i_tr_{O2},\\
v_t &= i_t\left[r_{O3} + r_{O2} + (g_{m3} + g_{mb3})r_{O3}r_{O2}\right] ,
\end{aligned}
$$

$$R_{out} = \frac{v_t}{i_t} = \left[1 + (g_{m3} + g_{mb3})r_{O3}\right]r_{O2} + r_{O3} .$$

$M_3$ 使 B 点几乎固定：$v_B$ 的任何升高都会减小 $v_{gs3}$，从而截断多余的电流，使 $r_{O2}$ 被放大约 $(g_{m3} + g_{mb3})r_{O3}$ 倍。

### 第 3 步 — 小信号参数

由 $W/L = 120$，$I_D = 100\ \mu$A，

$$g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(120)(100\ \mu\mathrm{A})} = \sqrt{3.216\times10^{-6}}\ \mathrm{A/V} = 1.79\ \mathrm{mS} ,$$

$$r_{O2} = r_{O3} = \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega, \qquad g_{m3}r_{O3} = 179 .$$

$g_{mb3} = \eta g_{m3}$，其中 $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB3}})$，$M_3$ 的源极位于 $V_B = V_A$，视 $V_b$ 的取值约为 0.19 V 到 0.78 V。对于低电压设计，$V_b$ 接近其范围的下端，$V_B \approx 0.2$ V：

$$\eta = \frac{0.45}{2\sqrt{0.9 + 0.2}} = \frac{0.45}{2(1.049)} = 0.215, \qquad g_{mb3} = 0.215\times1.79\ \mathrm{mS} = 0.385\ \mathrm{mS}$$

（在 $V_B = 0.78$ V 时，$\eta = 0.174$，结果只改变百分之几）。

### 第 4 步 — 输出电阻的数值

不计体效应：

$$R_{out} = (1 + 179.3)(100\ \mathrm{k}\Omega) + 100\ \mathrm{k}\Omega = 18.03\ \mathrm{M}\Omega + 0.1\ \mathrm{M}\Omega = 18.1\ \mathrm{M}\Omega .$$

计入体效应：

$$(g_{m3} + g_{mb3})r_{O3} = (1.79 + 0.385)\ \mathrm{mS}\times100\ \mathrm{k}\Omega = 217.8, \qquad R_{out} = (1 + 217.8)(100\ \mathrm{k}\Omega) + 100\ \mathrm{k}\Omega = 22.0\ \mathrm{M}\Omega .$$

体效应在这里**有利**：衬底固定时，B 点升高还会通过背栅（back gate）减小电流。

### 第 5 步 — $I_{out}$ 的偏差

$$\Delta I_{out} \approx \frac{\Delta V}{R_{out}} = \frac{1\ \mathrm{V}}{22.0\ \mathrm{M}\Omega} = 45\ \mathrm{nA} \quad\left(\text{or } \frac{1\ \mathrm{V}}{18.1\ \mathrm{M}\Omega} = 55\ \mathrm{nA} \text{ without } g_{mb}\right) ,$$

$$\frac{\Delta I_{out}}{I_{out}} \approx \frac{45\ \mathrm{nA}}{100\ \mu\mathrm{A}} = 0.045\ \% \quad(0.055\ \%\ \text{without } g_{mb}) ,$$

这是**增加**（漏极电压更高，电流更大）。节点 B 只移动 $\Delta V_B = \Delta I_{out}\,r_{O2} = 45\ \mathrm{nA}\times100\ \mathrm{k}\Omega = 4.5$ mV，约为 1 V 阶跃的 $1/218$。

**大信号验证。** 计入 $(1 + \lambda V_{DS})$ 和体效应，对完整的平方律方程求解，无论 $V_b$ 取允许范围内的哪个值，都得到 $\Delta I_{out} \approx 38$–40 nA；结果略小，是因为在该模型中 $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ 和 $g_m$ 都稍大；数量级相同。

**简单电流镜。** 若没有共源共栅管，加在 $M_2$ 上的 1 V 会使其电流变化约 $\lambda\Delta V\cdot I_D = (0.1)(1)(100\ \mu\mathrm{A}) = 10\ \mu$A（10 %）：共源共栅结构把这一变化减小了约 200 倍。

### 结果

标称值：$I_{out} = I_{REF} = 100\ \mu$A（当 $M_3$ 的漏极处于 $V_X$ 时精确成立）。漏极电压高出 1 V 时：

$$\Delta I_{out} \approx \frac{1\ \mathrm{V}}{R_{out}}, \qquad R_{out} = \left[1 + (g_{m3} + g_{mb3})r_{O3}\right]r_{O2} + r_{O3} \approx 18\text{–}22\ \mathrm{M}\Omega,$$

其中 $g_{m3} = 1.79$ mS，$g_{mb3} \approx 0.39$ mS，$r_{O2} = r_{O3} = 100\ \mathrm{k}\Omega$。因此 $I_{out}$ 增加**约 0.045–0.055 μA（≈ 0.05 %）**；精确的大信号求解给出约 0.04 μA。

**常见错误。** 把输出当作简单电流镜处理，得到 $\Delta I = \lambda\Delta V\cdot I_D = 10\ \mu$A（10 %）。1 V 的变化落在 $M_3$ 上；$M_2$ 只看到几毫伏。

**常见错误。** 以“共源共栅管使节点 B 固定不变”为由，断言偏差严格为零。屏蔽作用（$\approx g_mr_O \approx 200$）虽强，但是有限的。

**常见错误。** 把标称电流按 $(W/L)_3/(W/L)_2 = 3$ 放大（300 μA）。电流由与 $M_1$ 匹配的 $M_2$ 决定；$M_3$ 只起屏蔽作用。
