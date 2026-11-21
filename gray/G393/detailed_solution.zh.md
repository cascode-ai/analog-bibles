# 详细步骤 - G393

$V_{cms}$ 节点是一个单一的 RC 节点：二极管连接的 $M_{23}$ 决定其电阻，$C_{gs23}$ 与固定的 90 fF 电容决定其电容。先求 $M_{23}$ 的偏置电流，再由给定的过驱动电压确定其尺寸，然后计算 $C_{gs23}$ 和极点 $-1/(RC)$。

### 第 1 步 — $M_{23}$ 的偏置电流与跨导

$V_{oc}=V_{CM}$ 时 PMOS 差分对平衡，尾电流 $|I_{D25}|$ 平分，与 $M_{21}$ 串联的 $M_{23}$ 流过其中一半：

$$
I_{D23}=\frac{|I_{D25}|}{2}=\frac{0.4\ \mathrm{mA}}{2}=0.2\ \mathrm{mA}.
$$

二极管连接的 MOSFET 工作在饱和区（$V_{DS}=V_{GS}>V_{ov}$），平方律 $I_D=\tfrac12k'_n(W/L)V_{ov}^2$ 适用，其跨导为

$$
g_{m23}=\frac{2I_{D23}}{V_{ov23}}=\frac{2(0.2\ \mathrm{mA})}{0.2\ \mathrm{V}}=2\ \mathrm{mA/V}.
$$

### 第 2 步 — $V_{cms}$ 节点的电阻

从二极管连接器件的漏极看进去，测试电压 $v_x$ 即为 $v_{gs}$，吸取电流 $g_{m23}v_x$ 加 $v_x/r_{o23}$。由于 $r_o\gg1/g_m$，而从该节点向上看 $M_{21}$ 的漏极是高阻（类似电流源）节点，

$$
R=\frac1{g_{m23}}\parallel r_{o23}\approx\frac1{g_{m23}}=500\ \Omega.
$$

### 第 3 步 — $M_{23}$ 的尺寸及其栅源电容

由平方律和给定的过驱动电压，

$$
\left(\frac WL\right)_{23}=\frac{2I_{D23}}{k'_nV_{ov23}^2}
=\frac{2(0.2\ \mathrm{mA})}{(127\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=78.7,
\qquad W_{23}=78.7\times0.8\ \mu\mathrm m=63.0\ \mu\mathrm m.
$$

饱和区栅源电容为 $C_{gs}=\tfrac23WLC_{ox}$：

$$
C_{gs23}=\tfrac23(63.0\ \mu\mathrm m)(0.8\ \mu\mathrm m)(2.30\ \mathrm{fF/\mu m^2})=77.3\ \mathrm{fF}.
$$

两个电容在该节点并联：

$$
C=C_{gs23}+90\ \mathrm{fF}=167\ \mathrm{fF}.
$$

### 第 4 步 — 极点频率

对地电阻为 $R$、电容为 $C$ 的单一节点给出一个实极点 $p=-1/(RC)$：

$$
p=-\frac{g_{m23}}{C}=-\frac{2\ \mathrm{mA/V}}{167.3\ \mathrm{fF}}=-1.20\times10^{10}\ \mathrm{rad/s},
\qquad \frac{|p|}{2\pi}=1.9\ \mathrm{GHz}.
$$

若计入 $M_{23}$ 的栅交叠电容（数 fF），$|p|$ 只略微降低。
