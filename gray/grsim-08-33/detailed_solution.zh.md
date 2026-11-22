# 详细步骤 - grsim-08-33

$V_i=0$ 时，环路由运放的受控源 $a_v(v_+-v_-)=-a_vv_-$（同相输入端接地）、其输出电阻 $R_o$、反馈电阻 $R_2$ 以及反相输入节点组成，后者由 $R_1$ 与运放输入电阻 $R_i$ 的并联负载。注入点 × 位于 $R_2$ 与该节点之间的连线上。每个注入比都由一个节点方程得到。然后用组合公式求回归比，通过直接在 $a_v$ 处断开环路加以检验，并用两次 ngspice 交流分析加以确认。

### 第 1 步 — 断点两侧的阻抗

从 × 向运放输入端看（$d$ 侧），节点 $v_-$ 看到对地的 $R_1$ 与接到接地同相输入端的 $R_i$ 并联：

$$
Z_d=R_1\parallel R_i=1\ \mathrm{k\Omega}\parallel1\ \mathrm{M\Omega}=999.0\ \Omega .
$$

从 × 向输出端看（$m$ 侧），通路是 $R_2$ 与 $R_o$ 串联，终止于源电压 $-a_vv_-$：

$$
Z_m=R_2+R_o=5.1\ \mathrm{k\Omega}.
$$

### 第 2 步 — (a) 电流注入，$\mathcal{R}'_i$

在 [图 2] 中，× 节点就是反相输入端本身，所以 $v_-=v_x$。向左流入 $Z_d$ 的电流为 $i_d=v_x/Z_d$。从 $R_2$ 一侧流来的电流由源电压与 $v_x$ 之差驱动：

$$
i_m=\frac{-a_vv_x-v_x}{Z_m}=-\frac{(1+a_v)v_x}{Z_m}.
$$

因此

$$
\mathcal{R}'_i=-\frac{i_m}{i_d}=(1+a_v)\frac{Z_d}{Z_m}=(10\,001)\frac{999.0\ \Omega}{5100\ \Omega}=1959.0 .
$$

### 第 3 步 — (a) 电压注入，$\mathcal{R}'_v$

在 [图 3] 中，源 $v_t$ 把 $v_d$（输入侧，$v_-=v_d$）与 $v_m$（$R_2$ 侧）隔开。运放输出侧只能经 $R_2$ 输送电流，所以 $R_2$ 中的电流等于流入 $Z_d$ 的电流：

$$
\frac{-a_vv_d-v_m}{Z_m}=\frac{v_d}{Z_d}\ \Rightarrow\ v_m=-\left(a_v+\frac{Z_m}{Z_d}\right)v_d,
$$

$$
\mathcal{R}'_v=-\frac{v_m}{v_d}=a_v+\frac{Z_m}{Z_d}=10\,000+\frac{5100}{999.0}=10\,005.1 .
$$

### 第 4 步 — (a) 组合两个比值

$$
\frac{1}{1+\mathcal{R}}=\frac{1}{1+1959.0}+\frac{1}{1+10\,005.1}=5.1020\times10^{-4}+0.9994\times10^{-4}=6.1014\times10^{-4},
$$

$$
\mathcal{R}=\frac{1}{6.1014\times10^{-4}}-1=1638.0 .
$$

### 第 5 步 — (b) 在受控源处直接求回归比

用独立测试源 $s_t$ 代替 $a_v(v_+-v_-)$，求返回的控制量。$s_t$ 经 $R_o+R_2$ 驱动 $Z_d$，所以 $v_-=s_tZ_d/(Z_d+Z_m)$。受控源的返回值为 $a_v(0-v_-)$，因此

$$
\mathcal{R}=a_v\frac{Z_d}{Z_d+Z_m}=10^4\cdot\frac{999.0\ \Omega}{999.0\ \Omega+5100\ \Omega}=1638.0 .
$$

这与第 4 步在所列各位数字上完全一致：对于整个环路都经过注入点的情况，组合公式是精确的。两种注入单独使用都不准确。只有当电压注入所驱动的一侧（这里 $Z_d=999\ \Omega$）的阻抗远高于其后的一侧（$Z_m=5.1$ kΩ）时，电压注入才准确；这里情况相反，所以 $\mathcal{R}'_v$ 把 $\mathcal{R}$ 高估了约六倍。当 $Z_d\ll Z_m$ 时电流注入才准确；这里 $\mathcal{R}'_i$ 偏高 $(Z_d+Z_m)/Z_m=1.20$ 倍。

### 第 6 步 — (c) SPICE 仿真

运放用增益为 $10^4$、由 $v_+-v_-$ 控制的压控电压源串联 $R_o$ 表示，两输入端之间接 $R_i$。在电流注入电路中，与 $R_2$ 串联的 0 V 电压源用来测量 $i_m$。

```spice
* Fig. 2: current injection
Ri inp x 1meg
Vinp inp 0 0
Ea a 0 inp x 1e4
Ro a o 100
R2 o m 5k
Vm m x 0
R1 x 0 1k
It 0 x dc 0 ac 1
.ac lin 1 1k 1k
* i_m = i(Vm), i_d = 1 + i_m,  R'_i = -i_m/i_d
.end
```

```spice
* Fig. 3: voltage injection
Ri inp d 1meg
Vinp inp 0 0
Ea a 0 inp d 1e4
Ro a o 100
R2 o m 5k
Vt d m dc 0 ac 1
R1 d 0 1k
.ac lin 1 1k 1k
* R'_v = -v(m)/v(d)
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $\mathcal{R}'_i$ | 1959.0 | 1959.02 |
| $\mathcal{R}'_v$ | 10 005.1 | 10 005.11 |
| 组合公式得到的 $\mathcal{R}$ | 1638.0 | 1637.97 |
| 直接计算的 $\mathcal{R}$ | 1638.0 | — |

电路中没有电容，所以各比值为实数且与频率无关。仿真得到的注入比经组合公式合成后，重现了直接计算的回归比。对于受控源隐藏在晶体管模型内部的环路，正是用这种方法在 SPICE 中测量回归比。
