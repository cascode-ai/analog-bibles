# 详细步骤 - G225

该电路是以 PMOS 电流源作负载的对称 MOS 差分对（differential pair），输出差值只取决于差模输入。先求偏置，再建立差模半边电路，由它读出增益，然后求各电容的开路时间常数之和。

### 第 1 步 — 偏置点与小信号参数

$M_5$ 吸收 $I_{D5}=1$ mA，在两只匹配的输入管之间平分，$I_{D1}=I_{D2}=0.5$ mA；$V_B$ 使 $M_3$、$M_4$ 提供同样的 0.5 mA。所有器件的 $L_{\text{eff}}=0.6\ \mu$m，故 $(W/L)_1=100/0.6=166.7$。饱和区平方律（square law）为 $I_D=\tfrac12k_n'(W/L)V_{ov}^2$，且 $g_m=\sqrt{2k_n'(W/L)I_D}$：

$$
g_{m1}=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(166.7)(0.5\ \mathrm{mA})}=3.162\ \mathrm{mA/V},\qquad
V_{ov1}=\frac{2I_D}{g_{m1}}=0.316\ \mathrm V.
$$

输出电阻由 $r_o=1/(\lambda I_D)$ 求得：

$$
r_{o1}=\frac{100\ \mathrm V}{0.5\ \mathrm{mA}}=200\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{50\ \mathrm V}{0.5\ \mathrm{mA}}=100\ \mathrm{k\Omega},\qquad
R_L=r_{o1}\parallel r_{o3}=66.7\ \mathrm{k\Omega}.
$$

漏极处于 +5 V，源极约为 $-V_{GS1}$，因此 $M_1$–$M_4$ 都处于饱和区，且有几伏的余量。

### 第 2 步 — 差模半边电路与低频增益

输入 $v_i$（另一栅极经其 20 kΩ 接地）等价于差模输入 $v_{id}=v_i$ 加上共模分量 $v_i/2$。两半匹配时，共模分量不产生输出差值，因此只需考虑差模。差模下公共源极节点为交流地，每一半都是一个共源级：由 $v_i/2$ 经 $R_S=20\ \mathrm{k\Omega}$ 驱动，负载为 $R_L$，输出为 $v_o/2$。

栅极不取电流，因此低频时 $v_{gs1}=v_i/2$，

$$
\frac{v_o}{v_i}=\frac{v_o/2}{v_i/2}=-g_{m1}R_L=-(3.162\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-210.8\approx-211 .
$$

### 第 3 步 — 半边电路中的电容

半边电路中 $M_1$ 的源极以及 $M_3$ 的栅极和源极都是交流地，因此只剩三个电容：$C_{gs1}$（栅极对地）、$C_{gd1}$（栅极到输出）以及输出对地的总电容。

$M_1$（$W=100\ \mu$m）的栅电容：

$$
C_{gs1}=\tfrac23(100)(0.6)(0.7\ \mathrm{fF})+(100)(0.2)(0.7\ \mathrm{fF})=28+14=42\ \mathrm{fF},\qquad
C_{gd1}=14\ \mathrm{fF}.
$$

$M_1$ 的漏结：$C_{db0}=(500\ \mu\mathrm m^2)(0.4\ \mathrm{fF/\mu m^2})+(100\ \mu\mathrm m)(0.4\ \mathrm{fF/\mu m})=240$ fF，反偏电压 $V_{DB}=5-(-10)=15$ V：

$$
C_{db1}=\frac{240\ \mathrm{fF}}{\sqrt{1+15/0.6}}=\frac{240\ \mathrm{fF}}{\sqrt{26}}=47.1\ \mathrm{fF}.
$$

$M_3$（$W=50\ \mu$m）的栅极为交流地，因此 $C_{gd3}=(50)(0.2)(0.7\ \mathrm{fF})=7$ fF 成为输出端负载。其漏结 $C_{db0}=(250)(0.2)+(50)(0.2)=60$ fF，$V_{BD}=10-5=5$ V：

$$
C_{db3}=\frac{60\ \mathrm{fF}}{\sqrt{1+5/0.6}}=19.6\ \mathrm{fF},\qquad
C_{out}=C_{db1}+C_{gd3}+C_{db3}=73.7\ \mathrm{fF}.
$$

### 第 4 步 — 零值时间常数与 −3-dB 频率

零值时间常数法把每个电容乘以其他电容全部开路时它看到的电阻，再求和：$\omega_{-3\mathrm{dB}}\approx1/\sum R_{j0}C_j$。

- $C_{gs1}$：栅极看到 $R_S$，故 $R_{gs0}=20\ \mathrm{k\Omega}$。
- $C_{gd1}$：从栅极向漏极注入测试电流 $i_x$。栅极电位升高 $i_xR_S$，漏极电位下降 $i_xR_L$，受控电流 $g_{m1}v_{gs}=g_{m1}i_xR_S$ 又使漏极再下降 $g_{m1}i_xR_SR_L$，得到

$$
R_{gd0}=R_S+R_L+g_{m1}R_LR_S=20\ \mathrm{k\Omega}+66.7\ \mathrm{k\Omega}+(3.162\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})(20\ \mathrm{k\Omega})=4.30\ \mathrm{M\Omega}.
$$

- $C_{out}$：输出节点看到 $R_L=66.7\ \mathrm{k\Omega}$。

| 电容 | $C$ (fF) | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{gs1}$ | 42 | 20 kΩ | 0.84 |
| $C_{gd1}$ | 14 | 4.30 MΩ | 60.2 |
| $C_{out}$ | 73.7 | 66.7 kΩ | 4.91 |
| 总和 $T_0$ | | | 66.0 |

$$
f_{-3\mathrm{dB}}\approx\frac{1}{2\pi T_0}=\frac{1}{2\pi(66.0\ \mathrm{ns})}=2.41\ \mathrm{MHz}.
$$

经密勒倍增（Miller multiplication）的 $C_{gd1}$ 占 $T_0$ 的 90% 以上，因此带宽由输入极点决定。精确求解该两节点半边电路得到 2.42 MHz，说明这里的时间常数之和相当准确。
