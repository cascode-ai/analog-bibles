# 详细步骤 - R439

**思路。** 第二级把 X 和 Y 的直流电平固定在 $V_{DD} - |V_{GS9}|$，围绕该电平的 200 mV 摆幅给出了 X 允许的最低电压和最高电压。要求 X 下方的 NMOS 叠层和 X 上方的 PMOS 共源共栅（cascode）负载在这两个极端处都保持饱和，就得到每个叠层的过驱动电压（overdrive voltage）预算。最小尺寸意味着在预算允许的范围内取最大的过驱动电压，并按总宽度最小的方式分配。

### 第 1 步 — X 和 Y 处的共模电平

X 驱动 PMOS 管 $M_9$ 的栅极，该管的源极和 n 阱都接 $V_{DD}$，因此没有体效应（body effect）。要使 $M_9$ 在 $(W/L)_9 = 100/0.5 = 200$ 时流过 0.5 mA：

$$
\begin{aligned}
|V_{ov9}| &= \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{0.1302\ \mathrm{V^2}} = 0.361\ \mathrm{V}.
\end{aligned}
$$

因此 $|V_{GS9}| = |V_{TH,p}| + |V_{ov9}| = 0.8 + 0.361 = 1.161$ V，并且

$$V_{X,CM} = V_{DD} - |V_{GS9}| = 3\ \mathrm{V} - 1.161\ \mathrm{V} = 1.839\ \mathrm{V}.$$

### 第 2 步 — X 必须覆盖的电压范围

以共模电平为中心的 200 mV 峰峰值摆幅意味着 $\pm100$ mV：

$$
\begin{aligned}
V_{X,min} &= 1.839\ \mathrm{V} - 0.100\ \mathrm{V} = 1.739\ \mathrm{V},\\
V_{X,max} &= 1.839\ \mathrm{V} + 0.100\ \mathrm{V} = 1.939\ \mathrm{V}.
\end{aligned}
$$

第一级的每条支路流过尾电流（tail current）的一半：

$$I_{D1} = I_{D3} = I_{D5} = I_{D7} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

### 第 3 步 — X 的最低电压：NMOS 叠层（$M_1$、$M_3$）的预算

X 下方依次是尾电流源（至少 400 mV）、输入晶体管 $M_1$ 和共源共栅管 $M_3$。选取可自由设定的电压（输入共模电平和 $V_{b1}$），使 X 处于最低值时三者同时到达饱和区边缘：

- **尾电流源：** $V_P = 0.4$ V（其最小值）。
- **$M_1$：** 其栅极位于 $V_{in,CM} = V_P + V_{GS1}$，因此其漏极最低可降至 $V_{in,CM} - V_{TH1} = V_P + V_{ov1}$。令 $V_{D1} = V_P + V_{ov1}$（即 $M_3$ 的源极电压）。
- **$M_3$：** 其栅极位于 $V_{b1} = V_{D1} + V_{GS3}$，因此 X 最低可降至 $V_{b1} - V_{TH3} = V_{D1} + V_{ov3}$。

综合起来：

$$V_{X,min} = 0.4\ \mathrm{V} + V_{ov1} + V_{ov3} .$$

在每一步“$V_G - V_{TH}$”中，阈值电压（threshold voltage）都相互抵消，因此体效应不改变这一结果。由要求 $V_{X,min} \le 1.739$ V 得

$$
\begin{aligned}
0.4\ \mathrm{V} + V_{ov1} + V_{ov3} &\le 1.739\ \mathrm{V}\\
V_{ov1} + V_{ov3} &\le 1.339\ \mathrm{V}.
\end{aligned}
$$

### 第 4 步 — X 的最高电压：PMOS 共源共栅负载（$M_5$、$M_7$）的预算

选取 $V_{b3}$ 和 $V_{b2}$，使两个 PMOS 器件同时到达饱和区边缘：

- **$M_7$：** 源极接 $V_{DD}$；其漏极（即 $M_5$ 的源极）最高可升至 $V_{DD} - |V_{ov7}|$。
- **$M_5$：** 其漏极 X 最高可升至（$M_5$ 的源极电压）$- |V_{ov5}|$。

因此

$$V_{X,max} = V_{DD} - |V_{ov7}| - |V_{ov5}| ,$$

由 $V_{X,max} \ge 1.939$ V 得

$$
\begin{aligned}
3\ \mathrm{V} - |V_{ov5}| - |V_{ov7}| &\ge 1.939\ \mathrm{V}\\
|V_{ov5}| + |V_{ov7}| &\le 1.061\ \mathrm{V}.
\end{aligned}
$$

### 第 5 步 — 为什么“最小尺寸”意味着用满预算并平均分配

电流固定时，

$$\frac{W}{L} = \frac{2I_D}{\mu C_{ox}V_{ov}^2},$$

因此过驱动电压越大，晶体管越小，每份预算都应全部用完。对于类型相同、电流相同且共享预算 $B$ 的两个器件，总宽度正比于

$$f(V_{ov1}) = \frac{1}{V_{ov1}^2} + \frac{1}{(B - V_{ov1})^2},$$

并且

$$
\begin{aligned}
\frac{df}{dV_{ov1}} &= -\frac{2}{V_{ov1}^3} + \frac{2}{(B - V_{ov1})^3} = 0\\
(B - V_{ov1})^3 &= V_{ov1}^3\\
V_{ov1} &= \frac{B}{2}.
\end{aligned}
$$

