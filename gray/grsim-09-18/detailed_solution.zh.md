# 详细步骤 - grsim-09-18

在单极点两级运放中，单位增益频率为 $\omega_u=G_{m1}/C$，压摆率为 $SR=I_{EE}/C$，所以 $SR=\omega_u\,(I_{EE}/G_{m1})$。发射极负反馈降低 $G_{m1}$ 而不改变 $I_{EE}$；保持 $\omega_u$ 不变就需要按比例减小 $C$，压摆率则按同一倍数提高。下面计算负反馈后的跨导、新电容和新压摆率，并用 ngspice 检验 $f_u$ 和压摆率。

### 第 1 步 — 原设计

每个输入管流过 $I_{EE}/2=10\ \mu$A，所以 $g_{m1}=10\ \mu\mathrm{A}/26\ \mathrm{mV}=0.385$ mA/V。电流镜负载下第一级跨导为 $G_{m1}=g_{m1}$，于是

$$
\omega_u=\frac{g_{m1}}{C}=\frac{0.385\ \mathrm{mA/V}}{10\ \mathrm{pF}}=3.85\times10^{7}\ \mathrm{rad/s}\ (6.1\ \mathrm{MHz}),\qquad SR=\frac{I_{EE}}{C}=\frac{20\ \mu\mathrm{A}}{10\ \mathrm{pF}}=2\ \mathrm{V/\mu s}.
$$

### 第 2 步 — 加入 10 kΩ 发射极电阻后的跨导

每个发射极中的电阻 $R_E$ 与本征发射极电阻 $1/g_{m1}$ 相加（忽略基极电流）。对差分信号，公共发射极节点为交流地，所以每一半的电流为 $i_c=(v_{id}/2)/(1/g_{m1}+R_E)$：

$$
G_{m1}'=\frac{g_{m1}}{1+g_{m1}R_E}=\frac{0.385\ \mathrm{mA/V}}{1+(0.385\ \mathrm{mA/V})(10\ \mathrm{k\Omega})}=\frac{0.385\ \mathrm{mA/V}}{4.85}=0.0794\ \mathrm{mA/V}.
$$

### 第 3 步 — 新电容与压摆率

要保持 $\omega_u$ 不变，电容必须与跨导同比例变化：

$$
C'=\frac{G_{m1}'}{\omega_u}=\frac{C}{1+g_{m1}R_E}=\frac{10\ \mathrm{pF}}{4.85}=2.06\ \mathrm{pF}.
$$

可用于给电容充电的最大电流仍是整个尾电流，因为无论 $R_E$ 如何，大输入都会把尾电流全部切换到一侧：

$$
SR'=\frac{I_{EE}}{C'}=\frac{20\ \mu\mathrm{A}}{2.06\ \mathrm{pF}}=9.7\ \mathrm{V/\mu s},
$$

提高了 $1+g_{m1}R_E=4.85$ 倍。输入级的线性范围也随之变宽：差分对现在需要约 $\pm(I_{EE}R_E+4V_T)\approx\pm0.3$ V 才能完全切换，而不是约 $\pm4V_T$，因为整个尾电流必须在一个发射极电阻上产生 $I_{EE}R_E=0.2$ V 的压降。换一种说法，$SR/\omega_u=I_{EE}/G'_{m1}$ 从 52 mV 增大到 0.25 V。

### 第 4 步 — SPICE 检验

网表是在原放大器的 $Q_1$ 和 $Q_2$ 发射极中加入 10 kΩ 电阻，并取 $C=2.06$ pF。构成跟随器时输出接回 $Q_1$ 的基极（相对 $V_o$ 的反相输入端），在 $Q_2$ 的基极加 −5 V 到 +5 V 的阶跃。开环响应采用与前面相同的 1 GH/1 F 接法。

```spice
* grsim-09-18 op amp with emitter degeneration
.options temp=28.57 tnom=28.57
.param CC=2.0619p
.model qn npn is=1e-15 bf=100 vaf=130
.model qp pnp is=1e-15 bf=100 vaf=130
VCC vcc 0 15
VEE vee 0 -15
IEE vcc e 20u
RE1 e e1 10k
RE2 e e2 10k
Q1 c1 b1 e1 qp
Q2 x b2 e2 qp
Q3 c1 c1 vee qn
Q4 x c1 vee qn
Q5 vcc x e5 qn
R5 e5 vee 50k
Q6 o e5 vee qn
I6 vcc o 300u
CC x o {CC}
Vfb b1 o 0
Vin b2 0 pulse(-5 5 0 1n 1n 100u 200u)
.tran 2n 20u 0 2n
.end
```

| 配置 | $f_u$（ngspice） | 上升 / 下降压摆率（ngspice） |
|---|---|---|
| 原电路（$R_E=0$，$C=10$ pF） | 6.02 MHz | 1.97 / 1.97 V/µs |
| $R_E=10$ kΩ，$C=10$ pF | 1.24 MHz | 1.97 / 1.97 V/µs |
| $R_E=10$ kΩ，$C=2.06$ pF | 6.02 MHz | 9.54 / 9.54 V/µs |

![−5 V 到 +5 V 阶跃下跟随器输出随时间的变化：原设计（虚线，斜坡约 5 µs）与采用 2.06 pF 的负反馈设计（实线，斜坡约 1 µs）](/q/grsim-09-18/solution-step.zh.svg)

各行逐一证实了上述论证：

- 只加负反馈（第二行）使 $f_u$ 恰好降低 4.85 倍（6.02 → 1.24 MHz），压摆率不变。
- 把 $C$ 减小到 2.06 pF 后，$f_u$ 恢复到 6.02 MHz，压摆率提高到 9.54 V/µs，是原来 1.97 V/µs 的 $4.85$ 倍，接近手算值 9.7 V/µs。两列结果都略低于手算值，是因为基极电流占用了 20 µA 尾电流的一部分。
- 在跟随器中，输出现在于 1.11 µs 时进入 +5 V 的 10 mV 以内，而原来需要 5.1 µs。斜坡之后线性稳定过程的时间常数不变，仍为 $1/\omega_u\approx26$ ns。
