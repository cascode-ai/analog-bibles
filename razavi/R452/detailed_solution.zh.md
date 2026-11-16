# 详细步骤 - R452

**思路。** $\mathrm{CMRR} = |A_{DM}/A_{CM}|$ 只是运放本身（$M_1$–$M_4$ 和尾电流源）的性质，与 $C_1$–$C_2$ 网络无关。$A_{DM}$ 是以电流镜为负载的差分对（differential pair）的标准增益。对于 $A_{CM}$，对称性使输出与二极管连接节点完全同步变化，电路简化为以二极管连接器件为负载、带源极负反馈（source degeneration）的共源级（common-source stage）。

### 第 1 步 — 差模增益 $A_{DM}$

器件匹配，因此 $g_{m1} = g_{m2}$，$g_{m3} = g_{m4}$，$r_{O1} = r_{O2}$，$r_{O3} = r_{O4}$；忽略体效应。当 $v_{g1} = +v_{id}/2$、$v_{g2} = -v_{id}/2$ 时，P 保持为交流地；电流镜把 $M_1$ 的电流变化 $g_{m1}v_{id}/2$ 复制到输出端，而 $M_2$ 从输出端抽取的电流减少 $g_{m1}v_{id}/2$，因此

$$i_{out} = \frac{g_{m1}v_{id}}{2} + \frac{g_{m1}v_{id}}{2} = g_{m1}v_{id}.$$

输出端看到的电阻为 $r_{O2}\parallel r_{O4}$，因此

$$A_{DM} = \frac{v_{out}}{v_{id}} = g_{m1}(r_{O2}\parallel r_{O4}).$$

### 第 2 步 — 共模输入：输出跟随二极管节点

把 $M_1$ 的漏极（$M_3$、$M_4$ 的栅极）记为节点 A，并在两个栅极上加相同的 $v_{cm}$。此时 $v_{out} = v_A$：若 $v_{out} = v_A$，则 $M_1$ 与 $M_2$ 的端电压和电流完全相同，$M_3$ 与 $M_4$ 也是如此，因此节点 A 的 KCL（$I_{D3} = I_{D1}$）自动保证输出节点的 KCL（$I_{D4} = I_{D2}$）成立，而线性电路的唯一解就是这个对称解。

此时 $M_4$ 的栅极与漏极同步变化，相当于第二个二极管连接器件，电路简化为：

- $M_1$ 与 $M_2$ **并联**：跨导（transconductance）为 $2g_{m1}$，输出电阻为 $r_{O1}/2$，以 $R_{SS}$ 作为源极负反馈电阻；
- $M_3$ 与 $M_4$ **并联构成二极管负载**：$\dfrac{1}{2g_{m3}}\parallel\dfrac{r_{O3}}{2}$。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 共模增益

与源极负反馈相比忽略 $r_{O1}$，合并后的输入器件中的电流 $i$ 满足

$$
\begin{aligned}
v_P &= i\,R_{SS},\\
i &= 2g_{m1}(v_{cm} - v_P) = 2g_{m1}(v_{cm} - iR_{SS}),\\
i\,(1 + 2g_{m1}R_{SS}) &= 2g_{m1}v_{cm},\\
i &= \frac{2g_{m1}}{1 + 2g_{m1}R_{SS}}\,v_{cm}.
\end{aligned}
$$

该电流经二极管负载从 A 抽出，因此在 $1/g_{m3} \ll r_{O3}$ 时，

$$
v_{out} = v_A = -i\left(\frac{1}{2g_{m3}}\parallel\frac{r_{O3}}{2}\right) \approx -\frac{i}{2g_{m3}},
$$

$$A_{CM} = \frac{v_{out}}{v_{cm}} \approx -\frac{2g_{m1}}{1 + 2g_{m1}R_{SS}}\cdot\frac{1}{2g_{m3}} = -\frac{1}{1 + 2g_{m1}R_{SS}}\cdot\frac{g_{m1}}{g_{m3}} .$$

当尾电流源电阻很大（$2g_{m1}R_{SS} \gg 1$）时：

$$A_{CM} \approx -\frac{1}{2g_{m3}R_{SS}} .$$

输出跟随的是**低阻抗**的二极管节点（$\approx 1/(2g_{m3})$），这就是 $A_{CM}$ 远小于电阻负载情形的原因；对于电阻负载，$|A_{CM}| \approx R_D/(2R_{SS})$。

### 第 4 步 — CMRR

$$
\begin{aligned}
\mathrm{CMRR} &= \left|\frac{A_{DM}}{A_{CM}}\right| = \frac{g_{m1}(r_{O2}\parallel r_{O4})}{\dfrac{g_{m1}}{g_{m3}(1 + 2g_{m1}R_{SS})}}\\
&= (1 + 2g_{m1}R_{SS})\,g_{m3}\,(r_{O2}\parallel r_{O4})\\
&\approx 2g_{m1}g_{m3}R_{SS}\,(r_{O2}\parallel r_{O4}) .
\end{aligned}
$$

若 $R_{SS}$ 是一个晶体管的 $r_O$，则 CMRR 的量级为 $(g_mr_O)^2$，例如约 $10^3$–$10^4$（60–80 dB）。例如，取 $g_{m1} = 1$ mS，$g_{m3} = 0.5$ mS，$r_{O1,2} = 50\ \mathrm{k}\Omega$，$r_{O3,4} = 25\ \mathrm{k}\Omega$，$R_{SS} = 50\ \mathrm{k}\Omega$，由公式得 $101\times0.5\ \mathrm{mS}\times16.7\ \mathrm{k}\Omega \approx 840$；保留所有 $r_O$ 的精确节点分析得到约 890。

在尾电流源理想（$R_{SS}\to\infty$）且完全匹配时，$A_{CM} = 0$，CMRR 为无穷大；有限的 $R_{SS}$ 会限制 CMRR，实际中失配（mismatch）也会限制它。在该反馈放大器中，运放的输入共模电平跟随 $V_{in}$（X 跟踪 $V_{in}$），因此有限的 CMRR 表现为约 $v_{in,CM}/\mathrm{CMRR}$ 的输入参考误差；$C_1$、$C_2$ 对它没有影响。

### 结果

$$\mathrm{CMRR} = \frac{A_{DM}}{|A_{CM}|} \approx (1 + 2g_{m1,2}R_{SS})\,g_{m3,4}\,(r_{O1,2}\parallel r_{O3,4}) \approx 2g_{m1}g_{m3}R_{SS}\,(r_{O2}\parallel r_{O4}),$$

其中 $A_{DM} = g_{m1,2}(r_{O2}\parallel r_{O4})$，$A_{CM} \approx -\dfrac{g_{m1,2}}{g_{m3,4}(1 + 2g_{m1,2}R_{SS})}$。对于理想尾电流源，CMRR 为无穷大。

**常见错误。** 在 $R_{SS}$ 有限时，“由对称性”断言 $A_{CM} = 0$。对称性只是使输出跟随二极管节点；共模输入仍会通过 $R_{SS}$ 改变尾电流，因此 $v_A = v_{out} \neq 0$。

**常见错误。** 使用电阻负载差分对的共模增益 $A_{CM} \approx -r_O/(2R_{SS})$。采用有源电流镜时，输出跟踪的是二极管节点，其电阻仅约为 $1/(2g_{m3})$。

**常见错误。** 只把 $A_{DM}$ 当作 CMRR，或者把 CMRR 归因于反馈电容。CMRR 由 $R_{SS}$ 和器件参数决定。
