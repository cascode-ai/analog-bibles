# 详细步骤 - R397

**思路。** $M_1$ 是从节点 N 到输出端的共栅（同相）放大器，PMOS 共源器件 $M_2$ 检测输出并把电流送回 N（反相）：这是电压并联负反馈。电流源理想且 $\lambda = 0$ 时，输出节点的开环电阻为无穷大，因此环路增益为无穷大，N 为虚地，由此可直接得到 $Z_{in}$ 和增益；$Z_{out}$ 则是 $R_{out,open}/(1 + T)$ 的极限，每个结果都用基尔霍夫电流定律（KCL）加以验证。

### 第 1 步 — 小信号模型（small-signal model）

把 $R_S$ 右侧的节点（$M_1$ 的源极、$M_2$ 的漏极）记为 N。于是：

- $R_S$ 接在 in 与 N 之间；
- $M_1$：$v_{gs1} = -v_N$，因此电流 $g_{m1}v_N$ 从 N 向上流入输出端；
- $M_2$：源极接交流地，$v_{sg2} = -v_{out}$，因此它从 $V_{DD}$ 向 N 流过 $-g_{m2}v_{out}$；
- 两个电流源都相当于开路；不含 $r_O$，没有体效应（body effect），也没有栅极电流。

<!-- diagram: diagram-01.cir -->

KCL 方程（尚未加入任何测试源）：

$$\text{out:}\quad -g_{m1}v_N = 0, \qquad\qquad \text{N:}\quad \frac{V_{in} - v_N}{R_S} - g_{m2}v_{out} - g_{m1}v_N = 0 .$$

### 第 2 步 — 拓扑、符号与环路增益

$M_2$ 的栅极检测输出电压，其漏极把电流送回 N：这是**电压并联反馈**。它是负反馈：$v_N\uparrow$ → $M_1$ 从输出端抽取的电流减少 → $v_{out}\uparrow$ → $M_2$ 向 N 注入的电流减少 → $v_N\downarrow$。

输出节点只连接理想电流源、$M_1$ 的漏极和 $M_2$ 的栅极，因此其开环电阻为无穷大；设想在输出端与地之间接一个 $R_L$，最后再令 $R_L \to \infty$。令 $V_{in} = 0$，在 $M_2$ 的栅极处断开环路（这是精确的）并加 $v_t$，$M_2$ 向 N 注入 $-g_{m2}v_t$，N 看到的是 $R_S\parallel(1/g_{m1})$，而 $M_1$ 把 $g_{m1}v_N$ 向上送入 $R_L$：

$$v_N = -g_{m2}v_t\,\frac{R_S}{1 + g_{m1}R_S}, \qquad v_{out} = g_{m1}R_Lv_N,$$

$$T = -\frac{v_{out}}{v_t} = \frac{g_{m1}g_{m2}R_LR_S}{1 + g_{m1}R_S} \;\xrightarrow{R_L\to\infty}\; \infty .$$

### 第 3 步 — 输入阻抗：虚地

**反馈观点。** 环路断开时，从 N 看进去的阻抗是 $M_1$ 的源极阻抗 $1/g_{m1}$。在电流驱动下，N 只看到 $1/g_{m1}$，因此 $v_N = -g_{m2}v_t/g_{m1}$，$v_{out} = -g_{m2}R_Lv_t$，$T' = g_{m2}R_L$：

$$Z_{in} = \frac{1/g_{m1}}{1 + g_{m2}R_L} \;\xrightarrow{R_L\to\infty}\; 0 .$$

**直接验证。** 向 N 注入 $i_x$，输出节点的 KCL 给出 $g_{m1}v_N = 0$，因此无论 $i_x$ 为何值都有 $v_N = 0$；N 点的 KCL 给出 $i_x = g_{m2}v_{out}$：输出电压随之变化，使 $M_2$ 把注入的电流引走，而 $M_1$ 的小信号电流被迫为零。N 是**虚地**（$Z_{in} = 0$；计入 $R_S$ 时，信号源看到的就是 $R_S$）。

### 第 4 步 — 电压增益

由于 $v_N = 0$，流入 N 的电流 $V_{in}/R_S$ 必须由 $M_2$ 吸收（$M_1$ 和电流源中都没有电流）。对 N 列 KCL：

$$
\begin{aligned}
\frac{V_{in}}{R_S} - g_{m2}V_{out} &= 0\\
\frac{V_{out}}{V_{in}} &= +\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

增益为**正**：为了吸收流入 N 的电流，$M_2$ 必须**减少**注入的电流，因此它的栅极（即输出端）电压必须升高。

### 第 5 步 — 输出阻抗

**直接计算。** 令 $V_{in} = 0$（$R_S$ 接在 N 与地之间），在输出端加 $v_X$，对 N 列 KCL：

$$
\begin{aligned}
-\frac{v_N}{R_S} - g_{m2}v_X - g_{m1}v_N &= 0\\
v_N &= -\frac{g_{m2}R_S}{1 + g_{m1}R_S}\,v_X .
\end{aligned}
$$

测试电流向下流过 $M_1$，其漏源电流为 $-g_{m1}v_N$：

$$I_X = -g_{m1}v_N = \frac{g_{m1}g_{m2}R_S}{1 + g_{m1}R_S}\,v_X ,$$

$$Z_{out} = \frac{v_X}{I_X} = \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}.$$

**反馈观点。** 取 $R_{out,open} = R_L$，并利用第 2 步的 $T$：

$$Z_{out} = \frac{R_L}{1 + \dfrac{g_{m1}g_{m2}R_LR_S}{1 + g_{m1}R_S}} \;\xrightarrow{R_L\to\infty}\; \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S},$$

得到同样的有限结果：$R_{out,open}$ 与 $T$ 以相同的速率增大。

### 结果

$$Z_{in} = 0\ (\text{virtual ground}), \qquad Z_{out} = \frac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m2}} + \frac{1}{g_{m1}g_{m2}R_S}, \qquad \frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

$M_1$（共栅，同相）与 $M_2$（PMOS 共源，反相）构成环路增益为无穷大的电压并联反馈环路。N 被保持在交流地，输入电流 $V_{in}/R_S$ 由 $M_2$ 吸收，输出阻抗是 $R_{out,open}/(1 + T)$ 的极限。

**常见错误。** 给出反相增益。输入电流是靠 $M_2$ 的电流**减小**来抵消的，这需要输出电压升高：$V_{out}/V_{in} = +1/(g_{m2}R_S)$。

**常见错误。** 给出 $Z_{in} = 1/g_{m1}$，这只是从 $M_1$ 源极看进去的开环阻抗；无穷大的环路增益把它减小到零。

**常见错误。** 把 $M_2$ 误认作源极跟随器（source follower），或者因为负载是理想电流源就断定 $Z_{out}$ 为无穷大。$M_2$ 的栅极检测输出，其漏极驱动 N，因此环路使 $Z_{out}$ 为有限值。
