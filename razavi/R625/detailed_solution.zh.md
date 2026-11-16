# 详细步骤 - R625

**思路。** 经过输入失调存储后，残余的输入参考失调（input-referred offset）等于放大器自身的失调除以 $1 + A_v$。因此，需要求出在偏置电流、沟道长度和负载都不变的情况下，把输入对管宽度加倍后，放大器的失调 $V_{OS}$ 和增益 $A_v$ 如何变化；两者都变化 $\sqrt2$ 倍，而且都朝有利的方向变化。

### 第 1 步 — 输入失调存储后的残余失调

把放大器建模为 $V_{out} = -A_v(V_{XY} - V_{OS})$，其中 $V_{OS}$ 与输入端 X 串联，$V_{XY} = V_X - V_Y$。在失调消除相 $V_{XY} = V_{out}$，因此

$$
\begin{aligned}
V_{XY} &= -A_v(V_{XY} - V_{OS}),\\
V_{XY}(1 + A_v) &= A_vV_{OS},\\
V_{XY,0} &= \frac{A_v}{1 + A_v}V_{OS},
\end{aligned}
$$

这一电压由左极板接 $V_{CM}$ 的 $C_1$、$C_2$ 存储下来。在放大相 X 和 Y 浮空；忽略 $C_{in}$ 时，$V_{XY} = V_{XY,0} + V_{in}$：

$$
\begin{aligned}
V_{out} &= -A_v\left(\frac{A_v}{1 + A_v}V_{OS} + V_{in} - V_{OS}\right)\\
&= -A_v\left(V_{in} - \frac{V_{OS}}{1 + A_v}\right).
\end{aligned}
$$

输出为零的条件是

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v} \approx \frac{V_{OS}}{A_v}\quad(A_v \gg 1),$$

因此结果同时取决于 $V_{OS}$ 和 $A_v$，而二者都与输入对管的宽度有关。

### 第 2 步 — $W$ 加倍对过驱动电压和跨导（transconductance）的影响

在 $I_D$ 和 $L$ 不变的条件下（带撇号的量表示新设计）：

$$V_{ov} = \sqrt{\frac{2I_D}{\mu_nC_{ox}W/L}} \propto \frac{1}{\sqrt W} \quad\Longrightarrow\quad V_{ov}' = \frac{V_{ov}}{\sqrt2},$$

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} \propto \sqrt W \quad\Longrightarrow\quad g_m' = \sqrt2\,g_m .$$

### 第 3 步 — 对放大器自身失调 $V_{OS}$ 的影响

对于负载电阻为 $R_D$（或采用匹配的负载器件）的差分对，主要的失调项为

$$V_{OS} = \Delta V_{TH} + \frac{V_{ov}}{2}\left[\frac{\Delta(W/L)}{W/L} + \frac{\Delta R_D}{R_D}\right],$$

实际上，互不相关的各项按功率相加。各项的变化如下：

- **阈值失配。** $\Delta V_{TH} \propto 1/\sqrt{WL}$，在 $L$ 固定时 $W$ 加倍会使面积加倍，因此 $\Delta V_{TH}' = \Delta V_{TH}/\sqrt2$。
- **尺寸失配和负载失配。** 这些项都乘以 $V_{ov}/2$，而它减小了 $\sqrt2$ 倍（第 2 步）；负载不变，较大器件的相对尺寸失配也不会更差，因此这些项也（至少）减小 $\sqrt2$ 倍。

若采用电流源（current source）负载，负载项经 $g_{mP}/g_{mN}$ 折合到输入端；由于 $g_{mN}$ 增大为原来的 $\sqrt2$ 倍，该比值也减小 $\sqrt2$ 倍。每一项都减小 $\sqrt2$ 倍：

$$V_{OS}' = \frac{V_{OS}}{\sqrt2}.$$

### 第 4 步 — 对增益 $A_v$ 的影响

$A_v = g_m(R_D \parallel r_O)$，其中 $r_O = 1/(\lambda I_D)$。偏置电流、沟道长度（因而 $\lambda$）和负载都不变，因此输出电阻（output resistance）不变，于是

$$A_v' = \sqrt2\,A_v .$$

### 第 5 步 — 新的整体失调

当 $A_v \gg 1$ 时：

$$V_{OS,tot}' \approx \frac{V_{OS}'}{A_v'} = \frac{V_{OS}/\sqrt2}{\sqrt2\,A_v} = \frac12\cdot\frac{V_{OS}}{A_v} = \frac12V_{OS,tot}.$$

原设计的 $V_{OS,tot} = 1$ mV，因此

$$V_{OS,tot}' \approx \frac{1\ \mathrm{mV}}{2} = 0.5\ \mathrm{mV}.$$

**有限增益验算。** 保留“1 +”项，新旧失调之比为

$$\frac{V_{OS}'/(1 + \sqrt2A_v)}{V_{OS}/(1 + A_v)} = \frac{1 + A_v}{\sqrt2 + 2A_v}.$$

| 原增益 $A_v$ | 10 | 30 | 100 | $\to\infty$ |
|---|---|---|---|---|
| 新的整体失调 | 0.51 mV | 0.50 mV | 0.50 mV | 0.50 mV |

对于任何合理的增益，答案都是 0.5 mV。

### 第 6 步 — 关于所忽略因素的说明

- **输入电容。** $W$ 加倍也会使输入对管的电容 $C_{in}$ 加倍。若不忽略它，残余失调将乘以 $1 + 2C_{in}/C$（电容分压器使输入信号衰减）；除非 $C$ 很大，否则会损失一部分改善效果。
- **电荷注入。** 实际中，$S_3$ 和 $S_4$ 注入电荷的失配往往是限制残余失调的因素。它不随放大器的 $V_{OS}$ 按比例变化，按题意此处忽略。

### 结果

$$V_{OS,tot}' = \frac{V_{OS}/\sqrt2}{1 + \sqrt2\,A_v} \approx \frac{1\ \mathrm{mV}}{\sqrt2\cdot\sqrt2} \approx 0.5\ \mathrm{mV}.$$

在电流不变的情况下把输入对管宽度加倍，会使放大器自身的失调减小 $\sqrt2$ 倍（面积增大，$\Delta V_{TH}$ 减小；过驱动电压降低，$W/L$ 项和负载项减小），并使其增益增大为原来的 $\sqrt2$ 倍（$g_m \propto \sqrt W$）。因此，存储后的残余失调 $V_{OS}/(1 + A_v)$ 减半，约为 0.5 mV。

**常见错误。** 认为失调消除使结果与放大器无关，因而失调仍为 1 mV。存储环路只是把放大器的失调除以 $1 + A_v$。

**常见错误。** 只考虑两种效应中的一种，得到 $1\ \mathrm{mV}/\sqrt2 \approx 0.71$ mV。$W$ 加倍既减小了失调，又增大了增益。

**常见错误。** 认为增益与 $W$ 成正比，从而得出 0.25 mV。对于电流恒定的平方律器件，$g_m$ 只按 $\sqrt W$ 增大。
