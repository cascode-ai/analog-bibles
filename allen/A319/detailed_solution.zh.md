# 详细步骤 - A319

这是一个两级 CMOS 运放（以 M5 为尾电流管、电流镜负载的 n 沟道差分对 M1–M4，以及以电流沉 M7 为负载的 p 沟道共源管 M6），其后接由 M9 偏置的达林顿（Darlington）射极跟随器 Q1–Q2。由 M8 的镜像比例求出各电流，计算两级增益（达林顿级增益约为 1），再把每个基极处的电阻经 $1+\beta_F$ 反射，求出输出电阻。所有 MOSFET 都饱和，$g_m=\sqrt{2K'(W/L)I_D}$，$g_{ds}=\lambda I_D$。

### 第 1 步 — 静态电流

M8（2/2）流过 20 µA；M5、M7 和 M9 与它共用栅压，电流与 $W/L$ 成正比：

$$
I_5=20\ \mu\mathrm A\cdot\frac{12/2}{2/2}=120\ \mu\mathrm A,\qquad I_7=20\ \mu\mathrm A\cdot\frac{4/2}{2/2}=40\ \mu\mathrm A,\qquad I_9=20\ \mu\mathrm A\cdot\frac{20/2}{2/2}=200\ \mu\mathrm A .
$$

M1–M4 分享 $I_5$，各 60 µA。M6 流过 M7 的 40 µA（闭环会把输入调整到使其成立）。Q2 的发射极流过 $I_9=200$ µA，因此 $I_{C2}=198\ \mu$A，$I_{B2}=I_{E1}=1.98\ \mu$A；于是 $I_{C1}=1.96\ \mu$A，$I_{B1}\approx0.02\ \mu$A，对第二级的负载可忽略。

### 第 2 步 — 小信号增益

第一级（电流镜负载，完整的 $g_{m2}v_{in}$ 送入 M2/M4 节点）：

$$
g_{m2}=\sqrt{2(25\ \mu\mathrm{A/V^2})(4)(60\ \mu\mathrm A)}=109.5\ \mu\mathrm S,\qquad
A_1=\frac{g_{m2}}{g_{ds2}+g_{ds4}}=\frac{109.5\ \mu\mathrm S}{2(0.04\ \mathrm{V^{-1}})(60\ \mu\mathrm A)}=22.8 .
$$

第二级：

$$
g_{m6}=\sqrt{2(10\ \mu\mathrm{A/V^2})(7)(40\ \mu\mathrm A)}=74.8\ \mu\mathrm S,\qquad
A_2=\frac{g_{m6}}{g_{ds6}+g_{ds7}}=\frac{74.8\ \mu\mathrm S}{2(0.04\ \mathrm{V^{-1}})(40\ \mu\mathrm A)}=23.4 .
$$

达林顿跟随器增益约为 1 且忽略其负载效应，

$$
A_v=A_1A_2=22.8\times23.4\approx534\ \mathrm{V/V}.
$$

### 第 3 步 — 输出电阻

Q1 基极处的源电阻是第二级输出电阻 $r_{ds6}\parallel r_{ds7}=1/(3.2\ \mu\mathrm S)=312.5$ kΩ，且 $r_{\pi1}=\beta_FV_t/I_{C1}=100(25.9\ \mathrm{mV})/1.96\ \mu\mathrm A=1.32$ MΩ。Q2 基极看到的电阻（看进 Q1 的发射极）为

$$
R_{B2}=\frac{r_{\pi1}+r_{ds6}\parallel r_{ds7}}{1+\beta_F}=\frac{(1320+312.5)\ \mathrm{k\Omega}}{101}=16.2\ \mathrm{k\Omega}.
$$

由 $r_{\pi2}=100(25.9\ \mathrm{mV})/198\ \mu\mathrm A=13.1$ kΩ，

$$
R_{out}=\frac{r_{\pi2}+R_{B2}}{1+\beta_F}=\frac{(13.1+16.2)\ \mathrm{k\Omega}}{101}\approx290\ \Omega,
$$

并联的 $r_{ds9}=125$ kΩ 可以忽略。
