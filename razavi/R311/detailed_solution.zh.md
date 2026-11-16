# 详细步骤 - R311

**思路。** 把每个晶体管换成它的小信号模型（small-signal model），在节点 X 加测试电压 $v_X$，然后在节点 X 和 $M_1$ 的漏极应用基尔霍夫电流定律（KCL）求出测试电流 $i_X$。比值 $v_X/i_X$ 即为 $Z_X(s)$。再由它的零点、极点和渐近线画出 $|Z_X|$ 的波特图草图，结果表明该阻抗呈感性（inductive）。

### 第 1 步 — 读懂电路

把 $M_1$ 的漏极记为**节点 D**。各元件的连接关系如下：

- $R_D$ 接在 $V_{DD}$ 与节点 D 之间，$C_1$ 接在节点 D 与地之间。
- $M_1$（NMOS）的栅极接节点 X，源极接地，漏极接节点 D。它是一个检测 $v_X$ 的共源级（common-source stage）。
- $M_2$（NMOS）的栅极接节点 D，漏极接 $V_{DD}$，源极接节点 X。从 X 看，$M_2$ 是一个栅极由节点 D 驱动的源极跟随器（source follower）。
- 理想电流源（current source）$I_1$ 从节点 X 接到地，设定 $M_2$ 的偏置电流。
- $Z_X$ 是从节点 X 看进去的阻抗。

如题所述，两个晶体管都工作在饱和区（saturation region）。

### 第 2 步 — 建立小信号模型

小信号分析只保留偏置点附近的*变化量*：

- **直流电源变为交流地。** $V_{DD}$ 是恒定电压，因此在小信号电路中，$R_D$ 的上端和 $M_2$ 的漏极都接地。
- **理想电流源变为开路。** $I_1$ 的电流恒定，其小信号电流为零，因此直接将它去掉。
- **$M_1$** 用一个从 D 流向地的压控电流源 $g_{m1}v_{gs1}$ 代替，其中 $v_{gs1} = v_X - 0 = v_X$。这里 $g_{m1}$ 是 $M_1$ 的跨导（transconductance）。由于 $\lambda = 0$，没有输出电阻（output resistance）$r_{O1}$。
- **$M_2$** 用一个电流源 $g_{m2}v_{gs2}$ 代替，电流从其漏极（交流地）流入其源极（节点 X），其中 $v_{gs2} = v_D - v_X$。没有 $r_{O2}$（$\lambda = 0$），也没有体效应（body effect）电流源 $g_{mb2}$（$\gamma = 0$）。
- **栅极不吸取电流**，因此 $M_1$ 的栅极（在 X 处）和 $M_2$ 的栅极（在 D 处）都不流入任何电流。
- **测试源。** 在节点 X 加电压 $v_X$，并把它注入 X 的电流记为 $i_X$，则 $Z_X = v_X/i_X$。所有量都是拉普拉斯变换，正弦稳态时 $s = j\omega$。$C_1$ 的阻抗为 $1/(C_1s)$。

### 第 3 步 — 节点 X 的 KCL

与节点 X 相连的支路有：测试源（流入电流 $i_X$）、$M_2$ 的源极（流入电流 $g_{m2}v_{gs2}$）、$M_1$ 的栅极（无电流）以及 $I_1$（开路）。流入 X 的电流之和必须为零：

$$i_X + g_{m2}(v_D - v_X) = 0 .$$

解出 $i_X$：

$$i_X = g_{m2}\,(v_X - v_D). \qquad (1)$$

如果节点 D 保持不动，就得到 $i_X = g_{m2}v_X$，即 $Z_X = 1/g_{m2}$，这正是熟悉的从跟随器源极看进去的阻抗。但节点 D *并非*固定不动，所以还需要求出 $v_D$。

### 第 4 步 — 节点 D 的 KCL

从节点 D 流出的支路有：

- 经 $R_D$ 流向交流地：电流为 $v_D/R_D$；
- 经 $C_1$ 流向地：电流为 $v_D\,C_1s$；
- 流入 $M_1$ 的漏极：电流为 $g_{m1}v_X$（向下流过 $M_1$）；
- 流入 $M_2$ 的栅极：无电流。

令流出 D 的电流之和为零：

$$\frac{v_D}{R_D} + v_D\,C_1s + g_{m1}v_X = 0 .$$

合并含 $v_D$ 的项：

$$v_D\left(\frac{1}{R_D} + C_1s\right) = -g_{m1}v_X .$$

两边同乘 $R_D$：

$$v_D\,(1 + R_DC_1s) = -g_{m1}R_D\,v_X .$$

