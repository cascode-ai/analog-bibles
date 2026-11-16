# 详细步骤 - R311

**思路。** 在节点 X 加测试电压 $v_X$，通过 X 点和 $M_1$ 漏极的基尔霍夫电流定律（KCL）求出测试电流 $i_X$；$Z_X = v_X/i_X$。由其零点、极点和渐近线可以画出 $|Z_X|$ 的伯德图（Bode plot）草图，结果表明它呈感性。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的漏极称为节点 **D**。$V_{DD}$ 为交流地，理想的 $I_1$ 开路，且没有 $r_O$ 和 $g_{mb}$（$\lambda = \gamma = 0$）：

- $M_1$ 是检测 $v_X$ 的共源级（common-source stage），从 D 向地吸取电流 $g_{m1}v_X$；
- 从 X 看，$M_2$ 是一个栅极由 D 驱动的跟随器，它把电流 $g_{m2}v_{gs2} = g_{m2}(v_D - v_X)$ 从其漏极（交流地）送入 X；
- $R_D$ 和 $C_1$ 接在 D 与交流地之间。

在 X 点加测试电压 $v_X$，它向 X 注入电流 $i_X$。

### 第 2 步 — 节点 X 的 KCL

$M_1$ 的栅极不吸取电流，$I_1$ 开路，因此

$$i_X + g_{m2}(v_D - v_X) = 0 \quad\Longrightarrow\quad i_X = g_{m2}\,(v_X - v_D). \qquad (1)$$

若 D 保持不变，就会得到普通跟随器的值 $Z_X = 1/g_{m2}$；但 D 是变化的。

### 第 3 步 — 节点 D 的 KCL

经 $R_D$、$C_1$ 和 $M_1$ 离开 D 的电流之和为零（$M_2$ 的栅极不吸取电流）：

$$\frac{v_D}{R_D} + v_D\,C_1s + g_{m1}v_X = 0 .$$

合并 $v_D$ 项，并在两边乘以 $R_D$：

$$v_D\,(1 + R_DC_1s) = -g_{m1}R_D\,v_X \quad\Longrightarrow\quad v_D = -\frac{g_{m1}R_D}{1 + R_DC_1s}\,v_X, \qquad (2)$$

这就是以 $R_D\parallel C_1$ 为负载的共源级 $M_1$ 的增益：低频时为 $-g_{m1}R_D$，高频时 $C_1$ 把 D 短路，$v_D\to0$。

### 第 4 步 — 求解 $Z_X$

把式 (2) 代入式 (1)，并将括号内通分：

$$i_X = g_{m2}\,v_X\left(1 + \frac{g_{m1}R_D}{1 + R_DC_1s}\right) = g_{m2}\,v_X\,\frac{1 + R_DC_1s + g_{m1}R_D}{1 + R_DC_1s},$$

$$\boxed{Z_X = \frac{v_X}{i_X} = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}}$$

将分子、分母同除以 $(1 + g_{m1}R_D)$：

$$Z_X = \frac{1}{g_{m2}(1 + g_{m1}R_D)}\cdot\frac{1 + s/\omega_z}{1 + s/\omega_p}, \qquad \omega_z = \frac{1}{R_DC_1}, \qquad \omega_p = \frac{1 + g_{m1}R_D}{R_DC_1} = (1 + g_{m1}R_D)\,\omega_z .$$

### 第 5 步 — 低频与高频极限

- **低频**（$s \to 0$，$C_1$ 开路）：
$$Z_X(0) = \frac{1}{g_{m2}(1 + g_{m1}R_D)} .$$
- **高频**（$s \to \infty$，$R_DC_1s$ 项占主导）：
$$Z_X(\infty) = \frac{R_DC_1s}{g_{m2}R_DC_1s} = \frac{1}{g_{m2}} .$$

由于 $1 + g_{m1}R_D > 1$，零点在前（$\omega_z < \omega_p$），$|Z_X|$ 随频率**增大**；比值 $\omega_p/\omega_z = 1 + g_{m1}R_D$ 等于两个平台的比值，这与连接两个平台的 +20 dB/dec 上升段相吻合。

在低频时，$M_1$ 和 $M_2$ 构成增益为 $g_{m1}R_D$ 的负反馈环路：$v_X$ 升高会把 D 拉低，因此 $v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$，$M_2$ 吸收的电流是普通跟随器的 $(1 + g_{m1}R_D)$ 倍。在高频时，$C_1$ 把 D 短路，环路增益消失，只剩下 $1/g_{m2}$。

### 第 6 步 — 幅值与伯德图草图

令 $s = j\omega$：

$$Z_X(j\omega) = \frac{1 + j\omega R_DC_1}{g_{m2}\,(1 + g_{m1}R_D + j\omega R_DC_1)}, \qquad |Z_X(j\omega)| = \frac{1}{g_{m2}}\sqrt{\frac{1 + \omega^2R_D^2C_1^2}{(1 + g_{m1}R_D)^2 + \omega^2R_D^2C_1^2}} .$$

在每个根号下只保留较大的项（例如，当 $\omega_z \ll \omega \ll \omega_p$ 时，分子中 $\omega R_DC_1 \gg 1$，分母中 $\omega R_DC_1 \ll 1 + g_{m1}R_D$）：

