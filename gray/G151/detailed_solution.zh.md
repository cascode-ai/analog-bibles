# 详细步骤 - G151

电源变化以增益 $A^+$ 传到输出端；除以 $A_{dm}$ 后，它变成一个大小为 $v_{dd}/PSRR^+$ 的等效差模输入源。在运放周围闭合跟随器环路，再求输出。

### 第 1 步 — 把电源纹波看作等效输入源

由叠加原理，运放输出为

$$
v_o=A_{dm}v_{id}+A^+v_{dd}=A_{dm}\left(v_{id}+\frac{v_{dd}}{PSRR^+}\right),\qquad PSRR^+=\frac{A_{dm}}{A^+}.
$$

电源纹波相当于一个与差模输入串联、大小为 $v_{dd}/PSRR^+$ 的源。

### 第 2 步 — 电压跟随器

跟随器把输出反馈到反相输入端，因此 $v_s=0$ 时 $v_{id}=v_s-v_o=-v_o$：

$$
v_o=A_{dm}\left(-v_o+\frac{v_{dd}}{PSRR^+}\right)\ \Rightarrow\ v_o=\frac{A_{dm}}{1+A_{dm}}\cdot\frac{v_{dd}}{PSRR^+}\approx\frac{v_{dd}}{PSRR^+}\quad(A_{dm}\gg1).
$$

### 第 3 步 — 数值

$$
\hat v_o\approx\frac{20\ \mathrm{mV}}{10}=2\ \mathrm{mV}.
$$

这是峰值。跟随器为单位闭环增益，所以 2 mV 的等效输入源几乎原样出现在输出端。$PSRR^+$ 只有 10（20 dB），电源纹波的十分之一会直接传到输出。
