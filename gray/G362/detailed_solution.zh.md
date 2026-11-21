# 详细步骤 - G362

在 500 Hz 处，基极电流的闪烁噪声叠加在散粒噪声上，只增大等效输入噪声电流。先由 1 kHz 转折频率求出这一增量，再沿用不相关噪声源下点噪声系数最小值的闭式解。作为对比，给出计入相关性的完整计算结果。

### 第 1 步 — 500 Hz 处的基极电流噪声

转折频率 $f_c$ 处闪烁项 $K_1I_B/f$ 等于散粒项 $2qI_B$，故 $K_1I_B=2qI_Bf_c$，

$$
\frac{\overline{i_b^2}}{\Delta f}=2qI_B\left(1+\frac{f_c}{f}\right)=2qI_B\left(1+\frac{1000\ \mathrm{Hz}}{500\ \mathrm{Hz}}\right)=3\cdot2qI_B .
$$

闪烁噪声只存在于基极电流中，因此等效输入噪声电流变为三倍，而电压噪声源不变：

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_i^2}}{\Delta f}=3\,\frac{2qI_C}{\beta_F}.
$$

### 第 2 步 — 最佳源电阻与点噪声系数

对于不相关噪声源，点噪声系数 $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ 在 $\overline{i_i^2}R_S^2=\overline{v_i^2}$ 时最小：

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}.
$$

不计闪烁噪声时，该晶体管（$g_m=76.9$ mS，$1/2g_m=13\ \Omega$）有 $R_{S(\mathrm{opt})}=(\sqrt{\beta_F}/g_m)\sqrt{1+2g_mr_b}=372\ \Omega$、$F_{\mathrm{opt}}-1=\sqrt{(1+2g_mr_b)/\beta_F}=\sqrt{16.4/50}=0.572$。$\overline{i_i^2}$ 变为三倍，使 $R_{S(\mathrm{opt})}$ 除以 $\sqrt3$，$F_{\mathrm{opt}}-1$ 乘以 $\sqrt3$。

### 第 3 步 — 500 Hz 处的数值

$$
R_{S(\mathrm{opt})}=\frac{372\ \Omega}{\sqrt3}=215\ \Omega,\qquad
F_{\mathrm{opt}}=1+\sqrt3\,(0.572)=1.99,\qquad
10\log_{10}1.99=3.0\ \mathrm{dB},
$$

而在远高于闪烁噪声转折频率处为 1.97 dB。

### 第 4 步 — 计入相关性的计算

在实际电路中，基极电流噪声（包括其闪烁部分）流经 $r_b+R_S$，集电极散粒噪声同时出现在两个噪声源中。由全部噪声源直接计算点噪声系数并数值求最小，得到 $R_{S(\mathrm{opt})}\approx238\ \Omega$、$F_{\mathrm{opt}}\approx2.59$（4.1 dB）。两种处理中，闪烁噪声都会降低最佳源电阻，并使 500 Hz 处的最小噪声系数升高约 1–1.5 dB。