解出 $v_D$：

$$v_D = -\frac{g_{m1}R_D}{1 + R_DC_1s}\,v_X. \qquad (2)$$

这正是以 $R_D \parallel C_1$ 为负载的共源级 $M_1$ 的增益。低频时 $v_D = -g_{m1}R_Dv_X$；高频时 $C_1$ 把节点 D 短路到地，$v_D \to 0$。

### 第 5 步 — 求解 $Z_X$

将式 (2) 代入式 (1)：

$$i_X = g_{m2}\left(v_X + \frac{g_{m1}R_D}{1 + R_DC_1s}\,v_X\right) = g_{m2}\,v_X\left(1 + \frac{g_{m1}R_D}{1 + R_DC_1s}\right).$$

将括号内通分：

$$i_X = g_{m2}\,v_X\,\frac{1 + R_DC_1s + g_{m1}R_D}{1 + R_DC_1s}.$$

取倒数，得到阻抗：

$$\boxed{Z_X = \frac{v_X}{i_X} = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}}$$

将分子和分母同除以 $(1 + g_{m1}R_D)$，以明确显示极点和零点：

$$Z_X = \frac{1}{g_{m2}(1 + g_{m1}R_D)}\cdot\frac{1 + s/\omega_z}{1 + s/\omega_p},$$

其中

$$\omega_z = \frac{1}{R_DC_1}, \qquad \omega_p = \frac{1 + g_{m1}R_D}{R_DC_1} = (1 + g_{m1}R_D)\,\omega_z .$$

### 第 6 步 — 低频与高频极限

- **低频**（$s \to 0$）：$C_1$ 相当于开路，
$$Z_X(0) = \frac{1}{g_{m2}(1 + g_{m1}R_D)} .$$
- **高频**（$s \to \infty$）：分子和分母中都是 $R_DC_1s$ 项占主导：
$$Z_X(\infty) = \frac{R_DC_1s}{g_{m2}R_DC_1s} = \frac{1}{g_{m2}} .$$

由于 $1 + g_{m1}R_D > 1$，零点先出现（$\omega_z < \omega_p$），因此 $|Z_X|$ 随频率*增大*。极点与零点之比 $\omega_p/\omega_z = 1 + g_{m1}R_D$ 恰好等于高频与低频两个平台之比，这与连接两个平台的一段 +20 dB/dec 直线上升相吻合。

**物理直观。** 低频时 $M_1$ 和 $M_2$ 构成一个负反馈环路。若 $v_X$ 升高，$M_1$ 会把节点 D *拉低* $g_{m1}R_Dv_X$。于是 $M_2$ 的栅源电压变为 $v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$，而不只是 $-v_X$。这样 $M_2$ 吸收的电流是普通跟随器的 $(1 + g_{m1}R_D)$ 倍，阻抗也就按同一倍数降低；环路增益（loop gain）为 $g_{m1}R_D$。高频时 $C_1$ 把节点 D 短路到地，环路增益消失，只剩下跟随器的 $1/g_{m2}$。

### 第 7 步 — 幅值与波特图草图

令 $s = j\omega$：

$$Z_X(j\omega) = \frac{1 + j\omega R_DC_1}{g_{m2}\,(1 + g_{m1}R_D + j\omega R_DC_1)} .$$

对分子和分母分别利用 $|a + jb| = \sqrt{a^2 + b^2}$ 取模：

$$|Z_X(j\omega)| = \frac{1}{g_{m2}}\sqrt{\frac{1 + \omega^2R_D^2C_1^2}{(1 + g_{m1}R_D)^2 + \omega^2R_D^2C_1^2}} .$$

只保留每个根号下较大的那一项，就得到渐近（波特图）描述。例如，在中间频段（$\omega_z \ll \omega \ll \omega_p$），由于 $\omega R_DC_1 \gg 1$，分子由 $\omega R_DC_1$ 主导；由于 $\omega R_DC_1 \ll 1 + g_{m1}R_D$，分母由 $1 + g_{m1}R_D$ 主导。

| 频率范围 | $\lvert Z_X\rvert$ 的近似式 | 特性 |
|---|---|---|
| $\omega \ll \omega_z$ | $\dfrac{1}{g_{m2}(1+g_{m1}R_D)}$ | 平坦（阻性） |
| $\omega_z \ll \omega \ll \omega_p$ | $\dfrac{\omega R_DC_1}{g_{m2}(1+g_{m1}R_D)}$ | 以 +20 dB/dec 上升，正比于 $\omega$（感性） |
| $\omega \gg \omega_p$ | $\dfrac{1}{g_{m2}}$ | 平坦（阻性） |

