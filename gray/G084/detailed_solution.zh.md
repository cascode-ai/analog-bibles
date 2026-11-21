# 详细步骤 - G084

先由负载求偏置电流。$M_2$ 的 $V_{GS2}=0$，所以它的电流只取决于其阈值电压；由于其源极位于 1 V 的输出端，体效应抬高了这一阈值。然后由同一电流求出 $g_{m1}$，并建立输出节点的小信号模型。由于 $v_{gs2}=0$，负载只贡献其体跨导（body transconductance）和 $r_{o2}$，增益等于 $-g_{m1}$ 乘以输出端的总电阻。

### 第 1 步 — 负载器件 $M_2$：阈值电压与偏置电流

$M_2$ 的源极就是输出端，所以 $V_{SB2}=V_O=1$ V：

$$
V_{t2}=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{SB}}-\sqrt{2\phi_f}\right)=-1\ \mathrm V+(0.28\ \mathrm V^{1/2})\left(\sqrt{1.66\ \mathrm V}-\sqrt{0.66\ \mathrm V}\right)=-0.867\ \mathrm V .
$$

由于 $V_{GS2}=0$，过驱动电压为 $V_{ov2}=0-V_{t2}=0.867$ V。$V_{DS2}=V_{DD}-V_O=2\ \mathrm V>V_{ov2}$，所以 $M_2$ 处于饱和区，

$$
I_D=\frac{k'}2\frac W{L_{\text{eff}}}V_{ov2}^2=\frac{194\ \mu\mathrm{A/V^2}}2\cdot\frac{10}{0.82}\cdot(0.867\ \mathrm V)^2=0.889\ \mathrm{mA}.
$$

偏置计算中略去因子 $1+\lambda V_{DS}$；它使电流增大约 5 %，使增益变化约 1 %。

### 第 2 步 — 驱动管 $M_1$：过驱动电压与跨导

$M_1$ 流过同样的电流，其源极和衬底都接地，所以 $V_{t1}=0.6$ V。由 $W/L_{\text{eff}}=100/0.82=121.95$，

$$
V_{ov1}=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(0.889\ \mathrm{mA})}{(194\ \mu\mathrm{A/V^2})(121.95)}}=0.274\ \mathrm V .
$$

$V_{DS1}=1\ \mathrm V>V_{ov1}$，所以 $M_1$ 处于饱和区（输入直流电平为 $V_{t1}+V_{ov1}=0.874$ V），且

$$
g_{m1}=\frac{2I_D}{V_{ov1}}=\frac{2(0.889\ \mathrm{mA})}{0.274\ \mathrm V}=6.48\ \mathrm{mA/V}.
$$

### 第 3 步 — 负载的小信号参数

$$
g_{m2}=\frac{2I_D}{V_{ov2}}=2.05\ \mathrm{mA/V},\qquad
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB2}}}=\frac{0.28}{2\sqrt{1.66}}=0.109,\qquad
g_{mb2}=\chi g_{m2}=0.223\ \mathrm{mA/V},
$$

$$
r_{o1}=r_{o2}=\frac1{\lambda I_D}=\frac1{(0.0244\ \mathrm{V^{-1}})(0.889\ \mathrm{mA})}=46.1\ \mathrm{k\Omega}.
$$

### 第 4 步 — 输出节点与增益

$M_2$ 的栅极与源极相连，所以 $v_{gs2}=0$，$g_{m2}$ 受控源不流过电流。它的漏极接 $V_{DD}$，为交流地，所以 $r_{o2}$ 从输出端接到地。衬底接地而源极是输出端，所以 $v_{bs2}=-v_o$。于是体效应受控源向输出端注入 $g_{mb2}v_{bs2}=-g_{mb2}v_o$，相当于一个对地电导 $g_{mb2}$。因此输出节点上有 $M_1$ 下拉的 $g_{m1}v_i$，以及三个对地电阻：$r_{o1}$、$r_{o2}$ 和 $1/g_{mb2}$。

<!-- diagram: diagram-01.cir -->

在输出端列 KCL，得

$$
g_{m1}v_i+\left(\frac1{r_{o1}}+\frac1{r_{o2}}+g_{mb2}\right)v_o=0
\quad\Rightarrow\quad
\frac{v_o}{v_i}=-g_{m1}\left(r_{o1}\,\|\,r_{o2}\,\|\,\frac1{g_{mb2}}\right).
$$

由 $1/g_{mb2}=4.49\ \mathrm{k\Omega}$ 和 $r_{o1}\|r_{o2}=23.1\ \mathrm{k\Omega}$，负载为 $3.76\ \mathrm{k\Omega}$：

$$
\frac{v_o}{v_i}=-(6.48\ \mathrm{mA/V})(3.76\ \mathrm{k\Omega})=-24.4 .
$$

增益由体效应决定：不计 $r_o$ 时为 $-g_{m1}/g_{mb2}=-29$，两个 $r_o$ 使其降到 $-24$。若在偏置电流中计入 $1+\lambda V_{DS}$，增益为 $-24.1$。
