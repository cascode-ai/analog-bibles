# 详细步骤 - R217

**思路。** 两个输入之间的直流不平衡 $V_{OS}$ 使差分对偏离其平衡工作点，一个晶体管分到的 $I_{SS}$ 多于另一个；小正弦信号感受到的是大信号（large-signal）特性 $I_{D1} - I_{D2}$ 随 $V_{in1} - V_{in2}$ 变化的曲线在 $V_{in1} - V_{in2} = V_{OS}$ 处的**局部斜率**。对平方律电流导引（current steering）公式求导，用平衡时的值归一化，再求出使其下降 5 % 的 $V_{OS}$。

### 第 1 步 — 大信号特性

令 $k = \mu_nC_{ox}W/L$，两个器件都饱和时，平方律电流导引关系为

$$\Delta I \equiv I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2}, \qquad \Delta V_{in} = V_{in1} - V_{in2},$$

该式在两个器件都导通，即 $|\Delta V_{in}| \le \sqrt{2I_{SS}/k}$ 时成立。差分输出为 $V_X - V_Y = -R_D\,\Delta I$，其中 X 和 Y 分别是 $M_1$ 和 $M_2$ 的漏极。

### 第 2 步 — 偏移后工作点处的小信号增益

令 $V_{in1} = V_{DC1} + v_1$，$V_{in2} = V_{DC2} + v_2$，$V_{DC1} - V_{DC2} = V_{OS}$；当 $V_0$ 很小时，输出沿特性曲线在 $\Delta V_{in} = V_{OS}$ 处的切线变化：

$$|A_v| = R_D\,G_m(V_{OS}), \qquad G_m(V_{OS}) = \frac{d\,\Delta I}{d\,\Delta V_{in}}\bigg|_{\Delta V_{in} = V_{OS}} .$$

由乘积求导法则：

$$
\begin{aligned}
\frac{d\,\Delta I}{d\,\Delta V_{in}} &= \frac{k}{2}\left[\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2} + \Delta V_{in}\cdot\frac{-\Delta V_{in}}{\sqrt{4I_{SS}/k - \Delta V_{in}^2}}\right]\\
&= \frac{k}{2}\cdot\frac{4I_{SS}/k - 2\Delta V_{in}^2}{\sqrt{4I_{SS}/k - \Delta V_{in}^2}} ,
\end{aligned}
$$

因此

$$G_m(V_{OS}) = \frac{k}{2}\cdot\frac{4I_{SS}/k - 2V_{OS}^2}{\sqrt{4I_{SS}/k - V_{OS}^2}} .$$

平衡时 $G_m(0) = \dfrac{k}{2}\cdot\dfrac{4I_{SS}/k}{\sqrt{4I_{SS}/k}} = \dfrac{k}{2}\sqrt{\dfrac{4I_{SS}}{k}} = \sqrt{kI_{SS}}$，正如预期，它等于每个器件在 $I_{SS}/2$ 下的 $g_m$。

### 第 3 步 — 归一化形式

定义归一化的不平衡量

$$x = \frac{V_{OS}}{\sqrt{I_{SS}/k}} ,$$

其中 $\sqrt{I_{SS}/k}$ 是平衡时每个晶体管的过驱动电压（$I_{SS}/2 = \tfrac12kV_{ov}^2$）。由 $V_{OS}^2 = x^2I_{SS}/k$ 得：

$$
\begin{aligned}
4\frac{I_{SS}}{k} - 2V_{OS}^2 &= \frac{I_{SS}}{k}(4 - 2x^2),\\
\sqrt{4\frac{I_{SS}}{k} - V_{OS}^2} &= \sqrt{\frac{I_{SS}}{k}}\sqrt{4 - x^2},\\
G_m(V_{OS}) &= \frac{k}{2}\sqrt{\frac{I_{SS}}{k}}\cdot\frac{4 - 2x^2}{\sqrt{4 - x^2}} = \sqrt{kI_{SS}}\cdot\frac{2 - x^2}{\sqrt{4 - x^2}} ,
\end{aligned}
$$

再除以 $G_m(0) = \sqrt{kI_{SS}}$：

$$\frac{G_m(V_{OS})}{G_m(0)} = \frac{2 - x^2}{\sqrt{4 - x^2}} .$$

| $x$ | 0 | 0.2 | 0.3 | 0.363 | 0.5 | 0.707 | 1.0 | 1.414 |
|---|---|---|---|---|---|---|---|---|
| $G_m/G_m(0)$ | 1 | 0.985 | 0.966 | 0.950 | 0.904 | 0.802 | 0.577 | 0 |

增益起初下降很慢（与 $x$ 成二次关系），在输入范围的边缘 $x = \sqrt2$ 处降为零，此时一个晶体管截止。

### 第 4 步 — 求解下降 5 % 的条件

令该比值等于 0.95，并记 $u = x^2$：

$$
\begin{aligned}
\frac{2 - u}{\sqrt{4 - u}} &= 0.95\\
(2 - u)^2 &= 0.9025\,(4 - u)\\
4 - 4u + u^2 &= 3.61 - 0.9025u\\
u^2 - 3.0975u + 0.39 &= 0 .
\end{aligned}
$$

取较小的根（另一个根约为 2.97，超出了有效范围 $u \le 2$）：

$$u = \frac{3.0975 - \sqrt{3.0975^2 - 4(0.39)}}{2} = \frac{3.0975 - \sqrt{9.5945 - 1.56}}{2} = \frac{3.0975 - 2.8345}{2} = 0.1315 .$$

因此 $x = \sqrt{0.1315} = 0.363$（验证：$(2 - 0.1315)/\sqrt{4 - 0.1315} = 1.8685/1.9668 = 0.950$ ✓）。

### 第 5 步 — 可容许的不平衡

$$V_{OS} \le 0.363\sqrt{\frac{I_{SS}}{\mu_nC_{ox}W/L}} ,$$

约为平衡时过驱动电压的 36 %。由于完整的输入范围为 $\Delta V_{in,max} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$，等价地有

$$V_{OS} \le \frac{0.363}{\sqrt2}\sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}} = 0.257\sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}},$$

约为输入范围的 26 %。

**示例：** 取 $I_{SS} = 1$ mA，$\mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$，则 $\sqrt{I_{SS}/k} = 0.273$ V，因此 $V_{OS} \le 0.363\times0.273\ \mathrm{V} = 99$ mV。作为比较，等于输入范围一半的不平衡（$x = 0.707$）会使增益损失 20 %。

### 结果

$$V_{OS} \le 0.36\sqrt{\frac{I_{SS}}{\mu_nC_{ox}W/L}} \approx 0.26\sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}},$$

即约为平衡时过驱动电压的 36 %，或约为输入范围的 26 %。它由 $G_m(V_{OS})/G_m(0) = (2 - x^2)/\sqrt{4 - x^2} = 0.95$ 得到，其中 $x = V_{OS}/\sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$。

**常见错误。** 以“信号很小”为由，认为增益与 $V_{OS}$ 无关。小信号叠加在一个偏移了的偏置点上，而该处电流导引特性的斜率比平衡时小。

**常见错误。** 认为增益随 $V_{OS}$ 线性下降（例如只允许过驱动电压的 5 %）。特性曲线是奇函数，因此其斜率是 $V_{OS}$ 的偶函数，在不平衡很小时下降量是二次的，这就是为什么能够容许过驱动电压的 36 %。

**常见错误。** 取了二次方程的错误根（约 2.97），它位于输入范围 $\sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$ 之外；在那里一个晶体管已经截止，公式不再适用。
