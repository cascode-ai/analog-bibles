# 详细步骤 - grsim-04-12

pnp 电流镜 $Q_3$–$Q_4$ 把 $Q_1$ 的信号电流复制到输出端，与 $Q_2$ 的电流相加，因此完整的差分跨导 $g_m$ 驱动输出节点。输出电阻为 $r_{o2}\parallel r_{o4}$。然后仿真增益和输出电阻、大信号传输曲线，以及尾电阻为 1 MΩ 时的共模抑制比（CMRR）。

### 第 1 步 — 小信号参数

每侧流过尾电流的一半，$I_C=50\ \mu$A（忽略基极电流）：

$$
g_m=\frac{I_C}{V_T}=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\qquad
r_{o2}=\frac{130\ \mathrm V}{50\ \mu\mathrm A}=2.6\ \mathrm{M\Omega},\qquad
r_{o4}=\frac{50\ \mathrm V}{50\ \mu\mathrm A}=1\ \mathrm{M\Omega}.
$$

### 第 2 步 — 输出电阻与增益

$v_i$ 加在 $Q_1$ 上、$Q_2$ 的基极接地时，发射极节点变化 $v_i/2$，因此 $Q_1$ 的电流变化 $+g_mv_i/2$，$Q_2$ 变化 $-g_mv_i/2$。电流镜在 $Q_4$ 中复制 $Q_1$ 的增量，把电流推入输出，同时 $Q_2$ 从输出吸取的电流减少。短路输出电流为 $g_mv_i$，输出节点看到

$$
R_o=r_{o2}\parallel r_{o4}=2.6\ \mathrm{M\Omega}\parallel1\ \mathrm{M\Omega}=0.72\ \mathrm{M\Omega},
\qquad
\frac{v_o}{v_i}=g_mR_o=(1.92\ \mathrm{mA/V})(0.72\ \mathrm{M\Omega})=+1.39\times10^{3}.
$$

pnp 电流镜的电流增益为 $1/(1+2/\beta_{F,pnp})=0.96$，它只减小经过电流镜的那一半信号：$g_mR_o(1+0.96)/2=1.36\times10^{3}$。

### 第 3 步 — 大信号传输特性（预期）

- 系统失调：电流镜只提供 $I_{C1}/(1+2/\beta_{F,pnp})$，因此只有当 $Q_1$ 比 $Q_2$ 多流过 4% 的电流时输出才处于有源范围，即 $V_I\approx V_T\ln(1+2/\beta_{F,pnp})=+1.0$ mV。此时 $V_O\approx V_{SUP}-|V_{BE}|\approx1.8$ V。
- 宽度：增益约 1400，约 3 V 的完整摆幅只需约 2 mV 的输入。
- 上限：$V_I$ 增大时输出上升，直到 $Q_4$ 饱和，约为 $V_{SUP}-V_{CE(\mathrm{sat})}\approx2.4$ V。
- 下限：$V_I$ 减小时输出下降，直到 $Q_2$ 饱和，即比约 $-0.6$ V 的发射极节点高一个 $V_{CE(\mathrm{sat})}$，约 $-0.5$ V。

### 第 4 步 — $r_{tail}=1$ MΩ 时的 CMRR（手算）

共模输入使尾电流变化 $v_{ic}/r_{tail}$，即每侧 $v_{ic}/(2r_{tail})$。差分对平衡时，有两个不理想因素把它转换为输出：电流镜的基极电流误差（$Q_4$ 只提供 $Q_1$ 电流变化的 $1/(1+2/\beta)$），以及电流镜看到的输入管有限输出电阻。标准结果为

$$
\mathrm{CMRR}\approx\frac{1+2g_mr_{tail}}{\dfrac1{1+g_{m(mir)}r_{o(dp)}}+\dfrac1{1+g_{m(mir)}r_{\pi(mir)}/2}}
=\frac{1+2(1.92\ \mathrm{mA/V})(1\ \mathrm{M\Omega})}{\dfrac1{1+5000}+\dfrac1{1+25}}
=\frac{3847}{0.0002+0.0385}=1.0\times10^{5},
$$

约为 100 dB。pnp 基极电流项起主导作用：$|A_{cm}|\approx R_o/(\beta_{F,pnp}r_{tail})=0.0144$。

### 第 5 步 — SPICE 设置

```spice
* grsim-04-12 bipolar pair with pnp mirror load
VP   vp 0 2.5
VN   vn 0 -2.5
VCM  c 0 0
VI   b1 c 0.957m
Q1   d1 b1 e npn
Q2   out c e npn
Q3   d1 d1 vp pnp
Q4   out d1 vp pnp
IT   e vn 100u
RT   e vn 1e15
.model npn npn is=5e-15 bf=200 vaf=130
.model pnp pnp is=2e-15 bf=50 vaf=50
.control
op
tf v(out) VI
print all
dc VI -3m 5m 1u
wrdata tr.txt v(out)
.endc
.end
```

$V_I=0.957$ mV 由直流扫描得到，即使 $V_O=1.8$ V 的输入。计算 CMRR 时把 $R_T$ 设为 1 MΩ，并用 `tf v(out) VCM` 求共模增益。

### 第 6 步 — 结果：增益、输出电阻与传输曲线

| 量 | 手算 | ngspice |
|---|---|---|
| $v_o/v_i$ | $1.36\times10^{3}$ 至 $1.39\times10^{3}$ | $1.40\times10^{3}$ |
| $R_o$ | 0.72 MΩ | 0.74 MΩ |
| 使 $V_O=1.8$ V 的 $V_I$ | ≈ +1.0 mV | +0.96 mV |
| 输出极限 | ≈ 2.4 V / ≈ −0.5 V | 2.42 V / −0.52 V |

![有源负载差分对的 ngspice VO–VI 传输曲线：在约 +1 mV 处有毫伏量级宽的转变区，两端分别受 Q4 和 Q2 饱和限制](/q/grsim-04-12/solution-transfer.zh.svg)

仿真的 $R_o$ 高 3%，因为 SPICE 的 $r_o=(V_A+V_{CE})/I_C$ 大于 $V_A/I_C$。输出在 $V_I=-0.31$ mV 处穿过 0 V，在 $+1.10$ mV 处达到 2 V：转变区约 2 mV 宽，中心位于系统失调处。

### 第 7 步 — 结果：CMRR

仿真得到的共模增益取决于差分对的偏置方式，这一点很有启发性：
- 输入平衡（$V_I=0$，$I_{C1}=I_{C2}$），并用一个向输出节点注入 1.84 μA 的修调电流源（吸收电流镜的基极电流误差）把输出保持在 1.8 V 时，ngspice 给出 $A_{dm}=1.42\times10^{3}$、$A_{cm}=-1.34\times10^{-2}$，故 CMRR $=1.06\times10^{5}$（100.5 dB），与第 4 步一致。
- 若改为在输入端施加 +0.96 mV 失调来使输出居中，则 $I_{C1}/I_{C2}=1+2/\beta_{F,pnp}$。尾电流的共模变化按同一比例分配，$Q_1$ 多出的份额恰好补偿电流镜的基极电流损失。β 误差项被抵消，$|A_{cm}|$ 降到 $8.6\times10^{-5}$，CMRR 升到约 $1.6\times10^{7}$。这种抵消依赖于失调恰好等于系统误差；存在普通器件失配时，约 $10^{5}$ 的一阶结果才有意义。
