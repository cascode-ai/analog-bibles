# 详细步骤 - R239

**思路。** 利用 $|A_v| = G_mR_{out}$，其中 $G_m$ 是 $V_{out}$ 接交流地时的跨导（transconductance），$R_{out}$ 是输入为零时的输出电阻（output resistance）。结果取决于两点观察：(i) $M_3$–$M_4$ 由固定电流 $I_1$ 驱动，因此 $M_4$ 只是一个电流源负载；(ii) $M_1$ 的漏极直接接 $V_{DD}$，因此只有 $M_2$ 中那一半信号电流到达输出端。直接的节点分析可以验证这一结果。

### 第 1 步 — 偏置电流与小信号参数

$M_4$ 复制 $I_1$，因此 $I_{D4} = 0.25$ mA；没有外部负载时，$I_{D2} = I_{D4} = 0.25$ mA，而 $I_{D1} = I_{SS} - I_{D2} = 0.25$ mA（由于 $I_{SS} = 2I_1$，电路是平衡的）。由 $W/L = 50/0.5 = 100$：

$$g_{m1} = g_{m2} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS},$$

$$r_{O1} = r_{O2} = \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega, \qquad r_{O4} = \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

在小信号电路中，$V_{DD}$ 为交流地，$I_{SS}$ 开路。$M_3$ 的栅极由理想的 $I_1$ 偏置，没有信号，因此 $v_{gs4} = 0$，$M_4$ 简化为从输出端接到交流地的 $r_{O4}$。

### 第 2 步 — 短路跨导 $G_m$

把 $V_{out}$ 短接到交流地后，两个漏极都处于交流地，差分对是对称的。两个栅极加 $\pm v_{in}/2$ 时，P 点不动，因此

$$i_{D1} = g_{m1}\frac{v_{in}}{2}, \qquad i_{D2} = -g_{m2}\frac{v_{in}}{2} .$$

$M_1$ 的电流流入 $V_{DD}$ 而被浪费。$M_2$ 从输出节点吸取 $i_{D2}$，因此送入短路线的电流为

$$i_{out} = -i_{D2} = \frac{g_{m2}}{2}v_{in} \quad\Longrightarrow\quad G_m = \frac{g_{m1}}{2} = \frac{2.59\ \mathrm{mS}}{2} = 1.29\ \mathrm{mS} .$$

在五管运算跨导放大器（OTA）中，电流镜把 $M_1$ 的信号电流复制到输出端，$G_m = g_{m1}$；而这里 $M_3$ 由 $I_1$ 供电，因此这一半电流被浪费了。

### 第 3 步 — 输出电阻 $R_{out}$

两个栅极都接交流地时，输出端看到的是 $r_{O4}$ 与经过 $M_2$ 的通路并联，该管的源极以从 $M_1$ 源极看进去的电阻作为负反馈。

<!-- diagram: diagram-01.cir -->

**从 $M_1$ 的源极看进去**（栅极和漏极都接交流地）：在 P 点加电压 $v_s$，受控源中流过 $g_{m1}v_s$，$r_{O1}$ 中流过 $v_s/r_{O1}$，因此

$$i = g_{m1}v_s + \frac{v_s}{r_{O1}} \quad\Longrightarrow\quad R_S = \frac{v_s}{i} = \frac{r_{O1}}{1 + g_{m1}r_{O1}} .$$

**从 $M_2$ 的漏极看进去**（源极电阻为 $R_S$）：测试电流 $i_t$ 使 $v_P = i_tR_S$，$v_{gs2} = -i_tR_S$，$r_{O2}$ 中的电流为 $i_t - g_{m2}v_{gs2} = i_t(1 + g_{m2}R_S)$，因此

$$v_t = i_t(1 + g_{m2}R_S)r_{O2} + i_tR_S \quad\Longrightarrow\quad R_{D2} = r_{O2} + (1 + g_{m2}r_{O2})R_S .$$

