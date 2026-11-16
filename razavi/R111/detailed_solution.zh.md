# 详细步骤 - R111

**思路。** $M_1$ 的栅极接直流偏置 $V_b$（交流地），源极由理想输入源驱动，因此它是一个共栅（CG）级。$R_1$ 直接跨接在 $M_1$ 的漏极和源极之间，与 $r_{O1}$ 并联；$R_2$ 是接到 $V_{DD}$ 的负载。对小信号模型（small-signal model）的输出节点应用 KCL，求出 $v_{out}/v_{in}$。

### 第 1 步 — 小信号模型

$V_{DD}$ 和 $V_b$ 都是交流地，因此 $R_2$ 接在 $out$ 与地之间，栅极接地。输入节点的电位固定为 $v_{in}$。$M_1$ 是从漏极（$out$）流向源极（$in$）的 $g_{m1}v_{gs}$，其中 $v_{gs} = 0 - v_{in} = -v_{in}$，并与 $r_{O1}$ 并联；$R_1$ 也接在 $out$ 与 $in$ 之间。这里 $\lambda \ne 0$；而 $\gamma = 0$，因此即使源极电位变化，也没有体效应（body effect）。唯一的未知量是 $v_{out}$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输出节点的 KCL

对从 $out$ 流出的各电流（经 $R_2$、$R_1$、$r_{O1}$ 以及受控源，受控源电流为 $g_{m1}v_{gs} = -g_{m1}v_{in}$）求和：

$$\frac{v_{out}}{R_2} + \frac{v_{out} - v_{in}}{R_1} + \frac{v_{out} - v_{in}}{r_{O1}} - g_{m1}v_{in} = 0 .$$

### 第 3 步 — 求解增益

$$v_{out}\left(\frac{1}{R_2} + \frac{1}{R_1} + \frac{1}{r_{O1}}\right) = v_{in}\left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right).$$

左边括号内是总输出电导（output conductance）$1/(R_1\|R_2\|r_{O1})$，因此

$$A_v = \frac{v_{out}}{v_{in}} = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)\left(R_1\|R_2\|r_{O1}\right).$$

**展开形式。** 通分后，

$$
\begin{aligned}
g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1} &= \frac{g_{m1}R_1r_{O1} + R_1 + r_{O1}}{R_1r_{O1}},\\
R_1\|R_2\|r_{O1} &= \frac{R_1R_2r_{O1}}{R_2r_{O1} + R_1r_{O1} + R_1R_2} ,
\end{aligned}
$$

二者相乘时 $R_1r_{O1}$ 被约去：

$$A_v = \frac{R_2\left(g_{m1}R_1r_{O1} + R_1 + r_{O1}\right)}{R_1R_2 + R_1r_{O1} + R_2r_{O1}} .$$

增益为**正**：提高源极电压会减小 $V_{GS}$，因此流过 $R_2$ 的电流减小，输出电压升高。

### 第 4 步 — 用叠加原理（superposition）交叉验证

**(a) 只考虑晶体管电流。** 由于 $v_{gs} = -v_{in}$，受控源向输出端**注入** $g_{m1}v_{in}$；在电阻支路中把输入节点接地后，$R_1$、$r_{O1}$ 和 $R_2$ 都接在 $out$ 与地之间：

$$v_{out,a} = g_{m1}v_{in}\,(R_1\|R_2\|r_{O1}) .$$

**(b) 只考虑电阻支路**（晶体管电流为零）：$R_1\|r_{O1}$ 与 $R_2$ 构成分压器，

$$v_{out,b} = v_{in}\,\frac{R_2}{R_2 + R_1\|r_{O1}} = v_{in}\,\frac{R_1\|R_2\|r_{O1}}{R_1\|r_{O1}} = v_{in}\left(\frac{1}{R_1} + \frac{1}{r_{O1}}\right)(R_1\|R_2\|r_{O1}) ,$$

这里利用了 $R_2/(R_2 + R_p) = (1/R_p)\cdot R_2R_p/(R_2 + R_p)$，其中 $R_p = R_1\|r_{O1}$。二者之和

$$v_{out} = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)(R_1\|R_2\|r_{O1})\,v_{in},$$

与第 3 步的结果一致。

### 第 5 步 — 解释与验证

- **$+1/r_{O1}$ 项和 $+1/R_1$ 项。** $r_{O1}$ 和 $R_1$ 都把输出端连到输入源，因此提高 $v_{in}$ 会推动电流经它们流入输出端，方向与晶体管的 $-g_{m1}v_{gs} = g_{m1}v_{in}$ 相同。把输入视为交流地时，它们也构成输出端的负载，因此出现 $R_1\|R_2\|r_{O1}$。
- **$R_1 \to \infty$：** $A_v \to (g_{m1} + 1/r_{O1})(R_2\|r_{O1}) = (1 + g_{m1}r_{O1})R_2/(R_2 + r_{O1})$，即 $r_O$ 有限时标准的共栅级增益。✓
- **$r_{O1} \to \infty$：** $A_v \to (g_{m1} + 1/R_1)(R_1\|R_2)$。
- **$R_1 \to 0$：** 输出端与输入端短接，展开式给出 $A_v \to R_2r_{O1}/(R_2r_{O1}) = 1$。✓

**数值验证**（示例取值）：$g_{m1} = 2$ mS，$r_{O1} = 20\ \mathrm{k}\Omega$，$R_1 = 10\ \mathrm{k}\Omega$，$R_2 = 5\ \mathrm{k}\Omega$。

$$
\begin{aligned}
g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1} &= (2 + 0.05 + 0.1)\ \mathrm{mS} = 2.15\ \mathrm{mS},\\
R_1\|R_2\|r_{O1} &= \frac{1}{(0.1 + 0.2 + 0.05)\ \mathrm{mS}} = 2.857\ \mathrm{k}\Omega,\\
A_v &= (2.15\ \mathrm{mS})(2.857\ \mathrm{k}\Omega) = 6.14 .
\end{aligned}
$$

展开形式给出 $5\ \mathrm{k}\Omega\,(400 + 10 + 20)\ \mathrm{k}\Omega/[(50 + 200 + 100)\times10^6\ \Omega^2] = 2.15\times10^9/3.5\times10^8 = 6.14$。✓

### 结果

$$A_v = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)\left(R_1\|R_2\|r_{O1}\right) = \frac{R_2\left(g_{m1}R_1r_{O1} + R_1 + r_{O1}\right)}{R_1R_2 + R_1r_{O1} + R_2r_{O1}}$$

（同相，共栅）。当 $r_{O1} \to \infty$ 时，它简化为 $(g_{m1} + 1/R_1)(R_1\|R_2)$。

**常见错误。** 把 $R_1$ 当作从输出端接地的负载。它的下端是**输入**节点，因此它还把输入信号注入输出端，使跨导（transconductance）增加 $1/R_1$，而不仅仅是增加输出电导。

**常见错误。** 把 $M_1$ 当作从栅极驱动的共源级（common-source stage）来分析，从而得到反相增益。栅极接交流地，信号从源极进入，因此 $v_{gs} = -v_{in}$，增益为正。

**常见错误。** 把 $r_{O1}$ 接在输出端与地之间。它位于漏极与源极之间，即 $out$ 与 $in$ 之间，这正是 $1/r_{O1}$ 也出现在分子中的原因。
