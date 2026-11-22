# 详细步骤 - G241

写出输入对管的漏极电流，求 $i_{d1}$ 在节点 X 产生的电压，经 $M_4$ 镜像，再在短路的输出节点对电流求和。电容 $C_x$ 只影响镜像支路，因而产生一对零极点。

### 第 1 步 — 输入对管的漏极电流

输入为纯差模时节点 Y 为交流地，故 $v_{gs1}=v_1=v_{id}/2$，$v_{gs2}=v_2=-v_{id}/2$。由于 $g_{m1}=g_{m2}$，按 [图 2] 中的电流方向（均向下流向 Y）：

$$
i_{d1}=g_{m1}\frac{v_{id}}2,\qquad i_{d2}=-g_{m1}\frac{v_{id}}2 .
$$

### 第 2 步 — 节点 X 的电压与镜像电流

$i_{d1}$ 从节点 X 向下流出，必须由交流地经二极管连接的 $M_3$（电导 $g_{m3}$）与 $C_x$ 的并联提供。在 X 列 KCL：

$$
(0-v_X)(g_{m3}+sC_x)=i_{d1}\;\Rightarrow\;v_X=-\frac{i_{d1}}{g_{m3}+sC_x}.
$$

在 [图 2] 中 $v_{gs4}$ 就是 X 相对交流地的电压，故在 $g_{m4}=g_{m3}$ 时：

$$
i_{d4}=g_{m4}v_{gs4}=-i_{d1}\,\frac{g_{m3}}{g_{m3}+sC_x}=-\frac{i_{d1}}{1+sC_x/g_{m3}} .
$$

低频时电流镜复制出 $i_{d1}$；高频时 $C_x$ 把信号电流从 $1/g_{m3}$ 旁路掉，$v_X\to0$。

### 第 3 步 — 输出电流与 $G_m(s)$

$v_o=0$ 时，从输出节点流出的电流为 $i_{d4}$（向上）、$i_{d2}$（向下）和 $i_o$，故 $i_o=-i_{d2}-i_{d4}$：

$$
i_o=\frac{g_{m1}v_{id}}2\left[1+\frac1{1+sC_x/g_{m3}}\right]
=\frac{g_{m1}v_{id}}2\cdot\frac{2+sC_x/g_{m3}}{1+sC_x/g_{m3}} .
$$

$$
G_m(s)=\frac{i_o}{v_{id}}=g_{m1}\,\frac{1+sC_x/(2g_{m3})}{1+sC_x/g_{m3}} .
$$

分母在 $p=-g_{m3}/C_x$ 处为零，分子在 $z=-2g_{m3}/C_x$ 处为零，与题目要求一致：这是一对相距一个倍频程的左半平面零极点，极点在较低频率处。

### 第 4 步 — 幅度与相位

记 $\omega_p=g_{m3}/C_x$，

$$
|G_m(j\omega)|=g_{m1}\sqrt{\frac{1+(\omega/2\omega_p)^2}{1+(\omega/\omega_p)^2}},\qquad
\angle G_m(j\omega)=\arctan\frac{\omega}{2\omega_p}-\arctan\frac{\omega}{\omega_p}.
$$

- 幅度：$\omega\ll\omega_p$ 时为 $g_{m1}$；在 $\omega_p$ 与 $2\omega_p$ 之间下降，$\omega\gg2\omega_p$ 时趋于平坦的 $g_{m1}/2$，总共下降 6 dB。高频时只有 $M_2$ 的电流到达输出，因为镜像那一半被 $C_x$ 短路。
- 相位：两端均为 0°，中间出现滞后。令相位对频率的导数为零，得到最大滞后出现在零极点的几何平均处 $\omega=\sqrt2\,\omega_p$：

$$
\angle G_m=\arctan\frac{1}{\sqrt2}-\arctan\sqrt2=35.3^\circ-54.7^\circ=-19.5^\circ,
$$

此时 $|G_m|=g_{m1}/\sqrt2$。

由于 $C_x\approx C_{gs3}+C_{gs4}=2C_{gs3}$，$\omega_p\approx g_{m3}/(2C_{gs3})\approx\omega_{T3}/2$；因此这对零极点只在负载管的特征频率附近才起作用。
