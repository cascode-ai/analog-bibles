# 详细步骤 - R586

**思路。** 在运放输入节点 X 列出电荷平衡方程，与 $V_{out} = -A_{v1}V_X$ 联立，求出闭环增益（closed-loop gain），其形式为“标称增益 $C_1/C_2$ 除以 $1 + 1/(\text{loop gain})$”。令相对误差等于 1 %，即可得到允许的最小 $C_2$，从而得到最大的标称增益。

### 第 1 步 — X 点的电荷平衡

把运放的反相输入端记为 X；$V_{out} = -A_{v1}V_X$。经 $C_1$ 流入的电流从 $C_{in}$ 和 $C_2$ 流出：

$$sC_1\,(V_{in} - V_X) = sC_{in}\,V_X + sC_2\,(V_X - V_{out}).$$

因子 $s$ 可以约去，因此这是一个与频率无关的电荷平衡方程。

### 第 2 步 — 求闭环增益

合并含 $V_X$ 的项：

$$
\begin{aligned}
C_1V_{in} - C_1V_X &= C_{in}V_X + C_2V_X - C_2V_{out}\\
C_1V_{in} &= (C_1 + C_2 + C_{in})\,V_X - C_2V_{out}.
\end{aligned}
$$

代入 $V_X = -V_{out}/A_{v1}$：

$$
\begin{aligned}
C_1V_{in} &= -(C_1 + C_2 + C_{in})\frac{V_{out}}{A_{v1}} - C_2V_{out}\\
C_1V_{in} &= -V_{out}\left[C_2 + \frac{C_1 + C_2 + C_{in}}{A_{v1}}\right]\\
\frac{V_{out}}{V_{in}} &= -\frac{C_1}{C_2 + \dfrac{C_1 + C_2 + C_{in}}{A_{v1}}}.
\end{aligned}
$$

分子和分母同除以 $C_2$，

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_1 + C_2 + C_{in}}{A_{v1}C_2}},$$

当 $A_{v1} \to \infty$ 时，它趋于**标称增益** $-C_1/C_2$。

### 第 3 步 — 增益误差

定义

$$x = \frac{C_1 + C_2 + C_{in}}{A_{v1}C_2} = \frac{1}{A_{v1}\beta}, \qquad \beta = \frac{C_2}{C_1 + C_2 + C_{in}},$$

其中 $\beta$ 是反馈系数，即由 $C_2$ 与 $C_1 \parallel C_{in}$ 构成的、从输出到 X 的分压比。相对增益误差为

$$\varepsilon = \frac{|G_{nom}| - |G|}{|G_{nom}|} = 1 - \frac{1}{1 + x} = \frac{x}{1 + x} \approx x = \frac{1}{A_{v1}\beta}\quad(x \ll 1).$$

标称增益越大，意味着 $C_2$ 越小，从而 $\beta$ 和环路增益越小。由于 $\beta$ 包含了 X 处的**所有**电容，即使标称增益为单位增益，也有 $\beta < 1/2$。

### 第 4 步 — 误差为 1 % 时的最大标称增益（一阶近似）

误差 $x = (C_1 + C_{in})/(A_{v1}C_2) + 1/A_{v1}$ 随 $C_2$ 减小而单调增大，因此最大增益对应于 $x = 0.01$：

$$
\begin{aligned}
\frac{C_1 + C_2 + C_{in}}{A_{v1}C_2} &= 0.01\\
C_1 + C_2 + C_{in} &= 0.01 \times 1000 \times C_2 = 10\,C_2\\
C_1 + C_{in} &= 9\,C_2\\
C_2 &= \frac{C_1 + C_{in}}{9} = \frac{2\ \mathrm{pF} + 0.2\ \mathrm{pF}}{9} = 0.2444\ \mathrm{pF}.
\end{aligned}
$$

标称增益：

$$\frac{C_1}{C_2} = \frac{2\ \mathrm{pF}}{0.2444\ \mathrm{pF}} = 8.18.$$

验证：$\beta = 0.2444/(2 + 0.2444 + 0.2) = 0.2444/2.4444 = 0.100$，因此环路增益为 $A_{v1}\beta = 1000 \times 0.1 = 100$，即误差为 1 %。✓

### 第 5 步 — 精确解

采用精确误差 $x/(1 + x) = 0.01$：

$$
\begin{aligned}
x &= \frac{0.01}{1 - 0.01} = 0.010101\\
C_1 + C_2 + C_{in} &= 0.010101 \times 1000 \times C_2 = 10.101\,C_2\\
C_1 + C_{in} &= 9.101\,C_2\\
C_2 &= \frac{2.2\ \mathrm{pF}}{9.101} = 0.2417\ \mathrm{pF},\\
\frac{C_1}{C_2} &= \frac{2\ \mathrm{pF}}{0.2417\ \mathrm{pF}} = 8.27.
\end{aligned}
$$

验证实际增益：

$$|G| = \frac{8.27}{1 + 0.010101} = \frac{8.27}{1.0101} = 8.19, \qquad \varepsilon = 1 - \frac{8.19}{8.27} = 1.0\ \%.\ \checkmark$$

两种结果相差约 1 %，与误差本身的大小相当，因此两者都可以接受。

### 结果

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{C_1}{C_2 + (C_1 + C_2 + C_{in})/A_{v1}}, \qquad \text{gain error} \approx \frac{C_1 + C_2 + C_{in}}{A_{v1}C_2}.$$

若误差至多为 1 %：$C_2 \ge (C_1 + C_{in})/9 \approx 0.244$ pF，因此**最大标称增益为 $C_1/C_2 \approx 8.2$**（采用精确误差表达式时为 8.27，$C_2 = 0.242$ pF）。

**常见错误。** 计算 X 处的电容时漏掉 $C_{in}$（或 $C_2$）。若不计 $C_{in}$，条件变为 $C_1 = 9C_2$，增益为 9.0，高估了电路的能力。

**常见错误。** 把增益误差取为 $1/A_{v1}$（这将允许任意增益且误差仅为 0.1 %），或取为 $(C_1/C_2)/A_{v1}$（由此得到的增益为 10）。误差为 $1/(A_{v1}\beta)$，而 $1/\beta = 1 + (C_1 + C_{in})/C_2$ 总是大于标称增益，因此在误差为 1 %、$A_{v1} = 1000$ 的条件下，增益不可能达到 10 或更高。
