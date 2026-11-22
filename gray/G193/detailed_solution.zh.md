# 详细步骤 - G193

采用混合 π 模型，基极经 $r_b$ 接交流地，集电极短路（$R_L=0$）。由于输入是理想电流源，仅凭发射极的 KCL 就能确定基极-发射极电压，集电极电流再由受控源得到。$R_L=0$ 时，$C_\mu$ 不能形成通常的输出极点（$1/R_LC_\mu\to\infty$），因此带宽由 $C_\pi$ 决定。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=5.2\ \mathrm{k\Omega},\qquad
z_\pi=r_\pi\parallel\frac1{sC_\pi}.
$$

### 第 2 步 — 电流增益

令 $v_1=v_{b'}-v_e$。信号电流 $i_i$ 流入发射极，受控源电流 $g_mv_1$ 也（从集电极）流入发射极；二者之和经 $z_\pi$ 流向内部基极：

$$
i_i+g_mv_1=\frac{v_e-v_{b'}}{z_\pi}=-\frac{v_1}{z_\pi}
\;\Rightarrow\;
i_i=-v_1\Bigl(g_m+\frac1{z_\pi}\Bigr).
$$

该关系与 $r_b$ 无关，因为 $z_\pi$ 中的电流全部要经基极返回。集电极向负载输送 $i_o=-g_mv_1$，故

$$
\frac{i_o}{i_i}=\frac{g_mz_\pi}{1+g_mz_\pi}
=\frac{\beta_0}{\beta_0+1+sr_\pi C_\pi}
=\frac{\beta_0}{\beta_0+1}\cdot\frac1{1+s\dfrac{C_\pi r_\pi}{\beta_0+1}}
\approx\frac{\alpha_0}{1+sC_\pi/g_m}.
$$

### 第 3 步 — 低频值与 −3-dB 频率

低频增益为 $\alpha_0=\beta_0/(\beta_0+1)=100/101=0.990$。唯一的极点位于

$$
\omega_{-3\text{dB}}=\frac{\beta_0+1}{r_\pi C_\pi}=\frac{g_m+1/r_\pi}{C_\pi}=\frac{19.2\ \mathrm{mA/V}+0.19\ \mathrm{mA/V}}{10\ \mathrm{pF}}=1.94\times10^9\ \mathrm{rad/s},
$$
$$
f_{-3\text{dB}}=\frac{\omega_{-3\text{dB}}}{2\pi}=309\ \mathrm{MHz}
$$

（用近似 $g_m/C_\pi$ 则为 306 MHz）。共基级的带宽可达约 $f_T$，远高于 $f_\beta=f_T/\beta_0$，因为发射极输入端只看到与 $C_\pi$ 并联的低电阻 $1/g_m$。

### 第 4 步 — 计入 $C_\mu$ 通路的修正

若不把内部基极视为理想交流地，$C_\mu$ 把它连接到短路的集电极，电流 $sC_\mu v_{b'}$ 流入集电极节点并从负载电流中扣除：$i_o=-g_mv_1-sC_\mu v_{b'}$，而基极节点的负载为 $r_b\parallel(1/sC_\mu)$。对这两个节点方程数值求解，得到 −3-dB 频率约为 257 MHz。第 3 步的简单模型给出约 309 MHz，是通常的答案；修正结果表明 $r_b$ 与 $C_\mu$ 使其适度降低。
