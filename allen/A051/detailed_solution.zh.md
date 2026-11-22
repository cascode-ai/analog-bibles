# 详细步骤 - A051

在转折点 $v_{DS}(\text{sat})=v_{GS}-V_T$ 处分别计算两式，找出二者相差的因子，再改写沟道长度调制项，使其在转折点处等于 1，同时保持转折点以上的斜率不变。

### 第 1 步 — 转折点处的失配大小

记 $V_{ov}=v_{GS}-V_T$，则 $v_{DS}(\text{sat})=V_{ov}$。非饱和区方程在其上限处给出

$$
i_D\big|_{\text{nonsat}}=K'\frac WL\Big[V_{ov}-\frac{V_{ov}}{2}\Big]V_{ov}=\frac{K'W}{2L}V_{ov}^2 ,
$$

而饱和区方程在其下限处给出

$$
i_D\big|_{\text{sat}}=\frac{K'W}{2L}V_{ov}^2\big(1+\lambda V_{ov}\big).
$$

因此电流在边界处跳变，相对跳变量为 $\lambda v_{DS}(\text{sat})$；例如 $\lambda=0.04\ \mathrm{V^{-1}}$、$v_{DS}(\text{sat})=1$ V 时为 4%。仿真器在边界附近迭代时遇到不连续的 $i_D(v_{DS})$，可能使牛顿–拉弗森（Newton–Raphson）迭代无法收敛。

### 第 2 步 — 从饱和点起算沟道长度调制

沟道长度调制因子只需描述夹断以后漏极电压引起的额外电流。将其改为从 $v_{DS}(\text{sat})$ 而不是从零起算：

$$
i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2\Big[1+\lambda\big(v_{DS}-v_{DS}(\text{sat})\big)\Big],\qquad v_{DS}\ge v_{DS}(\text{sat})=v_{GS}-V_T .
$$

### 第 3 步 — 转折点处及其以上的校验

在 $v_{DS}=v_{DS}(\text{sat})$ 处方括号等于 1，因此

$$
i_D=\frac{K'W}{2L}V_{ov}^2=i_D\big|_{\text{nonsat}},
$$

两式相接。转折点以上输出电导不变：

$$
\frac{\partial i_D}{\partial v_{DS}}=\lambda\frac{K'W}{2L}(v_{GS}-V_T)^2 ,
$$

因此保留了原饱和区方程的沟道长度调制特性。这里只使电流连续：斜率仍不连续，在非饱和区方程末端为零，在饱和区方程起点为 $\lambda\,K'W V_{ov}^2/(2L)$。

一种等价的改法是用原因子在转折点处的值进行归一化：

$$
i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2\,\frac{1+\lambda v_{DS}}{1+\lambda v_{DS}(\text{sat})},
$$

它在 $v_{DS}=v_{DS}(\text{sat})$ 处同样等于 $K'WV_{ov}^2/(2L)$；转折点以上的斜率减小为原来的 $1/(1+\lambda V_{ov})$。
