# 详细步骤 - R110

**思路。** 把 $M_1$ 替换为 $g_{m1}v_{gs}$ 与 $r_{O1}$ 的并联，把 $V_{DD}$ 视为交流地，然后列出输出节点的 KCL。由于 $V_{in}$ 是接在栅极上的**理想**电压源，无论 $R_F$ 如何作用，都有 $v_{gs} = v_{in}$：$R_F$ 只是一条前馈通路和一个附加负载，而不是改变 $v_{gs}$ 的反馈。

### 第 1 步 — 小信号模型（small-signal model）

$R_D$ 接在 $out$ 与交流地之间，$R_F$ 接在 $in$（电位固定为 $v_{in}$）与 $out$ 之间，$M_1$ 则是从 $out$ 流向地的 $g_{m1}v_{in}$，并与 $r_{O1}$ 并联（$\lambda \ne 0$；$\gamma = 0$，而且源极本来就接地）。唯一的未知量是 $v_{out}$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输出节点的 KCL

对从 $out$ 流出的各电流（经 $R_F$、$R_D$、$r_{O1}$ 以及 $M_1$ 的受控源）求和：

$$\frac{v_{out} - v_{in}}{R_F} + \frac{v_{out}}{R_D} + \frac{v_{out}}{r_{O1}} + g_{m1}v_{in} = 0 .$$

### 第 3 步 — 求解增益

$$v_{out}\left(\frac{1}{R_F} + \frac{1}{R_D} + \frac{1}{r_{O1}}\right) = v_{in}\left(\frac{1}{R_F} - g_{m1}\right),$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{\dfrac{1}{R_F} - g_{m1}}{\dfrac{1}{R_F} + \dfrac{1}{R_D} + \dfrac{1}{r_{O1}}} .$$

分母是总输出电导（output conductance）$1/(R_D\|R_F\|r_{O1})$，因此

$$A_v = -\left(g_{m1} - \frac{1}{R_F}\right)\left(R_D\|R_F\|r_{O1}\right).$$

**展开形式。** 分子和分母同乘 $R_DR_Fr_{O1}$：

$$
\begin{aligned}
A_v &= \frac{\left(\dfrac{1}{R_F} - g_{m1}\right)R_DR_Fr_{O1}}{R_Dr_{O1} + R_Fr_{O1} + R_DR_F}\\
&= \frac{(1 - g_{m1}R_F)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}}\\
&= -\frac{(g_{m1}R_F - 1)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}} .
\end{aligned}
$$

### 第 4 步 — 用叠加原理（superposition）交叉验证

**(a) 只考虑晶体管电流**（在电阻支路中把输入节点接地）：这时 $R_F$ 接在 $out$ 与地之间，且

$$v_{out,a} = -g_{m1}v_{in}\,(R_D\|R_F\|r_{O1}) .$$

**(b) 只考虑电阻支路**（晶体管电流为零）：$R_F$ 与 $R_D\|r_{O1}$ 构成分压器，

$$v_{out,b} = v_{in}\,\frac{R_D\|r_{O1}}{R_F + R_D\|r_{O1}} = v_{in}\,\frac{R_D\|R_F\|r_{O1}}{R_F} ,$$

这里利用了 $R_p/(R_F + R_p) = (R_F\|R_p)/R_F$，其中 $R_p = R_D\|r_{O1}$。二者之和

$$v_{out} = v_{out,a} + v_{out,b} = -\left(g_{m1} - \frac{1}{R_F}\right)(R_D\|R_F\|r_{O1})\,v_{in},$$

与第 3 步的结果一致。

### 第 5 步 — 解释与验证

- **两条通路。** 晶体管吸收反相电流 $g_{m1}v_{in}$，而 $R_F$ 注入同相电流 $v_{in}/R_F$（在 $v_{out} = 0$ 时）；净跨导（transconductance）$g_{m1} - 1/R_F$ 在 $R_D\|R_F\|r_{O1}$ 上产生电压。由于理想输入源相当于交流地，$R_F$ 还构成输出端的负载。
- **对 $v_{gs}$ 没有反馈。** 理想源把栅极钉在 $v_{in}$，因此不存在密勒型的 $v_{gs}$ 减小（像 $-R_F/R_S$ 这样的增益需要信号源内阻 $R_S$，而这里没有）。
- **$R_F \to \infty$：** $A_v \to -g_{m1}(R_D\|r_{O1})$，即普通共源（common-source，CS）级的增益。✓
- **$g_{m1}R_F \gg 1$：** $A_v \approx -g_{m1}(R_D\|R_F\|r_{O1})$；前馈项可以忽略，但 $R_F$ 的负载效应仍然存在。
- **符号：** 只要 $g_{m1} > 1/R_F$，增益就是反相的；当 $g_{m1} = 1/R_F$ 时，两条通路相互抵消，$A_v = 0$。

**数值验证**（示例取值）：$g_{m1} = 2$ mS，$r_{O1} = 20\ \mathrm{k}\Omega$，$R_D = 5\ \mathrm{k}\Omega$，$R_F = 10\ \mathrm{k}\Omega$。

$$
\begin{aligned}
R_D\|R_F\|r_{O1} &= \frac{1}{(0.2 + 0.1 + 0.05)\ \mathrm{mS}} = \frac{1}{0.35\ \mathrm{mS}} = 2.857\ \mathrm{k}\Omega,\\
A_v &= -(2 - 0.1)\ \mathrm{mS}\times2.857\ \mathrm{k}\Omega = -5.43 .
\end{aligned}
$$

展开形式给出相同的结果：$-(20 - 1)(5\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega)/[(50 + 100 + 200)\times10^6\ \Omega^2] = -19\times10^8/(3.5\times10^8) = -5.43$。

### 结果

$$A_v = -\left(g_{m1} - \frac{1}{R_F}\right)\left(R_D\|R_F\|r_{O1}\right) = -\frac{(g_{m1}R_F - 1)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}} .$$

**常见错误。** 忽略 $R_F$，写成 $-g_{m1}(R_D\|r_{O1})$。$R_F$ 既构成输出端的负载，又把输入前馈到输出，因此它出现两次：一次在 $R_D\|R_F\|r_{O1}$ 中，一次在 $-1/R_F$ 项中。

**常见错误。** 把 $R_F$ 当作减小 $v_{gs}$ 的负反馈，并给出 $-R_F/R_S$ 之类的闭环增益（closed-loop gain）。在理想输入源下，栅极被钉在 $v_{in}$。

**常见错误。** 把 $-g_{m1}(R_D\|R_F\|r_{O1})$ 当作精确结果。它只在 $g_{m1}R_F \gg 1$ 时成立；精确的分子是 $g_{m1} - 1/R_F$。
