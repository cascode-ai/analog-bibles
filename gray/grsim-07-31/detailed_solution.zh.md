# 详细步骤 - grsim-07-31

先求各晶体管的偏置，建立混合 π 元件（包括由 $f_T$ 求得的 $\tau_F$ 以及与偏置有关的结电容），再计算经过跟随器和差分对的增益。然后对差模半边电路的零值时间常数求和以估算带宽，并与整个线性电路的 ngspice 交流分析（有无基区电阻两种情况）比较。

### 第 1 步 — 偏置与小信号元件

$v_i=0$ 时 $Q_1$、$Q_4$ 的基极为 0 V，发射极（即 $Q_2$、$Q_3$ 的基极）为 −0.7 V，尾节点为 −1.4 V，$Q_2$、$Q_3$ 的集电极为 $6-0.5\ \mathrm{mA}\times5\ \mathrm{k\Omega}=3.5$ V。

| | $Q_1$、$Q_4$（10 µA） | $Q_2$、$Q_3$（0.5 mA） |
|---|---|---|
| $g_m=I_C/V_T$ | 0.385 mA/V | 19.2 mA/V |
| $r_\pi=\beta/g_m$ | 520 kΩ | 10.4 kΩ |

$\tau_F$ 由 2 mA 时的 $f_T$ 求得，此时 $g_m=76.9$ mA/V，$C_\pi+C_\mu=g_m/\omega_T=24.48$ pF：

$$
\tau_F=\frac{24.48-0.5-4\ \mathrm{pF}}{76.9\ \mathrm{mA/V}}=260\ \mathrm{ps},\qquad C_\pi=\tau_Fg_m+C_{je}:\ C_{\pi1}=4.10\ \mathrm{pF},\ C_{\pi2}=9.00\ \mathrm{pF}.
$$

结电容按 $C=C_0/\sqrt{1+V_R/0.55}$ 计算：

$$
C_{\mu1}\ (V_{CB}=6\ \mathrm V)=0.145\ \mathrm{pF},\quad C_{\mu2}\ (V_{CB}=4.2\ \mathrm V)=0.170\ \mathrm{pF},\quad C_{cs2}\ (V_{CS}=9.5\ \mathrm V)=0.468\ \mathrm{pF}.
$$

$C_{cs1}$ 处于交流地（集电极接 +6 V）。

### 第 2 步 — (a) 低频增益

$v_i$ 驱动 $Q_1$；另一侧经其自身的跟随器接地。在差模半边电路中 $Q_2$ 的发射极为交流地，因此 $Q_1$ 的发射极负载为 $r_{\pi2}$，$Q_2$ 的基极得到半边电路输入的 $(\beta+1)r_{\pi2}/[R_S+r_{\pi1}+(\beta+1)r_{\pi2}]$ 部分。单端输入 $v_i$ 时差分对的差分输出为该值乘以 $-g_{m2}R_C$，因此

$$
\frac{v_o}{v_i}=-g_{m2}R_C\,\frac{(\beta+1)r_{\pi2}}{R_S+r_{\pi1}+(\beta+1)r_{\pi2}}=-(96.2)\frac{2.09\ \mathrm{M\Omega}}{2.62\ \mathrm{M\Omega}}=-96.2\times0.798=-76.7 .
$$

10 µA 的跟随器损失约 20 % 的信号，因为其 $r_{\pi1}=520\ \mathrm{k\Omega}$ 与 $(\beta+1)r_{\pi2}$ 相当。

### 第 3 步 — (b) 差模半边电路的零值时间常数

对每个电容，令其余电容为零，求它看到的电阻：

- $C_{\pi1}$：$r_{\pi1}\parallel\dfrac{R_S+r_{\pi2}}{1+g_{m1}r_{\pi2}}=520\ \mathrm{k\Omega}\parallel\dfrac{20.4\ \mathrm{k\Omega}}{5.0}=4.05\ \mathrm{k\Omega}$。
- $C_{\mu1}$（基极对地）：$R_S\parallel[r_{\pi1}+(\beta+1)r_{\pi2}]=9.96\ \mathrm{k\Omega}$。
- $C_{\pi2}$：$r_{\pi2}$ 与跟随器输出电阻 $(R_S+r_{\pi1})/(\beta+1)=2.64\ \mathrm{k\Omega}$ 并联，即 $R_b=2.10\ \mathrm{k\Omega}$。
- $C_{\mu2}$：$R_b+R_C+g_{m2}R_CR_b=2.10+5+201.9=209\ \mathrm{k\Omega}$。
- $C_{cs2}$：$R_C=5\ \mathrm{k\Omega}$。

