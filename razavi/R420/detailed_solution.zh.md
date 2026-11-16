# 详细步骤 - R420

**思路。** $C_1$ 在极低频时相当于开路，在极高频时相当于短路，因此每种极限情况都是纯电阻电路。低频时，$R_2 + R_3$ 构成一个从输出端接回 $M_1$ 栅极的并联反馈（shunt feedback）电阻；高频时，$C_1$ 把这个电阻的中点接地，反馈随之消失。我们用 KCL 分别求解两种情况，再用完整的传递函数检验这两个极限。

### 第 1 步 — 电路及其小信号模型

由图可知：

- $M_1$（NMOS，源极接地）：栅极接节点 G，漏极接 $V_{out}$。
- $M_2$（PMOS，栅极接固定偏置 $V_b$）：从 $V_{DD}$ 流入 $V_{out}$ 的电流源（current source）。
- $R_1$ 接在 $V_{in}$ 与 G 之间；$R_2$ 接在 G 与节点 N 之间；$R_3$ 接在 N 与 $V_{out}$ 之间；$C_1$ 接在 N 与地之间。

$\lambda = 0$ 时的小信号模型（small-signal model）：

- $M_1$ 相当于从输出节点流向地的电流 $g_{m1}v_G$（没有 $r_{O1}$）。
- $M_2$ 的栅极和源极都处于固定电位，因此其小信号电流为零；由于 $\lambda = 0$，它也没有 $r_O$。它就是一个**开路**，$g_{m2}$ 不起作用。
- $M_1$ 的栅极不吸取电流。

数值：$g_{m1} = 1/(200\ \Omega) = 5$ mS，$R_1 = R_2 = R_3 = 2\ \mathrm{k\Omega}$，因此对每个电阻都有 $g_{m1}R = 10$。

### 第 2 步 — 极低频：$C_1$ 开路

$C_1$ 开路时，$R_2$ 和 $R_3$ 串联，构成一个反馈电阻

$$R_F = R_2 + R_3 = 4\ \mathrm{k\Omega}$$

从输出端接回 G。这是一个采用电压并联反馈（shunt–shunt feedback）的反相放大器。

**输出端的 KCL。** 输出节点上只有 $M_1$ 和 $R_F$ 两条通路（$M_2$ 开路），因此流过 $R_F$ 的电流必须等于 $M_1$ 的漏极电流：

$$\frac{v_G - v_{out}}{R_F} = g_{m1}v_G\ \Longrightarrow\ v_{out} = v_G\,(1 - g_{m1}R_F) .$$

**G 点的 KCL。** 从 $V_{in}$ 经 $R_1$ 流来的电流继续流过 $R_F$（栅极无电流），而刚才已求得该电流为 $g_{m1}v_G$：

$$\frac{v_{in} - v_G}{R_1} = g_{m1}v_G\ \Longrightarrow\ v_G = \frac{v_{in}}{1 + g_{m1}R_1} .$$

**增益：**

$$
\begin{aligned}
A_v(0) &= \frac{v_{out}}{v_{in}} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1}\\
&= \frac{1 - (5\ \mathrm{mS})(4\ \mathrm{k\Omega})}{1 + (5\ \mathrm{mS})(2\ \mathrm{k\Omega})} = \frac{1 - 20}{1 + 10} = -\frac{19}{11} = -1.73 .
\end{aligned}
$$

作为对比，环路增益（loop gain）为无穷大时的理想值为 $-R_F/R_1 = -2$。分子中的“1”来自经 $R_F$ 直接前馈（feedforward）的小信号，分母中的“1”则反映了 $M_1$ 的跨导（transconductance）为有限值。

**直观理解。** 在 $\lambda = 0$ 且负载为理想电流源的情况下，输出端的开环增益（open-loop gain）只由 $R_F$ 决定，因此环路增益不大（$g_{m1}R_1 = 10$）。这就是增益接近但并不等于 $-2$ 的原因。

### 第 3 步 — 极高频：$C_1$ 短路

$C_1$ 短路时，节点 N 处于交流地，电路分成两个独立的部分：

