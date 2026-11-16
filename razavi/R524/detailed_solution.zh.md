# 详细步骤 - R524

**思路。** 图中给出的是 5-µm 器件的 $r_O$，因此直接在 0.25 mA 处读数。10-µm 器件相当于两个 5-µm 器件并联，每个流过一半的电流：在 0.125 mA 处读出 $r_O$，再取其一半。乘积 $r_OI_D$ 可以解释这一结果。

### 第 1 步 — 情形 $W = 5\ \mu$m：直接读图

图中的器件就是这个晶体管，端电压也相同。在 $I_D = 0.25$ mA 处，曲线恰好位于 4-kΩ 网格线上（它在 0.2 mA 处经过 4.6 kΩ，在 0.3 mA 处经过 3.5 kΩ）：

$$r_O(W = 5\ \mu\mathrm{m},\ 0.25\ \mathrm{mA}) \approx 4.0\ \mathrm{k\Omega}.$$

### 第 2 步 — 情形 $W = 10\ \mu$m：两个 5-µm 器件并联

两半共用栅极、漏极和源极，因此它们的 $V_{GS}$ 和 $V_{DS}$ 相同，电流相等：

$$I_{D,half} = \frac{0.25\ \mathrm{mA}}{2} = 0.125\ \mathrm{mA}.$$

<!-- diagram: diagram-01.cir -->

每一半都相当于图中的器件工作在 0.125 mA（此时 $V_{GS}$ 为该电流所需的较低值）。在 0.125 mA 处读图（介于 0.1 mA 处的 7.7 kΩ 和 0.15 mA 处的 5.8 kΩ 之间）：

$$r_O(W = 5\ \mu\mathrm{m},\ 0.125\ \mathrm{mA}) \approx 6.6\ \mathrm{k\Omega}.$$

两个输出电阻并联：

$$r_O(W = 10\ \mu\mathrm{m}) = r_{O,half}\parallel r_{O,half} = \frac{r_{O,half}}{2} = \frac{6.6\ \mathrm{k\Omega}}{2} = 3.3\ \mathrm{k\Omega}.$$

### 第 3 步 — 比较

$$\frac{r_O(5\ \mu\mathrm{m})}{r_O(10\ \mu\mathrm{m})} = \frac{4.0\ \mathrm{k\Omega}}{3.3\ \mathrm{k\Omega}} \approx 1.2 .$$

**5-µm 器件的输出阻抗更高**，约高 20 %。

### 第 4 步 — 原因：$r_OI_D$ 并非常数

采用固定 $\lambda$ 的长沟道模型 $r_O = 1/(\lambda I_D)$ 会预测两种宽度的 $r_O$ **相同**。而图中显示，$r_O$ 的下降**弱于**与电流成反比的关系：

$$
\begin{aligned}
r_OI_D\big|_{0.125\ \mathrm{mA}} &= 6.6\ \mathrm{k\Omega}\times0.125\ \mathrm{mA} = 0.83\ \mathrm{V} \quad(\lambda_{eff} \approx 1.2\ \mathrm{V^{-1}}),\\
r_OI_D\big|_{0.25\ \mathrm{mA}} &= 4.0\ \mathrm{k\Omega}\times0.25\ \mathrm{mA} = 1.0\ \mathrm{V} \quad(\lambda_{eff} \approx 1.0\ \mathrm{V^{-1}}).
\end{aligned}
$$

在固定宽度下，电流越大意味着过驱动电压越高；而短沟道效应，例如漏致势垒降低（drain-induced barrier lowering），即一种随 $V_{DS}$ 变化的阈值偏移，在高过驱动电压下对电流的相对影响较小。因此 5-µm 器件（电流密度更高、过驱动电压更大）的 $\lambda_{eff}$ 更小，$r_O$ 更大；10-µm 器件把电流分摊到两倍的宽度上，$r_O$ 更小。

较窄器件的代价是过驱动电压更大，因此最小 $V_{DS}$ 更大，即电压余度（headroom）更小，在相同电流下 $g_m$ 也更低，而换来的 $r_O$ 只高约 20 %。

### 结果

| 宽度 | 从图中读取的等效值 | $I_D = 0.25$ mA 时的 $r_O$ |
|---|---|---|
| $W = 5\ \mu$m | $r_O(0.25\ \mathrm{mA})$ | ≈ 4.0 kΩ |
| $W = 10\ \mu$m | $r_O(0.125\ \mathrm{mA})/2 = 6.6/2$ | ≈ 3.3 kΩ |

**$W = 5\ \mu$m 的输出阻抗更高**（≈ 4.0 kΩ 对 ≈ 3.3 kΩ，约高 20 %），因为对这个器件而言，$r_OI_D$ 随电流密度增大：每 5 µm 宽度流过 0.125 mA 时 ≈ 0.83 V，每 5 µm 宽度流过 0.25 mA 时 ≈ 1.0 V。

**常见错误。** 认为两种宽度给出相同的 $r_O$，理由是“$r_O = 1/(\lambda I_D)$ 只取决于电流”。在这种纳米级器件中，$\lambda$ 取决于过驱动电压，因此宽度很重要。

**常见错误。** 把 10-µm 器件的值取为 $r_O(0.25\ \mathrm{mA})/2 = 2$ kΩ。每个 5-µm 的一半流过 0.125 mA，因此必须先在 0.125 mA 处读图，再取一半。

**常见错误。** 读出 6.6 kΩ > 4 kΩ 后，忘了把两半并联。整个 10-µm 器件的电阻是每一半电阻的一半。
