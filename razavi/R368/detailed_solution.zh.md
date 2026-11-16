# 详细步骤 - R368

**思路。** 把每个晶体管的沟道热噪声建模为漏源之间的电流。在输入端**短路**时求输入参考噪声**电压**，在输入端**开路**时求输入参考噪声**电流**；每次都把各噪声源在输出端产生的效果与输入信号产生的效果相比较，并保留 $g_mr_O \gg 1$ 下的近似。

### 第 1 步 — 哪些器件贡献噪声

两个电容把 $M_3$/$M_4$ 和 $M_2$/$M_0$ 的栅极保持在交流地，因此 $M_4$、$M_0$、$I_1$ 和 $I_2$ 的噪声根本到不了 $M_3$ 或 $M_2$。**只有 $M_1$、$M_2$ 和 $M_3$ 的沟道噪声电流起作用**，每个都是 $\overline{I_n^2} = 4kT\gamma g_m$，其中

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### 第 2 步 — 跨导（transconductance）与噪声电流

三个器件都工作在饱和区（saturation region），$W/L = 50/0.5 = 100$，$I_D = 0.5$ mA，因此 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$，其中 $M_1$、$M_2$ 用 $\mu_nC_{ox}$，$M_3$ 用 $\mu_pC_{ox}$：

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.661\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{A/V} = 1.960\ \mathrm{mS}.
\end{aligned}
$$

过驱动电压（overdrive voltage）$V_{ov} = 2I_D/g_m$ 对 NMOS 器件为 $2(0.5\ \mathrm{mA})/(3.661\ \mathrm{mS}) = 0.27$ V，对 PMOS 器件为 $2(0.5\ \mathrm{mA})/(1.960\ \mathrm{mS}) = 0.51$ V，都是正常的数值。噪声电流为

$$
\begin{aligned}
\overline{I_{n1}^2} = \overline{I_{n2}^2} &= 4kT\gamma\,g_{m1} = (1.104\times10^{-20})(3.661\times10^{-3}) = 4.04\times10^{-23}\ \mathrm{A^2/Hz},\\
\overline{I_{n3}^2} &= 4kT\gamma\,g_{m3} = (1.104\times10^{-20})(1.960\times10^{-3}) = 2.16\times10^{-23}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

### 第 3 步 — 输入参考噪声电压（输入端短路）

对于给定的输入端接法，每个噪声源看到的输出阻抗都相同，因此只需比较**短路输出电流**（short-circuit output current）$i_{out,sc}$（把 $V_{out}$ 短接到交流地）。$M_1$ 表示为从漏极流向源极的 $g_{m1}v_{gs1}$ 与 $r_{O1}$ 并联，其中 $v_{gs1} = -v_S$（$v_S$ 为输入节点电压）；$M_2$ 表示为从输入端到地的 $r_{O2}$，$M_3$ 表示为从输出端到交流地的 $r_{O3}$，各自都并联着自己的噪声电流。忽略体效应。

输入端短路时，$v_S = 0$：

- **$M_2$：** $I_{n2}$ 流入输入端的短路线，根本到不了输出端。**它没有贡献。**
- **$M_1$：** $v_{gs1} = 0$ 且 $v_{ds1} = 0$，因此其受控源和 $r_{O1}$ 中都没有电流，$I_{n1}$ 全部由输出端的短路线提供：$i_{out,sc} = I_{n1}$。
- **$M_3$：** $I_{n3}$ 从 $V_{DD}$ 直接流入输出端的短路线：$i_{out,sc} = I_{n3}$。
- **输入信号**（$v_S = v_{in}$，$v_{out} = 0$）：$M_1$ 中从漏极流向源极的电流为
$$g_{m1}(0 - v_{in}) + \frac{0 - v_{in}}{r_{O1}} = -\left(g_{m1} + \frac{1}{r_{O1}}\right)v_{in},$$
因此当 $g_{m1}r_{O1} \gg 1$ 时，$|i_{out,sc}| = (g_{m1} + 1/r_{O1})\,v_{in} \approx g_{m1}v_{in}$。

因此，每个噪声电流 $I_n$ 都等效于一个输入电压 $I_n/g_{m1}$，各功率相加：

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n1}^2} + \overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\gamma\,(g_{m1} + g_{m3})}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

（等价的算法：增益 $A_v = (g_{m1} + 1/r_{O1})(r_{O1}\parallel r_{O3}) \approx g_{m1}(r_{O1}\parallel r_{O3})$，输出噪声为 $(\overline{I_{n1}^2} + \overline{I_{n3}^2})(r_{O1}\parallel r_{O3})^2$。）数值计算：

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{3.661\ \mathrm{mS}} = 273.2\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{1.960\times10^{-3}}{13.4\times10^{-6}}\ \Omega = 146.2\ \Omega,\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20})(273.2 + 146.2)\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(419.4) = 4.63\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 2.15\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

### 第 4 步 — 输入参考噪声电流（输入端开路）

输入端开路时，输入节点只与 $M_1$ 的源极以及 $M_2$（$r_{O2}$ 与 $I_{n2}$ 并联）相连；$I_{n,in}$ 位于该节点与地之间。输出端仍然短路。

