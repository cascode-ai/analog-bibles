# 详细步骤 - R459

**思路。** 增益等于 $g_{m5}$ 乘以输出端的电阻。饱和时，$M_6$ 呈现的电阻为 $r_{O6} = 1/(\lambda_pI_D) = 5\ \mathrm{k}\Omega$；在线性区，其漏源电阻由线性区电流方程求出，而且要小得多。针对 $|V_{DS6}| = |V_{ov6}| - 50$ mV 计算该电阻，验证偏置电流（以及 $g_{m5}$）几乎不变，再重新计算增益。

### 第 1 步 — 两个器件都饱和时的情况（参考点）

取 $I_D = 1$ mA，$V_{ov5} = |V_{ov6}| = 1/3$ V：

$$
\begin{aligned}
g_{m5} &= \frac{2I_D}{V_{ov5}} = \frac{2\,(1\ \mathrm{mA})}{0.333\ \mathrm{V}} = 6\ \mathrm{mS},\\
r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega, \qquad r_{O6} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
A_2 &= g_{m5}(r_{O5}\parallel r_{O6}) = (6\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 20 .
\end{aligned}
$$

### 第 2 步 — $M_6$ 在线性区的工作点

“进入线性区 50 mV”的意思是

$$|V_{DS6}| = |V_{ov6}| - 0.05\ \mathrm{V} = 0.333\ \mathrm{V} - 0.050\ \mathrm{V} = 0.283\ \mathrm{V}.$$

$M_6$ 的栅极（接 $V_b$）和源极（接 $V_{DD}$）都不变，因此 $|V_{ov6}|$ 仍为 1/3 V。令

$$\beta_6 = \mu_pC_{ox}\left(\frac{W}{L}\right)_6 = (38.4\ \mu\mathrm{A/V^2})(469) = 0.018\ \mathrm{A/V^2}.$$

### 第 3 步 — 线性区器件的小信号电阻

在线性区（$\lambda$ 只适用于饱和区），

$$|I_{D6}| = \beta_6\left[|V_{ov6}|\,|V_{DS6}| - \frac{|V_{DS6}|^2}{2}\right],$$

漏源电阻是 $V_{GS}$ 固定时该曲线斜率的倒数：

$$
\begin{aligned}
\frac{\partial|I_{D6}|}{\partial|V_{DS6}|} &= \beta_6\left(|V_{ov6}| - |V_{DS6}|\right)\\
R_{on6} &= \frac{1}{\beta_6\left(|V_{ov6}| - |V_{DS6}|\right)} .
\end{aligned}
$$

$|V_{ov6}| - |V_{DS6}|$ 正是器件进入线性区的 50 mV：

$$R_{on6} = \frac{1}{(0.018\ \mathrm{A/V^2})(0.05\ \mathrm{V})} = \frac{1}{9\times10^{-4}\ \mathrm{S}} = 1.11\ \mathrm{k}\Omega ,$$

远小于饱和时的 $r_{O6}$（1.11 kΩ 对比 5 kΩ）：$I_D$–$V_{DS}$ 曲线的斜率在饱和区边缘为零，随着进入线性区的深度线性增大。

### 第 4 步 — 偏置电流是否改变？

$$|I_{D6}| = (0.018\ \mathrm{A/V^2})\left[(0.333)(0.283) - \frac{(0.283)^2}{2}\right]\mathrm{V^2} = (0.018)(0.0943 - 0.0401)\ \mathrm{A} = 0.98\ \mathrm{mA}.$$

电流只减小约 2 %，而 $M_5$ 流过相同的电流，因此

$$g_{m5} = \sqrt{2\mu_nC_{ox}(W/L)_5I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(134)(0.98\ \mathrm{mA})} \approx 5.9\ \mathrm{mS} \approx 6\ \mathrm{mS},$$

且 $r_{O5} = 1/(0.1 \times 0.98\ \mathrm{mA}) \approx 10\ \mathrm{k}\Omega$。

### 第 5 步 — 新的增益

把 $r_{O6}$ 换成 $R_{on6}$，

$$A_2 = g_{m5}(r_{O5}\parallel R_{on6}),$$

$$
\begin{aligned}
r_{O5}\parallel R_{on6} &= \frac{(10\ \mathrm{k}\Omega)(1.11\ \mathrm{k}\Omega)}{10\ \mathrm{k}\Omega + 1.11\ \mathrm{k}\Omega} = 1.00\ \mathrm{k}\Omega,\\
A_2 &= (6\ \mathrm{mS})(1.00\ \mathrm{k}\Omega) \approx 6.0 .
\end{aligned}
$$

（若考虑略低的电流，则为 $5.93\ \mathrm{mS}\times1.00\ \mathrm{k}\Omega = 5.9$；两种情况下都约为 6。）

### 第 6 步 — 解读

| $M_6$ 的状态 | $M_6$ 的负载电阻 | 输出电阻 | 增益 $A_2$ |
|---|---|---|---|
| 饱和 | $r_{O6} = 5\ \mathrm{k}\Omega$ | 3.33 kΩ | 20 |
| 进入线性区 50 mV | $R_{on6} = 1.11\ \mathrm{k}\Omega$ | 1.00 kΩ | ≈ 6 |

仅仅进入线性区 50 mV，增益就降到原来的三分之一以下，这就是运放的输出摆幅（output swing）要由输出器件的饱和极限来定义的原因。

### 结果

$$R_{on6} = \frac{1}{\mu_pC_{ox}(W/L)_6\,(|V_{ov6}| - |V_{DS6}|)} = \frac{1}{(38.4\ \mu\mathrm{A/V^2})(469)(0.05\ \mathrm{V})} \approx 1.11\ \mathrm{k}\Omega,$$

$$A_2 = g_{m5}(r_{O5}\parallel R_{on6}) \approx 6\ \mathrm{mS}\times(10\ \mathrm{k}\Omega\parallel1.11\ \mathrm{k}\Omega) \approx 6,$$

即增益从 20 降到约 6。

**常见错误。** 仍取 $r_{O6} = 1/(\lambda_pI_D) = 5\ \mathrm{k}\Omega$，从而断定增益仍为 20。该公式只适用于饱和区。

**常见错误。** 使用以完整过驱动电压计算的深线性区（deep triode）导通电阻（on-resistance）$1/[\beta_6|V_{ov6}|] \approx 167\ \Omega$。它只在 $|V_{DS}| \to 0$ 时成立；这里正确的值是 $1/[\beta_6(|V_{ov6}| - |V_{DS6}|)]$。

**常见错误。** 略去 $r_{O5}$，把增益近似为 $g_{m5}R_{on6} \approx 6.7$。$R_{on6}$ 只有 $r_{O5}$ 的约九分之一，应使用并联值（1.00 kΩ）。
