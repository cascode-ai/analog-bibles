# 详细步骤 - G194

采用混合 π 模型：内部基极 $b'$ 经 $r_b$ 接交流地，集电极处于交流地（$R_L=0$），$r_o=\infty$。求输入阻抗时用测试源驱动发射极；求输出阻抗时驱动集电极，并把发射极的理想电流源置零（开路）。然后把每个阻抗改写成简单的 RLC 网络。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=5.2\ \mathrm{k\Omega},\qquad
z_\pi=\frac{r_\pi}{1+sr_\pi C_\pi}.
$$

### 第 2 步 — 发射极输入阻抗

从发射极看进去，电路相当于由源电阻 $r_b$ 驱动的射极跟随器（emitter follower）。忽略 $C_\mu$（它把 $b'$ 接到接地的集电极，只在 $1/(r_bC_\mu)$ 附近即 GHz 量级才起作用），流入发射极的测试电流 $i_x$ 流经 $z_\pi$ 和 $r_b$，同时受控源提供 $g_mv_1$：

$$
z_i=\frac{z_\pi+r_b}{1+g_mz_\pi}
=\frac{r_\pi+r_b+sr_br_\pi C_\pi}{\beta_0+1+sr_\pi C_\pi}.
$$

- 低频：$z_i(0)=\dfrac{r_\pi+r_b}{\beta_0+1}=\dfrac{5.4\ \mathrm{k\Omega}}{101}=53.5\ \Omega$。
- 高频：$z_i(\infty)=r_b=200\ \Omega$。
- 零点：$\dfrac{r_\pi+r_b}{r_br_\pi C_\pi}=5.19\times10^8$ rad/s（82.6 MHz）；极点：$\dfrac{\beta_0+1}{r_\pi C_\pi}=1.94\times10^9$ rad/s（309 MHz）。

零点低于极点，因此 $|z_i|$ 随频率升高：阻抗呈感性。

### 第 3 步 — 输入等效电路

写出 $Y_i=1/z_i$ 并减去高频电导 $1/r_b$：

$$
Y_i-\frac1{r_b}=\frac{\beta_0r_b-r_\pi}{r_b\,(r_\pi+r_b+sr_br_\pi C_\pi)}=\frac1{R_1+sL},
$$

所以该网络是 $R_2$ 与串联 $R_1$–$L$ 支路的并联：

$$
R_2=r_b=200\ \Omega,\qquad
R_1=\frac{r_b(r_\pi+r_b)}{\beta_0r_b-r_\pi}=\frac{(200)(5400)}{14\,800}\ \Omega=73.0\ \Omega,\qquad
L=\frac{r_b^2r_\pi C_\pi}{\beta_0r_b-r_\pi}=141\ \mathrm{nH}.
$$

<!-- diagram: diagram-01.cir -->

发射极节点经 $R_2$ 接地，同时并联一条由 $R_1$ 与 $L$ 串联的支路接地。校验：$R_1\parallel R_2=53.5\ \Omega=z_i(0)$。（常用近似 $R_1\approx1/g_m+r_b/\beta_0=54\ \Omega$ 和 $L\approx C_\pi r_\pi r_b/\beta_0=104$ nH 假设 $r_b\gg R_1$，而这里并不很好地满足。）

### 第 4 步 — 集电极输出阻抗

发射极由置零的理想电流源驱动时，在发射极列 KCL 得 $g_mv_1+v_1/z_\pi=0$，故 $v_1=0$：$g_m$ 受控源不携带信号，$z_\pi$ 中也没有电流。于是集电极的测试电压只驱动电流经 $C_\mu$ 流入 $b'$，再经 $r_b$ 到地：

$$
z_o=r_b+\frac1{sC_\mu},
$$

即 0.3 pF 电容与 200 Ω 串联；由于 $r_o=\infty$，直流时电阻为无穷大。

<!-- diagram: diagram-02.cir -->

集电极经 $C_\mu$ 接到内部基极节点，该节点经 $r_b$ 接地。

### 第 5 步 — 幅值草图

| $f$ | 100 kHz | 1 MHz | 10 MHz | 30 MHz | 82.6 MHz | 100 MHz |
|---|---|---|---|---|---|---|
| $\lvert z_i\rvert$ | 53.5 Ω | 53.5 Ω | 53.8 Ω | 56.6 Ω | 73.0 Ω | 79.9 Ω |
| $\lvert z_o\rvert$ | 5.31 MΩ | 531 kΩ | 53.1 kΩ | 17.7 kΩ | 6.42 kΩ | 5.31 kΩ |

例如，100 kHz 处 $|z_o|$ 为 $1/[2\pi(100\ \mathrm{kHz})(0.3\ \mathrm{pF})]=5.31$ MΩ。

![输入阻抗幅值：平坦地保持在 53.5 Ω，约 20 MHz 以上呈感性上升，到 100 MHz 为 80 Ω，趋向 200 Ω 的极限](/q/G194/solution-curves.zh.svg)

$|z_i|$ 在约 20 MHz 以下平坦地保持在 53.5 Ω（约为 $1/g_m$），之后随感性支路起主导作用而上升，在 100 MHz 处约为 80 Ω；只有在远高于 309 MHz 极点的频率上才会趋平于 $r_b=200\ \Omega$。

![输出阻抗幅值：从 100 kHz 处的 5.3 MΩ 到 100 MHz 处的 5.3 kΩ 的 −20 dB/十倍频直线](/q/G194/solution-output.zh.svg)

在整个范围内 $|z_o|$ 纯属电容性，以 −20 dB/十倍频从 5.3 MΩ 降到 5.3 kΩ；$r_b$ 只有在 $1/(2\pi r_bC_\mu)\approx2.7$ GHz 以上才显现出来。
