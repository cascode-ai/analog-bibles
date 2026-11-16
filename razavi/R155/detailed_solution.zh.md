# 详细步骤 - R155

**思路。** 平衡时两个相同的器件各流过尾电流的一半；令平方律电流等于 $I_{SS}/2$，即可求出过驱动电压。

### 第 1 步 — 每个器件中的电流

平衡时（$V_{in1} = V_{in2}$），两个器件的 $V_{GS}$ 相同；由于两个源极都接在 $P$，它们的 $V_{TH}$ 也相同；$\lambda = 0$ 时漏极电压无关紧要。因此，由 $I_{D1} + I_{D2} = I_{SS}$ 得

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

### 第 2 步 — 求解过驱动电压

取

$$\beta = \mu_nC_{ox}\frac{W}{L} = \left(134\ \mu\mathrm{A/V^2}\right)\left(\frac{50}{0.5}\right) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},$$

令饱和区（saturation region）电流等于 $I_{SS}/2$，得

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

两个 $\tfrac12$ 因子相互抵消。数值计算：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}}\\
&= \sqrt{0.07463\ \mathrm{V^2}}\\
&= 0.273\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — 过驱动电压决定了什么

- 平衡时每个器件的跨导（transconductance）为 $g_m = 2I_D/V_{ov} = 2(0.5\ \mathrm{mA})/(0.273\ \mathrm{V}) = 3.66$ mS。
- 当 $|V_{in1} - V_{in2}| = \sqrt{2}\,V_{ov} = 0.386$ V 时，差分对把**全部**尾电流导向一边。

过驱动电压越大，线性输入范围越宽，但在相同电流下 $g_m$ 越低。

### 结果

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}} \approx 0.273\ \mathrm{V},$$

每个晶体管流过 $I_{SS}/2 = 0.5$ mA。

**常见错误。** 让每个器件都流过全部尾电流：$\sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V。这是单个器件流过全部 $I_{SS}$ 时的过驱动电压，只有在差分对完全导向一边时才会出现。

**常见错误。** 漏掉平方律中的因子 $\tfrac12$，即写成 $I_D = \beta V_{ov}^2$。取 $I_D = 0.5$ mA 时，得到 $\sqrt{0.5\ \mathrm{mA}/13.4\ \mathrm{mA/V^2}} = 0.193$ V，小了 $\sqrt{2}$ 倍。
