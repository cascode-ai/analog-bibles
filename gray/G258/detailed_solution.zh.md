# 详细步骤 - G258

以 $Q_1$ 的受控源 $g_{m1}v_{be1}$ 为参考元件。在输入电流源置零（开路）时求其回归比，再求渐近增益和直接馈通，然后应用布莱克曼公式。与 MOS 版本不同，$r_{\pi1}$ 使基极到地始终有通路，因此即使输入开路 $R_F$ 中也有电流，而且每个基极都成为前一级集电极的负载。

### 第 1 步 — 小信号参数

$g_m=I_C/V_T=38.46$ mA/V，$r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$，$r_o=V_A/I_C=50\ \mathrm{k\Omega}$；记 $R=5\ \mathrm{k\Omega}\parallel r_o=4545\ \Omega$。$Q_1$ 和 $Q_2$ 的集电极以下一级基极为负载：

$$
R\parallel r_\pi=2425\ \Omega,\qquad g_m(2425\ \Omega)=93.3 .
$$

### 第 2 步 — 回归比

令 $i_i=0$，用测试电流 $i_t$ 代替 $g_{m1}v_{be1}$。前两级的增益幅值各为 93.3。$Q_3$ 驱动 $R$ 与对地支路 $R_F+r_{\pi1}$ 的并联，$r_{\pi1}$ 把 $v_o$ 的一部分送回 $Q_1$ 基极：

$$
R_3=R\parallel(R_F+r_\pi)=4545\ \Omega\parallel15.2\ \mathrm{k\Omega}=3499\ \Omega,\qquad
\frac{v_{be1}}{v_o}=\frac{r_\pi}{r_\pi+R_F}=0.342 .
$$

三次反相使返回的受控源值 $g_{m1}v_{be1}$ 与 $i_t$ 反向，故

$$
\mathcal R=(93.3)^2\,(g_mR_3)\,(0.342)=(8702)(134.6)(0.342)=4.01\times10^{5}.
$$

### 第 3 步 — 跨阻

当 $g_{m1}\to\infty$ 时 $v_{be1}\to0$，$r_{\pi1}$ 中没有电流，$i_i$ 全部流过 $R_F$：$A_\infty=-R_F=-10\ \mathrm{k\Omega}$。

当 $g_{m1}=0$ 时，$Q_2$ 和 $Q_3$ 得不到信号；$i_i$ 看到 $r_{\pi1}\parallel(R_F+R)=3831\ \Omega$，$R_F$ 与 $R$ 把该电压分压到输出端：

$$
d=3831\ \Omega\times\frac{4545\ \Omega}{14{,}545\ \Omega}=1197\ \Omega .
$$

$$
\frac{v_o}{i_i}=(-10\ \mathrm{k\Omega})\frac{\mathcal R}{1+\mathcal R}+\frac{1197\ \Omega}{1+\mathcal R}=-9999.97\ \Omega\approx-10.0\ \mathrm{k\Omega}.
$$

环路传输为 $\mathcal R=4.0\times10^{5}$。

### 第 4 步 — 输入阻抗与输出阻抗

两种情况下端口短路都会使 $v_{be1}=0$（输入）或 $v_o=0$（输出），故 $\mathcal R(\text{short})=0$，而 $\mathcal R(\text{open})=4.01\times10^5$：

$$
Z_{in}=\frac{r_\pi\parallel(R_F+R)}{1+\mathcal R}=\frac{3831\ \Omega}{4.01\times10^{5}}=9.56\ \mathrm{m\Omega},\qquad
Z_{out}=\frac{R\parallel(R_F+r_\pi)}{1+\mathcal R}=\frac{3499\ \Omega}{4.01\times10^{5}}=8.73\ \mathrm{m\Omega}.
$$

这些结果与二端口方法相同，尽管 $\mathcal R$ 与二端口环路增益（$3.58\times10^5$）不同，原因是两种方法对电路的划分不同。

### 第 5 步 — 带 1 kΩ 源电阻时

此时 $R_S=1\ \mathrm{k\Omega}$ 与 $r_{\pi1}$ 并联：基极节点对地呈现 $r_\pi\parallel R_S=839\ \Omega$。求回归比时：

$$
R_3=R\parallel(R_F+839\ \Omega)=3202\ \Omega,\qquad \frac{v_{be1}}{v_o}=\frac{839}{10{,}839}=0.0774,
$$

$$
\mathcal R=(93.3)^2\,(g_mR_3)(0.0774)=(8702)(123.2)(0.0774)=8.29\times10^{4}.
$$

$g_{m1}=0$ 时输出端看到 $R_3=3202\ \Omega$，输出短路使回归消失：

$$
Z_{out}=\frac{3202\ \Omega}{1+8.29\times10^{4}}=38.6\ \mathrm{m\Omega}.
$$

源电阻使回归比减小约 5 倍，输出电阻由 8.7 mΩ 升高到约 39 mΩ。
