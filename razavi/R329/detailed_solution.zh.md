# 详细步骤 - R329

**思路。** 写出该级的输入参考热噪声，把指标转化为比值 $g_{m2}/g_{m1}$。两个晶体管流过相同的电流，由 $g_m = 2I_D/|V_{ov}|$ 可知，这个比值也就是过驱动电压（overdrive voltage）之比；再把它与 3 V 电源电压比较，求出输出摆幅。

### 第 1 步 — 该级的输入参考噪声

令 $v_{in} = 0$，且 $M_2$ 的栅极接固定的 $V_b$，则两个受控源都为零。沟道噪声电流 $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ 和 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$ 流过同一个输出电阻（output resistance）$R_{out} = r_{O1}\parallel r_{O2}$；两者互不相关，因此功率相加：

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

增益为 $|A_v| = g_{m1}R_{out}$，因此

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= \underbrace{\frac{4kT\gamma}{g_{m1}}}_{M_1} + \underbrace{4kT\gamma\,\frac{g_{m2}}{g_{m1}^2}}_{M_2}.
\end{aligned}
$$

$R_{out}$ 被约去，因此无论 $\lambda$ 取何值该式都成立。$M_2$ 的噪声电流与信号电流 $g_{m1}v_{in}$ 一样注入输出节点，所以它要除以 $g_{m1}^2$，而不是 $g_{m2}^2$。

### 第 2 步 — 把指标转化为 $g_m$ 之比

指标针对的是噪声**电压**，即均方根值，也就是功率谱密度（PSD）各项的平方根：

$$V_{n,in}\big|_{M_1} = \sqrt{\frac{4kT\gamma}{g_{m1}}}, \qquad V_{n,in}\big|_{M_2} = \sqrt{\frac{4kT\gamma\,g_{m2}}{g_{m1}^2}}.$$

令两者之比等于 $1/5$，再两边平方：

$$\frac{V_{n,in}|_{M_2}}{V_{n,in}|_{M_1}} = \sqrt{\frac{4kT\gamma\,g_{m2}/g_{m1}^2}{4kT\gamma/g_{m1}}} = \sqrt{\frac{g_{m2}}{g_{m1}}} = \frac15 \quad\Longrightarrow\quad \frac{g_{m2}}{g_{m1}} = \frac{1}{25}.$$

电压相差 5 倍，功率就相差 25 倍。

### 第 3 步 — $M_1$ 的小信号参数

由 $(W/L)_1 = 50/0.5 = 100$ 和 $I_{D1} = 0.1$ mA 得：

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{D1}} = \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.1\ \mathrm{mA})}\\
&= \sqrt{2.68\times10^{-6}\ \mathrm{A^2/V^2}} = 1.637\ \mathrm{mS},\\[4pt]
V_{ov1} &= \frac{2I_{D1}}{g_{m1}} = \frac{2\times0.1\ \mathrm{mA}}{1.637\ \mathrm{mS}} = 0.122\ \mathrm{V}.
\end{aligned}
$$

（验算：$V_{ov1} = \sqrt{2I_{D1}/(\mu_nC_{ox}(W/L)_1)} = \sqrt{0.2\ \mathrm{mA}/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.01493\ \mathrm{V^2}} = 0.122$ V。）

### 第 4 步 — $M_2$ 所需的跨导（transconductance）与过驱动电压

由第 2 步得：

$$g_{m2} = \frac{g_{m1}}{25} = \frac{1.637\ \mathrm{mS}}{25} = 65.5\ \mu\mathrm{S}.$$

由于 $|I_{D2}| = I_{D1}$ 且 $g_m = 2I_D/|V_{ov}|$，$g_m$ 之比等于过驱动电压之比的倒数：

$$\frac{g_{m2}}{g_{m1}} = \frac{2I_D/|V_{ov2}|}{2I_D/V_{ov1}} = \frac{V_{ov1}}{|V_{ov2}|} = \frac{1}{25} \quad\Longrightarrow\quad |V_{ov2}| = 25\,V_{ov1} = 25\times0.122\ \mathrm{V} = 3.05\ \mathrm{V}.$$

（直接计算：$|V_{ov2}| = 2|I_{D2}|/g_{m2} = 0.2\ \mathrm{mA}/65.5\ \mu\mathrm{S} = 3.05$ V。）对应的宽长比（aspect ratio）为

