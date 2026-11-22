# 详细步骤 - grsim-07-43

电路中只有 $C_p$（$M_1$ 的漏极）和 $C_L$（输出端），因此恰有两个极点。零值法把两个电容都开路并对 $RC$ 乘积求和，估计低频极点；短路法把其余电容短路，对各时间常数的倒数求和，估计高频极点。最后与 ngspice 对小信号电路做极零点分析得到的精确极点比较。

### 第 1 步 — 小信号参数

两个晶体管都以 $I_D=100\ \mu$A 工作在饱和区，$W/L=20/0.5=40$：

$$
g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2(180\ \mu\mathrm{A/V^2})(40)(100\ \mu\mathrm{A})}=1.2\ \mathrm{mA/V},\qquad r_o=\frac{1}{\lambda I_D}=\frac{1}{(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})}=250\ \mathrm{k\Omega}.
$$

小信号电路有两个节点：$x$（$M_1$ 的漏极、$M_2$ 的源极），由 $C_p$ 负载；输出端 $o$，由 $C_L$ 负载。$M_1$ 等效为从 $x$ 到地的 $g_{m1}v_{gs1}$ 与 $r_{o1}$ 并联。$M_2$ 的栅极为交流地，等效为从 $o$ 到 $x$ 的 $g_{m2}(0-v_x)$ 与 $r_{o2}$ 并联。输入源和 $R_S$ 只决定 $v_{gs1}$；由于没有栅极电容，它们不影响任何一个极点。

### 第 2 步 — (a) 零值时间常数

令 $v_i=0$，$M_1$ 简化为 $r_{o1}$，两个电容都开路。

- **$C_L$。** 输出端的电阻是共源共栅结构的输出电阻，即 $r_{o1}$ 为 $M_2$ 提供源极负反馈：
$$
R_{L0}=r_{o2}+r_{o1}+g_{m2}r_{o2}r_{o1}=250\ \mathrm{k\Omega}+250\ \mathrm{k\Omega}+(1.2\ \mathrm{mA/V})(250\ \mathrm{k\Omega})^2=75.5\ \mathrm{M\Omega},
$$
所以 $R_{L0}C_L=(75.5\ \mathrm{M\Omega})(2\ \mathrm{pF})=151\ \mu$s。
- **$C_p$。** $C_L$ 开路时输出节点没有到地的通路，$M_2$ 中不能有电流，$M_2$ 的源极呈开路。节点 $x$ 只看到 $r_{o1}$：$r_{o1}C_p=(250\ \mathrm{k\Omega})(0.2\ \mathrm{pF})=50$ ns。

$$
T_0=151\ \mu\mathrm{s}+0.05\ \mu\mathrm{s}=151.05\ \mu\mathrm{s},\qquad |p_1|\approx\frac{1}{T_0}=6.62\times10^{3}\ \mathrm{rad/s}\ (1.054\ \mathrm{kHz}).
$$

低频时 $M_2$ 中没有电流，因此 $v_x=-g_{m1}r_{o1}v_i$，$v_o=(1+g_{m2}r_{o2})v_x$。增益为 $-g_{m1}r_{o1}(1+g_{m2}r_{o2})=-(1.2\ \mathrm{mA/V})(250\ \mathrm{k\Omega})(301)=-9.03\times10^{4}$（99.1 dB），基本等于 $-g_{m1}R_{L0}$。

### 第 3 步 — (b) 短路时间常数

- **$C_L$ 短路时的 $C_p$。** 输出端为交流地，从 $M_2$ 的源极看进去的电阻为 $r_{o2}/(1+g_{m2}r_{o2})=250\ \mathrm{k\Omega}/301=830.6\ \Omega$，它与 $r_{o1}$ 并联：
$$
R_{ps}=r_{o1}\parallel\frac{r_{o2}}{1+g_{m2}r_{o2}}=250\ \mathrm{k\Omega}\parallel830.6\ \Omega=827.8\ \Omega,\qquad R_{ps}C_p=0.1656\ \mathrm{ns}.
$$
- **$C_p$ 短路时的 $C_L$。** $M_2$ 的源极为交流地，$v_{gs2}=0$，输出端只看到 $r_{o2}$：$r_{o2}C_L=(250\ \mathrm{k\Omega})(2\ \mathrm{pF})=0.5\ \mu$s。

$$
|p_2|\approx\frac{1}{0.1656\ \mathrm{ns}}+\frac{1}{0.5\ \mu\mathrm{s}}=6.040\times10^{9}+2\times10^{6}=6.04\times10^{9}\ \mathrm{rad/s}\ (962\ \mathrm{MHz}).
$$

第二项可以忽略：高频极点由共栅管低阻源极处的 $C_p$ 决定。

### 第 4 步 — (c) 与 SPICE 比较

由于题目给定了小信号参数，直接用线性小信号电路检验（每个晶体管为压控电流源加输出电阻）。$R_S$ 任取 1 kΩ，它不影响极点。

```spice
* grsim-07-43 cascode with CL, linear small-signal model
Vi in 0 dc 0 ac 1
RS in g1 1k
G1 x 0 g1 0 1.2m
ro1 x 0 250k
Cp x 0 0.2p
G2 o x 0 x 1.2m
ro2 o x 250k
CL o 0 2p
.ac dec 50 1 100G
.pz in 0 o 0 vol pz
.end
```

| 量 | 估计值 | ngspice |
|---|---|---|
| 低频增益 | 99.1 dB | 99.11 dB |
| $p_1$ | $-6.620\times10^{3}$ rad/s（零值法） | $-6.620\times10^{3}$ rad/s |
| $-3$ dB 频率 | 1.054 kHz | 1.051 kHz |
| $p_2$ | $-6.042\times10^{9}$ rad/s（短路法） | $-6.042\times10^{9}$ rad/s |

两个极点都是实极点，与估计值的偏差小于 0.01 %。如此接近是因为两个极点相隔约 $10^6$ 倍：零值和 $T_0=1/|p_1|+1/|p_2|$ 由 $1/|p_1|$ 主导，短路和 $|p_1|+|p_2|$ 由 $|p_2|$ 主导，所以每个估计的误差只是另一个极点所占的极小份额。
