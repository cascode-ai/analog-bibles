# 详细步骤 - R716

**思路。** 尺寸相同的铜使电阻率减半，因而使每一层的方块电阻减半，而电容（只由几何形状和介质决定）保持不变。按最小宽度重新计算每一层中 1000 µm 导线的电阻、电容和分布式线延迟 $T_D = \tfrac12R_{wire}C_{wire}$，并选出延迟最小者。

### 第 1 步 — 新的方块电阻与延迟公式

由 $R_\square = \rho/t$，在厚度不变且 $\rho_{Cu} \approx \tfrac12\rho_{Al}$ 时，$R_{\square,Cu} = \tfrac12R_{\square,Al}$：

- 金属 1–3：$\tfrac12(80\ \mathrm{m}\Omega/\square) = 40\ \mathrm{m}\Omega/\square$；
- 金属 4：$\tfrac12(40\ \mathrm{m}\Omega/\square) = 20\ \mathrm{m}\Omega/\square$。

对于长 $L = 1000\ \mu$m、宽 $W$ 的导线，$R_{wire} = R_\square L/W$，$C_{wire} = (C_{pp}W + C_f)L$（边缘电容的数值是单位长度的值，两侧合计），分布式线的 Elmore 延迟为 $T_D = \tfrac12R_{wire}C_{wire}$。

### 第 2 步 — 金属 1（$W = 0.35\ \mu$m，40 mΩ/□）

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.35} = 114.3\ \Omega,\\
C &= (30\times0.35 + 80)\ \mathrm{aF/\mu m}\times1000\ \mu\mathrm{m} = (10.5 + 80)\ \mathrm{fF} = 90.5\ \mathrm{fF},\\
T_D &= \tfrac12(114.3\ \Omega)(90.5\ \mathrm{fF}) = 5.17\ \mathrm{ps}.
\end{aligned}
$$

### 第 3 步 — 金属 2（$W = 0.45\ \mu$m，40 mΩ/□）

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.45} = 88.9\ \Omega,\\
C &= (15\times0.45 + 50)\ \mathrm{fF} = (6.75 + 50)\ \mathrm{fF} = 56.75\ \mathrm{fF},\\
T_D &= \tfrac12(88.9\ \Omega)(56.75\ \mathrm{fF}) = 2.52\ \mathrm{ps}.
\end{aligned}
$$

### 第 4 步 — 金属 3（$W = 0.50\ \mu$m，40 mΩ/□）

$$
\begin{aligned}
R &= 0.04\ \Omega\times\frac{1000}{0.5} = 80\ \Omega,\\
C &= (9.0\times0.5 + 40)\ \mathrm{fF} = (4.5 + 40)\ \mathrm{fF} = 44.5\ \mathrm{fF},\\
T_D &= \tfrac12(80\ \Omega)(44.5\ \mathrm{fF}) = 1.78\ \mathrm{ps}.
\end{aligned}
$$

### 第 5 步 — 金属 4（$W = 0.60\ \mu$m，20 mΩ/□）

$$
\begin{aligned}
R &= 0.02\ \Omega\times\frac{1000}{0.6} = 33.3\ \Omega,\\
C &= (7.0\times0.6 + 30)\ \mathrm{fF} = (4.2 + 30)\ \mathrm{fF} = 34.2\ \mathrm{fF},\\
T_D &= \tfrac12(33.3\ \Omega)(34.2\ \mathrm{fF}) = 0.57\ \mathrm{ps}.
\end{aligned}
$$

### 第 6 步 — 比较

| 层 | $R$ (Cu) | $C$ | $T_D$ (Cu) | $T_D$（Al，供参考） |
|---|---|---|---|---|
| 金属 1 | 114.3 Ω | 90.5 fF | 5.2 ps | 10.3 ps |
| 金属 2 | 88.9 Ω | 56.8 fF | 2.5 ps | 5.0 ps |
| 金属 3 | 80.0 Ω | 44.5 fF | 1.8 ps | 3.6 ps |
| 金属 4 | 33.3 Ω | 34.2 fF | **0.57 ps** | 1.14 ps |

**金属 4 仍然给出最小延迟。** 铜使每一层的电阻都乘以相同的 $\tfrac12$，而每个电容都不变，因此在

$$T_D = \tfrac12R_\square L^2\left(C_{pp} + \frac{C_f}{W}\right)$$

中每个延迟都恰好减半，排序不可能改变。金属 4 仍然是单位长度电阻最小（薄膜最厚、最小宽度最宽）且单位长度电容也最小（离衬底最远）的层。

### 结果

**金属 4** 仍是最佳选择。采用铜后方块电阻减半（金属 1–3 为 40 mΩ/□，金属 4 为 20 mΩ/□），电容不变，因此延迟变为约 **0.57 ps**（金属 4）、1.8 ps（金属 3）、2.5 ps（金属 2）和 5.2 ps（金属 1）：都是铝互连时的一半，排序相同。

**常见错误。** 以为电容随金属材料而变化。导线电容取决于几何形状和介质，而与导体的电阻率无关；铜只改变 $R$。

**常见错误。** 认为铜的电阻较低可能会使较低的层更有利。每一层的改善倍数都相同，因此排序保持不变。

**常见错误。** 用 $W/L$ 而不是 $L/W$ 计算方块数，这会使长导线看起来几乎没有电阻。
