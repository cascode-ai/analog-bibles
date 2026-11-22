# 详细步骤 - A303

用观察法公式 $R_s=(r_{ds}+R_D)/(1+g_mr_{ds})$ 求看进每个共源共栅管源极的电阻，其中 $R_D$ 为共源共栅管漏极的负载。节点 A 可直接得出。节点 B 的漏极负载是输出节点，它只在低频时是高阻；在主极点以上 $C_L$ 把它短路，因此决定极点的电阻与直流值不同。节点 A 是 M6 的源极（M1 和 M3 的漏极），节点 B 是 M7 的源极（M2 和 M4 的漏极）；两者电容均为 $C$，折叠节点电阻 $r_{ds1}\parallel r_{ds3}$、$r_{ds2}\parallel r_{ds4}$ 都很大。

### 第 1 步 — 节点 A（M6 源极）

M6 的漏极驱动二极管连接的共源共栅电流镜 M8/M10，其输入电阻约为 $2/g_{mN}$。因此

$$
R_A\approx\frac{r_{ds6}+2/g_{mN}}{1+g_{m6}r_{ds6}}\approx\frac1{g_{m6}}\qquad
p_A\approx-\frac{g_{m6}}{C}.
$$

与 $R_A$ 并联的大折叠节点电阻 $r_{ds1}\parallel r_{ds3}$ 可以忽略。

### 第 2 步 — 直流时的节点 B（M7 源极）

直流时，M7 的漏极看到共源共栅 M9/M11 的输出电阻 $R_9=g_{m9}r_{ds9}r_{ds11}$：

$$
R_B(0)=(r_{ds2}\parallel r_{ds4})\parallel\frac{r_{ds7}+R_9}{1+g_{m7}r_{ds7}}\approx(r_{ds2}\parallel r_{ds4})\parallel\frac{R_9}{g_{m7}r_{ds7}},
$$

为 $r_{ds}$ 量级（对 $g_{m7}=490\ \mu$S、$r_{ds7}=200$ kΩ、$R_9=102$ MΩ 的折叠式共源共栅设计，约为 95 kΩ）。粗略估计会在 $-1/(R_B(0)C)$ 处给出一个极点，可能低于 $GB$。

### 第 3 步 — 主极点以上的节点 B

这一高阻只在输出节点为高阻时存在。在主极点以上，$C_L$ 使 M7 的漏极负载变小，$R_D\to1/(sC_L)$，于是

$$
R_B\to\frac{r_{ds7}+1/(sC_L)}{1+g_{m7}r_{ds7}}\approx\frac1{g_{m7}} .
$$

精确地，对节点 B 和输出端列 KCL（$G_B=g_{ds2}+g_{ds4}$，$k=g_{m7}+g_{ds7}$，$G_9=1/R_9$），得特征方程

$$
CC_Ls^2+\left[C(g_{ds7}+G_9)+C_L(G_B+k)\right]s+(G_B+k)G_9+G_Bg_{ds7}=0 .
$$

对寄生电容 $C\ll g_{m7}r_{ds7}C_L$（实际中总是成立），其根分为主输出极点和

$$
p_B\approx-\frac{G_B+k}{C}\approx-\frac{g_{m7}}{C},
$$

因此在 $1/(R_B(0)C)$ 附近不会出现极点。在示例设计中，取 $C=0.5$ pF，$g_m/C=9.8\times10^8$ rad/s，而主极点约为 $-1.1\times10^4$ rad/s。节点 B 的直流电阻只决定直流时 M2 信号电流的分配，这已包含在 $R_{out}$ 中。

### 第 4 步 — 对频率响应的影响

两个节点都给出约 $-g_m/C$ 的非主极点，由于 $g_{m6}=g_{m7}$ 两者相等，且当 $C$ 为几百飞法时远高于 $GB$。每个节点在通往输出的并联路径中各承载一半差模信号电流，因此

$$
\frac{v_{out}}{v_{in}}\propto\frac12\left[\frac1{1+s/|p_A|}+\frac1{1+s/|p_B|}\right];
$$

当 $p_A=p_B$ 时，这对极点相当于一个位于 $-g_m/C$ 的非主极点（两极点之间的零点几乎抵消其中一个）。相位裕度约减小 $\arctan(GB\cdot C/g_m)$，对示例设计只有几度（$GB=6.3\times10^7$ rad/s、$C=0.5$ pF 时 $\approx3.7^\circ$），只要 $C\ll C_Lg_m/g_{m1}$ 就保持很小。
