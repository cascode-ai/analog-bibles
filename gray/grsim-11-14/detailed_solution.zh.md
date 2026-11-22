# 详细步骤 - grsim-11-14

先求偏置，再把每个噪声源折算为差分输入电压：输入短路时得到电压源，输入开路时得到电流源。对于位于某一半边的噪声源，只有其差模分量能到达差分输出，所以每一半都可以用尾节点为交流地的半边电路（half circuit）分析。(b) 小题把输入参考谱密度在单极点响应的噪声带宽（noise bandwidth）内积分。两部分都用 SPICE `.noise` 分析验证。

### 第 1 步 — 偏置点

两个基极都接近地电位，尾节点位于 $-V_{BE(\text{on})}-I_ER_E\approx-0.72$ V，故

$$
I_{tail}=\frac{-0.72\ \mathrm V-(-10\ \mathrm V)}{100\ \mathrm{k\Omega}}=92.8\ \mu\mathrm A,\qquad
I_C=\frac{\beta}{\beta+1}\frac{I_{tail}}{2}=45.9\ \mu\mathrm A,\qquad I_B=0.459\ \mu\mathrm A,
$$

$$
g_m=\frac{I_C}{kT/q}=1.77\ \mathrm{mS},\qquad \frac1{g_m}=566\ \Omega,\qquad \frac1{2g_m}=283\ \Omega.
$$

### 第 2 步 — 差模增益

半边电路中发射极电阻与 $1/g_m$ 串联，因此从差分输入到差分输出的增益为

$$
A_v=\frac{R_C}{\dfrac1{g_m}+R_E+\dfrac{r_b}{\beta+1}}=\frac{20\ \mathrm{k\Omega}}{566+500+2\ \Omega}=18.7.
$$

### 第 3 步 — 电压源

输入短路时，每一半在其基极处贡献以下串联电压（散粒噪声项与带发射极负反馈的共射级一样，经基极–发射极回路折算）：

- $r_b$ 和 $R_E$：$4kT(r_b+R_E)=4kT(700\ \Omega)$，因为二者都是输入回路中的电压源。
- 集电极散粒噪声（shot noise）$2qI_C$：要抵消它需 $v_\pi=-i_c/g_m$，同时会有 $i_c/\beta$ 流过 $r_b+R_E$，故 $v_{eq}=i_c\left[\frac1{g_m}+\frac{r_b+R_E}{\beta}\right]=i_c(573\ \Omega)$，$2qI_C(573\ \Omega)^2=4kT(291\ \Omega)$。去掉微小的 $\beta$ 修正，就是熟悉的 $4kT/(2g_m)=4kT(283\ \Omega)$。
- 基极散粒噪声 $2qI_B$ 流过 $r_b$ 和 $R_E$：$2qI_B(r_b+R_E)^2=4kT(4.3\ \Omega)$。

两半的噪声互不相关，按功率相加。两个 20-kΩ 负载位于输出端，经 $A_v$ 折算：

$$
\begin{aligned}
\frac{\overline{v_i^2}}{\Delta f}&=2\left[4kT\left(r_b+R_E\right)+2qI_C\left(\frac1{g_m}+\frac{r_b+R_E}{\beta}\right)^2+2qI_B(r_b+R_E)^2\right]+\frac{2\cdot4kTR_C}{A_v^2}\\
&=4kT\left[2(700+291+4.3)\ \Omega+114\ \Omega\right]=4kT(2.10\ \mathrm{k\Omega})=3.49\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

即 5.9 nV/√Hz。尾电阻只流过共模电流，不产生差分输出。

### 第 4 步 — 电流源

输入开路时只有 $Q_1$ 的基极受驱动，因此只出现 $Q_1$ 的电流源；$Q_2$ 的基极接地，其噪声电流直接流入地，不经过信号源：

$$
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)=2(1.6\times10^{-19}\ \mathrm C)(0.459+0.0046)\ \mu\mathrm A=1.48\times10^{-25}\ \mathrm{A^2/Hz},
$$

即 0.38 pA/√Hz。

### 第 5 步 — (a) 的 SPICE 验证

网表采用 IS $=10^{-16}$ A（46 µA 时 $V_{BE}\approx0.70$ V）、BF $=100$、RB $=200\ \Omega$ 的 NPN，并设定温度使 $4kT=1.66\times10^{-20}$ V·C；输出取 $v(c_1,c_2)$。求 $\overline{v_i^2}$ 时用理想电压源驱动 $Q_1$ 基极。求 $\overline{i_i^2}$ 时用交流电流源驱动，并用一个接地的 1-GH 电感提供基极电流而不引入噪声。

```spice
* grsim-11-14 (a), voltage generator
VS b1 0 dc 0 ac 1
VCC vcc 0 10
VEE vee 0 -10
RC1 vcc c1 20k
RC2 vcc c2 20k
Q1 c1 b1 e1 qn
Q2 c2 0 e2 qn
RE1 e1 t 500
RE2 e2 t 500
RT t vee 100k
.model qn npn is=1e-16 bf=100 rb=200
.temp 27.4
.noise v(c1,c2) VS dec 1 1k 10k
.end
```

求电流源时，把 `VS` 换成 `IS 0 b1 dc 0 ac 1` 和 `LB b1 0 1e9`。

| 量 | 手算 | SPICE |
|---|---|---|
| $I_C$ | 45.9 µA | 46.0 µA |
| $\overline{v_i^2}/\Delta f$（V²/Hz） | $3.49\times10^{-17}$ | $3.49\times10^{-17}$ |
| $\overline{i_i^2}/\Delta f$（A²/Hz） | $1.48\times10^{-25}$ | $1.47\times10^{-25}$ |

### 第 6 步 — (b)：30 MHz 主极点下的总噪声

$R_S=50\ \Omega$ 时，计入源电阻的点频输入噪声谱密度为

$$
\frac{\overline{v_{n}^2}}{\Delta f}=4kTR_S+\frac{\overline{v_i^2}}{\Delta f}+\frac{\overline{i_i^2}}{\Delta f}R_S^2
=(8.3\times10^{-19}+3.49\times10^{-17}+3.7\times10^{-22})\ \mathrm{V^2/Hz}=3.58\times10^{-17}\ \mathrm{V^2/Hz};
$$

在这样的源电阻下电流源可以忽略。白噪声经过 $f_{3dB}=30$ MHz 的单极点响应，其噪声带宽为

$$
B_n=\int_0^\infty\frac{df}{1+(f/f_{3dB})^2}=\frac{\pi}{2}f_{3dB}=47.1\ \mathrm{MHz},
$$

因此总等效输入噪声为

$$
\overline{v_{n}^2}=(3.58\times10^{-17}\ \mathrm{V^2/Hz})(47.1\ \mathrm{MHz})=1.69\times10^{-9}\ \mathrm{V^2},\qquad v_n=41\ \mu\mathrm V\ \text{rms}.
$$

从 $v_s$ 起的低频增益（此时基极回路包含 $R_S$）为 $\dfrac{2R_C\,\beta/(\beta+1)}{2(1/g_m+R_E)+(R_S+2r_b)/(\beta+1)}=18.5$，故输出噪声为

$$
v_{no}=18.5\times41\ \mu\mathrm V=0.76\ \mathrm{mV}\ \text{rms}\quad(\overline{v_{no}^2}=5.8\times10^{-7}\ \mathrm{V^2}).
$$

作为验证，在网表中接入 50-Ω 源电阻，并在两个集电极之间接 0.1326 pF 电容（与 40-kΩ 差分输出电阻构成 30 MHz 极点），仿真得到的积分输出噪声为 0.766 mV rms。
