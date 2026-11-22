# 详细步骤 - grsim-09-21

这是标准的两级 CMOS 运放：带电流镜负载 $M_3$–$M_4$ 的 $p$ 沟道差分对 $M_1$–$M_2$ 驱动共源级 $M_6$，其负载为电流源 $M_7$。$C_c$ 与 $M_9$ 串联，后者是用来消除右半平面零点的线性区电阻。先把工艺数据换算为有效沟长和 $\lambda$；再求电流、跨导和输出电阻，由此得到增益、主极点、单位增益频率和压摆率。为仿真确定 $M_9$ 的尺寸，并与 ngspice 全面比较。

### 第 1 步 — 有效沟长与沟道长度调制

所有器件的 $L_{\text{drwn}}=8\ \mu$m，所以

$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=8-0.6-1=6.4\ \mu\mathrm{m},\qquad \lambda_n=\frac{0.2\ \mu\mathrm{m/V}}{6.4\ \mu\mathrm{m}}=0.031\ \mathrm{V^{-1}},\qquad \lambda_p=\frac{0.1}{6.4}=0.0156\ \mathrm{V^{-1}}.
$$

100/8 器件的 $(W/L)_{\text{eff}}=15.6$，50/8 器件为 7.8。

### 第 2 步 — 偏置电流

$M_8$ 流过 20 µA 参考电流。$M_5$ 和 $M_7$ 的尺寸和 $V_{SG}$ 都与参考管相同，所以 $I_{D5}=I_{D7}=20\ \mu$A。差分对平分 $M_5$ 的电流：$I_{D1}=I_{D2}=10\ \mu$A。$M_6$ 的 $W/L$ 是 $M_4$ 的两倍，平衡时 $V_{GS}$ 相同（$M_4$ 的漏极处于 $M_3$ 的栅极电压），所以它流过 $2I_{D4}=20\ \mu$A，正好等于 $M_7$ 提供的电流。所有器件都处于饱和区。

### 第 3 步 — 小信号参数与增益