| 频率范围 | $\lvert Z_X\rvert$ 的近似 | 特性 |
|---|---|---|
| $\omega \ll \omega_z$ | $\dfrac{1}{g_{m2}(1+g_{m1}R_D)}$ | 平坦（阻性） |
| $\omega_z \ll \omega \ll \omega_p$ | $\dfrac{\omega R_DC_1}{g_{m2}(1+g_{m1}R_D)}$ | 以 +20 dB/dec 上升，与 $\omega$ 成正比（感性） |
| $\omega \gg \omega_p$ | $\dfrac{1}{g_{m2}}$ | 平坦（阻性） |

在每个转折频率处，精确曲线与渐近线相差约 3 dB：在 $\omega = \omega_z$ 处 $|Z_X| \approx \sqrt2\,Z_X(0)$；当 $g_{m1}R_D \gg 1$ 时，在 $\omega = \omega_p$ 处 $|Z_X| \approx 1/(\sqrt2\,g_{m2})$。相位 $\angle Z_X = \arctan(\omega/\omega_z) - \arctan(\omega/\omega_p) > 0$ 为正：该阻抗呈**感性**。

**数值示例**（假设的数值，仅用于直观展示草图）：取 $g_{m1} = g_{m2} = 1$ mS，$R_D = 10\ \mathrm{k}\Omega$，$C_1 = 1$ pF，得 $g_{m1}R_D = 10$，$Z_X(0) = 1/(10^{-3}\times 11) = 90.9\ \Omega$，$Z_X(\infty) = 1\ \mathrm{k}\Omega$，$\omega_z = 1/(10^4\times10^{-12}) = 10^8$ rad/s，$\omega_p = 11\times10^8$ rad/s：

| $\omega$ (rad/s) | $10^7$ | $10^8$ ($\omega_z$) | $3.32\times10^8$ ($\sqrt{\omega_z\omega_p}$) | $1.1\times10^9$ ($\omega_p$) | $10^{10}$ |
|---|---|---|---|---|---|
| $\lvert Z_X\rvert$ ($\Omega$) | 91 | 128 | 302 | 710 | 994 |

### 第 7 步 — 等效 R–L 网络：“有源电感”（active inductor）

把 $Z_X$ 写成电阻 $R_0$ 串联上 $R_1$ 与电感 $L$ 的并联组合：

$$Z_X = R_0 + \frac{R_1\cdot Ls}{R_1 + Ls} = R_0 + \frac{Ls}{1 + Ls/R_1}.$$

令 $R_0 = Z_X(0)$，并从 $Z_X$ 中减去它：

$$
\begin{aligned}
Z_X - R_0 &= \frac{1}{g_{m2}}\left[\frac{1 + R_DC_1s}{1 + g_{m1}R_D + R_DC_1s} - \frac{1}{1 + g_{m1}R_D}\right]\\
&= \frac{1}{g_{m2}}\cdot\frac{(1 + g_{m1}R_D)(1 + R_DC_1s) - (1 + g_{m1}R_D + R_DC_1s)}{(1 + g_{m1}R_D)(1 + g_{m1}R_D + R_DC_1s)}\\
&= \frac{1}{g_{m2}}\cdot\frac{g_{m1}R_D\cdot R_DC_1s}{(1 + g_{m1}R_D)(1 + g_{m1}R_D + R_DC_1s)}\\
&= \frac{\dfrac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2}\,s}{1 + \dfrac{R_DC_1}{1 + g_{m1}R_D}\,s}.
\end{aligned}
$$

与 $Ls/(1 + Ls/R_1)$ 对比，由分子得

$$L = \frac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2} \approx \frac{C_1}{g_{m1}g_{m2}} \quad (g_{m1}R_D \gg 1),$$

由分母得 $L/R_1 = R_DC_1/(1 + g_{m1}R_D)$，因此

$$R_1 = \frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)} = \frac{1}{g_{m2}} - R_0 .$$

验证：高频时电感相当于开路，因此 $Z_X \to R_0 + R_1 = 1/g_{m2}$，与第 5 步一致。

### 结果

$$Z_X = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}$$

- 低频时，$|Z_X| = \dfrac{1}{g_{m2}(1 + g_{m1}R_D)}$。
- 在零点 $\omega_z = 1/(R_DC_1)$ 与极点 $\omega_p = (1 + g_{m1}R_D)/(R_DC_1)$ 之间，$|Z_X|$ 以 +20 dB/dec 的斜率上升。
- 在 $\omega_p$ 以上，$|Z_X|$ 趋于平坦，等于 $1/g_{m2}$。

该端口呈**感性**。它等效于 $R_0 = 1/[g_{m2}(1 + g_{m1}R_D)]$ 串联上（$1/g_{m2} - R_0$）与 $L = g_{m1}R_D^2C_1/[g_{m2}(1 + g_{m1}R_D)^2] \approx C_1/(g_{m1}g_{m2})$ 的并联组合。

**常见错误。** 因为“电路中有电容”，就断定 $|Z_X|$ 随频率下降。$C_1$ 并不跨接在端口上，而是位于反馈环路内部；高频时 D 被短路，这**消除**了降低阻抗的反馈，因此阻抗上升。

**常见错误。** 把 $1/g_{m2}$（或 $1/g_{m1}$）当作低频值，这忽略了 $M_1$ 会改变 $M_2$ 的栅极电压：$v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$。与此相关的错误是写成 $v_{gs2} = v_D$，好像 $M_2$ 的源极接地一样；而它的源极**就是**节点 X。

**常见错误。** 把 $I_1$ 换成短路或电阻。理想电流源对小信号而言相当于开路，不出现在 $Z_X$ 中。
