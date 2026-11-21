# 详细步骤 - A262

按标准的两级运放设计顺序进行：压摆率确定尾电流，GB 确定 $g_{m1}$ 和输入管尺寸，正 ICMR 确定电流镜负载尺寸，负 ICMR 确定尾电流管尺寸，相位裕度规则 $g_{m6}=10g_{m1}$ 与 $V_{SG4}=V_{SG6}$ 确定输出级的尺寸和偏置。所有沟道长度均为 1 µm，因此以微米计的宽度等于宽长比 $S=W/L$。由平方律，$g_m=\sqrt{2K'SI_D}$，$V_{ov}=\sqrt{2I_D/(K'S)}$。

### 第 1 步 — 由压摆率求尾电流

第一级的压摆率等于尾电流对 $C_c$ 充电的速率：

$$
I_5=SR\cdot C_c=(10\ \mathrm{V/\mu s})(2\ \mathrm{pF})=20\ \mu\mathrm A,\qquad I_1=I_2=I_3=I_4=10\ \mu\mathrm A.
$$

### 第 2 步 — 由 GB 确定输入对

以 rad/s 计，$GB=g_{m1}/C_c$：

$$
g_{m1}=2\pi(10\ \mathrm{MHz})(2\ \mathrm{pF})=125.7\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_NI_1}=\frac{(125.7\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}=7.18 .
$$

故 $W_1=W_2\approx7.2$ µm。

### 第 3 步 — 由 +ICMR 确定电流镜负载

最大输入共模电压须使 M1 保持饱和：$V_{in}(\max)=V_{DD}-V_{SG3}+V_{TN}$。因此

$$
V_{SG3}=V_{DD}+V_{TN}-V_{in}(\max)=1+0.7-0.8=0.9\ \mathrm V,
$$

即过驱动电压为 0.2 V，

$$
S_3=S_4=\frac{2I_3}{K'_P(0.2\ \mathrm V)^2}=\frac{2(10\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.04\ \mathrm{V^2})}=10,
$$

故 $W_3=W_4=10$ µm。

### 第 4 步 — 由 −ICMR 确定尾电流管

最低输入须使 M5 保持饱和：$V_{in}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}$。由

$$
V_{GS1}=V_{TN}+\sqrt{\frac{2I_1}{K'_NS_1}}=0.7+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(7.18)}}=0.859\ \mathrm V,
$$

$$
V_{DS5}(\mathrm{sat})\le V_{in}(\min)-V_{SS}-V_{GS1}=0+1-0.859=0.141\ \mathrm V,
\qquad
S_5\ge\frac{2I_5}{K'_N(0.141\ \mathrm V)^2}=18.3 .
$$

M5 还要镜像 M8 中的 10 µA 参考电流（$S_8=10$）并流过 20 µA，所以取 $S_5=2S_8=20$，满足上述下限（$V_{DS5}(\mathrm{sat})=0.135$ V）。因此 $W_5=20$ µm。

### 第 5 步 — 输出级

相位裕度规则给出

$$
g_{m6}=10g_{m1}=1.257\ \mathrm{mS}.
$$

$V_{SG4}=V_{SG6}$ 意味着过驱动电压相等。由于 $g_m=K'SV_{ov}$，过驱动电压相等时 $g_{m6}/g_{m4}=S_6/S_4$。由 $g_{m4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(10\ \mu\mathrm A)}=100\ \mu\mathrm S$：

$$
S_6=S_4\frac{g_{m6}}{g_{m4}}=10\cdot\frac{1257\ \mu\mathrm S}{100\ \mu\mathrm S}=125.7,\qquad
I_6=\frac{g_{m6}^2}{2K'_PS_6}=\frac{(1.257\ \mathrm{mS})^2}{2(50\ \mu\mathrm{A/V^2})(125.7)}=125.7\ \mu\mathrm A.
$$

M7 流过 $I_7=I_6$ 并镜像 M8：$S_7=S_8\,I_7/I_8=10\times12.57=125.7$。故 $W_6\approx W_7\approx126$ µm。

输出下降沿压摆时 M6 截止：M7 的电流既要供给 $C_L$，又要供给流过 $C_c$ 的 $I_5$，所以 $(I_7-I_5)/C_L=(125.7-20)\ \mu\mathrm A/10\ \mathrm{pF}=10.6$ V/µs，满足 10 V/µs。（这要求 $I_7\ge I_5(1+C_L/C_c)=120$ µA。）

### 第 6 步 — 设计汇总与检验

| 器件 | $W$ (µm)，$L=1$ µm | 电流 |
|---|---|---|
| M1、M2 | 7.2 | 10 µA |
| M3、M4 | 10 | 10 µA |
| M5 | 20 | $I_5=20$ µA |
| M6 | 126 | 126 µA |
| M7 | 126 | $I_7=126$ µA |
| M8 | 10（题给） | 10 µA |

检验：$|p_2|=g_{m6}/C_L=2\,GB$，$z=g_{m6}/C_c=10\,GB$，给出 $\Phi_M\approx90°-\arctan0.5-\arctan0.1=57.7°$，与题设规则所要的约 60° 相符（$C_c=2$ pF 略低于通常的 $0.22C_L$）。直流增益为

$$
A_v=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}}=\frac{125.7\ \mu\mathrm S}{0.9\ \mu\mathrm S}\cdot\frac{1257\ \mu\mathrm S}{11.3\ \mu\mathrm S}\approx1.55\times10^4,
$$

功耗为 $(2\ \mathrm V)(10+20+125.7)\ \mu\mathrm A\approx0.31$ mW。
