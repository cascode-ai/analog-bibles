# 详细步骤 - R014

**思路。** $R_1$ 接在栅极与源极之间，因此它两端的电压**就是** $V_{GS}$。在源极节点列 KCL 得到 $I_X = I_1 - V_{GS}/R_1$，平方律（square law）则给出 $I_X$ 与 $V_{GS}$ 之间的第二个关系。两者共同确定 $V_{GS}$ 和 $I_X$，且与 $V_X$ 无关：$M_1$ 是源极跟随器，其源极跟随 $V_X$，$V_X$ 只通过体效应起作用。然后检查导通条件、工作区和跨导。

### 第 1 步 — 端电压与 KCL

把源极电压记为 $V_S$。于是

$$
\begin{aligned}
V_{GS} &= V_X - V_S \quad(\text{this is also the voltage across } R_1),\\
V_{DS} &= 2 - V_S,\\
V_{SB} &= V_S .
\end{aligned}
$$

在源极节点，$I_X$ 和 $R_1$ 中的电流 $V_{GS}/R_1$（由 $V_X$ 提供；MOS 栅极不取电流）流入，$I_1$ 流出：

$$I_X + \frac{V_{GS}}{R_1} = I_1 \quad\Longrightarrow\quad I_X = I_1 - \frac{V_{GS}}{R_1}.$$

计入体效应，

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - 0.9487\right)\ \mathrm{V}.$$

### 第 2 步 — 求解 $V_{GS}$ 和 $I_X$（饱和区）

假设器件处于饱和区（在第 5 步中验证），$I_X = \tfrac12\beta(V_{GS} - V_{TH})^2$，因此

$$\tfrac12\beta\,(V_{GS} - V_{TH})^2 + \frac{V_{GS}}{R_1} = I_1 .$$

代入 $V_{GS} = V_{ov} + V_{TH}$，这是关于 $V_{ov}$ 的二次方程：

$$
\begin{aligned}
\tfrac12\beta V_{ov}^2 + \frac{V_{ov} + V_{TH}}{R_1} &= I_1\\
\tfrac12\beta V_{ov}^2 + \frac{V_{ov}}{R_1} - \left(I_1 - \frac{V_{TH}}{R_1}\right) &= 0 ,
\end{aligned}
$$

其正根为

$$V_{ov} = \frac{-1/R_1 + \sqrt{1/R_1^2 + 2\beta\,(I_1 - V_{TH}/R_1)}}{\beta} = \frac{1}{\beta R_1}\left[\sqrt{1 + 2\beta R_1\,(I_1R_1 - V_{TH})} - 1\right],$$

于是

$$I_X = \tfrac12\beta V_{ov}^2 = I_1 - \frac{V_{ov} + V_{TH}}{R_1}, \qquad g_m = \beta V_{ov} = \sqrt{2\beta I_X}.$$

$V_X$ 只通过 $V_{TH}(V_S)$ 出现。**若没有体效应，$V_{GS}$、$I_X$ 和 $g_m$ 都是常数**：$V_X$ 升高时，源极只是以固定的差值跟随它，$V_S = V_X - V_{GS}$。

### 第 3 步 — 导通条件

$M_1$ 导通的条件是 $I_1 - V_{TH}/R_1 > 0$，即

$$I_1R_1 > V_{TH}(V_S):$$

若 $M_1$ 截止，$I_1$ 将全部流经 $R_1$，得到 $V_{GS} = I_1R_1$。

由于 $V_{TH}$ 随源极电位升高而增大，$I_1R_1$ 只比 0.7 V 略高的设计可能会**在扫描范围内被体效应截止**。$M_1$ 截止时 $V_S = V_X - I_1R_1$，因此截止发生在 $V_X = V_{S,\mathrm{off}} + I_1R_1$ 处，其中 $V_{TH}(V_{S,\mathrm{off}}) = I_1R_1$。例如，取 $I_1R_1 = 0.9$ V：

$$
\begin{aligned}
0.45\left(\sqrt{0.9 + V_{S,\mathrm{off}}} - 0.9487\right) &= 0.9 - 0.7 = 0.2\\
\sqrt{0.9 + V_{S,\mathrm{off}}} &= 0.9487 + 0.4444 = 1.3931\\
V_{S,\mathrm{off}} &= 1.9408 - 0.9 = 1.04\ \mathrm{V},\\
V_{X,\mathrm{off}} &= 1.04 + 0.9 = 1.94\ \mathrm{V}.
\end{aligned}
$$

对 $I_1R_1 = 1.0$ V，同样的步骤给出 $V_{X,\mathrm{off}} \approx 2.71$ V；对 $I_1R_1 \gtrsim 1.04$ V，器件直到 $V_X = 3$ V 都保持导通。若 $I_1R_1$ 即使在低端也低于阈值电压，则始终有 $I_X = 0$。

