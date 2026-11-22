# 详细步骤 - G256

1 kΩ 源电阻 $R_S$ 与输入节点并联，分走反馈电流并降低环路增益。把 $R_S$ 计入输入端负载，重做二端口电压并联分析；计入负载的输出电阻不变，因此新的输出电阻由新的 $1+T$ 决定。

### 第 1 步 — 器件参数与各级增益

$g_m=I_C/V_T=38.46$ mA/V，$r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$，$r_o=V_A/I_C=50\ \mathrm{k\Omega}$。各级增益不受 $R_S$ 影响：

| 级 | 集电极负载 | 增益 |
|---|---|---|
| $Q_1$、$Q_2$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel r_\pi=2425\ \Omega$ | −93.3 |
| $Q_3$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$ | −120.2 |

### 第 2 步 — 计入源电阻的环路增益

在输入节点，电流现在分流到 $R_S$、$R_F$（来自 $y_{11f}$）和 $r_{\pi1}$：

$$
R_S\parallel R_F\parallel r_\pi=1\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=774\ \Omega .
$$

$$
a=(774\ \Omega)(-93.3)^2(-120.2)=-8.09\times10^{8}\ \Omega,\qquad T=af=\frac{8.09\times10^{8}\ \Omega}{10\ \mathrm{k\Omega}}=8.09\times10^{4}.
$$

环路增益由 $3.58\times10^5$（理想电流驱动，输入端负载 3421 Ω）按比值 $3421/774=4.4$ 下降。

### 第 3 步 — 输出电阻

计入负载的输出电阻 $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$ 除以 $1+T$：

$$
Z_{out}=\frac{3125\ \Omega}{1+8.09\times10^{4}}=38.6\ \mathrm{m\Omega}.
$$

输出电阻由 8.7 mΩ 升高到约 39 mΩ。用 $Q_1$ 受控源的回归比可得到相同结果：$g_{m1}=0$ 时输出端看到 $5\ \mathrm{k\Omega}\parallel r_o\parallel(R_F+R_S\parallel r_\pi)=3202\ \Omega$，回归比为 $\mathcal R=82{,}940$，且输出短路时回归消失，因此由布莱克曼公式得 $3202\ \Omega/(1+\mathcal R)=38.6$ mΩ，与直接节点分析一致。
