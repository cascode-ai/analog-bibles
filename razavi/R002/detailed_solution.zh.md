# 详细步骤 - R002

对饱和区电流模型求导，得到小信号参数，再代入给定偏置电流。

### 第 1 步 — 模型与近似

题目已说明两个器件均处于饱和区。令 $I=|I_D|$、$V_{ov}=|V_{GS}|-|V_{TH}|>0$。包含一阶 CLM 的平方律模型为

$$
I_0=\tfrac12\beta V_{ov}^2,\quad \beta=\mu C_{ox}(W/L),\quad
I=|I_D|=I_0(1+\lambda|V_{DS}|).
$$
$$
\begin{aligned}
g_m&\approx\frac{\partial I_0}{\partial V_{ov}}=\beta V_{ov}, & V_{ov}&\approx\sqrt{2I/\beta},\\
g_m&\approx\sqrt{2\beta I}, &
g_o&=\frac{\partial I}{\partial |V_{DS}|}=\lambda I_0=\frac{\lambda I}{1+\lambda|V_{DS}|},\\
r_O&=\frac{1}{g_o}=\frac{1+\lambda|V_{DS}|}{\lambda I}\approx\frac{1}{\lambda I}.
\end{aligned}
$$

数值答案采用通常的 $\lambda|V_{DS}|\ll1$ 近似：求 $V_{ov}$ 和 $g_m$ 时忽略 CLM 对直流电流的修正，但保留其一阶导数以得到有限的 $r_O$。题目未给出 $V_{DS}$，因此无法计算修正因子，也无法定量判断此近似的精度。

### 第 2 步 — 代入两种器件参数

取 $W/L=100$、$I=0.5$ mA：

$$
\begin{aligned}
\beta_n&=(134\ \mu\mathrm{A/V^2})(100)=13.4\ \mathrm{mA/V^2},\\
\beta_p&=(38.4\ \mu\mathrm{A/V^2})(100)=3.84\ \mathrm{mA/V^2},\\
g_{m,n}&\approx\sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=3.66\ \mathrm{mS},\\
g_{m,p}&\approx\sqrt{2(3.84\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=1.96\ \mathrm{mS},\\
r_{O,n}&\approx\frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=20\ \mathrm{k\Omega},\\
r_{O,p}&\approx\frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=10\ \mathrm{k\Omega},\\
(g_mr_O)_n&\approx(3.66\ \mathrm{mS})(20\ \mathrm{k\Omega})=73.2,\\
(g_mr_O)_p&\approx(1.96\ \mathrm{mS})(10\ \mathrm{k\Omega})=19.6.
\end{aligned}
$$

由 $V_{ov}=2I/g_m$ 得 NMOS、PMOS 的过驱动电压分别为 0.273 V、0.510 V。饱和条件要求 $|V_{DS}|\ge V_{ov}$，题设的工作状态意味着这些条件满足。由于 $\mathrm S\cdot\Omega=1$，本征增益无量纲。

### 第 3 步 — 本征增益的含义

对源极交流接地、无体效应信号且采用理想电流源负载的共源级，输出端的小信号模型为受控电流源 $g_mv_{in}$ 与 $r_O$ 并联：

![共源级的小信号等效电路：理想电流源负载对交流开路，受控电流源 gm vin 与输出电阻 rO 并联](/q/R002/diagram-01.svg)

在输出节点列 KCL：
$$
g_mv_{in}+\frac{v_{out}}{r_O}=0
\quad\Rightarrow\quad A_v=-g_mr_O.
$$
因此，本征增益幅值为 NMOS：73.2，PMOS：19.6。接入有限电阻负载时，$r_O$ 被 $r_O\parallel R_L$ 替代，共源级增益幅值减小。
