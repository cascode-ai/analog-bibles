# 详细步骤 - grsim-11-10

对每个双极晶体管采用双噪声源输入模型，并利用这样一个事实：共基级的等效噪声源与同一晶体管接成共射时相同。共基电流增益 $\alpha\approx1$，因此 $Q_1$ 集电极处的所有噪声电流（5-kΩ 负载和 $Q_2$ 的输入噪声电流）原样折算到发射极。(b) 小题把计入 $4kT/R_S$ 的等效输入噪声电流在 150 MHz 带宽内积分。两部分都用 SPICE 验证。

### 第 1 步 — 小信号参数

两管均为 $I_C=1$ mA，故

$$
g_m=\frac{I_C}{kT/q}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mS},\qquad
I_B=\frac{I_C}{\beta_0}=10\ \mu\mathrm A,\qquad
C_\pi=\frac{g_m}{2\pi f_T}=\frac{38.5\ \mathrm{mS}}{2\pi(400\ \mathrm{MHz})}=15.3\ \mathrm{pF}.
$$

$C_\mu$ 可忽略时，电流增益为 $\beta(j\omega)=\beta_0/(1+j\omega\beta_0/\omega_T)$，它从 $f_T/\beta_0=4$ MHz 开始下降，因此

$$
\frac{1}{|\beta(j\omega)|^2}=\frac1{\beta_0^2}+\frac{f^2}{f_T^2}.
$$

### 第 2 步 — 单管的等效噪声源

$r_b=0$ 时噪声源只有基极散粒噪声（shot noise）$2qI_B$ 和集电极散粒噪声 $2qI_C$。将输入短路、把 $2qI_C$ 经 $g_m$ 折算，得到电压源；将输入开路、把 $2qI_C$ 经电流增益折算，得到电流源：

$$
\frac{\overline{v_i^2}}{\Delta f}=\frac{2qI_C}{g_m^2}=\frac{4kT}{2g_m}=4kT(13\ \Omega)=2.16\times10^{-19}\ \mathrm{V^2/Hz},
\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B+\frac{2qI_C}{|\beta(j\omega)|^2}.
$$

把接地点从发射极移到基极不会改变这两个噪声源，所以它们就是 $Q_1$ 在其发射极处的等效噪声源。

### 第 3 步 — 负载与 $Q_2$ 折算到 $Q_1$ 发射极

节点 X（$Q_1$ 集电极）上有电流 $4kT/(5\ \mathrm{k\Omega})$ 和 $Q_2$ 的等效噪声源。$Q_1$ 从发射极到集电极的电流增益为 $\alpha\approx1$（在 150 MHz 处只下降几个百分点），所以 X 处的电流等效于 $Q_1$ 发射极处的同一电流。

- $4kT/(5\ \mathrm{k\Omega})=3.32\times10^{-24}$ A²/Hz 和 $\overline{i_{i2}^2}$ 直接加到输入电流源上。
- $\overline{v_{i2}^2}$ 作用于 5-kΩ 负载，给出 $\overline{v_{i2}^2}/(5\ \mathrm{k\Omega})^2=8.6\times10^{-27}$ A²/Hz，可以忽略。

求电压源时发射极短路。此时 X 处的电流 $i_n$ 应与信号电流 $g_{m1}v_i$ 比较，因此贡献 $i_n^2/g_{m1}^2$。低频下为 $(3.32+3.2)\times10^{-24}/(38.5\ \mathrm{mS})^2=4kT(0.26\ \Omega)$；在 150 MHz 处，$Q_2$ 的上升项 $2qI_{C2}f^2/f_T^2$ 再增加 $4kT(1.8\ \Omega)$。因此

$$
\frac{\overline{v_{iB}^2}}{\Delta f}\approx4kT(13\ \Omega)=2.2\times10^{-19}\ \mathrm{V^2/Hz},
$$

在 150 MHz 处略升到约 $4kT(15\ \Omega)$。

### 第 4 步 — 总等效输入噪声电流

把 $Q_1$、$Q_2$ 的电流源和负载噪声相加：

$$
\frac{\overline{i_{iB}^2}}{\Delta f}=2q(I_{B1}+I_{B2})+\frac{4kT}{5\ \mathrm{k\Omega}}+2q(I_{C1}+I_{C2})\left(\frac1{\beta_0^2}+\frac{f^2}{f_T^2}\right).
$$

数值计算：$2q(20\ \mu\mathrm A)=6.4\times10^{-24}$，$4kT/5\ \mathrm{k\Omega}=3.32\times10^{-24}$，$2q(2\ \mathrm{mA})/\beta_0^2=6.4\times10^{-26}$ A²/Hz，故

$$
\frac{\overline{i_{iB}^2}}{\Delta f}\approx9.8\times10^{-24}+6.4\times10^{-22}\left(\frac{f}{400\ \mathrm{MHz}}\right)^2\ \mathrm{A^2/Hz}.
$$