平均分配对应最小值（取 $B = 1.339$ V 时，按 0.6/0.74 V 分配得到 $f = 4.61\ \mathrm{V^{-2}}$，而平均分配为 $4.46\ \mathrm{V^{-2}}$），并且它使两个器件完全相同。因此

$$
\begin{aligned}
V_{ov1} = V_{ov3} &= \frac{1.339\ \mathrm{V}}{2} = 0.670\ \mathrm{V},\\
|V_{ov5}| = |V_{ov7}| &= \frac{1.061\ \mathrm{V}}{2} = 0.530\ \mathrm{V}.
\end{aligned}
$$

### 第 6 步 — 宽长比（aspect ratio）与宽度

**NMOS 管 $M_1$–$M_4$**（0.5 mA，$V_{ov} = 0.670$ V）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{1-4} &= \frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.670\ \mathrm{V})^2}\\
&= \frac{1.0\times10^{-3}}{(134\times10^{-6})(0.4483)} = \frac{1.0\times10^{-3}}{6.007\times10^{-5}}\\
&= 16.6 ,
\end{aligned}
$$

因此 $W_{1-4} = 16.6\times0.5\ \mu\mathrm{m} \approx 8.3\ \mu\mathrm{m}$。

**PMOS 管 $M_5$–$M_8$**（0.5 mA，$|V_{ov}| = 0.530$ V）：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{5-8} &= \frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.530\ \mathrm{V})^2}\\
&= \frac{1.0\times10^{-3}}{(38.4\times10^{-6})(0.2814)} = \frac{1.0\times10^{-3}}{1.080\times10^{-5}}\\
&= 92.6 ,
\end{aligned}
$$

因此 $W_{5-8} = 92.6\times0.5\ \mu\mathrm{m} \approx 46\ \mu\mathrm{m}$。由于迁移率（mobility）较低且预算较紧，PMOS 管要宽得多。

### 第 7 步 — 与这些尺寸相配的偏置电压

取 $V_{TH,n} = 0.7$ V，$|V_{TH,p}| = 0.8$ V（忽略体效应）：

| 物理量 | 表达式 | 数值 |
|---|---|---|
| 输入共模电平 | $0.4 + V_{TH,n} + V_{ov1}$ | 1.77 V |
| $M_1$ 的漏极 | $0.4 + V_{ov1}$ | 1.07 V |
| $V_{b1}$ | $0.4 + V_{ov1} + V_{TH,n} + V_{ov3}$ | 2.44 V |
| $V_{b3}$（$M_7$ 的栅极） | $V_{DD} - \lvert V_{TH,p}\rvert - \lvert V_{ov7}\rvert$ | 1.67 V |
| $M_5$ 的源极 | $V_{DD} - \lvert V_{ov7}\rvert$ | 2.47 V |
| $V_{b2}$（$M_5$ 的栅极） | $V_{DD} - \lvert V_{ov7}\rvert - \lvert V_{TH,p}\rvert - \lvert V_{ov5}\rvert$ | 1.14 V |

验证：$M_3$ 在 $X = V_{b1} - V_{TH,n} = 2.44 - 0.7 = 1.74$ V 时到达饱和区边缘，$M_5$ 在 $X = V_{b2} + |V_{TH,p}| = 1.14 + 0.8 = 1.94$ V 时到达饱和区边缘，恰好是第 2 步得到的摆幅极限。✓

### 结果

- X 和 Y 的共模电平：$V_{DD} - |V_{GS9}| = 1.839$ V，因此 X 必须能在 1.739 V 与 1.939 V 之间摆动。
- 预算：$V_{ov1} + V_{ov3} \le 1.739 - 0.4 = 1.339$ V，$|V_{ov5}| + |V_{ov7}| \le 3 - 1.939 = 1.061$ V。
- 最小尺寸（用满预算、平均分配、每条支路 0.5 mA）：
  - $(W/L)_{1-4} \approx 16.6$，即 $W \approx 8.3\ \mu\mathrm{m}$，对应 $V_{ov} \approx 0.67$ V；
  - $(W/L)_{5-8} \approx 93$，即 $W \approx 46\ \mu\mathrm{m}$，对应 $|V_{ov}| \approx 0.53$ V。
- 偏置电压，例如 $V_{b1} = 0.4 + 0.67 + V_{GS3} \approx 2.44$ V，$V_{b2} \approx 1.14$ V，$V_{b3} \approx 1.67$ V。

**常见错误。** 把“200 mV 峰峰值”理解为 $\pm200$ mV，这会使预算缩小到 1.24 V 和 0.96 V，导致器件尺寸不必要地增大。峰峰值摆幅意味着 $\pm100$ mV。

**常见错误。** 忘记尾电流源所需的 400 mV：$M_1$ 和 $M_3$ 的预算是 $1.739 - 0.4$ V，而不是 1.739 V。

**常见错误。** 对 PMOS 负载管使用 $\mu_nC_{ox}$（或反过来）。NMOS 的迁移率约为 PMOS 的 3.5 倍，这就是 $M_5$–$M_8$ 的宽度最终约为 $M_1$–$M_4$ 的 5.6 倍的原因。
