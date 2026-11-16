# 详细步骤 - R597

**思路。** 采用建立后的值，此时电容中没有电流：每个浮空的放大器输入端满足电荷守恒，而每个输出电压等于注入电流之和乘以 $R_{out}$。先求出单独主放大器的误差，再求出完全相同的辅助放大器的输入电压 $V_X$，最后在计入误差放大器的额外电流后求解主放大器。

### 第 1 步 — 符号与建立后的方程

把主放大器的反相输入端记为 M，辅助放大器的输出记为 Z。Y 接收 $G_m(0 - V_M)$ 和 $G_m(0 - V_X)$，并有接地的 $R_{out}$（忽略误差放大器自身的输出阻抗）；Z 接收 $G_m(0 - V_X)$，并有接地的 $R_{out}$。

<!-- diagram: diagram-01.cir -->

所有电压都是相对于复位状态的变化量，复位时所有电容都已放电。令 $A = G_mR_{out} \gg 1$，定义

$$S = C_1 + C_2, \qquad D = C_1 + C_2 + AC_2 = S + AC_2 .$$

在放大器输入端（例如 X），经 $C_1$ 流入的电荷等于经 $C_2$ 流出的电荷：

$$C_1(V_{in} - V_X) = C_2(V_X - V_Z),$$

而在输出节点，全部注入电流都流过 $R_{out}$。

### 第 2 步 — 基准：单独的主放大器

没有误差放大器时，$V_Y = -AV_M$，由 M 点的电荷守恒得

$$
\begin{aligned}
C_1(V_{in} - V_M) &= C_2(V_M + AV_M)\\
C_1V_{in} &= (C_1 + C_2 + AC_2)\,V_M = D\,V_M\\
V_M &= \frac{C_1V_{in}}{D},\\
V_Y = -AV_M &= -\frac{AC_1}{D}V_{in} = -\frac{C_1}{C_2}\cdot\frac{AC_2}{D}\,V_{in} = -\frac{C_1}{C_2}\left(1 - \frac{S}{D}\right)V_{in}.
\end{aligned}
$$

单个放大器的增益误差为 $S/D = (C_1 + C_2)/(C_1 + C_2 + AC_2) \approx (1 + C_1/C_2)/A$，这是由它产生输出电流所需的非零 $V_M$ 造成的。

### 第 3 步 — 辅助放大器：误差电压的复制品

辅助放大器完全相同，且由同一个 $V_{in}$ 驱动，因此它的建立结果与单独的主放大器完全一样。由 $V_Z = R_{out}\,G_m(0 - V_X) = -AV_X$：

$$
\begin{aligned}
C_1(V_{in} - V_X) &= C_2(V_X + AV_X)\\
V_X &= \frac{C_1V_{in}}{C_1 + C_2 + AC_2} = \frac{C_1V_{in}}{D},
\end{aligned}
$$

这正是主放大器原本会在其输入端出现的误差电压的复制品。

### 第 4 步 — 计入误差放大器电流后的主放大器

有两股电流流入 Y：

$$V_Y = R_{out}\left[G_m(0 - V_M) + G_m(0 - V_X)\right] = -A\,(V_M + V_X).$$

M 点的电荷守恒：

$$C_1(V_{in} - V_M) = C_2(V_M - V_Y) = C_2V_M + AC_2(V_M + V_X).$$

合并含 $V_M$ 的项：

$$
\begin{aligned}
C_1V_{in} - AC_2V_X &= (C_1 + C_2 + AC_2)\,V_M = D\,V_M\\
V_M &= \frac{C_1V_{in} - AC_2V_X}{D}.
\end{aligned}
$$

### 第 5 步 — 求输出

代入 $V_X = C_1V_{in}/D$，并利用 $D - AC_2 = S$：

$$
\begin{aligned}
V_M &= \frac{C_1V_{in}}{D}\left(1 - \frac{AC_2}{D}\right) = \frac{C_1V_{in}}{D}\cdot\frac{D - AC_2}{D} = \frac{C_1V_{in}\,S}{D^2}.
\end{aligned}
$$

主放大器的输入误差现在减小到原来的 $S/D$ 倍：误差放大器提供了几乎全部电流，因此 M 更接近虚地。接着，

$$V_M + V_X = \frac{C_1V_{in}S}{D^2} + \frac{C_1V_{in}D}{D^2} = \frac{C_1V_{in}\,(S + D)}{D^2},$$

再利用 $A = (D - S)/C_2$：

$$
\begin{aligned}
V_Y &= -A\,(V_M + V_X) = -\frac{D - S}{C_2}\cdot\frac{C_1V_{in}\,(D + S)}{D^2}\\
&= -\frac{C_1}{C_2}\,V_{in}\,\frac{D^2 - S^2}{D^2}\\
&= -\frac{C_1}{C_2}\,V_{in}\left[1 - \left(\frac{S}{D}\right)^2\right].
\end{aligned}
$$

### 第 6 步 — 增益误差

增益为 $V_{out}/V_{in} = -(C_1/C_2)(1 - \varepsilon)$，其中

$$\varepsilon = \left(\frac{S}{D}\right)^2 = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2 \quad(G_mR_{out} \gg 1 + C_1/C_2),$$

它恰好是主放大器自身误差（第 2 步）的**平方**。例如：

- $G_mR_{out} = 100$，$C_1 = C_2$：单个放大器为 $2/102 = 1.96\ \%$；加入校正后为 $(1.96\ \%)^2 = 0.038\ \%$；
- $G_mR_{out} = 1000$，$C_1/C_2 = 4$：单个放大器为 $5/1005 = 0.50\ \%$；加入校正后为 $2.5\times10^{-5}$。

误差不为零，是因为 $V_X$ 是一个独自提供**全部**输出电流的放大器的输入误差；有了误差放大器的帮助，主放大器仍需要一个残余的 $V_M$，其大小是复制品对应值的 $S/D$ 倍，因此抵消只在一阶上是完全的。

### 结果

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\,(1 - \varepsilon), \qquad \varepsilon = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2 .$$

增益误差是 $1/(G_mR_{out})$ 的二阶量：即单独主放大器误差的平方。辅助放大器复制了主放大器的虚地误差，而误差放大器在一阶上将其抵消。

**常见错误。** 声称完全抵消（误差为零）。一旦误差放大器参与工作，主放大器的工作点就与复制品不同，因而残留误差 $(S/D)^2$。

**常见错误。** 把误差放大器电流的符号弄反：它注入的是 $G_m(0 - V_X)$，与主放大器自身的 $G_m(0 - V_M)$ 极性相同；若符号相反，两股电流相互抵触，误差大约会加倍，而不是变成平方。对整个电路给出单个放大器的误差 $(C_1 + C_2)/(G_mR_{out}C_2)$，则没有理解辅助通路的作用。
