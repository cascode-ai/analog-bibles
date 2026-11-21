# 详细步骤 - G133

输出器件 $Q_1$、$Q_2$ 构成 B 类对管，求出最大不削波幅度后即可套用常规的 B 类功率关系。该幅度取两个输出极限中较小者：正向摆幅受 $Q_1$ 经 $R_1$ 的基极驱动限制，负向摆幅受 $Q_3$ 饱和限制。

### 第 1 步 — 输出极限与幅度

$Q_3$ 饱和时 $V_1=-15\ \mathrm V+0.2\ \mathrm V=-14.8$ V，pnp 跟随器 $Q_2$ 使两种负载下都有 $V_o^-=V_1+V_{BE(\text{on})}=-14.1$ V。$Q_3$ 截止时，$Q_1$ 的基极电流 $V_o/(\beta_FR_L)$ 流经 $R_1$，由 $V_{CC}$ 起列 KVL 得

$$
V_o^+=\frac{V_{CC}-V_{BE(\text{on})}}{1+R_1/(\beta_FR_L)}=\frac{14.3\ \mathrm V}{1+\dfrac{20\ \mathrm{k\Omega}}{50R_L}},
$$

即 $R_L=10\ \mathrm{k\Omega}$ 时为 13.75 V，$R_L=2\ \mathrm{k\Omega}$ 时为 11.92 V。对称正弦波先在正侧削波，故 $\hat V_o=V_o^+$。

### 第 2 步 — B 类功率关系

忽略交越时，每个输出器件从其电源导通峰值为 $\hat V_o/R_L$ 的半正弦电流，其整周期平均值为 $\hat V_o/(\pi R_L)$。因此

$$
P_L=\frac{\hat V_o^2}{2R_L},\qquad P_{\text{supply}}=2V_{CC}\frac{\hat V_o}{\pi R_L},\qquad \eta=\frac{P_L}{P_{\text{supply}}}=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}},
$$

两个输出器件平分二者之差：

$$
P_{\text{device}}=\frac{P_{\text{supply}}-P_L}{2}.
$$

效率只计入输出器件，不含 $R_1$ 与 $Q_3$ 的电流。

### 第 3 步 — 数值结果

$R_L=10\ \mathrm{k\Omega}$、$\hat V_o=13.75$ V 时：

$$
P_L=\frac{(13.75\ \mathrm V)^2}{2(10\ \mathrm{k\Omega})}=9.45\ \mathrm{mW},\qquad
P_{\text{supply}}=\frac{2(15\ \mathrm V)(13.75\ \mathrm V)}{\pi(10\ \mathrm{k\Omega})}=13.13\ \mathrm{mW},
$$
$$
\eta=\frac{9.45}{13.13}=72.0\%,\qquad P_{\text{device}}=\frac{13.13\ \mathrm{mW}-9.45\ \mathrm{mW}}{2}=1.84\ \mathrm{mW}.
$$

2 kΩ 的情形同理：

| $R_L$ | $\hat V_o$ | $P_L$ | $P_{\text{supply}}$ | $\eta$ | 每个器件的平均功耗 |
|---|---|---|---|---|---|
| 10 kΩ | 13.75 V | 9.45 mW | 13.13 mW | 72.0% | 1.84 mW |
| 2 kΩ | 11.92 V | 35.5 mW | 56.9 mW | 62.4% | 10.7 mW |

效率低于理想值 $\pi/4=78.5\%$，因为经 $R_1$ 的驱动限制使 $\hat V_o$ 远低于 $V_{CC}$，2 kΩ 重负载时尤甚。若在极限计算中取 $I_{b1}=I_{e1}/(\beta_F+1)$，结果只略有变化（9.47 mW、72.0%；35.7 mW、62.6%）。
