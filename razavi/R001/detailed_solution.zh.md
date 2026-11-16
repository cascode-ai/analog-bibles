# 详细步骤 - R001

**思路。** 源极与衬底相连，因此没有体效应；$|V_{DS}| = 3$ V 使两个器件在整个扫描范围内都保持饱和，所以每条曲线都是平方律饱和电流 $I_D = \tfrac12\mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)^2$，逐点计算即可。

### 第 1 步 — 阈值电压与工作区

两个器件的 $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$，这里把 $L = 0.5\ \mu$m 当作有效沟道长度。源极与衬底相连，因此 $V_{SB} = 0$，阈值电压保持为

$$V_{TH,n} = V_{TH0,n} = 0.7\ \mathrm{V}, \qquad |V_{TH,p}| = |V_{TH0,p}| = 0.8\ \mathrm{V}.$$

在阈值以下，平方律模型给出 $I_D = 0$（忽略很小的亚阈值电流）。在阈值以上，最大的过驱动电压（overdrive voltage）出现在 $|V_{GS}| = 3$ V 处：

$$
\begin{aligned}
\text{NFET:}\quad V_{ov,\max} &= 3\ \mathrm{V} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V} < 3\ \mathrm{V} = |V_{DS}|,\\
\text{PFET:}\quad V_{ov,\max} &= 3\ \mathrm{V} - 0.8\ \mathrm{V} = 2.2\ \mathrm{V} < 3\ \mathrm{V} = |V_{DS}|.
\end{aligned}
$$

所以**两个器件只要导通就处于饱和区**，曲线是抛物线，而不是直线。

### 第 2 步 — 饱和电流公式

$$|I_D| = \frac12\,\mu C_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2\left(1 + \lambda|V_{DS}|\right).$$

由于 $|V_{DS}|$ 固定，沟道长度调制（CLM）只是把每条曲线整体乘以一个常数，因此下面同时给出不计入和计入它的结果。前置系数和 CLM 因子分别为

$$
\begin{aligned}
\text{NFET:}\quad \frac12\,\mu_nC_{ox}\frac{W}{L} &= \frac12\,(134\ \mu\mathrm{A/V^2})(100) = 6700\ \mu\mathrm{A/V^2} = 6.70\ \mathrm{mA/V^2},\\
\text{PFET:}\quad \frac12\,\mu_pC_{ox}\frac{W}{L} &= \frac12\,(38.4\ \mu\mathrm{A/V^2})(100) = 1920\ \mu\mathrm{A/V^2} = 1.92\ \mathrm{mA/V^2},\\
\text{NFET:}\quad 1 + \lambda_n|V_{DS}| &= 1 + (0.1\ \mathrm{V^{-1}})(3\ \mathrm{V}) = 1.3,\\
\text{PFET:}\quad 1 + \lambda_p|V_{DS}| &= 1 + (0.2\ \mathrm{V^{-1}})(3\ \mathrm{V}) = 1.6.
\end{aligned}
$$

因此两条曲线为

$$
\begin{aligned}
I_{D,n} &= 6.70\ \mathrm{mA/V^2}\,(V_{GS} - 0.7\ \mathrm{V})^2 \quad (\times 1.3 \text{ with CLM}), && V_{GS} > 0.7\ \mathrm{V},\\
|I_{D,p}| &= 1.92\ \mathrm{mA/V^2}\,(|V_{GS}| - 0.8\ \mathrm{V})^2 \quad (\times 1.6 \text{ with CLM}), && |V_{GS}| > 0.8\ \mathrm{V},
\end{aligned}
$$

在各自的阈值以下则为零。

### 第 3 步 — 逐点计算 NFET 电流

依次求出过驱动电压及其平方，再乘以 6.70 mA/V²：

$$
\begin{aligned}
V_{GS} = 1.0\ \mathrm{V}:&\quad (0.3\ \mathrm{V})^2 = 0.09\ \mathrm{V^2}, & I_D &= 6.70 \times 0.09 = 0.603\ \mathrm{mA},\\
V_{GS} = 1.5\ \mathrm{V}:&\quad (0.8\ \mathrm{V})^2 = 0.64\ \mathrm{V^2}, & I_D &= 6.70 \times 0.64 = 4.29\ \mathrm{mA},\\
V_{GS} = 2.0\ \mathrm{V}:&\quad (1.3\ \mathrm{V})^2 = 1.69\ \mathrm{V^2}, & I_D &= 6.70 \times 1.69 = 11.3\ \mathrm{mA},\\
V_{GS} = 2.5\ \mathrm{V}:&\quad (1.8\ \mathrm{V})^2 = 3.24\ \mathrm{V^2}, & I_D &= 6.70 \times 3.24 = 21.7\ \mathrm{mA},\\
V_{GS} = 3.0\ \mathrm{V}:&\quad (2.3\ \mathrm{V})^2 = 5.29\ \mathrm{V^2}, & I_D &= 6.70 \times 5.29 = 35.4\ \mathrm{mA}.
\end{aligned}
$$

计入 CLM（×1.3）后：0.78、5.57、14.7、28.2 和 46.1 mA。

### 第 4 步 — 逐点计算 PFET 电流

步骤相同，取 $|V_{TH}| = 0.8$ V 和 1.92 mA/V²：

