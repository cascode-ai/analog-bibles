# 详细步骤 - R685

**思路。** 栅源电压固定时，每个晶体管都“想要”一个由自身 $\mu C_{ox}$ 决定的电流；而两者串联，电流必须相等，只有输出电压能通过沟道长度调制（channel-length modulation）来协调二者。在 FF 和 SS 下，两个电流一起缩放，什么都不移动；在 FS 和 SF 下，两者发生冲突，输出电平大幅移动，小信号特性取决于两个器件是否都保持饱和。$V_{TH}$ 和 $\lambda$ 不变，因此 $V_{ov1}$ 和 $V_{ov2}$ 固定。

### 第 1 步 — 两个电流及其小信号参数

利用平方律（square law）和沟道长度调制，

$$I_1 = \frac12K_nV_{ov1}^2\,(1 + \lambda_nV_{out}), \qquad I_2 = \frac12K_pV_{ov2}^2\,\bigl[1 + \lambda_p(V_{DD} - V_{out})\bigr],$$

其中 $K_n = \mu_nC_{ox}(W/L)_1$，$K_p = \mu_pC_{ox}(W/L)_2$，且 $I_1 = I_2 \equiv I$。在过驱动电压（overdrive voltage）固定时：

- $g_{m1} = \partial I_1/\partial V_{GS1} = K_nV_{ov1}(1 + \lambda_nV_{out}) = 2I/V_{ov1}$，同样有 $g_{m2} = 2I/V_{ov2}$；
- $g_{ds1} = \partial I_1/\partial V_{out} = \lambda_n\cdot\frac12K_nV_{ov1}^2 \approx \lambda_nI$，$g_{ds2} \approx \lambda_pI$，即 $r_O \approx 1/(\lambda I)$。

**增益。** $M_2$ 的栅极接固定的 $V_b$，因此 $M_2$ 是一个输出电阻为 $r_{O2}$ 的电流源（current source），于是

$$|A_v| = g_{m1}(r_{O1}\|r_{O2}) = \frac{g_{m1}}{g_{ds1} + g_{ds2}} \approx \frac{2I/V_{ov1}}{(\lambda_n + \lambda_p)\,I} = \frac{2}{(\lambda_n + \lambda_p)\,V_{ov1}} .$$

**噪声。** 两个沟道噪声电流（各为 $4kT\gamma g_m$）都作用在输出节点上，因此

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}}\left(1 + \frac{g_{m2}}{g_{m1}}\right) = \frac{4kT\gamma\,V_{ov1}}{2I}\left(1 + \frac{V_{ov1}}{V_{ov2}}\right) \;\propto\; \frac{1}{I}.$$

在过驱动电压固定时，增益只由 $\lambda$ 和 $V_{ov1}$ 决定，而噪声只由实际流过的电流决定。

### 第 2 步 — FF 和 SS 工艺角

若两个 $\mu C_{ox}$ 都按同一因子 $(1 + \delta)$ 变化（FF 时 $\delta > 0$，SS 时 $< 0$），则两个“想要”的电流在**相同**的 $V_{out}$ 下都按 $(1 + \delta)$ 缩放，因此输出电平不移动，且

$$I \to (1 + \delta)\,I \;\propto\; \mu C_{ox}.$$

- $g_{m1} = 2I/V_{ov1}$ 按 $\mu C_{ox}$ 成比例增大（由于过驱动电压固定，是线性关系），而 $r_{O1}$ 和 $r_{O2} \approx 1/(\lambda I)$ 按 $1/\mu C_{ox}$ 减小。
- **增益不变：** $|A_v| = 2/[(\lambda_n + \lambda_p)V_{ov1}]$ 中不含 $\mu C_{ox}$；$g_{m1}$ 的增大恰好抵消了 $r_O$ 的减小。
- **噪声 $\propto 1/\mu C_{ox}$：** FF 下较低，SS 下较高，变化比恒定电流偏置时（$1/\sqrt{\mu C_{ox}}$）更剧烈。
- **功耗** $\propto \mu C_{ox}$。

