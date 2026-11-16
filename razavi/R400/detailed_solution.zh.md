# 详细步骤 - R400

**思路。** 把 CMOS 反相器 $M_1$–$M_2$ 化简为一个跨导和一个电阻。$C_2$ 在它周围构成电压并联负反馈（shunt–shunt negative feedback）环路，因此每个阻抗都可以由布莱克曼阻抗公式（Blackman's impedance formula）求出，然后再直接用基尔霍夫电流定律（KCL）加以验证。

### 第 1 步 — 小信号模型（small-signal model）与反馈结构

把相连的两个栅极记为节点 G。$M_1$ 从输出节点抽取电流 $g_{m1}v_G$；PMOS 管 $M_2$ 向输出节点注入电流 $g_{m2}(0 - v_G)$，也就是同样从输出节点抽取 $g_{m2}v_G$；$r_{O1}$ 和 $r_{O2}$ 都接到交流地。因此，该反相器等效为一个从输出节点抽取电流的电流源 $G_mv_G$，与一个接地电阻 $R$ 并联：

$$G_m = g_{m1} + g_{m2}, \qquad R = r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}},$$

不接其他元件时，其增益为 $v_{out}/v_G = -G_mR$。栅极不取电流，因此在节点 G 处只有 $C_1$ 和 $C_2$ 中有电流。

<!-- diagram: diagram-01.cir -->

$C_2$ 检测 $v_{out}$ 并把电流送回 G：这是围绕反相放大器的电压并联负反馈，它会降低两个端口的阻抗。每个阻抗都由布莱克曼公式求出：

$$Z = Z_0\,\frac{1 + T_{sc}}{1 + T_{oc}},$$

其中 $Z_0$ 是 $G_m = 0$ 时的端口阻抗，$T_{sc}$、$T_{oc}$ 分别是端口短路和开路时的环路增益。求环路增益时，把 $G_mv_G$ 换成一个方向相同（流出输出节点）的测试电流 $i_t$：$T = -G_mv_G/i_t$。

### 第 2 步 — 从节点 G 看进去的阻抗 $Z_G$（反馈法）

$Z_{in}$ 是 $C_1$ 与从节点 G 看进电路其余部分的阻抗 $Z_G$ 的串联。

**$Z_0$（$G_m = 0$）。** 从 G 看进去，是 $C_2$ 与 $R$ 串联到地：

$$Z_0 = \frac{1}{sC_2} + R = \frac{1 + sRC_2}{sC_2}.$$

**$T_{sc}$（G 对地短路）。** 此时 $v_G = 0$，受控源不产生电流：$T_{sc} = 0$。

**$T_{oc}$（G 开路）。** $C_2$ 中没有电流，因此 $v_G = v_{out}$。接入测试源后，对输出节点列 KCL：

$$
\begin{aligned}
i_t + \frac{v_{out}}{R} &= 0\\
v_G = v_{out} &= -i_tR .
\end{aligned}
$$

受控源将输出 $G_mv_G = -G_mR\,i_t$，因此 $T_{oc} = -G_mv_G/i_t = G_mR$（为正，即负反馈）。

**结果。**

$$Z_G = Z_0\,\frac{1 + 0}{1 + G_mR} = \frac{1 + sRC_2}{sC_2\,(1 + G_mR)} = \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)} .$$

### 第 3 步 — 用直接节点分析验证 $Z_G$

在节点 G 加电压 $v_G$。流入 G 的电流只流过 $C_2$：$i_G = sC_2(v_G - v_{out})$。对输出节点列 KCL（电流经 $G_mv_G$、$R$ 和 $C_2$ 流出）：

$$
\begin{aligned}
G_mv_G + \frac{v_{out}}{R} + sC_2(v_{out} - v_G) &= 0\\
v_{out}\left(\frac1R + sC_2\right) &= v_G\,(sC_2 - G_m)\\
v_{out} &= v_G\,\frac{R\,(sC_2 - G_m)}{1 + sRC_2} .
\end{aligned}
$$

于是

$$
\begin{aligned}
i_G &= sC_2\,v_G\left[1 - \frac{R\,(sC_2 - G_m)}{1 + sRC_2}\right]\\
&= sC_2\,v_G\,\frac{1 + sRC_2 - sRC_2 + G_mR}{1 + sRC_2}\\
&= sC_2\,v_G\,\frac{1 + G_mR}{1 + sRC_2} ,
\end{aligned}
$$

因此

$$Z_G = \frac{v_G}{i_G} = \frac{1 + sRC_2}{sC_2\,(1 + G_mR)},$$

与第 2 步的结果完全相同（布莱克曼公式没有做任何近似）。

### 第 4 步 — 输入阻抗 $Z_{in}$

$C_1$ 与 $Z_G$ 串联：

$$Z_{in} = \frac{1}{sC_1} + \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)} .$$

- 最后一项是一个电容 $(1 + G_mR)\,C_2$，这就是**密勒效应（Miller effect）**：$C_2$ 两端的电压为 $v_G - v_{out} = (1 + G_mR)\,v_G$。
- 当 $G_mR \gg 1$ 时，中间一项 $R/(1 + G_mR) = R\parallel(1/G_m) \approx 1/G_m$：在高频下 $C_2$ 把栅极与漏极短接，反相器相当于“二极管连接”（diode-connected）。
- 因此，$Z_{in}$ 是 $C_1$、一个约为 $1/G_m$ 的电阻和密勒电容 $(1 + G_mR)C_2$ 三者的串联；在低频下，它基本上就是 $C_1$ 与 $(1 + G_mR)C_2$ 的串联。

