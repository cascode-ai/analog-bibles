# 详细步骤 - R132

**思路。** PMOS 负载的栅极接 0 V，因此它的过驱动电压很大且固定；在 $\lambda = 0$ 时，饱和的负载会给出无穷大的增益。所以 $M_2$ 处于**线性区**，相当于一个电阻，其**小信号**电阻 $(\partial I_D/\partial V_{SD})^{-1}$ 必须等于 $5/g_{m1}$。把这一条件与 $M_2$ 流过 0.5 mA 的条件联立，解出 $V_{SD2}$，进而得到 $\beta_2$ 和 $(W/L)_2$。

### 第 1 步 — 所需的负载电阻

$M_2$ 的栅极和源极都接恒定电压，因此它只贡献其漏源小信号电阻 $r_2$；由于 $\lambda = 0$，$r_{O1} = \infty$，$A_v = -g_{m1}r_2$。由 $(W/L)_1 = 20/0.5 = 40$ 得：

$$g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_{D1}} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{mA})} = \sqrt{5.36\times10^{-6}}\ \mathrm{A/V} = 2.315\ \mathrm{mS},$$

$$r_2 = \frac{5}{g_{m1}} = \frac{5}{2.315\ \mathrm{mS}} = 2.160\ \mathrm{k\Omega}.$$

### 第 2 步 — $M_2$ 的工作区

$V_{SG2} = V_{DD} - V_b = 3$ V，其衬底与源极相连，没有体效应（body effect），因此

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

若 $M_2$ 处于饱和区（saturation region），它将呈现 $r_{O2} = \infty$，增益为无穷大，因此它必定处于**线性区**：$V_{SD2} < 2.2$ V。

### 第 3 步 — 线性区方程：大信号（large-signal）与小信号

以 $\beta_2 = \mu_pC_{ox}(W/L)_2$ 为未知量，并记 $V_{SD} \equiv V_{SD2}$：

$$I_D = \beta_2\left[V_{ov2}V_{SD} - \tfrac12V_{SD}^2\right] = \beta_2\left[2.2\,V_{SD} - \tfrac12V_{SD}^2\right], \tag{1}$$

$$\frac{1}{r_2} = \frac{\partial I_D}{\partial V_{SD}} = \beta_2\,(V_{ov2} - V_{SD}) = \beta_2\,(2.2 - V_{SD}). \tag{2}$$

$r_2$ **不等于** $V_{SD}/I_D$：线性区特性曲线是向下弯曲的，因此它在工作点处的斜率小于从原点到该点连线的斜率。

### 第 4 步 — 求解 $V_{SD2}$

将式 (1) 乘以由式 (2) 得到的 $r_2$，即可消去 $\beta_2$：

$$I_D\,r_2 = \frac{2.2\,V_{SD} - \tfrac12V_{SD}^2}{2.2 - V_{SD}} ,$$

其中 $I_Dr_2 = (0.5\ \mathrm{mA})(2.160\ \mathrm{k\Omega}) = 1.080$ V。因此

$$
\begin{aligned}
2.2\,V_{SD} - \tfrac12V_{SD}^2 &= 1.080\,(2.2 - V_{SD}) = 2.376 - 1.080\,V_{SD}\\
-\tfrac12V_{SD}^2 + 3.280\,V_{SD} - 2.376 &= 0\\
V_{SD}^2 - 6.560\,V_{SD} + 4.751 &= 0 ,
\end{aligned}
$$

$$V_{SD} = \frac{6.560 \pm \sqrt{6.560^2 - 4(4.751)}}{2} = \frac{6.560 \pm \sqrt{24.02}}{2} = \frac{6.560 \pm 4.901}{2}.$$

取“+”号的根为 5.73 V，它既大于 2.2 V 又大于 $V_{DD}$，因此

$$V_{SD2} = 0.829\ \mathrm{V}.$$

### 第 5 步 — $\beta_2$ 与宽长比

由式 (2)：

$$\beta_2 = \frac{1}{r_2\,(2.2 - V_{SD2})} = \frac{1}{(2.160\ \mathrm{k\Omega})(2.2 - 0.829\ \mathrm{V})} = \frac{1}{(2.160\ \mathrm{k\Omega})(1.371\ \mathrm{V})} = 0.338\ \mathrm{mA/V^2},$$

$$\left(\frac{W}{L}\right)_2 = \frac{\beta_2}{\mu_pC_{ox}} = \frac{0.338\ \mathrm{mA/V^2}}{38.4\ \mu\mathrm{A/V^2}} = 8.8 .$$

**验证。**

- 由式 (1) 求电流：$\beta_2(2.2\times0.829 - \tfrac12\times0.829^2) = (0.338\ \mathrm{mA/V^2})(1.824 - 0.344)\ \mathrm{V^2} = (0.338)(1.480)\ \mathrm{mA} = 0.500$ mA ✓。
- $V_{out} = V_{DD} - V_{SD2} = 3 - 0.829 = 2.171$ V。
- $M_1$：$V_{ov1} = \sqrt{2(0.5\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.432$ V $< V_{DS1} = 2.171$ V，处于饱和区 ✓（输入直流电平 $V_{in} = 0.7 + 0.432 = 1.132$ V）。
- $M_2$：$V_{SD2} = 0.829$ V $< 2.2$ V，处于线性区 ✓。

### 第 6 步 — 为什么“深线性区”捷径在这里失效

深线性区电阻 $R_{on} = 1/[\mu_pC_{ox}(W/L)V_{ov}]$ 只在 $V_{SD} \ll 2V_{ov}$ 时成立。若令 $R_{on2} = 2.16$ kΩ，将得到

$$\left(\frac{W}{L}\right)_2 = \frac{1}{(38.4\ \mu\mathrm{A/V^2})(2.16\ \mathrm{k\Omega})(2.2\ \mathrm{V})} = 5.48 .$$

但这个较小的器件要通过 0.5 mA，需要 $V_{SD2} \approx 1.90$ V（由式 (1) 得），这与 2.2 V 相比并不小。此时它实际的小信号电阻为 $1/[\beta_2(2.2 - 1.90)] \approx 16$ kΩ，增益约为 37，而不是 5。

### 结果

$$\left(\frac{W}{L}\right)_2 \approx 8.8,$$

此时 $M_2$ 处于线性区，$V_{SD2} \approx 0.83$ V（$V_{out} \approx 2.17$ V），$\beta_2 = 0.338\ \mathrm{mA/V^2}$，小信号电阻 $r_2 = 2.16$ kΩ $= 5/g_{m1}$（$g_{m1} = 2.315$ mS）。

**常见错误。** 把 $M_2$ 当作饱和的电流源（current source）。过驱动电压为 2.2 V 且 $\lambda = 0$ 时，这会给出无穷大的增益；只有线性区才能提供 5 倍增益所需的有限负载电阻。

**常见错误。** 把大信号比值 $V_{SD}/I_D$ 当作负载电阻，即取 $V_{SD2} = (0.5\ \mathrm{mA})(2.16\ \mathrm{k\Omega}) = 1.08$ V，从而得到 $(W/L)_2 \approx 7.3$。增益取决于**增量**电阻，而在线性区它大于 $V_{SD}/I_D$。

**常见错误。** 不加验证就使用深线性区公式（5.48）：在该尺寸下 $V_{SD} \approx 1.9$ V，增益约为 37。另外，PMOS 应使用 $\mu_pC_{ox}$，而不是 $\mu_nC_{ox}$。
