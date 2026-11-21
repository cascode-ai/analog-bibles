# 详细步骤 - G068

先用平方律模型求出 $g_m$、$g_{mb}$ 和 $r_o$，再在内部节点 $X$（$M_1$ 漏极 = $M_2$ 源极）求解小信号电路：输出短路求 $G_m$，输入接地求 $R_o$。开路增益为 $-G_mR_o$。

### 第 1 步 — 小信号参数

两个器件都流过 250 µA，且 $W/L=100$，因此

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(90\ \mu\mathrm{A/V^2})(100)(250\ \mu\mathrm A)}=2.121\ \mathrm{mA/V},
$$

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.1\ \mathrm{V^{-1}})(250\ \mu\mathrm A)}=40\ \mathrm{k\Omega},\qquad
g_{mb2}=\chi g_{m2}=0.2121\ \mathrm{mA/V}.
$$

$M_1$ 的源极与接地衬底相连，没有体效应；$M_2$ 的源极在节点 $X$，高于地电位，故 $v_{bs2}=-v_x$。

### 第 2 步 — 输入电阻

输入驱动 $M_1$ 的栅极，低频时栅极不取电流：

$$
R_i\to\infty .
$$

### 第 3 步 — 跨导（输出短路）

$M_2$ 漏极接地、栅极为交流地，故 $v_{gs2}=v_{bs2}=-v_x$。经 $M_2$ 向下流入节点 $X$ 的电流为 $-(g_{m2}+g_{mb2})v_x-v_x/r_{o2}$，经 $M_1$ 流出 $X$ 的电流为 $g_{m1}v_i+v_x/r_{o1}$。令二者相等，

$$
v_x=-\frac{g_{m1}v_i}{g_{m2}+g_{mb2}+1/r_{o1}+1/r_{o2}} .
$$

输出电流（流入 $M_2$ 漏极）就是流过 $M_2$ 的电流：

$$
i_o=-\left(g_{m2}+g_{mb2}+\frac1{r_{o2}}\right)v_x
\quad\Rightarrow\quad
G_m=\frac{i_o}{v_i}=g_{m1}\left[1-\frac1{1+(g_{m2}+g_{mb2})r_{o1}+r_{o1}/r_{o2}}\right].
$$

方括号是 $M_1$ 的电流中没有漏入 $r_{o1}$ 的比例。数值上 $(g_{m2}+g_{mb2})r_{o1}=(2.333\ \mathrm{mA/V})(40\ \mathrm{k\Omega})=93.34$，因此

$$
G_m=2.121\ \mathrm{mA/V}\left(1-\frac1{95.34}\right)=2.099\ \mathrm{mA/V}\approx g_{m1}.
$$

### 第 4 步 — 输出电阻（输入接地）

$v_i=0$ 时，$M_1$ 就是从 $X$ 到地的电阻 $r_{o1}$。在输出端加 $v_t$；测试电流 $i_t$ 流过 $M_2$ 再流过 $r_{o1}$，故 $v_x=i_tr_{o1}$。对流过 $M_2$ 的电流列 KCL：

$$
i_t=-(g_{m2}+g_{mb2})v_x+\frac{v_t-v_x}{r_{o2}}
\quad\Rightarrow\quad
R_o=\frac{v_t}{i_t}=r_{o1}+r_{o2}+(g_{m2}+g_{mb2})r_{o1}r_{o2}.
$$

$$
R_o=40\ \mathrm{k\Omega}+40\ \mathrm{k\Omega}\left[1+(2.333\ \mathrm{mA/V})(40\ \mathrm{k\Omega})\right]=40\ \mathrm{k\Omega}+40\ \mathrm{k\Omega}(94.34)=3.81\ \mathrm{M\Omega}.
$$

体效应在这里有利：它在维持 $M_2$ 电流不变的反馈中增加了 $g_{mb2}$。若无体效应，$R_o$ 为 3.47 MΩ。

### 第 5 步 — 最大开路电压增益

负载为无穷大时，短路电流全部流入 $R_o$，$v_i$ 上升使输出下降：

$$
A_v=-G_mR_o=-(2.099\ \mathrm{mA/V})(3.814\ \mathrm{M\Omega})=-8.00\times10^3 .
$$

等价地，$A_v=-g_{m1}r_{o1}\left[(g_{m2}+g_{mb2})r_{o2}+1\right]=-(84.85)(94.34)=-8005$，约为单管本征增益（intrinsic gain）$g_mr_o=84.9$ 的平方。结果为 $R_i\to\infty$，$G_m=2.10$ mA/V，$R_o=3.81\ \mathrm{M\Omega}$，$A_v=-8.00\times10^3$。
