# 详细步骤 - R590

**思路。** 这里所谓的运算放大器（op amp）只是一个带电流源负载的差分对，因此其开环增益不高。先算出这个增益，再在差分半边电路的栅极（求和）节点应用电荷守恒，求出闭环增益，并与标称值 $C_1/C_3$ 比较。

### 第 1 步 — 半边电路

对于差分信号，尾节点 P 是交流地，因此每一侧都是一个共源级（common-source stage）。把 $M_1$ 的栅极记为 X：$C_1$ 把它连到被切换的输入极板，$C_3$ 把它连到输出；在输出端，$M_1$ 向地吸取电流 $g_{m1}v_X$，与之并联的还有 $r_{O1}$ 和负载管的 $r_{O3}$（忽略晶体管电容）。

<!-- diagram: diagram-01.cir -->

从 X 到输出的开环增益为

$$A_v = \frac{v_{out}}{-v_X} = g_{m1}\,(r_{O1}\parallel r_{O3}).$$

### 第 2 步 — 小信号参数

每条支路的电流为 $I_D = I_{SS}/2 = 0.5$ mA（而不是全部尾电流），且 $W/L = 50/0.5 = 100$：

$$g_{m1} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 10\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{(20)(10)}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\\
A_v &= g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\times10^{-3}\ \mathrm{S})(6.67\times10^{3}\ \Omega) = 24.4 .
\end{aligned}
$$

### 第 3 步 — 由 X 点的电荷守恒求闭环增益

放大期间，$C_1$ 的左极板从输入切换到 $V_{CM}$，即一个阶跃 $\Delta V_{in}$（带符号的差分输入的一半）。X 只与电容和一个 MOS 栅极相连，因此其电荷守恒：

$$C_1\,(\Delta V_X - \Delta V_{in}) + C_3\,(\Delta V_X - \Delta V_{out}) = 0.$$

建立完成后电容中没有电流，因此可以使用完整的低频增益，即 $\Delta V_X = -\Delta V_{out}/A_v$：

$$
\begin{aligned}
(C_1 + C_3)\,\Delta V_X - C_3\,\Delta V_{out} &= C_1\,\Delta V_{in}\\
-(C_1 + C_3)\frac{\Delta V_{out}}{A_v} - C_3\,\Delta V_{out} &= C_1\,\Delta V_{in}\\
\frac{\Delta V_{out}}{\Delta V_{in}} &= -\frac{C_1}{C_3 + (C_1 + C_3)/A_v} = -\frac{C_1}{C_3}\cdot\frac{1}{1 + \dfrac{1}{\beta A_v}},
\end{aligned}
$$

其中反馈系数（即 $C_3$/$C_1$ 分压器送回 X 的输出比例）为

$$\beta = \frac{C_3}{C_1 + C_3}.$$

两个半边完全相同，因此同一表达式也适用于完整的差分增益。

### 第 4 步 — 数值计算

$$
\begin{aligned}
\frac{C_1}{C_3} &= \frac{2\ \mathrm{pF}}{0.5\ \mathrm{pF}} = 4\quad\text{(nominal gain)},\\
\beta &= \frac{0.5\ \mathrm{pF}}{2\ \mathrm{pF} + 0.5\ \mathrm{pF}} = 0.2,\\
\beta A_v &= 0.2\times24.4 = 4.88\quad\text{(loop gain)},\\
\frac{1}{\beta A_v} &= \frac{1}{4.88} = 0.205,\\
\left|\frac{\Delta V_{out}}{\Delta V_{in}}\right| &= \frac{4}{1 + 0.205} = \frac{4}{1.205} = 3.32 .
\end{aligned}
$$

### 第 5 步 — 增益误差

增益误差是相对于标称增益的相对不足量：

$$
\begin{aligned}
\varepsilon &= \frac{4 - 3.32}{4} = 1 - \frac{1}{1 + 1/(\beta A_v)} = \frac{1}{1 + \beta A_v}\\
&= \frac{1}{1 + 4.88} = \frac{1}{5.88} = 0.170 = 17\ \%.
\end{aligned}
$$

一阶近似 $\varepsilon \approx 1/(\beta A_v) = (C_1 + C_3)/(C_3A_v) = 20.5\ \%$ 要求 $\beta A_v \gg 1$，而这里并不满足，因此它明显高估了误差。

误差之所以大，是因为带电流源负载的单个差分对只能提供 $A_v \approx 24$，而且只有五分之一的输出被反馈回去，因此环路增益（loop gain）小于 5。要使增益误差不超过 1 %，环路增益需要约为 100，即放大器增益约为 500，这需要采用共源共栅（cascode）结构或增加第二级。

### 结果

$A_v = g_{m1}(r_{O1}\parallel r_{O3}) = 3.66\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega \approx 24.4$，$\beta = C_3/(C_1 + C_3) = 0.2$，因此闭环增益为

$$\frac{C_1/C_3}{1 + 1/(\beta A_v)} = \frac{4}{1.205} \approx 3.32$$

而不是 4：**增益误差约为 17 %**（精确值，$1/(1 + \beta A_v)$），若用一阶公式 $(C_1 + C_3)/(C_3A_v)$ 则为 20.5 %。

**常见错误。** 漏掉反馈系数，给出 $1/A_v \approx 4\ \%$。$C_1$ 同样是求和节点的负载，因此只有 $\beta = 0.2$ 的输出被反馈回去；起作用的量是环路增益 $\beta A_v$。

**常见错误。** 算错 $A_v$：用 $r_{O1} + r_{O3}$（它们在输出端是并联的），把 1 mA 的全部尾电流都算到一个晶体管上（每侧只流过 $I_{SS}/2$），或者对 NMOS 器件使用 PMOS 的 $\lambda$。
