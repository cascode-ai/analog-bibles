# 详细步骤 - R401

**思路。** $M_1$ 是一个共栅级，分压器 $C_1$–$C_2$ 把 $V_{out}$ 的一部分送回其栅极，与源极–栅极输入回路相串联：这是电压串联反馈。因此 $Z_{in}$ 等于开环值乘以 $(1 + T)$，$Z_{out}$ 等于开环值除以 $(1 + T)$。下面先求开环量和 $T$，再直接用基尔霍夫电流定律（KCL）验证两个结果。

### 第 1 步 — 小信号模型（small-signal model）

对小信号而言，理想的 $I_1$ 相当于开路；又因为 $\lambda = 0$，所以没有 $r_O$。$M_1$ 是一个从漏极（输出端）流向源极（输入端）的受控电流；其衬底接地，因此 $v_{BS} = 0 - v_{in}$：

$$i_d = g_{m1}v_{GS} + g_{mb1}v_{BS} = g_{m1}(v_P - v_{in}) - g_{mb1}v_{in}.$$

栅极（节点 P）不取电流，因此 $C_1$ 和 $C_2$ 中流过同一电流。输出节点上没有连接其他元件。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 识别反馈类型

分压器跨接在输出端，因此它检测的是输出**电压**（并联检测）。由于 P 点不取电流，

$$v_P = \beta\,v_{out}, \qquad \beta = \frac{1/(sC_2)}{1/(sC_1) + 1/(sC_2)} = \frac{C_1}{C_1 + C_2} .$$

$M_1$ 响应的是 $v_{GS} = v_P - v_{in}$，因此在源极–栅极回路中，$v_P$ 以串联方式从输入中减去（串联混合）。所以该反馈是**电压串联反馈**：它使 $Z_{in}$ 乘以 $(1 + T)$，使 $Z_{out}$ 除以 $(1 + T)$。

**负载效应。** 从输出端看，由于 P 点没有栅极电流，分压器就是 $C_1$ 与 $C_2$ 的串联：

$$C_s = \frac{C_1C_2}{C_1 + C_2} .$$

从栅极一侧看，分压器中没有电流，因此在开环电路中栅极直接接交流地。

### 第 3 步 — 开环电路与环路增益

开环电路就是一个普通的共栅级：栅极接交流地，输出端只接负载 $C_s$。

**开环输入阻抗。** 栅极接地时，$i_d = -(g_{m1} + g_{mb1})v_{in}$，而由 $V_{in}$ 流入源极的电流为 $-i_d$：

$$Z_{in,open} = \frac{v_{in}}{-i_d} = \frac{1}{g_{m1} + g_{mb1}} ,$$

由于 $\lambda = 0$，它与负载无关。

**开环输出阻抗。** $v_{in} = 0$ 且栅极接地时，无论输出电压为多少都有 $i_d = 0$，而 $I_1$ 相当于开路，因此从输出端只能看到分压器：

$$Z_{out,open} = \frac{1}{sC_s} .$$

**环路增益。** 令 $v_{in} = 0$（源极接交流地，因此体效应不起作用），在栅极处断开环路，并在该处加 $v_t$：

$$
\begin{aligned}
i_d &= g_{m1}v_t \quad\text{(out of the output node, down through } M_1\text{)}\\
sC_s\,v_{out} &= -i_d \quad\text{(KCL at the output: only the divider can supply } i_d\text{)}\\
v_{out} &= -\frac{g_{m1}v_t}{sC_s}\\
v_P &= \beta\,v_{out} = -\frac{g_{m1}\beta}{sC_s}\,v_t .
\end{aligned}
$$

$$
\begin{aligned}
T &= -\frac{v_P}{v_t} = \frac{g_{m1}\beta}{sC_s},\\
\frac{\beta}{C_s} &= \frac{C_1}{C_1 + C_2}\cdot\frac{C_1 + C_2}{C_1C_2} = \frac{1}{C_2}
\quad\Longrightarrow\quad
T = \frac{g_{m1}}{sC_2} .
\end{aligned}
$$

式中只出现 $g_{m1}$，因为反馈信号作用于栅极，而不是衬底。由于输出节点只接有电容，当 $\omega \to 0$ 时 $|T| \to \infty$。

### 第 4 步 — 闭环输入阻抗

$$
\begin{aligned}
Z_{in} &= Z_{in,open}\,(1 + T)\\
&= \frac{1}{g_{m1} + g_{mb1}}\left(1 + \frac{g_{m1}}{sC_2}\right)\\
&= \frac{1}{g_{m1} + g_{mb1}} + \frac{g_{m1}}{(g_{m1} + g_{mb1})\,sC_2} .
\end{aligned}
$$

不计体效应（$g_{mb1} = 0$）时：

$$Z_{in} = \frac{1}{g_{m1}} + \frac{1}{sC_2} .$$

### 第 5 步 — 直接验证 $Z_{in}$

