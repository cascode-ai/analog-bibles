# 详细步骤 - R602

**思路。** 利用差分对的平方律大信号（large-signal）特性，即 $I_{D1} - I_{D2}$ 随差分输入的变化关系。它是 $V_{in}$ 的奇函数，因此偶次谐波为零。将其展开到三阶并代入 $V_{in} = V_m\cos\omega t$，即可用 $V_m$ 和平衡时的过驱动电压表示 HD3，再对三种设计分别求值。

### 第 1 步 — 平衡时的过驱动电压

平衡时每个晶体管流过 $I = I_{SS}/2 = 0.5$ mA。由 $k = \mu_nC_{ox}(W/L) = 134\ \mu\mathrm{A/V^2}\times40 = 5.36\ \mathrm{mA/V^2}$ 以及 $I = \tfrac12kV_{ov}^2$：

$$V_{ov} = \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.1866}\ \mathrm{V} = 0.432\ \mathrm{V}.$$

### 第 2 步 — 差分对的大信号特性

令 $V_{in} = V_{in1} - V_{in2} = V_{GS1} - V_{GS2}$，由平方律得 $\sqrt{I_{D1}} - \sqrt{I_{D2}} = \sqrt{k/2}\,V_{in}$；两边平方并利用 $I_{D1} + I_{D2} = I_{SS}$，即得标准特性

$$\Delta I = I_{D1} - I_{D2} = \tfrac12k\,V_{in}\sqrt{\frac{4I_{SS}}{k} - V_{in}^2}.$$

由 $I_{SS} = 2I$ 和 $I = \tfrac12kV_{ov}^2$，得 $4I_{SS}/k = 8I/k = 4V_{ov}^2$，因此

$$\Delta I = \tfrac12kV_{in}\sqrt{4V_{ov}^2 - V_{in}^2} = kV_{ov}V_{in}\sqrt{1 - \frac{V_{in}^2}{4V_{ov}^2}}.$$

$\Delta I(-V_{in}) = -\Delta I(V_{in})$：奇函数只含 $V_{in}$ 的奇次幂，因此正弦输入**不产生偶次谐波**（没有 HD2）。由于 $I_{D1} + I_{D2} = I_{SS}$ 恒定，每个漏极电流都是 $I \pm \Delta I/2$，因此在这个理想对称电路中，即使单端电流也不含偶次谐波。

### 第 3 步 — 三阶展开

当 $V_{in} \ll 2V_{ov}$ 时，利用 $\sqrt{1 - u} \approx 1 - u/2$，其中 $u = V_{in}^2/(4V_{ov}^2)$：

$$\Delta I \approx kV_{ov}V_{in}\left(1 - \frac{V_{in}^2}{8V_{ov}^2}\right) = kV_{ov}V_{in} - \frac{k}{8V_{ov}}V_{in}^3 .$$

第一项为 $g_mV_{in}$，其中 $g_m = kV_{ov}$；三次项使输出受到压缩。

### 第 4 步 — $V_{in} = V_m\cos\omega t$ 时的谐波

利用 $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$：

$$
\begin{aligned}
\Delta I &\approx kV_{ov}V_m\cos\omega t - \frac{k}{8V_{ov}}V_m^3\left(\tfrac34\cos\omega t + \tfrac14\cos3\omega t\right)\\
&= kV_{ov}V_m\left(1 - \frac{3V_m^2}{32V_{ov}^2}\right)\cos\omega t - \frac{kV_m^3}{32V_{ov}}\cos3\omega t .
\end{aligned}
$$

忽略基波（fundamental）的微小减小，

$$\mathrm{HD3} \approx \frac{kV_m^3/(32V_{ov})}{kV_{ov}V_m} = \frac{V_m^2}{32\,V_{ov}^2}.$$

差分输出 $V_{out} = -R_D\,\Delta I$ 与 $\Delta I$ 成线性关系，因此具有相同的 HD3。

### 第 5 步 — 给定设计的数值

$V_m = 100$ mV 是**差分**输入的峰值（若对称驱动，每个栅极为 ±50 mV）：

$$
\begin{aligned}
V_m^2 &= (0.1\ \mathrm{V})^2 = 0.01\ \mathrm{V^2},\\
32V_{ov}^2 &= 32\times0.1866\ \mathrm{V^2} = 5.97\ \mathrm{V^2},\\
\mathrm{HD3} &\approx \frac{0.01}{5.97} = 1.68\times10^{-3} = 0.17\ \%.
\end{aligned}
$$

用精确的平方律特性数值计算得 0.169 %，而五次谐波只有基波的约 $10^{-6}$。HD2 = 0，因此 THD ≈ HD3 ≈ 0.17 %。

### 第 6 步 — $W/L$ 或 $I$ 加倍

由于 $V_{ov}^2 = 2I/(\mu_nC_{ox}W/L)$，

$$\mathrm{HD3} \approx \frac{V_m^2}{32V_{ov}^2} = \frac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \propto \frac{W/L}{I}.$$

**$W/L$ 加倍**（80，$I = 0.5$ mA）：$V_{ov} = \sqrt{2(0.5\ \mathrm{mA})/(10.72\ \mathrm{mA/V^2})} = 0.305$ V，$V_{ov}^2 = 0.0933\ \mathrm{V^2}$：

$$\mathrm{HD3} \approx \frac{0.01}{32\times0.0933} = 0.335\ \%\quad(\text{doubles; } 0.34\ \%\ \text{exact}).$$

**$I$ 加倍**（每个器件 1 mA，$I_{SS} = 2$ mA）：$V_{ov} = \sqrt{2(1\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.611$ V，$V_{ov}^2 = 0.373\ \mathrm{V^2}$：

$$\mathrm{HD3} \approx \frac{0.01}{32\times0.373} = 0.084\ \%\quad(\text{halves}).$$

| 情形 | $V_{ov}$ | HD2 | HD3 |
|---|---|---|---|
| $W/L = 40$，$I = 0.5$ mA | 0.432 V | 0 | 0.17 % |
| $2\times W/L$ | 0.305 V | 0 | 0.34 % |
| $2\times I$ | 0.611 V | 0 | 0.084 % |

采用相同器件和电流、由 100 mV 驱动的共源级，其 HD2 $= V_m/(4V_{ov}) \approx 5.8\ \%$。差分对的线性度要好得多，因为对称性抵消了二次项，只留下随 $V_m/V_{ov}$ 的**平方**变化的三阶误差。

### 结果

对称差分对的特性是奇函数，因此**没有偶次谐波**；三次谐波占主导：

$$\mathrm{HD3} \approx \frac{V_m^2}{32\,(V_{GS} - V_{TH})^2} = \frac{0.01}{32\times0.1866} \approx 0.17\ \%,$$

其中平衡时 $V_{GS} - V_{TH} = 0.432$ V。把 $W/L$ 加倍会使 HD3 加倍（≈ 0.34 %）；把 $I$（以及 $I_{SS}$）加倍会使其减半（≈ 0.084 %），因为 $\mathrm{HD3} \propto (W/L)/I$。

**常见错误。** 类比单个平方律晶体管而给出二次谐波（second harmonic）。$M_1$ 和 $M_2$ 的二次项在 $I_{D1} - I_{D2}$ 中相互抵消（而且恒定的尾电流使它们即使在每个单端电流中也被抵消），因此在完全对称时 HD2 为零。

**常见错误。** 用错系数（例如 $V_m^2/(8V_{ov}^2)$，漏掉了 $\cos^3\theta$ 带来的 $\tfrac14$），或者在每个栅极上各加 100 mV（差分 200 mV），这会使失真变为四倍（0.67 %）。
