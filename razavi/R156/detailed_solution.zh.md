# 详细步骤 - R156

**思路。** 把输入回路的 KVL、各 $V_{GS}$ 的平方律以及 $I_{D1} + I_{D2} = I_{SS}$ 结合起来，得到差分对的大信号特性，从而求出 $I_{D1} - I_{D2}$；已知两者之和，即可求出各自的电流。

### 第 1 步 — 差分对的三个方程

两个器件都处于饱和区（saturation region），$\lambda = 0$，$\beta = \mu_nC_{ox}W/L$：

$$I_{D1} + I_{D2} = I_{SS}, \qquad \Delta V_{in} \equiv V_{in1} - V_{in2} = V_{GS1} - V_{GS2}, \qquad V_{GS} = V_{TH} + \sqrt{\frac{2I_D}{\beta}} .$$

两个源极都接在 $P$，因此两个器件的 $V_{TH}$ 相同，可以消去：

$$\Delta V_{in} = \sqrt{\frac{2I_{D1}}{\beta}} - \sqrt{\frac{2I_{D2}}{\beta}} .$$

### 第 2 步 — 推导 $I_{D1} - I_{D2}$

两边平方，并利用 $I_{D1} + I_{D2} = I_{SS}$：

$$\Delta V_{in}^2 = \frac{2}{\beta}\left(I_{D1} + I_{D2} - 2\sqrt{I_{D1}I_{D2}}\right) = \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right).$$

解出平方根项，再平方一次：

$$4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V_{in}^2\right)^2 .$$

利用 $(I_{D1} - I_{D2})^2 = (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2}$：

$$
\begin{aligned}
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V_{in}^2\right)^2\\
&= I_{SS}^2 - I_{SS}^2 + \beta I_{SS}\Delta V_{in}^2 - \frac{\beta^2}{4}\Delta V_{in}^4\\
&= \frac{\beta^2}{4}\Delta V_{in}^2\left(\frac{4I_{SS}}{\beta} - \Delta V_{in}^2\right).
\end{aligned}
$$

开平方并取与 $\Delta V_{in}$ 相同的符号（栅极电压较高的一边电流较大）：

$$I_{D1} - I_{D2} = \frac12\,\beta\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta} - \Delta V_{in}^2}.$$

该式在两个晶体管都导通时成立，即 $|\Delta V_{in}| \le \sqrt{2I_{SS}/\beta}$；超出此范围时，一个器件承载全部 $I_{SS}$。

### 第 3 步 — 数值

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.$$

适用性：$\sqrt{2I_{SS}/\beta} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V $\gg$ 50 mV，因此两个器件都导通。于是

$$
\begin{aligned}
\frac{4I_{SS}}{\beta} &= \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
\Delta V_{in}^2 &= (0.05\ \mathrm{V})^2 = 0.0025\ \mathrm{V^2},\\
\sqrt{0.2985 - 0.0025}\ \mathrm{V} &= \sqrt{0.2960}\ \mathrm{V} = 0.5441\ \mathrm{V},\\
\frac12\beta\,\Delta V_{in} &= \frac12(13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.335\ \mathrm{mA/V},\\
I_{D1} - I_{D2} &= (0.335\ \mathrm{mA/V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA}.
\end{aligned}
$$

### 第 4 步 — 各自的电流

由 $I_{D1} + I_{D2} = 1$ mA：

$$
\begin{aligned}
I_{D1} &= \frac{I_{SS} + (I_{D1} - I_{D2})}{2} = \frac{1 + 0.1823}{2}\ \mathrm{mA} = 0.591\ \mathrm{mA},\\
I_{D2} &= \frac{I_{SS} - (I_{D1} - I_{D2})}{2} = \frac{1 - 0.1823}{2}\ \mathrm{mA} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

**验证。** 两个过驱动电压（overdrive voltage）分别为

$$
\begin{aligned}
\sqrt{2I_{D1}/\beta} &= \sqrt{2(0.5911)/13.4}\ \mathrm{V} = 0.2970\ \mathrm{V},\\
\sqrt{2I_{D2}/\beta} &= \sqrt{2(0.4089)/13.4}\ \mathrm{V} = 0.2470\ \mathrm{V},
\end{aligned}
$$

两者之差 $V_{GS1} - V_{GS2} = 0.0500$ V，正好还原 50 mV 的输入。

### 第 5 步 — 与小信号估计的比较

取 $G_m = \sqrt{\beta I_{SS}} = \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66$ mS，线性估计为

$$I_{D1} - I_{D2} \approx G_m\Delta V_{in} = (3.66\ \mathrm{mS})(50\ \mathrm{mV}) = 0.183\ \mathrm{mA},$$

只比精确值 0.1823 mA 高 0.4 %：与完全导向所需的 0.386 V 输入相比，50 mV 很小。

### 结果

$$I_{D1} \approx 0.591\ \mathrm{mA}, \qquad I_{D2} \approx 0.409\ \mathrm{mA}\qquad (I_{D1} - I_{D2} \approx 0.182\ \mathrm{mA}),$$

由 $I_{D1} - I_{D2} = \tfrac12\beta\Delta V_{in}\sqrt{4I_{SS}/\beta - \Delta V_{in}^2}$（$\beta = 13.4\ \mathrm{mA/V^2}$）得到。栅极电压较高的一边（$M_1$）电流较大。

**常见错误。** 以为 50 mV 就能使差分对“翻转”，把全部 1 mA 送入 $M_1$。完全导向需要 $|\Delta V_{in}| \ge \sqrt{2I_{SS}/\beta} = 0.386$ V；在 50 mV 时，电流的不平衡只有 $I_{SS}$ 的约 18 %。

**常见错误。** 使用错误的关系式，如 $\Delta I = \beta\Delta V_{in}^2$（得到 0.034 mA），或者忘记两个电流之和仍须等于 $I_{SS} = 1$ mA。
