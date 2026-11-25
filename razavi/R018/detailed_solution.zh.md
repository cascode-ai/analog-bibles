# 详细步骤 - R018

**思路：** 确认输出端为源极，低输入时使用完整线性区负载方程，再求饱和区平台及计入体效应的平台上界。题目未给出 $R_1$ 与器件尺寸，需保留对 $\beta R_1$ 的依赖。

### 1. 源极电压、体效应与负载

电流从 $V_{in}$ 经 $M_1$ 流入 $R_1$，因此 $0\le V_{out}\le V_{in}$；电位较低的输出端为源极。衬底接地，两个扩散区与衬底之间的结均无正向偏置。

$$V_{GS}=3\ \mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

阈值公式为

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right),$$

其中 $V_{TH0}=0.7\ \mathrm{V}$，$\gamma=0.45\ \mathrm{V^{1/2}}$，$2|\phi_F|=0.9\ \mathrm{V}$。忽略栅极电流与沟道长度调制。在输出节点有 $I_D=V_{out}/R_1$。

### 2. 线性区段与初始斜率

线性区平方律与输出节点 KCL 给出

$$\frac{V_{out}}{R_1}=I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

由 $V_{DS}<V_{GS}-V_{TH}$，得 $V_{in}<3\ \mathrm{V}-V_{TH}(V_{out})$。使用完整线性区电流方程：

$$\frac{V_{out}}{R_1}=\beta\left[(3\ \mathrm{V}-V_{out}-V_{TH})(V_{in}-V_{out})-\frac{(V_{in}-V_{out})^2}{2}\right].$$

原点处 $V_{out}=0$。当 $V_{DS}\ll V_{GS}-V_{TH}$ 时，$R_{on}\approx[\beta(3\ \mathrm{V}-V_{out}-V_{TH})]^{-1}$，得 $V_{out}\approx V_{in}R_1/(R_1+R_{on})$。在原点求导，得

$$\left.\frac{dV_{out}}{dV_{in}}\right|_0=\frac{\beta R_1(3\ \mathrm{V}-V_{TH0})}{1+\beta R_1(3\ \mathrm{V}-V_{TH0})}.$$

只有 $\beta R_1(2.3\ \mathrm{V})$ 足够大时，斜率才接近一。输出上升时，过驱动减小、阈值升高；输出保持低于输入，并逐渐弯向平台。靠近边界时，小漏源电压的电阻近似失效，应使用完整方程。

### 3. 饱和区平台与上界

当 $V_{in}\ge3\ \mathrm{V}-V_{TH}(V_{out})$ 时，负载 KCL 为

$$\frac{V_{out,s}}{R_1}=\frac{\beta}{2}[3\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})]^2.$$

应取过驱动为正的根：

$$3\ \mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

由于方程中没有 $V_{in}$，所以 $\lambda=0$ 下输出恒定；边界输入为 $V_{in,s}=3\ \mathrm{V}-V_{TH}(V_{out,s})$。在该点，两区方程及其一阶斜率相同，有限参数曲线的斜率趋于零，而非形成尖锐拐角。

仅在 $\beta R_1\to\infty$ 时，所需过驱动才趋于零；平台上界满足

$$3\ \mathrm{V}-V_{out}=0.7\ \mathrm{V}+(0.45\ \mathrm{V^{1/2}})\left[\sqrt{0.9\ \mathrm{V}+V_{out}}-\sqrt{0.9\ \mathrm{V}}\right].$$

令 $u=\sqrt{2|\phi_F|+V_{out}}$，代入上式并整理。

$$u^2+\gamma u=3\,\mathrm V+2|\phi_F|-V_{TH0}+\gamma\sqrt{2|\phi_F|},\qquad V_{out}=u^2-2|\phi_F|.$$

取正根得到 $V_{out}\approx 1.9652\ \mathrm{V}$，此时 $V_{TH}\approx 1.0348\ \mathrm{V}$。每个有限参数的平台均低于该极限解。当 $\beta R_1\to0$ 时，平台趋于零，转折输入趋于 $3\ \mathrm{V}-V_{TH0}=2.3\ \mathrm{V}$。不计体效应时，平台上界本身就是 2.3 V。

### 4. 数值与曲线

使用未舍入的阈值计算，得：

| $\beta R_1$（V⁻¹） | $V_{out,s}$（V） | $V_{TH}$（V） | $V_{in,s}$（V） |
|---|---|---|---|
| 1 | 0.8385 | 0.8664 | 2.1336 |
| 10 | 1.4865 | 0.9683 | 2.0317 |
| 100 | 1.7981 | 1.0123 | 1.9877 |

对 $\beta R_1=10\ \mathrm{V^{-1}}$，$V_{out,s}=1.4865\ \mathrm{V}$ 给出 $V_{TH}=0.9683\ \mathrm{V}$，过驱动为 $0.5452\ \mathrm{V}$。因此 $\tfrac12(10\ \mathrm{V^{-1}})(0.5452\ \mathrm{V})^2\approx 1.4865\ \mathrm{V}$，转折输入为 $V_{in,s}=2.0317\ \mathrm{V}$。

![随输入电压变化的传输曲线](/q/R018/solution-transfer.zh.svg)

虚线极限 $V_{out}=\min(V_{in},1.9652\ \mathrm{V})$ 有理想拐角，有限尺寸曲线则没有。所有曲线均不超过输入，并在扫描终点 3 V 之前达到平台。非零沟道长度调制会使平台具有非零斜率；题目未提供该参数。
