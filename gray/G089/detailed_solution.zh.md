# 详细步骤 - G089

在 Widlar 电流源中，$R_2$ 承担两个基极–发射极电压之差。先由 $R_1$ 求输入电流，再利用指数律沿基极–发射极回路列 KVL，按 5 µA 确定 $R_2$。$Q_2$ 是带发射极负反馈（emitter degeneration）的晶体管，其基极由二极管连接的 $Q_1$ 的低阻抗驱动，所以它的输出电阻是 $r_{o2}$ 乘以 $1+g_{m2}(R_2\|r_{\pi2})$。

### 第 1 步 — 输入电流

$Q_1$ 为二极管连接，所以 $I_{IN}=(V_{CC}-V_{BE1})/R_1$，其中 $V_{BE1}=V_T\ln(I_{IN}/I_S)$。从 0.7 V 开始迭代：

$$
V_{BE1}=(26\ \mathrm{mV})\ln\frac{0.977\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.676\ \mathrm V,\qquad
I_{IN}=\frac{30\ \mathrm V-0.676\ \mathrm V}{30\ \mathrm{k\Omega}}=0.977\ \mathrm{mA}.
$$

$V_{BE1}$ 远小于 $V_{CC}$，所以其精确值几乎无关紧要：取 0.7 V 也得到 0.977 mA。

### 第 2 步 — 确定 $R_2$

两管基极相连，$Q_1$ 的发射极接地，所以从公共基极节点经两个发射极到地列 KVL（忽略基极电流）：

$$
V_{BE1}=V_{BE2}+I_{OUT}R_2\quad\Rightarrow\quad
R_2=\frac{V_{BE1}-V_{BE2}}{I_{OUT}}=\frac{V_T}{I_{OUT}}\ln\frac{I_{IN}}{I_{OUT}},
$$

其中对两个相同的器件都用了 $V_{BE}=V_T\ln(I_C/I_S)$。数值计算：

$$
R_2=\frac{26\ \mathrm{mV}}{5\ \mu\mathrm A}\ln\frac{0.977\ \mathrm{mA}}{5\ \mu\mathrm A}=(5.2\ \mathrm{k\Omega})\ln(195.5)=(5.2\ \mathrm{k\Omega})(5.276)=27.4\ \mathrm{k\Omega}.
$$

计入基极电流（$I_{C1}=0.973$ mA，$R_2$ 中的发射极电流为 $I_{OUT}(\beta_F+1)/\beta_F$）得 27.3 kΩ。电流缩小 195 倍只需 27.4 kΩ，因为 $R_2$ 上的压降仅为 $V_T\ln(195.5)=137$ mV。

### 第 3 步 — 输出电阻

$Q_2$ 有发射极负反馈电阻 $R_2$，其基极只看到 $Q_1$ 的二极管电阻（$\approx1/g_{m1}=27\ \Omega$），实际上是交流地。这种带负反馈电路的输出电阻为

$$
R_o\approx r_{o2}\left[1+g_{m2}\left(R_2\,\|\,r_{\pi2}\right)\right],
$$

其中 $r_{\pi2}$ 与 $R_2$ 并联，是因为一部分信号电流经基极返回。在 $I_C=5\ \mu\mathrm A$ 时：

$$
g_{m2}=\frac{5\ \mu\mathrm A}{26\ \mathrm{mV}}=0.192\ \mathrm{mA/V},\qquad
r_{\pi2}=\frac{\beta_0}{g_{m2}}=1.04\ \mathrm{M\Omega},\qquad
r_{o2}=\frac{V_A}{I_{OUT}}=\frac{130\ \mathrm V}{5\ \mu\mathrm A}=26\ \mathrm{M\Omega},
$$

$$
R_2\|r_{\pi2}=26.7\ \mathrm{k\Omega},\qquad
R_o=(26\ \mathrm{M\Omega})\left[1+(0.192\ \mathrm{mA/V})(26.7\ \mathrm{k\Omega})\right]=(26\ \mathrm{M\Omega})(6.14)=160\ \mathrm{M\Omega}.
$$

忽略 $r_{\pi2}$ 时得 163 MΩ。由于 $g_{m2}R_2=\ln(I_{IN}/I_{OUT})=5.3$，负反馈使输出电阻比 $r_{o2}$ 提高约 6 倍。
