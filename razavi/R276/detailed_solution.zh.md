# 详细步骤 - R276

**思路。** 计入电容电流，在 X、Y 和 P 列 KCL 方程。把方程相加可知，两个 PMOS 的电流之和始终等于 $I_{SS}$，这把 $V_X$ 钉在其正常的电流镜值附近。$V_Y$ 从比 $V_X$ 低一个 $V_{DD}$ 的位置（即低于地电位）开始，必须一直爬升到 $V_X$，因为输入相等时，最终状态是电容电压为零的平衡状态。这一过程分三个阶段：经 $M_1$–$M_2$ 通路的快速放电，$M_2$ 处于线性区时的较慢上升，以及由沟道长度调制（channel-length modulation）决定的长拖尾。

### 第 1 步 — KCL 及其关键推论

令 $v_C = V_X - V_Y$（在 $t = 0$ 时 $= V_{DD} = 3$ V），$I_C = C_1\,dv_C/dt$，以电流从 X 经 $C_1$ 流入 Y 为正；$\lambda_n, \lambda_p > 0$ 都很小。

$$
\begin{aligned}
\text{X:}\quad & |I_{D3}| = I_{D1} + I_C,\\
\text{Y:}\quad & |I_{D4}| + I_C = I_{D2},\\
\text{P:}\quad & I_{D1} + I_{D2} = I_{SS}.
\end{aligned}
$$

（$I_{D2}$ 是从 Y 流入 $M_2$、流向 P 的电流；若 Y 低于 P，它变为负值。）把 X 和 Y 的方程相加，再利用 P 的方程：

$$|I_{D3}| + |I_{D4}| = I_{D1} + I_{D2} = I_{SS}\quad\text{at all times.}$$

$M_4$ 始终饱和：其饱和条件 $V_{SD4} \ge V_{SG4} - |V_{THp}|$ 即 $V_Y \le V_X + 0.8$ V，而这里 $V_Y \le V_X$。由于 $\lambda_p$ 很小，$|I_{D4}| \approx |I_{D3}|$，因此

$$|I_{D3}| \approx \frac{I_{SS}}{2} \quad\Longrightarrow\quad V_X \approx V_{DD} - |V_{GS3}| = V_{DD} - 0.8 - \sqrt{\frac{I_{SS}}{\mu_pC_{ox}(W/L)_3}} .$$

**从 $t = 0^+$ 起，$V_X$ 基本恒定**：无论 $C_1$ 如何变化，电流镜都迫使二极管连接（diode-connected）器件流过一半的尾电流（tail current）。

**微小漂移。** 若 $\lambda_p > 0$，则 $|I_{D4}|/|I_{D3}| = (1 + \lambda_pV_{SD4})/(1 + \lambda_pV_{SD3})$。只要 $V_Y < V_X$，就有 $V_{SD4} > V_{SD3}$，因此 $|I_{D3}|$ 略**低于** $I_{SS}/2$：$V_X$ 的起始值偏高几十 mV，并随着 $v_C \to 0$ 下降 $\lambda_p|V_{ov,p}|$ 量级的幅度。

### 第 2 步 — 初始状态与最终状态

**$t = 0^+$：** 电容电压不能突变，因此

$$V_Y(0^+) = V_X - V_{DD} = -|V_{GS3}| \quad (\text{about } -1.1\ \mathrm{V}, \text{ below ground}).$$

**最终状态：** 输入相等且所有器件都饱和时，电路稳定在平衡点上，此时 $M_4$ 以相等的 $V_{SD}$ 复制 $M_3$ 的电流：$V_Y = V_X$，$v_C = 0$。电容必须**完全放电**，$V_Y$ 要上升整整一个 $V_{DD}$。

### 第 3 步 — 第 1 阶段：经 $M_1$ 和 $M_2$ 的快速放电

