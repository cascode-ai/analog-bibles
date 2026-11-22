# 详细步骤 - grsim-08-20

偏置网络是一个多输出电流镜：$Q_8$ 设定 $Q_7$、$Q_9$、$Q_{10}$、$Q_{11}$ 的基极电压，它们的电流由各自的发射极电阻决定。对信号而言电路是平衡的，可用半电路分析：输入对是带发射极负反馈的跨导级，其集电极电流驱动一个电压并联反馈对（$Q_4$ 共射级与 $Q_5$ 跟随器，经 7 kΩ 电阻闭环；另一侧为 $Q_3$ 与 $Q_6$）。总增益等于输入级跨导乘以输出级的闭环跨阻。然后用 ngspice 核对偏置和小信号数值。

### 第 1 步 — (a) 参考电流

10 kΩ 电阻向二极管连接的 $Q_8$ 供电，其发射极经 1.4 kΩ 接 −6 V。忽略基极电流，

$$
I_{C8}=\frac{6-(-6)-0.7\ \mathrm{V}}{10\ \mathrm{k\Omega}+1.4\ \mathrm{k\Omega}}=0.991\ \mathrm{mA},
$$

公共基极节点比 −6 V 高 $0.7\ \mathrm{V}+(1.4\ \mathrm{k\Omega})(0.991\ \mathrm{mA})=2.088$ V。

### 第 2 步 — (a) 镜像输出与信号通路电流

面积相等且 $V_{BE}$ 相等时，每个镜像管的发射极电阻上都有同样的 1.388 V，电流与电阻成反比。一阶修正计入较大电流下 $V_{BE}$ 升高 $V_T\ln(I_C/I_{C8})$：

| 器件 | 发射极电阻 | $V_{BE}$ 相等 | 计入 $V_T\ln$ 修正 |
|---|---|---|---|
| $Q_7$、$Q_9$ | 300 Ω | 4.63 mA | 4.49 mA |
| $Q_{10}$、$Q_{11}$ | 400 Ω | 3.47 mA | 3.39 mA |

例如 $Q_7$ 的 $V_{BE}$ 高出 $(26\ \mathrm{mV})\ln(4.6)=40$ mV，剩下 $(1.388-0.040)\ \mathrm{V}/300\ \Omega=4.49$ mA。

- **$Q_1$、$Q_2$** 平分 $Q_7$ 的电流：$I_{C1}=I_{C2}=2.25$ mA（不修正时为 2.3 mA）。**$Q_3$、$Q_4$** 同样平分 $Q_9$ 的电流：2.25 mA。
- **输出跟随器。** $Q_3$、$Q_4$ 的集电极位于 $6-(1.1\ \mathrm{k\Omega})(2.25\ \mathrm{mA})=3.53$ V，所以输出端（$Q_5$、$Q_6$ 的发射极）约为 2.83 V。
- **输入级集电极。** 节点 $C_1$（$Q_4$ 的基极）由 2.4 kΩ 电阻和来自输出端的 7 kΩ 电阻供电，并提供 $I_{C1}$：
$$
\frac{6-V_{C1}}{2.4\ \mathrm{k\Omega}}+\frac{2.83-V_{C1}}{7\ \mathrm{k\Omega}}=I_{C1}\ \Rightarrow\ V_{C1}\approx1.1\ \mathrm{V},
$$
因此每个 7 kΩ 电阻从输出端向输入级集电极输送约 0.25 mA。
- **$Q_5$、$Q_6$** 同时为电流源和这一反馈电流供电（由对称性 $R_L$ 中无直流电流）：$I_{C5}=I_{C6}=3.39+0.25=3.64$ mA。

所有晶体管都处于放大区：例如 $Q_1$ 的集电极（约 1.1 V）高于其基极（0 V），$Q_3$、$Q_4$ 的发射极（约 0.4 V）高于 $Q_9$ 的发射极（−4.6 V）。

### 第 3 步 — (b) 小信号参数与输入级

