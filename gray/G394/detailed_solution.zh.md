# 详细步骤 - G394

$V_{cms}$ 节点是一个单一的 RC 节点：二极管连接的 $M_{23}$ 决定其电阻，$C_{gs23}$ 与固定的 90 fF 电容决定其电容。先求 $M_{23}$ 的偏置电流，再由给定的过驱动电压确定其尺寸，然后计算 $C_{gs23}$ 和极点 $-1/(RC)$。

### 第 1 步 — $M_{23}$ 的偏置电流与跨导

$V_{oc}=V_{CM}$ 时 PMOS 差分对平衡，尾电流平分，与 $M_{21}$ 串联的 $M_{23}$ 流过其中一半：

$$
I_{D23}=\frac{|I_{D25}|}{2}=\frac{0.1\ \mathrm{mA}}{2}=0.05\ \mathrm{mA}.
$$

二极管连接的器件工作在饱和区（$V_{DS}=V_{GS}>V_{ov}$），由平方律 $I_D=\tfrac12k'_n(W/L)V_{ov}^2$ 得

$$
g_{m23}=\frac{2I_{D23}}{V_{ov23}}=\frac{2(0.05\ \mathrm{mA})}{0.2\ \mathrm{V}}=0.5\ \mathrm{mA/V}.
$$

### 第 2 步 — $V_{cms}$ 节点的电阻

加在二极管连接的 $M_{23}$ 漏极上的测试电压同时就是其 $v_{gs}$，因此该器件呈现 $1/g_{m23}\parallel r_{o23}$；其上方 $M_{21}$ 的漏极为高阻节点。由于 $r_o\gg1/g_m$，

$$
R\approx\frac1{g_{m23}}=2\ \mathrm{k\Omega}.
$$

### 第 3 步 — $M_{23}$ 的尺寸与节点电容

$$
\left(\frac WL\right)_{23}=\frac{2I_{D23}}{k'_nV_{ov23}^2}
=\frac{2(0.05\ \mathrm{mA})}{(127\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=19.7,
\qquad W_{23}=19.7\times0.8\ \mu\mathrm m=15.7\ \mu\mathrm m.
$$

饱和区 $C_{gs}=\tfrac23WLC_{ox}$，故

$$
C_{gs23}=\tfrac23(15.7\ \mu\mathrm m)(0.8\ \mu\mathrm m)(2.30\ \mathrm{fF/\mu m^2})=19.3\ \mathrm{fF},
\qquad C=C_{gs23}+90\ \mathrm{fF}=109\ \mathrm{fF}.
$$

90 fF 电容由题目给定，不随偏置电流变化。

### 第 4 步 — 极点频率

单一 RC 节点给出一个实极点 $p=-1/(RC)$：

$$
p=-\frac{g_{m23}}{C}=-\frac{0.5\ \mathrm{mA/V}}{109.3\ \mathrm{fF}}=-4.6\times10^{9}\ \mathrm{rad/s},
\qquad \frac{|p|}{2\pi}=0.73\ \mathrm{GHz}.
$$