开始时 Y（约 −1.1 V）低于 P，因此 Y 是 $M_2$ 的**源极**；其栅极（1.5 V）比它高约 2.6 V，$M_2$ 在反方向上强烈导通。$M_1$ 也导通，于是它们构成一条直接跨接在 $C_1$ 两端的低阻通路 X → $M_1$ → P → $M_2$ → Y。由 Y 的方程，

$$\frac{dV_Y}{dt} = \frac{-I_C}{C_1} = \frac{|I_{D4}| - I_{D2}}{C_1}, \qquad I_{D2} < 0,$$

因此 $V_Y$ 急剧上升，电流为毫安量级，远大于 $I_{SS}$。一旦 Y 越过 P、$M_2$ 恢复正常方向导通，这一阶段就结束。

（在实际电路中，负的 $V_Y$ 会使 $M_2$ 的漏-衬底结正向偏置，在 $t = 0^+$ 时把 Y 钳位在 −0.6 V 附近。于是 X 从 2.4 V 附近开始，PMOS 器件短暂截止，并在这一快速阶段内降到其电流镜值；此后图景相同。）

### 第 4 步 — 第 2 阶段：$M_2$ 处于线性区，上升变慢

当 $V_P < V_Y < 1.5 - V_{TH2}(V_P)$ 时，$M_2$ 正常导通，但处于**线性区**，电流小于其饱和时应分得的份额：$I_{D2} < I_{SS}/2 \approx |I_{D4}|$。差值 $|I_{D4}| - I_{D2}$ 仍向上给 Y 充电，但随着 $M_2$ 接近饱和而减小，因此 **$V_Y$ 继续上升，但更慢**。$M_2$ 大约在 $V_Y \approx 1.5 - V_{TH2}(V_P)$（约 0.7–0.8 V）处进入饱和，此时 $V_Y$ 的斜率急剧减小。

### 第 5 步 — 第 3 阶段：由 λ 决定的缓慢拖尾

若 $\lambda = 0$ 且所有器件都饱和，则 $I_{D1} = I_{D2}$，$|I_{D3}| = |I_{D4}|$，因此 $I_C = 0$，$V_Y$ 将停滞不前；当 $\lambda > 0$ 时，仍存在微小的不平衡。在最终状态附近线性化，把 $V_X$、$V_Y$、$V_P$ 的偏差分别记为 $x$、$y$、$p$，$r_N = r_{O1,2}$，$r_P = r_{O3,4}$，$g_N$、$g_P$ 为跨导（transconductance）：

$$
\begin{aligned}
\text{X:}\quad & -(g_P + 1/r_P)\,x = -g_Np + (x - p)/r_N + I_C,\\
\text{Y:}\quad & -g_Px - y/r_P + I_C = -g_Np + (y - p)/r_N .
\end{aligned}
$$

用第一式减去第二式，$g_Px$、$g_Np$ 和 $p/r_N$ 项相互抵消：

$$-\frac{x - y}{r_P} - I_C = \frac{x - y}{r_N} + I_C \quad\Longrightarrow\quad I_C = -\frac{v_C}{2}\left(\frac{1}{r_N} + \frac{1}{r_P}\right) = -\frac{v_C}{2\,(r_{O2}\|r_{O4})} .$$

由 $C_1\,dv_C/dt = I_C$ 得：

$$v_C(t) \propto e^{-t/\tau}, \qquad \tau = 2C_1\,(r_{O2}\|r_{O4}) \approx \frac{4C_1}{I_{SS}(\lambda_n + \lambda_p)},$$

其中利用了 $r_O \approx 1/(\lambda I_{SS}/2)$。出现因子 2 是因为浮置电容的电流从 X 流出、流入 Y，两条支路各吸收一半的不平衡电流。

### 第 6 步 — 数值示例

$I_{SS} = 200\ \mu\mathrm{A}$，NMOS 的 $W/L = 10/0.5$（$\beta_n = 2.68\ \mathrm{mA/V^2}$），PMOS 的 $W/L = 20/0.5$（$\beta_p = 1.536\ \mathrm{mA/V^2}$），$\lambda_n = 0.1$，$\lambda_p = 0.2\ \mathrm{V^{-1}}$，$C_1 = 1$ pF。

