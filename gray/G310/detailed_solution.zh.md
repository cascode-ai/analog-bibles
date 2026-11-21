# 详细步骤 - G310

全功率带宽由大信号压摆率决定，而不是由小信号频率响应决定。先求密勒补偿电路的压摆率，再要求 15 V 正弦波的最大斜率不超过它。

### 第 1 步 — 压摆率

10 pF 密勒电容 $C$ 接在 $Q_5$ 基极与 $V_o$ 之间，第二级使 $Q_5$ 基极电压几乎不变。因此输入级送出的全部电流都流过 $C$，$dV_o/dt=i/C$。大输入信号把全部尾电流切换到一侧。经 $Q_3$–$Q_4$ 电流镜，输入级输出节点的电流为 $\pm I_{EE}$，因此
$$
SR=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm A}{10\ \mathrm{pF}}=2\times10^6\ \mathrm{V/s}=2\ \mathrm{V/\mu s}.
$$
输出级不限制这一速率：300 μA 电流源和 $Q_6$ 能以很大余量提供 20 μA 的电容电流。

### 第 2 步 — 满摆幅正弦波的斜率

对 $V_o=\hat V\sin\omega t$，斜率 $dV_o/dt=\omega\hat V\cos\omega t$ 在过零点处最大：
$$
\left|\frac{dV_o}{dt}\right|_{\max}=\omega\hat V .
$$
只有该最大斜率不超过 $SR$ 时，输出才不失真。

### 第 3 步 — 全功率带宽

令 $\omega\hat V=SR$，取 $\hat V=15$ V：
$$
f_{\max}=\frac{SR}{2\pi\hat V}=\frac{2\times10^6\ \mathrm{V/s}}{2\pi\times15\ \mathrm V}=21.2\ \mathrm{kHz}.
$$
它比小信号单位增益频率 $g_{m1}/C=6.1$ MHz 低约 300 倍，其中 $g_{m1}=10\ \mu\mathrm A/26\ \mathrm{mV}$。因此大摆幅工作远在小信号带宽起作用之前就受到压摆的限制。
