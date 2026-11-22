# 详细步骤 - A124

p 沟道器件 M1 是输入管；M2 的栅极接直流电压 $V_{GG}$，是电流沉负载，其受控源对小信号不起作用。增益等于 M1 的跨导除以输出端的总电导，而后者只有两管的输出电导。

### 第 1 步 — 小信号参数

两管都在饱和区流过 100 µA。输入管是 M1，所以其跨导使用 p 沟道的 $K'_P$ 和它自己的尺寸：

$$
g_{m1}=\sqrt{2K'_P\frac{W_1}{L_1}I_D}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=223.6\ \mu\mathrm S .
$$

由 $g_{ds}=\lambda I_D$：

$$
g_{ds1}=(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=5\ \mu\mathrm S,\qquad
g_{ds2}=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S .
$$

### 第 2 步 — 增益

M1 的源极接 $V_{DD}$（交流地），故 $v_{sg1}=-v_{in}$，M1 向输出端提供 $g_{m1}v_{sg1}=-g_{m1}v_{in}$。M2 的 $v_{gs2}=0$，只提供 $g_{ds2}$。对输出节点列 KCL：

$$
-g_{m1}v_{in}=(g_{ds1}+g_{ds2})v_{out}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}}{g_{ds1}+g_{ds2}}=-\frac{223.6\ \mu\mathrm S}{9\ \mu\mathrm S}=-24.8\ \mathrm{V/V}.
$$

输出电阻为 $1/(9\ \mu\mathrm S)=111$ kΩ。增益为反相，其大小由两个 $\lambda$ 决定：电流一定时，$|A_v|=\sqrt{2K'_P(W_1/L_1)}/[(\lambda_P+\lambda_N)\sqrt{I_D}]$。
