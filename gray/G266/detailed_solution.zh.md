# 详细步骤 - G266

$R_E$ 检测 $Q_2$ 的发射极电流，$R_F$ 把电流送回 $Q_1$ 的基极：这是电流并联反馈（电流放大器）。采用网络 $R_F$、$R_E$ 的 $g$ 参数，以 $g_{11f}$ 和 $g_{22f}$ 作为基本放大器的负载，以折算到集电极电流的 $g_{12f}$ 作为 $f$。输出阻抗受 $Q_2$ 基极电流的限制，因为环路不检测该电流。

### 第 1 步 — 小信号参数

两管均有 $g_m=I_C/V_T=38.46$ mA/V，$r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$，$r_o=V_A/I_C=100\ \mathrm{k\Omega}$；$\alpha_2=200/201$。

### 第 2 步 — 反馈网络

$$
g_{11f}=\frac1{R_E+R_F}=\frac1{5.2\ \mathrm{k\Omega}},\qquad g_{22f}=R_E\parallel R_F=192.3\ \Omega,
$$

$$
f=-\frac{R_E}{R_E+R_F}\cdot\frac1{\alpha_2}=-\frac{200}{5200}\cdot\frac{201}{200}=-0.0387,\qquad \frac1f=-25.9 .
$$

取负号是因为 $Q_2$ 的发射极电流向下流过 $R_E$ 时，会从输入节点抽出电流；$1/\alpha_2$ 把被检测的发射极电流折算为 $i_o$。

### 第 3 步 — 基本放大器

理想电流源驱动（$y_S=0$）时，输入节点看到 $(R_E+R_F)\parallel r_{\pi1}=5.2\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=2.6\ \mathrm{k\Omega}$。发射极接 $g_{22f}$ 的 $Q_2$ 呈现

$$
R_{in2}=r_{\pi2}+(\beta+1)(192.3\ \Omega)=43.9\ \mathrm{k\Omega},
$$

故 $Q_1$ 集电极看到 $R_{L1}\parallel r_{o1}\parallel R_{in2}=10\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega}\parallel43.9\ \mathrm{k\Omega}=7.53\ \mathrm{k\Omega}$。沿信号路径（$v_{be1}=i(2.6\ \mathrm{k\Omega})$，$v_{c1}=-g_{m1}v_{be1}(7.53\ \mathrm{k\Omega})$，$i_o=\beta v_{c1}/R_{in2}$）：

$$
a=-(2.6\ \mathrm{k\Omega})(38.46\ \mathrm{mA/V})(7.53\ \mathrm{k\Omega})\frac{200}{43.9\ \mathrm{k\Omega}}=-3434 .
$$

### 第 4 步 — 环路传输与电流增益

$$
T=af=(-3434)(-0.0387)=133,\qquad \frac{i_o}{i_s}=\frac{a}{1+T}=\frac{-3434}{133.7}=-25.7 .
$$

受控源的回归比给出相近的环路传输（$g_{m1}$ 为 131，$g_{m2}$ 为 142），直接节点分析给出 $i_o/i_s=-25.68$。负号反映了 $i_o$ 的参考方向（流入 $Q_2$ 集电极）。

### 第 5 步 — 输入阻抗

$$
Z_{in}=\frac{2.6\ \mathrm{k\Omega}}{1+T}=\frac{2600\ \Omega}{133.7}=19.4\ \Omega .
$$

### 第 6 步 — 输出阻抗

无反馈时，$Q_2$ 的集电极（发射极电阻 $192.3\ \Omega$，基极由 $R_{L1}\parallel r_{o1}$ 驱动）呈现

$$
z_{oa}\approx r_{o2}\left[1+\frac{g_{m2}(192.3\ \Omega)\,r_{\pi2}}{r_{\pi2}+R_{L1}\parallel r_{o1}+192.3\ \Omega}\right]=366\ \mathrm{k\Omega}.
$$

二端口结果 $(1+T)z_{oa}=49$ MΩ 是达不到的。环路保持 $Q_2$ 的发射极电流不变；集电极电压 $v$ 使 $v/r_{o2}$ 流过 $r_{o2}$，环路通过改变 $g_{m2}v_{be2}(1+1/\beta)$ 在发射极抵消它，只有作为基极电流流走的那部分 $v/[(\beta+1)r_{o2}]$ 到达集电极端。因此即使环路增益无穷大，也有 $Z_{out}<(\beta+1)r_{o2}=20.1$ MΩ。在 $T\approx133$ 时，精确节点分析给出

$$
Z_{out}\approx14.3\ \mathrm{M\Omega}.
$$

小结：$i_o/i_s\approx-25.7$，$T\approx133$，$Z_{in}\approx19.4\ \Omega$，$Z_{out}\approx14$ MΩ。
