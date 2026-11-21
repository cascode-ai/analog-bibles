# 详细步骤 - G360

用等效输入噪声电压源和电流源表示晶体管，写出源电阻为 $R_S$ 时的噪声系数，并对 $R_S$ 求最小值。标准处理忽略两个噪声源之间的相关性；最后检验保留相关性的影响。

### 第 1 步 — 等效输入噪声源

在低频且忽略闪烁噪声时，电压噪声源包含 $r_b$ 的热噪声和经 $g_m$ 折算的集电极散粒噪声，电流噪声源为基极散粒噪声：

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=\frac{4kT}{2g_m}\left(1+2g_mr_b\right),\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=\frac{2qI_C}{\beta_F}=\frac{4kT}{2}\,\frac{g_m}{\beta_F},
$$

其中用到 $2qI_C=2kT\,g_m$。

### 第 2 步 — 噪声系数及其最小值

两个噪声源不相关时，以信号源热噪声 $4kTR_S$ 为基准的总输入噪声给出

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}.
$$

令 $dF/dR_S=0$，得 $\overline{i_i^2}R_S^2=\overline{v_i^2}$，因此

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\frac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}=1+\sqrt{\frac{1+2g_mr_b}{\beta_F}} .
$$

### 第 3 步 — 数值

在 $I_C=2$ mA 时，$g_m=2\ \mathrm{mA}/26\ \mathrm{mV}=76.9$ mS（$1/g_m=13\ \Omega$），$2g_mr_b=2(76.9\ \mathrm{mS})(100\ \Omega)=15.4$，故 $\sqrt{1+2g_mr_b}=\sqrt{16.4}=4.05$。由 $\sqrt{\beta_F}=7.07$：

$$
R_{S(\mathrm{opt})}=7.07\times13\ \Omega\times4.05=372\ \Omega,\qquad
F_{\mathrm{opt}}=1+\frac{4.05}{7.07}=1.572,\qquad
10\log_{10}1.572=1.97\ \mathrm{dB}.
$$

### 第 4 步 — 相关性的影响

两个噪声源都含有集电极散粒噪声（在 $v_i$ 中为 $i_c/g_m$，在 $i_i$ 中为 $i_c/\beta_F$），而且在实际电路中基极电流噪声流经的是 $r_b+R_S$，而不只是 $R_S$。接入 $R_S$ 后由全部噪声源直接计算噪声系数并数值求最小，得到 $R_{S(\mathrm{opt})}\approx385\ \Omega$、$F_{\mathrm{opt}}\approx1.78$（2.5 dB）。最佳源电阻几乎不变；由于在该电流下 $r_b$ 相对 $1/g_m$ 并不小，最小噪声系数比 2.0 dB 的标准估计高约 0.5 dB。
