# 详细步骤 - G264

$R_E$ 检测 $Q_2$ 的发射极电流（输出端串联采样），$R_F$ 把电流送回 $Q_1$ 的基极（输入端并联求和）：这是电流并联反馈，构成电流放大器。用 $g$ 参数表示反馈网络 $R_F$、$R_E$，以 $g_{11f}$ 和 $g_{22f}$ 作为基本放大器的负载，以折算到集电极电流的 $g_{12f}$ 作为 $f$。与其他检测发射极电流的环路一样，输出阻抗需要单独分析。

### 第 1 步 — 小信号参数

两管：$g_m=I_C/V_T=38.46$ mA/V，$r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$，$r_o=V_A/I_C=100\ \mathrm{k\Omega}$，$\alpha_2=\beta/(\beta+1)=0.995$。

### 第 2 步 — 反馈网络

端口 1 为 $Q_1$ 的基极节点，端口 2 为 $Q_2$ 的发射极。$R_F$ 从端口 1 串联引出，$R_E$ 在端口 2 对地：

$$
g_{11f}=\frac1{R_E+R_F}=\frac1{1.1\ \mathrm{k\Omega}},\qquad g_{22f}=R_E\parallel R_F=90.9\ \Omega,\qquad
f=-\frac{R_E}{R_E+R_F}\cdot\frac1{\alpha_2}=-0.0914 .
$$

$Q_2$ 的发射极电流向下流过 $R_E$ 时，反馈电流从输入节点被抽出，故取负号；因子 $1/\alpha_2$ 把被检测的发射极电流 $i_o/\alpha_2$ 折算为输出电流 $i_o$。理想增益为 $1/f=-10.94$。

### 第 3 步 — 基本放大器

在输入端，$R_S$、$R_E+R_F$（来自 $g_{11f}$）与 $r_{\pi1}$ 并联：

$$
R_{i}=R_S\parallel(R_E+R_F)\parallel r_{\pi1}=1\ \mathrm{k\Omega}\parallel1.1\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=476\ \Omega .
$$

$Q_2$ 发射极接 $g_{22f}$，故其基极呈现 $R_{in2}=r_{\pi2}+(\beta+1)(90.9\ \Omega)=23.5\ \mathrm{k\Omega}$，$Q_1$ 集电极看到 $R_{L1}\parallel r_{o1}\parallel R_{in2}=3305\ \Omega$。沿信号路径，$v_{be1}=i\,R_i$，$v_{c1}=-g_{m1}v_{be1}(3305\ \Omega)$，$i_{b2}=v_{c1}/R_{in2}$，$i_o=\beta i_{b2}$：

$$
a=\frac{i_o}{i}=-(476\ \Omega)(38.46\ \mathrm{mA/V})(3305\ \Omega)\frac{200}{23.5\ \mathrm{k\Omega}}=-515 .
$$

### 第 4 步 — 环路传输与电流增益

$$
T=af=(-515)(-0.0914)=47.1,\qquad
\frac{i_o}{i_s}=\frac{a}{1+T}=\frac{-515}{48.1}=-10.7 .
$$

$g_{m1}$ 的回归比（45.8）给出基本相同的环路传输，直接节点分析给出 $i_o/i_s=-10.72$。增益为负，是因为 $i_o$ 定义为流入 $Q_2$ 集电极，而输入电流使 $Q_2$ 的发射极电流向外流经 $R_E$。

### 第 5 步 — 输入阻抗

并联求和使计入负载的输入电阻除以 $1+T$：

$$
Z_{in}=\frac{476\ \Omega}{48.1}=9.9\ \Omega ,
$$

此值包含 $R_S$（不含 $R_S$ 时约为 10.0 Ω）。

### 第 6 步 — 输出阻抗

无反馈时，发射极电阻为 $R'_E=g_{22f}=90.9\ \Omega$、基极电阻为 $R_b=R_{L1}\parallel r_{o1}$ 的 $Q_2$ 集电极呈现

$$
z_{oa}\approx r_{o2}\left[1+\frac{g_{m2}R'_E\,r_{\pi2}}{r_{\pi2}+R_b+R'_E}\right]=299\ \mathrm{k\Omega},
$$

由二端口公式将得到 $(1+T)z_{oa}=14.4$ MΩ。这高估了 $Z_{out}$：环路保持的是 $Q_2$ 的发射极电流，而集电极电流与之相差基极电流，基极电流未被检测。发射极电流保持不变时，集电极上的电压 $v$ 使 $v/r_{o2}$ 流过 $r_{o2}$；为保持发射极电流不变须有 $g_{m2}v_{be2}(1+1/\beta)=-v/r_{o2}$，因此集电极电流只变化 $v/[(\beta+1)r_{o2}]$。故输出阻抗的上限为 $(\beta+1)r_{o2}=20$ MΩ；在 $T\approx47$ 时，精确节点分析给出

$$
Z_{out}\approx8.5\ \mathrm{M\Omega}.
$$

小结：$i_o/i_s\approx-10.7$，$T\approx47$，$Z_{in}\approx9.9\ \Omega$，$Z_{out}\approx8.5$ MΩ。
