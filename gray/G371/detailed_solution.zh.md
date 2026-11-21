# 详细步骤 - G371

在高频下晶体管的电流增益下降，因此以电流形式折算到输入的集电极散粒噪声按 $f^2$ 增长。把这一项加到并联反馈级的低频输入噪声电流上，求噪声系数加倍（即升高 3 dB）的频率。

### 第 1 步 — 低频噪声系数

在 $I_C=0.5$ mA 时，$g_m=19.2$ mS，$I_B=10\ \mu$A，$\overline{v_{ia}^2}/\Delta f=4kT(r_b+1/2g_m)=4kT(126\ \Omega)$。在输入端加上反馈电阻的噪声电流：

$$
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta_0^2}\right)+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F}=4.94\times10^{-24}\ \mathrm{A^2/Hz},
$$

以信号源噪声电流 $4kT/R_S=1.66\times10^{-24}$ A²/Hz 为基准：

$$
F_0=1+\frac{\overline{i_i^2}+\overline{v_{ia}^2}/R_S^2}{(4kT/R_S)\,\Delta f}=3.99\quad(6.0\ \mathrm{dB}).
$$

### 第 2 步 — 折算集电极噪声的频率特性

集电极散粒噪声 $2qI_C$ 经电流增益折算到输入。忽略 $C_\mu$ 并取 $C_\pi\approx g_m/(2\pi f_T)$，电流增益为单极点函数

$$
\beta(jf)=\frac{\beta_0}{1+j\beta_0f/f_T},\qquad
\frac{1}{|\beta(jf)|^2}=\frac{1}{\beta_0^2}+\frac{f^2}{f_T^2}.
$$

因此折算后的集电极噪声为

$$
\frac{2qI_C}{|\beta(jf)|^2}=\frac{2qI_C}{\beta_0^2}+2qI_C\,\frac{f^2}{f_T^2}.
$$

第一部分已包含在 $F_0$ 中；第二部分是随频率上升的增量。在该模型中其余噪声源与频率无关。

### 第 3 步 — 升高 3 dB 的条件

NF 升高 3 dB 即 $F=2F_0$，因此输入噪声电流的增量必须等于信号源噪声的 $F_0$ 倍：

$$
2qI_C\,\frac{f^2}{f_T^2}=F_0\,\frac{4kT}{R_S}
\quad\Longrightarrow\quad
\frac{f}{f_T}=\sqrt{\frac{F_0\,(4kT/R_S)}{2qI_C}}=\sqrt{\frac{3.99\,(1.66\times10^{-24}\ \mathrm{A^2/Hz})}{1.6\times10^{-22}\ \mathrm{A^2/Hz}}}=0.203 .
$$

$$
f=0.203\,(500\ \mathrm{MHz})\approx102\ \mathrm{MHz}.
$$

### 第 4 步 — 用完整分析验证

保留 $r_b$、$R_F$ 和 $R_L$ 的噪声、集电极散粒噪声的相关性，并采用同样的单极点晶体管模型进行节点噪声分析，得到 $F_0\approx4.2$（6.2 dB），3 dB 点约在 101 MHz。两种处理都把转折点定在约 100 MHz，即约 $f_T/5$，因为较大的白噪声输入噪声（基极散粒噪声加 $R_F$）推迟了集电极噪声占主导的频率。
