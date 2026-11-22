# 详细步骤 - G240

电容接在外部端子上时，带串联源极电阻的每只晶体管都等效为一个跨导减小为 $G_m$ 的理想压控电流源（voltage-controlled current source）。先求 $G_m$ 和电流镜的节点电阻，再求每个电容的开路电阻，然后把时间常数相加。

### 第 1 步 — 计入速度饱和的等效跨导

串联电阻为

$$
R_{SX}=\frac1{\mathcal{E}_c\mu_nC_{ox}W}=\frac1{(1.5\times10^6\ \mathrm{V/m})(60\times10^{-6}\ \mathrm{A/V^2})(10\times10^{-6}\ \mathrm m)}=1.11\ \mathrm{k\Omega}.
$$

$I_D=100\ \mu$A 时，本征平方律器件的 $g_m=\sqrt{2\mu_nC_{ox}(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=0.346$ mA/V。其漏极电流 $i_d=g_m(v_g-v_{s,\text{int}})$ 流过 $R_{SX}$，故 $v_{s,\text{int}}=v_s+i_dR_{SX}$，

$$
i_d=G_m(v_g-v_s),\qquad G_m=\frac{g_m}{1+g_mR_{SX}}=\frac{0.346\ \mathrm{mA/V}}{1+0.385}=0.250\ \mathrm{mA/V},\qquad \frac1{G_m}=4.0\ \mathrm{k\Omega}.
$$

因此每只器件都是外部端子之间的理想跨导器 $G_m$（$\lambda=\gamma=0$），并带有题给电容。

### 第 2 步 — 节点与低频特性

给信号节点命名：A = 输入 = $M_4$ 的漏极和栅极 = $M_2$ 的栅极；B = $M_4$ 的源极 = $M_3$ 的漏极和栅极 = $M_1$ 的栅极；C = $M_1$ 的漏极 = $M_2$ 的源极。输出（$M_2$ 的漏极）、$M_1$ 与 $M_3$ 的源极以及衬底都是交流地。

低频时 $i_{in}$ 流过 $M_4$ 和 $M_3$：$G_mv_B=i_{in}$，$G_m(v_A-v_B)=i_{in}$，故 $v_A=2i_{in}/G_m$。$M_1$ 复制出 $G_mv_B=i_{in}$，节点 C 的 KCL 迫使 $M_2$ 流过相同电流，故 $i_{out}/i_{in}=1$。

### 第 3 步 — 各电容的开路电阻

令 $i_{in}=0$，在每个电容的两端注入测试电流 $i_x$，求解三个节点方程（节点 A 的 KCL：经 $M_4$ 流出的电流为 $G_m(v_A-v_B)$；节点 B：$M_4$ 电流流入，$G_mv_B$ 流出；节点 C：经 $M_2$ 流入 $G_m(v_A-v_C)$，经 $M_1$ 流出 $G_mv_B$）。两个代表性例子：

- $C_{gs2}$，从 A 到 C：节点 A 给出 $G_m(v_A-v_B)=i_x$，节点 B 给出 $G_mv_B=G_m(v_A-v_B)$，故 $v_B=i_x/G_m$，$v_A=2i_x/G_m$；节点 C 给出 $G_m(v_A-v_C)=G_mv_B+i_x$，故 $v_A-v_C=2i_x/G_m$，$R=2/G_m$。
- $C_{gs4}$，从 A 到 B：节点 A 给出 $G_m(v_A-v_B)=i_x$；节点 B 给出 $G_mv_B=i_x-i_x=0$，故 $R=v_A-v_B=1/G_m$。

用同样的方法得到全部结果：

| 电容 | 端子 | $C$ (fF) | $R_{j0}$ | $R_{j0}C_j$ (ps) |
|---|---|---|---|---|
| $C_{gs3}+C_{db3}+C_{sb4}+C_{gs1}$ | B–地 | 60 | $1/G_m$ | 240 |
| $C_{gs4}$ | A–B | 20 | $1/G_m$ | 80 |
| $C_{db4}$ | A–地 | 10 | $2/G_m$ | 80 |
| $C_{gd2}$ | A–输出（交流地） | 3 | $2/G_m$ | 24 |
| $C_{gs2}$ | A–C | 20 | $2/G_m$ | 160 |
| $C_{gd1}$ | B–C | 3 | $2/G_m$ | 24 |
| $C_{db1}+C_{sb2}$ | C–地 | 20 | $1/G_m$ | 80 |

$C_{gd3}$ 和 $C_{gd4}$ 被二极管连接短路，$C_{sb1}$、$C_{sb3}$、$C_{db2}$ 两端都是交流地。浮空电容 $C_{gs4}$、$C_{gs2}$、$C_{gd1}$ 共贡献 264 ps，不能忽略。

### 第 4 步 — 主极点

$$
T_0=688\ \mathrm{ps},\qquad \omega_p\approx\frac1{T_0}=1.45\times10^{9}\ \mathrm{rad/s},\qquad f_p\approx\frac1{2\pi T_0}=231\ \mathrm{MHz}.
$$

精确求解该三节点电路，实极点位于 378 MHz（另外两个极点构成约 1.1 GHz 的复极点对），因此零值时间常数结果是偏保守的估计。

### 第 5 步 — 与 $f_T$ 比较

采用同样的短沟道模型，器件的短路电流增益在下述频率降为 1：

$$
f_T=\frac{G_m}{2\pi(C_{gs}+C_{gd})}=\frac{0.250\ \mathrm{mA/V}}{2\pi(23\ \mathrm{fF})}=1.73\ \mathrm{GHz}.
$$

电流镜带宽约为 $f_T/7.5$：输入节点要经 $1/G_m$ 到 $2/G_m$ 的电阻为四只器件的电容充电。若不计短沟道电阻（$g_m=0.346$ mA/V），估计值将为 321 MHz 和 $f_T=2.40$ GHz；速度饱和使两者都降低同一因子 $1+g_mR_{SX}=1.385$，约 28%。
