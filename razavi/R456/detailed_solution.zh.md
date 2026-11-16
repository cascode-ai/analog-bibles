# 详细步骤 - R456

**思路。** 差分输入为零时第一级处于平衡状态，$V_Y = V_X = V_{GS3}$。节点 Y 是 $M_5$ 的栅极，因此只有当 $V_{GS3}$ 等于它所需的 $V_{GS5}$ 时，$M_5$ 才会流过预定的 1 mA；栅源电压相等意味着电流密度 $I_D/(W/L)$ 相等，由此确定 $(W/L)_3$。

### 第 1 步 — Y 处的电压与 $M_5$ 所需的电压

$V_{in} = 0$ 时，1 mA 的尾电流（tail current）平均分配：

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = 0.5\ \mathrm{mA}.$$

$M_3$ 和 $M_4$ 完全相同，栅极电压相同（均为 X），流过的电流也相同，因此由对称性，它们的漏极电压也相等：

$$V_Y = V_X = V_{GS3}.$$

$M_5$ 的源极接地，没有体效应（body effect），它在 $(W/L)_5 = 239$ 下流过 $I_{D5} = 1$ mA，即 $V_{ov5} = 0.25$ V：

$$V_{GS5} = V_{TH0} + V_{ov5} = 0.7\ \mathrm{V} + 0.25\ \mathrm{V} = 0.95\ \mathrm{V}.$$

由于 $V_{GS5} = V_Y = V_{GS3}$，设计条件为

$$V_{GS3} = 0.95\ \mathrm{V}, \qquad\text{i.e.}\qquad V_{ov3} = V_{ov5} = 0.25\ \mathrm{V}.$$

### 第 2 步 — 电流密度论证

由平方律（square law），

$$V_{ov} = \sqrt{\frac{2}{\mu_nC_{ox}}\cdot\frac{I_D}{W/L}} ,$$

因此两个 NMOS 器件具有相同 $V_{GS}$ 的充要条件是它们的电流密度相等：

$$
\begin{aligned}
\frac{I_{D3}}{(W/L)_3} &= \frac{I_{D5}}{(W/L)_5}\\
\left(\frac{W}{L}\right)_3 &= \frac{I_{D3}}{I_{D5}}\left(\frac{W}{L}\right)_5 = \frac{0.5\ \mathrm{mA}}{1\ \mathrm{mA}}\times239 = 119.5 .
\end{aligned}
$$

### 第 3 步 — 直接用平方律计算（验证）

$$
\begin{aligned}
\left(\frac{W}{L}\right)_3 &= \frac{2I_{D3}}{\mu_nC_{ox}V_{ov3}^2}\\
&= \frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2}\\
&= \frac{1\times10^{-3}}{(134\times10^{-6})(0.0625)}\\
&= \frac{1\times10^{-3}}{8.375\times10^{-6}}\\
&= 119 .
\end{aligned}
$$

取 $L = 0.5\ \mu\mathrm{m}$：$W_3 = W_4 = 119\times0.5\ \mu\mathrm{m} \approx 60\ \mu\mathrm{m}$。

### 第 4 步 — 这一条件的作用

此时 $M_3$ 和 $M_5$ 通过 $M_4$（它在 Y 处重现 $V_X$）构成一个比例为 $(W/L)_5/(W/L)_3 = 2$ 的电流镜（current mirror），把 $M_3$ 中的 0.5 mA 镜像为 $M_5$ 中的 1 mA。

如果改为让 $M_3$ 与 $M_5$ 相同，即 $(W/L)_3 = 239$，则它在 0.5 mA 下的过驱动电压为

$$V_{ov3} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(239)}} = \sqrt{0.0312}\ \mathrm{V} = 0.177\ \mathrm{V},$$

因此输入为零时 $V_X = V_Y = 0.7 + 0.177 = 0.877$ V，$M_5$ 只能流过

$$I_{D5} = 1\ \mathrm{mA}\times\left(\frac{0.177\ \mathrm{V}}{0.25\ \mathrm{V}}\right)^2 = 0.5\ \mathrm{mA},$$

这只是 $M_6$ 所提供电流的一半。要恢复 1 mA，Y 必须比 X 高 $0.25 - 0.177 = 0.073$ V，即需要约 $0.073\ \mathrm{V}/A_1$ 的差分输入，对于约 20 的第一级增益来说为几毫伏：这就是**系统失调**（systematic offset），而条件 $V_{GS3} = V_{GS5}$ 可以避免它。

### 结果

$$\left(\frac{W}{L}\right)_{3,4} = \frac{I_{D3}}{I_{D5}}\left(\frac{W}{L}\right)_5 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 119,$$

即为 $(W/L)_5$ 的一半，取 $L = 0.5\ \mu\mathrm{m}$ 时 $W \approx 60\ \mu\mathrm{m}$。这样就有 $V_{GS3} = V_{GS5} = 0.95$ V。

**常见错误。** 以为“$V_{GS}$ 相等就需要器件相同”，从而让 $M_3$ 与 $M_5$ 相同（$W/L = 239$）。$V_{GS}$ 相等要求的是**电流密度**相等，而 $M_3$ 的电流只有 $M_5$ 的一半。

**常见错误。** 让 $V_{GS3}$ 与 PMOS 管 $M_6$ 匹配，或者对 $M_3$ 使用 PMOS 的迁移率（mobility）。$M_3$ 是 NMOS 管，其栅极电压驱动 NMOS 管 $M_5$，因此参照的是 $V_{GS5}$，并应使用 $\mu_nC_{ox}$。