$$
\begin{aligned}
|V_{GS}| = 1.0\ \mathrm{V}:&\quad (0.2\ \mathrm{V})^2 = 0.04\ \mathrm{V^2}, & |I_D| &= 1.92 \times 0.04 = 0.077\ \mathrm{mA},\\
|V_{GS}| = 1.5\ \mathrm{V}:&\quad (0.7\ \mathrm{V})^2 = 0.49\ \mathrm{V^2}, & |I_D| &= 1.92 \times 0.49 = 0.941\ \mathrm{mA},\\
|V_{GS}| = 2.0\ \mathrm{V}:&\quad (1.2\ \mathrm{V})^2 = 1.44\ \mathrm{V^2}, & |I_D| &= 1.92 \times 1.44 = 2.76\ \mathrm{mA},\\
|V_{GS}| = 2.5\ \mathrm{V}:&\quad (1.7\ \mathrm{V})^2 = 2.89\ \mathrm{V^2}, & |I_D| &= 1.92 \times 2.89 = 5.55\ \mathrm{mA},\\
|V_{GS}| = 3.0\ \mathrm{V}:&\quad (2.2\ \mathrm{V})^2 = 4.84\ \mathrm{V^2}, & |I_D| &= 1.92 \times 4.84 = 9.29\ \mathrm{mA}.
\end{aligned}
$$

计入 CLM（×1.6）后：0.12、1.51、4.42、8.88 和 14.9 mA。按符号约定，PFET 的漏极电流为负（电流从漏极流出）；作图时取其绝对值。

### 第 5 步 — 作图

| $\lvert V_{GS}\rvert$（V） | NFET $I_D$（mA） | NFET，计入 CLM（mA） | PFET $\lvert I_D\rvert$（mA） | PFET，计入 CLM（mA） |
|---|---|---|---|---|
| 0 – 0.7 | 0 | 0 | 0 | 0 |
| 0.8 | 0.067 | 0.087 | 0 | 0 |
| 1.0 | 0.603 | 0.784 | 0.077 | 0.123 |
| 1.5 | 4.29 | 5.57 | 0.941 | 1.51 |
| 2.0 | 11.3 | 14.7 | 2.76 | 4.42 |
| 2.5 | 21.7 | 28.2 | 5.55 | 8.88 |
| 3.0 | 35.4 | 46.1 | 9.29 | 14.9 |

- 达到阈值电压之前**恒为零**：NFET 为 0.7 V，PFET 为 0.8 V。
- 阈值以上为**抛物线**，$I_D \propto (|V_{GS}| - |V_{TH}|)^2$：每条曲线以零斜率离开横轴，并且直到 3 V 一直是向上凹（concave up）的。
- **斜率** $g_m = dI_D/d|V_{GS}| = \mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)$，随过驱动电压线性增大。在 $|V_{GS}| = 3$ V 时（不计 CLM）：
$$
\begin{aligned}
g_{m,n} &= (134\ \mu\mathrm{A/V^2})(100)(2.3\ \mathrm{V}) = 30.8\ \mathrm{mA/V},\\
g_{m,p} &= (38.4\ \mu\mathrm{A/V^2})(100)(2.2\ \mathrm{V}) = 8.45\ \mathrm{mA/V}.
\end{aligned}
$$

在最大栅极驱动下，两电流之比为

$$\frac{I_{D,n}}{|I_{D,p}|} = \frac{35.4\ \mathrm{mA}}{9.29\ \mathrm{mA}} = 3.8 \quad\text{(no CLM)}, \qquad \frac{46.1\ \mathrm{mA}}{14.9\ \mathrm{mA}} = 3.1 \quad\text{(with CLM)}.$$

这一差距主要来自迁移率（mobility）之比 $\mu_nC_{ox}/\mu_pC_{ox} = 134/38.4 = 3.49$；PFET 的阈值电压较大，使差距略为拉大；计入 CLM 时，PFET 较大的 $\lambda$ 又使差距稍有缩小。另外，在 $L = 0.5\ \mu$m 的实际器件中，过驱动电压较大时，速度饱和（velocity saturation）会使曲线上升得比抛物线慢；但本题要求使用的是平方律模型。

### 结果

两条曲线在阈值以下均为零，在阈值以上均为**平方律抛物线**；由于 $|V_{DS}| = 3$ V 大于最大过驱动电压（2.3 V 和 2.2 V），两个器件**在整个扫描范围内都保持饱和**。

- NFET：$I_D = 6.70\ \mathrm{mA/V^2}\,(V_{GS} - 0.7\ \mathrm{V})^2$，在 $V_{GS} = 3$ V 时达到 **≈ 35.4 mA**（计入因子 $1 + \lambda|V_{DS}| = 1.3$ 时为 **≈ 46.1 mA**）。
- PFET：$|I_D| = 1.92\ \mathrm{mA/V^2}\,(|V_{GS}| - 0.8\ \mathrm{V})^2$，在 $|V_{GS}| = 3$ V 时达到 **≈ 9.3 mA**（计入 $1 + \lambda|V_{DS}| = 1.6$ 时为 **≈ 14.9 mA**）。
- 在最大栅极驱动下，NFET 的电流约为 PFET 的 3.8 倍（计入 CLM 时为 3.1 倍）。

**常见错误。** 使用线性区（triode region）公式，或者把曲线画成直线。$|V_{DS}| = 3$ V 时漏极电压总是大于过驱动电压，因此两个器件都处于饱和区，$I_D$ 随 $|V_{GS}| - |V_{TH}|$ 的**平方**增长。

**常见错误。** 对 PFET 也使用 $\mu_nC_{ox}$，这样两条曲线只相差一个阈值平移，而不是相差约 3.5–4 倍；或者漏掉因子 $\tfrac12$，使每个电流都加倍。

**常见错误。** 把沟道长度调制当作除数，写成 $I_D/(1 + \lambda|V_{DS}|)$，或者写成不含电压的 $(1 + \lambda)$。$|V_{DS}|$ 越大，饱和电流**越大**，因此该因子应当相乘，并且必须包含 $|V_{DS}|$（本题中分别为 1.3 和 1.6）。
