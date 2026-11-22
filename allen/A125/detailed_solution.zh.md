# 详细步骤 - A125

输入由理想电压源驱动，M2 的栅极接固定直流电压，所以输出是唯一电压可以变化的节点。因此电路只有一个极点，由输出端的总电导和总电容决定。各电容按其两端所接的节点归类。

### 第 1 步 — 输出电导

两管都在饱和区流过 100 µA。M2（栅极为交流地）是电流沉负载，M1 的受控源由输入驱动，所以令 $v_{in}=0$ 时输出端只看到

$$
g_{ds1}+g_{ds2}=(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)+(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=5+4\ \mu\mathrm S=9\ \mu\mathrm S,
$$

即 $R_{out}=111$ kΩ。

### 第 2 步 — 输出端的电容

- $C_{gd1}$：从输出到 M1 的栅极即输入端，输入由理想源固定；对极点而言它相当于接到交流地的电容。
- $C_{gd2}$：从输出到接直流电压 $V_{GG}$ 的 M2 栅极，即交流地。
- $C_{bd1}$（到接 $V_{DD}$ 的 n 阱）、$C_{bd2}$（到接地的衬底）和 $C_L$：输出到交流地。

$$
C_{out}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=5+5+30+30+500\ \mathrm{fF}=570\ \mathrm{fF}.
$$

### 第 3 步 — 传递函数与 −3 dB 频率

由 $g_{m1}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=223.6\ \mu\mathrm S$，对输出节点列 KCL（$C_{gd1}$ 中的电流从输入端流入）得

$$
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{g_{ds1}+g_{ds2}+sC_{out}} .
$$

极点位于

$$
\omega_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{C_{out}}=\frac{9\ \mu\mathrm S}{570\ \mathrm{fF}}=1.58\times10^7\ \mathrm{rad/s},
\qquad f_{-3\,\mathrm{dB}}=\frac{\omega_{-3\,\mathrm{dB}}}{2\pi}=2.51\ \mathrm{MHz}.
$$

由于输入由理想源驱动，$C_{gd1}$ 在分母中只出现一次，不乘以增益；只有当输入端有源电阻时才会出现密勒倍增。右半平面零点位于 $g_{m1}/(2\pi C_{gd1})=223.6\ \mu\mathrm S/(2\pi\cdot5\ \mathrm{fF})=7.1$ GHz，远高于极点。
