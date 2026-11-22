# 详细步骤 - A056

由版图读出漏、源扩散区的尺寸；晶体管截止，漏极、源极和衬底均接地，因此在零偏下计算底面加侧壁的结电容。

### 第 1 步 — 每个扩散区的面积和周长

由 [图 1]（1 µm 网格）可知，n⁺ 有源区为 20 µm × 22 µm，横跨其上的多晶硅栅宽 2 µm。因此漏区和源区各为

$$
\frac{20\ \mu\mathrm m-2\ \mu\mathrm m}{2}\times22\ \mu\mathrm m=9\ \mu\mathrm m\times22\ \mu\mathrm m,
$$

$$
A=(9\ \mu\mathrm m)(22\ \mu\mathrm m)=198\ \mu\mathrm m^2,\qquad P=2(9\ \mu\mathrm m+22\ \mu\mathrm m)=62\ \mu\mathrm m,
$$

按题目要求，周长计入包括栅侧边在内的全部四条边。版图对称，因此 $C_{BD}=C_{BS}$。

### 第 2 步 — 零偏结电容

每个 n⁺/p 型衬底结都有底面（面积）部分和侧壁（周长）部分，二者均为耗尽层电容：

$$
C_{BX}=\frac{\mathrm{CJ}\cdot A}{(1+|V_{BX}|/\mathrm{PB})^{\mathrm{MJ}}}+\frac{\mathrm{CJSW}\cdot P}{(1+|V_{BX}|/\mathrm{PB})^{\mathrm{MJSW}}} .
$$

漏极、源极和衬底均接地，$V_{BD}=V_{BS}=0$，两个分母都等于 1，不需要 PB、MJ 和 MJSW：

$$
\begin{aligned}
C_{BD}=C_{BS}&=\mathrm{CJ}\cdot A+\mathrm{CJSW}\cdot P\\
&=(770\times10^{-6}\ \mathrm{F/m^2})(198\times10^{-12}\ \mathrm{m^2})+(380\times10^{-12}\ \mathrm{F/m})(62\times10^{-6}\ \mathrm m)\\
&=152.5\ \mathrm{fF}+23.6\ \mathrm{fF}=176\ \mathrm{fF}.
\end{aligned}
$$

对这样大的扩散区，底面项占主导（占总值的 87%）。晶体管截止并不改变这些数值：结电容只取决于结偏压，这里为零。
