# 详细步骤 - A405

对单极点运放施加负反馈，会把极点向外推移 $1+A_0\beta$ 倍，$\beta$ 为反馈系数。闭环增益高意味着 $\beta$ 小、带宽扩展少。把同样的总增益分给两级，每级的 $\beta$ 都大得多，代价是两个级联极点带来的带宽收缩。

### 第 1 步 — 单级反相放大器的闭环响应

设 $A(s)=A_0/(1+s/\omega_p)$，反相级的输入电阻为 $R_1$、反馈电阻为 $R_2$，则反馈系数（feedback factor）为 $\beta=R_1/(R_1+R_2)$，且

$$
\frac{V_{out}}{V_{in}}=-\frac{R_2}{R_1}\cdot\frac{A\beta}{1+A\beta}
=-\frac{R_2}{R_1}\cdot\frac{A_0\beta}{1+A_0\beta}\cdot\frac1{1+s/[\omega_p(1+A_0\beta)]}.
$$

因此闭环 $-3$ dB 频率为 $\omega_{-3dB}=\omega_p(1+A_0\beta)$，其中 $\omega_p=10^4$ rad/s，$A_0=1000$。

### 第 2 步 — 结构 (a)：单级，$R_2=25R$

$$
\beta=\frac1{26},\qquad A_0\beta=38.5,\qquad
\omega_{-3dB}=(10^4\ \mathrm{rad/s})(39.5)=395\ \mathrm{krad/s},
$$
$$
\frac{V_{out}}{V_{in}}(0)=-25\cdot\frac{38.5}{39.5}=-24.4 .
$$

### 第 3 步 — 结构 (b)：两级，每级 $R_2=5R$

每一级有

$$
\beta=\frac16,\qquad A_0\beta=166.7,\qquad
\omega_1=(10^4\ \mathrm{rad/s})(167.7)=1.68\ \mathrm{Mrad/s},\qquad
\frac{V_{out}}{V_{in}}(0)=-5\cdot\frac{166.7}{167.7}=-4.97 .
$$

两次反相相互抵消，总增益为 $(-4.97)^2=+24.7$，幅值与 (a) 基本相同。级联有两个位于 $\omega_1$ 的相等极点，其幅值为

$$
|H(j\omega)|=\frac{|H(0)|}{1+(\omega/\omega_1)^2}.
$$

$-3$ dB 点要求 $1+(\omega/\omega_1)^2=\sqrt2$：

$$
\omega_{-3dB}=\omega_1\sqrt{\sqrt2-1}=0.644\,(1.68\ \mathrm{Mrad/s})=1.08\ \mathrm{Mrad/s}.
$$

### 第 4 步 — 比较

| 结构 | 总增益 | $-3$ dB 带宽 |
|---|---|---|
| (a) 单级，$R_2=25R$ | $-24.4$ | 395 krad/s（62.8 kHz） |
| (b) 两级，每级 $R_2=5R$ | $+24.7$ | 1.08 Mrad/s（172 kHz） |

在增益几乎相同的情况下，级联结构的带宽是单级的 $1.08/0.395=2.7$ 倍。每一级都在固定的增益带宽积（gain-bandwidth product）$A_0\omega_p=10^7$ rad/s 下以增益换取带宽，增益为 5 的一级比增益为 25 的一级快五倍；级联只因两个极点损失 0.644 的因子。
