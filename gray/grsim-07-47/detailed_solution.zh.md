# 详细步骤 - grsim-07-47

加入 $C_L$ 后形成一个电容回路：$C$（节点 $n$ 到输出端 $o$）、$C_L$（输出端到地）和 $C_{\text{in}}$（地到 $n$）。先验证这使每个短路时间常数都为零。然后计算零值时间常数，把时间常数占主导的电容短路，求剩下两个并联电容的单一时间常数；其倒数即为次极点的估计。与不加 $C_L$ 的电路一样，放大器贡献受控源 $a_vv_x=-a_vv_n$，因为 $v_x$ 是从接地的同相输入端量到节点 $n$ 的电压。

### 第 1 步 — 短路时间常数全为零

求某个电容的短路时间常数时，其余电容全部短路。

- **$C_{\text{in}}$：** 短路 $C_L$ 使 $o$ 接地，再短路 $C$ 使 $n$ 与 $o$ 相连，所以 $C_{\text{in}}$ 两端都接地，看到的电阻为 $0\ \Omega$。
- **$C$：** 短路 $C_{\text{in}}$ 使 $n$ 接地，短路 $C_L$ 使 $o$ 接地，所以 $C$ 看到 $0\ \Omega$。
- **$C_L$：** 短路 $C_{\text{in}}$ 使 $n$ 接地，短路 $C$ 使 $o$ 与 $n$ 相连，所以 $C_L$ 看到 $0\ \Omega$。

每个时间常数都为零，倒数之和为无穷大。方法失效的原因是回路中的三个电容只有两个独立电压，因此电路只有两个极点。

### 第 2 步 — 零值时间常数

将输入短路（$v_i=0$），依次把其他电容开路。

- **$C$：** 从 $o$ 流出、流入 $n$ 的测试电流 $i_x$ 流过 $R$（$v_n=i_xR$，$v_x=-i_xR$），再经 $R_o$ 流回（$v_o=a_vv_x-i_xR_o$），所以
$$
R_{C0}=R+R_o+a_vR=20\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1000)(20\ \mathrm{k\Omega})=20.025\ \mathrm{M\Omega},\qquad \tau_C^0=(20.025\ \mathrm{M\Omega})(50\ \mathrm{pF})=1.00125\ \mathrm{ms}.
$$
- **$C_{\text{in}}$：** 节点 $n$ 上只接有 $R$，所以 $\tau_{\text{in}}^0=(20\ \mathrm{k\Omega})(0.2\ \mathrm{pF})=4$ ns。
- **$C_L$：** $C$ 开路时 $R$ 中无电流，$v_n=0$，戴维南源为零，输出端看到 $R_o$：$\tau_L^0=(5\ \mathrm{k\Omega})(0.5\ \mathrm{pF})=2.5$ ns。

$$
T_0=1.00125\ \mathrm{ms}+4\ \mathrm{ns}+2.5\ \mathrm{ns}=1.001257\ \mathrm{ms},\qquad |p_1|\approx\frac{1}{T_0}=998.7\ \mathrm{rad/s}\ (159.0\ \mathrm{Hz}).
$$

$\tau_C^0$ 约为其余两个的 $2.5\times10^{5}$ 倍，所以 $C$ 明显占主导。

### 第 3 步 — 短路 $C$：次极点

传递函数的分母为 $1+b_1s+b_2s^2$，其中 $b_1=T_0$，对本电路

$$
b_2=\tau_C^0\left(\tau_{\text{in}}^{C}+\tau_L^{C}\right)+\tau_{\text{in}}^0\tau_L^{\text{in}},
$$

其中 $\tau_j^{i}$ 表示电容 $i$ 短路、其余开路时电容 $j$ 的时间常数。最后一项的量级为 $(4\ \mathrm{ns})(2.5\ \mathrm{ns})$，与第一项相比可以忽略。极点相距很远时，$|p_2|\approx b_1/b_2\approx\tau_C^0/[\tau_C^0(\tau_{\text{in}}^{C}+\tau_L^{C})]$，所以次极点由 $C$ 短路后剩下的电容决定。

$C$ 短路时，$n$ 与 $o$ 合并，$C_{\text{in}}$ 和 $C_L$ 并联在该节点与地之间。在该节点加测试电压 $v$，经 $R$ 吸取 $v/R$，经 $R_o$ 吸取 $[v-(-a_vv)]/R_o$：

$$
R_{\text{eq}}=R\parallel\frac{R_o}{1+a_v}=20\ \mathrm{k\Omega}\parallel\frac{5\ \mathrm{k\Omega}}{1001}=4.994\ \Omega,
$$

$$
\tau_2=R_{\text{eq}}(C_{\text{in}}+C_L)=(4.994\ \Omega)(0.7\ \mathrm{pF})=3.496\ \mathrm{ps},\qquad |p_2|\approx\frac{1}{\tau_2}=2.861\times10^{11}\ \mathrm{rad/s}\ (45.5\ \mathrm{GHz}).
$$

不加 $C_L$ 时同样的计算给出 $1/[(4.994\ \Omega)(0.2\ \mathrm{pF})]\approx1.0\times10^{12}$ rad/s，所以负载电容使次极点降低了 $(C_{\text{in}}+C_L)/C_{\text{in}}=3.5$ 倍。高频时输出端与反相节点一起变化，经 $C$ 的反馈使该节点阻抗非常低（$R_o/(1+a_v)$）。

### 第 4 步 — 与 SPICE 比较

网表为加入 $C_L$ 后的线性模型。

```spice
* grsim-07-47 integrator with load capacitor
Vi i 0 dc 0 ac 1
R i n 20k
C n o 50p
Cin n 0 0.2p
Ea a 0 0 n 1000
Ro a o 5k
CL o 0 0.5p
.ac dec 50 0.01 10T
.pz i 0 o 0 vol pz
.end
```

| 量 | 估计值 | ngspice |
|---|---|---|
| 主极点 $p_1$ | $-998.7$ rad/s | $-998.7$ rad/s |
| 次极点 $p_2$ | $-2.861\times10^{11}$ rad/s | $-2.853\times10^{11}$ rad/s |
| 零点 | — | $+4.000\times10^{9}$ rad/s |
| 低频增益 | −1000 | 60.0 dB |

仿真恰好得到两个极点，与电容回路的分析一致。次极点估计值与仿真值相差在 0.3 % 以内，证实把主导电容短路、再把剩下的并联电容合并处理能给出良好的估计。