由 $g_m=I_C/V_T$、$r_\pi=\beta/g_m$（$\beta=100$）：$g_{m1}=g_{m4}=86.3$ mS，$r_{\pi1}=r_{\pi4}=1.16\ \mathrm{k\Omega}$；$g_{m5}=140$ mS，$r_{\pi5}=714\ \Omega$。

差分输入时，两个 640 Ω 电阻的连接点以及 $Q_3$、$Q_4$ 的发射极都是交流地。每个输入管都是带 640 Ω 发射极负反馈、由 $v_i/2$ 驱动的共射级：

$$
i_{c1}=\frac{\beta\,(v_i/2)}{r_{\pi1}+(\beta+1)(640\ \Omega)}=\frac{v_i/2}{658\ \Omega},\qquad R_{\text{in}}=2\left[r_{\pi1}+(\beta+1)(640\ \Omega)\right]=132\ \mathrm{k\Omega}.
$$

$R_{\text{in}}$ 为差分输入电阻。

### 第 4 步 — (b) 输出级：电压并联反馈半电路

输出级的半电路（输出端接 $R_L/2=1\ \mathrm{k\Omega}$ 到地）有三个节点：$X$（$Q_1$ 的集电极、$Q_4$ 的基极），接 2.4 kΩ 和 $r_{\pi4}$ 到地；$Y$（$Q_4$ 的集电极、$Q_5$ 的基极），接 1.1 kΩ 到地；输出端 $O$（$Q_5$ 的发射极），接 1 kΩ 到地。7 kΩ 电阻 $R_F$ 把 $O$ 接回 $X$。电流 $-i_{c1}$ 是节点 $X$ 的输入。

反馈电阻检测输出电压并送回电流，属于电压并联反馈（shunt-shunt feedback），$f=-1/R_F$。其负载效应是在 $X$ 和 $O$ 处各接一个对地的 $R_F$。于是基本放大器为：

- **节点 $X$：** $R_X=2.4\ \mathrm{k\Omega}\parallel7\ \mathrm{k\Omega}\parallel r_{\pi4}=0.703\ \mathrm{k\Omega}$。
- **$Q_4$：** 集电极电流 $g_{m4}v_x$ 流入 $R_Y=1.1\ \mathrm{k\Omega}\parallel R_{i5}$，其中 $R_{i5}=r_{\pi5}+(\beta+1)(1\ \mathrm{k\Omega}\parallel7\ \mathrm{k\Omega})=89.1\ \mathrm{k\Omega}$，所以 $R_Y=1.087\ \mathrm{k\Omega}$。
- **$Q_5$ 跟随器：** 增益为 $(\beta+1)(875\ \Omega)/R_{i5}=0.992$。

$$
a=\frac{v_o}{i_x}=-R_Xg_{m4}R_Y(0.992)=-65.4\ \mathrm{k\Omega},\qquad T=af=\frac{65.4\ \mathrm{k\Omega}}{7\ \mathrm{k\Omega}}=9.34,\qquad A_t=\frac{a}{1+T}=-6.32\ \mathrm{k\Omega}.
$$

因此输出级的环路增益约为 9.3；对半电路做精确节点求解得到相同的结果（$Q_4$ 的回归比 $T=9.35$，$A_t=-6.32\ \mathrm{k\Omega}$）。

### 第 5 步 — (b) 总增益与输出阻抗

由于 $X$ 接收的是 $-i_{c1}$，半边输出为 $v_o/2=(6.32\ \mathrm{k\Omega})\,i_{c1}$，于是

$$
\frac{v_o}{v_i}=\frac{6.32\ \mathrm{k\Omega}}{658\ \Omega}=9.61 .
$$

若环路增益为无穷大，跨阻为 $R_F$，增益为 $7\ \mathrm{k\Omega}/658\ \Omega=10.6$；9.3 的环路增益使增益损失约 9 %。

对输出阻抗，每一侧基本放大器的输出电阻是跟随器的 $(1.1\ \mathrm{k\Omega}+r_{\pi5})/(\beta+1)=17.9\ \Omega$ 与 7 kΩ 负载并联，反馈再把它除以 $1+T$。不含 $R_L$ 时（此时 $T=9.51$），