### 第 4 步 — 体效应对 $I_X$ 的影响

随着 $V_X$ 升高，$V_S = V_X - V_{GS}$ 几乎同步升高，$V_{TH}$ 也随之升高。对 KCL 方程 $\tfrac12\beta V_{ov}^2 + (V_{ov} + V_{TH})/R_1 = I_1$ 求微分：

$$
\begin{aligned}
\beta V_{ov}\,dV_{ov} + \frac{dV_{ov} + dV_{TH}}{R_1} &= 0\\
dV_{ov}\left(g_m + \frac{1}{R_1}\right) &= -\frac{dV_{TH}}{R_1}\\
dV_{ov} &= -\frac{dV_{TH}}{1 + g_mR_1},
\end{aligned}
$$

$$dI_X = g_m\,dV_{ov} = -\frac{g_m}{1 + g_mR_1}\,dV_{TH} \;\approx\; -\frac{dV_{TH}}{R_1} \quad (g_mR_1 \gg 1).$$

阈值电压升高会使 $V_{GS}$ 升高大致相同的量，从而把固定的 $I_1$ 中额外的 $\Delta V_{TH}/R_1$ 分流到 $R_1$ 中。所以，若 $I_1R_1 \gg V_{TH}$（$R_1$ 大、过驱动电压大），下降量只占 $I_X$ 的一小部分；而若 $I_1R_1$ 比 $V_{TH}$ 高得不多，$I_X$ 就可能大幅下降，甚至降到零（见第 3 步）。

### 第 5 步 — 工作区

饱和要求 $V_{DS} \ge V_{GS} - V_{TH}$：

$$
\begin{aligned}
2 - V_S &\ge V_{GS} - V_{TH}\\
2 - (V_X - V_{GS}) &\ge V_{GS} - V_{TH}\\
V_X &\le 2\ \mathrm{V} + V_{TH}(V_S).
\end{aligned}
$$

由于 $V_{TH} \ge 0.7$ V，且当 $V_X$ 接近 3 V 时已升高到约 0.9–1.0 V，$M_1$ **几乎在整个范围内都处于饱和区**。它只可能在扫描的最后 ≈ 0.1–0.3 V 内进入线性区，此时 $V_{GS}$ 必须进一步升高才能承载该电流，因此 $I_X$ 再略微下降，$g_m = \beta V_{DS}$ 变小。

### 第 6 步 — 数值示例

取 $\beta = 2\ \mathrm{mA/V^2}$，$I_1 = 1$ mA，$R_1 = 1.5\ \mathrm{k\Omega}$（$I_1R_1 = 1.5$ V，比阈值电压高出适中的量）。

**$V_S = 0$ 时**（$V_{TH} = 0.7$ V）：

$$
\begin{aligned}
\beta R_1 &= (2\ \mathrm{mA/V^2})(1.5\ \mathrm{k\Omega}) = 3\ \mathrm{V^{-1}},\\
2\beta R_1(I_1R_1 - V_{TH}) &= 2(3\ \mathrm{V^{-1}})(1.5 - 0.7)\ \mathrm{V} = 4.8,\\
V_{ov} &= \frac{1}{3\ \mathrm{V^{-1}}}\left(\sqrt{1 + 4.8} - 1\right) = \frac{2.408 - 1}{3}\ \mathrm{V} = 0.469\ \mathrm{V},\\
V_{GS} &= 0.469 + 0.7 = 1.169\ \mathrm{V} \quad(\text{so } V_X = V_S + V_{GS} = 1.17\ \mathrm{V}),\\
I_X &= \tfrac12(2\ \mathrm{mA/V^2})(0.469\ \mathrm{V})^2 = 0.220\ \mathrm{mA},\\
g_m &= (2\ \mathrm{mA/V^2})(0.469\ \mathrm{V}) = 0.94\ \mathrm{mS}.
\end{aligned}
$$

用 KCL 验算：$I_X + V_{GS}/R_1 = 0.220 + 1.169/1.5 = 0.220 + 0.779 = 0.999\ \mathrm{mA} \approx I_1$。✓

**整个扫描范围**（每一行都用 $V_{TH}(V_S)$ 和 $V_S = V_X - V_{GS}$ 求解同样的方程）：

| $V_X$ (V) | $V_S$ (V) | $V_{TH}$ (V) | $V_{GS}$ (V) | $I_X$ (mA) | $g_m$ (mS) |
|---|---|---|---|---|---|
| 0.7 | −0.40 | 0.590 | 1.104 | 0.264 | 1.03 |
| 1.17 | 0.00 | 0.700 | 1.169 | 0.220 | 0.94 |
| 1.5 | 0.29 | 0.765 | 1.207 | 0.196 | 0.88 |
| 2.0 | 0.75 | 0.850 | 1.255 | 0.164 | 0.81 |
| 2.5 | 1.20 | 0.926 | 1.295 | 0.137 | 0.74 |
| 3.0 | 1.67 | 0.994 | 1.330 | 0.113 | ≈ 0.67 |

