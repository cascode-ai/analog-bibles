# 详细步骤 - R517

**思路。** 以阈值处 $I_D = 0$ 为条件，对 $g_m = dI_D/dV_{GS}$ 积分，恢复出漏极电流的规律。然后消去过驱动电压（overdrive voltage），把 $g_m$ 用 $I_D$ 和 $\beta$ 表示；再消去 $\beta$，把它用 $I_D$ 和过驱动电压表示，与熟悉的平方律形式一一对应。

### 第 1 步 — 漏极电流与过驱动电压

令 $V_{ov} = V_{GS} - V_{TH}$（$V_{TH}$ 为常数），则 $g_m = dI_D/dV_{ov} = \beta V_{ov}^2$。在 $V_{ov} = 0$ 时 $I_D = 0$ 的条件下积分（因此积分常数为零）：

$$I_D = \frac{\beta}{3}V_{ov}^3
\quad\Longrightarrow\quad
V_{ov}^3 = \frac{3I_D}{\beta}
\quad\Longrightarrow\quad
V_{ov} = \left(\frac{3I_D}{\beta}\right)^{1/3}.$$

### 第 2 步 — 用 $I_D$ 和 $\beta$ 表示 $g_m$

将 $V_{ov}$ 代入 $g_m = \beta V_{ov}^2$：

$$g_m = \beta\left(\frac{3I_D}{\beta}\right)^{2/3} = \beta\cdot\frac{(3I_D)^{2/3}}{\beta^{2/3}} = \beta^{1/3}\,(3I_D)^{2/3} = \left[\beta\,(3I_D)^2\right]^{1/3},$$

$$\boxed{g_m = \sqrt[3]{9\beta I_D^2} = 3^{2/3}\beta^{1/3}I_D^{2/3} \approx 2.08\,\beta^{1/3}I_D^{2/3}}$$

在 $\beta$ 固定时，$g_m \propto I_D^{2/3}$：电流加倍会使 $g_m$ 增大到 $2^{2/3} = 1.59$ 倍，而平方律器件（$g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$）只增大到 $\sqrt2 = 1.41$ 倍。

### 第 3 步 — 用 $I_D$ 和 $V_{GS} - V_{TH}$ 表示 $g_m$

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\tfrac{\beta}{3}V_{ov}^3} = \frac{3}{V_{ov}}
\quad\Longrightarrow\quad
\boxed{g_m = \frac{3I_D}{V_{GS} - V_{TH}}}$$

$\beta$ 被消去。一般地，若 $I_D \propto V_{ov}^{m}$，则 $g_m/I_D = m/V_{ov}$；平方律（$m = 2$）给出 $2I_D/V_{ov}$，这种器件（$m = 3$）给出 $3I_D/V_{ov}$。

### 第 4 步 — 数值交叉验证

取 $\beta = 30\ \mathrm{mA/V^3}$，$V_{ov} = 0.2$ V：

$$
\begin{aligned}
I_D &= \tfrac13(30\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^3 = 80\ \mu\mathrm{A},\\
g_m\ \text{(definition)} &= (30\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^2 = 1.2\ \mathrm{mS},\\
\sqrt[3]{9\beta I_D^2} &= \sqrt[3]{9\times(0.03\ \mathrm{A/V^3})\times(80\times10^{-6}\ \mathrm{A})^2} = \sqrt[3]{1.728\times10^{-9}}\ \mathrm{S} = 1.2\ \mathrm{mS}, \ \checkmark\\
\frac{3I_D}{V_{ov}} &= \frac{3\times80\ \mu\mathrm{A}}{0.2\ \mathrm{V}} = 1.2\ \mathrm{mS}. \ \checkmark
\end{aligned}
$$

（第一个式子的单位：$(\mathrm{A/V^3}\cdot\mathrm{A^2})^{1/3} = (\mathrm{A^3/V^3})^{1/3} = \mathrm{A/V} = \mathrm{S}$。）

### 结果

对于 $g_m = \beta(V_{GS} - V_{TH})^2$、$I_D = \tfrac{\beta}{3}(V_{GS} - V_{TH})^3$ 的器件：

$$g_m = (3I_D)^{2/3}\beta^{1/3} = \sqrt[3]{9\beta I_D^2} \approx 2.08\,\beta^{1/3}I_D^{2/3},
\qquad
g_m = \frac{3I_D}{V_{GS} - V_{TH}} .$$

它们取代了平方律中的形式 $\sqrt{2\mu_nC_{ox}(W/L)I_D}$ 和 $2I_D/(V_{GS} - V_{TH})$。

**常见错误。** 沿用平方律公式 $g_m = \sqrt{2\beta I_D}$ 或 $g_m = 2I_D/(V_{GS} - V_{TH})$。它们是由 $I_D \propto V_{ov}^2$ 得出的；当 $I_D \propto V_{ov}^3$ 时，$I_D$ 的幂次变为 2/3 而不是 1/2，$g_m/I_D$ 中的因子变为 3 而不是 2。

**常见错误。** 分数幂运算出错，例如写成 $g_m = \beta^{1/3}(3I_D)^{1/3}$ 或 $3^{1/3}\beta^{1/3}I_D^{2/3}$。对 $V_{ov} = (3I_D/\beta)^{1/3}$ 平方得 $(3I_D/\beta)^{2/3}$，因此因子 3 也带有指数 2/3；像第 4 步那样做数值验算就能发现这类错误。