对于匹配器件（$g_{m1} = g_{m2}$，$r_{O1} = r_{O2} = r_O$）：

$$R_{D2} = r_O + (1 + g_mr_O)\frac{r_O}{1 + g_mr_O} = r_O + r_O = 2r_O = 80\ \mathrm{k}\Omega .$$

因子 $(1 + g_mr_O)$ 恰好约去（计入体效应时同样如此，因为此时 $R_S$ 和负反馈因子中都含有 $g_m + g_{mb}$）。因此

$$R_{out} = R_{D2}\,\|\,r_{O4} = (2r_{O2})\|r_{O4} = \frac{80\times20}{80 + 20}\ \mathrm{k}\Omega = 16\ \mathrm{k}\Omega .$$

### 第 4 步 — 电压增益

$$|A_v| = G_mR_{out} = \frac{g_{m1}}{2}\left[(2r_{O2})\|r_{O4}\right] = (1.29\ \mathrm{mS})(16\ \mathrm{k}\Omega) = 20.7 .$$

若 $M_1$ 的栅极电压相对于 $M_2$ 的栅极电压升高，$M_2$ 从输出端吸取的电流减小，$V_{out}$ 升高：从 $M_1$ 的栅极看，增益是**同相**的（$V_{in} = V_{G1} - V_{G2}$）。

### 第 5 步 — 用直接节点分析验证

设栅极电压为 $v_1$、$v_2$，未知量为 $v_P$、$v_{out}$，则漏源电流为

$$i_1 = g_m(v_1 - v_P) - \frac{v_P}{r_O}, \qquad i_2 = g_m(v_2 - v_P) + \frac{v_{out} - v_P}{r_O} .$$

对 P 点（尾电流源开路）应用基尔霍夫电流定律（KCL），$i_1 + i_2 = 0$；对输出节点，$-v_{out}/r_{O4} = i_2$；联立得

$$v_{out} = \frac{g_mr_Or_{O4}}{2r_O + r_{O4}}(v_1 - v_2) = \frac{g_m}{2}\cdot\frac{2r_O\,r_{O4}}{2r_O + r_{O4}}(v_1 - v_2) = \frac{g_m}{2}\left[(2r_O)\|r_{O4}\right]v_{in},$$

与上面的结果完全一致；共模（common-mode）变化（$v_1 = v_2$）不产生输出。

### 结果

$$A_v = \frac{V_{out}}{V_{in}} = +\frac{g_{m1}}{2}\left[(2r_{O2})\,\|\,r_{O4}\right] = (1.29\ \mathrm{mS})(80\ \mathrm{k}\Omega\,\|\,20\ \mathrm{k}\Omega) \approx 20.7,$$

从 $M_1$ 的栅极看为同相增益，其中 $g_{m1} = 2.59$ mS，$r_{O2} = 40\ \mathrm{k}\Omega$，$r_{O4} = 20\ \mathrm{k}\Omega$。

**常见错误。** 套用五管 OTA 的公式 $g_{m1}(r_{O2}\|r_{O4}) \approx 34.5$。这里 PMOS 电流镜由固定的 $I_1$ 驱动，因此 $M_1$ 的信号电流被倾倒进 $V_{DD}$，$G_m$ 只有 $g_{m1}/2$。

**常见错误。** 取 $R_{out} = r_{O2}\|r_{O4}$（≈ 13.3 kΩ）。$M_2$ 的源极有 $r_{O1}/(1 + g_{m1}r_{O1})$ 的负反馈，这使 $M_2$ 通路的电阻加倍为 $2r_{O2}$。

**常见错误。** 把 $\lambda$ 的值弄反（0.1 V⁻¹ 属于 NMOS，0.2 V⁻¹ 属于 PMOS），或者把增益写成 $g_{m1}r_{O2} \approx 104$，忽略了负载 $M_4$。