$$\Big(\frac{W}{L}\Big)_2 = \frac{g_{m2}^2}{2\mu_pC_{ox}|I_{D2}|} = \frac{(65.5\ \mu\mathrm{S})^2}{2\times(38.4\ \mu\mathrm{A/V^2})\times(0.1\ \mathrm{mA})} = \frac{4.29\times10^{-9}}{7.68\times10^{-9}} \approx 0.56,$$

这是一个又窄又长的器件。在电流固定时，低噪声的负载需要小的 $g_{m2}$，也就是一个过驱动电压很大的“弱”晶体管，而过驱动电压恰恰会占用电压余度（headroom）。

### 第 5 步 — 两个器件都饱和时的输出摆幅

- **$M_1$ 饱和：** $V_{out} \ge V_{ov1} = 0.122$ V。
- **$M_2$ 饱和：** $V_{DD} - V_{out} \ge |V_{ov2}|$，因此 $V_{out} \le V_{DD} - |V_{ov2}| = 3 - 3.05 = -0.05$ V。

允许的范围

$$0.122\ \mathrm{V} \le V_{out} \le -0.05\ \mathrm{V},$$

是空集：上限反而**低于**下限。形式上，

$$
\begin{aligned}
V_{swing} &= (V_{DD} - |V_{ov2}|) - V_{ov1}\\
&= 3\ \mathrm{V} - 3.054\ \mathrm{V} - 0.122\ \mathrm{V}\\
&= -0.18\ \mathrm{V} < 0 .
\end{aligned}
$$

### 第 6 步 — 该指标无法实现

摆幅为负意味着**不存在能使两个晶体管同时饱和的输出电压**，因此电路甚至无法正常偏置。等价地，要让 $M_2$ 在 $|V_{ov2}| = 3.05$ V 下流过 0.1 mA，其栅极电压需要为

$$V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| = 3 - 0.8 - 3.05 = -0.85\ \mathrm{V},$$

低于地电位。仅仅达到零摆幅就需要

$$V_{DD} \ge V_{ov1} + |V_{ov2}| = 0.122 + 3.054 = 3.18\ \mathrm{V} \approx 3.2\ \mathrm{V},$$

要获得任何有用的摆幅，电源电压还要更高。

**仅作比较：** 若把系数 1/5 用于噪声**功率**，会得到 $g_{m2} = g_{m1}/5$，$|V_{ov2}| = 5V_{ov1} = 0.61$ V，摆幅为 $3 - 0.61 - 0.12 \approx 2.27$ V；但题目规定的是电压，而不是电压的平方。

### 结果

对均方根噪声的要求给出 $\sqrt{g_{m2}/g_{m1}} = 1/5$，即 $g_{m2} = g_{m1}/25 = 65.5\ \mu$S。在 $g_{m1} = 1.64$ mS、$V_{ov1} = 0.122$ V 的条件下，这就要求

$$|V_{GS2} - V_{TH2}| = 25\,V_{ov1} \approx 3.05\ \mathrm{V}.$$

最大摆幅将为 $V_{DD} - V_{ov1} - |V_{ov2}| = 3 - 0.122 - 3.05 \approx -0.18$ V：**结果为负，因此在 $V_{DD} = 3$ V 下该指标无法实现**。不存在可用的输出摆幅，电路甚至无法在两个器件都饱和的条件下完成偏置（这需要 $V_b \approx -0.85$ V，或者仅为达到零摆幅就需要高于约 3.2 V 的电源电压）。

**常见错误。** 把系数 1/5 用于噪声功率，即取 $g_{m2} = g_{m1}/5$，从而得到约 2.27 V 这样诱人的摆幅。题目规定的是噪声**电压**，而 1/5 的电压比对应 1/25 的功率比。

**常见错误。** 把负载管的输入参考噪声贡献写成 $4kT\gamma/g_{m2}$，仿佛 $M_2$ 是输入器件。实际上它的噪声电流注入输出端，要经 $g_{m1}$ 折算到输入端，结果为 $4kT\gamma g_{m2}/g_{m1}^2$；错误的形式甚至会让人以为应当用**大的** $g_{m2}$ 来降低噪声。

**常见错误。** 忽略 $|V_{ov2}|$，给出一个正的摆幅（例如 $V_{DD} - V_{ov1} \approx 2.9$ V）。低噪声负载所需的大过驱动电压会耗尽整个电源电压。
