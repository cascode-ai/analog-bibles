# 详细步骤 - A216

在给定偏置下计算 M1、M2 的小信号参数，其中包括 M1 的体跨导（body transconductance）——其源极比衬底高 5 V——然后在输出节点列 KCL，求增益和输出电阻。

### 第 1 步 — 偏置与工作区

$v_{OUT}=0$，两管电流均为 $I_D=200\ \mu\mathrm A$：

- M1：$V_{DS1}=5-0=5$ V，$V_{SB1}=0-(-5)=5$ V。
- M2：$V_{DS2}=0-(-5)=5$ V；其栅极接固定偏置，对小信号而言是只有 $g_{ds2}$ 的电流沉。

两管的漏源电压都远大于过驱动电压（约 0.6 V，见第 2 步），故均处于饱和区。

### 第 2 步 — 小信号参数

平方律跨导、体跨导和输出电导：

$$
g_{m1}=\sqrt{2K'_N\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(200\ \mu\mathrm A)}=663.3\ \mu\mathrm S,
$$

$$
g_{mbs1}=\frac{\gamma\,g_{m1}}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(0.4\ \mathrm{V^{1/2}})(663.3\ \mu\mathrm S)}{2\sqrt{0.7\ \mathrm V+5\ \mathrm V}}=55.6\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=(0.04\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=8\ \mu\mathrm S .
$$

过驱动电压为 $V_{ov}=2I_D/g_{m1}=0.603$ V。

### 第 3 步 — 电压增益

在 M1 的小信号模型中，栅极为 $v_{in}$，源极为 $v_{out}$，漏极（+5 V）和衬底（−5 V）交流接地，故 $v_{gs1}=v_{in}-v_{out}$，$v_{bs1}=-v_{out}$。在（空载）输出节点列 KCL，汇集 M1 的受控电流以及 $g_{ds1}$、$g_{ds2}$ 中的电流：

$$
g_{m1}(v_{in}-v_{out})-g_{mbs1}v_{out}-g_{ds1}v_{out}-g_{ds2}v_{out}=0 ,
$$

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}
=\frac{663.3}{663.3+55.6+8+8}=\frac{663.3}{734.9}=0.903\ \mathrm{V/V}.
$$

体效应是主要的损失：若无 $g_{mbs1}$，增益为 0.977。

### 第 4 步 — 输出电阻

令 $v_{in}=0$，在输出端加测试电压 $v_t$，同样四个电导承载测试电流，$i_t=(g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2})v_t$：

$$
R_{out}=\frac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}=\frac{1}{734.9\ \mu\mathrm S}=1.36\ \mathrm{k\Omega}.
$$

若偏置电流改用含 $(1+\lambda V_{DS})$ 因子的形式，则 $V_{ov1}=\sqrt{2I_D/[\beta(1+\lambda V_{DS1})]}=0.550$ V，$g_{m1}=2I_D/V_{ov1}=726.6\ \mu\mathrm S$；于是 $g_{mbs1}=60.9\ \mu\mathrm S$，$A_v\approx0.904$，$R_{out}\approx1.24$ kΩ。两种一阶模型的用法都自洽；结论 $A_v\approx0.90$、$R_{out}\approx1.2$–$1.4$ kΩ 不变。
