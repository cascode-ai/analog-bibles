# 详细步骤 - A060

先求直流工作点：它表明 M1 没有直流电流，作用相当于电阻；M2 的源、漏和衬底接地，作用相当于电容。于是电路是一阶 RC 低通，其电阻和电容由该偏置下的器件模型求得。

### 第 1 步 — 直流工作点

$v_{out}$ 上唯一的负载是 M2 的栅极，它不取直流电流。因此 M1 的 $I_{D1}=0$，对导通的 MOSFET 这要求 $V_{DS1}=0$：

$$
V_{OUT}=V_{IN}=2\ \mathrm V .
$$

M1（栅接 5 V，源、漏均为 2 V，衬底为 0 V）有 $V_{GS1}=3$ V、$V_{SB1}=2$ V。计入体效应后其阈值为

$$
V_{T1}=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB1}}-\sqrt{2|\phi_F|}\Big)=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V .
$$

由于 $V_{GS1}-V_{T1}=1.977\ \mathrm V>V_{DS1}=0$，M1 导通且处于非饱和区，位于该区 $V_{DS}=0$ 的边缘。M2 的 $V_{GS2}=2\ \mathrm V>V_{T0}$，$V_{DS2}=0$，$V_{SB2}=0$，因此其沟道已反型，并与接地的源、漏相连。

### 第 2 步 — M1 的小信号电阻

非饱和区 $i_D=K'(W/L)[(v_{GS}-V_T)v_{DS}-v_{DS}^2/2]$，因此在 $V_{DS}=0$ 处

$$
g_m=K'\frac WL V_{DS}=0,\qquad g_{mbs}\propto V_{DS}=0,\qquad
g_{ds}=K'\frac WL\big(V_{GS}-V_T-V_{DS}\big).
$$

小信号下 M1 是接在 $v_{in}$ 与 $v_{out}$ 之间的纯电导：

$$
R_{on1}=\frac1{g_{ds1}}=\frac{1}{(110\ \mu\mathrm{A/V^2})(2\ \mu\mathrm m/0.8\ \mu\mathrm m)(1.977\ \mathrm V)}=\frac{1}{543.8\ \mu\mathrm S}=1.84\ \mathrm{k\Omega}.
$$

### 第 3 步 — M2 的电容

沟道已反型，源、漏和衬底均接地，因此 M2 的所有栅电容都从 $v_{out}$ 接到地：沟道区氧化层电容（分给源和漏，二者都接地）、两个交叠电容以及栅-衬底交叠电容：

$$
C=C_{ox}W_2L_2+2\,\mathrm{CGSO}\cdot W_2+\mathrm{CGBO}\cdot L_2
=39.5\ \mathrm{fF}+1.76\ \mathrm{fF}+2.8\ \mathrm{fF}=44.1\ \mathrm{fF},
$$

其中 $C_{ox}W_2L_2=(24.7\times10^{-4}\ \mathrm{F/m^2})(4\ \mu\mathrm m)(4\ \mu\mathrm m)$。按题意忽略 M1 的源/漏结电容。

### 第 4 步 — 传递函数

小信号电路为 $R_{on1}$ 串联在 $v_{in}$ 与 $v_{out}$ 之间，$C$ 从 $v_{out}$ 接地。对 $v_{out}$ 列 KCL：$(v_{in}-v_{out})/R_{on1}=sCv_{out}$，得

$$
\frac{v_{out}(s)}{v_{in}(s)}=\frac{1}{1+sR_{on1}C}=\frac{1}{1+s/\omega_p},
\qquad
\omega_p=\frac{1}{(1.84\ \mathrm{k\Omega})(44.1\ \mathrm{fF})}=1.23\times10^{10}\ \mathrm{rad/s}\ (1.96\ \mathrm{GHz}).
$$

该电路是直流增益为 1 的单极点低通。若只计 M2 的氧化层电容（39.5 fF），得 $1.38\times10^{10}$ rad/s（2.19 GHz）。M1 自身的栅-漏电容约 2.4 fF，接到其栅极（交流地），会使 $\omega_p$ 降低约 5%。
