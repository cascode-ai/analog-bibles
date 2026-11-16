# 详细步骤 - R222

**思路。** 由平方律推导 $I_{D1} - I_{D2}$ 与 $\Delta V_{in}$ 的关系，求出截止电压 $\Delta V_{in1}$ 和 $G_m$ 峰值与 $W/L$ 的关系，然后对 $G_m$ 积分。由于 $G_m$ 是 $I_{D1} - I_{D2}$ 的导数，其曲线下面积等于 $I_{D1} - I_{D2}$ 的总变化量，而这只由 $I_{SS}$ 决定。

### 第 1 步 — 差分对的大信号（large-signal）特性

令 $k = \mu_nC_{ox}W/L$，$\lambda = 0$，

$$I_{D1} = \tfrac12 k(V_{GS1} - V_{TH})^2, \qquad I_{D2} = \tfrac12 k(V_{GS2} - V_{TH})^2, \qquad I_{D1} + I_{D2} = I_{SS} .$$

两管源极共用节点 P，因此 $\Delta V_{in} = V_{GS1} - V_{GS2}$；再利用 $V_{GS} - V_{TH} = \sqrt{2I_D/k}$，得

$$\Delta V_{in} = \sqrt{\frac{2I_{D1}}{k}} - \sqrt{\frac{2I_{D2}}{k}} .$$

两边平方，并利用 $I_{D1} + I_{D2} = I_{SS}$：

$$\Delta V_{in}^2 = \frac{2}{k}\left(I_{D1} + I_{D2} - 2\sqrt{I_{D1}I_{D2}}\right) = \frac{2}{k}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) ,$$

$$2\sqrt{I_{D1}I_{D2}} = I_{SS} - \frac{k}{2}\Delta V_{in}^2 \quad\Longrightarrow\quad 4I_{D1}I_{D2} = \left(I_{SS} - \frac{k}{2}\Delta V_{in}^2\right)^2 .$$

利用 $(I_{D1} - I_{D2})^2 = (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2}$：

$$
\begin{aligned}
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{k}{2}\Delta V_{in}^2\right)^2\\
&= kI_{SS}\Delta V_{in}^2 - \frac{k^2}{4}\Delta V_{in}^4\\
&= \frac{k^2}{4}\Delta V_{in}^2\left(\frac{4I_{SS}}{k} - \Delta V_{in}^2\right),
\end{aligned}
$$

$$I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2} .$$

当 $I_{D2} = 0$、$I_{D1} = I_{SS}$ 时 $M_2$ 截止，即 $\Delta V_{in} = \sqrt{2I_{SS}/k} - 0$ 时：

$$\Delta V_{in1} = \sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}} .$$

该式在 $|\Delta V_{in}| \le \Delta V_{in1}$ 范围内成立；超出此范围，其中一个晶体管截止，$I_{D1} - I_{D2} = \pm I_{SS}$ 保持不变。

### 第 2 步 — 总跨导 $G_m$

在 $|\Delta V_{in}| \le \Delta V_{in1}$ 范围内求导：

$$
\begin{aligned}
G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V_{in}} &= \frac{k}{2}\left[\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2} - \frac{\Delta V_{in}^2}{\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2}}\right]\\
&= \frac{k}{2}\cdot\frac{\frac{4I_{SS}}{k} - 2\Delta V_{in}^2}{\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2}} .
\end{aligned}
$$

**峰值**（在 $\Delta V_{in} = 0$ 处）等于每个晶体管在 $I_D = I_{SS}/2$ 时的 $g_m$：

$$G_{m,\text{peak}} = \frac{k}{2}\cdot\frac{4I_{SS}/k}{\sqrt{4I_{SS}/k}} = \frac{k}{2}\sqrt{\frac{4I_{SS}}{k}} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} .$$

