# 详细步骤 - A299

折叠式共源共栅运放只有一个高阻节点——输出端，它给出主极点；其余各节点都是低阻节点，其极点近似等于看进该节点的电导（通常为 $1/g_m$）除以节点电容。对差模信号，M1/M2 的公共源极节点视为交流地。每个节点的电容按如下方式计入：每个接在该节点的栅源电容（栅极侧或源极侧，另一端为交流地）计 $C_{gs}$，每个漏结计 $C_{bd}$。

### 第 1 步 — 输出端的主极点

从输出端向上看是 p 沟道共源共栅管 M7，其源极看到 $r_{ds2}\parallel r_{ds5}$；向下看是 n 沟道共源共栅 M9 叠在 M11 上：

$$
R_{out}\approx(g_{m9}r_{ds9}r_{ds11})\parallel\left[g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds5})\right]
=(400\ \mathrm{M\Omega})\parallel\left[(50\ \mu\mathrm S)(1\ \mathrm{M\Omega})(0.667\ \mathrm{M\Omega})\right]=400\parallel33.3=30.8\ \mathrm{M\Omega},
$$
$$
p_{out}=-\frac1{R_{out}C_L}=-\frac1{(30.8\ \mathrm{M\Omega})(10\ \mathrm{pF})}=-3.25\times10^3\ \mathrm{rad/s}\ (517\ \mathrm{Hz}).
$$

### 第 2 步 — 折叠节点 A 和 B

节点 A 连接 M1 和 M4 的漏极以及共源共栅管 M6 的源极；看进 M6 源极的电阻约为 $1/g_{m6}$，电容为 $C_{gs6}$ 加两个漏结电容：

$$
p_A\approx-\frac{g_{m6}}{C_{gs}+2C_{bd}}=-\frac{50\ \mu\mathrm S}{120\ \mathrm{fF}}=-4.17\times10^8\ \mathrm{rad/s},\qquad p_B\approx-\frac{g_{m7}}{C_{gs}+2C_{bd}}=-4.17\times10^8\ \mathrm{rad/s}.
$$

### 第 3 步 — 电流镜节点

| 节点 | 电阻 | 电容 | 极点 (rad/s) |
|---|---|---|---|
| M6/M8 漏极，M10/M11 栅极 | $1/g_{m10}$ | $2C_{gs}+2C_{bd}=220$ fF | $-g_{m10}/(220\ \mathrm{fF})=-4.55\times10^8$ |
| M8 源极（M10 漏极） | $1/g_{m8}$ | $C_{gs}+C_{bd}=110$ fF | $-g_{m8}/(110\ \mathrm{fF})=-9.09\times10^8$ |
| M9 源极（M11 漏极） | $1/g_{m9}$ | $C_{gs}+C_{bd}=110$ fF | $-g_{m9}/(110\ \mathrm{fF})=-9.09\times10^8$ |

在直流时，由于经 M10 栅极的局部反馈，M8 源极节点显得硬得多，约为 $1/(g_{m8}r_{ds8}g_{m10})=50\ \Omega$。但不能用这一电阻计算极点：该反馈需要 M6/M8 漏极节点摆动，而该节点自身的 220 fF 在约 $4.5\times10^8$ rad/s 以上消除了环路增益。这两个节点强耦合；联立求解得到一对复数极点，接近 $C_6C_8s^2+g_{m8}C_6s+g_{m8}g_{m10}=0$ 的根，模为 $\sqrt{g_{m8}g_{m10}/(C_6C_8)}\approx6.4\times10^8$ rad/s，取代各自独立估计的 $-4.55\times10^8$ 和 $-9.09\times10^8$ rad/s。不存在 $10^{11}$ rad/s 量级的极点。

### 第 4 步 — 完整节点方程校核与汇总

对六节点小信号模型（忽略 $C_{gd}$，尾电流节点为交流地）作数值求解，得到

$$
-3.10\times10^3,\quad -4.33\times10^8,\quad -4.38\times10^8,\quad (-4.65\pm j4.51)\times10^8,\quad -9.18\times10^8\ \mathrm{rad/s},
$$

与估计值吻合（保留加在 $g_mr_{ds}^2$ 上的 $r_{ds}$ 项时主极点为 $-3.10\times10^3$ rad/s）。所有非主极点都在 $4\times10^8$ rad/s（约 66 MHz）附近或以上，远高于 $GB\approx g_{m1}/C_L=10^7$ rad/s。若保留尾电流节点（210 fF，约 $2g_{mN}$），会增加一个位于 $-9.7\times10^8$ rad/s 附近的第七个模态；它与 M9 源极极点和一个折叠节点极点一样，在 $v_{out}/v_{in}$ 中几乎被邻近的零点抵消。