### 第 3 步 — FS 和 SF 工艺角：电流冲突

在原来的输出电压下，$M_1$ 会导通 $(1 + \delta_n)I$，而 $M_2$ 会导通 $(1 + \delta_p)I$，这在串联时是不可能的，因此 $V_{out}$ 会移动，直到沟道长度调制因子把二者协调一致。对电流取对数并线性化（其中 $\lambda' = \lambda/(1 + \lambda V_{DS}) \approx \lambda$）：

$$\Delta\ln I_1 = \delta_n + \lambda_n'\,\Delta V_{out}, \qquad \Delta\ln I_2 = \delta_p - \lambda_p'\,\Delta V_{out},$$

令二者相等，

$$
\begin{aligned}
\delta_n + \lambda_n'\Delta V_{out} &= \delta_p - \lambda_p'\Delta V_{out}\\
\Delta V_{out} &= \frac{\delta_p - \delta_n}{\lambda_n' + \lambda_p'} \approx \frac{\delta_p - \delta_n}{\lambda_n + \lambda_p}.
\end{aligned}
$$

**例：** $\pm10\ \%$ 的偏斜，$\lambda_n = 0.1\ \mathrm{V^{-1}}$，$\lambda_p = 0.2\ \mathrm{V^{-1}}$：

$$\Delta V_{out} \approx \frac{-0.1 - 0.1}{0.3\ \mathrm{V^{-1}}} = -0.67\ \mathrm{V}\ \text{(FS)}, \qquad +0.67\ \mathrm{V}\ \text{(SF)}.$$

（取标称值 $V_{DD} = 3$ V、$V_{out} = 1.5$ V，精确求解上述方程得 $-0.85$ V 和 $+0.81$ V。）偏移之所以很大，是因为 20 % 的电流冲突必须由只有零点几 /V 的 $\lambda$ 来吸收。

- **FS** 使 $V_{out}$ **降低**，压缩 $M_1$ 的 $V_{DS}$，使其趋向线性区。
- **SF** 使 $V_{out}$ **升高**，压缩 $M_2$ 的 $V_{SD}$，使其趋向线性区。

### 第 4 步 — 实际电压余度下的后果：增益崩溃

取标称值 $V_{DD} = 1.8$ V、$V_{out} = 0.9$ V，$V_{ov1} = V_{ov2} = 0.2$ V，求解同样的方程（必要时采用线性区公式）得：

- **FS：** $V_{out} = 0.17$ V $< V_{ov1}$，因此 $M_1$ 处于线性区；增益降至标称值的约 15 %，输入参考噪声上升（约 +18 %），因为 $g_{m1}$ 急剧下降。
- **SF：** $V_{SD2} = 0.18$ V $< V_{ov2}$，因此 $M_2$ 处于线性区；增益降至标称值的约 23 %。

因此，该级采用固定 $V_{GS}$ 偏置时，在偏斜工艺角下并不稳健：输出工作点的不确定范围可达电源电压的很大一部分。实际中必须由反馈来设定输出电平，例如在差分结构中采用共模反馈（common-mode feedback）；或者用电流来偏置该级。

### 第 5 步 — 若两个器件都保持饱和（电压余度充足）

**电流。** 回代 $\Delta V_{out}$，

$$\Delta\ln I = \delta_n + \lambda_n'\,\frac{\delta_p - \delta_n}{\lambda_n' + \lambda_p'} = \frac{\lambda_p'\,\delta_n + \lambda_n'\,\delta_p}{\lambda_n' + \lambda_p'},$$

这是一个加权平均，其中“更硬”的器件（$\lambda$ 较小）权重较大。对于 $\pm10\ \%$ 和 $\lambda_p = 2\lambda_n$：FS 下 $\Delta\ln I \approx (2\times0.1 - 0.1)/3 = +3.3\ \%$，SF 下为 $-3.3\ \%$（精确算例给出 $+1.8\ \%$ 和 $-3.7\ \%$）。