$V_{in}$ 注入源极的电流 $i_{in}$ 经 $M_1$ 流到输出节点（$i_d = -i_{in}$）；由于 $I_1$ 是理想的，它只能经 $C_1$、再经 $C_2$ 流到地。因此

$$v_P = \frac{i_{in}}{sC_2} .$$

代入 $i_d = g_{m1}(v_P - v_{in}) - g_{mb1}v_{in}$，并令 $i_d = -i_{in}$：

$$
\begin{aligned}
-i_{in} &= g_{m1}\frac{i_{in}}{sC_2} - (g_{m1} + g_{mb1})\,v_{in}\\
(g_{m1} + g_{mb1})\,v_{in} &= i_{in}\left(1 + \frac{g_{m1}}{sC_2}\right)\\
Z_{in} = \frac{v_{in}}{i_{in}} &= \frac{1 + g_{m1}/(sC_2)}{g_{m1} + g_{mb1}} ,
\end{aligned}
$$

与第 4 步一致。当 $g_{mb1} = 0$ 时：$v_{in}$ 等于传导 $i_{in}$ 所需的 $v_{GS}$（即 $i_{in}/g_{m1}$），加上同一电流在 $C_2$ 上产生的栅极电压 $i_{in}/(sC_2)$；$C_1$ 不出现在结果中。$V_{in}$ 升高时，输出端以及（经分压器）栅极随之升高，使 $v_{GS}$ 恢复，因此在直流下 $Z_{in} \to \infty$。

### 第 6 步 — 闭环输出阻抗及其验证

$$
\begin{aligned}
Z_{out} &= \frac{Z_{out,open}}{1 + T} = \frac{1/(sC_s)}{1 + g_{m1}/(sC_2)}\\
&= \frac{1}{sC_s + g_{m1}C_s/C_2}\\
&= \frac{1}{sC_s + g_{m1}\,\dfrac{C_1}{C_1 + C_2}} .
\end{aligned}
$$

**直接验证。** 令 $V_{in} = 0$（于是 $v_{BS} = 0$，$g_{mb1}$ 不起作用），在输出端加 $v_X$。测试源经 $M_1$ 提供电流 $g_{m1}v_P = g_{m1}\beta v_X$，经串联电容提供 $sC_sv_X$：

$$
\begin{aligned}
I_X &= v_X\left(g_{m1}\frac{C_1}{C_1 + C_2} + s\frac{C_1C_2}{C_1 + C_2}\right) = v_X\,\frac{C_1\,(g_{m1} + sC_2)}{C_1 + C_2}\\
Z_{out} &= \frac{v_X}{I_X} = \frac{C_1 + C_2}{C_1\,(g_{m1} + sC_2)} ,
\end{aligned}
$$

与反馈法的结果一致。它是两条支路的并联：

$$Z_{out} = \frac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} .$$

低频时 $Z_{out} \approx (1 + C_2/C_1)/g_{m1} = 1/(\beta g_{m1})$：相当于一个二极管连接（diode-connected）的晶体管，只是其栅极只得到漏极电压的 $\beta$ 倍。

### 结果

$$Z_{in} = \frac{1}{g_{m1}} + \frac{1}{sC_2}\qquad(\text{without body effect}),$$

$$Z_{in} = \frac{1}{g_{m1} + g_{mb1}} + \frac{g_{m1}}{(g_{m1} + g_{mb1})\,sC_2}\qquad(\text{with body effect}),$$

$$Z_{out} = \frac{C_1 + C_2}{C_1\,(g_{m1} + sC_2)} = \frac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} \approx \frac{1 + C_2/C_1}{g_{m1}}\ \text{at low frequencies}.$$

环路增益为 $T = g_{m1}/(sC_2)$，其中 $\beta = C_1/(C_1 + C_2)$：$Z_{in} = Z_{in,open}(1 + T)$，$Z_{out} = Z_{out,open}/(1 + T)$，其中 $Z_{in,open} = 1/(g_{m1} + g_{mb1})$，$Z_{out,open} = 1/(sC_s)$。

**常见错误。** 认为输入阻抗仍为 $1/g_{m1}$，或者认为反馈使它减小。分压器把 $v_{out}$ 送回栅极，与源极–栅极输入回路相串联，因此阻抗乘以 $(1 + T)$，这正是 $1/(sC_2)$ 项的来源。

**常见错误。** 把分压比弄反。$C_1$ 接在输出端与 P 之间，$C_2$ 接在 P 与地之间，因此 $v_P/v_{out} = C_1/(C_1 + C_2)$，$Z_{out} \approx (1 + C_2/C_1)/g_{m1}$，而不是 $(1 + C_1/C_2)/g_{m1}$。

**常见错误。** 把该电路当作输入加在栅极的共源级（common-source stage）来分析。$V_{in}$ 驱动的是**源极**；栅极只由分压器驱动。
