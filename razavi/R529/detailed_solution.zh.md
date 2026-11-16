# 详细步骤 - R529

**思路。** 用主极点 $\omega_{p1}$（远低于增益交点，贡献 −90°）和输出极点 $\omega_{p2}$ 来模拟 $\beta H$。45° 的设计确定了 $\omega_T = \beta A_0\omega_{p1}$ 与 $\omega_{p2}$ 的相对关系。$C_L$ 加倍使 $\omega_{p2}$ 减半，但主极点和 $\omega_T$ 不变；求出新的增益交点以及该处的相位。

### 第 1 步 — 环路增益（loop gain）模型以及 $C_L$ 影响什么

$$\beta H(s) = \frac{\beta A_0}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)} .$$

在密勒补偿的两级运放中，输出极点为 $\omega_{p2} \approx g_{m2}/C_L$（$C_L$ 在输出节点电容中占主导），因此 $C_L$ 加倍会使 $\omega_{p2}$ **减半**。主极点由第一级输出端经密勒倍增的 $C_C$ 决定，与 $C_L$ 无关，$A_0$ 和 $\beta$ 也是如此；因此 $|\beta H|$ 的单极点渐近线达到 1 的频率 $\omega_T \equiv \beta A_0\omega_{p1}$ 保持不变。在远高于 $\omega_{p1}$ 的频率处，

$$|\beta H(j\omega)| \approx \frac{\omega_T}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}},\qquad \angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}} ,$$

而 $\mathrm{PM} = 180^\circ + \angle\beta H$ 在增益交点 $\omega_c$ 处取值，该处 $|\beta H| = 1$。

### 第 2 步 — 原来的 45° 设计

增益交点位于 $\omega_c = \omega_{p2}$ 时：

$$\angle\beta H(j\omega_{p2}) = -90^\circ - \tan^{-1}1 = -135^\circ \quad\Longrightarrow\quad \mathrm{PM} = 45^\circ. \ \checkmark$$

幅值条件确定了 $\omega_T$：

$$|\beta H(j\omega_{p2})| = \frac{\omega_T}{\omega_{p2}\sqrt{1 + 1}} = 1 \quad\Longrightarrow\quad \omega_T = \sqrt2\,\omega_{p2} .$$

### 第 3 步 — $C_L$ 加倍后：对损失的快速上限估计

新的输出极点为 $\omega'_{p2} = \omega_{p2}/2$。如果增益交点仍停留在原来的 $\omega_{p2}$，该处的相位将为

$$-90^\circ - \tan^{-1}\frac{\omega_{p2}}{\omega_{p2}/2} = -90^\circ - \tan^{-1}2 = -90^\circ - 63.4^\circ = -153.4^\circ,$$

得到 $\mathrm{PM} \approx 26.6^\circ$，损失约 18°。这高估了损失：降低的极点同样会**减小幅值**，使 $\omega_{p2}$ 处的 $|\beta H| = \sqrt2/\sqrt{1 + 2^2} = \sqrt2/\sqrt5 = 0.63$，因此增益交点会下移到相位滞后较小的地方。

### 第 4 步 — 新的增益交点频率

利用 $\omega_T = \sqrt2\,\omega_{p2}$、新极点 $\omega_{p2}/2$，并令 $x = \omega_c/\omega_{p2}$：

$$\frac{\sqrt2\,\omega_{p2}}{\omega_c\sqrt{1 + \left(\dfrac{2\omega_c}{\omega_{p2}}\right)^2}} = 1 \quad\Longrightarrow\quad x\sqrt{1 + 4x^2} = \sqrt2
\quad\Longrightarrow\quad 4x^4 + x^2 - 2 = 0 .$$

这个关于 $x^2$ 的二次方程的正根为

$$x^2 = \frac{-1 + \sqrt{1 + 32}}{8} = \frac{-1 + 5.745}{8} = 0.593,\qquad x = 0.770 .$$

因此 $\omega_c \approx 0.77\,\omega_{p2}$。验算：$0.770\sqrt{1 + 4(0.593)} = 0.770\times1.837 = 1.414 = \sqrt2$。✓

### 第 5 步 — 新的相位裕度

相对于**新**极点 $\omega_{p2}/2$：

$$\angle\beta H(j\omega_c) = -90^\circ - \tan^{-1}\frac{0.770\,\omega_{p2}}{\omega_{p2}/2} = -90^\circ - \tan^{-1}1.540 = -90^\circ - 57.0^\circ = -147.0^\circ ,$$

$$\mathrm{PM}_{new} = 180^\circ - 147.0^\circ \approx 33^\circ .$$

**恶化量：** $45^\circ - 33^\circ \approx 12^\circ$。

| | 输出极点 | 增益交点 $\omega_c$ | PM |
|---|---|---|---|
| 原设计 | $\omega_{p2}$ | $\omega_{p2}$ | 45° |
| $C_L$ 加倍（精确双极点） | $\omega_{p2}/2$ | $0.77\,\omega_{p2}$ | ≈ 33° |
| $C_L$ 加倍（增益交点保持在 $\omega_{p2}$） | $\omega_{p2}/2$ | $\omega_{p2}$（假设） | ≈ 26.6° |

如果把“$|\beta H|$ 在 $\omega_{p2}$ 处降到单位增益”理解为在直线渐近线上读取（$\omega_T = \omega_{p2}$），同样的方法给出原 PM 为 51.8°，新 PM 为 38.7°：同样损失约 13°。每一种自洽的理解都给出约 12–13° 的恶化（若采用更粗略的固定增益交点估计，则为 18°）。

### 结果

$C_L$ 加倍使输出极点减半（$\omega_{p2} \approx g_{m2}/C_L$），而主极点和增益渐近线 $\omega_T/\omega$（$\omega_T = \beta A_0\omega_{p1} = \sqrt2\,\omega_{p2}$）保持不变。增益交点下移到 $\omega_c \approx 0.77\,\omega_{p2}$，该处的相位为 $-90^\circ - \tan^{-1}(1.54) \approx -147^\circ$。因此

$$\mathrm{PM}: 45^\circ \rightarrow \approx 33^\circ,\quad \text{a degradation of about } 12^\circ .$$

一种更快的估计是把增益交点保持在原来的 $\omega_{p2}$，得到 $\mathrm{PM} = 90^\circ - \tan^{-1}2 \approx 26.6^\circ$（损失 ≈ 18°）；由于降低的极点同样会把增益交点拉低，这一估计夸大了损失。

**常见错误。** 以为主极点也随 $C_L$ 移动，因而 PM 保持在 45°。采用密勒补偿时，主极点由第一级输出端的 $C_C$ 决定；只有输出极点按 $1/C_L$ 变化。

**常见错误。** 把输出极点的移动方向弄反。负载电容越大，输出节点就越**慢**，因此 $\omega_{p2}$ 减半，而不是加倍。

**常见错误。** 声称环路会变得不稳定。双极点环路的相位永远达不到 −180°，因此 PM 始终为正（≈ 33°）；响应只是振铃更明显。
