# 详细步骤 - grsim-07-06

把电路分解为差模和共模半边电路（half circuit）。在差模半边电路中节点 $E$ 为交流地，因此它就是同一晶体管构成的共射级，其极点由密勒效应决定。在共模半边电路中每一半的发射极看到 $2Z_T$，其中 $Z_T=R_T\parallel C_T$，因此增益由尾电流阻抗决定，并在 $C_T$ 起作用后上升。CMRR 是两者之比。用整个差分对的线性混合 π ngspice 模型核对三条曲线。

### 第 1 步 — 小信号参数

每个晶体管流过 $I_{EE}/2=0.5$ mA：

$$
g_m=19.2\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=10.4\ \mathrm{k\Omega},\qquad C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=6.12-0.3=5.82\ \mathrm{pF}.
$$

### 第 2 步 — 差模增益

差模输入时 $E$ 保持交流地，每一侧都是经 $R_S+r_b$ 驱动的共射级。取 $v_{od}=v_{c1}-v_{c2}$：

$$
A_{dm}(0)=-g_mR_L\frac{r_\pi}{R_S+r_b+r_\pi}=-(57.7)\frac{10.4}{15.7}=-38.2\quad(31.6\ \mathrm{dB}).
$$

由密勒近似求极点：$R=(R_S+r_b)\parallel r_\pi=3.51\ \mathrm{k\Omega}$，$C_t=C_\pi+C_\mu(1+g_mR_L)=23.4$ pF，因此

$$
f_{p,dm}=\frac{1}{2\pi RC_t}=1.93\ \mathrm{MHz}.
$$

此后增益以 −20 dB/十倍频下降：1 MHz 时约 30.6 dB，10 MHz 时 17 dB，20 MHz 时 11 dB。

### 第 3 步 — 共模增益

共模输入时，把尾电流阻抗分成两个 $2Z_T$。每一半都是发射极阻抗很大的共射级，其增益等于集电极负载除以发射极阻抗：

$$
A_{cm}\approx-\frac{R_L}{2Z_T}=-\frac{R_L}{2R_T}\left(1+sR_TC_T\right).
$$

低频时 $A_{cm}=-3\ \mathrm{k\Omega}/600\ \mathrm{k\Omega}=-0.005$（−46.0 dB）。因子 $1+sR_TC_T$ 对应一个零点，位于

$$
f_z=\frac{1}{2\pi R_TC_T}=\frac{1}{2\pi(300\ \mathrm{k\Omega})(2\ \mathrm{pF})}=265\ \mathrm{kHz},
$$

其上 $|A_{cm}|$ 以 +20 dB/十倍频上升，按此近似在 20 MHz 时约为 −8.5 dB。

### 第 4 步 — CMRR

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\frac{38.2}{0.005}=7640\ (77.7\ \mathrm{dB})
$$

这是低频值。265 kHz 以上 $|A_{cm}|$ 开始上升，CMRR 以 −20 dB/十倍频下降；约 1.9 MHz 以上 $|A_{dm}|$ 也开始下降，CMRR 以 −40 dB/十倍频下降。20 MHz 时约为 20 dB。

### 第 5 步 — SPICE 核对

两个线性混合 π 晶体管共用节点 $E$，$R_T\parallel C_T$ 接地。差模仿真在两个信号源上分别加 $\pm\tfrac12$ V；共模仿真在两个源上都加 1 V，并取两集电极电压的平均值。

```spice
* grsim-07-06 differential pair, linear hybrid-pi (DM run)
V1 s1 0 ac 0.5
V2 s2 0 ac -0.5
RS1 s1 b1 5k
RS2 s2 b2 5k
Rb1 b1 bi1 300
Rb2 b2 bi2 300
Rpi1 bi1 e 10.4k
Rpi2 bi2 e 10.4k
Cpi1 bi1 e 5.821p
Cpi2 bi2 e 5.821p
Cmu1 bi1 c1 0.3p
Cmu2 bi2 c2 0.3p
G1 c1 e bi1 e 19.2308m
G2 c2 e bi2 e 19.2308m
RL1 c1 0 3k
RL2 c2 0 3k
RT e 0 300k
CT e 0 2p
.ac dec 50 10k 20Meg
.end
```

![10 kHz 至 20 MHz 范围内差模增益、共模增益和 CMRR 幅值的仿真与手算结果](/q/grsim-07-06/solution-bode.zh.svg)

| $f$ | 10 kHz | 100 kHz | 1 MHz | 1.9 MHz | 5 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|---|---|
| $\lvert A_{dm}\rvert$ (dB) | 31.6 | 31.6 | 30.6 | 28.7 | 22.7 | 17.1 | 11.2 |
| $\lvert A_{cm}\rvert$ (dB) | −46.1 | −45.8 | −37.1 | −31.9 | −23.6 | −17.5 | −11.2 |
| CMRR (dB) | 77.7 | 77.4 | 67.7 | 60.5 | 46.3 | 34.7 | 22.5 |

差模曲线与手算一致：31.6 dB，−3 dB 点约在 1.92 MHz。−46 dB 的共模平台和 77.7 dB 的低频 CMRR 也一致。共模增益开始上升的频率比预测晚：其 +3 dB 点在 380 kHz 而不是 265 kHz，高频时比简单公式约低 3 dB。差别来自 $C_\mu$。共模时集电极摆动很小，因此从基极经 $C_\mu$ 注入 $R_L$ 的电流与尾电容电流符号相反，部分抵消了后者。等效尾电容约为 $C_T-2C_\mu=1.4$ pF，零点因而移到 $1/[2\pi R_T(1.4\ \mathrm{pF})]\approx380$ kHz。因此 CMRR 略高于手算估计，20 MHz 时约 22.5 dB。