| 电容 | $C$ (pF) | $R$ (kΩ) | $RC$ (ns) |
|---|---|---|---|
| $C_{\pi1}$ | 4.10 | 4.05 | 16.6 |
| $C_{\mu1}$ | 0.145 | 9.96 | 1.4 |
| $C_{\pi2}$ | 9.00 | 2.10 | 18.9 |
| $C_{\mu2}$ | 0.170 | 209 | 35.6 |
| $C_{cs2}$ | 0.468 | 5 | 2.3 |
| 总和 $T_0$ | | | 74.9 |

$$
f_{-3\text{dB}}\approx\frac{1}{2\pi T_0}=\frac{1}{2\pi(74.9\ \mathrm{ns})}=2.1\ \mathrm{MHz}.
$$

经密勒放大的 $C_{\mu2}$ 是最大的一项，其次是 $C_{\pi2}$ 和 $C_{\pi1}$。

### 第 4 步 — (c) SPICE 增益与带宽

用第 1 步的线性混合 π 元件仿真整个电路（两个跟随器和差分对的两个晶体管）；偏置电流源在交流下开路，$v_o=v_{c2}-v_{c3}$。

```spice
* grsim-07-31 linear model of the full stage (rb = 0; 200 for part d)
.subckt q c b e params: gm=1 rpi=1 cpi=1p cmu=1p rbb=1m
Rbb b  bi {rbb}
Rpi bi e  {rpi}
Cpi bi e  {cpi}
Cmu bi c  {cmu}
G   c  e  bi e {gm}
.ends
Vi  s 0 ac 1
RS1 s b1 10k
X1 0  b1 e1 q params: gm=0.384615m rpi=520k  cpi=4.1p cmu=0.1449p
X2 c2 e1 t  q params: gm=19.2308m  rpi=10.4k cpi=9.0p cmu=0.1701p
X3 c3 e4 t  q params: gm=19.2308m  rpi=10.4k cpi=9.0p cmu=0.1701p
X4 0  b4 e4 q params: gm=0.384615m rpi=520k  cpi=4.1p cmu=0.1449p
RS4 b4 0 10k
RC2 c2 0 5k
RC3 c3 0 5k
Ccs2 c2 0 0.4679p
Ccs3 c3 0 0.4679p
.ac dec 200 1k 1G
.end
```

| 量 | 手算 | ngspice，$r_b=0$ |
|---|---|---|
| 低频增益 | −76.7 | −76.7（37.70 dB） |
| −3 dB 带宽 | 2.1 MHz（零值法） | 3.10 MHz |
| 100 MHz 处 $\lvert v_o/v_i\rvert$ | — | 0.467（−6.6 dB） |
| 100 MHz 处相位 | — | +48.6°，比低频的 180° 滞后 131° |

零值估算约偏保守 1.5 倍。它假设只有一个主极点，而这里 $C_{\pi1}$ 绕过 $r_{\pi1}$ 把信号前馈（在数十兆赫处形成一个左半平面零点），跟随器与密勒节点相互作用又形成一对复极点。两者都使带宽超过 $1/(2\pi T_0)$。

### 第 5 步 — (d) $r_b=200\ \Omega$ 的影响

在每个基极串联 200 Ω：

| 量 | $r_b=0$ | $r_b=200\ \Omega$ |
|---|---|---|
| 增益（手算 / SPICE） | −76.7 / −76.7 | −75.6 / −75.5（37.56 dB） |
| 零值估算 | 2.12 MHz | 2.03 MHz |
| 仿真 −3 dB 带宽 | 3.10 MHz | 2.94 MHz |
| 100 MHz 处：幅值、相位滞后 | −6.6 dB，131° | −7.0 dB，132° |

基区电阻只使增益和带宽减小约 5 %。它叠加在本来就很大的电阻上：与 10 kΩ 源电阻串联的 200 Ω，以及在 $C_{\pi2}$ 和密勒电容 $C_{\mu2}$ 看到的 2.1 kΩ 上增加的 200 Ω。