$V_X$ 变化 1.8 V 时，$V_{GS}$ 只变化 0.16 V，因此 $V_S$ 以约 0.9 的斜率跟随 $V_X$（源极跟随器作用）。然而 $I_X$ 减半，因为阈值电压每额外升高 0.1 V，电流大约减少 $0.1\ \mathrm{V}/R_1 \times g_mR_1/(1 + g_mR_1) \approx 0.036$ mA。在 $V_X = 3$ V 时，$V_{DS} = 2 - 1.67 = 0.33$ V ≈ $V_{ov} = 0.34$ V，因此器件刚好到达线性区边缘。

若改用 $R_1 = 5\ \mathrm{k\Omega}$（$I_1R_1 = 5$ V ≫ $V_{TH}$），同样的计算给出 $V_X = 1.5$ V 时 $I_X \approx 0.69$ mA，3 V 时为 0.65 mA：只下降 6 %。

**$V_X$ 较小时。** 当 $V_X < V_{GS}$ 时，源极电位低于地（$V_S = V_X - V_{GS} < 0$），使源-衬底结略微正向偏置；在理想分析中，这只会使 $V_{TH}$ 略有降低（见表中第一行）。若 $V_S$ 降到比地低约 0.5 V 以上，实际的 PN 结就会开始导通并提供一部分 $I_1$，这超出了平方律模型的范围，这里予以忽略。

### 结果

$M_1$ 是一个**源极跟随器，其 $V_{GS}$（即 $R_1$ 两端的电压）由 $I_1$、$R_1$ 和 $\beta$ 决定，而不是由 $V_X$ 决定**：

$$I_X = I_1 - \frac{V_{GS}}{R_1}, \qquad \tfrac12\beta\,(V_{GS} - V_{TH})^2 + \frac{V_{GS}}{R_1} = I_1, \qquad g_m = \beta\,(V_{GS} - V_{TH}) = \sqrt{2\beta I_X}.$$

- **若没有体效应**，$I_X$ 和 $g_m$ 在整个扫描范围内都是常数。
- **计入体效应**时（$V_{SB} = V_S = V_X - V_{GS}$），升高 $V_X$ 会使 $V_{TH}$ 升高，因此 $V_{GS}$ 升高，$I_X$ 和 $g_m$ **减小**；当 $g_mR_1$ 较大时，减小的速率为 $dI_X \approx -dV_{TH}/R_1$。当 $I_1R_1 \gg V_{TH}$ 时下降很少（例如 $\beta = 2\ \mathrm{mA/V^2}$，$I_1 = 1$ mA，$R_1 = 5\ \mathrm{k\Omega}$ 时为 6 %）。当 $I_1R_1$ 接近 $V_{TH}$ 时下降很多：对于 $R_1 = 1.5\ \mathrm{k\Omega}$，从 $V_S = 0$ 时的 0.22 mA 下降到 $V_X = 3$ V 时的 0.11 mA。
- 只有当 $I_1R_1 > V_{TH}(V_S)$ 时 $M_1$ 才导通。若 $0.7\ \mathrm{V} < I_1R_1 \lesssim 1.04$ V，体效应会在扫描范围内于 $V_X = V_{S,\mathrm{off}} + I_1R_1$ 处使它截止（$I_1R_1 = 0.9$ V 时 ≈ 1.94 V，1.0 V 时 ≈ 2.71 V）。
- 当 $V_X < 2\ \mathrm{V} + V_{TH}(V_S)$ 时 $M_1$ 处于饱和区，这几乎是整个范围。在 $V_X = 3$ V 附近它可能进入线性区，此时 $I_X$ 再略微下降，$g_m = \beta V_{DS}$ 下降。

**常见错误。** 把源极当作接地，从而得到 $V_{GS} = V_X$，$I_X = \tfrac12\beta(V_X - V_{TH})^2$ 按平方律增长。源极是由 $I_1$ 馈电的节点，它跟随 $V_X$；$V_{GS}$ 是 $R_1$ 两端的电压，由 KCL 确定。

**常见错误。** 写成 $I_X = I_1$。$I_1$ 中有一部分，即 $V_{GS}/R_1$，是由 $V_X$ 经 $R_1$ 提供的，因此 $I_X$ 更小；当 $I_1R_1$ 接近 $V_{TH}$ 时会小得多。

**常见错误。** 忽略体效应，认为 $V_X$ 变化时什么都不变。源极相对于接地衬底升高了几乎整个扫描幅度，使 $V_{TH}$ 最多升高约 0.3 V，这通过 $R_1$ 直接减小 $I_X$，甚至可能使 $M_1$ 截止。
