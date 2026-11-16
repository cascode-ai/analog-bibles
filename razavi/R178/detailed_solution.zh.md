# 详细步骤 - R178

**思路。** 尾节点为虚地（virtual ground），因此增益就是一个半边电路的增益：$M_1$ 看到二极管 $M_3$（$1/g_{m3}$）、电流源 $M_5$（$r_{O5}$）以及它自身的 $r_{O1}$。关键在于 $M_3$ 只流过 $M_1$ 电流的 20 %，因此 $g_{m3}$ 必须在 0.1 mA 下计算，这使 $1/g_{m3}$ 增大，从而提高增益。

### 第 1 步 — 各支路电流

每个输入器件流过 $I_{SS}/2 = 0.5$ mA，由 $M_5$ 和 $M_3$ 在节点 $X$ 共同提供：

$$I_{D1} = I_{D5} + I_{D3} \quad\Longrightarrow\quad I_{D3} = 0.5\ \mathrm{mA} - 0.8(0.5\ \mathrm{mA}) = 0.5 - 0.4 = 0.1\ \mathrm{mA},$$

右边（$M_2$、$M_4$、$M_6$）同理。

### 第 2 步 — 小信号参数

所有晶体管的 $W/L = 50/0.5 = 100$。

**输入器件** $M_1$（NMOS，0.5 mA）：

$$g_{m1} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_{D1}} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{S} = 3.66\ \mathrm{mS}.$$

**二极管负载** $M_3$（PMOS，**0.1 mA**）：

$$g_{m3} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_{D3}} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.1\ \mathrm{mA})} = \sqrt{0.768\times10^{-6}}\ \mathrm{S} = 0.876\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = 1.14\ \mathrm{k}\Omega .$$

**输出电阻（output resistance）：**

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.1\ \mathrm{mA})} = 50\ \mathrm{k}\Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.4\ \mathrm{mA})} = 12.5\ \mathrm{k}\Omega .
\end{aligned}
$$

### 第 3 步 — 半边电路的小信号模型

$P$ 处于交流地、$M_1$ 栅极上加 $v_{in}/2$ 时，节点 $X$ 看到：

- $M_1$：从 $X$ 到地的电流源 $g_{m1}v_{in}/2$，与 $r_{O1}$ 并联；
- $M_3$：二极管连接，吸收电流 $g_{m3}v_X$，与 $r_{O3}$ 并联；
- $M_5$：栅极接 $V_b$、源极接 $V_{DD}$，两者都是交流地，因此只有 $r_{O5}$。

<!-- diagram: diagram-01.cir -->

$X$ 点的 KCL：

$$
\begin{aligned}
g_{m1}\frac{v_{in}}{2} + v_X\left(\frac{1}{r_{O1}} + g_{m3} + \frac{1}{r_{O3}} + \frac{1}{r_{O5}}\right) &= 0\\
v_X &= -g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5}\right)\frac{v_{in}}{2} .
\end{aligned}
$$

由对称性 $v_Y = -v_X$，

$$|A_v| = \left|\frac{v_X - v_Y}{v_{in}}\right| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5}\right).$$

### 第 4 步 — 增益数值

**忽略沟道长度调制：**

$$|A_v| = \frac{g_{m1}}{g_{m3}} = \frac{3.66\ \mathrm{mS}}{0.876\ \mathrm{mS}} = 4.18 .$$

**计入输出电阻：**

$$
\begin{aligned}
g_{m3} + \frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{r_{O5}} &= 0.876 + 0.050 + 0.020 + 0.080 = 1.026\ \mathrm{mS},\\
\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5} &= \frac{1}{1.026\ \mathrm{mS}} = 0.974\ \mathrm{k}\Omega,\\
|A_v| &= (3.66\ \mathrm{mS})(0.974\ \mathrm{k}\Omega) = 3.57 .
\end{aligned}
$$

在这几个寄生电导中，$r_{O5}$ 的贡献最大，因为 $M_5$ 流过 0.4 mA；若忽略它，增益约为 3.9。

### 第 5 步 — 电流源为何有帮助

若没有 $M_5$ 和 $M_6$，同样的二极管负载将流过全部 0.5 mA：

$$g_{m3} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 1.96\ \mathrm{mS}, \qquad |A_v| = \frac{3.66}{1.96} = 1.87 .$$

让 80 % 的电流从 $M_5$ 分流，使二极管电流减小 5 倍，于是 $g_{m3} \propto \sqrt{I_{D3}}$ 降低 $\sqrt5$ 倍，增益提高 $\sqrt5 = 2.24$ 倍（从 1.87 提高到 4.18），而 $g_{m1}$ 不变。二极管电流减小还会降低其 $|V_{GS}|$，留出更多的输出电压余度（headroom）。

### 结果

$$|A_v| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5}\right),$$

其中 $g_{m1} = 3.66$ mS，$g_{m3} = 0.876$ mS（在 0.1 mA 下）。$\lambda = 0$ 时 $|A_v| = g_{m1}/g_{m3} \approx 4.2$；计入 $r_{O1} = 20$ kΩ、$r_{O3} = 50$ kΩ 和 $r_{O5} = 12.5$ kΩ 时约为 **3.6**。

**常见错误。** 在 0.5 mA 下计算 $g_{m3}$，好像二极管流过 $M_1$ 的全部电流一样，这会得到约 1.9 的增益。$M_5$ 提供 0.4 mA，只给 $M_3$ 留下 0.1 mA。

**常见错误。** 由于二极管电流小了 5 倍，就断言增益是普通二极管负载增益的 5 倍（≈ 9.3）。对于固定的 $W/L$，$g_{m3}$ 与电流的**平方根**成正比，因此增益只提高 $\sqrt5$ 倍。

**常见错误。** 把 $M_5$ 的 $g_m$ 加到 $g_{m3}$ 上。$M_5$ 的栅极接固定偏置 $V_b$，而不是接 $X$，因此它只贡献 $r_{O5}$。
