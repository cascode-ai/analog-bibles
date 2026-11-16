# 详细步骤 - R702

**思路。** 方块电阻等于电阻率除以薄膜厚度，$R_\square = \rho/t$，因此每种材料的电阻率等于其方块电阻乘以其厚度。线宽不参与计算（线宽只影响某条具体连线单位长度的电阻）。

### 第 1 步 — 由 $\rho = R_\square\,t$ 求电阻率

利用图中的厚度（多晶硅为 100 nm，金属 1 为 150 nm），以及 $1\ \Omega\cdot\mathrm{m} = 10^{8}\ \mu\Omega\cdot\mathrm{cm}$：

$$\rho_{poly} = R_{\square,poly}\,t_{poly} = (30\ \Omega)(100\times10^{-9}\ \mathrm{m}) = 3.0\times10^{-6}\ \Omega\cdot\mathrm{m} = 3.0\times10^{-6}\times10^{8}\ \mu\Omega\cdot\mathrm{cm} = 300\ \mu\Omega\cdot\mathrm{cm},$$

$$\rho_{M1} = R_{\square,M1}\,t_{M1} = (0.08\ \Omega)(150\times10^{-9}\ \mathrm{m}) = 1.2\times10^{-8}\ \Omega\cdot\mathrm{m} = 1.2\ \mu\Omega\cdot\mathrm{cm}.$$

### 第 2 步 — 比值

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{3.0\times10^{-6}\ \Omega\cdot\mathrm{m}}{1.2\times10^{-8}\ \Omega\cdot\mathrm{m}} = 250 .$$

**用比值交叉验证：**

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{R_{\square,poly}}{R_{\square,M1}}\cdot\frac{t_{poly}}{t_{M1}} = \frac{30}{0.08}\cdot\frac{100}{150} = 375\times0.6667 = 250 .$$

两者的方块电阻相差 375 倍，但其中一部分来自更厚的金属膜（150 nm 对 100 nm）；材料性质之比为 250。

### 第 3 步 — 补充：所画连线单位长度的电阻

虽然题目没有要求，但线宽（多晶硅为 40 nm，金属 1 为 80 nm）决定了这两条具体**连线**的电阻大小，$R/L = R_\square/W$：

$$
\begin{aligned}
\text{poly: } & R/L = \frac{R_{\square,poly}}{W_{poly}} = \frac{30\ \Omega}{0.04\ \mu\mathrm{m}} = 750\ \Omega/\mu\mathrm{m},\\
\text{metal 1: } & R/L = \frac{R_{\square,M1}}{W_{M1}} = \frac{0.08\ \Omega}{0.08\ \mu\mathrm{m}} = 1\ \Omega/\mu\mathrm{m}.
\end{aligned}
$$

未经硅化的窄多晶硅线单位长度的电阻是金属线的 750 倍，这就是多晶硅只用于短连接（并且通常要进行硅化）的原因。这个 750 是所画几何形状的性质，而不是材料的性质。

### 结果

$$\frac{\rho_{poly}}{\rho_{M1}} = \frac{(30\ \Omega)(100\ \mathrm{nm})}{(0.08\ \Omega)(150\ \mathrm{nm})} = \frac{3\times10^{-6}\ \Omega\cdot\mathrm{m}}{1.2\times10^{-8}\ \Omega\cdot\mathrm{m}} = 250 .$$

**常见错误。** 把方块电阻之比 $30/0.08 = 375$ 当作电阻率之比。$R_\square$ 已经包含了薄膜厚度；要比较材料，应把各自的方块电阻乘以各自的厚度。

**常见错误。** 用宽度（40 nm 和 80 nm）代替厚度，得到 $375\times40/80 = 187.5$。电阻率与连线画得多宽无关。

**常见错误。** 把厚度比（$375\times150/100 = 562.5$）或最终比值（$1/250$）弄反。先对每种材料写出 $\rho = R_\square t$ 再相除；多晶硅的值必须更大。
