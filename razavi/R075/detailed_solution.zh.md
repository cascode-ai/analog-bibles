# 详细步骤 - R075

**思路。** $W$ 和 $L$ 固定时，$\beta = \mu_nC_{ox}W/L$ 和 $\lambda$ 都是定值，因此 $g_m$ 和 $I_D$ 都随 $V_{GS}$ 变化。用过驱动电压（overdrive voltage）$V_{ov} = V_{GS} - V_{TH}$ 表示 $g_m$ 和 $r_O = 1/(\lambda I_D)$，将二者相乘，再描述所得结果随 $V_{GS}$ 变化的曲线。

### 第 1 步 — 用过驱动电压表示两个因子

$\lambda$（与 $1/L$ 成正比）和 $\beta = \mu_nC_{ox}W/L$ 均为常数，而当 $V_{GS}$ 变化时，漏极电流服从平方律：

$$I_D = \frac12\,\beta\,V_{ov}^2, \qquad g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov}, \qquad r_O = \frac{1}{\lambda I_D} = \frac{1}{\lambda\cdot\tfrac12\beta V_{ov}^2} = \frac{2}{\lambda\beta V_{ov}^2} .$$

因此 $g_m$ 随过驱动电压**线性**增大，$I_D$ 按**平方**增大，而 $r_O$ **按 $1/V_{ov}^2$ 减小**。

### 第 2 步 — 本征增益

约去 $\beta$ 和一个 $V_{ov}$ 因子：

$$g_mr_O = \beta V_{ov}\cdot\frac{2}{\lambda\beta V_{ov}^2} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

提高 $V_{GS}$ 时，$g_m$ 与过驱动电压成正比地增大，而输出电导（output conductance）$1/r_O = \lambda I_D$ 却与过驱动电压的**平方**成正比地增大，因此二者之积按 $1/V_{ov}$ 减小。

这与保持 $I_D$ 恒定、调节 $W$ 时得到的表达式完全相同：对任何服从平方律的器件，$g_mr_O = (2I_D/V_{ov})\cdot1/(\lambda I_D) = 2/(\lambda V_{ov})$，它只取决于过驱动电压（以及 $\lambda$），而与产生这一过驱动电压的 $W$ 和 $I_D$ 的具体组合无关。

### 第 3 步 — 曲线随 $V_{GS}$ 变化的形状

- **单调下降的双曲线**，$g_mr_O\cdot(V_{GS} - V_{TH}) = 2/\lambda$ 为常数。
- 在 $V_{GS} = V_{TH}$ 处有**竖直渐近线**（在平方律模型中）；$V_{GS}$ 很大时有**水平渐近线** $g_mr_O \to 0$。
- **过驱动电压每增大一倍，增益减半。**

**数值示例**：取 $\lambda = 0.1\ \mathrm{V^{-1}}$，并为了展示各个因子，取 $\beta = 10\ \mathrm{mA/V^2}$。在 $V_{ov} = 0.2$ V 时：

$$
\begin{aligned}
I_D &= \tfrac12(10\ \mathrm{mA/V^2})(0.2\ \mathrm{V})^2 = 0.2\ \mathrm{mA},\\
g_m &= (10\ \mathrm{mA/V^2})(0.2\ \mathrm{V}) = 2\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.2\ \mathrm{mA})} = 50\ \mathrm{k}\Omega,\\
g_mr_O &= (2\ \mathrm{mS})(50\ \mathrm{k}\Omega) = 100 = \frac{2}{(0.1)(0.2)}.\ \checkmark
\end{aligned}
$$

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.5 | 1.0 |
|---|---|---|---|---|
| $I_D$ (mA) | 0.05 | 0.2 | 1.25 | 5 |
| $g_m$ (mS) | 1 | 2 | 5 | 10 |
| $r_O$ (kΩ) | 200 | 50 | 8 | 2 |
| $g_mr_O$ | 200 | 100 | 40 | 20 |

在此范围内，$g_m$ 增大到原来的十倍，而 $r_O$ 降为原来的百分之一，因此增益降为原来的十分之一。

### 第 4 步 — 阈值附近的特性

在 $V_{TH}$ 附近，器件脱离强反型（strong inversion）。在弱反型区，$g_m = I_D/(\zeta V_T)$，其中 $\zeta \approx 1.5$ 为亚阈值斜率因子（subthreshold slope factor），$V_T \approx 26$ mV 为热电压（thermal voltage）。因此，结合 $r_O = 1/(\lambda I_D)$ 可得：

$$g_mr_O \approx \frac{1}{\lambda\zeta V_T} \approx \frac{1}{(0.1)(1.5)(0.026)} \approx 256 .$$

实际曲线在该值处趋于平缓，而不会发散；平方律双曲线在 $V_{ov} \approx 2\zeta V_T \approx 78$ mV 处达到这一数值。此时电流很小，因而速度也很低。

### 结果

$W$ 和 $L$ 固定时，$g_m = \beta(V_{GS} - V_{TH})$ 线性增大，而 $r_O = 2/[\lambda\beta(V_{GS} - V_{TH})^2]$ 按平方关系减小，因此

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})},$$

它随 $V_{GS}$ 变化的曲线是一条单调下降的双曲线，在 $V_{GS} = V_{TH}$ 处有竖直渐近线，与漏极电流恒定时的曲线相同（例如，当 $\lambda = 0.1\ \mathrm{V^{-1}}$ 时，过驱动电压为 0.2、0.5 和 1 V 时增益分别为 100、40 和 20）。实际上，在阈值附近，弱反型效应将其限制在 $1/(\lambda\zeta V_T)$ 左右。

**常见错误。** 因为 $g_m$ 增大，就断定本征增益随 $V_{GS}$ 增大。实际上电流增大得更快（按 $V_{ov}^2$ 增大），$r_O = 1/(\lambda I_D)$ 相应减小，因此二者之积是减小的。

**常见错误。** 认为 $W$ 固定时 $r_O$ 不变。宽度固定时，漏极电流随 $V_{GS}$ 变化，$r_O$ 也随之变化；只有在电流恒定时，$r_O$ 才保持不变。
