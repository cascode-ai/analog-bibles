# 详细步骤 - G122

$R_L\to\infty$ 时 $M_1$ 始终流过 $I_Q$，过驱动电压恒定，增益偏离 1 只来自体效应。写出传输特性 $V_i(V_o)$，求出 $V_i=0$ 时的静态输出，并在该点求导。

### 第 1 步 — 传输特性

$M_1$ 处于饱和区（漏极接 $V_{DD}$）；忽略沟道长度调制，由 $I_{d1}=\tfrac12k'(W/L)_1V_{ov1}^2=I_Q$ 得

$$
V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

衬底接 $-V_{DD}$，故 $V_{SB}=V_o+V_{DD}$，$V_i=V_o+V_t+V_{ov1}$ 成为

$$
V_i=V_o+V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{DD}+V_o}-\sqrt{2\phi_f}\right)+V_{ov1}.
$$

### 第 2 步 — 静态输出

在 $V_i=0$ 处，取 $2\phi_f+V_{DD}=3.1$ V、$\sqrt{2\phi_f}=0.7746\ \mathrm V^{1/2}$：

$$
V_o+0.5\sqrt{V_o+3.1}=0-0.7-0.1+0.5(0.7746)=-0.4127\ \mathrm V.
$$

令 $x=\sqrt{V_o+3.1}$，即 $V_o=x^2-3.1$：

$$
x^2+0.5x-2.6873=0\ \Rightarrow\ x=\frac{-0.5+\sqrt{0.25+4(2.6873)}}{2}=1.4083\ \mathrm V^{1/2},\qquad V_o=x^2-3.1=-1.117\ \mathrm V.
$$

因此 $V_{SB}=1.383$ V，$2\phi_f+V_{SB}=1.983$ V，$V_t=0.7+0.5(1.4083-0.7746)=1.017$ V；验算 $V_i-V_o=1.117\ \mathrm V=V_t+V_{ov1}$ 成立。

### 第 3 步 — 静态工作点处的增量斜率

在 $V_{ov1}$ 恒定条件下求导，

$$
\frac{dV_i}{dV_o}=1+\chi,\qquad \chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{g_{mb}}{g_m},\qquad A_{vQ}=\frac1{1+\chi}.
$$

在静态工作点，

$$
\chi=\frac{0.5\ \mathrm V^{1/2}}{2\sqrt{1.983\ \mathrm V}}=0.1775,\qquad A_{vQ}=\frac1{1.1775}=0.849.
$$

静态斜率 $A_{vQ}\approx0.849$，对应 $V_o\approx-1.117$ V。若改在 $V_o=0$ 处计算 $\chi$（得 0.875），就忽略了实际 1.38 V 的源-衬底偏压。
