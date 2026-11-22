# 详细步骤 - G135

求出 $R_L=1\ \mathrm{k\Omega}$ 时的输出极限，较小者决定不削波的正弦幅度。输出对管的静态电流远小于信号电流，因此功率、效率和器件功耗可用 B 类关系计算。

### 第 1 步 — 输出极限与幅度

- **负向：** $Q_{17}$ 饱和，pnp 跟随器 $Q_{23}$、$Q_{20}$ 各加一个 $V_{BE(\text{on})}$：$V_o^-=-15\ \mathrm V+0.2\ \mathrm V+0.7\ \mathrm V+0.7\ \mathrm V=-13.4$ V。
- **正向：** $Q_{13A}$ 饱和，故 $V_o^+=15\ \mathrm V-0.2\ \mathrm V-0.7\ \mathrm V=14.1$ V。这需要 $Q_{14}$ 提供 $14.1$ mA，远低于其驱动极限 $(\beta_F+1)(0.2\ \mathrm{mA})=40.2$ mA，驱动不构成限制。

对称正弦波先在负侧削波，故 $\hat V_o=13.4$ V。

### 第 2 步 — 输出功率与效率

每个输出器件从其电源导通峰值为 $\hat V_o/R_L$ 的半正弦电流，整周期平均值为 $\hat V_o/(\pi R_L)$。因此

$$
P_L=\frac{\hat V_o^2}{2R_L}=\frac{(13.4\ \mathrm V)^2}{2(1\ \mathrm{k\Omega})}=89.8\ \mathrm{mW},
$$
$$
P_{\text{supply}}=2V_{CC}\frac{\hat V_o}{\pi R_L}=\frac{2(15\ \mathrm V)(13.4\ \mathrm V)}{\pi(1\ \mathrm{k\Omega})}=128\ \mathrm{mW},
$$
$$
\eta=\frac{P_L}{P_{\text{supply}}}=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{13.4}{15}=70.2\%.
$$

效率只计入输出器件 $Q_{14}$ 和 $Q_{20}$，不含驱动级的偏置电流。

### 第 3 步 — 每个输出器件的峰值瞬时功耗

$Q_{14}$ 导通时 $I_{c14}\approx V_o/R_L$、$V_{ce14}=V_{CC}-V_o$，故

$$
P_{14}=\frac{V_o}{R_L}\left(V_{CC}-V_o\right),
$$

这是 $V_o$ 的抛物线，在 $V_o=V_{CC}/2=7.5$ V（负载线中点）处取最大值。摆幅可达 13.4 V，会经过该点：

$$
P_{\max}=\frac{V_{CC}^2}{4R_L}=\frac{(15\ \mathrm V)^2}{4(1\ \mathrm{k\Omega})}=56.3\ \mathrm{mW}.
$$

由对称性，$Q_{20}$ 在 $V_o=-7.5$ V 处有相同的峰值。输出峰值处的功耗反而较低，只有 $(13.4\ \mathrm{mA})(1.6\ \mathrm V)=21$ mW。

该级以 **70% 的效率** 输出 **89.8 mW**，每个输出管的最大瞬时功耗为 **56.3 mW**。
