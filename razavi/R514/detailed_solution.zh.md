# 详细步骤 - R514

**思路。** 在拐点之后，把每条曲线建模为 $I_D = I_0(1 + \lambda V_{DS})$，其中 $I_0$ 是外推到 $V_{DS} = 0$ 的电流。两个漏极电压下的电流之比只取决于 $\lambda$，因此在每条曲线上读出 $V_{DS} = 0.2$ V 和 1 V 处的 $I_D$，就能得到该过驱动电压下的 $\lambda$。

### 第 1 步 — 由两点求 $\lambda$ 的公式

在 $V_{DS1} = 0.2$ V 和 $V_{DS2} = 1$ V 处，$I_0$ 在比值中消去：

$$r \equiv \frac{I_D(1\ \mathrm{V})}{I_D(0.2\ \mathrm{V})} = \frac{1 + \lambda\cdot1}{1 + \lambda\cdot0.2}
\quad\Longrightarrow\quad
r + 0.2r\lambda = 1 + \lambda
\quad\Longrightarrow\quad
\lambda = \frac{r - 1}{1 - 0.2r}\ \ \mathrm{V^{-1}} .$$

等价地，过这两点的直线斜率为 $\Delta I_D/\Delta V_{DS} = \lambda I_0$，在 $V_{DS} = 0$ 处的截距为 $I_0$，因此 $\lambda = \text{slope}/\text{intercept}$，下面用它作交叉验证。当 $r \to 1/0.2 = 5$ 时 $\lambda \to \infty$，因此 $r$ 较大时，很小的读数误差也会导致 $\lambda$ 出现很大的误差。

### 第 2 步 — 在 0.2 V 处的适用性

最上面的曲线是 350 mV，往下依次是 300、250 和 200 mV。按平方律（square law），拐点应在 $V_{DS} = V_{GS} - V_{TH}$ 处（最上面的曲线为 0.35 V），但这个 40-nm 器件中的速度饱和（velocity saturation）使最上面的曲线在大约 0.1–0.15 V 处就已弯曲，较低的曲线还要更早。在 $V_{DS} = 0.2$ V 处，四条曲线都已处于拐点或拐点之后，因此在 0.2 V 到 1 V 之间使用线性模型是合理的。

### 第 3 步 — 从图中读数

水平方向每 0.2 V 一条网格线，垂直方向每 0.2 mA 一条。

| $V_{GS} - V_{TH}$ | $V_{DS} = 0.2$ V 时的 $I_D$ | $V_{DS} = 1$ V 时的 $I_D$ |
|---|---|---|
| 350 mV（最上面的曲线） | 0.51 mA | 1.12 mA |
| 300 mV | 0.34 mA | 0.81 mA |
| 250 mV | 0.205 mA | 0.555 mA |
| 200 mV | 0.116 mA | 0.35 mA |

### 第 4 步 — $V_{GS} - V_{TH} = 350$ mV 时的 $\lambda$

$$
\begin{aligned}
r &= \frac{1.12\ \mathrm{mA}}{0.51\ \mathrm{mA}} = 2.196,\\
\lambda &= \frac{2.196 - 1}{1 - 0.2\times2.196} = \frac{1.196}{1 - 0.439} = \frac{1.196}{0.561} = 2.13\ \mathrm{V^{-1}} .
\end{aligned}
$$

用直线进行交叉验证：

$$
\begin{aligned}
\text{slope} &= \frac{1.12 - 0.51}{1 - 0.2}\ \frac{\mathrm{mA}}{\mathrm{V}} = 0.763\ \mathrm{mA/V} \quad (r_O = 1/\text{slope} = 1.31\ \mathrm{k\Omega}),\\
I_0 &= 0.51\ \mathrm{mA} - 0.2\ \mathrm{V}\times0.763\ \mathrm{mA/V} = 0.358\ \mathrm{mA},\\
\lambda &= \frac{0.763}{0.358} = 2.13\ \mathrm{V^{-1}}. \ \checkmark
\end{aligned}
$$

因此 $\lambda \approx 2.1\ \mathrm{V^{-1}}$（如果 0.2 V 处的读数取 0.505 mA，则为 2.2 V⁻¹；第三位有效数字已超出该图的读数精度）。

### 第 5 步 — 对 300、250 和 200 mV 重复计算

**300 mV：**

$$r = \frac{0.81}{0.34} = 2.382,\qquad \lambda = \frac{1.382}{1 - 0.476} = \frac{1.382}{0.524} = 2.6\ \mathrm{V^{-1}} .$$

