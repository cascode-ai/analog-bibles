# 详细步骤 - G242

只保留 $C_x$，推导电流镜负载差分对的 $G_m(s)$，以 $g_{m3}/C_x$ 表示读出其极点和零点，再由偏置求出 $g_{m3}$。

### 第 1 步 — 电流镜管的跨导

饱和区平方律器件满足 $|I_D|=\tfrac12\mu C_{ox}(W/L)|V_{ov}|^2$，故 $g_m=\partial|I_D|/\partial|V_{GS}|=2|I_D|/|V_{ov}|$：

$$
g_{m3}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},
$$

由于 $M_4$ 与 $M_3$ 匹配且电流相同，$g_{m4}=g_{m3}$。

### 第 2 步 — 计入电流镜电容的传递函数

差模输入时 $M_1$、$M_2$ 的源极为交流地，故 $i_{d1}=g_{m1}v_{id}/2$，$i_{d2}=-g_{m1}v_{id}/2$。电流 $i_{d1}$ 由二极管连接的 $M_3$（$1/g_{m3}$）与 $C_x$ 的并联提供，故

$$
v_X=-\frac{i_{d1}}{g_{m3}+sC_x},\qquad i_{d4}=g_{m4}v_X=-\frac{i_{d1}}{1+sC_x/g_{m3}}.
$$

输出接交流地时 $i_o=-i_{d2}-i_{d4}$（各漏极电流均取流向源极的方向），得到

$$
G_m(s)=\frac{i_o}{v_{id}}=\frac{g_{m1}}2\left[1+\frac1{1+sC_x/g_{m3}}\right]=g_{m1}\,\frac{1+sC_x/(2g_{m3})}{1+sC_x/g_{m3}} .
$$

### 第 3 步 — 极点与零点

极点是分母为零处，零点是分子为零处：

$$
p=-\frac{g_{m3}}{C_x}=-\frac{1\ \mathrm{mA/V}}{0.1\ \mathrm{pF}}=-1.0\times10^{10}\ \mathrm{rad/s},\qquad |f_p|=\frac{|p|}{2\pi}=1.59\ \mathrm{GHz};
$$

$$
z=-\frac{2g_{m3}}{C_x}=-2.0\times10^{10}\ \mathrm{rad/s},\qquad |f_z|=3.18\ \mathrm{GHz}.
$$

两者都在左半平面，相距一个倍频程。在两者之间 $|G_m|$ 由 $g_{m1}$ 降到 $g_{m1}/2$（信号中经镜像的一半被 $C_x$ 旁路），相位滞后最大为 19.5°，出现在 $\sqrt2\,|p|$ 即 2.25 GHz 处。
