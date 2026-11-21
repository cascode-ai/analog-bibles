# 详细步骤 - A440

运放只有一个极点，因此闭环 DAC 是一阶系统。由环路增益（计入梯形网络的源电阻）求出闭环极点，再求最坏情况阶跃建立到 0.5 LSB 以内所需的时间。

### 第 1 步 — 闭环传递函数

从求和节点看，梯形网络是诺顿电流源 $i_\Sigma=I\sum b_i2^{-i}$ 与 $R_S=R+(2R\parallel2R)=2R$ 并联；反馈电阻为 $R$。在反相输入端列 KCL 并利用 $v_-=-v_{OUT}/A_{vd}(s)$，与直流情形完全相同，只是增益随频率变化：

$$
v_{OUT}(s)=\frac{Ri_\Sigma}{1+\dfrac{1}{A_{vd}(s)\beta}},\qquad
\beta=\frac{R_S}{R_S+R}=\frac{2}{3}.
$$

### 第 2 步 — 闭环极点

代入 $A_{vd}(s)=10^6/(s+100)$：

$$
\frac{v_{OUT}}{Ri_\Sigma}=\frac{\beta\,10^6}{s+100+\beta\,10^6}
\quad\Longrightarrow\quad
\omega_H=100+\tfrac23\times10^6=6.668\times10^5\ \mathrm{rad/s}.
$$

它等于 $100(1+A_0\beta)$，其中 $A_0=10^4$，实际上就是 $\beta\cdot GB$，$GB=10^6$ rad/s。只有一个极点且未给出压摆率限制，阶跃按指数规律建立，时间常数为 $1/\omega_H=1.50\ \mu$s。

### 第 3 步 — 最坏情况建立判据

最大阶跃为从 0 到全 1，$\Delta v=RI(1-2^{-10})=1023\,\mathrm{LSB}$，其中 $1\,\mathrm{LSB}=RI/2^{10}$。经过时间 $T$ 后的剩余误差为 $\Delta v\,e^{-\omega_HT}$，要求不超过 0.5 LSB：

$$
1023\,e^{-\omega_HT}\le0.5
\quad\Longrightarrow\quad
T=\frac{\ln2046}{\omega_H}=\frac{7.624}{6.668\times10^5\ \mathrm{s^{-1}}}=11.43\ \mu\mathrm s .
$$

### 第 4 步 — 转换速率

$$
f=\frac1T=\frac{1}{11.43\ \mu\mathrm s}=87.5\times10^3\ \text{conversions/s}.
$$

若采用稍简单的界 $e^{-\omega_HT}\le2^{-(N+1)}$，得 $T=11.44\ \mu$s，即每秒 $87.4\times10^3$ 次转换，三位有效数字下结果相同。
