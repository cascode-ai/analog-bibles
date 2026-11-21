# 详细步骤 - G121

$R_L\to\infty$ 时 $M_1$ 始终流过 $I_Q$，过驱动电压恒定，唯一的非线性来自体效应：源-衬底电压随 $V_o$ 升高，$V_t$ 也随之升高。写出传输特性 $V_i(V_o)$，解出输入峰值处的 $V_o$，再求导。

### 第 1 步 — 传输特性

$M_1$ 处于饱和区（漏极接 $V_{DD}$），忽略沟道长度调制时

$$
I_{d1}=\frac{k'}{2}\left(\frac WL\right)_1V_{ov1}^2=I_Q\ \Rightarrow\ V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

衬底接 $-V_{DD}$，故 $V_{SB}=V_o+V_{DD}$；由 $V_i=V_o+V_{gs1}=V_o+V_t+V_{ov1}$ 得

$$
V_i=V_o+V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{DD}+V_o}-\sqrt{2\phi_f}\right)+V_{ov1}.
$$

### 第 2 步 — 输入正峰处的输出

在 $V_i=V_I+\hat v_i=0.5$ V 处代入数值（$2\phi_f+V_{DD}=3.1$ V，$\sqrt{2\phi_f}=0.7746\ \mathrm V^{1/2}$）：

$$
V_o+0.5\sqrt{V_o+3.1}=0.5-0.7-0.1+0.5(0.7746)=0.0873\ \mathrm V.
$$

令 $x=\sqrt{V_o+3.1}$，则 $V_o=x^2-3.1$：

$$
x^2+0.5x-3.1873=0\ \Rightarrow\ x=\frac{-0.5+\sqrt{0.25+4(3.1873)}}{2}=1.5527\ \mathrm V^{1/2},
$$
$$
V_o=x^2-3.1=-0.689\ \mathrm V.
$$

此时 $V_{SB}=1.811$ V，$V_t=0.7+0.5(1.5527-0.7746)=1.089$ V；验算 $V_i-V_o=1.189\ \mathrm V=V_t+V_{ov1}$。

### 第 3 步 — 增量斜率

在 $V_{ov1}$ 恒定的条件下对传输特性求导：

$$
\frac{dV_i}{dV_o}=1+\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=1+\chi,\qquad A_v^+=\frac{dV_o}{dV_i}=\frac1{1+\chi}.
$$

这就是常见的跟随器增益 $g_m/(g_m+g_{mb})$，其中 $\chi=g_{mb}/g_m$；因为 $R_L\to\infty$ 且无沟道长度调制，负载和 $r_o$ 都不出现。在峰值处，

$$
\chi=\frac{0.5\ \mathrm V^{1/2}}{2(1.5527\ \mathrm V^{1/2})}=0.161,\qquad A_v^+=\frac1{1.161}=0.861.
$$

因此在 $V_i=+0.5$ V（$V_o\approx-0.689$ V）处 $A_v^+\approx0.861$。斜率小于 1 完全由体效应造成；$V_o$ 升高时 $V_{SB}$ 增大、$\chi$ 减小，斜率随之缓慢增大。