- **输入侧：** $V_{in}$ → $R_1$ → G → $R_2$ → 地。由于栅极无电流，这是一个分压器：
$$v_G = v_{in}\,\frac{R_2}{R_1 + R_2} = \frac{v_{in}}{2} .$$
- **输出侧：** $M_1$ 的漏极电流从输出端经 $R_3$ 流到地（N 接地），$M_2$ 开路。这是以 $R_3$ 为负载的共源级（common-source stage）：
$$v_{out} = -g_{m1}R_3\,v_G .$$

从输出端回到 G 的通路已不复存在：**反馈消失了。**

**增益：**

$$A_v(\infty) = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -(5\ \mathrm{mS})(2\ \mathrm{k\Omega})\times\frac12 = -10\times\frac12 = -5 .$$

### 第 4 步 — 用完整的传递函数检验

为了了解两个极限之间的过渡，保留 $C_1$ 求解这个三节点电路。各电阻都等于 $R$；令 $k = g_{m1}R = 10$，$\tau = RC_1 = (2\ \mathrm{k\Omega})(100\ \mathrm{pF}) = 200$ ns。将每个 KCL 方程都乘以 $R$：

$$
\begin{aligned}
\text{G:}&\quad (v_{in} - v_G) + (v_N - v_G) = 0\ \Longrightarrow\ v_N = 2v_G - v_{in},\\
\text{out:}&\quad kv_G + (v_{out} - v_N) = 0\ \Longrightarrow\ v_N = v_{out} + kv_G,\\
\text{N:}&\quad (v_G - v_N) + (v_{out} - v_N) - s\tau\,v_N = 0\ \Longrightarrow\ v_G + v_{out} = (2 + s\tau)\,v_N .
\end{aligned}
$$

由前两式得 $v_{out} = (2 - k)v_G - v_{in}$。将 $v_N$ 和 $v_{out}$ 代入第三式：

$$
\begin{aligned}
(3 - k)\,v_G - v_{in} &= (2 + s\tau)(2v_G - v_{in})\\
v_G\,(-1 - k - 2s\tau) &= -v_{in}\,(1 + s\tau)\\
v_G &= \frac{1 + s\tau}{1 + k + 2s\tau}\,v_{in} .
\end{aligned}
$$

于是

$$
\begin{aligned}
v_{out} &= \frac{(2 - k)(1 + s\tau) - (1 + k + 2s\tau)}{1 + k + 2s\tau}\,v_{in} = \frac{1 - 2k - ks\tau}{1 + k + 2s\tau}\,v_{in},\\
A_v(s) &= -\frac{19 + 10\,s\tau}{11 + 2\,s\tau} .
\end{aligned}
$$

- $s \to 0$：$A_v = -19/11 = -1.73$。✓
- $s \to \infty$：$A_v = -10/2 = -5$。✓

增益的幅值在零点 $\omega_z = 1.9/\tau = 9.5\times10^6$ rad/s（约 1.5 MHz）与极点 $\omega_p = 5.5/\tau = 2.75\times10^7$ rad/s（约 4.4 MHz）之间从 1.73 上升到 5。比值 $\omega_p/\omega_z = 5/1.73$ 与两个增益之比相符。

### 结果

$$A_v\big|_{\omega\to0} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1} = -\frac{19}{11} \approx -1.73,\qquad A_v\big|_{\omega\to\infty} = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -5 .$$

低频时，$R_2 + R_3$ 提供并联反馈，增益接近理想值 $-(R_2 + R_3)/R_1 = -2$。高频时，$C_1$ 把 $R_2$–$R_3$ 的连接点接地，从而消除了反馈：输入看到的是 $R_1$–$R_2$ 分压器，$M_1$ 只驱动 $R_3$。$g_{m2}$ 不起作用。

**常见错误。** 给出低频时的理想值 $-2$。这相当于假设环路增益无穷大；而实际上 $g_{m1}R_1 = 10$，又存在经 $R_F$ 的前馈，实际值为 $-19/11$。

**常见错误。** 高频时忘记 $R_1$–$R_2$ 分压器，答成 $-g_{m1}R_3 = -10$。N 接地后，$R_2$ 从 G 接到地，因此只有一半的 $v_{in}$ 到达栅极。

**常见错误。** 把 $g_{m2}$ 当作负载电导，或者认为高频时增益为零。$M_2$ 的栅极和源极电位固定，因此在 $\lambda = 0$ 时它在小信号模型中是开路；高频时输出端仍经 $R_3$ 接到（交流）地，所以增益是 $-5$，而不是零。
