# 详细步骤 - G086

这是有源负载差分对的 MOS 版本，所以增益仍为 $v_o/v_i=G_mR_o$。有电流镜负载时，短路输出电流利用了输入对的两半，得到 $G_m=g_{m1}$。输出电阻为 $r_{o2}\|r_{o4}$。剩下的只是用有效沟道长度（effective channel length）计算 $g_m$ 和 $r_o$，因为 $W/L$ 和 $\lambda$ 都取决于 $L_{\text{eff}}$。

### 第 1 步 — 偏置与小信号参数

理想的 100-µA 尾电流平均分配，每个晶体管都流过 $I_D=50\ \mu\mathrm A$。由饱和区平方律得 $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$。对 NMOS 输入对，$W/L_{\text{eff}}=50/0.76=65.8$：

$$
g_{m1}=g_{m2}=\sqrt{2(126.6\ \mu\mathrm{A/V^2})(65.8)(50\ \mu\mathrm A)}=0.913\ \mathrm{mA/V},\qquad V_{ov,n}=\frac{2I_D}{g_{m1}}=0.110\ \mathrm V .
$$

对 PMOS 负载，$W/L_{\text{eff}}=100/0.64=156$，所以 $g_{m3}=g_{m4}=0.949\ \mathrm{mA/V}$（$V_{ov,p}=0.105$ V）。输出电阻为

$$
r_{o2}=\frac1{\lambda_nI_D}=\frac1{(0.105\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=190\ \mathrm{k\Omega},\qquad
r_{o4}=\frac1{\lambda_pI_D}=\frac1{(0.0625\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=320\ \mathrm{k\Omega}.
$$

### 第 2 步 — 跨导

输出接交流地时，尾节点对差模信号是虚地（virtual ground），$i_{d1}=-i_{d2}=g_{m1}v_i/2$。$M_3$ 和 $M_4$ 把 $i_{d1}$ 镜像到输出端。因此输出端从电流镜得到 $i_{d1}$，而 $M_2$ 少吸收 $g_{m1}v_i/2$，合计为

$$
i_{o,sc}=\frac{g_{m1}v_i}2+\frac{g_{m1}v_i}2=g_{m1}v_i,\qquad G_m=g_{m1}=0.913\ \mathrm{mA/V}.
$$

MOS 电流镜没有基极电流误差，除微小的 $r_o$ 效应外其增益为 1。抬高 $M_1$ 的栅压会使推入输出端的电流增大，所以增益为正。

### 第 3 步 — 输出电阻

流入输出端的测试电流直接看到 $r_{o4}$，因为 $M_4$ 的栅极接在低阻抗的二极管节点上（$\approx1/g_{m3}$）。流入 $M_2$ 漏极的部分看到约 $2r_{o2}$，因为 $M_1$ 源极处的 $1/g_{m1}$ 为 $M_2$ 提供源极负反馈。这部分电流经 $M_1$ 流入 $M_3$，再由 $M_4$ 镜像回输出端，使其作用加倍，所以 $M_2$ 支路贡献 $r_{o2}$：

$$
R_o\approx r_{o2}\,\|\,r_{o4}=190\ \mathrm{k\Omega}\,\|\,320\ \mathrm{k\Omega}=119\ \mathrm{k\Omega}.
$$

### 第 4 步 — 电压增益

$$
\frac{v_o}{v_i}=G_mR_o=(0.913\ \mathrm{mA/V})(119\ \mathrm{k\Omega})=+109 .
$$

对小信号电路做完整的节点分析，得 $R_o=119.5\ \mathrm{k\Omega}$，$v_o/v_i=108.6$，验证了上述近似。
