# 详细步骤 - R623

**思路。** 输入参考失调是使 $V_{out} = 0$ 的差分输入。尾电流源为理想电流源时，这迫使两条支路的电流相等，从而确定了除 $M_1$、$M_2$ 漏极以外的所有节点电压。先求出共源共栅管的失配使这两个节点相差多少，再求出 $M_1$ 和 $M_2$ 在漏源电压不同的情况下仍流过相等电流所需的栅极电压差；$\lambda \neq 0$ 把两者联系起来。最后用小信号计算验证结果，并说明 $R_D \to \infty$ 时的情况。

### 第 1 步 — 节点与线性化的器件方程

把 $M_1$ 和 $M_2$ 的公共源极记为节点 P，$M_1$ 的漏极（$M_3$ 的源极）记为节点 X，$M_2$ 的漏极（$M_4$ 的源极）记为节点 Y。只有共源共栅管失配，$V_{TH3} - V_{TH4} = \Delta V_{TH}$；标称情况下 $g_{m1} = g_{m2}$，$r_{O1} = r_{O2}$，$g_{m3} = g_{m4}$，$r_{O3} = r_{O4}$。对于小偏差，饱和器件的电流变化为

$$\delta I_D = g_m\left(\delta V_{GS} - \delta V_{TH}\right) + \frac{\delta V_{DS}}{r_O},$$

下面把它用于两侧之间的**差值**。

### 第 2 步 — $V_{out} = 0$ 意味着什么

$V_{out} = 0$ 使两个共源共栅管的漏极处于相同电压，因此两个相等的负载电阻流过相等的电流，$I_{D3} = I_{D4}$。理想尾电流源使 $I_{D1} + I_{D2} = I_{SS}$，而每个共源共栅管流过的就是其下方输入管的电流，因此

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2},$$

两个共源共栅管的漏极都处于

$$V_{D3} = V_{D4} = V_{DD} - R_D\frac{I_{SS}}{2}.$$

$R_D$ 已不再出现：无论其取值如何，两个漏极电压都相同，电流也是确定的。

### 第 3 步 — 共源共栅管的失配使节点 X 和 Y 分开

$M_3$ 和 $M_4$ 的电流相等，栅极电压（$V_b$）相等，漏极电压也相等，但阈值不同；只有 $V_X$ 和 $V_Y$ 可以自由变化。令 $\Delta V_S = V_X - V_Y$。从 $M_4$ 到 $M_3$，$\delta V_{GS} = (V_b - V_X) - (V_b - V_Y) = -\Delta V_S$，$\delta V_{DS} = (V_D - V_X) - (V_D - V_Y) = -\Delta V_S$，$\delta V_{TH} = \Delta V_{TH}$，因此电流相等要求

$$I_{D3} - I_{D4} = g_{m3}\left(-\Delta V_S - \Delta V_{TH}\right) + \frac{-\Delta V_S}{r_{O3}} = 0 \quad\Longrightarrow\quad -\Delta V_S\left(g_{m3} + \frac{1}{r_{O3}}\right) = g_{m3}\,\Delta V_{TH} .$$

解得

$$\Delta V_S = V_X - V_Y = -\Delta V_{TH}\,\frac{g_{m3}}{g_{m3} + 1/r_{O3}} = -\Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}} \approx -\Delta V_{TH}.$$

与源极跟随器（source follower）类似，阈值较高的共源共栅管的源极必须低大约 $\Delta V_{TH}$，才能流过相同的电流。

### 第 4 步 — 输入对管必须补偿不相等的漏极电压

$M_1$ 和 $M_2$ 流过相等的电流（第 2 步），并共用节点 P，但

$$V_{DS1} - V_{DS2} = (V_X - V_P) - (V_Y - V_P) = \Delta V_S .$$

由于 $\lambda \neq 0$，栅极电压必须弥补这一差别（$M_1$、$M_2$ 没有阈值失配）：

$$I_{D1} - I_{D2} = g_{m1}\left(V_{GS1} - V_{GS2}\right) + \frac{\Delta V_S}{r_{O1}} = 0 \quad\Longrightarrow\quad V_{GS1} - V_{GS2} = -\frac{\Delta V_S}{g_{m1}r_{O1}} .$$

两管源极相连，因此这就是输入失调。代入第 3 步的 $\Delta V_S$：

$$V_{OS} = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}}\cdot\frac{1}{g_{m1}r_{O1}} \approx \frac{\Delta V_{TH}}{g_{m1}r_{O1}} .$$

共源共栅管的失配相当于在 $M_1$ 的**漏极**施加电压 $\Delta V_{TH}$，而漏极的作用比栅极弱 $g_{m1}r_{O1}$ 倍。若 $\lambda = 0$，失调将恰好为零。

### 第 5 步 — 用小信号增益交叉验证

把失配建模为与 $M_3$ 栅极串联的电压源 $-\Delta V_{TH}$。尾电流源为理想电流源时，只有它的差模部分能到达 $V_{out}$，而对差模部分而言 P 是虚地（virtual ground），因此每一侧都简化为下面的半边电路（half circuit）：从 X 到地的 $g_{m1}v_{in}$ 与 $r_{O1}$ 并联；从输出到 X 的 $g_{m3}(v_{g3} - v_X)$ 与 $r_{O3}$ 并联；以及从输出到交流地的 $R_D$。

<!-- diagram: diagram-01.cir -->

令 $R_{out} = r_{O1} + r_{O3} + g_{m3}r_{O3}r_{O1}$，即共源共栅结构的输出电阻（output resistance）。

