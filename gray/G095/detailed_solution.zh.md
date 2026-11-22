# 详细步骤 - G095

两个二极管连接的晶体管 $Q_1$、$Q_2$ 使 $Q_3$ 的基极比地高两个基极–发射极压降。$Q_3$ 自身的 $V_{BE}$ 用掉其中一个，另一个就加在 700-Ω 发射极电阻上，从而设定 $I_{OUT}$。先求 $I_{IN}$，再解输出回路的 KVL 方程，最后计算带发射极负反馈（emitter degeneration）的 $Q_3$ 的输出电阻。

### 第 1 步 — 输入电流

13.7-kΩ 电阻流过 $I_{IN}$，该电流依次流经串联的 $Q_2$ 和 $Q_1$：

$$
I_{IN}=\frac{15\ \mathrm V-2V_{BE}}{13.7\ \mathrm{k\Omega}},\qquad V_{BE}=V_T\ln\frac{I_{IN}}{I_S}.
$$

从 0.7 V 开始迭代，得 $V_{BE}=(26\ \mathrm{mV})\ln(0.996\ \mathrm{mA}/5\times10^{-15}\ \mathrm A)=0.676$ V，以及

$$
I_{IN}=\frac{15\ \mathrm V-1.353\ \mathrm V}{13.7\ \mathrm{k\Omega}}=0.996\ \mathrm{mA}.
$$

### 第 2 步 — 输出电流

从 $Q_3$ 的基极到地列 KVL，一侧经二极管堆叠，另一侧经 $Q_3$ 和发射极电阻 $R_E=700\ \Omega$（忽略基极电流）：

$$
2V_{BE}(I_{IN})=V_{BE3}(I_{OUT})+I_{OUT}R_E
\quad\Rightarrow\quad
I_{OUT}R_E=V_{BE}(I_{IN})+V_T\ln\frac{I_{IN}}{I_{OUT}} .
$$

由于 $I_{OUT}\approx I_{IN}$，对数项很小。初始估计为 $I_{OUT}\approx0.676\ \mathrm V/700\ \Omega=0.966$ mA。再迭代一次得

$$
I_{OUT}=\frac{0.676\ \mathrm V+(26\ \mathrm{mV})\ln(0.996/0.967)}{700\ \Omega}=\frac{0.677\ \mathrm V}{700\ \Omega}=0.967\ \mathrm{mA}.
$$

若 $R_E$ 中取发射极电流 $(\beta_F+1)I_{OUT}/\beta_F$，结果为 0.963 mA。若对所有器件取 $V_{BE}=0.7$ V，则 $I_{OUT}=1.0$ mA。

### 第 3 步 — $Q_3$ 的小信号参数

$$
g_{m3}=\frac{0.967\ \mathrm{mA}}{26\ \mathrm{mV}}=37.2\ \mathrm{mA/V},\qquad
r_{\pi3}=\frac{\beta_0}{g_{m3}}=5.37\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{130\ \mathrm V}{0.967\ \mathrm{mA}}=134\ \mathrm{k\Omega}.
$$

$Q_3$ 的基极由二极管堆叠驱动，即 $2/g_m=52\ \Omega$ 与 13.7 kΩ 并联，所以 $R_B\approx52\ \Omega$。

### 第 4 步 — 输出电阻

对发射极电阻为 $R_E$、基极电阻为 $R_B$ 的晶体管，流入集电极的测试电流在 $R_E\|(r_\pi+R_B)$ 上产生 $v_e$。于是基极–发射极电压为 $-v_e\,r_\pi/(r_\pi+R_B)$，$g_m$ 乘以该电压后叠加到流过 $r_o$ 的电流上。取一阶近似，

$$
R_o\approx r_{o3}\left[1+\frac{g_{m3}R_Er_{\pi3}}{r_{\pi3}+R_E+R_B}\right]\approx r_{o3}\left[1+g_{m3}\left(R_E\,\|\,r_{\pi3}\right)\right]\quad(R_B\ll r_{\pi3}).
$$

由 $R_E\|r_{\pi3}=700\ \Omega\,\|\,5.37\ \mathrm{k\Omega}=619\ \Omega$：

$$
R_o=(134\ \mathrm{k\Omega})\left[1+(37.2\ \mathrm{mA/V})(619\ \Omega)\right]=(134\ \mathrm{k\Omega})(24.0)=3.2\ \mathrm{M\Omega}.
$$

计入 $R_B=52\ \Omega$ 后变化不到 1 %（3.20 MΩ）。一部分发射极信号电流经基极返回，因此乘以 $g_{m3}$ 的是 $R_E\|r_{\pi3}$ 而不是 $R_E$。只用 $R_E$ 会把 $R_o$ 高估为 3.6 MΩ。