**边缘。** 在 $\Delta V_{in} = \pm\Delta V_{in1}$ 处，$\frac{4I_{SS}}{k} - 2\Delta V_{in1}^2 = \frac{4I_{SS}}{k} - \frac{4I_{SS}}{k} = 0$，因此 $G_m$ 平滑地降到零，并在此范围之外保持为零，与图中所示一致。

**归一化形状。** 令 $u = \Delta V_{in}/\Delta V_{in1}$，并利用 $4I_{SS}/k = 2\Delta V_{in1}^2$：

$$\frac{I_{D1}}{I_{SS}} = \frac12\left(1 + u\sqrt{2 - u^2}\right), \qquad \frac{G_m}{G_{m,\text{peak}}} = \frac{\sqrt2\,(1 - u^2)}{\sqrt{2 - u^2}}, \qquad |u| \le 1 .$$

式中不出现 $W/L$：**所有差分对的曲线形状都相同**，$W/L$ 只决定横向尺度 $\Delta V_{in1}$ 和纵向尺度 $G_{m,\text{peak}}$。部分数值如下（$I_{D2}(u) = I_{D1}(-u)$）：

| $u = \Delta V_{in}/\Delta V_{in1}$ | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---|---|---|---|---|
| $I_{D1}/I_{SS}$ | 0.500 | 0.674 | 0.831 | 0.950 | 1.000 |
| $G_m/G_{m,\text{peak}}$ | 1.000 | 0.953 | 0.802 | 0.516 | 0 |

### 第 3 步 — $W/L$ 增大时的变化

保持 $I_{SS}$ 不变：

- **截止电压：** $\Delta V_{in1} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)} \propto 1/\sqrt{W/L}$，**减小**：较宽的器件只需较小的过驱动电压（overdrive voltage）就能承载全部 $I_{SS}$。
- **电流曲线：** $I_{D1}$ 和 $I_{D2}$ 仍在 $\Delta V_{in} = 0$ 处交于 $I_{SS}/2$，仍分别饱和于 $0$ 和 $I_{SS}$（由尾电流源决定），但过渡区被压缩到 $\pm\Delta V_{in1}$ 之内，因此**更陡**：原点处的斜率 $\partial I_{D1}/\partial\Delta V_{in} = G_{m,\text{peak}}/2$ 按 $\sqrt{W/L}$ 增大。
- **$G_m$ 曲线：** **更窄**（底宽 $2\Delta V_{in1}$）且**更高**（$G_{m,\text{peak}} \propto \sqrt{W/L}$）。

例如，$W/L$ 增大为原来的四倍时，$\Delta V_{in1}$ 减半，$G_{m,\text{peak}}$ 加倍。

### 第 4 步 — $G_m$ 曲线下的面积

$G_m$ 是 $I_{D1} - I_{D2}$ 的导数，且在 $|\Delta V_{in}| > \Delta V_{in1}$ 时为零，因此

$$
\begin{aligned}
\int_{-\infty}^{+\infty} G_m\,d(\Delta V_{in}) &= \int_{-\Delta V_{in1}}^{+\Delta V_{in1}} \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V_{in}}\,d(\Delta V_{in})\\
&= (I_{D1} - I_{D2})\big|_{+\Delta V_{in1}} - (I_{D1} - I_{D2})\big|_{-\Delta V_{in1}}\\
&= (I_{SS} - 0) - (0 - I_{SS})\\
&= 2I_{SS} .
\end{aligned}
$$

**面积为 $2I_{SS}$，与 $W/L$ 无关**：无论切换过程如何，$I_{D1} - I_{D2}$ 都必须从 $-I_{SS}$（$I_{SS}$ 全部流过 $M_2$）上升到 $+I_{SS}$（全部流过 $M_1$）。

**用直接积分验证。** 令 $\Delta V_{in} = u\,\Delta V_{in1}$：

$$\text{Area} = G_{m,\text{peak}}\,\Delta V_{in1}\int_{-1}^{1}\frac{\sqrt2\,(1 - u^2)}{\sqrt{2 - u^2}}\,du .$$

