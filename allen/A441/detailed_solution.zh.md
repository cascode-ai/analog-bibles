# 详细步骤 - A441

只闭合 $b_0$ 时，电路是一个由幅度为 $V_{REF}$ 的阶跃驱动的反相放大器。运放只有一个极点，因此这是一阶系统；由反馈系数求出闭环极点，再取四倍时间常数。

### 第 1 步 — 运放所见的电路

断开的开关使 $R_2$–$R_4$ 悬空，它们没有电流，可以去掉。$t=0$ 时闭合 $b_0$，在 $R_1$ 上加阶跃 $V_{REF}u(t)$，其另一端为反相输入端；$R_0$ 为反馈电阻。理想情况下

$$
v_{OUT}(\infty)=-\frac{R_0}{R_1}V_{REF}=-\frac{V_{REF}}{2}.
$$

### 第 2 步 — 有限增益下的闭环响应

在反相输入端列 KCL，并利用 $v_-=-v_{OUT}/A_{vd}$（$V_{OS}=0$），得到反相放大器的标准结果

$$
\frac{v_{OUT}}{V_{REF}}=-\frac{R_0}{R_1}\cdot\frac{1}{1+\dfrac{1}{A_{vd}(s)\beta}},\qquad
\beta=\frac{R_1}{R_0+R_1}=\frac{2R_0}{3R_0}=\frac23 .
$$

代入 $A_{vd}(s)=10^6/(s+10)$：

$$
\frac{1}{1+\dfrac{s+10}{\beta\,10^6}}=\frac{\beta\,10^6}{s+10+\beta\,10^6},
\qquad
\omega_H=10+\tfrac23\times10^6=6.667\times10^5\ \mathrm{rad/s}.
$$

它等于 $10(1+A_0\beta)$，其中 $A_0=10^5$，即 $\beta\cdot GB$，$GB=10^6$ rad/s。

### 第 3 步 — 到达终值所需时间

阶跃响应为 $v_{OUT}(t)=v_{OUT}(\infty)\left(1-e^{-t/\tau}\right)$，其中

$$
\tau=\frac{1}{\omega_H}=\frac{1}{6.667\times10^5\ \mathrm{s^{-1}}}=1.50\ \mu\mathrm s .
$$

按四倍时间常数视为到达终值（输出与 $-V_{REF}/2$ 相差 $e^{-4}=1.8\%$ 以内），

$$
t=4\tau=4(1.50\ \mu\mathrm s)=6.0\ \mu\mathrm s .
$$
