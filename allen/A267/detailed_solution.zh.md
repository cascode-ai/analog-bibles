# 详细步骤 - A267

按标准的两级设计流程进行，只是所有器件类型都互补：由相位裕度规则选 $C_c$，用给定的 $I_5$ 检查压摆率，由 GB 确定输入对尺寸，由 $g_{m6}\ge10g_{m1}$ 确定 M6 尺寸，按平衡条件确定电流镜尺寸，按电流确定 M5、M7 尺寸，然后逐项检查指标。所有沟道长度均为 1 µm，因此宽长比 $S=W/L$ 等于以微米计的宽度。由平方律，$g_m=\sqrt{2K'SI_D}$，$V_{ov}=\sqrt{2I_D/(K'S)}$。

### 第 1 步 — $C_c$ 与压摆率

要获得 60° 裕度，在零点位于 $10\,GB$ 时输出极点至少应在 $2.2\,GB$。取 $g_{m6}=10g_{m1}$，这要求 $C_c\ge0.22C_L=2.2$ pF；选 $C_c=3$ pF。第一级的压摆率为

$$
SR=\frac{I_5}{C_c}=\frac{30\ \mu\mathrm A}{3\ \mathrm{pF}}=10\ \mathrm{V/\mu s},
$$

恰好处于临界（输出级在第 6 步检查）。

### 第 2 步 — 由 GB 确定输入对（p 沟道）

$$
g_{m1}=GB\cdot C_c=2\pi(5\ \mathrm{MHz})(3\ \mathrm{pF})=94.2\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_P(I_5/2)}=\frac{(94.2\ \mu\mathrm S)^2}{2(50\ \mu\mathrm{A/V^2})(15\ \mu\mathrm A)}=5.9\approx6 .
$$

### 第 3 步 — 输出管（n 沟道）M6

$$
g_{m6}\ge10g_{m1}=942\ \mu\mathrm S,\qquad
S_6=\frac{g_{m6}^2}{2K'_NI_6}=\frac{(942\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(95\ \mu\mathrm A)}=42.5\approx43 .
$$

### 第 4 步 — 电流镜负载 M3–M4

为消除系统失调，M6 的栅极应位于电流镜电压，$V_{GS3}=V_{GS6}$，即单位宽长比的电流相等：

$$
S_3=S_4=S_6\frac{I_5/2}{I_6}=43\cdot\frac{15\ \mu\mathrm A}{95\ \mu\mathrm A}=6.7\approx7 .
$$

电流镜极点检查，取 $C_{gs3}\approx0.67W_3L_3C_{ox}$，$g_{m3}=\sqrt{2(110\ \mu\mathrm{A/V^2})(7)(15\ \mu\mathrm A)}=152\ \mu\mathrm S$：

$$
\frac{g_{m3}}{2C_{gs3}}=\frac{152\ \mu\mathrm S}{2(0.67)(7\ \mu\mathrm m^2)(2.47\ \mathrm{fF/\mu m^2})}=6.6\times10^{9}\ \mathrm{rad/s}\gg10\,GB=3.1\times10^8\ \mathrm{rad/s}.
$$

### 第 5 步 — 输入共模范围与 M5、M7

**下限。** 只要 M1 的漏极（位于 $V_{SS}+V_{GS3}$）比其栅极高出不超过 $|V_{TP1}|$，M1 就保持饱和。取最坏情况阈值，

$$
V_{in}(\min)=V_{SS}+V_{GS3}(\max)-|V_{TP1}|(\min)=-2.5+\Big(0.85+\sqrt{\tfrac{2(15\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(7)}}\Big)-0.55=-2.0\ \mathrm V,
$$

以较大余量满足 $-1$ V 的指标。

**上限。** 当 $V_{in}\le V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1}$ 时 M5 保持饱和，其中

$$
V_{SG1}=|V_{TP1}|+\sqrt{\frac{2(15\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(6)}}=|V_{TP1}|+0.316\ \mathrm V .
$$

即使 $V_{SD5}(\mathrm{sat})\to0$，最坏情况下也只有 $V_{in}(\max)\le2.5-0.85-0.316=1.33$ V；对任何尺寸和阈值都有 $V_{in}(\max)<V_{DD}-|V_{TP}|(\min)=1.95$ V。要达到 $+2$ V 需要 $V_{SD5}(\mathrm{sat})+V_{SG1}\le0.5$ V，比阈值本身还小。**在 2.5 V 电源下，任何 p 沟道输入设计都无法满足 +2 V 的 ICMR 上限。** 取 $V_{SD5}(\mathrm{sat})=0.2$ V：

$$
S_5=\frac{2I_5}{K'_P(0.2\ \mathrm V)^2}=\frac{2(30\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.04\ \mathrm{V^2})}=30,
\qquad V_{in}(\max)=2.5-0.2-0.85-0.316=1.13\ \mathrm V
$$

（最坏情况；标称阈值下为 1.28 V）。M7 与 M5 栅压相同，故 $S_7=S_5I_6/I_5=30\cdot95/30=95$。

### 第 6 步 — 其余指标的检查

采用取整后的尺寸，$g_{m1}=94.9\ \mu\mathrm S$，$g_{m6}=948\ \mu\mathrm S$。

- 输出摆幅：$V_{out}(\max)=2.5-\sqrt{2(95\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(95)]}=2.3$ V，$V_{out}(\min)=-2.5+\sqrt{2(95\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(43)]}=-2.3$ V，超出 ±2 V。✓
- 增益：
$$
A_v=\frac{g_{m1}}{(\lambda_P+\lambda_N)I_5/2}\cdot\frac{g_{m6}}{(\lambda_N+\lambda_P)I_6}=\frac{94.9\ \mu\mathrm S}{(0.09)(15\ \mu\mathrm A)}\cdot\frac{948\ \mu\mathrm S}{(0.09)(95\ \mu\mathrm A)}\approx7.8\times10^3>5000 .\ ✓
$$
- 相位裕度：$|p_2|=g_{m6}/C_L=3.0\,GB$，$z=g_{m6}/C_c=10\,GB$，故 $\Phi_M\approx90°-\arctan(1/3)-\arctan(0.1)=66°$。✓
- 功耗：$P_{diss}=(5\ \mathrm V)(30+95)\ \mu\mathrm A=0.63\ \mathrm{mW}\le2$ mW。✓
- 压摆率：$I_5/C_c=10$ V/µs 只是恰好达到；输出上升沿时 M6 截止，固定的 $I_7=95\ \mu\mathrm A$ 须同时给 $C_L$ 和 $C_c$ 充电，约为 $I_7/(C_L+C_c)=7.3$ V/µs。因此在 $I_7=95\ \mu\mathrm A$ 下，SR > 10 V/µs 的指标严格来说达不到。

### 第 7 步 — 设计汇总

| 器件 | $W$ (µm)，$L=1$ µm | 电流 |
|---|---|---|
| M1、M2（p） | 6 | 15 µA |
| M3、M4（n） | 7 | 15 µA |
| M5（p） | 30 | 30 µA |
| M6（n） | 43 | 95 µA |
| M7（p） | 95 | 95 µA |
| $C_c$ | 3 pF | — |

该设计满足增益、GB、相位裕度、输出摆幅、功耗和 ICMR 下限指标。它无法满足 +2 V 的 ICMR 上限（最坏情况约 +1.13 V），且输出上升沿的压摆率被限制在约 7.3 V/µs。
