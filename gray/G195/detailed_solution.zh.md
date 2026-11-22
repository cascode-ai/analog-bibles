# 详细步骤 - G195

用 $g_m$、$C_{gs}$ 和 $C_{gd}$ 为晶体管建模（$\gamma=0$ 去掉了 $g_{mb}$，$\lambda=0$ 去掉了 $r_o$，$C_{sb}=C_{db}=0$）。栅极和漏极都处于交流地，只有源极节点有信号电压；在该节点列 KCL 即可直接得到电流增益。

### 第 1 步 — 器件参数

取 $W/L_{\text{eff}}=62.5$，按平方律，

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

### 第 2 步 — 电流增益

栅极接地，$v_{gs}=-v_s$。流入源极节点的电流 $i_i$ 加上从漏极流向源极的沟道电流 $g_mv_{gs}$，经 $C_{gs}$ 流向接地的栅极：

$$
i_i+g_mv_{gs}=sC_{gs}v_s=-sC_{gs}v_{gs}
\;\Rightarrow\;
i_i=-v_{gs}(g_m+sC_{gs}).
$$

漏极向短路负载输送 $i_o=-g_mv_{gs}$，故

$$
\frac{i_o}{i_i}=\frac{g_m}{g_m+sC_{gs}}=\frac1{1+sC_{gs}/g_m}.
$$

$C_{gd}$ 连接栅极与漏极，二者都处于交流地，因此其中没有电流，也不存在密勒效应。

### 第 3 步 — −3-dB 频率

低频增益恰为 1（没有栅极电流，不同于双极型的 $\alpha_0$）。单极点给出

$$
\omega_{-3\text{dB}}=\frac{g_m}{C_{gs}}=\frac{1.94\ \mathrm{mA/V}}{74.7\ \mathrm{fF}}=2.59\times10^{10}\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}=\frac{\omega_{-3\text{dB}}}{2\pi}=4.1\ \mathrm{GHz}.
$$

该值略高于器件的 $f_T=g_m/[2\pi(C_{gs}+C_{gd})]=3.5$ GHz，因为在这种接法中 $C_{gd}$ 不起作用。
