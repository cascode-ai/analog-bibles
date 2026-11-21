# 详细步骤 - G087

这是有源负载 MOS 差分对，现在两个电流镜器件都带有源极负反馈 $R_S=2\ \mathrm{k\Omega}$。把增益写成 $v_o/v_i=G_mR_o$。$M_3$ 与 $M_4$ 的负反馈相同，电流镜增益仍为 1，所以与前面一样 $G_m=g_{m1}$。$M_4$ 的输出电阻被放大 $1+g_{m4}R_S$ 倍，从而提高 $R_o$ 和增益。

### 第 1 步 — 偏置与小信号参数

每个晶体管都流过 $I_D=50\ \mu\mathrm A$。用有效沟道长度代入平方律，

$$
g_{m1}=\sqrt{2k'_n\frac{W_n}{L_{\text{eff},n}}I_D}=\sqrt{2(126.6\ \mu\mathrm{A/V^2})\frac{50}{0.76}(50\ \mu\mathrm A)}=0.913\ \mathrm{mA/V},
$$

$$
g_{m4}=\sqrt{2k'_p\frac{W_p}{L_{\text{eff},p}}I_D}=\sqrt{2(57.6\ \mu\mathrm{A/V^2})\frac{100}{0.64}(50\ \mu\mathrm A)}=0.949\ \mathrm{mA/V},
$$

$$
r_{o2}=\frac1{\lambda_nI_D}=190\ \mathrm{k\Omega},\qquad r_{o4}=\frac1{\lambda_pI_D}=320\ \mathrm{k\Omega}.
$$

每个电阻上只有 0.1 V 压降，PMOS 器件的偏置几乎不变。

### 第 2 步 — 带负反馈的负载管 $M_4$ 的输出电阻

$M_4$ 的栅极接在低阻抗的二极管节点上，源极经 $R_S$ 接电源（交流地）。对带源极负反馈的 MOS 管，流入漏极的测试电流 $i$ 使源极升高 $iR_S$，$v_{gs}$ 减小同样的量，从而使流过 $r_{o4}$ 的电流增加 $g_{m4}iR_S$：

$$
R_{o4}=r_{o4}(1+g_{m4}R_S)+R_S=(320\ \mathrm{k\Omega})\left[1+(0.949\ \mathrm{mA/V})(2\ \mathrm{k\Omega})\right]+2\ \mathrm{k\Omega}=929\ \mathrm{k\Omega}.
$$

### 第 3 步 — 整个电路的输出电阻

与不加负反馈的差分对一样，流入 $M_2$ 的测试电流经 $M_1$ 和 $M_3$ 再由 $M_4$ 镜像回来。因此 $M_2$ 一侧贡献 $r_{o2}$，与负载并联：

$$
R_o\approx r_{o2}\,\|\,R_{o4}=190\ \mathrm{k\Omega}\,\|\,929\ \mathrm{k\Omega}=158\ \mathrm{k\Omega}.
$$

### 第 4 步 — 电压增益

输出短路时，电流镜（由于 $M_3$、$M_4$ 的负反馈相同，增益为 1）送回 $i_{d1}=g_{m1}v_i/2$，同时 $M_2$ 少吸收 $g_{m1}v_i/2$，所以 $G_m=g_{m1}$：

$$
\frac{v_o}{v_i}=g_{m1}R_o=(0.913\ \mathrm{mA/V})(158\ \mathrm{k\Omega})=+144 .
$$

对小信号电路做完整的节点分析，得 $R_o=159\ \mathrm{k\Omega}$，$v_o/v_i=143.7$。不加源极电阻时数值为 119 kΩ 和 109。负反馈使 PMOS 的输出电阻增大近 3 倍，但此时 $r_{o2}=190\ \mathrm{k\Omega}$ 限制了 $R_o$，所以增益只提高约 32 %。