### 第 5 步 — 输出阻抗 $Z_{out}$（反馈法）

令 $V_{in} = 0$：节点 G 经 $C_1$ 接地，并经 $C_2$ 接到输出端。

**$Z_0$（$G_m = 0$）。** 从输出端看进去，是 $R$ 与串联的 $C_2$–$C_1$ 相并联：

$$C_s = \frac{C_1C_2}{C_1 + C_2}, \qquad \frac{1}{sC_1} + \frac{1}{sC_2} = \frac{1}{sC_s}, \qquad Z_0 = R\parallel\frac{1}{sC_s} .$$

**$T_{sc}$（输出端短路）。** 此时 $C_1$ 和 $C_2$ 都接在 G 与地之间，且没有任何信号驱动 G，因此 $v_G = 0$，$T_{sc} = 0$。

**$T_{oc}$（输出端开路）。** 流出输出端的测试电流 $i_t$ 只能由 $Z_0$ 提供，因此 $v_{out} = -i_tZ_0$，而 G 是由 $C_2$（上）和 $C_1$（下）构成的分压器的抽头：

$$v_G = v_{out}\,\frac{1/(sC_1)}{1/(sC_1) + 1/(sC_2)} = v_{out}\,\frac{C_2}{C_1 + C_2} .$$

因此

$$
\begin{aligned}
G_mv_G &= -i_t\,G_mZ_0\,\frac{C_2}{C_1 + C_2}\\
T_{oc} &= G_mZ_0\,\frac{C_2}{C_1 + C_2} .
\end{aligned}
$$

**结果。**

$$
\begin{aligned}
Z_{out} &= \frac{Z_0}{1 + G_mZ_0\,C_2/(C_1 + C_2)}\\
&= \frac{1}{1/Z_0 + G_mC_2/(C_1 + C_2)}\\
&= \frac{1}{\dfrac1R + sC_s + \dfrac{G_mC_2}{C_1 + C_2}} .
\end{aligned}
$$

### 第 6 步 — 直接验证 $Z_{out}$ 并化简

令 $V_{in} = 0$，在输出端加电压 $v_X$。测试源通过 $R$ 提供电流 $v_X/R$，通过受控源提供 $G_mv_G = G_mv_X\,C_2/(C_1 + C_2)$（利用第 5 步的分压关系），通过串联电容提供 $sC_sv_X$：

$$I_X = v_X\left[\frac1R + \frac{G_mC_2}{C_1 + C_2} + \frac{sC_1C_2}{C_1 + C_2}\right].$$

通分，公分母为 $R(C_1 + C_2)$：

$$
\begin{aligned}
\frac{I_X}{v_X} &= \frac{(C_1 + C_2) + G_mRC_2 + sRC_1C_2}{R\,(C_1 + C_2)}\\
Z_{out} = \frac{v_X}{I_X} &= \frac{R\,(C_1 + C_2)}{C_1 + C_2 + C_2R\,(G_m + sC_1)} ,
\end{aligned}
$$

与第 5 步一致。它是三条支路的并联：

$$Z_{out} = R\ \Big\|\ \frac{C_1 + C_2}{G_mC_2}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)} .$$

低频时电容支路相当于开路，于是

$$Z_{out} \approx \frac{R}{1 + G_mR\,\dfrac{C_2}{C_1 + C_2}} \approx \frac{1}{G_m}\left(1 + \frac{C_1}{C_2}\right) \quad\text{when } G_mR\,\frac{C_2}{C_1 + C_2} \gg 1 .$$

$v_{out}$ 中只有 $C_2/(C_1 + C_2)$ 这一部分到达栅极，因此该电路相当于一个二极管连接的反相器，只是其跨导减小为原来的这一比例倍：$R$ 被除以一加上低频环路增益 $G_mR\,C_2/(C_1 + C_2)$。

### 结果

令 $G_m = g_{m1} + g_{m2}$，$R = r_{O1}\parallel r_{O2}$（反相器增益为 $-G_mR$），则

$$Z_{in} = \frac{1}{sC_1} + \frac{R}{1 + G_mR} + \frac{1}{sC_2\,(1 + G_mR)},$$

即 $C_1$ 与阻值为 $R/(1 + G_mR) \approx 1/G_m$ 的电阻以及密勒电容 $(1 + G_mR)C_2$ 三者串联。

$$Z_{out} = \frac{R\,(C_1 + C_2)}{C_1 + C_2 + C_2R\,(G_m + sC_1)} = R\ \Big\|\ \frac{C_1 + C_2}{G_mC_2}\ \Big\|\ \frac{1}{sC_1C_2/(C_1 + C_2)},$$

它在低频时为 $R/[1 + G_mRC_2/(C_1 + C_2)]$：开环电阻 $R$ 除以一加环路增益 $G_mRC_2/(C_1 + C_2)$。

**常见错误。** 把 $M_2$ 当作无源的电流源负载，只用 $g_{m1}$。两个栅极都由节点 G 驱动，因此等效跨导为 $g_{m1} + g_{m2}$。

**常见错误。** 把密勒电容写成 $G_mRC_2$ 而不是 $(1 + G_mR)C_2$（$C_2$ 两端的电压为 $(1 + G_mR)v_G$），或者忽略反馈而给出 $Z_{out} = R$。

**常见错误。** 把输出端的分压比弄反。$V_{in} = 0$ 时，$C_2$ 接在输出端与 G 之间，$C_1$ 接在 G 与地之间，因此 $v_G/v_{out} = C_2/(C_1 + C_2)$，而不是 $C_1/(C_1 + C_2)$。
