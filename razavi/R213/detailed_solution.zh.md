# 详细步骤 - R213

**思路。** 对于差分驱动的对称差分对，差模增益等于半边电路（half circuit）的增益；半边电路是以 PMOS 电流源 $M_3$ 为负载的共源级（common-source stage）$M_1$：$g_{m1}(r_{O1}\parallel r_{O3})$。在支路电流 $I_{SS}/2$ 下计算 $g_{m1}$ 和输出电阻（output resistance）。

### 第 1 步 — 半边电路与增益公式

由对称性，每条支路流过

$$I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

对于差分输入，尾节点是交流地；$M_3$（栅极接固定的 $V_b$，源极接 $V_{DD}$）只贡献 $r_{O3}$。因此 $M_1$ 的漏极 X 变化

$$v_X = -g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2},$$

另一个漏极变化 $-v_X$，$v_{out} = 2v_X$，因此

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\right).$$

### 第 2 步 — 输入器件的跨导（transconductance）

由 $W/L = 50/0.5 = 100$ 得：

$$g_{m1} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{2\times13.4\times10^{-3}\times0.5\times10^{-3}}\ \mathrm{A/V} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

### 第 3 步 — 输出电阻

在 0.5 mA 的**支路**电流下：

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega.
\end{aligned}
$$

### 第 4 步 — 增益

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 24.4 .$$

（在偏置电流中计入因子 $1 + \lambda V_{DS}$，只会使结果改变百分之几。）$\lambda$ 较大的 PMOS 在输出电阻中占主导（10 kΩ 对 20 kΩ）。

### 结果

$$|A_v| = g_{m1}\left(r_{O1}\parallel r_{O3}\right) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4,$$

其中 $g_{m1} = 3.66$ mS，$r_{O1} = 20\ \mathrm{k}\Omega$，$r_{O3} = 10\ \mathrm{k}\Omega$。从 $M_1$ 的栅极到 $M_1$ 的漏极，增益是反相的。

**常见错误。** 使用二极管负载的公式 $g_{m1}/g_{m3}$。$M_3$ 和 $M_4$ 的栅极接固定偏置 $V_b$，因此它们是只贡献 $r_{O3}$ 的电流源。

**常见错误。** 用全部尾电流（tail current）1 mA 计算 $g_m$ 或 $r_O$。每个晶体管只流过 $I_{SS}/2 = 0.5$ mA；若用 1 mA，两个 $r_O$ 都会减半，$g_{m1}$ 也会改变 $\sqrt2$ 倍。

**常见错误。** 把一个漏极的单端摆幅（即增益的一半，约 12.2）当作差模增益。输出取自两个漏极之间，而两个漏极反向变化。