令 $u = \sqrt2\sin\theta$（$du = \sqrt2\cos\theta\,d\theta$，$\sqrt{2 - u^2} = \sqrt2\cos\theta$，积分限为 $\theta = \pm\pi/4$）：

$$\int_{-1}^{1}\frac{1 - u^2}{\sqrt{2 - u^2}}\,du = \int_{-\pi/4}^{\pi/4}(1 - 2\sin^2\theta)\,d\theta = \int_{-\pi/4}^{\pi/4}\cos2\theta\,d\theta = \left[\frac{\sin2\theta}{2}\right]_{-\pi/4}^{\pi/4} = 1 ,$$

$$\text{Area} = \sqrt2\,G_{m,\text{peak}}\,\Delta V_{in1} = \sqrt2\sqrt{kI_{SS}}\sqrt{\frac{2I_{SS}}{k}} = 2I_{SS}\ \checkmark$$

### 第 5 步 — 为什么 $G_m$ 峰值必然增大

面积固定为 $2I_{SS}$，而底宽 $2\Delta V_{in1}$ 按 $1/\sqrt{W/L}$ 缩小，因此平均高度增大：

$$\overline{G_m} = \frac{\text{Area}}{\text{base}} = \frac{2I_{SS}}{2\Delta V_{in1}} = \frac{I_{SS}}{\Delta V_{in1}} = \sqrt{\frac{\mu_nC_{ox}(W/L)I_{SS}}{2}} \propto \sqrt{\frac{W}{L}} .$$

由于对任何 $W/L$ 曲线形状都相同（第 2 步），峰值与平均值按完全相同的比例变化：

$$G_{m,\text{peak}} = \sqrt2\,\overline{G_m} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} \propto \sqrt{\frac{W}{L}} .$$

等价地，峰值 $\times$ 底宽 $= \sqrt{kI_{SS}}\cdot2\sqrt{2I_{SS}/k} = 2\sqrt2\,I_{SS}$，为常数。这是差分对的基本折中：$W/L$ 越大，平衡点处的增益越高，但线性输入范围越窄。

### 结果

- 随着 $W/L$ 增大，$\Delta V_{in1} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$ 减小。$I_{D1}$、$I_{D2}$ 曲线的两端电平（$0$ 和 $I_{SS}$）以及在 $I_{SS}/2$ 处的交点都不变，但在更窄的输入范围内完成切换（过渡更陡）。$G_m$ 曲线变得更窄、更高。
- $G_m$ 曲线下的面积为
$$\int G_m\,d(\Delta V_{in}) = (I_{D1} - I_{D2})\big|_{+\Delta V_{in1}} - (I_{D1} - I_{D2})\big|_{-\Delta V_{in1}} = 2I_{SS},$$
与 $W/L$ 无关。
- 由于宽度（$2\Delta V_{in1} \propto 1/\sqrt{W/L}$）缩小而面积保持 $2I_{SS}$ 不变，高度必然增大：$G_{m,\text{peak}} = \sqrt{\mu_nC_{ox}(W/L)I_{SS}} \propto \sqrt{W/L}$（峰值 $\times$ 宽度 $= 2\sqrt2\,I_{SS}$）。

**常见错误。** 把面积算成 $I_{SS}$，那是单边 $\partial I_{D1}/\partial\Delta V_{in}$ 曲线下的面积。$G_m$ 是电流**之差** $I_{D1} - I_{D2}$ 的导数，而电流之差从 $-I_{SS}$ 摆动到 $+I_{SS}$。

**常见错误。** 认为 $W/L$ 增大时输入范围会**变宽**，或者认为饱和电流电平会改变。实际上 $\Delta V_{in1} \propto 1/\sqrt{W/L}$ 会缩小，而两端电平由尾电流源固定在 $0$ 和 $I_{SS}$。
