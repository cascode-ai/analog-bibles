# 详细步骤 - R461

**思路。** $V_{out} = V_{in}$ **精确**成立意味着差分输入恰好为零，这迫使输入对管中的电流相等，电流镜（current mirror）完全平衡，$V_Y = V_X$。接下来要问：计入沟道长度调制后，$M_5$（二极管连接的 $M_3$ 按比例缩放的复制品）在什么输出电压下恰好流过 $M_6$ 强加给它的 1 mA？答案是只有当 $V_{DS5} = V_{DS3}$，即 $V_{out} = V_{GS3}$ 时。

### 第 1 步 — 差分输入为零使第一级平衡

当 $V_{in} = V_{out}$ 时，$M_1$ 和 $M_2$ 的栅极电压相同，源极又接在一起，因此匹配的差分对（不考虑 PMOS 的沟道长度调制）平分理想的尾电流（tail current）：

$$I_{D1} = I_{D2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

由 KCL 得 $I_{D3} = I_{D1} = 0.5$ mA，$I_{D4} = I_{D2} = 0.5$ mA。完全相同的 $M_3$ 和 $M_4$ 具有相同的 $V_{GS}$，因此在 $\lambda_n$ 不为零时，电流相等要求 $(1 + \lambda_nV_{DS})$ 相等：

$$1 + \lambda_nV_Y = 1 + \lambda_nV_X \quad\Longrightarrow\quad V_Y = V_X = V_{GS3}.$$

### 第 2 步 — 对 $M_5$ 的条件

$V_{GS5} = V_Y = V_{GS3}$，且宽长比（aspect ratio）满足 $(W/L)_5 = 2(W/L)_{3,4}$（在 0.5 mA 和 1 mA 下电流密度相同）。利用计入沟道长度调制的平方律（square law），并代入 $V_{DS3} = V_{GS3}$（二极管连接）和 $V_{DS5} = V_{out}$：

$$
\begin{aligned}
I_{D3} &= \frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_3(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{GS3}) = 0.5\ \mathrm{mA},\\
I_{D5} &= \frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_5(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{out}).
\end{aligned}
$$

两式相除，

$$I_{D5} = 2\,I_{D3}\,\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} = 1\ \mathrm{mA}\times\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} .$$

理想的 $M_6$ 迫使 $I_{D5} = 1$ mA 精确成立，因此

$$
\begin{aligned}
\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} &= 1\\
V_{out} &= V_{GS3} .
\end{aligned}
$$

此时 $M_5$ 是 $M_3$ 的精确复制品（$V_{GS}$ 和 $V_{DS}$ 都相同，宽度为两倍），系统失调消失。

### 第 3 步 — $V_{GS3}$ 的值

不计沟道长度调制时，设计给出 $V_{GS3} = V_{TH} + 0.25\ \mathrm{V} = 0.95$ V。在二极管连接的 $M_3$ 中计入 $\lambda_n$：

$$(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{GS3}) = \frac{2I_{D3}}{\mu_nC_{ox}(W/L)_3} = (0.25\ \mathrm{V})^2 .$$

从 $V_{GS3} = 0.95$ V 开始迭代：

$$
\begin{aligned}
V_{ov3} &= \frac{0.25\ \mathrm{V}}{\sqrt{1 + 0.1\times0.95}} = \frac{0.25}{1.0464}\ \mathrm{V} = 0.2389\ \mathrm{V} \;\Rightarrow\; V_{GS3} = 0.939\ \mathrm{V},\\
V_{ov3} &= \frac{0.25\ \mathrm{V}}{\sqrt{1 + 0.1\times0.939}} = \frac{0.25}{1.0459}\ \mathrm{V} = 0.2390\ \mathrm{V} \;\Rightarrow\; V_{GS3} = 0.939\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

因此

$$V_{in} = V_{out} = V_{GS3} \approx 0.94\ \mathrm{V}$$

（若忽略 $\lambda_n$ 对 $V_{GS3}$ 本身的微小影响，则为 0.95 V）。

### 第 4 步 — 为什么在其他电平下等式不成立（系统失调）

例如在 $V_{out} = 1.5$ V 时，平衡的第一级（$V_Y = V_X$）将使 $M_5$ 流过

$$1\ \mathrm{mA}\times\frac{1 + 0.1\times1.5}{1 + 0.1\times0.939} = 1\ \mathrm{mA}\times\frac{1.150}{1.094} = 1.05\ \mathrm{mA},$$

比 $M_6$ 提供的电流多 5 %。要使 $I_{D5}$ 回到 1 mA，$V_Y$ 需要降低约 6 mV，即第一级不再平衡，这需要约 $\Delta V_Y/A_1$ 的差分输入（这里只有零点几毫伏）：这就是**系统失调**，只有在 $V_{out} = V_{GS3}$ 时它才为零。

### 第 5 步 — 对器件尺寸比的敏感性

若按字面使用舍入后的尺寸 239 和 119（比值为 2.008），第 2 步的条件变为

$$\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} = \frac{2\times119}{239} = 0.9958 \;\Rightarrow\; V_{out} \approx 0.89\ \mathrm{V}.$$

0.4 % 的比例误差会使平衡点移动约 50 mV，因为必须由 $\lambda_n\Delta V_{DS}$ 来抵消该误差，而 $\lambda_n$ 只有 0.1 V⁻¹。若采用设计意图中的精确比值，即两个尺寸都由相同的 0.25 V 过驱动电压（overdrive voltage）求出，答案就是第 3 步的 0.94 V。

### 结果

只有在下述电压下，输入与输出才恰好相等：

$$V_{in} = V_{out} = V_{GS3} = V_{GS5} \approx 0.94\text{–}0.95\ \mathrm{V},$$

此时 $M_5$ 与二极管连接的 $M_3$ 具有相同的 $V_{GS}$ **和**相同的 $V_{DS}$，因此在 $V_Y = V_X$、第一级完全平衡的条件下，它恰好流过 $2I_{D3} = 1$ mA。（0.95 V 是 $\lambda = 0$ 时的设计值；计入 $\lambda_n$ 后，二极管电压约为 0.94 V。）在其他任何电平下，沟道长度调制都会产生一个小的系统失调。

**常见错误。** 回答“在允许范围内的任何输入下都成立”，这只有在忽略沟道长度调制时才对；当 $\lambda_n \ne 0$ 时，只在一个输出电平下才能达到平衡。

**常见错误。** 到 PMOS 器件（节点 P、$M_6$/$M_7$）中去寻找答案。这里它们都是理想电流源；该条件只涉及 NMOS 复制对 $M_3$/$M_5$。

**常见错误。** 只说“$V_X = V_Y$”。这是必要条件，但 $M_5$ 还必须与 $M_3$ 的**漏极**电压相同，这就确定了 $V_{out} = V_{GS3}$。
