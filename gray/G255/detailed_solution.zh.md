# 详细步骤 - G255

与 MOS 版本一样，$R_F$ 对输出电压采样并把电流送回输入节点：这是电压并联反馈，$f=y_{12f}=-1/R_F$，$R_F$ 同时在输入端和输出端形成对地负载。不同之处在于每个基极都经 $r_\pi$ 吸取电流，因此 $r_\pi$ 成为输入节点以及前一级集电极的负载。

### 第 1 步 — 混合 π 参数

在 $I_C=1$ mA、正向放大区（forward-active region）中：

$$
g_m=\frac{I_C}{V_T}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad r_o=\frac{V_A}{I_C}=50\ \mathrm{k\Omega}.
$$

### 第 2 步 — 计入负载的基本放大器

输入电流流入 $R_F$（来自 $y_{11f}$）与 $r_{\pi1}$ 的并联，故 $v_{be1}=i\,(R_F\parallel r_\pi)=(3421\ \Omega)\,i$。每个共射级的增益为 $-g_m$ 乘以其集电极总负载：

| 级 | 集电极负载 | 负载 (Ω) | 增益 |
|---|---|---|---|
| $Q_1$、$Q_2$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel r_\pi$（下一级基极） | 2425 | −93.3 |
| $Q_3$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F$ | 3125 | −120.2 |

例如，$-g_m(2425\ \Omega)=-(38.46\ \mathrm{mA/V})(2425\ \Omega)=-93.3$。开环跨阻为

$$
a=\frac{v_o}{i}=(3421\ \Omega)(-93.3)^2(-120.2)=-3.58\times10^{9}\ \Omega .
$$

### 第 3 步 — 环路增益与跨阻

$$
T=af=(-3.58\times10^{9}\ \Omega)\left(-\frac1{10\ \mathrm{k\Omega}}\right)=3.58\times10^{5},
$$

$$
\frac{v_o}{i_i}=\frac{a}{1+T}=-9999.97\ \Omega\approx-10.0\ \mathrm{k\Omega}.
$$

相同电流下双极级的 $g_m$ 高得多，因此环路增益约为 MOS 版本的 130 倍，增益与 $-R_F$ 的差别在 3 ppm 以内。

### 第 4 步 — 输入阻抗与输出阻抗

两个端口都是并联连接，计入负载的阻抗都除以 $1+T$：

$$
Z_{in}=\frac{R_F\parallel r_\pi}{1+T}=\frac{3421\ \Omega}{3.58\times10^{5}}=9.56\ \mathrm{m\Omega},\qquad
Z_{out}=\frac{5\ \mathrm{k\Omega}\parallel r_o\parallel R_F}{1+T}=\frac{3125\ \Omega}{3.58\times10^{5}}=8.73\ \mathrm{m\Omega}.
$$

直接节点分析得到相同的结果。
