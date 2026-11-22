# 详细步骤 - A318

输出缓冲级由两个级联跟随器组成：p 沟道源极跟随器 M9 驱动节点 B（Q10 的基极），npn 射极跟随器 Q10 驱动输出。每个跟随器贡献一个极点，大致等于其输出电导除以节点电容。先计算小信号参数和节点电容，再分别估计每个极点，然后把两个耦合节点（经 $C_\pi$ 相连）联立求解，并与 GB 比较。

### 第 1 步 — 小信号参数

$$
g_{m9}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S .
$$

M9 的源极约比输出（0 V）高一个 $V_{BE}$，因此 $V_{BS9}\approx2.5-0.66=1.84$ V，

$$
g_{mbs9}=\frac{g_{m9}\gamma_P}{2\sqrt{2|\phi_F|+V_{BS9}}}=\frac{(316\ \mu\mathrm S)(0.57)}{2\sqrt{0.8+1.84}}=55\ \mu\mathrm S,\qquad g_{ds8}=g_{ds9}=5\ \mu\mathrm S .
$$

Q10 在 1 mA 下：$g_{m10}=1\ \mathrm{mA}/25.9\ \mathrm{mV}=38.6$ mS，$g_\pi=g_{m10}/\beta_F=0.386$ mS；输出负载为 $G_L=1/500\ \Omega=2$ mS 加上 $g_{ds11}=40\ \mu$S。

### 第 2 步 — 节点电容

扩散区取 2 µm × W、零偏置，$C_{bd}=C_J(2W)+C_{JSW}\cdot2(W+2\ \mu\mathrm m)$，交叠电容 $C_{gd}=C_{GDO}W$：

| 节点 | 组成 | 数值 |
|---|---|---|
| B（对地） | $C_\mu$、$C_{bd8}$、$C_{gd8}$、$C_{sb9}$ | 1 + 0.27 + 0.03 + 0.02 = 1.32 pF |
| 输出（对地） | $C_L$、$C_{bd11}$、$C_{gd11}$ | 100 + 3.37 + 0.32 = 103.7 pF |
| B 到输出 | $C_\pi$ | 10 pF |
| M9 栅极到 B | $C_{gs9}$ | 0.019 pF |

### 第 3 步 — 分别估计

MOS 跟随器：节点 B 的电导为 $g_{m9}+g_{mbs9}+g_{ds8}+g_{ds9}$，而 $C_\pi$、$g_\pi$ 跨接在增益 $A_{BJT}\approx0.95$ 的跟随器两端，只有 $(1-A_{BJT})$ 的部分加载在 B 上：

$$
p_{MOS}\approx-\frac{g_{m9}+g_{mbs9}+g_{ds8}+g_{ds9}+g_\pi(1-A_{BJT})}{C_{B}+C_\pi(1-A_{BJT})}\approx-\frac{400\ \mu\mathrm S}{1.82\ \mathrm{pF}}\approx-2.2\times10^8\ \mathrm{rad/s},
$$

零点位于 $-g_{m9}/C_{gs9}\approx-1.7\times10^{10}$ rad/s。

BJT 跟随器：其输出电阻等于基极侧电阻加 $r_\pi$，再除以 $1+\beta_F$：

$$
R_o=\frac{r_\pi+1/(g_{m9}+g_{mbs9}+\dots)}{1+\beta_F}\approx\frac{(2.59+2.62)\ \mathrm{k\Omega}}{101}\approx52\ \Omega,
$$

与 $R_L\parallel r_{ds11}$ 并联约为 47 Ω，因此

$$
p_{BJT}\approx-\frac1{(47\ \Omega)(104\ \mathrm{pF})}\approx-2.1\times10^8\ \mathrm{rad/s}
$$

（计入 $C_\pi$ 约为 $-1.9\times10^8$ rad/s），零点位于 $-(g_{m10}+g_\pi)/C_\pi\approx-3.9\times10^9$ rad/s。

### 第 4 步 — 联立求解

两个极点相近，且节点经 $C_\pi$ 相连，因此联立求解两节点方程：

$$
\begin{aligned}
&\left[g_B+g_\pi+s(C_B+C_\pi)\right]v_b-(g_\pi+sC_\pi)v_o=g_{m9}v_{in},\\
&-(g_\pi+g_{m10}+sC_\pi)v_b+\left[G_L+g_{ds11}+g_\pi+g_{m10}+s(C_o+C_\pi)\right]v_o=0,
\end{aligned}
$$

其中 $g_B=g_{m9}+g_{mbs9}+g_{ds8}+g_{ds9}$。行列式给出一对复数极点

$$
p\approx(-67\pm j97)\ \mathrm{Mrad/s},\qquad |p|\approx118\ \mathrm{Mrad/s}\ (19\ \mathrm{MHz}),\quad \zeta\approx0.57 .
$$

### 第 5 步 — 与 GB 比较

$GB=2\pi(5\ \mathrm{MHz})=31.4$ Mrad/s，故 $10\,GB=314$ Mrad/s。跟随器的根只比 GB 高约 4–7 倍，并未超过 $10\,GB$。在 GB 处这对极点约增加 18° 的相位滞后（分别估计时为 16–18°），因此忽略输出缓冲级的设计会损失这么多相位裕度，例如 60° → 约 42°。零点很远，影响很小。
