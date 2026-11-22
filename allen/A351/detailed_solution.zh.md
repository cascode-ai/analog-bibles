# 详细步骤 - A351

这是一个单级放大器，唯一的高阻节点是共源共栅输出端，所以增益为 $G_mR_{out}$，GB 为 $G_m/C_c$，压摆率为最大输出电流除以 $C_c$。弱反型区中 $g_m=I_D/(nV_t)$。对摆幅设计，M12–M15 产生的栅压必须使 M6 和 M7 两端恰好保留 $V_{DS}(\mathrm{sat})=0.1$ V；在弱反型区，等电流下两个栅源电压相差 0.1 V 对应于 W/L 的指数比。

### 第 1 步 — 电流与输出跨导

尾电流给出 $I_1=I_2=I_3=I_4=50$ nA。M6 镜像 M4、M8 镜像 M3，尺寸相同，且 M9:M7 = 1:1，所以电流镜增益 $b=1$，$I_6=I_7=I_8=50$ nA。全部差模信号电流都到达输出：M4 的电流经 M6 到达输出，M3 的电流经 M8 → M9 → M7 反相后到达，故

$$
i_{out}=b\,g_{m1}v_{in},\qquad g_{m1}=\frac{I_1}{n_nV_t}=\frac{50\ \mathrm{nA}}{(2.5)(26\ \mathrm{mV})}=0.769\ \mu\mathrm S .
$$

### 第 2 步 — 输出电阻与增益

输出端上方是 M6 之上的共源共栅管 M10，下方是 M7 之上的 M11，用 $R\approx g_mr_{ds}r_{ds}$：

$$
g_{m10}=\frac{50\ \mathrm{nA}}{(1.5)(26\ \mathrm{mV})}=1.28\ \mu\mathrm S,\quad r_{ds6}=r_{ds10}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mathrm{nA})}=400\ \mathrm{M\Omega},
$$
$$
g_{m10}r_{ds10}r_{ds6}=(1.28\ \mu\mathrm S)(400\ \mathrm{M\Omega})^2=205\ \mathrm{G\Omega};
$$
$$
g_{m11}=0.769\ \mu\mathrm S,\quad r_{ds7}=r_{ds11}=500\ \mathrm{M\Omega},\quad g_{m11}r_{ds11}r_{ds7}=192\ \mathrm{G\Omega}.
$$

$$
R_{out}=205\ \mathrm{G\Omega}\parallel192\ \mathrm{G\Omega}=99.3\ \mathrm{G\Omega},\qquad
A_v=g_{m1}R_{out}=(0.769\ \mu\mathrm S)(99.3\ \mathrm{G\Omega})\approx7.6\times10^4\ \mathrm{V/V}\ (97.7\ \mathrm{dB}).
$$

代入弱反型表达式，得到同一结果的闭合形式：

$$
A_v=\frac{I_5}{2I_7}\,\frac{b/n_n}{V_t^2(\lambda_P^2n_p+\lambda_N^2n_n)}=\frac{0.4}{(6.76\times10^{-4}\ \mathrm{V^2})(0.00775\ \mathrm{V^{-2}})}=7.6\times10^4 .
$$

### 第 3 步 — GB、SR 与功耗

$C_c$ 接在输出端，

$$
GB=\frac{b\,g_{m1}}{C_c}=\frac{7.69\times10^{-7}\ \mathrm S}{C_c}\quad(7.69\times10^5\ \mathrm{rad/s}=122\ \mathrm{kHz\ for\ }C_c=1\ \mathrm{pF}).
$$

压摆时全部 $I_5$ 流过一个输入管，电流镜向输出提供 $bI_5$：

$$
SR=\frac{bI_5}{C_c}=\frac{100\ \mathrm{nA}}{C_c}\quad(0.1\ \mathrm{V/\mu s\ for\ }C_c=1\ \mathrm{pF}).
$$

$V_{DD}$ 为 M3 和 M4（100 nA）、M8（50 nA）、M6（50 nA）、M13（50 nA）和 M14（50 nA）供电，共 300 nA：

$$
P_{diss}=(3\ \mathrm V)(300\ \mathrm{nA})=0.9\ \mu\mathrm W .
$$

### 第 4 步 — 最大摆幅的共源共栅偏置

最大输出为 $V_{DD}-V_{SD6}(\mathrm{sat})-V_{SD10}(\mathrm{sat})=1.5-0.2=1.3$ V，这要求 $V_{SD6}=0.1$ V。M10 的栅极位于 $V_{DD}-V_{SG13}$，源极位于 $V_{DD}-V_{SG13}+V_{SG10}$，故

$$
V_{SD6}=V_{SG13}-V_{SG10}=0.1\ \mathrm V .
$$

弱反型区中 $V_{SG}=n_pV_t\ln\bigl[I/((W/L)I_{DO})\bigr]$。电流相等 $I_{13}=I_{10}=50$ nA 时，差值只取决于尺寸比：

$$
V_{SG13}-V_{SG10}=n_pV_t\ln\frac{(W/L)_{10}}{(W/L)_{13}}=0.1\ \mathrm V
\;\Rightarrow\;
\Bigl(\frac WL\Bigr)_{13}=10\,e^{-0.1/(1.5\cdot0.026)}=10\,e^{-2.564}=0.77 .
$$

M14 与 M13 共栅，并须为 M15 提供 50 nA，所以 $(W/L)_{14}=0.77$。

### 第 5 步 — 最小摆幅的共源共栅偏置与 M12

同理，M15 设定 M11 的栅极，在电流均为 50 nA 时 $V_{DS7}=V_{GS15}-V_{GS11}=0.1$ V：

$$
\Bigl(\frac WL\Bigr)_{15}=10\,e^{-0.1/(2.5\cdot0.026)}=10\,e^{-1.538}=2.15,
$$

由此 $v_{out}(\min)=V_{SS}+0.2\ \mathrm V=-1.3$ V。M12 的栅压与 M5 相同，M5 在 W/L = 10 时承载 100 nA；要承载 50 nA，取 $(W/L)_{12}=5$。

取 $I_{DO}=2$ nA，绝对值为 $V_{SG10}=36$ mV、$V_{SG13}=136$ mV、$V_{GS11}=60$ mV、$V_{GS15}=160$ mV，验证了 0.1 V 的差值。

| 器件 | W/L |
|---|---|
| M12 | 5 |
| M13、M14 | 0.77 |
| M15 | 2.15 |