在每个转折频率处，精确曲线与渐近线相差约 3 dB：

- 在 $\omega = \omega_z$ 处，$|Z_X| \approx \sqrt2\,Z_X(0)$。
- 在 $\omega = \omega_p$ 处，当 $g_{m1}R_D \gg 1$ 时，$|Z_X| \approx 1/(\sqrt2\,g_{m2})$。

相位为 $\angle Z_X = \arctan(\omega/\omega_z) - \arctan(\omega/\omega_p) > 0$。相位为正意味着电压超前于电流，这正是**感性**阻抗的特征。

**数值示例**（假设值，仅用于直观展示草图）：$g_{m1} = g_{m2} = 1$ mS，$R_D = 10\ \mathrm{k}\Omega$，$C_1 = 1$ pF。则

- $g_{m1}R_D = 10$；
- $Z_X(0) = 1/(10^{-3}\times 11) = 90.9\ \Omega$；
- $Z_X(\infty) = 1\ \mathrm{k}\Omega$；
- $\omega_z = 1/(10^4\times10^{-12}) = 10^8$ rad/s，$\omega_p = 11\times10^8$ rad/s。

| $\omega$ (rad/s) | $10^7$ | $10^8$ ($\omega_z$) | $3.32\times10^8$ ($\sqrt{\omega_z\omega_p}$) | $1.1\times10^9$ ($\omega_p$) | $10^{10}$ |
|---|---|---|---|---|---|
| $\lvert Z_X\rvert$ ($\Omega$) | 91 | 128 | 302 | 710 | 994 |

### 第 8 步 — 等效 R–L 网络（“有源电感”，active inductor）

同样的 $Z_X$ 也可以由一个电阻 $R_0$ 串联一个 $R_1$ 与电感 $L$ 的并联组合来实现：

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

将其与 $Ls/(1 + Ls/R_1)$ 逐项对比。

由分子得到电感：

$$L = \frac{g_{m1}R_D^2C_1}{g_{m2}(1 + g_{m1}R_D)^2} \approx \frac{C_1}{g_{m1}g_{m2}} \quad (g_{m1}R_D \gg 1).$$

由分母得到 $L/R_1 = R_DC_1/(1 + g_{m1}R_D)$。解出 $R_1$：

$$R_1 = \frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)} = \frac{1}{g_{m2}} - R_0 .$$

作为验证：高频时电感相当于开路，因此 $Z_X \to R_0 + R_1 = 1/g_{m2}$，与第 6 步的结果一致。

### 结果

$$Z_X = \frac{1 + R_DC_1s}{g_{m2}\,(1 + g_{m1}R_D + R_DC_1s)}$$

- 低频时，$|Z_X| = \dfrac{1}{g_{m2}(1 + g_{m1}R_D)}$。
- 在零点 $\omega_z = 1/(R_DC_1)$ 与极点 $\omega_p = (1 + g_{m1}R_D)/(R_DC_1)$ 之间，$|Z_X|$ 以 +20 dB/dec 上升。
- 高于 $\omega_p$ 后，$|Z_X|$ 趋于平坦，等于 $1/g_{m2}$。

该端口呈**感性**。它等效于 $R_0 = 1/[g_{m2}(1 + g_{m1}R_D)]$ 与一个并联支路相串联，该支路由（$1/g_{m2} - R_0$）与 $L = g_{m1}R_D^2C_1/[g_{m2}(1 + g_{m1}R_D)^2] \approx C_1/(g_{m1}g_{m2})$ 并联构成。

**常见错误。** 以为“电路里有电容”，就断定 $|Z_X|$ 随频率下降。$C_1$ 并没有跨接在端口上，而是位于反馈环路内部；高频时它把节点 D 短路，反而*消除*了降低阻抗的反馈。因此阻抗随频率上升：它是感性的，而不是容性（capacitive）的。

**常见错误。** 把 $1/g_{m2}$（或 $1/g_{m1}$）当作低频值。这忽略了 $M_1$ 会带动 $M_2$ 的栅极：$v_{gs2} = v_D - v_X = -(1 + g_{m1}R_D)v_X$，而不是 $-v_X$。与此相关的错误是把 $M_2$ 当作共源器件，即写成 $v_{gs2} = v_D$，仿佛其源极接地一样。$M_2$ 的源极*就是*节点 X。

**常见错误。** 用短路或电阻代替 $I_1$。理想电流源的小信号阻抗为无穷大，因此相当于开路，不出现在 $Z_X$ 中。
