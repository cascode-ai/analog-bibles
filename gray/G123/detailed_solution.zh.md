# 详细步骤 - G123

$R_L\to\infty$ 时 $M_1$ 始终流过 $I_Q$，过驱动电压恒定，传输特性的斜率仅由体效应决定。写出 $V_i(V_o)$，解出输入负峰处的 $V_o$，并在该点求导。

### 第 1 步 — 传输特性

$M_1$ 处于饱和区（漏极接 $V_{DD}$）；忽略沟道长度调制，由 $I_{d1}=\tfrac12k'(W/L)_1V_{ov1}^2=I_Q$ 得

$$
V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

衬底接 $-V_{DD}$，$V_{SB}=V_o+V_{DD}$，$V_i=V_o+V_t+V_{ov1}$ 成为

$$
V_i=V_o+V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{DD}+V_o}-\sqrt{2\phi_f}\right)+V_{ov1}.
$$

### 第 2 步 — 输入负峰处的输出

在 $V_i=V_I-\hat v_i=-0.5$ V 处，取 $2\phi_f+V_{DD}=3.1$ V、$\sqrt{2\phi_f}=0.7746\ \mathrm V^{1/2}$：

$$
V_o+0.5\sqrt{V_o+3.1}=-0.5-0.7-0.1+0.5(0.7746)=-0.9127\ \mathrm V.
$$

令 $x=\sqrt{V_o+3.1}$：

$$
x^2+0.5x-2.1873=0\ \Rightarrow\ x=\frac{-0.5+\sqrt{0.25+4(2.1873)}}{2}=1.2499\ \mathrm V^{1/2},\qquad V_o=x^2-3.1=-1.538\ \mathrm V.
$$

此时 $V_{SB}=0.962$ V，$V_t=0.7+0.5(1.2499-0.7746)=0.938$ V；验算 $V_i-V_o=1.038\ \mathrm V=V_t+V_{ov1}$ 成立。

### 第 3 步 — 增量斜率

在 $V_{ov1}$ 恒定条件下求导，

$$
A_v^-=\frac{dV_o}{dV_i}=\frac1{1+\chi},\qquad \chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.5\ \mathrm V^{1/2}}{2(1.2499\ \mathrm V^{1/2})}=0.200,
$$
$$
A_v^-=\frac1{1.200}=0.833.
$$

因此在 $V_i=-0.5$ V（$V_o\approx-1.538$ V）处 $A_v^-\approx0.833$。它低于静态斜率（约 0.849），因为源-衬底电压较小，$\sqrt{2\phi_f+V_{SB}}$ 较小，体效应相对更强。
