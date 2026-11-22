# 详细步骤 - A290

共源共栅级的增益为 $g_{m1}R_{out}$，其中电流镜把完整的 $g_{m1}v_{in}$ 送到输出节点，$R_{out}$ 为 n 沟道共源共栅与 p 沟道共源共栅的并联。在电流不变时只改变 $W_1$ 和 $W_2$，会改变 $g_{m1}$ 而不改变 $R_{out}$，因此可直接求出所需的 $g_{m1}$；再由 $GB=g_{m1}/C$ 求负载电容。所有器件都饱和；$g_m=\sqrt{2K'(W/L)I_D}$，$r_{ds}=1/(\lambda I_D)$。

### 第 1 步 — 输出电阻

$r_{ds2}$ 只取决于电流，MC2、MC4 和 M4 都不变，因此改尺寸前后 $R_{out}$ 相同。所有器件为 10/1、50 µA：

$$
g_{mC2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mC4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{dsN}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=0.5\ \mathrm{M\Omega},\qquad r_{dsP}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=0.4\ \mathrm{M\Omega},
$$
$$
R_{out}\approx(g_{mC2}r_{dsC2}r_{ds2})\parallel(g_{mC4}r_{dsC4}r_{ds4})=(82.9\ \mathrm{M\Omega})\parallel(35.8\ \mathrm{M\Omega})=25.0\ \mathrm{M\Omega}.
$$

原增益为 $(331.7\ \mu\mathrm S)(25.0\ \mathrm{M\Omega})=8.3\times10^3$。

### 第 2 步 — 输入管的新宽度

$$
g_{m1}=\frac{A_v}{R_{out}}=\frac{10^4}{25.0\ \mathrm{M\Omega}}=400\ \mu\mathrm S,\qquad
\left(\frac WL\right)_1=\frac{g_{m1}^2}{2K'_NI_D}=\frac{(400\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=14.5 .
$$

故 $W_1=W_2\approx14.5$ µm，$L=1$ µm。由于 $g_{m1}\propto\sqrt{W_1}$，增益提高 20 % 需要输入对管加宽 45 %。

### 第 3 步 — 使 $GB=10$ MHz 的负载电容

输出节点是唯一的高阻节点，因此单位增益频率为 $g_{m1}/C$：

$$
C=\frac{g_{m1}}{2\pi(10\ \mathrm{MHz})}=\frac{400\ \mu\mathrm S}{6.283\times10^7\ \mathrm{s^{-1}}}=6.37\ \mathrm{pF}.
$$