$$
\begin{aligned}
|V_{ov3}| &\approx \sqrt{I_{SS}/\beta_p} = \sqrt{200\ \mu\mathrm{A}/1.536\ \mathrm{mA/V^2}} = 0.36\ \mathrm{V}, \qquad V_X \approx 3 - 0.8 - 0.36 = 1.84\ \mathrm{V}\ (\lambda = 0),\\
\tau &\approx \frac{4(1\ \mathrm{pF})}{(200\ \mu\mathrm{A})(0.3\ \mathrm{V^{-1}})} = 67\ \mathrm{ns}.
\end{aligned}
$$

对完整的平方律方程（含 λ）进行瞬态求解，得：

| $t$ | $V_X$ (V) | $V_Y$ (V) | 阶段 |
|---|---|---|---|
| $0^+$ | 1.907 | −1.09 | 起始 |
| 1 ns | 1.896 | 0.04 | 1 → 2 |
| 10 ns | 1.889 | 0.65 | 2（$M_2$ 线性区） |
| 20 ns | 1.887 | 0.79 | 3（$M_2$ 饱和） |
| 50 ns | 1.884 | 1.12 | 3 |
| 100 ns | 1.879 | 1.47 | 3 |
| 500 ns | 1.874 | 1.87 | ≈ 终值 |

拖尾的时间常数约为 80 ns，它等于用实际的 $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ 值（114 kΩ 和 61 kΩ）算出的 $2C_1(r_{O2}\|r_{O4})$；上面的一阶估算给出 67 ns。

### 结果

- 从 $t = 0^+$ 起，**$V_X$ 基本恒定**在其电流镜值 $V_X \approx V_{DD} - |V_{GS3}| = V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$，因为 $|I_{D3}| + |I_{D4}| = I_{SS}$，且 $M_4$ 饱和，迫使 $|I_{D3}| \approx I_{SS}/2$。若 $\lambda_p > 0$，它的起始值高出几十 mV，并随着 $C_1$ 放电而下降 $O(\lambda_p|V_{ov,p}|)$ 量级。
- **$V_Y$ 从 $V_X - V_{DD} = -|V_{GS3}|$ 开始**（低于地电位；若被漏极结钳位，则约为 −0.6 V）。它起初经强导通的 $M_1$–$M_2$ 通路快速上升。当 $M_2$ 进入饱和时（在 $V_Y \approx 1.5 - V_{TH2}(V_P)$ 处，≈ 0.7–0.8 V），上升变慢。随后它以很长的时间常数 $\tau = 2C_1(r_{O2}\|r_{O4}) \approx 4C_1/[I_{SS}(\lambda_n + \lambda_p)]$ 缓慢趋向其终值 $V_Y = V_X$，此时 $C_1$ 上的电压降为零。

**常见错误。** 让 $V_X$ 跳向 $V_{DD}$，并让 $V_Y$ 长时间停在 0 附近。KCL 迫使每一时刻都有 $|I_{D3}| + |I_{D4}| = I_{SS}$，而 $M_4$ 饱和，因此二极管连接的 $M_3$ 始终流过约 $I_{SS}/2$，X 保持在其电流镜电压上。

**常见错误。** 让 $V_Y$ 稳定在 $V_X$ 以外的某个值（例如 0 V），或者认为电容会保留部分电荷。输入相等时，唯一的直流状态是平衡状态 $V_Y = V_X$。

**常见错误。** 把整个响应描述为一个时间常数为 $\tau = C_1/g_m$ 的指数过程。早期是晶体管远离其偏置点时的大信号（large-signal）放电，最后的趋近过程则由输出电阻（output resistance）决定；若没有 λ，$M_2$ 一旦饱和，$V_Y$ 就会停滞。
