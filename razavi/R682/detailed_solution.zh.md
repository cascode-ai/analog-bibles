# 详细步骤 - R682

**思路。** 该电路是一个共源级（common-source stage，CS）$M_1$，负载为二极管连接（diode-connected）的 PMOS $M_2$。用 $g_{m1}$ 和 $g_{m2}$ 表示增益和输入参考热噪声，并把恒定偏置电流下的每个 $g_m$ 写成 $\sqrt{2\mu C_{ox}(W/L)I}$；每个工艺角只是对 $\mu_nC_{ox}$ 和/或 $\mu_pC_{ox}$ 进行缩放。记号：工艺角 FF、SS、FS（快 NMOS、慢 PMOS）和 SF（慢 NMOS、快 PMOS）。

### 第 1 步 — 恒定电流下的跨导（transconductance）

两个晶体管流过相同的恒定电流 $I$，因此令 $K_n = \mu_nC_{ox}(W/L)_1$，$K_p = \mu_pC_{ox}(W/L)_2$，有

$$g_{m1} = \sqrt{2K_nI} \propto \sqrt{\mu_nC_{ox}}, \qquad g_{m2} = \sqrt{2K_pI} \propto \sqrt{\mu_pC_{ox}} .$$

输出电阻 $r_O = 1/(\lambda I)$ 不变，因为 $\lambda$ 和 $I$ 都不变。在快工艺角下，器件以更小的过驱动电压流过相同的电流，$g_m$ 按 $\mu C_{ox}$ 之比的平方根增大。

### 第 2 步 — 电压增益

二极管连接的 $M_2$ 在输出端呈现 $1/g_{m2}$（与 $r_{O2}$ 并联），因此

$$A_v = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right) \approx -\frac{g_{m1}}{g_{m2}},$$

因为 $1/g_{m2} \ll r_{O1}, r_{O2}$。由第 1 步：

$$|A_v| = \frac{\sqrt{2K_nI}}{\sqrt{2K_pI}} = \sqrt{\frac{K_n}{K_p}} = \sqrt{\frac{\mu_nC_{ox}(W/L)_1}{\mu_pC_{ox}(W/L)_2}} .$$

电流被消去，增益取决于 NMOS 与 PMOS 的 $\mu C_{ox}$ 之**比**：

- **FF、SS：** 两者朝同一方向变化，因此增益基本保持标称值（若相对变化量相等，则完全不变）。
- **FS：** $K_n$ 增大而 $K_p$ 减小：**增益最高**。
- **SF：** $K_n$ 减小而 $K_p$ 增大：**增益最低**。

### 第 3 步 — 输入参考热噪声

每个晶体管的沟道噪声是接在其漏极与源极之间（即输出节点与交流地之间）的电流 $\overline{I_n^2} = 4kT\gamma g_m$（单位带宽内，两者的 $\gamma$ 相同）；在模型中，两者都画成从输出节点流向地（方向不影响噪声功率）。输出节点的电阻为 $R_{out} \approx 1/g_{m2}$。

<!-- diagram: diagram-01.cir -->

两个噪声源互不相关，因此其功率相加：

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

除以增益的平方 $(g_{m1}R_{out})^2$：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma\,(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma\,g_{m2}}{g_{m1}^2}\\
&= \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{g_{m2}}{g_{m1}}\right) = \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{1}{|A_v|}\right).
\end{aligned}
$$

在恒定电流下，$1/g_{m1} \propto 1/\sqrt{\mu_nC_{ox}}$，$g_{m2}/g_{m1} \propto \sqrt{\mu_pC_{ox}/\mu_nC_{ox}}$：

- **FF：** $g_{m1}$ 和 $g_{m2}$ 按相同因子增大（变化量相等）；比值不变而 $1/g_{m1}$ 减小。噪声功率**低于**标称值，$\propto 1/\sqrt{\mu C_{ox}}$。
- **SS：** 情况相反：噪声**高于**标称值。
- **FS：** $g_{m1}$ 增大，**同时**负载项 $g_{m2}/g_{m1}$ 减小：**噪声最低**。
- **SF：** $g_{m1}$ 减小，**同时**负载项增大：**噪声最高**。

