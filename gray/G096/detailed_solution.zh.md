# 详细步骤 - G096

这是一个以 $V_{BE}$ 为基准的电流源。$Q_1$ 的基极–发射极结直接跨接在 $R_2$ 上，所以输出电流为 $V_{BE1}/R_2$。电源只能通过 $I_{C1}$ 影响 $I_{OUT}$，而 $V_{BE1}$ 只随 $I_{C1}$ 对数变化，因此 $S$ 很小。先求工作点，再对回路方程求导。

### 第 1 步 — 电路方程

$R_2$ 接在 $Q_2$ 的发射极与地之间，流过 $Q_2$ 的发射极电流；它的上端同时是 $Q_1$ 的基极。忽略基极电流时，

$$
I_{OUT}=\frac{V_{BE1}}{R_2},\qquad V_{BE1}=V_T\ln\frac{I_{C1}}{I_S}.
$$

$R_1$ 为 $Q_1$ 的集电极供电，该节点也是 $Q_2$ 的基极，比地高 $V_{BE1}+V_{BE2}$：

$$
I_{C1}=\frac{V_{CC}-V_{BE1}-V_{BE2}}{R_1},\qquad V_{BE2}=V_T\ln\frac{I_{OUT}}{I_S}.
$$

回路 $Q_1\to R_2\to Q_2$ 是一个负反馈环路，它使 $R_2$ 两端固定为 $V_{BE1}$。

### 第 2 步 — 工作点

从 $V_{BE}\approx0.7$ V 开始迭代：

$$
I_{C1}=\frac{15\ \mathrm V-0.685\ \mathrm V-0.667\ \mathrm V}{10\ \mathrm{k\Omega}}=1.365\ \mathrm{mA},\qquad
V_{BE1}=(26\ \mathrm{mV})\ln\frac{1.365\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.685\ \mathrm V,
$$

$$
I_{OUT}=\frac{0.685\ \mathrm V}{1\ \mathrm{k\Omega}}=0.685\ \mathrm{mA},\qquad
V_{BE2}=(26\ \mathrm{mV})\ln\frac{0.685\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.667\ \mathrm V .
$$

### 第 3 步 — 求导

电源变化 $dV_{CC}$ 时，$I_{C1}$ 变化 $dI_{C1}$，使 $V_{BE1}$ 变化 $dV_{BE1}=V_T\,dI_{C1}/I_{C1}$，从而使 $I_{OUT}$ 变化 $dV_{BE1}/R_2$。忽略 $I_{C1}$ 方程中两个 $V_{BE}$ 项小得多的变化，$dI_{C1}=dV_{CC}/R_1$，所以

$$
\frac{\partial I_{OUT}}{\partial V_{CC}}=\frac1{R_2}\cdot\frac{V_T}{I_{C1}}\cdot\frac1{R_1}=\frac{V_T}{R_2\,I_{C1}R_1}.
$$

乘以 $V_{CC}/I_{OUT}=V_{CC}R_2/V_{BE1}$，并利用 $I_{C1}R_1=V_{CC}-V_{BE1}-V_{BE2}$：

$$
S=\frac{V_{CC}}{I_{OUT}}\frac{\partial I_{OUT}}{\partial V_{CC}}=\frac{V_T}{V_{BE1}}\cdot\frac{V_{CC}}{V_{CC}-V_{BE1}-V_{BE2}} .
$$

### 第 4 步 — 数值

$$
S=\frac{26\ \mathrm{mV}}{0.685\ \mathrm V}\cdot\frac{15\ \mathrm V}{13.65\ \mathrm V}=(0.0380)(1.099)=0.042 .
$$

在 $I_{C1}$ 方程中保留 $V_{BE}$ 的变化，或对完整方程做数值求导，结果同样为 0.042。因此 $V_{CC}$ 变化 1 % 只使 $I_{OUT}$ 变化 0.04 %。对于简单的电阻供电电流镜，$I_{OUT}\approx(V_{CC}-V_{BE})/R$，$S\approx1$。改进来自以 $V_{BE1}$ 为输出基准：$I_{C1}$ 每变化 $e$ 倍，它只变化 $V_T$。
