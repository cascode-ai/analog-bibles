# 详细步骤 - R445

**思路。** $M_7$ 和 $M_8$ 并联在 P 与地之间，栅极由两个输出端驱动，构成底部 NMOS 对管的尾电流（tail current）器件：这是一种利用线性区器件实现的共模反馈（common-mode feedback，CMFB）结构。在输出共模电平下，每个管子的 $V_{GS} = 1.5$ V，而 $V_{DS} = V_P = 0.1$ V 很小，因此工作在**线性区**；求出其电流，再由线性区电流方程解出 $W/L$。

### 第 1 步 — $M_7$ 和 $M_8$ 的电流与端电压

对节点 P 列 KCL 方程：$M_5$ 和 $M_6$ 的全部电流都向下流过 $M_7$ 和 $M_8$：

$$I_{D7} + I_{D8} = I_{D5} + I_{D6} = 0.5\ \mathrm{mA} + 0.5\ \mathrm{mA} = 1\ \mathrm{mA}.$$

在工作点上 $V_{out1} = V_{out2} = V_{out,CM} = 1.5$ V，因此完全相同的 $M_7$ 和 $M_8$ 具有相同的栅极、漏极和源极电压，流过相等的电流：

$$I_{D7} = I_{D8} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

源极和衬底都接地，因此没有体效应，$V_{TH} = 0.7$ V：

$$
\begin{aligned}
V_{GS7} &= V_{out,CM} - 0 = 1.5\ \mathrm{V},\\
V_{DS7} &= V_P - 0 = 0.1\ \mathrm{V},\\
V_{GS7} - V_{TH} &= 1.5\ \mathrm{V} - 0.7\ \mathrm{V} = 0.8\ \mathrm{V}.
\end{aligned}
$$

$V_{DS7} = 0.1\ \mathrm{V} < V_{GS7} - V_{TH} = 0.8$ V，因此该器件工作在**线性区**。

### 第 2 步 — 线性区电流方程与宽长比（aspect ratio）

$$I_D = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2}\right],$$

其中

$$
\begin{aligned}
(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2} &= (0.8\ \mathrm{V})(0.1\ \mathrm{V}) - \frac{(0.1\ \mathrm{V})^2}{2}\\
&= 0.080\ \mathrm{V^2} - 0.005\ \mathrm{V^2}\\
&= 0.075\ \mathrm{V^2}.
\end{aligned}
$$

令电流为 0.5 mA：

$$
\begin{aligned}
0.5\ \mathrm{mA} &= (134\ \mu\mathrm{A/V^2})\left(\frac{W}{L}\right)(0.075\ \mathrm{V^2})\\
\frac{W}{L} &= \frac{0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.075\ \mathrm{V^2})}\\
&= \frac{0.5\times10^{-3}}{1.005\times10^{-5}}\\
&= 49.8 .
\end{aligned}
$$

取 $L = 0.5\ \mu\mathrm{m}$：

$$W_7 = W_8 = 49.8\times0.5\ \mu\mathrm{m} \approx 25\ \mu\mathrm{m}.$$

### 第 3 步 — 用深线性区（电阻）近似验证

略去 $V_{DS}^2/2$ 项，相当于把每个器件看作电阻 $R_{on} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})]$。两管在 1 mA 电流下必须产生 0.1 V 的压降，因此 $R_{on7}\parallel R_{on8} = 0.1\ \mathrm{V}/1\ \mathrm{mA} = 100\ \Omega$，即每个管子 $R_{on} = 200\ \Omega$：

$$
\frac{W}{L} = \frac{1}{\mu_nC_{ox}(V_{GS} - V_{TH})R_{on}} = \frac{1}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})(200\ \Omega)} = 46.6 .
$$

这一结果偏低约 6 %，因为 $V_{DS}/(V_{GS} - V_{TH}) = 1/8$ 时，二次项并非完全可以忽略；完整的线性区方程（第 2 步）给出的答案更准确。

### 第 4 步 — 为什么这样就确定了输出共模电平

如果输出共模电平升高到 1.5 V 以上，$M_7$ 和 $M_8$ 导通更强，$V_P$ 下降，于是 $M_5$ 和 $M_6$（栅极接固定偏置）试图吸收比 $M_9$、$M_{10}$ 所提供的 0.5 mA 更多的电流，从而把输出端拉回。环路稳定在 $M_5$ 和 $M_6$ 恰好各流过 0.5 mA 的位置；在上述尺寸下，此时输出端位于 1.5 V，且 $V_P = 0.1$ V。

### 结果

$$\left(\frac{W}{L}\right)_7 = \left(\frac{W}{L}\right)_8 = \frac{0.5\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})\left[(1.5 - 0.7)(0.1) - \tfrac{0.1^2}{2}\right]\mathrm{V^2}} \approx 50,$$

即取 $L = 0.5\ \mu\mathrm{m}$ 时 $W \approx 25\ \mu\mathrm{m}$（若略去 $V_{DS}^2/2$ 项则约为 47）。等效地，并联的两管合起来的 $W/L \approx 100$。

**常见错误。** 把 $M_7$ 和 $M_8$ 当作工作在饱和区（saturation region）的电流源。$V_{DS} = 0.1$ V 而过驱动电压（overdrive voltage）为 0.8 V，它们处于深线性区；若用饱和区公式，会得到 $W/L = 2(0.5\ \mathrm{mA})/[(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2] \approx 11.7$。

**常见错误。** 每个器件取 1 mA（得到 $W/L \approx 100$）或 0.25 mA。$M_7$ 和 $M_8$ 平分差分对的总电流 1 mA，各为 0.5 mA。

**常见错误。** 把 $M_7$、$M_8$ 的 $V_{GS}$ 取为 $V_{out} - V_P$。它们的源极接地，因此 $V_{GS} = 1.5$ V；$V_P$ 是它们的**漏极**电压。
