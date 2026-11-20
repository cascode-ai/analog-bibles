# 详细步骤 - R003

先将 $g_m$、$r_O$ 用电流表示，再代入 $\lambda$ 与长度的关系。令 $I=|I_D|>0$，使推导适用于两种器件极性。

### 第 1 步 — 从饱和区模型推导增益

在强反型、$V_{ov}=|V_{GS}|-|V_{TH}|>0$ 且 $|V_{DS}|\ge V_{ov}$ 时，电流的平方律主项为

$$
I=\tfrac12\beta V_{ov}^2,\quad \beta=\mu C_{ox}(W/L),\quad
V_{ov}=\sqrt{\frac{2I}{\beta}}.
$$
$$
g_m=\frac{\partial I}{\partial V_{ov}}=\beta V_{ov}=\sqrt{2\beta I}.
$$

记未调制电流为 $I_0=\tfrac12\beta V_{ov}^2$，求输出电导时保留一阶 CLM：固定栅压，对 $I_0(1+\lambda|V_{DS}|)$ 求导得 $g_o=\lambda I_0$。当 $\lambda|V_{DS}|\ll1$ 时，$I_0\approx I$，故

$$
g_o\approx\lambda I,\qquad r_O\approx\frac1{\lambda I},\qquad
g_mr_O\approx\frac{\sqrt{2\beta I}}{\lambda I}
=\frac1\lambda\sqrt{\frac{2\mu C_{ox}(W/L)}{I}}
=\frac2{\lambda V_{ov}}.
$$

器件尺寸固定时，$g_m\propto\sqrt I$、$r_O\propto1/I$，因此增益按 $I^{-1/2}$ 下降。

### 第 2 步 — 明确长度变化时的固定量

代入题给的长度关系：

$$
\lambda=\lambda_0\frac{L_0}{L},\qquad
g_mr_O\approx\frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}W}{LI}}
=\frac{\sqrt{2\mu C_{ox}WL/I}}{\lambda_0L_0}.
$$

$W$ 固定时，$g_mr_O\propto\sqrt{L/I}$，$L$ 加倍使增益增大到 $\sqrt2$ 倍。若固定宽长比 $W/L$，则
$$
g_mr_O\approx\frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}(W/L)}{I}}\propto\frac L{\sqrt I},
$$
$L$ 加倍使增益加倍。两类曲线均随电流下降，但宽度的变化方式不同，导致长度标度不同。

### 第 3 步 — 固定宽度的数值曲线

取 $W=50\ \mu\mathrm m$、$\mu_nC_{ox}=134\ \mu\mathrm{A/V^2}$，在 $L_0=0.5\ \mu\mathrm m$ 时 $\lambda_0=0.1\ \mathrm{V^{-1}}$。以 $L=0.5\ \mu\mathrm m$、$I=0.5$ mA 为例：

$$
\frac WL=100,\quad\lambda=0.1\ \mathrm{V^{-1}},\quad
 g_mr_O\approx\frac1{0.1\ \mathrm{V^{-1}}}
 \sqrt{\frac{2(134\ \mu\mathrm{A/V^2})(100)}{0.5\ \mathrm{mA}}}
 =(10\ \mathrm V)\sqrt{53.6\ \mathrm{V^{-2}}}=73.2.
$$

其余数值由同一公式或 $\sqrt{L/I}$ 标度求得：

| $L$ (µm) | $W/L$ | $\lambda$ (V⁻¹) | 0.1 mA 处增益 | 0.5 mA 处 | 1 mA 处 |
|---|---|---|---|---|---|
| 0.5 | 100 | 0.100 | 164 | 73.2 | 51.8 |
| 1 | 50 | 0.050 | 232 | 104 | 73.2 |
| 2 | 25 | 0.025 | 327 | 146 | 104 |

![固定宽度的本征增益曲线，标出 0.5 mA 处数值](/q/R003/solution-curves.zh.svg)

图示区间为 0.05–2 mA，并保持饱和工作。该模型内没有有限电流的分界点。不能向 $I=0$ 外推：进入亚阈值区后强反型平方律不再适用，数学上的发散不代表实际增益无限大。
