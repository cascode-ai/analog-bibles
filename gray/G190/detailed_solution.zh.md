# 详细步骤 - G190

采用 $C_\mu=0$、$r_o=\infty$ 的混合 π 模型，唯一的电容是 $C_\pi$，因此增益只有一个极点和一个零点。pnp 管的小信号模型与电流为 $|I_C|$ 的 npn 管相同；跟随器的基极看到与信号源串联的 $R_S'=R_S+r_b$。

### 第 1 步 — 小信号参数

$$
g_m=\frac{|I_C|}{V_T}=\frac{0.3\ \mathrm{mA}}{26\ \mathrm{mV}}=11.5\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta}{g_m}=4.33\ \mathrm{k\Omega},
$$
$$
C_\pi=\frac{g_m}{\omega_T}=\frac{11.5\ \mathrm{mA/V}}{2\pi(4\ \mathrm{MHz})}=459\ \mathrm{pF}\quad(C_\mu=0),\qquad R_S'=R_S+r_b=450\ \Omega .
$$

### 第 2 步 — 传递函数

令 $Z_\pi=r_\pi\parallel(1/sC_\pi)$。基极电流 $i_b=(v_i-v_o)/(R_S'+Z_\pi)$ 产生 $v_\pi=i_bZ_\pi$，在发射极列 KCL 得 $i_b+g_mv_\pi=v_o/R_E$：

$$
\frac{v_o}{v_i}=\frac{R_E(1+g_mZ_\pi)}{R_S'+Z_\pi+R_E(1+g_mZ_\pi)} .
$$

代入 $Z_\pi=r_\pi/(1+sr_\pi C_\pi)$ 并通分，

$$
\frac{v_o}{v_i}=\frac{R_E\bigl(1+g_mr_\pi+sr_\pi C_\pi\bigr)}{R_S'+R_E+r_\pi(1+g_mR_E)+s(R_S'+R_E)r_\pi C_\pi}
=A_0\,\frac{1+s/\omega_z}{1+s/\omega_p}.
$$

### 第 3 步 — 增益、零点与极点

$s=0$ 时：

$$
A_0=\frac{g_mR_E+R_E/r_\pi}{1+g_mR_E+(R_S'+R_E)/r_\pi}=\frac{46.15+0.92}{1+46.15+1.03}=0.977\quad(-0.20\ \mathrm{dB}).
$$

零点出现在 $1+g_mZ_\pi=0$ 处，即基极-发射极阻抗向发射极输送的净电流为零：

$$
\omega_z=\frac{g_m+1/r_\pi}{C_\pi}=2.56\times10^7\ \mathrm{rad/s}\quad(4.08\ \mathrm{MHz}\approx f_T).
$$

极点由 $C_\pi$ 及其看到的电阻 $R_1=r_\pi\parallel\dfrac{R_S'+R_E}{1+g_mR_E}=4.33\ \mathrm{k\Omega}\parallel94.4\ \Omega=92.4\ \Omega$ 决定：

$$
\omega_p=\frac1{R_1C_\pi}=2.36\times10^7\ \mathrm{rad/s}\quad(3.75\ \mathrm{MHz}).
$$

因此

$$
\frac{v_o}{v_i}(s)=0.977\,\frac{1+s/(2.56\times10^7\ \mathrm{rad/s})}{1+s/(2.36\times10^7\ \mathrm{rad/s})} .
$$

当 $s\to\infty$ 时，$C_\pi$ 把基极-发射极结短路，增益趋于电阻分压比 $A_0\omega_p/\omega_z=R_E/(R_E+R_S+r_b)=0.899$（−0.93 dB）。

### 第 4 步 — 10 kHz 到 20 MHz 的幅值

| $f$ | 10 kHz | 1 MHz | 3 MHz | 4 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|---|
| $\lvert v_o/v_i\rvert$ (dB) | −0.20 | −0.25 | −0.47 | −0.57 | −0.83 | −0.90 |

![以 dB 表示的增益幅值：平坦地保持在 −0.20 dB，在 3.75 MHz 极点与 4.08 MHz 零点之间下降约 0.7 dB，趋于 −0.93 dB](/q/G190/solution-curves.zh.svg)

幅值在约 1 MHz 以下平坦地保持在 −0.20 dB，在大约 2 到 10 MHz 之间台阶式下降，到 20 MHz 为 −0.90 dB，并趋于 −0.93 dB。由于极点与零点几乎重合，总变化只有约 0.7 dB，相位在 4 MHz 附近也只下降约 −2.4°。在此范围内不存在 −3-dB 频率：尽管 $f_T$ 只有 4 MHz，跟随器仍保持宽带，因为在高频时 $C_\pi$ 只是把基极与发射极连接起来。