白噪声底在几 MHz 以下保持不变；约 50 MHz 以上 $f^2$ 项占主导，在 150 MHz 处达到 $9.0\times10^{-23}$ A²/Hz，此时总值为 $1.0\times10^{-22}$ A²/Hz。

### 第 5 步 — (a) 的 SPICE 验证

两管均采用 Gummel–Poon 模型，BF $=100$，RB $=0$，CJE $=$ CJC $=0$，TF $=1/(2\pi f_T)=0.398$ ns，使 $C_\pi=g_m\mathrm{TF}$。偏置源（5-kΩ 负载的电源、$Q_2$ 发射极电压源、从 $Q_1$ 发射极抽出的直流电流）使两管集电极电流均为 1 mA，它们都是交流地。输出取 $Q_2$ 的集电极电流，由零伏电压源和无噪声的 CCVS 检测。求 $\overline{v_{iB}^2}$ 时用理想电压源驱动 $Q_1$ 发射极；求 $\overline{i_{iB}^2}$ 时用交流电流源驱动，输入节点上不接其他元件。

```spice
* grsim-11-10 (a), current generator
IB e 0 dc 1.01e-3
IIN 0 e dc 0 ac 1
Q1 x 0 e qn
RL vr x 5k
VR vr 0 6.05
Q2 c2 x e2 qn
VE2 e2 0 0.22567
VS c2 vc 0
VC vc 0 5
H1 out 0 VS 1
.model qn npn is=1e-16 bf=100 tf=0.39789n
.temp 27.4
.noise v(out) IIN lin 15 10e6 150e6
.end
```

求电压源时，把 `IB` 和 `IIN` 换成 `VIN e 0 dc -0.773679 ac 1`。

| $f$ | 10 MHz | 40 MHz | 100 MHz | 150 MHz |
|---|---|---|---|---|
| $\overline{v_{iB}^2}/\Delta f$，SPICE（V²/Hz） | $2.20\times10^{-19}$ | $2.22\times10^{-19}$ | $2.33\times10^{-19}$ | $2.50\times10^{-19}$ |
| $\overline{i_{iB}^2}/\Delta f$，手算（A²/Hz） | $1.02\times10^{-23}$ | $1.62\times10^{-23}$ | $4.98\times10^{-23}$ | $9.98\times10^{-23}$ |
| $\overline{i_{iB}^2}/\Delta f$，SPICE（A²/Hz） | $1.04\times10^{-23}$ | $1.66\times10^{-23}$ | $5.23\times10^{-23}$ | $1.09\times10^{-22}$ |

低频下仿真得到的电流噪声底为 $1.00\times10^{-23}$ A²/Hz。150 MHz 处仿真比手算高约 8%，因为严格地说折算电流要除以 $|\alpha(j\omega)|^2$，而它在该频率已略有下降。

### 第 6 步 — (b)：SNR 为 10 dB 所需的信号

$R_S=5$ kΩ 与输入并联，其噪声 $4kT/R_S=3.32\times10^{-24}$ A²/Hz 加到 $\overline{i_{iB}^2}$ 上，而 $\overline{v_{iB}^2}/R_S^2\approx8.8\times10^{-27}$ A²/Hz 可以忽略。信号和噪声经过相同的传递函数到达输出，所以信噪比可以在输入端计算。从 0 积分到 $B=150$ MHz：

$$
\begin{aligned}
\overline{i_n^2}&=\left[2q(I_{B1}+I_{B2})+\frac{4kT}{5\ \mathrm{k\Omega}}+\frac{4kT}{R_S}+\frac{2q(I_{C1}+I_{C2})}{\beta_0^2}\right]B+2q(I_{C1}+I_{C2})\frac{B^3}{3f_T^2}\\
&=(1.31\times10^{-23}\ \mathrm{A^2/Hz})(1.5\times10^8\ \mathrm{Hz})+(6.4\times10^{-22}\ \mathrm{A^2/Hz})(7.03\times10^6\ \mathrm{Hz})\\
&=1.97\times10^{-15}+4.50\times10^{-15}=6.47\times10^{-15}\ \mathrm{A^2},
\end{aligned}
$$

故 $i_n=80$ nA rms。$f^2$ 部分的贡献是白噪声部分的两倍多，不能省略。在网表中加入 $R_S$（并修正其电流对直流偏置的影响），把输入参考谱密度在 1 kHz–150 MHz 内积分，得 82.8 nA rms。

10 dB 的信噪比是功率比 10，因此信号电流的有效值是噪声有效值的 $\sqrt{10}$ 倍：

$$
i_S=\sqrt{10}\,i_n=\sqrt{10}\,(80\text{–}83\ \mathrm{nA})\approx0.25\text{–}0.26\ \mu\mathrm A\ \text{rms}.
$$