**噪声。** $\overline{V_{n,in}^2} \propto 1/I$，且 $g_{m2}/g_{m1} = V_{ov1}/V_{ov2}$ 固定，因此在 FS 和 SF 下，噪声只随这一小的电流变化而变化：FS 下略低于标称值，SF 下略高于标称值（当 $\lambda_p > \lambda_n$ 时），总是介于 FF 和 SS 的值之间。

**增益。** 由 $g_{ds} = \lambda I/(1 + \lambda V_{DS})$，$|A_v| = (2/V_{ov1})/(\lambda_n' + \lambda_p')$，而偏移后的 $V_{DS}$ 值会使 $\lambda'$ 略有变化：在 $V_{DD} = 3$ V 的算例中，增益在 FS 下约高 5 %，在 SF 下约低 6 %，这是一个二阶效应。

| 工艺角（$\pm10\ \%$，$V_{DD} = 3$ V） | $V_{out}$ | 电流 | 增益 | 噪声功率 |
|---|---|---|---|---|
| 标称 | 1.50 V | 1.000 | 1.000 | 1.000 |
| FF | 1.50 V | 1.100 | 1.000 | 0.909 |
| SS | 1.50 V | 0.900 | 1.000 | 1.111 |
| FS | 0.65 V | 1.018 | 1.047 | 0.982 |
| SF | 2.31 V | 0.963 | 0.937 | 1.038 |

（若独立地令 $g_{m1} \propto \mu_nC_{ox}$、$g_{m2} \propto \mu_pC_{ox}$，FS 就会成为噪声最低的工艺角，但这忽略了串联器件流过的是**同一个**电流：在偏斜工艺角下，输出电平的偏移对 $(1 + \lambda V_{DS})$ 因子的改变，与 $\mu C_{ox}$ 本身的偏斜一样大。）

### 结果

- **FF 和 SS：** 两个电流都随 $\mu C_{ox}$ 缩放，输出电平保持不动。$g_{m1} \propto \mu C_{ox}$，$r_{O1}, r_{O2} \propto 1/\mu C_{ox}$，因此增益 $|A_v| = 2/[(\lambda_n + \lambda_p)V_{ov1}]$ **不变**；输入参考噪声功率按 $1/\mu C_{ox}$ 变化（FF 下较低，SS 下较高，比恒定电流时的依赖关系更强）；功耗按 $\mu C_{ox}$ 变化。
- **FS 和 SF：** 两个固定 $V_{GS}$ 的器件要求不同的电流。输出直流电平移动约 $(\delta_p - \delta_n)/(\lambda_n + \lambda_p)$，对于 $\pm10\ \%$ 的偏斜约为 0.7 V：FS 下降低（$M_1$ 趋向线性区），SF 下升高（$M_2$ 趋向线性区）。在实际的电压余度下，会有一个器件离开饱和区，增益崩溃（在 FS 下，$M_1$ 进入线性区，$g_{m1}$ 下降，输入参考噪声也随之上升）。如果两个器件都保持饱和，电流会稳定在一个按 $\lambda$ 加权的折中值上；增益只略有变化（本例中 FS 下约 +5 %，SF 下约 −6 %），按 $1/I$ 变化的噪声也只略有变化（FS 下略低，SF 下略高，都介于 FF 与 SS 之间）。

**常见错误。** 在 FF 下 $g_m$ 增大时仍保持 $r_O$ 不变，从而断定增益随 $\mu C_{ox}$ 增大。在 $V_{GS}$ 固定时，电流随 $\mu C_{ox}$ 增大，因此 $r_O = 1/(\lambda I)$ 按同一因子减小。

**常见错误。** 分析偏斜工艺角时，仿佛每个晶体管都能流过各自的电流。两个串联器件只能流过同一个电流；这一冲突通过输出电压的大幅偏移来解决，而这正是 FS 和 SF 下的主导效应。

**常见错误。** 声称噪声在快工艺角下上升。在固定的过驱动电压下，更大的电流给出更大的 $g_m = 2I/V_{ov}$，而输入参考噪声按 $1/g_{m1}$ 下降。
