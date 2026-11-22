# 详细步骤 - G127

用幂级数系数表示归一化增益误差的和与差，再与题给 $HD_2$、$HD_3$ 的小失真公式比较。

### 第 1 步 — 用系数表示增益误差

增量增益为 $A_v=dv_o/dv_i=a_1+2a_2v_i+3a_3v_i^2$，因此在 $v_i=\pm\hat v_i$ 和 $v_i=0$ 处

$$
A_v^\pm=a_1\pm2a_2\hat v_i+3a_3\hat v_i^2,\qquad A_{vQ}=a_1,
$$
$$
E^\pm=\frac{A_v^\pm-A_{vQ}}{A_{vQ}}=\pm2\frac{a_2}{a_1}\hat v_i+3\frac{a_3}{a_1}\hat v_i^2 .
$$

于是

$$
E^+-E^-=4\frac{a_2}{a_1}\hat v_i,\qquad E^++E^-=6\frac{a_3}{a_1}\hat v_i^2 .
$$

### 第 2 步 — 与谐波失真联系

题给小失真结果为 $HD_2\approx\tfrac12(a_2/a_1)\hat v_i$、$HD_3\approx\tfrac14(a_3/a_1)\hat v_i^2$。与第 1 步比较，$E^+-E^-=8\cdot\tfrac12(a_2/a_1)\hat v_i$，$E^++E^-=24\cdot\tfrac14(a_3/a_1)\hat v_i^2$，故

$$
HD_2\approx\frac{E^+-E^-}{8},\qquad HD_3\approx\frac{E^++E^-}{24}.
$$

增量增益在两个极端之间的不对称度量二次谐波，两端增益的共同变化度量三次谐波。符号遵循定义：两端增益都下降时（$a_3/a_1<0$，压缩型），$HD_3$ 为负。借助这些关系，只需传输特性上的三个斜率即可估计失真，无需做傅里叶分析。
