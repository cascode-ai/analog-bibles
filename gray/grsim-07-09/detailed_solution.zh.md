# 详细步骤 - grsim-07-09

横向 pnp 管的 $f_T$ 很低，因此 $C_\pi$ 很大，$\beta(s)$ 很早就开始下降。把基极到发射极的阻抗记为 $z_\pi=r_\pi\parallel(1/sC_\pi)$。射极跟随器通过因子 $1+g_mz_\pi$ 变换阻抗：输入端放大，输出端缩小。展开这两个表达式即得 $RC$ 与 $RL$ 等效网络。阶跃响应由输出阻抗和负载决定，并用线性混合 π 模型（$C_\mu=0$，$r_o=\infty$；pnp 与 npn 的小信号模型相同）在 ngspice 中验证。

### 第 1 步 — 小信号参数

$$
g_m=\frac{|I_C|}{V_T}=\frac{300\ \mu\mathrm A}{26\ \mathrm{mV}}=11.5\ \mathrm{mA/V},\quad r_\pi=\frac{\beta}{g_m}=4.33\ \mathrm{k\Omega},\quad C_\pi=\frac{g_m}{2\pi f_T}=\frac{11.5\ \mathrm{mA/V}}{2\pi(4\ \mathrm{MHz})}=459\ \mathrm{pF}.
$$

时间常数 $\tau=r_\pi C_\pi=1.99\ \mu$s 决定了 $\beta(s)=g_mz_\pi=\beta/(1+s\tau)$。内部基极处的总源电阻为 $R_S'=R_S+r_b=450\ \Omega$。

### 第 2 步 — 输入阻抗

发射极接 $R_E$ 时从基极看入，基极电流 $i_b$ 流过 $r_b$ 和 $z_\pi$，而 $(1+g_mz_\pi)i_b$ 流过 $R_E$：

$$
z_i=r_b+z_\pi+(1+g_mz_\pi)R_E=r_b+R_E+z_\pi(1+g_mR_E).
$$

最后一项是 $r_\pi\parallel C_\pi$ 按 $1+g_mR_E=47.2$ 缩放，即一个并联 $RC$：

$$
R=r_\pi(1+g_mR_E)=204\ \mathrm{k\Omega},\qquad C=\frac{C_\pi}{1+g_mR_E}=9.74\ \mathrm{pF},
$$

再与 $r_b+R_E=4.2\ \mathrm{k\Omega}$ 串联。$|z_i|$ 低频时为 208.5 kΩ，在极点 $1/(2\pi RC)=80$ kHz 以上以 −20 dB/十倍频下降，约在 $80\ \mathrm{kHz}\times(208.5/4.2)\approx4$ MHz 以上趋于 4.2 kΩ。

### 第 3 步 — 输出阻抗

