# 详细步骤 - R149

**思路。** 在快速的时钟边沿期间，节点 $X$ 上的电阻来不及搬移电荷，因此 $X$ 只通过线间电容和 100 fF 的对地电容耦合。由电荷守恒可得一个电容分压器，它决定了毛刺的幅度；之后毛刺通过 $X$ 点的电阻衰减。

### 第 1 步 — 时钟边沿期间的节点 $X$

把 $M_1$ 的负载电阻记为 $R_D$。驱动 $L_2$ 的反相器（inverter）是低阻抗驱动器，因此每个边沿 $L_2$ 都摆动完整的 $\Delta V_{CK} = 3$ V。节点 $X$ 到时钟线有耦合电容 $C_c = 10$ fF，到地有 $C_g = 100$ fF，到交流地有小信号电阻 $R_X = R_D\parallel r_{O1}$。因此它的等效电路是：阶跃 $\Delta V_{CK}$ 与 $C_c$ 串联，驱动接地的 $C_g$ 和 $R_X$。

<!-- diagram: diagram-01.cir -->

$R_X$ 只能以如下时间常数把电荷移入或移出 $X$：

$$\tau = R_X\,(C_c + C_g).$$

例如，当 $R_X = 5\ \mathrm{k}\Omega$ 时，$\tau = (5\ \mathrm{k}\Omega)(110\ \mathrm{fF}) = 0.55$ ns，而时钟边沿只持续几十皮秒到约 100 ps。因此在边沿期间几乎没有电流流过 $R_D$ 或 $M_1$，$X$ 上的电荷守恒。

### 第 2 步 — 节点 $X$ 上的电荷守恒

与 $X$ 相连的极板上的电荷为 $Q_X = C_c\,(V_X - V_{CK}) + C_gV_X$。若时钟跳变 $\Delta V_{CK}$、节点跳变 $\Delta V_X$，则由 $\Delta Q_X = 0$ 得

$$
\begin{aligned}
C_c\,(\Delta V_X - \Delta V_{CK}) + C_g\,\Delta V_X &= 0\\
\Delta V_X &= \Delta V_{CK}\,\frac{C_c}{C_c + C_g}.
\end{aligned}
$$

数值计算：

$$
\begin{aligned}
\frac{C_c}{C_c + C_g} &= \frac{10\ \mathrm{fF}}{10\ \mathrm{fF} + 100\ \mathrm{fF}} = \frac{10}{110} = 0.0909,\\
\Delta V_X &= (3\ \mathrm{V})(0.0909) = 0.273\ \mathrm{V}.
\end{aligned}
$$

因此每个时钟边沿在 $V_X$ 上产生约 **273 mV** 的毛刺，其符号与时钟阶跃相同：上升沿（0 → 3 V）把 $V_X$ **抬高** 0.27 V，下降沿（3 V → 0）把它**拉低** 0.27 V。

### 第 3 步 — 受干扰波形的形状

每次跳变之后，注入的电荷经 $R_X$ 泄放，因此 $V_X$ 以 $\tau = (R_D\parallel r_{O1})(110\ \mathrm{fF})$ 恢复：

$$\Delta V_X(t) = 0.273\ \mathrm{V}\times e^{-t/\tau}\qquad (t\ \text{measured from the edge}).$$

因此模拟信号在每个时钟边沿都带有 ±0.27 V 的尖峰，每个尖峰之后是指数衰减：这就是图中 $L_1$ 上画出的尖峰状波形。对于只有几百毫伏的模拟信号而言，这样的毛刺是非常大的。

### 结果

$$\Delta V_X = \Delta V_{CK}\,\frac{C_c}{C_c + C_g} = 3\ \mathrm{V}\times\frac{10\ \mathrm{fF}}{110\ \mathrm{fF}} \approx 0.27\ \mathrm{V}\ (273\ \mathrm{mV})$$

这是每个时钟边沿产生的毛刺：上升沿为正，下降沿为负。随后每个毛刺以时间常数 $(R_D\parallel r_{O1})\times 110$ fF 衰减。

**常见错误。** 写成 $\Delta V_X = 3\ \mathrm{V}\times 10/100 = 0.30$ V。耦合电容也接在 $X$ 上，所以分母应是 $X$ 点的**总**电容 $C_c + C_g = 110$ fF。

**常见错误。** 把分压比弄反（$3\ \mathrm{V}\times 100/110 \approx 2.7$ V），或者认为完整的 3 V 摆幅都出现在 $X$ 上。接地的 100 fF 电容吸收了大部分注入的电荷。

**常见错误。** 认为 $M_1$ 或 $R_D$ 能“保持”节点电压，所以没有毛刺。两者都不是电压源：它们只能以时间常数 $(R_D\parallel r_{O1})(C_c + C_g)$ 移走注入的电荷，而这个时间常数比时钟边沿长得多。