$$
R_{\text{out}}=2\cdot\frac{17.9\ \Omega}{1+9.51}=3.41\ \Omega.
$$

这是差分输出电阻。

### 第 6 步 — (c) 与 SPICE 比较

网表取 $I_S=2\times10^{-15}$ A（使 1 mA 附近 $V_{BE}\approx0.7$ V），$\beta_F=100$，$r_b=0$，$V_A=\infty$，温度设为 $V_T=26$ mV 对应的值，输入为零共模的平衡输入。

```spice
* grsim-08-20 733 wideband amplifier
.options temp=28.57 tnom=28.57
.model qn npn is=2e-15 bf=100
VCC vcc 0 6
VEE vee 0 -6
RC1 vcc c1 2.4k
RC2 vcc c2 2.4k
Q1 c1 inp e1 qn
Q2 c2 inn e2 qn
RE1 e1 t1 640
RE2 e2 t1 640
Q7 t1 vb ee7 qn
R7 ee7 vee 300
R10k vcc vb 10k
Q8 vb vb ee8 qn
R8 ee8 vee 1.4k
RC3 vcc c3 1.1k
RC4 vcc c4 1.1k
Q3 c3 c2 t2 qn
Q4 c4 c1 t2 qn
Q9 t2 vb ee9 qn
R9 ee9 vee 300
Q5 vcc c4 op qn
Q6 vcc c3 on qn
Q10 op vb ee10 qn
R10 ee10 vee 400
Q11 on vb ee11 qn
R11 ee11 vee 400
RF1 c1 op 7k
RF2 c2 on 7k
RL op on 2k
Vp inp 0 dc 0 ac 0.5
En inn 0 inp 0 -1
.op
.ac lin 1 1k 1k
.end
```

1 V 差分输入时 $R_{\text{in}}=1/|i(V_p)|$；求 $R_{\text{out}}$ 时去掉 $R_L$，输入接地，以 1 A 交流电流流入一个输出端、从另一个输出端流出。

| 量 | 手算（$\beta\to\infty$ 偏置） | ngspice，$\beta_F=10^4$ | ngspice，$\beta_F=100$ |
|---|---|---|---|
| $I_{C8}$ | 0.991 mA | 0.990 mA | 0.863 mA |
| $I_{C7}=I_{C9}$ | 4.49 mA | 4.49 mA | 3.90 mA |
| $I_{C10}=I_{C11}$ | 3.39 mA | 3.38 mA | 2.94 mA |
| $I_{C1}$ 至 $I_{C4}$ | 2.25 mA | 2.24 mA | 1.93 mA |
| $I_{C5}=I_{C6}$ | 3.64 mA | 3.62 mA | 3.10 mA |

基极电流可忽略时，偏置与手算值一致。$\beta=100$ 时每个电流都低约 13–15 %，因为电流镜的基极电流（约 14.5 mA 集电极电流除以 $\beta$，即 0.15 mA）取自 0.99 mA 的参考电流。手算中计入它们，$I_{10k}=I_{E8}(100/101+17.3/101)$，得 $I_{C8}=0.86$ mA，与仿真一致。

| 小信号量 | 手算 | ngspice（$\beta_F=100$） |
|---|---|---|
| $v_o/v_i$（$R_L=2$ kΩ） | 9.61 | 9.52 |
| $R_{\text{in}}$（差分） | 132 kΩ | 132 kΩ |
| $R_{\text{out}}$（差分） | 3.41 Ω | 3.85 Ω |

用仿真的偏置电流重新计算手算公式，恰好得到仿真的增益（9.52）、输出级环路增益 8.8 和 $R_{\text{out}}=3.85\ \Omega$。增益和输入电阻几乎不依赖于偏置，因为它们主要由 640 Ω 和 7 kΩ 电阻决定；输出电阻与跟随器的 $1/g_m$ 成正比，因此在仿真的较低偏置下升高。