信号源短路、从发射极看入（不含 $R_E$），测试电压驱动 $(R_S'+z_\pi)$，发射极电流为基极电流的 $(1+g_mz_\pi)$ 倍：

$$
z_o=\frac{R_S'+z_\pi}{1+g_mz_\pi}=\frac{r_\pi+R_S'(1+s\tau)}{(1+\beta)+s\tau}.
$$

低频时 $z_o=(r_\pi+R_S')/(\beta+1)=94\ \Omega$，高频时 $z_o\to R_S'=450\ \Omega$。其间先有 $(r_\pi+R_S')/(R_S'\tau)=5.3\times10^6$ rad/s（0.85 MHz）处的零点，后有 $(1+\beta)/\tau=2.56\times10^7$ rad/s（4.1 MHz）处的极点：$z_o$ 随频率上升，因此呈感性（inductive）。它可用 $R_2\parallel(R_1+sL)$ 表示，其中

$$
R_2=R_S'=450\ \Omega,\qquad R_1\approx\frac1{g_m}+\frac{R_S'}{\beta}=95.7\ \Omega,\qquad L\approx\frac{\tau R_S'}{\beta}=C_\pi r_\pi\frac{R_S'}{\beta}=17.9\ \mu\mathrm H .
$$

若精确拟合零点和极点，则得 $R_1=118\ \Omega$、$L=22.2\ \mu$H。

![仿真的输入阻抗（由 208 kΩ 降至 4.2 kΩ）与输出阻抗（由 94 Ω 升至 450 Ω）幅值](/q/grsim-07-09/solution-impedance.zh.svg)

| $f$ | 10 kHz | 100 kHz | 1 MHz | 3 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|---|
| $\lvert z_i\rvert$（ngspice） | 207 kΩ | 130 kΩ | 17.1 kΩ | 6.9 kΩ | 4.5 kΩ | 4.3 kΩ |
| $\lvert z_o\rvert$（ngspice） | 93.8 Ω | 94.4 Ω | 141 Ω | 279 Ω | 418 Ω | 441 Ω |

### 第 4 步 — 1 kΩ 负载下的阶跃响应

发射极接 $R_L=1\ \mathrm{k\Omega}$ 时，

$$
\frac{v_o}{v_s}=\frac{R_L(1+g_mz_\pi)}{R_S'+z_\pi+R_L(1+g_mz_\pi)}=0.914\,\frac{1+s/2.56\times10^7}{1+s/1.93\times10^7}.
$$

$t=0^+$ 时 $C_\pi$ 相当于短路（$z_\pi=0$），输入直接馈通到一个分压器：$v_o=R_L/(R_L+R_S')\times1\ \mathrm{mV}=0.69$ mV。随后输出以 $\tau=1/(1.93\times10^7)=52$ ns 指数上升到直流值 $R_L/(R_L+z_o(0))\times1\ \mathrm{mV}=0.914$ mV，没有过冲。

### 第 5 步 — 400 pF 负载下的阶跃响应

采用理想电流源偏置时没有电阻性负载，开路增益为 1，$v_o/v_s=1/(1+sC_Lz_o)$：

$$
\frac{v_o}{v_s}=\frac{(1+\beta)+s\tau}{s^2C_LR_S'\tau+s\left[\tau+C_L(r_\pi+R_S')\right]+(1+\beta)} .
$$

极点位于 $-5.45\times10^6\pm j1.06\times10^7$ rad/s，因此 $\omega_n=1.19\times10^7$ rad/s，$\zeta=0.46$；另有一个零点位于 $-2.56\times10^7$ rad/s。感性的输出阻抗与负载电容构成串联谐振。响应出现过冲（仅由 $\zeta$ 约为 20 %，计入零点后略大），并以 $2\pi/1.06\times10^7=0.59\ \mu$s 的周期振荡，最后稳定在 1 mV。

### 第 6 步 — SPICE 阶跃响应

```spice
* grsim-07-09 step responses, linear hybrid-pi of the pnp
.subckt hp b e
Rb  b  bi 200
Rpi bi e  4333.3
Cpi bi e  459.2p
G   0  e  bi e 11.5385m
.ends
Vs  s 0 pwl(0 0 1p 1m)
RS1 s b1 250
X1  b1 e1 hp
RL  e1 0 1k
RS2 s b2 250
X2  b2 e2 hp
CL  e2 0 400p
.tran 1n 2u 0 1n
.end
```

![1 mV 输入阶跃的仿真响应：1 kΩ 负载时先跳变再指数上升，400 pF 负载时为衰减振荡](/q/grsim-07-09/solution-step.zh.svg)

| 负载 | 初始跳变 | 时间常数 / 上升 | 峰值 | 振荡周期 | 终值 |
|---|---|---|---|---|---|
| 1 kΩ | 0.69 mV | τ = 52 ns | 无 | — | 0.914 mV |
| 400 pF | 0 | 10–90 % 用时 0.11 µs | 0.25 µs 时 1.23 mV（23 %） | 0.59 µs | 1.00 mV |

电阻负载给出一阶响应，并有一个瞬时跳变，因为大的 $C_\pi$ 在高频时把输入直接前馈到输出。电容负载给出欠阻尼的二阶响应。这种振荡正是射极跟随器驱动电容时的典型特征：由于 $\beta$ 下降，其输出阻抗随频率升高而呈感性。
