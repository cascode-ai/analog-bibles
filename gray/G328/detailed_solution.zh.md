# 详细步骤 - G328

在运放输入端断开环路，求环路传输。电容分压决定反馈系数 $\beta$，输出端看到的负载是 $C_L$ 加上反馈电容，它决定主极点。在双极点模型下，相位裕度由穿越频率与 $|p_2|$ 之比求得。

### 第 1 步 — 反馈系数

在输出端加测试电压，反相输入端悬浮，因为运放输入端不取电流。反相输入节点经 $C_I$ 接输出，经 $C_S+C_{ip}$ 接地，因为此相位中 $C_S$ 的另一极板接地。反馈到输入端的输出电压比例为
$$
\beta=\frac{C_I}{C_I+C_S+C_{ip}}=\frac{4\ \mathrm{pF}}{4.5\ \mathrm{pF}}=0.889 .
$$

### 第 2 步 — 等效负载与主极点

套筒式运放的输出是注入大共源共栅电阻 $R_o$ 的电流 $g_{m1}v_{id}$。该节点上的电容为 $C_L$ 加上 $C_I$ 与 $C_S+C_{ip}$ 的串联：
$$
C_{L,\text{eff}}=C_L+\frac{C_I(C_S+C_{ip})}{C_I+C_S+C_{ip}}=1.5\ \mathrm{pF}+0.444\ \mathrm{pF}=1.944\ \mathrm{pF}.
$$
主极点为 $p_1\approx-1/(R_oC_{L,\text{eff}})$。在 $|p_1|$ 以上，
$$
T(s)\approx\beta\,\frac{g_{m1}}{sC_{L,\text{eff}}}\cdot\frac{1}{1+s/|p_2|} .
$$

### 第 3 步 — 穿越频率

忽略 $p_2$ 时，$|T|$ 在下式处降到单位增益：
$$
\omega_u=\frac{\beta g_{m1}}{C_{L,\text{eff}}}=\frac{0.889\times0.1\ \mathrm{mA/V}}{1.944\ \mathrm{pF}}=4.57\times10^7\ \mathrm{rad/s}\quad(7.3\ \mathrm{MHz}).
$$
它远低于 $|p_2|=2\times10^8$ rad/s，因此 $p_2$ 只带来不大的相位滞后。

### 第 4 步 — 相位裕度

在 $|p_1|$ 以上，$T$ 的相位为 $-90^\circ-\tan^{-1}(\omega/|p_2|)$：
$$
\mathrm{PM}=90^\circ-\tan^{-1}\frac{4.57\times10^7}{2\times10^8}=90^\circ-12.9^\circ=77^\circ .
$$
若用精确的穿越频率，由 $\omega_c\sqrt{1+(\omega_c/|p_2|)^2}=\omega_u$ 得 $\omega_c=4.46\times10^7$ rad/s，$\mathrm{PM}=77.4^\circ$。裕度大是因为环路穿越频率被两次降低：一是 $\beta<1$，二是反馈电容带来的额外 0.44 pF 负载。