**250 mV：**

$$r = \frac{0.555}{0.205} = 2.707,\qquad \lambda = \frac{1.707}{1 - 0.541} = \frac{1.707}{0.459} = 3.7\ \mathrm{V^{-1}} .$$

**200 mV：**

$$r = \frac{0.35}{0.116} = 3.017,\qquad \lambda = \frac{2.017}{1 - 0.603} = \frac{2.017}{0.397} = 5.1\ \mathrm{V^{-1}} .$$

**灵敏度。** 对 200 mV 而言，$r \approx 3$ 已经接近 $r = 5$ 处的极点：如果在 0.2 V 处读成 0.110 mA 或 0.122 mA，而不是 0.116 mA，则得到 $\lambda = 6.0$ 或 $4.4\ \mathrm{V^{-1}}$。对于上面几条曲线，这些数值的精度约为 ±10 %，对于下面几条约为 ±15–20 %。

| $V_{GS} - V_{TH}$ | $r$ | $\lambda$ (V⁻¹) | $\lambda\,(V_{GS} - V_{TH})$ |
|---|---|---|---|
| 200 mV | 3.02 | ≈ 5.1 | 1.02 |
| 250 mV | 2.71 | ≈ 3.7 | 0.93 |
| 300 mV | 2.38 | ≈ 2.6 | 0.79 |
| 350 mV | 2.20 | ≈ 2.1 | 0.75 |

### 第 6 步 — 趋势及其解释

**$\lambda$ 随过驱动电压增大而减小**：从 200 mV 到 350 mV，减小的倍数超过 2（从约 5 降到约 2.1 V⁻¹）。等价地，$r_OI_D \approx 1/\lambda$ 随过驱动电压增大。

短沟道器件的输出斜率很大一部分来自漏致势垒降低（drain-induced barrier lowering），$\Delta V_{TH} \approx -\eta\,\Delta V_{DS}$。利用 $I_D \propto (V_{GS} - V_{TH})^2$，

$$\frac{1}{I_D}\frac{\partial I_D}{\partial V_{DS}} \approx \frac{2\eta}{V_{GS} - V_{TH}} ,$$

它与过驱动电压成反比：过驱动电压较小时，同样的阈值偏移影响更大。相应地，表中的 $\lambda(V_{GS} - V_{TH})$ 大致恒定（0.75–1.0，无量纲）。

所有这些值都是长沟道例子中 $\lambda \approx 0.1\ \mathrm{V^{-1}}$ 的 20–50 倍：最小沟长的 40-nm 晶体管在约 0.8 mA（350 mV 曲线）时 $r_O \approx 1.3\ \mathrm{k\Omega}$，本征增益（intrinsic gain）$g_mr_O$ 只有约 5–10。

### 结果

利用 $\lambda = (r - 1)/(1 - 0.2r)$，其中 $r = I_D(1\ \mathrm{V})/I_D(0.2\ \mathrm{V})$：

| $V_{GS} - V_{TH}$ | 350 mV | 300 mV | 250 mV | 200 mV |
|---|---|---|---|---|
| 读数（mA） | 0.51 → 1.12 | 0.34 → 0.81 | 0.205 → 0.555 | 0.116 → 0.35 |
| $\lambda$ (V⁻¹) | ≈ 2.1 | ≈ 2.6 | ≈ 3.7 | ≈ 5.1 |

**趋势：** $\lambda$ 随 $V_{GS} - V_{TH}$ 增大而减小，从 200 mV 到 350 mV 大约减半（近似有 $\lambda \propto 1/(V_{GS} - V_{TH})$）。所有数值都远高于长沟道器件的值（≈ 0.1 V⁻¹）。由于当 $r \to 5$ 时公式发散，这些数值对读数很敏感；只有数量级和趋势才有意义。

**常见错误。** 出于习惯，或者没有用电流对斜率进行归一化，给出数量级为 0.1 V⁻¹ 的 $\lambda$。$\lambda$ 是**相对**斜率 $(\Delta I_D/\Delta V_{DS})/I_0$；这里电流从 0.2 V 到 1 V 大约翻了一番，因此 $\lambda$ 的数量级为 2 V⁻¹ 或更大。

**常见错误。** 因为较高的曲线**绝对**斜率（以 mA/V 计）更大，就断定 $\lambda$ 随过驱动电压增大。绝对斜率 $\lambda I_0$ 确实增大，但 $I_0$ 增大得更快，因此 $\lambda$ 减小。