### 第 4 步 — 数值示例

设 $\mu C_{ox}$ 变化 $\pm20\ \%$（快 = 1.2×，慢 = 0.8×），标称 $|A_v| = 3$（$g_{m2}/g_{m1} = 1/3$）。以 $n$、$p$ 分别表示 NMOS 和 PMOS 的倍乘因子，则增益为 $3\sqrt{n/p}$，相对于标称值的噪声功率为

$$\frac{(1/\sqrt n)\,[1 + \frac13\sqrt{p/n}]}{1 + \frac13}.$$

| 工艺角 | $n$, $p$ | $\lvert A_v\rvert$ | 噪声功率（相对值） |
|---|---|---|---|
| 标称 | 1, 1 | 3.00 | 1.000 |
| FF | 1.2, 1.2 | 3.00 | 0.913（−0.40 dB） |
| SS | 0.8, 0.8 | 3.00 | 1.118（+0.48 dB） |
| FS | 1.2, 0.8 | 3.67 | 0.871（−0.60 dB） |
| SF | 0.8, 1.2 | 2.45 | 1.181（+0.72 dB） |

例如，在 FS 下：增益 $= 3\sqrt{1.2/0.8} = 3\times1.225 = 3.67$；噪声 $= (1/\sqrt{1.2})(1 + \tfrac13\sqrt{0.8/1.2})/(4/3) = 0.913\times1.272/1.333 = 0.871$。

噪声的排序为 **FS < FF < 标称 < SS < SF**。（如果 FF 或 SS 下 NMOS 与 PMOS 的变化量相差很大，这些工艺角会部分地表现得像 FS 或 SF，其顺序可能改变；但 FS 和 SF 始终是两个极端。）

**副作用。** 在恒定电流下，快工艺角的过驱动电压变小，因此输出直流电平 $V_{DD} - |V_{GS2}| = V_{DD} - |V_{TH2}| - V_{ov2}$ 在快 PMOS 工艺角下**升高**，在慢 PMOS 工艺角下**降低**，这会影响 $M_1$ 以及下一级的电压余度（headroom）。

### 结果

- **增益：** 在恒定电流下，$A_v \approx -g_{m1}/g_{m2} = -\sqrt{\mu_nC_{ox}(W/L)_1/[\mu_pC_{ox}(W/L)_2]}$。它在 FF 和 SS 下基本保持标称值（两者一起变化），在 FS 下最高，在 SF 下最低。
- **输入参考噪声：** $\overline{V_{n,in}^2} = \dfrac{4kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m2}}{g_{m1}}\right)$，其中 $g_{m1} \propto \sqrt{\mu_nC_{ox}}$，$g_{m2}/g_{m1} \propto \sqrt{\mu_pC_{ox}/\mu_nC_{ox}}$。FS 下最低，其次是 FF（低于标称值），然后是 SS（高于标称值），SF 下最高。

**常见错误。** 认为增益只随 $\mu_nC_{ox}$ 变化，就像电阻负载或电流源负载那样。采用二极管连接负载时，增益是两个跨导之比，当两个 $\mu C_{ox}$ 一起变化时几乎不变。

**常见错误。** 把 FS 和 SF 弄反。快 NMOS 使 $g_{m1}$ 增大（增益更高，输入噪声更低），慢 PMOS 使 $g_{m2}$ 减小（增益更高，折算到输入端的负载噪声更低）；两者都对 FS 有利。

**常见错误。** 以“较慢的器件噪声更小”为由，断定慢工艺角下噪声更低。噪声电流 $4kT\gamma g_m$ 确实减小了，但增益也减小了，而输入参考噪声 $\propto 1/g_{m1}$ 反而增大。
