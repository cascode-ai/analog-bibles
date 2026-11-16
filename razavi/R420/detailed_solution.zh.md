# 详细步骤 - R420

**思路。** $C_1$ 在极低频时相当于开路，在极高频时相当于短路，因此两种极限情况都是纯电阻电路。低频时，$R_2 + R_3$ 是从输出端到 $M_1$ 栅极的并联反馈（shunt feedback）电阻；高频时，$C_1$ 把这个电阻的中点接地，反馈消失。用基尔霍夫电流定律（KCL）分别求解两种情况，再用完整的传递函数验证这两个极限。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的栅极记为节点 G，把 $R_2$、$R_3$ 和 $C_1$ 的连接点记为节点 N。$\lambda = 0$ 时，$M_1$ 是从输出节点流向地的电流 $g_{m1}v_G$，没有 $r_{O1}$。$M_2$ 的栅极和源极都处于固定电位，且没有 $r_O$，因此它相当于**开路**，$g_{m2}$ 不起作用。$g_{m1} = 1/(200\ \Omega) = 5$ mS，$R_1 = R_2 = R_3 = 2\ \mathrm{k\Omega}$，因此对每个电阻都有 $g_{m1}R = 10$。

### 第 2 步 — 极低频：$C_1$ 开路

$R_2$ 和 $R_3$ 串联，构成从输出端到 G 的一个反馈电阻：

$$R_F = R_2 + R_3 = 4\ \mathrm{k\Omega} .$$

**输出节点的 KCL。** 只有 $M_1$ 和 $R_F$ 接在输出端（$M_2$ 开路），因此

$$\frac{v_G - v_{out}}{R_F} = g_{m1}v_G\ \Longrightarrow\ v_{out} = v_G\,(1 - g_{m1}R_F) .$$

**节点 G 的 KCL。** 流过 $R_1$ 的电流继续流过 $R_F$，且等于 $g_{m1}v_G$：

$$\frac{v_{in} - v_G}{R_1} = g_{m1}v_G\ \Longrightarrow\ v_G = \frac{v_{in}}{1 + g_{m1}R_1} .$$

**增益：**

$$
\begin{aligned}
A_v(0) &= \frac{v_{out}}{v_{in}} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1}\\
&= \frac{1 - (5\ \mathrm{mS})(4\ \mathrm{k\Omega})}{1 + (5\ \mathrm{mS})(2\ \mathrm{k\Omega})} = \frac{1 - 20}{1 + 10} = -\frac{19}{11} = -1.73 .
\end{aligned}
$$

环路增益（loop gain）无穷大时的理想值为 $-R_F/R_1 = -2$；分子中的“1”是经 $R_F$ 前馈（feedforward）的信号，分母中的“1”反映了 $M_1$ 的跨导（transconductance）有限（$g_{m1}R_1 = 10$）。

### 第 3 步 — 极高频：$C_1$ 短路

节点 N 处于交流地，电路分成两部分：

- **输入侧：** $R_1$ 和 $R_2$ 构成分压器（栅极不取电流）：
$$v_G = v_{in}\,\frac{R_2}{R_1 + R_2} = \frac{v_{in}}{2} .$$
- **输出侧：** $M_1$ 只驱动接地的 $R_3$（$M_2$ 开路）：
$$v_{out} = -g_{m1}R_3\,v_G .$$

从输出端回到 G 没有任何通路：**反馈消失了。**

$$A_v(\infty) = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -(5\ \mathrm{mS})(2\ \mathrm{k\Omega})\times\frac12 = -10\times\frac12 = -5 .$$

### 第 4 步 — 用完整传递函数验证

所有电阻都等于 $R$，$k = g_{m1}R = 10$，$\tau = RC_1 = (2\ \mathrm{k\Omega})(100\ \mathrm{pF}) = 200$ ns，各 KCL 方程乘以 $R$ 后为：

$$
\begin{aligned}
\text{G:}&\quad (v_{in} - v_G) + (v_N - v_G) = 0\ \Longrightarrow\ v_N = 2v_G - v_{in},\\
\text{out:}&\quad kv_G + (v_{out} - v_N) = 0\ \Longrightarrow\ v_N = v_{out} + kv_G,\\
\text{N:}&\quad (v_G - v_N) + (v_{out} - v_N) - s\tau\,v_N = 0\ \Longrightarrow\ v_G + v_{out} = (2 + s\tau)\,v_N .
\end{aligned}
$$

由前两式得 $v_{out} = (2 - k)v_G - v_{in}$。把 $v_N$ 和 $v_{out}$ 代入第三式：

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

幅值在零点 $\omega_z = 1.9/\tau = 9.5\times10^6$ rad/s（约 1.5 MHz）与极点 $\omega_p = 5.5/\tau = 2.75\times10^7$ rad/s（约 4.4 MHz）之间从 1.73 上升到 5；$\omega_p/\omega_z = 5/1.73$，正是两个增益之比。

### 结果

$$A_v\big|_{\omega\to0} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1} = -\frac{19}{11} \approx -1.73,\qquad A_v\big|_{\omega\to\infty} = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -5 .$$

低频时，$R_2 + R_3$ 提供并联反馈，增益接近理想值 $-(R_2 + R_3)/R_1 = -2$。高频时，$C_1$ 把 $R_2$–$R_3$ 的连接点接地，从而去掉了反馈：输入端看到的是 $R_1$–$R_2$ 分压器，$M_1$ 只驱动 $R_3$。$g_{m2}$ 不起作用。

**常见错误。** 给出低频时的理想值 $-2$。由于 $g_{m1}R_1 = 10$，并且存在经 $R_F$ 的前馈，实际值为 $-19/11$。

**常见错误。** 高频时忘记 $R_1$–$R_2$ 分压器，给出 $-g_{m1}R_3 = -10$。N 接地时，只有一半的 $v_{in}$ 到达栅极。

**常见错误。** 把 $g_{m2}$ 当作负载电导，或者说高频时增益为零。$M_2$ 相当于开路，而输出端仍有接到交流地的 $R_3$ 作为负载，因此增益为 $-5$。
