# 详细步骤 - A350

折叠式共源共栅是单级放大器：增益为 $G_mR_{out}$，GB 为 $G_m/C_L$，压摆率由 $C_L$ 可得到的最大电流决定。在弱反型区只有跨导公式改变，$g_m=I_D/(nV_t)$，它与电流成正比，而不是与电流的平方根成正比。先求各支路电流，再求相关器件的 $g_m$ 和 $r_{ds}$，最后算出四个量。

### 第 1 步 — 支路电流

尾电流管 M3 承载 $I_3=2(50\ \mathrm{nA})=100$ nA。电流源 M4 和 M5 各承载 150 nA，其中 50 nA 流入输入管，所以共源共栅支路 M6–M8–M10 和 M7–M9–M11 各承载

$$
I_6=I_7=150\ \mathrm{nA}-50\ \mathrm{nA}=100\ \mathrm{nA}.
$$

### 第 2 步 — 跨导与输出电阻

对 $i_D=(W/L)I_{DO}e^{v_{GS}/(nV_t)}$ 求导得 $g_m=I_D/(nV_t)$；取 $V_t=26$ mV：

$$
g_{m1}=\frac{50\ \mathrm{nA}}{(2.5)(26\ \mathrm{mV})}=0.769\ \mu\mathrm S,\qquad
g_{m7}=\frac{100\ \mathrm{nA}}{(1.5)(26\ \mathrm{mV})}=2.56\ \mu\mathrm S,\qquad
g_{m9}=\frac{100\ \mathrm{nA}}{(2.5)(26\ \mathrm{mV})}=1.54\ \mu\mathrm S .
$$

用 $r_{ds}=1/(\lambda I_D)$，例如 $r_{ds1}=1/[(0.04\ \mathrm{V^{-1}})(50\ \mathrm{nA})]=500\ \mathrm{M\Omega}$：

| 器件 | $I_D$ | $\lambda$（V⁻¹） | $r_{ds}$ |
|---|---|---|---|
| M1、M2 | 50 nA | 0.04 | 500 MΩ |
| M4、M5 | 150 nA | 0.05 | 133 MΩ |
| M6、M7 | 100 nA | 0.05 | 200 MΩ |
| M8–M11 | 100 nA | 0.04 | 250 MΩ |

### 第 3 步 — 输出电阻与增益

从 $v_{OUT}$ 向下看是 M11 之上的共源共栅管 M9；向上看是位于折叠节点上的共源共栅管 M7，折叠节点的负载为 $r_{ds2}\parallel r_{ds5}=105.3$ MΩ。用 $R\approx g_mr_{ds}R_S$：

$$
R_{dn}=g_{m9}r_{ds9}r_{ds11}=(1.54\ \mu\mathrm S)(250\ \mathrm{M\Omega})(250\ \mathrm{M\Omega})=96.2\ \mathrm{G\Omega},
$$
$$
R_{up}=g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds5})=(2.56\ \mu\mathrm S)(200\ \mathrm{M\Omega})(105.3\ \mathrm{M\Omega})=54.0\ \mathrm{G\Omega},
$$
$$
R_{out}=R_{dn}\parallel R_{up}=34.6\ \mathrm{G\Omega}.
$$

输出短路时，M7 的源极呈现约 $1/g_{m7}=0.39\ \mathrm{M\Omega}\ll r_{ds2}\parallel r_{ds5}$，所以 M2 的信号电流几乎全部进入 M7。M1 的信号电流经 M6 和电流镜 M8–M11 到达输出，被反相后在 $v_{OUT}$ 处相加。因此 $G_m\approx g_{m1}$，

$$
A_v=g_{m1}R_{out}=(0.769\ \mu\mathrm S)(34.6\ \mathrm{G\Omega})\approx2.66\times10^4\ \mathrm{V/V}\ (88.5\ \mathrm{dB}).
$$

对小信号电路做完整的节点分析得 26,640。

### 第 4 步 — 增益带宽积、压摆率与功耗

主极点在输出端，为 $1/(R_{out}C_L)$，所以

$$
GB=\frac{g_{m1}}{C_L}=\frac{0.769\ \mu\mathrm S}{2\ \mathrm{pF}}=3.85\times10^5\ \mathrm{rad/s}\quad(61.2\ \mathrm{kHz}).
$$

压摆时全部尾电流 $I_3$ 被导向一侧；由于 $I_4=I_5=150\ \mathrm{nA}>I_3$，共源共栅管的电流不会降到零，输出电流被限制为 $I_3$：

$$
SR=\frac{I_3}{C_L}=\frac{100\ \mathrm{nA}}{2\ \mathrm{pF}}=0.05\ \mathrm{V/\mu s}.
$$

全部电源电流都经 M4 和 M5 流入；$I_3$ 和 100 nA 的共源共栅电流都是其中的一部分，而不是额外的电流。因此

$$
P_{diss}=(V_{DD}-V_{SS})(I_4+I_5)=(3\ \mathrm V)(300\ \mathrm{nA})=0.9\ \mu\mathrm W.
$$

| 物理量 | 数值 |
|---|---|
| $A_v$ | ≈ $2.7\times10^4$ V/V（88.5 dB） |
| GB | $3.85\times10^5$ rad/s ≈ 61 kHz |
| SR | 0.05 V/µs |
| $P_{diss}$ | 0.9 µW |
