# 详细步骤 - A307

该运放构成同相放大器，其反馈网络 $R$–$C$ 是低通分压器：直流时电容开路，输出全部反馈；高频时电容把反相输入端短路到地，反馈消失。用单极点运放模型写出闭环增益，求其零点和极点，再读出渐近线。

### 第 1 步 — 闭环传递函数

反相输入端位于 $R$–$C$ 分压器的输出，$v_-=v_{OUT}/(1+sRC)$。由 $v_{OUT}=A(s)(v_{IN}-v_-)$：

$$
\frac{v_{OUT}}{v_{IN}}=\frac{A(s)(1+sRC)}{1+sRC+A(s)} .
$$

代入 $A(s)=A_v(0)\omega_a/(s+\omega_a)$ 及 $GB=A_v(0)\omega_a$：

$$
\frac{v_{OUT}}{v_{IN}}=\frac{GB\,(s+1/RC)}{s^2+s(\omega_a+1/RC)+(\omega_a+GB)/RC} .
$$

### 第 2 步 — 渐近线

- 直流时增益为 $A_v(0)/(1+A_v(0))\approx1$，即 0 dB：反馈完全。
- 位于 $s=-1/RC$ 的零点使增益在 $1/RC$ 以上以 +20 dB/十倍频程上升。
- 当 $1/RC\ll\omega_a$ 且 $(\omega_a+GB)/RC\ll\omega_a^2$ 时，分母的两个根相距很远：

$$
\omega_{p1}\approx\frac{(\omega_a+GB)/RC}{\omega_a}=\frac{1+A_v(0)}{RC}\approx\frac{A_v(0)}{RC},\qquad \omega_{p2}\approx\omega_a .
$$

在 $\omega_{p1}$ 处上升渐近线 $\omega RC$ 等于 $A_v(0)$，因此上升恰好在与开环增益相遇处停止。高于 $\omega_{p1}$ 时环路增益 $A/(1+sRC)$ 小于 1，响应等于开环 $A(s)$：在 $\omega_a$ 以下保持 $A_v(0)$，之后以 −20 dB/十倍频程下降，在 $GB$ 处穿过 0 dB。

### 第 3 步 — 数值

$$
RC=(10\ \mathrm{M\Omega})(10\ \mu\mathrm F)=100\ \mathrm s,\qquad \frac1{RC}=0.01\ \mathrm{rad/s},\qquad
\omega_a=\frac{GB}{A_v(0)}=\frac{2\pi(10^6\ \mathrm{Hz})}{4000}=1571\ \mathrm{rad/s}.
$$

分母 $s^2+1570.8\,s+6.28\times10^4$ 的根为 $-41.1$ rad/s 和 $-1530$ rad/s，因此

$$
\frac{v_{OUT}}{v_{IN}}=\frac{2\pi\times10^6\,(s+0.01)}{(s+41.1)(s+1530)} .
$$

### 第 4 步 — 草图

幅值在 0.01 rad/s（1.6 mHz）以下为 0 dB，以 +20 dB/十倍频程上升，在 41 rad/s（6.5 Hz）达到 72 dB（$A_v(0)=4000$），保持平坦到 1.53 krad/s（243 Hz），然后以 −20 dB/十倍频程下降，在 $GB=6.28$ Mrad/s（1 MHz）处穿过 0 dB。

![闭环幅值（dB）随 ω 从 1e-4 到 1e7 rad/s 变化：0 dB，从 0.01 rad/s 起以 +20 dB/十倍频程上升到 41 至 1530 rad/s 之间 72 dB 的平台，然后以 −20 dB/十倍频程下降，在 6.28 Mrad/s 处到 0 dB](/q/A307/solution-curves.zh.svg)
