# 详细步骤 - G346

从单个共射晶体管在其基极处的标准等效输入噪声源出发，把它们经串联的 100 kΩ 电阻移到电阻的信号源一侧，并加上该电阻自身的热噪声。电压噪声源经过串联元件时不变；而与电阻 $R$ 串联的电流噪声源在输入短路时会产生额外电压 $i_iR$。

### 第 1 步 — 小信号参数

在 $I_C=0.5$ mA 时，

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mS},\qquad
\frac{1}{2g_m}=26\ \Omega,\qquad
r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=5\ \mu\mathrm A .
$$

### 第 2 步 — 晶体管本身的噪声源

对于基区电阻为 $r_b$ 的共射晶体管，折算到外部基极端的输入噪声源为（暂不计很小的负载项 $4kT/(g_m^2R_L)$）

$$
\frac{\overline{v_{i,T}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_{i,T}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right).
$$

前者是 $r_b$ 的热噪声加上经 $g_m$ 折算的集电极散粒噪声 $2qI_C$；后者是基极散粒噪声加上经 $\beta$ 折算的集电极散粒噪声。

### 第 3 步 — 经串联 100 kΩ 电阻折算

令 $R=100$ kΩ。输入端（信号源一侧）短路时，晶体管基极处的噪声是以下各项的串联：电阻热噪声 $4kTR$、晶体管电压噪声源，以及电流噪声源流经 $R$ 到短路输入端所产生的 $i_{i,T}R$。输入端开路时，电流噪声源仍须从信号源一侧流经 $R$，因此保持不变。故

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(R+r_b+\frac{1}{2g_m}\right)+2qI_B(R+r_b)^2,\qquad
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right).
$$

由于 $r_b$ 也与基极电流串联，第二项中把它与 $R$ 合在一起。此时两个噪声源都含有同一基极电流噪声，因此强相关。

### 第 4 步 — 数值

$$
\begin{aligned}
4kT\left(R+r_b+\frac{1}{2g_m}\right)&=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100.126\ \mathrm{k\Omega})=1.66\times10^{-15}\ \mathrm{V^2/Hz},\\
2qI_B(R+r_b)^2&=2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)(100.1\ \mathrm{k\Omega})^2=1.60\times10^{-14}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&\approx1.77\times10^{-14}\ \mathrm{V^2/Hz}\quad(\approx0.13\ \mu\mathrm V/\sqrt{\mathrm{Hz}}),\\
\frac{\overline{i_i^2}}{\Delta f}&=2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A+0.05\ \mu\mathrm A)=1.62\times10^{-24}\ \mathrm{A^2/Hz}\quad(\approx1.3\ \mathrm{pA}/\sqrt{\mathrm{Hz}}).
\end{aligned}
$$

流经 100 kΩ 的基极散粒噪声约占 $\overline{v_i^2}$ 的 90%，100 kΩ 电阻的热噪声约占 9%；晶体管自身的 $r_b$ 和 $1/2g_m$ 项可以忽略。

### 第 5 步 — 较小的项与精确验证

上面略去的两项因基极电阻很大而略有增大。集电极散粒噪声在输入短路时折算到信号源一侧，所需的源电压为 $i_c(1/g_m+R/\beta)$ 而不是 $i_c/g_m$，得到 $2qI_C(1/g_m+R/\beta)^2=1.8\times10^{-16}$ V²/Hz $=4kT(10.7\ \mathrm{k\Omega})$。10 kΩ 负载的噪声经电压增益 $|A_v|=g_mR_Lr_\pi/(r_\pi+R+r_b)=9.5$ 折算，得到 $4kTR_L/A_v^2=4kT(111\ \Omega)$。在输入短路条件下由全部噪声源精确计算 $\overline{v_i^2}$，得

$$
\frac{\overline{v_i^2}}{\Delta f}=1.79\times10^{-14}\ \mathrm{V^2/Hz},
$$

与第 3 步的表达式相差不到 1%。串联 100 kΩ 电阻提高了输入电阻，但由于基极电流噪声流经该电阻，等效输入噪声电压约为单独 100 kΩ 电阻热噪声的十倍。
