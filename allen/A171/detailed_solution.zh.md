# 详细步骤 - A171

该电路是折叠式共源共栅（folded cascode）：M1 把 $v_{in}$ 转换为电流，该电流在节点 A（M1、M2、M3 的漏极与 M4 的源极）折叠进入 p 沟道共源共栅管 M4；M2 和 M3 提供直流电流，M5–M6 构成 n 沟道共源共栅电流沉。把 $R_{out}$ 算作向上看进 M4 的电阻与向下看进 M5–M6 的电阻的并联，再求增益 $-G_mR_{out}$，其中 $G_m$ 是 $g_{m1}v_{in}$ 中到达输出端的部分。

### 第 1 步 — 小信号参数

所有器件都流过 $I_D=100\ \mu$A，$W/L=10$。由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $r_{ds}=1/(\lambda I_D)$：

$$
\begin{aligned}
g_{mN}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469\ \mu\mathrm S,&
r_{dsN}&=\frac1{(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=250\ \mathrm{k\Omega},\\
g_{mP}&=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S,&
r_{dsP}&=\frac1{(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=200\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 2 步 — 折叠节点 A 的电阻

$v_{in}$ 接交流地且不计 M4 时，节点 A 看到 M1（n 沟道）以及 M2、M3（p 沟道，栅极接固定的 $V_{P1}$）三个漏极：

$$
R_A=r_{ds1}\parallel r_{ds2}\parallel r_{ds3}=250\ \mathrm{k\Omega}\parallel200\ \mathrm{k\Omega}\parallel200\ \mathrm{k\Omega}=71.4\ \mathrm{k\Omega}.
$$

### 第 3 步 — 输出电阻

向上看进 M4 的漏极，它是以 $R_A$ 作源极负反馈的共栅器件：

$$
R_{up}=r_{ds4}+R_A+g_{m4}r_{ds4}R_A=200\ \mathrm{k\Omega}+71.4\ \mathrm{k\Omega}+(316\ \mu\mathrm S)(200\ \mathrm{k\Omega})(71.4\ \mathrm{k\Omega})=4.79\ \mathrm{M\Omega}.
$$

向下看进 M5 的漏极，该管以 $r_{ds6}$ 作源极负反馈：

$$
R_{dn}=r_{ds5}+r_{ds6}+g_{m5}r_{ds5}r_{ds6}=500\ \mathrm{k\Omega}+(469\ \mu\mathrm S)(250\ \mathrm{k\Omega})^2=29.8\ \mathrm{M\Omega}.
$$

$$
R_{out}=R_{up}\parallel R_{dn}=4.79\ \mathrm{M\Omega}\parallel29.8\ \mathrm{M\Omega}=4.13\ \mathrm{M\Omega}.
$$

只保留 $g_mr_{ds}R$ 项（$4.52$ MΩ 和 $29.3$ MΩ）得到常用近似值 $R_{out}\approx3.91$ MΩ。向上的通路受折叠节点较低的 $R_A$ 限制，决定了 $R_{out}$。

### 第 4 步 — 电压增益

输出端交流短路时，M1 的电流 $g_{m1}v_{in}$ 在节点 A 分流到 $R_A$ 和 M4 的源极，后者的电阻约为 $1/(g_{m4}+g_{ds4})=3.1$ kΩ。由分流得短路跨导

$$
G_m=g_{m1}\,\frac{g_{m4}+g_{ds4}}{g_{m4}+g_{ds4}+1/R_A}=0.958\,g_{m1}=449\ \mu\mathrm S ,
$$

开路增益为

$$
A_v=\frac{v_{out}}{v_{in}}=-G_mR_{out}=-(449\ \mu\mathrm S)(4.13\ \mathrm{M\Omega})=-1.85\times10^3\ \mathrm{V/V}.
$$

增益为负：$v_{in}$ 升高会从节点 A 抽取更多电流，于是经 M4 流入输出端的电流减少。完整的三节点分析（节点 A、输出端、M5–M6 之间的节点）给出 −1855，常用的简化式 $-g_{m1}R_{out}$ 配合近似值 $R_{out}=3.91$ MΩ 给出 −1836；因此增益约为 $-1.85\times10^3$ V/V，$R_{out}\approx4.1$ MΩ。
