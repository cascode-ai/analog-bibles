# 详细步骤 - R112

**思路。** 在小信号电路的输出节点列 KCL，解出 $v_{out}/v_{in}$，再用叠加原理验证结果：$M_1$ 是共源级（common-source stage，CS），$M_2$ 是源极跟随器（source follower），二者都由 $v_{in}$ 驱动。

### 第 1 步 — 小信号模型（small-signal model）

输出端不接负载，$V_{DD}$ 为交流地，且 $\gamma = 0$ 使 $g_{mb}$ 电流源不复存在。$M_1$ 的 $v_{gs1} = v_{in}$；$M_2$ 的源极就是输出节点，因此 $v_{gs2} = v_{in} - v_{out}$。于是，$M_1$ 等效为一个从 out 流向地的受控源 $g_{m1}v_{in}$，并联 $r_{O1}$；$M_2$ 等效为一个从地（即其漏极）流入 out 的受控源 $g_{m2}(v_{in} - v_{out})$，$r_{O2}$ 接在地与 out 之间。

<!-- diagram: diagram-01.cir -->

小信号漏极电流为

$$i_{D1}\ (\text{out}\to\text{ground}) = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}},$$

$$i_{D2}\ (V_{DD}\to\text{out}) = g_{m2}(v_{in} - v_{out}) + \frac{0 - v_{out}}{r_{O2}} = g_{m2}(v_{in} - v_{out}) - \frac{v_{out}}{r_{O2}},$$

其中由 $v_{ds2} = 0 - v_{out}$ 得到 $-v_{out}/r_{O2}$ 项。

### 第 2 步 — 输出节点的 KCL

输出端不接负载，因此 $i_{D2} = i_{D1}$：

$$g_{m2}(v_{in} - v_{out}) - \frac{v_{out}}{r_{O2}} = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}}.$$

把 $v_{in}$ 项移到左边、$v_{out}$ 项移到右边：

$$(g_{m2} - g_{m1})\,v_{in} = \left(g_{m2} + \frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right)v_{out},$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2} - g_{m1}}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}}.$$

### 第 3 步 — 将增益写成标准形式

分母是若干电导之和，因此它的倒数为 $\frac{1}{g_{m2}}\parallel r_{O1}\parallel r_{O2}$：

$$A_v = -(g_{m1} - g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

将第 2 步结果的分子和分母同乘 $r_{O1}r_{O2}$，即可写成单个分式：

$$
\begin{aligned}
A_v &= \frac{(g_{m2} - g_{m1})\,r_{O1}r_{O2}}{g_{m2}r_{O1}r_{O2} + r_{O2} + r_{O1}}\\[4pt]
&= -\frac{(g_{m1} - g_{m2})\,r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.
\end{aligned}
$$

### 第 4 步 — 用叠加原理验证：共源级加源极跟随器

**(a) 仅驱动 $M_1$ 的栅极**（$M_2$ 的栅极接交流地）。$M_1$ 是一个共源级，其负载为 $r_{O1}$ 与从 $M_2$ 源极看进去的电阻 $\frac{1}{g_{m2}}\parallel r_{O2}$：

$$A_{v,a} = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

**(b) 仅驱动 $M_2$ 的栅极**（$M_1$ 的栅极接交流地，因此 $M_1$ 只相当于 $r_{O1}$）。$M_2$ 是一个源极跟随器，负载为 $R_L = r_{O1}\parallel r_{O2}$（之所以并联 $r_{O2}$，是因为 $M_2$ 的漏极接交流地）：

$$A_{v,b} = \frac{g_{m2}R_L}{1 + g_{m2}R_L} = \frac{g_{m2}}{\dfrac{1}{R_L} + g_{m2}} = \frac{g_{m2}}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}} = g_{m2}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

**求和：**

$$A_v = A_{v,a} + A_{v,b} = (-g_{m1} + g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right),$$

与第 3 步的结果一致。当 $v_{in}$ 升高时，$M_1$ 把输出**拉低**（$-g_{m1}$），而 $M_2$ 把输出**拉高**（$+g_{m2}$）；二者作用于同一个很小的输出电阻（output resistance），该电阻主要由 $1/g_{m2}$ 决定。

### 第 5 步 — $r_O$ 很大时的极限

当 $r_{O1}, r_{O2} \gg 1/g_{m2}$ 时，并联值 $\approx 1/g_{m2}$，因此

$$A_v \approx -\frac{g_{m1} - g_{m2}}{g_{m2}} = 1 - \frac{g_{m1}}{g_{m2}}.$$

当 $g_{m1} > g_{m2}$ 时增益为负（共源作用占优），当 $g_{m1} = g_{m2}$ 时增益约为零，当 $g_{m1} < g_{m2}$ 时增益为正但小于 1。输出端不接负载，两个器件流过相同的偏置电流，因此由平方律（square law）得 $g_{m1}/g_{m2} = \sqrt{(W/L)_1/(W/L)_2}$：在这一近似下，增益只取决于两管的尺寸之比，并且由于输出端的电阻 $1/g_{m2}$ 很低，$|A_v|$ 始终不大。

**关于偏置的附注。** 由于 $\gamma = 0$，两个器件的 $V_{TH}$ 相同。$M_1$ 处于饱和区要求 $V_{out} \ge V_{in} - V_{TH}$，而 $M_2$ 导通要求 $V_{in} - V_{out} > V_{TH}$，即 $V_{out} < V_{in} - V_{TH}$。二者互相矛盾，因此实际上 $M_1$ 处于饱和区边缘或线性区（triode region）；这正是题目要求我们**假设**其饱和的原因。

### 结果

$$A_v = \frac{v_{out}}{v_{in}} = -(g_{m1} - g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right) = -\frac{(g_{m1} - g_{m2})\,r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.$$

当 $r_{O1}, r_{O2} \gg 1/g_{m2}$ 时：$A_v \approx -(g_{m1} - g_{m2})/g_{m2} = 1 - g_{m1}/g_{m2}$。

**常见错误。** 把 $M_2$ 当作普通的二极管连接（diode-connected）负载，得到 $A_v = -g_{m1}/g_{m2}$（或 $-g_{m1}(\frac{1}{g_{m2}}\parallel r_{O1}\parallel r_{O2})$）。$M_2$ 的栅极由 $v_{in}$ 驱动，这使它成为源极跟随器，并在分子中引入 $+g_{m2}$ 项。

**常见错误。** 把 $M_2$ 当作只呈现 $r_{O2}$ 的电流源（current source）负载，从而得到很大的增益 $-g_{m1}(r_{O1}\parallel r_{O2})$。面对输出端的是 $M_2$ 的**源极**，因此其 $g_{m2}v_{out}$ 项在输出节点上引入了 $1/g_{m2}$，使增益保持在较小的数值。

**常见错误。** 写成 $v_{gs2} = v_{in}$，而不是 $v_{in} - v_{out}$。这样分母中就丢掉了 $g_{m2}$，得到的增益会大得多。
