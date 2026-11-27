# 详细步骤 - R056

**思路：** 把每项指标转换为对器件的约束：输出阻抗要求决定最小沟道长度（通过 $r_O = 1/(\lambda I_D)$ 以及 $\lambda \propto 1/L$），最小漏源电压决定最大过驱动电压（overdrive voltage），因为器件必须保持饱和。两者都取极限值时得到最小的器件，其宽度由平方律（square law）求出。然后计算折叠版图（layout）的各个电容。

### 第 1 步 — 由输出阻抗要求确定沟道长度

电流源的输出阻抗为 $r_O = 1/(\lambda I_D)$，因此在 $I_D = 0.5$ mA 时要求 $r_O \ge 20\ \mathrm{k}\Omega$，就需要

$$\lambda \le \frac{1}{r_{O,min}\,I_D} = \frac{1}{(20\times10^{3}\ \Omega)(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{10\ \mathrm{V}} = 0.1\ \mathrm{V^{-1}} .$$

由于 $\lambda \propto 1/L$，且 $L = 0.5\ \mu$m 时 $\lambda = 0.1\ \mathrm{V^{-1}}$：

$$\lambda = 0.1\ \mathrm{V^{-1}}\times\frac{0.5\ \mu\mathrm{m}}{L} \le 0.1\ \mathrm{V^{-1}} \quad\Longrightarrow\quad L \ge 0.5\ \mu\mathrm{m}.$$

选择： $L = 0.5\ \mu$m。更长的 $L$ 也满足指标，但在过驱动电压固定时 $W$ 必须与 $L$ 成比例地增大，因此栅面积 $WL$（以及电容）将按 $L^2$ 增大。采用这一选择时，$r_O = 1/[(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})] = 20\ \mathrm{k}\Omega$，恰好满足要求。

### 第 2 步 — 由最小漏源电压确定过驱动电压

饱和要求 $V_{DS} \ge V_{GS} - V_{TH} = V_{ov}$，而 $V_{DS}$ 可能低至 0.4 V，因此

$$V_{ov} \le 0.4\ \mathrm{V}.$$

选择： $V_{ov} = 0.4$ V。更小的过驱动电压可以增加电压余度（headroom）裕量，但宽度按 $1/V_{ov}^2$ 增大；允许的最大过驱动电压给出最窄的器件。

### 第 3 步 — 由平方律确定宽度

忽略很小的因子 $1 + \lambda V_{DS}$，由 $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ 得

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2} = \frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{1\times10^{-3}}{2.144\times10^{-5}} \approx 46.6418 ,$$

$$W \approx (46.6418)(0.5\ \mu\mathrm{m}) = 23.3209\ \mu\mathrm{m}.$$

计入沟道长度调制时，$I_D=\tfrac12\mu_n C_{ox}(W/L)V_{ov}^2(1+\lambda V_{DS})$。若在 $V_{DS}=0.4\ \mathrm{V}$ 处计算指定电流，该因子为 1.04，得到 $W\approx23.3209\ \mu\mathrm{m}/1.04$，保留一位小数为 $22.4\ \mu\mathrm{m}$。下文电容采用一阶定尺寸所得的宽度。

验证： $g_m = 2I_D/V_{ov} = 2(0.5\ \mathrm{mA})/(0.4\ \mathrm{V}) = 2.5$ mS，因此本征增益（intrinsic gain）$g_mr_O = (2.5\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 50$，是一个合理的数值。

设计小结： $W/L = 23.3\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$。

### 第 4 步 — 栅-源和栅-漏电容（饱和区）

每一侧单位宽度的交叠电容为 $C_{ov} = 0.4\ \mathrm{fF/\mu m}$：

$$WLC_{ox}\approx(23.3209\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2})=44.7761\ \mathrm{fF},$$

$$WC_{ov}\approx(23.3209\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m})=9.3284\ \mathrm{fF}.$$

在饱和区，沟道在漏端夹断，因此沟道电容以因子 $\tfrac23$ 出现在栅极与源极之间，而漏极只看到交叠电容：

$$C_{GS}=\tfrac23 WLC_{ox}+WC_{ov}\approx\tfrac23(44.7761\ \mathrm{fF})+9.3284\ \mathrm{fF}=39.1791\ \mathrm{fF}\approx39.2\ \mathrm{fF},$$

$$C_{GD}=WC_{ov}\approx9.3\ \mathrm{fF}.$$

### 第 5 步 — 折叠器件的漏-衬底电容

由于 $1\ \mathrm{F/m} = 10^{9}\ \mathrm{fF/\mu m}$，单位周长的侧壁电容为 $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$。两个宽度为 $W/2$ 的栅指共用一个中央漏区，其长为 $W/2$、宽为 $E$：

$$\frac{W}{2} = \frac{23.3209}{2}\ \mu\mathrm{m} = 11.66045\ \mu\mathrm{m}.$$

先算底面部分，再算侧壁部分（四条边）：

$$A_D=\frac W2 E\approx(11.66045\ \mu\mathrm{m})(3\ \mu\mathrm{m})=34.98135\ \mu\mathrm{m^2},\qquad A_D C_j\approx19.5896\ \mathrm{fF},$$

$$P_D=2\left(\frac W2+E\right)\approx29.3209\ \mu\mathrm{m},\qquad P_D C_{jsw}\approx0.1026\ \mathrm{fF}.$$

总电容（零偏置）：

$$C_{DB}=A_D C_j+P_D C_{jsw}\approx19.5896\ \mathrm{fF}+0.1026\ \mathrm{fF}=19.6922\ \mathrm{fF}\approx19.7\ \mathrm{fF}.$$

若漏区不折叠、为 $W\times E$，则约为 39.4 fF：折叠使漏极电容减半，这对漏极是信号节点的电流源很重要。

### 结果

- 沟道长度：$L = 0.5\ \mu$m（由 $r_O = 1/(\lambda I_D) \ge 20\ \mathrm{k}\Omega$，即 $\lambda \le 0.1\ \mathrm{V^{-1}}$ 得到）。
- 过驱动电压：$V_{GS} - V_{TH} = 0.4$ V（直到 $V_{DS} = 0.4$ V 都保持饱和）。
- 宽度：$W/L = 46.6$，$W \approx 23.3\ \mu$m（若计入因子 $1 + \lambda V_{DS}$，则为 22.4 µm）。
- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} \approx 39.2$ fF，$C_{GD} = WC_{ov} \approx 9.3$ fF，$C_{DB} = \tfrac{W}{2}EC_j + 2(\tfrac{W}{2} + E)C_{jsw} \approx 19.7$ fF。

这些都是最小尺寸的选择。更长的 $L$ 或更小的过驱动电压也能以一定裕量满足指标，代价是器件更大、电容更大。

**常见错误：** 把过驱动电压设为 $V_{DS} - V_{TH}$（即要求 $V_{DS} \ge V_{GS}$）。饱和条件 $V_{DS} \ge V_{GS} - V_{TH}$ 直接限制的是过驱动电压：$V_{GS} - V_{TH} \le 0.4$ V。

**常见错误：** 写成 $r_O = \lambda/I_D$，或忘记 $\lambda$ 按 $1/L$ 变化。由 $r_O = 1/(\lambda I_D)$ 和 $\lambda \propto 1/L$ 可知，输出阻抗决定的是 $L$，而不是 $W$。

**常见错误：** 用整个宽度计算折叠器件的漏区面积（$W\times E$，约 39 fF）。漏区是中间那个长度为 $W/2$ 的单一区域；外侧两个区域是源区。
