# 详细步骤 - grsim-07-45

由于 $\lambda=0$、$\gamma=0$、$C_{sb}=C_{db}=0$，小信号电路只含 $C_{gs}$ 和 $C_{gd}$，因此有两个极点。零值时间常数（两个电容都开路，对 $RC$ 乘积求和）估计主极点；短路时间常数（另一个电容短路，对倒数求和）估计次极点。对同一线性电路做 ngspice 极零点分析给出精确值。

### 第 1 步 — 小信号参数

饱和区平方律给出 $g_m=\sqrt{2k_n'(W/L)I_D}$，栅源电容为题给的 $\tfrac23WL_{\text{eff}}C_{ox}$：

$$
\begin{aligned}
g_m&=\sqrt{2(60\ \mu\mathrm{A/V^2})\left(\frac{100}{1.6}\right)(0.5\ \mathrm{mA})}=1.936\ \mathrm{mA/V},\\
C_{gs}&=\tfrac23(100\ \mu\mathrm{m})(1.6\ \mu\mathrm{m})(0.7\ \mathrm{fF/\mu m^2})=74.67\ \mathrm{fF}.
\end{aligned}
$$

低频增益为 $-g_mR_L=-9.68$（19.7 dB）。小信号电路中，$R_S$ 驱动栅极节点，$C_{gs}$ 从栅极接到地（源极为交流地），$C_{gd}$ 跨接在栅极与漏极之间，漏极接 $g_mv_{gs}$ 和 $R_L$。

### 第 2 步 — (a) 零值时间常数：主极点

两个电容都开路、输入源短路时：

- **$C_{gs}$** 看到 $R_S$（$C_{gd}$ 开路，其中无电流）：$R_SC_{gs}=(10\ \mathrm{k\Omega})(74.67\ \mathrm{fF})=0.7467$ ns。
- **$C_{gd}$** 看到栅极到漏极的电阻。从漏极向栅极加测试电流 $i_x$，得 $v_{gs}=i_xR_S$，$v_d=-(i_x+g_mv_{gs})R_L$，因此
$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1.936\ \mathrm{mA/V})(5\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})=111.8\ \mathrm{k\Omega},
$$
$R_{gd0}C_{gd}=(111.8\ \mathrm{k\Omega})(14\ \mathrm{fF})=1.566$ ns。这是经密勒倍增的项。

$$
T_0=0.7467\ \mathrm{ns}+1.566\ \mathrm{ns}=2.312\ \mathrm{ns},\qquad |p_1|\approx\frac{1}{T_0}=4.32\times10^{8}\ \mathrm{rad/s}\ (68.8\ \mathrm{MHz}).
$$

### 第 3 步 — (a) 短路时间常数：次极点

- **$C_{gd}$ 短路时的 $C_{gs}$。** 栅极与漏极相连，晶体管成为二极管连接，$g_mv_{gs}$ 相当于从栅极节点到地的电阻 $1/g_m$，与 $R_S$、$R_L$ 并联：
$$
R_{gs,s}=R_S\parallel R_L\parallel\frac{1}{g_m}=10\ \mathrm{k\Omega}\parallel5\ \mathrm{k\Omega}\parallel516.4\ \Omega=447.1\ \Omega,
$$
所以 $R_{gs,s}C_{gs}=33.39$ ps。
- **$C_{gs}$ 短路时的 $C_{gd}$。** $v_{gs}=0$，受控源关断，$C_{gd}$ 看到从漏极到接地栅极的 $R_L$：$R_LC_{gd}=(5\ \mathrm{k\Omega})(14\ \mathrm{fF})=70$ ps。

$$
|p_2|\approx\frac{1}{33.39\ \mathrm{ps}}+\frac{1}{70\ \mathrm{ps}}=2.995\times10^{10}+1.429\times10^{10}=4.42\times10^{10}\ \mathrm{rad/s}\ (7.04\ \mathrm{GHz}).
$$

### 第 4 步 — (b) 与 SPICE 比较

网表为采用第 1 步数值的线性小信号电路；极零点分析给出精确的根，交流扫描给出 −3 dB 频率。

```spice
* grsim-07-45 CS stage, linear small-signal model
Vs s 0 dc 0 ac 1
RS s g 10k
Cgs g 0 74.6667f
Cgd g o 14f
Gm o 0 g 0 1.93649m
RL o 0 5k
.ac dec 100 100k 1T
.pz s 0 o 0 vol pz
.end
```

| 量 | 估计值 | ngspice | 偏差 |
|---|---|---|---|
| 低频增益 | −9.68（19.7 dB） | 19.72 dB | — |
| 主极点 $p_1$ | 68.8 MHz | $4.368\times10^{8}$ rad/s = 69.5 MHz | −1.0 % |
| −3 dB 频率 | — | 69.3 MHz | — |
| 次极点 $p_2$ | 7.04 GHz | $4.380\times10^{10}$ rad/s = 6.97 GHz | +1.0 % |
| 零点 | $g_m/C_{gd}$ = 22.0 GHz（右半平面） | $1.383\times10^{11}$ rad/s = 22.0 GHz | — |

两个估计值与精确极点的偏差都约为 1 %。两极点相隔约 100 倍，而每个估计的误差正是另一个极点在精确和式 $T_0=1/|p_1|+1/|p_2|$ 与 $|p_1|+|p_2|$ 中所占的份额，约为 1 %。这比极点间隔更大的电路误差稍大，但仍然很小。