**电流增益。** 向输入节点注入测试电流 $i_{in}$，对该节点应用基尔霍夫电流定律（KCL）得

$$
\begin{aligned}
i_{in} + \left[-g_{m1}v_S - \frac{v_S}{r_{O1}}\right] &= \frac{v_S}{r_{O2}}\\
v_S &= \frac{i_{in}}{g_{m1} + 1/r_{O1} + 1/r_{O2}},
\end{aligned}
$$

因此 $M_1$ 送到输出端短路线的电流为

$$|i_{out,sc}| = \left(g_{m1} + \frac{1}{r_{O1}}\right)v_S = \frac{g_{m1} + 1/r_{O1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}\;i_{in} \approx \left(1 - \frac{1}{g_{m1}r_{O2}}\right)i_{in} \approx i_{in}.$$

共栅级是一个**电流缓冲器**（current buffer）：它的输入阻抗（$\approx 1/g_{m1}$）远小于 $r_{O2}$，因此 $i_{in}$ 几乎全部到达输出端。

- **$M_2$：** $I_{n2}$ 恰好位于 $I_{n,in}$ 所在的位置，因此它**一比一**地折算到输入端：$\overline{I_{n,in}^2}\big|_{M_2} = \overline{I_{n2}^2}$。
- **$M_3$：** $I_{n3}$ 直接流入输出端的短路线，$i_{out,sc} = I_{n3}$，而输入电流产生 $i_{out,sc} \approx i_{in}$。因此 $\overline{I_{n,in}^2}\big|_{M_3} \approx \overline{I_{n3}^2}$，误差为 $1/(g_mr_O)$ 量级。
- **$M_1$：** 其噪声电流从漏极流向源极。对输入节点应用 KCL：
$$
\begin{aligned}
I_{n1} - g_{m1}v_S - \frac{v_S}{r_{O1}} &= \frac{v_S}{r_{O2}},\\
v_S &= \frac{I_{n1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}.
\end{aligned}
$$
$M_1$ 支路送入输入节点的全部电流都必须经 $r_{O2}$ 流出，而同样大小的电流取自输出端的短路线：
$$|i_{out,sc}| = \frac{v_S}{r_{O2}} = \frac{I_{n1}}{1 + (g_{m1} + 1/r_{O1})\,r_{O2}} \approx \frac{I_{n1}}{g_{m1}r_{O2}} .$$
$M_1$ 的源极接有大电阻 $r_{O2}$，形成源极负反馈（source degeneration），因此其噪声大部分在器件内部循环；折算到输入端为 $I_{n1}/(g_{m1}r_{O2})$，**可以忽略**。

各功率相加：

$$\overline{I_{n,in}^2} \approx \overline{I_{n2}^2} + \overline{I_{n3}^2} = 4kT\gamma\,(g_{m2} + g_{m3}).$$

$$
\begin{aligned}
g_{m2} + g_{m3} &= 3.661 + 1.960 = 5.621\ \mathrm{mS},\\
\overline{I_{n,in}^2} &= (1.104\times10^{-20})(5.621\times10^{-3})\ \mathrm{A^2/Hz} = 6.2\times10^{-23}\ \mathrm{A^2/Hz},\\
\sqrt{\overline{I_{n,in}^2}} &= 7.9\ \mathrm{pA/\sqrt{Hz}}.
\end{aligned}
$$

### 结果

$$\overline{V_{n,in}^2} = 4kT\gamma\,\frac{g_{m1} + g_{m3}}{g_{m1}^2} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz}\quad(\approx 2.15\ \mathrm{nV/\sqrt{Hz}}),$$

$$\overline{I_{n,in}^2} = 4kT\gamma\,(g_{m2} + g_{m3}) \approx 6.2\times10^{-23}\ \mathrm{A^2/Hz}\quad(\approx 7.9\ \mathrm{pA/\sqrt{Hz}}),$$

其中 $g_{m1} = g_{m2} = 3.66$ mS，$g_{m3} = 1.96$ mS。

- 电压噪声来自 $M_1$ 和 $M_3$。
- 电流噪声来自 $M_2$ 和 $M_3$。
- 被旁路的镜像器件 $M_0$ 和 $M_4$ 没有贡献。
- 若计入体效应，电压噪声表达式中的 $g_{m1}$ 将变为 $g_{m1} + g_{mb1}$，数值略低。

**常见错误。** 把 $M_2$ 的噪声计入输入参考噪声**电压**。输入端短路时，$I_{n2}$ 流入短路线；$M_2$ 只出现在输入参考噪声**电流**中。

**常见错误。** 把 $M_1$ 的噪声计入输入参考噪声**电流**。输入端开路时，$r_{O2}$ 对 $M_1$ 形成源极负反馈，其噪声被 $g_{m1}r_{O2} \gg 1$ 抑制。相比之下，$M_3$ 在**两个**量中都出现，因此 $\overline{V_{n,in}^2}$ 与 $\overline{I_{n,in}^2}$ 部分相关。

**常见错误。** 计入镜像二极管器件 $M_0$、$M_4$ 的噪声（电容已把它们的栅极节点交流短路），或者对 NMOS 器件使用 $\mu_pC_{ox}$（或对 PMOS 器件使用 $\mu_nC_{ox}$）。这两种错误都会改变两个结果。