**从输入（$M_1$ 栅极）到输出的增益。** 将输出短路，在 X 点应用 KCL，得到短路输出电流 $i = g_{m1}v_{in}\,r_{O1}(1 + g_{m3}r_{O3})/R_{out}$。输出电压为 $-i\,(R_D \parallel R_{out})$，因此

$$A_{in} = -\frac{g_{m1}r_{O1}(1 + g_{m3}r_{O3})}{R_{out}}\cdot\frac{R_DR_{out}}{R_D + R_{out}} = -\frac{g_{m1}r_{O1}(1 + g_{m3}r_{O3})\,R_D}{R_D + R_{out}} .$$

**从 $M_3$ 栅极到输出的增益**（$v_{in} = 0$，此时 $M_1$ 只相当于 $r_{O1}$）。在 X 点应用 KCL：

$$\frac{v_X}{r_{O1}} = g_{m3}(v_{g3} - v_X) - \frac{v_X}{r_{O3}} \quad\Longrightarrow\quad v_X = \frac{g_{m3}v_{g3}}{g_{m3} + 1/r_{O1} + 1/r_{O3}} .$$

短路输出电流为 $v_X/r_{O1} = g_{m3}r_{O3}v_{g3}/R_{out}$，因此

$$A_{3} = -\frac{g_{m3}r_{O3}}{R_{out}}\cdot\frac{R_DR_{out}}{R_D + R_{out}} = -\frac{g_{m3}r_{O3}\,R_D}{R_D + R_{out}} .$$

**折合到输入端。** 误差源 $-\Delta V_{TH}$ 等效于一个输入电压

$$|V_{OS}| = \Delta V_{TH}\,\frac{|A_3|}{|A_{in}|} = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{g_{m1}r_{O1}(1 + g_{m3}r_{O3})},$$

与第 4 步一致；因子 $R_D/(R_D + R_{out})$ 为两个增益所共有，相互抵消。

**数值验证。** 所有器件取 $\mu_nC_{ox}W/L = 5$ mA/V²，$V_{TH} = 0.5$ V，$\lambda = 0.1\ \mathrm{V^{-1}}$，$I_{SS} = 1$ mA，$V_{DD} = 3$ V，$V_b = 2$ V，输入共模电平为 1.2 V，$\Delta V_{TH} = 10$ mV。求解含 $1 + \lambda V_{DS}$ 因子的大信号平方律（square law）方程，得到 $V_X - V_Y = -9.8$ mV，$V_{OS} = 0.196$ mV，$R_D = 1$ kΩ 和 $R_D = 2$ kΩ 时结果相同。用公式计算，取 $g_{m1}r_{O1} \approx 50$，$g_{m3}r_{O3} \approx 51$–55，得到 0.195 mV。

### 第 6 步 — $R_D \to \infty$ 时的情况

两种推导中都不含 $R_D$，因此当 $R_D \to \infty$ 时，**输入参考失调不变**。发生变化的是：

- **增益。** $|A_{in}| \to g_{m1}r_{O1}(1 + g_{m3}r_{O3})$，即完整的共源共栅增益，因为负载不再与 $R_{out}$ 并联分流。
- **输出失调。**
$$V_{out,os} = |A_{in}|\,V_{OS} \to g_{m1}r_{O1}(1 + g_{m3}r_{O3})\cdot\frac{\Delta V_{TH}\,g_{m3}r_{O3}}{g_{m1}r_{O1}(1 + g_{m3}r_{O3})} = g_{m3}r_{O3}\,\Delta V_{TH} .$$

增益和输出失调一起增大，输出失调趋于有限值 $g_{m3}r_{O3}\Delta V_{TH}$。（$R_D \to \infty$ 且尾电流源为理想电流源时，输出共模电平不确定，因此实际设计需要共模反馈；这不影响差模失调。）

### 结果

$$|V_{OS,in}| = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}}\cdot\frac{1}{g_{m1}r_{O1}} \approx \frac{\Delta V_{TH}}{g_{m1}r_{O1}},$$

与 $R_D$ 无关。共源共栅管的阈值失配使两个输入器件的漏极相差约 $\Delta V_{TH}$，沟道长度调制（channel-length modulation）把这一差值转化为输入失调，并按本征增益（intrinsic gain）$g_{m1}r_{O1}$ 缩小。当 $R_D \to \infty$ 时，输入参考失调不变；增益增大到 $g_{m1}r_{O1}(1 + g_{m3}r_{O3})$，输出失调增大到约 $g_{m3}r_{O3}\Delta V_{TH}$。

**常见错误。** 认为“共源共栅管不能改变电流”，所以失调为零。这只在 $\lambda = 0$ 时成立；$\lambda \neq 0$ 时，漏极电压的偏移会改变输入器件的电流，输入端必须用 $\Delta V_S/(g_{m1}r_{O1})$ 加以补偿。

**常见错误。** 把 $\Delta V_{TH}$ 当作与输入管栅极串联的电压折合到输入端（失调 $\approx \Delta V_{TH}$），或按 $g_{m3}/g_{m1}$ 缩放。共源共栅管只是移动了输入器件的漏极电压，而漏极的影响比栅极弱 $g_{m1}r_{O1}$ 倍。

**常见错误。** 认为增益变化会使失调在 $R_D \to \infty$ 时消失或发散。信号和误差看到的是同一个负载因子 $R_D/(R_D + R_{out})$，因此只有输出端的量与 $R_D$ 有关。