由 $g_m=\sqrt{2k'(W/L)I_D}$ 和 $r_o=1/(\lambda I_D)$：

| 量 | 数值 |
|---|---|
| $g_{m1}=\sqrt{2(30.2\ \mu\mathrm{A/V^2})(15.6)(10\ \mu\mathrm{A})}$ | 97.1 µA/V |
| $g_{m6}=\sqrt{2(60.4\ \mu\mathrm{A/V^2})(15.6)(20\ \mu\mathrm{A})}$ | 194 µA/V |
| $r_{o2}$（p，10 µA）/ $r_{o4}$（n，10 µA） | 6.4 MΩ / 3.2 MΩ |
| $r_{o6}$（n，20 µA）/ $r_{o7}$（p，20 µA） | 1.6 MΩ / 3.2 MΩ |

带电流镜负载的第一级跨导为 $g_{m1}$，输出电阻 $R_1=r_{o2}\parallel r_{o4}=2.13\ \mathrm{M\Omega}$。第二级的 $R_2=r_{o6}\parallel r_{o7}=1.07\ \mathrm{M\Omega}$。因此

$$
a_0=(g_{m1}R_1)(g_{m6}R_2)=(207)(207)=4.3\times10^{4}\ (92.7\ \mathrm{dB}).
$$

### 第 4 步 — 主极点、单位增益频率与压摆率

$C_c$ 跨接在第二级两端而被密勒倍增，所以第一级输出节点上有主极点

$$
|p_1|\approx\frac{1}{g_{m6}R_2R_1C_c}=\frac{1}{(194\ \mu\mathrm{A/V})(1.07\ \mathrm{M\Omega})(2.13\ \mathrm{M\Omega})(5\ \mathrm{pF})}=452\ \mathrm{rad/s}\ (72\ \mathrm{Hz}).
$$

增益带宽积为

$$
\omega_u=a_0|p_1|=\frac{g_{m1}}{C_c}=\frac{97.1\ \mu\mathrm{A/V}}{5\ \mathrm{pF}}=1.94\times10^{7}\ \mathrm{rad/s},\qquad f_u=3.1\ \mathrm{MHz}.
$$

压摆时差分对把 $M_5$ 的电流全部切换到一侧，该电流给 $C_c$ 充电：

$$
SR=\frac{I_{D5}}{C_c}=\frac{20\ \mu\mathrm{A}}{5\ \mathrm{pF}}=4\ \mathrm{V/\mu s}.
$$

### 第 5 步 — 为消除零点确定 $M_9$ 的尺寸

补偿网络的零点位于 $1/[C_c(1/g_{m6}-R_z)]$；当 $R_z=1/g_{m6}=5.15\ \mathrm{k\Omega}$ 时零点移到无穷远。$M_9$ 工作在 $V_{DS}\approx0$（$C_c$ 中没有直流电流），栅极接 +5 V，源极位于 $M_6$ 的栅极，即比 −5 V 高 $V_{GS6}=0.7+\sqrt{2(20\ \mu\mathrm{A})/[(60.4\ \mu\mathrm{A/V^2})(15.6)]}=0.906$ V。所以 $V_{GS9}=9.09$ V，$V_{SB9}=0.906$ V。$N_A=10^{15}\ \mathrm{cm^{-3}}$ 时体效应系数为 $\gamma_n=\sqrt{2q\epsilon_sN_A}/C_{ox}=0.21\ \mathrm{V^{1/2}}$，$2\phi_f=0.58$ V，所以

$$
V_{t9}=0.7+0.21\left(\sqrt{0.58+0.906}-\sqrt{0.58}\right)=0.80\ \mathrm{V},
$$

$$
\left(\frac{W}{L}\right)_9=\frac{1}{R_zk_n'(V_{GS9}-V_{t9})}=\frac{1}{(5.15\ \mathrm{k\Omega})(60.4\ \mu\mathrm{A/V^2})(8.3\ \mathrm{V})}=0.39 ,
$$

例如 $W=4\ \mu$m、$L_{\text{eff}}=10.3\ \mu$m。

### 第 6 步 — 与 SPICE 比较

模型采用 level 1，参数为题给的 $k'$、$V_t$、第 1 步的 $\lambda$、$t_{ox}=40$ nm、交叠电容和结电容数据以及体效应（$\gamma_n=0.21$，$2\phi_f=0.58$ V；$N_D=10^{16}\ \mathrm{cm^{-3}}$ 时 $\gamma_p=0.67$，$2\phi_f=0.70$ V）。直接输入有效沟长。NMOS 衬底接 −5 V，PMOS 衬底接 +5 V。题目没有给出负载电容，因此不加负载电容。

```spice
* grsim-09-21 two-stage CMOS op amp (effective dimensions)
.model nm nmos level=1 kp=60.4u vto=0.7 lambda=0.03125 gamma=0.21 phi=0.58 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.08m cjsw=0.5n mj=0.5 mjsw=0.5 pb=0.65
.model pm pmos level=1 kp=30.2u vto=-0.7 lambda=0.015625 gamma=0.67 phi=0.70 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.20m cjsw=1.5n mj=0.5 mjsw=0.5 pb=0.65
VDD vdd 0 5
VSS vss 0 -5
IB g8 vss 20u
M8 g8 g8 vdd vdd pm w=100u l=6.4u
M5 s g8 vdd vdd pm w=100u l=6.4u
M7 o g8 vdd vdd pm w=100u l=6.4u
M1 d1 inp s vdd pm w=100u l=6.4u
M2 d2 inn s vdd pm w=100u l=6.4u
M3 d1 d1 vss vss nm w=50u l=6.4u
M4 d2 d1 vss vss nm w=50u l=6.4u
M6 o d2 vss vss nm w=100u l=6.4u
M9 d2 vdd z vss nm w=4u l=10.3u
CC z o 5p
* open loop: Lf o inp 1e9 / Cf inp 0 1 / Vn inn 0 ac 1
* slew test: Vfb inp o 0 / Vn inn 0 pulse(-2 2 1u 1n 1n 5u 10u)
.end
```

升高 $M_1$ 的栅极会减小其电流，于是 $M_4$ 吸收的电流减小而 $M_2$ 提供的电流增大。$M_6$ 的栅极升高，输出下降。因此相对于 $v_o$，$M_1$ 的栅极是反相输入端。开环仿真时，输出经 1 GH 电感接回该端（交流上经 1 F 电容接地），交流信号加在 $M_2$ 的栅极；压摆测试的跟随器采用相同的接法。

| 量 | 手算 | ngspice |
|---|---|---|
| $I_{D5}$ / $I_{D1}=I_{D2}$ / $I_{D6}=I_{D7}$ | 20 / 10 / 20 µA | 20.7 / 10.36 / 21.2 µA |
| $g_{m1}$ / $g_{m6}$ | 97.1 / 194 µA/V | 103 / 215 µA/V |
| $R_{M9}$ 与 $1/g_{m6}$ | 5.15 kΩ | 5.13 kΩ 对 4.65 kΩ |
| 直流增益 | $4.3\times10^{4}$（92.7 dB） | $5.43\times10^{4}$（94.7 dB） |
| 主极点 | 72 Hz | 59.5 Hz |
| 单位增益频率 | 3.1 MHz | 3.24 MHz |
| 相位裕度 | — | 86° |
| 上升 / 下降压摆率 | 4 V/µs | 4.23 / 4.19 V/µs |

仿真电流高出几个百分点，因为镜像输出管 $M_5$、$M_6$、$M_7$ 的 $|V_{DS}|$ 大于二极管连接的器件，而 level-1 模型把电流乘以 $1+\lambda V_{DS}$。这使 $g_{m1}$ 和 $g_{m6}$ 增大，所以 $f_u$ 和压摆率比手算值高 3–6 %。该模型的输出电导为 $\lambda I_D/(1+\lambda V_{DS})$，也低于 $\lambda I_D$；用仿真值得 $g_{m1}(r_{o2}\parallel r_{o4})=223$、$g_{m6}(r_{o6}\parallel r_{o7})=245$，重现了 94.7 dB 的增益。86° 的相位裕度表明 $M_9$ 消除了右半平面零点：其 5.13 kΩ 电阻略大于仿真的 $1/g_{m6}$，使零点移到左半平面。两个方向的压摆率都与 $I_{D5}/C_c$ 相符。
