# 详细步骤 - G299

在电压串联环路中，输出电压以并联方式采样，因此反馈使开环输出阻抗除以 $1+T(s)$。环路增益为单极点时，所得输出导纳（output admittance）可分成一个常数项和一个一阶项，正好是 $R_2$ 与 $R_1+sL$ 并联的导纳。对应各项即得元件值；幅值曲线则由所得的零点和极点画出。

### 第 1 步 — 环路增益

运放 $a(s)=a_0/(1+s/\omega_p)$，$a_0=10^5$，$\omega_p=2\pi\times5\ \mathrm{Hz}=31.4$ rad/s。$f=0.01$ 与频率无关，
$$
T(s)=a(s)f=\frac{T_0}{1+s/\omega_p},\qquad T_0=a_0f=1000 .
$$

### 第 2 步 — 并联采样下的输出阻抗

输出端并联采样时，闭环输出阻抗等于开环值 $r_o=100\ \Omega$ 除以 $1+T$：
$$
z_o(s)=\frac{r_o}{1+T(s)} .
$$
其倒数即输出导纳，可分成两项：
$$
Y_o(s)=\frac{1+T(s)}{r_o}=\frac1{r_o}+\frac{T_0}{r_o(1+s/\omega_p)}=\frac1{r_o}+\frac{1}{\dfrac{r_o}{T_0}+s\dfrac{r_o}{T_0\omega_p}} .
$$
[图 1] 中 $R_2$ 与 $R_1$、$L$ 串联组合并联，其导纳为
$$
Y=\frac1{R_2}+\frac1{R_1+sL},
$$
形式完全相同。因此 $z_o$ 可以用 [图 1] 表示，其中
$$
\begin{aligned}
R_2&=r_o=100\ \Omega,\\
R_1&=\frac{r_o}{T_0}=\frac{100\ \Omega}{1000}=0.1\ \Omega,\\
L&=\frac{r_o}{T_0\,\omega_p}=\frac{100\ \Omega}{1000\times31.4\ \mathrm{rad/s}}=3.18\ \mathrm{mH}.
\end{aligned}
$$
出现电感是因为环路增益随频率下降，频率越高，反馈对输出阻抗的降低作用越弱。

### 第 3 步 — 零点、极点与幅值

通分合并得
$$
z_o(s)=r_o\frac{1+s/\omega_p}{(1+T_0)+s/\omega_p}=\frac{r_o}{1+T_0}\cdot\frac{1+s/\omega_p}{1+s/[(1+T_0)\omega_p]},
$$
因此 $z_o$ 在 5 Hz 处有一个零点，在 $(1+T_0)\times5\ \mathrm{Hz}=5.0$ kHz 处有一个极点。等价地，零点位于 $\omega L=R_1$ 处，极点位于 $\omega L\approx R_2$ 处。幅值为
$$
|z_o|=r_o\sqrt{\frac{1+(f_\mathrm{s}/5\ \mathrm{Hz})^2}{1001^2+(f_\mathrm{s}/5\ \mathrm{Hz})^2}} .
$$
例如在 500 Hz 处，$|z_o|=100\ \Omega\sqrt{(1+100^2)/(1001^2+100^2)}=9.9\ \Omega$。其他数值：

| $f$ | 1 Hz | 5 Hz | 50 Hz | 500 Hz | 1 kHz | 5 kHz | 10 kHz | 100 kHz |
|---|---|---|---|---|---|---|---|---|
| $\lvert z_o\rvert$ (Ω) | 0.102 | 0.141 | 1.00 | 9.94 | 19.6 | 70.7 | 89.4 | 99.9 |

### 第 4 步 — 曲线草图

![对数坐标下的输出阻抗幅值：5 Hz 以下为 0.1 Ω，随后以 +20 dB/dec 上升，约 5 kHz 以上为 100 Ω](/q/G299/solution-impedance.zh.svg)

5 Hz 以下 $|z_o|$ 平坦，等于 $R_1\approx0.1\ \Omega$（即 $r_o/(1+T_0)$）；在 5 Hz 与 5 kHz 之间电感起主导作用（$|z_o|\approx\omega L$），以 $+20$ dB/dec 上升；约 5 kHz 以上环路增益已降到单位值以下，阻抗趋于开环值 $R_2=100\ \Omega$。
