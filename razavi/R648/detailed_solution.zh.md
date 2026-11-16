# 详细步骤 - R648

**思路。** 小输入时，吉尔伯特单元是一个乘法器，$V_{out} = K_mV_1V_2$，其中 $K_m$ 为其增益常数。对于两个同频正弦信号，乘积由一个只取决于相位差的直流项和一个两倍输入频率的分量组成，后者可由低通滤波器滤除。直流项是相位差的余弦函数，这就回答了线性度的问题。

### 第 1 步 — 两个正弦信号的乘积

设两个输入的角频率同为 $\omega$，幅度分别为 $A$ 和 $B$，相位差为 $\Delta\phi$：

$$V_1(t) = A\cos\omega t, \qquad V_2(t) = B\cos(\omega t + \Delta\phi),$$

$$V_{out}(t) = K_m\,V_1(t)\,V_2(t) = K_mAB\cos\omega t\,\cos(\omega t + \Delta\phi).$$

利用 $\cos a\cos b = \tfrac12[\cos(a - b) + \cos(a + b)]$，其中 $a - b = -\Delta\phi$，$a + b = 2\omega t + \Delta\phi$：

$$V_{out}(t) = \frac{K_mAB}{2}\cos\Delta\phi + \frac{K_mAB}{2}\cos(2\omega t + \Delta\phi),$$

即一个**直流项** $\tfrac12K_mAB\cos\Delta\phi$，加上一个幅度恒为 $\tfrac12K_mAB$ 的 **$2\omega$ 项**。

### 第 2 步 — 求平均：鉴相器的输出

低通滤波器的带宽远低于 $2\omega$，在锁相环（PLL）中它就是环路滤波器（loop filter）；它滤除平均值为零的 $2\omega$ 项，剩下

$$\overline{V_{out}} = \frac{K_mAB}{2}\cos\Delta\phi .$$

对于给定的幅度，它只取决于 $\Delta\phi$，因此**乘法器后接求平均就是一个鉴相器**。相位信息包含在直流分量中；$2\omega$ 分量的幅度与 $\Delta\phi$ 无关。

（若两个输入频率不同，$\omega_1 \ne \omega_2$，“直流”项就变成 $|\omega_1 - \omega_2|$ 处的拍频信号，其平均值为零；该鉴相器适用于频率相同的输入，例如处于锁定状态的环路。）

### 第 3 步 — 输入-输出特性

以 $\tfrac12K_mAB$ 归一化：

| $\Delta\phi$ | 0 | 30° | 60° | 90° | 120° | 150° | 180° |
|---|---|---|---|---|---|---|---|
| $\cos\Delta\phi$ | 1 | 0.866 | 0.5 | 0 | −0.5 | −0.866 | −1 |

它是一个以 $2\pi$ 为周期的**余弦**函数：在 $\Delta\phi = 0$ 处最大，为 $+\tfrac12K_mAB$；在 $\Delta\phi = \pm90^\circ$ 处为零；在 $180^\circ$ 处最小，为 $-\tfrac12K_mAB$。

### 第 4 步 — 它是线性的吗？

**不是。** 鉴相器增益为斜率

$$K_{PD} = \frac{d\overline{V_{out}}}{d\Delta\phi} = -\frac{K_mAB}{2}\sin\Delta\phi ,$$

它随 $\Delta\phi$ 变化：在 $\Delta\phi = \pm90^\circ$（正交）处输出过零，增益的幅值最大，为每弧度 $\tfrac12K_mAB$；在 $\Delta\phi = 0$ 和 $180^\circ$ 处增益降为零，特性曲线变平，并在这些点上改变符号。

**在正交点附近近似线性。** 令 $\Delta\phi = \pi/2 + \epsilon$，则 $\cos(\pi/2 + \epsilon) = -\sin\epsilon$，因此

$$\overline{V_{out}} = -\frac{K_mAB}{2}\sin\epsilon \approx -\frac{K_mAB}{2}\,\epsilon \quad(|\epsilon| \ll 1).$$

这一近似的误差 $(\epsilon - \sin\epsilon)/\epsilon$ 在 $\epsilon = 15^\circ$ 时约为 1.1 %，在 $\epsilon = 30^\circ$ 时约为 4.5 %（$\sin30^\circ = 0.5$，而 $\pi/6 = 0.524$），因此该鉴相器只在 $90^\circ$ 附近几十度的范围内才比较线性，这就是基于乘法器的锁相环工作在正交点附近的原因。

**与幅度有关。** 增益还与 $A$ 和 $B$ 成正比。相比之下，大摆幅驱动的吉尔伯特单元相当于异或门，其平均输出是一个斜率恒为 $V_0/\pi$ 的三角形（输出电平为 0 和 $V_0$ 时），在 0 到 $180^\circ$ 之间是线性的，且与输入幅度无关。

### 结果

取 $V_1 = A\cos\omega t$，$V_2 = B\cos(\omega t + \Delta\phi)$：

$$V_{out} = K_mV_1V_2 = \frac{K_mAB}{2}\left[\cos\Delta\phi + \cos(2\omega t + \Delta\phi)\right] \quad\Longrightarrow\quad \overline{V_{out}} = \frac{K_mAB}{2}\cos\Delta\phi$$

其中平均值是经低通滤波后得到的。平均输出只取决于相位差，因此乘法器是一个鉴相器。其特性**不是线性的**：它是余弦函数，增益 $-\tfrac12K_mAB\sin\Delta\phi$ 随 $\Delta\phi$ 变化，并在 0 和 $180^\circ$ 处为零。只有在 $\Delta\phi = 90^\circ$ 附近才近似线性，此处输出过零，增益的幅值最大（每弧度 $\tfrac12K_mAB$）；而且增益还随输入幅度成比例变化。

**常见错误。** 认为特性在整个范围内都是线性的，就像异或门的三角形特性那样。那只适用于硬开关的输入；对于小的正弦输入，乘积给出的是余弦。

**常见错误。** 在 $2\omega$ 分量中寻找相位信息，而该分量的幅度 $\tfrac12K_mAB$ 与 $\Delta\phi$ 无关。有用的输出是直流项，所以需要低通滤波器。

**常见错误。** 认为平均输出与 $\Delta\phi$ 无关，或漏掉积化和差公式中的因子 $\tfrac12$。直流项为 $\tfrac12K_mAB\cos\Delta\phi$。
