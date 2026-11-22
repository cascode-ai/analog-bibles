# 详细步骤 - G307

0.05 μF 电容位于 $Q_5$ 基极这一高阻节点上，因此该节点决定唯一的主极点。输入级相当于驱动该电容的跨导器（transconductor）$G_m$，后级把该节点电压乘以 $-500$。单位增益频率由 $G_m$、$C$ 和 500 倍增益求得，压摆率由输入级能向 $C$ 注入的最大电流求得。

### 第 1 步 — 输入级跨导

$Q_1$ 与 $Q_2$ 共用 $I_{EE}=20$ μA，平衡时各自 $I_C=10$ μA，因此
$$
g_{m1}=\frac{I_C}{V_T}=\frac{10\ \mu\mathrm A}{26\ \mathrm{mV}}=0.3846\ \mathrm{mA/V}.
$$
差模输入 $v_i$ 使两管集电极电流变化 $\pm g_{m1}v_i/2$。$Q_3$–$Q_4$ 电流镜把 $Q_1$ 的电流变化复制到 $Q_4$，并在输出节点处减去，而 $Q_2$ 在该节点加上自身的变化。两半边因此相加。$Q_5$ 基极交流接地时，短路输出电流为
$$
i_o=G_m v_i,\qquad G_m=g_{m1}=0.3846\ \mathrm{mA/V}.
$$

### 第 2 步 — 主极点与单位增益频率

设 $R$ 为 $Q_5$ 基极处的总电阻，即 $Q_2$、$Q_4$ 的输出电阻与 $Q_5$ 的输入电阻并联。电容接地，不发生密勒倍增：该节点看到的就是 $C=0.05$ μF。开环增益为
$$
a(j\omega)=\frac{v_o}{v_i}=-500\,\frac{G_mR}{1+j\omega RC}.
$$
不需要知道 $R$。由于响应由这一个极点主导，$|a|$ 降到 1 的频率远高于 $1/(RC)$，此处 $|1+j\omega RC|\approx\omega RC$：
$$
|a(j\omega)|\approx\frac{500\,G_m}{\omega C}=1
\quad\Rightarrow\quad
\omega_u=\frac{500\,G_m}{C}=\frac{500\times0.3846\ \mathrm{mA/V}}{0.05\ \mu\mathrm F}=3.85\times10^6\ \mathrm{rad/s},
$$
$$
f_u=\frac{\omega_u}{2\pi}=612\ \mathrm{kHz}\approx0.61\ \mathrm{MHz}.
$$

### 第 3 步 — 压摆率

大输入信号使全部尾电流切换到差分对的一侧：

- 若 $I_{EE}$ 全部流过 $Q_2$，则 $Q_1$ 与电流镜都不导通，$+20$ μA 流入该节点；
- 若 $I_{EE}$ 全部流过 $Q_1$，则 $Q_4$ 复制 20 μA 并从该节点抽出，$Q_2$ 不提供电流。

因此可用于给 $C$ 充放电的电流限制为 $\pm I_{EE}$，$Q_5$ 基极电压的最大变化速率为
$$
\left|\frac{dV_{b5}}{dt}\right|_{\max}=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm A}{0.05\ \mu\mathrm F}=400\ \mathrm{V/s}.
$$
后级在此不受电流限制，以 $-500$ 的增益跟随，因此输出压摆率为
$$
SR=500\times400\ \mathrm{V/s}=2\times10^5\ \mathrm{V/s}=0.2\ \mathrm{V/\mu s}.
$$

### 第 4 步 — 与 10 pF 密勒电容比较

从 $Q_5$ 基极看，原来的 10 pF 电容相当于 $10\ \mathrm{pF}\times(1+500)\approx5$ nF。0.05 μF 接地电容是它的十倍，因此 $\omega_u$ 和 $SR$ 都比原来的 6.1 MHz 和 2 V/μs 小十倍。二者之比与 $C$ 无关：
$$
\frac{SR}{\omega_u}=\frac{I_{EE}}{G_m}=\frac{20\ \mu\mathrm A}{0.3846\ \mathrm{mA/V}}=52\ \mathrm{mV}.
$$
