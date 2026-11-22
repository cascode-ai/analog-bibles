# 详细步骤 - grsim-07-46

电路有 $C$ 和 $C_{\text{in}}$ 两个电容，因此传递函数有两个极点。零值时间常数（两个电容都开路，对 $RC$ 乘积求和）估计主极点；短路时间常数（另一个电容短路，对倒数求和）估计次极点。放大器通过其受控源进入分析：$v_x$ 是从接地的同相输入端量到反相节点 $n$ 的电压，所以 $v_x=-v_n$，戴维南源为 $a_vv_x=-a_vv_n$。对同一线性电路做 ngspice 极零点分析给出精确极点。

### 第 1 步 — (a) 零值时间常数：主极点

将输入短路（$v_i=0$），于是 $R$ 把节点 $n$ 接到地，两个电容都开路。

- **$C$**（从 $n$ 到输出端 $o$）。加测试电流 $i_x$，从 $o$ 流出、流入 $n$。它全部流过 $R$，因此 $v_n=i_xR$，$v_x=-i_xR$。同一个 $i_x$ 经 $R_o$ 流出，因此 $v_o=a_vv_x-i_xR_o=-(a_vR+R_o)i_x$。于是
$$
R_{C0}=\frac{v_n-v_o}{i_x}=R+R_o+a_vR=20\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1000)(20\ \mathrm{k\Omega})=20.025\ \mathrm{M\Omega},
$$
$R_{C0}C=(20.025\ \mathrm{M\Omega})(50\ \mathrm{pF})=1.00125$ ms。因子 $a_vR$ 就是反馈电容的密勒倍增。
- **$C_{\text{in}}$**（从 $n$ 到地）。$C$ 开路时，节点 $n$ 上只接有 $R$：$RC_{\text{in}}=(20\ \mathrm{k\Omega})(0.2\ \mathrm{pF})=4$ ns。

$$
T_0=1.00125\ \mathrm{ms}+4\ \mathrm{ns}=1.001254\ \mathrm{ms},\qquad |p_1|\approx\frac{1}{T_0}=998.7\ \mathrm{rad/s}\ (159.0\ \mathrm{Hz}).
$$

### 第 2 步 — (a) 短路时间常数：次极点

- **$C_{\text{in}}$ 短路时的 $C$。** 节点 $n$ 接地，$v_x=0$，戴维南源为零。$C$ 看到从输出端到地的 $R_o$：$R_oC=(5\ \mathrm{k\Omega})(50\ \mathrm{pF})=0.25\ \mu$s。
- **$C$ 短路时的 $C_{\text{in}}$。** 节点 $n$ 与输出端相连，放大器处于单位反馈。在 $n$ 加测试电压 $v$，经 $R$ 吸取 $v/R$，经 $R_o$ 吸取 $[v-(-a_vv)]/R_o$：
$$
R_{\text{in},s}=R\parallel\frac{R_o}{1+a_v}=20\ \mathrm{k\Omega}\parallel\frac{5\ \mathrm{k\Omega}}{1001}=4.994\ \Omega,
$$
所以 $R_{\text{in},s}C_{\text{in}}=0.9988$ ps。

$$
|p_2|\approx\frac{1}{0.9988\ \mathrm{ps}}+\frac{1}{0.25\ \mu\mathrm{s}}=1.00125\times10^{12}+4\times10^{6}=1.0013\times10^{12}\ \mathrm{rad/s}\ (159\ \mathrm{GHz}).
$$

低频增益为 $-a_v=-1000$：直流时 $C$ 开路，放大器只是放大 $v_x=-v_i$。在 $|p_1|$ 以上电路进行积分，单位增益频率约为 $1/(2\pi RC)=159$ kHz。

### 第 3 步 — (b) 与 SPICE 比较

网表完全按题述建模放大器：增益为 1000、由 $v_x=0-v_n$ 控制的压控电压源，串联 $R_o$。

```spice
* grsim-07-46 integrator, amplifier macromodel
Vi i 0 dc 0 ac 1
R i n 20k
C n o 50p
Cin n 0 0.2p
Ea a 0 0 n 1000
Ro a o 5k
.ac dec 50 0.01 10T
.pz i 0 o 0 vol pz
.end
```

| 量 | 估计值 | ngspice |
|---|---|---|
| 低频增益 | −1000（60 dB） | 60.0 dB |
| 主极点 $p_1$ | $-998.7$ rad/s（159.0 Hz） | $-998.7$ rad/s；−3 dB 位于 158.6 Hz |
| 次极点 $p_2$ | $-1.0013\times10^{12}$ rad/s | $-1.0013\times10^{12}$ rad/s |
| 零点 | $+a_v/(R_oC)=4\times10^{9}$ rad/s | $+4.000\times10^{9}$ rad/s（右半平面） |
| 单位增益频率 | ≈ 159 kHz | 159.0 kHz |

估计值与精确极点在四位有效数字上一致。两个极点相隔约 $10^9$ 倍，所以零值和基本就是 $1/|p_1|$，短路和基本就是 $|p_2|$。右半平面零点来自经 $C$ 前馈进入 $R_o$ 的输入电流；它位于两个极点之间，但远高于积分工作的频率范围。
