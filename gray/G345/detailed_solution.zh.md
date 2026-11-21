# 详细步骤 - G345

先求小信号参数，把晶体管和负载的噪声折算到输入端，得到电压噪声源（输入短路）和电流噪声源（输入开路），再与 $R_S$ 合并。作为交叉验证，由每个噪声源直接计算输出噪声，并除以跨阻的平方。

### 第 1 步 — 小信号参数与噪声源

在 $I_C=1$ mA 时，

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mS},\qquad
r_\pi=\frac{\beta}{g_m}=1.3\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=20\ \mu\mathrm A .
$$

由于 $r_b=0$、$r_o=\infty$ 且忽略闪烁噪声，噪声源为：基极散粒噪声（shot noise）$\overline{i_b^2}=2qI_B\Delta f$（位于基极与发射极之间）、集电极散粒噪声 $\overline{i_c^2}=2qI_C\Delta f$（集电极到发射极）、与 $R_L$ 并联的负载热噪声 $\overline{i_L^2}=(4kT/R_L)\Delta f$，以及计入信号源时与 $R_S$ 并联的 $\overline{i_s^2}=(4kT/R_S)\Delta f$。

### 第 2 步 — 等效输入噪声电压

将输入短路。此时 $v_\pi$ 只由输入噪声源决定，输出节点处的集电极噪声电流 $i_c+i_L$ 必须等于 $g_mv_i$。经 $g_m$ 折算，并注意 $i_b$ 被短路：

$$
\frac{\overline{v_i^2}}{\Delta f}=\frac{2qI_C}{g_m^2}+\frac{4kT}{g_m^2R_L}
=4kT\left(r_b+\frac{1}{2g_m}+\frac{1}{g_m^2R_L}\right),
$$

其中用到 $2qI_C/g_m^2=2kT/g_m=4kT/(2g_m)$。数值为

$$
\frac{1}{2g_m}=13.0\ \Omega,\qquad \frac{1}{g_m^2R_L}=0.068\ \Omega,\qquad
\frac{\overline{v_i^2}}{\Delta f}=(1.66\times10^{-20}\ \mathrm{V\cdot C})(13.07\ \Omega)=2.17\times10^{-19}\ \mathrm{V^2/Hz}.
$$

### 第 3 步 — 等效输入噪声电流

将输入开路。基极散粒噪声此时全部流入 $r_\pi$，因此直接表现为输入电流。输出端的噪声源须由输入电流 $i_i$ 经电流增益 $\beta$ 产生，故除以 $\beta^2$：

$$
\frac{\overline{i_i^2}}{\Delta f}=2qI_B+\frac{2qI_C}{\beta^2}+\frac{4kT}{\beta^2R_L}.
$$

| 项 | 数值 (A²/Hz) |
|---|---|
| $2qI_B=2(1.6\times10^{-19}\ \mathrm C)(20\ \mu\mathrm A)$ | $6.40\times10^{-24}$ |
| $2qI_C/\beta^2$ | $1.28\times10^{-25}$ |
| $4kT/(\beta^2R_L)$ | $6.6\times10^{-28}$ |
| 合计 $\overline{i_i^2}/\Delta f$ | $6.53\times10^{-24}$ |

基极散粒噪声占主导。

### 第 4 步 — $R_S=1$ kΩ 时的总输入噪声电流

对电流驱动的输入，把所有噪声都换算为与信号源并联的电流：$R_S$ 贡献 $4kT/R_S$，电流噪声源直接相加，电压噪声源在 $R_S$ 中产生电流 $v_i/R_S$。忽略相关性：

$$
\frac{\overline{i_{eq}^2}}{\Delta f}=\frac{4kT}{R_S}+\frac{\overline{i_i^2}}{\Delta f}+\frac{\overline{v_i^2}}{R_S^2\Delta f}
=1.66\times10^{-23}+6.53\times10^{-24}+2.17\times10^{-25}=2.335\times10^{-23}\ \mathrm{A^2/Hz}.
$$

噪声为白噪声，因此在 2 MHz 理想矩形带宽内

$$
\overline{i_{eq}^2}=(2.335\times10^{-23}\ \mathrm{A^2/Hz})(2\times10^{6}\ \mathrm{Hz})=4.67\times10^{-17}\ \mathrm{A^2},\qquad
i_{eq,\mathrm{rms}}=6.83\ \mathrm{nA}.
$$

### 第 5 步 — 由全部噪声源直接计算

接入信号源后，$i_s$ 与 $i_b$ 都流入 $R_S\parallel r_\pi=565\ \Omega$，再经 $g_mR_L$ 放大；$i_c$ 与 $i_L$ 则直接流入 $R_L$：

$$
\frac{\overline{v_o^2}}{\Delta f}=(g_mR_L)^2(R_S\parallel r_\pi)^2\left(\frac{4kT}{R_S}+2qI_B\right)+R_L^2\left(2qI_C+\frac{4kT}{R_L}\right).
$$

| 贡献 | 数值 (V²/Hz) |
|---|---|
| $R_S$ 与基极散粒噪声 | $1.087\times10^{-12}$ |
| 集电极散粒噪声 | $3.2\times10^{-14}$ |
| $R_L$ 热噪声 | $1.7\times10^{-16}$ |
| 合计 | $1.119\times10^{-12}$ |

从 $i_s$ 到 $v_o$ 的跨阻为 $g_mR_L(R_S\parallel r_\pi)=(38.5\ \mathrm{mS})(10\ \mathrm{k\Omega})(565\ \Omega)=217\ \mathrm{k\Omega}$，因此折算到输入的谱密度为

$$
\frac{1.119\times10^{-12}\ \mathrm{V^2/Hz}}{(217\ \mathrm{k\Omega})^2}=2.368\times10^{-23}\ \mathrm{A^2/Hz},
\qquad
i_{eq,\mathrm{rms}}=\sqrt{(2.368\times10^{-23})(2\times10^6)}\ \mathrm A=6.88\ \mathrm{nA}.
$$

### 第 6 步 — 比较

两种方法分别给出 6.83 nA 和 6.88 nA 有效值，相差约 1%。微小差别来自第 4 步忽略的相关性：集电极散粒噪声同时出现在 $v_i$（为 $i_c/g_m$）和 $i_i$（为 $i_c/\beta$）中，因此精确结果含有交叉项 $2\cdot2qI_C/(g_mR_S\beta)=3.3\times10^{-25}$ A²/Hz，约占总量的 1.4%，恰好解释了两者之差。信号源电阻和基极散粒噪声占主导，因此这里的噪声源模型是准确的。
