# 详细步骤 - R137

**思路。** 源极跟随器的电平移位量就是跟随器的栅源电压：$V_{in} - V_{out} = V_{GS1}$。给定的差值随后确定了电流源（current source）$M_2$ 的 $V_{GS2}$，再利用相同的电流，由平方律（square law）即可求出各自的宽长比（aspect ratio）。

### 第 1 步 — 栅源电压与过驱动电压

由于 $\lambda = \gamma = 0$，$M_1$ 没有体效应（body effect），两个器件都有 $V_{TH} = 0.7$ V。于是

$$V_{GS1} = V_{in} - V_{out} = 1\ \mathrm{V},\qquad V_{GS2} = V_{GS1} + 0.5\ \mathrm{V} = 1.5\ \mathrm{V},$$

由于 $M_2$ 的源极接地，$V_b = V_{GS2} = 1.5$ V。过驱动电压分别为

$$
\begin{aligned}
V_{ov1} &= 1 - 0.7 = 0.3\ \mathrm{V},\\
V_{ov2} &= 1.5 - 0.7 = 0.8\ \mathrm{V}.
\end{aligned}
$$

### 第 2 步 — 宽长比

由 $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ 得 $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$：

$$\left(\frac{W}{L}\right)_1 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.09\ \mathrm{V^2})} = \frac{1000\ \mu\mathrm{A}}{12.06\ \mu\mathrm{A}} = 82.9 ,$$

例如 $W/L = 41.5\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$；以及

$$\left(\frac{W}{L}\right)_2 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.64\ \mathrm{V^2})} = \frac{1000\ \mu\mathrm{A}}{85.76\ \mu\mathrm{A}} = 11.7 ,$$

例如 $W/L = 5.83\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$。只有宽长比是确定的；沟道长度（此处取 0.5 μm）可以自由选择。

两个器件都流过 0.5 mA，但 $M_1$ 的过驱动电压只有 0.3 V，而 $M_2$ 为 0.8 V，因此前者的 $W/L$ 必须大 $(0.8/0.3)^2 = 7.1$ 倍：$82.9/11.7 = 7.1$ ✓。

### 第 3 步 — 工作区

**$M_2$ 饱和：** $V_{DS2} = V_{out} \ge V_{ov2} = 0.8$ V，即

$$V_{in} = V_{out} + 1\ \mathrm{V} \ge 1.8\ \mathrm{V}.$$

低于此值时，$M_2$ 进入线性区（triode region），其电流降到 0.5 mA 以下，1 V 的电平移位也就无法保持。

**$M_1$ 饱和：** $V_{DD} - V_{out} \ge V_{ov1} = 0.3$ V，即 $V_{out} \le 2.7$ V，或 $V_{in} \le 3.7$ V，这在电源电压范围内总是成立。

因此，在 $1.8\ \mathrm{V} \le V_{in} \le 3$ V 范围内电平移位器按设计工作；由于 $\lambda = \gamma = 0$，移位量在整个范围内恰好为 1 V：$M_2$ 固定了电流，因此 $V_{GS1}$ 也是固定的。

### 第 4 步 — 设计验证

$$
\begin{aligned}
I_{D1} &= \tfrac12(134\ \mu\mathrm{A/V^2})(82.9)(0.3\ \mathrm{V})^2 = \tfrac12(134)(82.9)(0.09)\ \mu\mathrm{A} = 0.500\ \mathrm{mA},\\
I_{D2} &= \tfrac12(134\ \mu\mathrm{A/V^2})(11.66)(0.8\ \mathrm{V})^2 = \tfrac12(134)(11.66)(0.64)\ \mu\mathrm{A} = 0.500\ \mathrm{mA}\ \checkmark
\end{aligned}
$$

由于 $M_2$ 是理想电流源，跟随器的小信号增益恰好为 1，其输出电阻（output resistance）为 $1/g_{m1}$，其中

$$g_{m1} = \frac{2I_D}{V_{ov1}} = \frac{2(0.5\ \mathrm{mA})}{0.3\ \mathrm{V}} = 3.33\ \mathrm{mS},\qquad \frac{1}{g_{m1}} = 300\ \Omega ,$$

因此，较宽的 $M_1$ 还使电平移位器具有较低的输出电阻。

### 结果

$$\left(\frac{W}{L}\right)_1 = \frac{2I_D}{\mu_nC_{ox}(V_{GS1} - V_{TH})^2} \approx 82.9\ \ (\text{e.g. } 41.5/0.5),\qquad \left(\frac{W}{L}\right)_2 = \frac{2I_D}{\mu_nC_{ox}(V_{GS2} - V_{TH})^2} \approx 11.7\ \ (\text{e.g. } 5.8/0.5),$$

其中 $V_{GS1} = 1$ V，$V_{GS2} = V_b = 1.5$ V。当 $V_{in} \ge 1.8$ V 时，$M_2$ 保持饱和。

**常见错误。** 把条件理解为 $V_{GS2} = 0.5$ V，这低于阈值电压（threshold voltage）；或者理解为 $V_{GS1} - V_{GS2} = 0.5$ V。由 $V_{GS1} = 1$ V 和 $V_{GS2} - V_{GS1} = 0.5$ V 得 $V_{GS2} = 1.5$ V。

**常见错误。** 在平方律中用 $V_{GS}$ 代替过驱动电压，例如 $(W/L)_1 = 2I_D/(\mu_nC_{ox}\cdot1^2) = 7.5$。$M_1$ 的过驱动电压为 0.3 V，而不是 1 V。

**常见错误。** 在平方律中丢掉因子 $\tfrac12$，这会使两个宽长比都减半（41.5 和 5.8）；或者重复使用它，这会使宽长比加倍。
