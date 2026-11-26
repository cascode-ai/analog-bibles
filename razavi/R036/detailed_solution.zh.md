# 详细步骤 - R036

**思路：** 先用电容电压连续性求阶跃前后的节点电压，再用 NMOS 电流模型和 X 点的节点方程求充电过程。忽略节点 X 的寄生电容和沟道长度调制（$\lambda=0$）。

### 第 1 步 — 电容电压与输入阶跃

按原图极性，定义电容电压 $V_{C1}=V_{in}-V_X$，以栅极一侧为正。有限的支路电流无法瞬间改变 $C_1$ 的电荷，因此 $V_{C1}(0^+)=V_{C1}(0^-)=3\ \mathrm{V}$。用阶跃前后的 $V_{in}$ 分别求 $V_X$。

$$
\begin{aligned}
V_X(0^-)&=V_{in}(0^-)-V_{C1}(0^-)=0\ \mathrm{V}-3\ \mathrm{V}=-3\ \mathrm{V},\\
V_X(0^+)&=V_{in}(0^+)-V_{C1}(0^+)=3\ \mathrm{V}-3\ \mathrm{V}=0\ \mathrm{V}.
\end{aligned}
$$

在 $0^-$ 时，负的源极电压使源衬结正偏。使用题给的电容电压作为该时刻的初值。下面的沟道模型用于求阶跃后的响应。

### 第 2 步 — 工作区与节点方程

阶跃后，栅极和漏极均保持在 3 V，源极电压为 $V_X$，衬底接地。因此

$$
V_{GS}=V_{DS}=3\ \mathrm{V}-V_X,\qquad V_{SB}=V_X.
$$

体效应阈值的通用公式为

$$
V_{TH}=V_{TH0}+\gamma
\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).
$$

在 $0^+$ 时，$V_{SB}=0$，所以 $V_{TH}=V_{TH0}=0.7\ \mathrm{V}$，且 $V_{GS}>V_{TH}$。饱和条件为 $V_{DS}\ge V_{GS}-V_{TH}$。充电过程中 $V_{DS}=V_{GS}$，且 $V_X\ge0$ 时 $V_{TH}>0$，因此器件只要导通就满足饱和条件。

规定 $I_D$ 从沟道流入 X 为正，电容电流从 X 流向栅极一侧为正。按基尔霍夫电流定律，两者相等。漏极电流采用饱和区平方律。

$$
C_1\frac{d(V_X-V_{in})}{dt}=I_D,\qquad
I_D=\frac{\beta}{2}(V_{GS}-V_{TH})^2.
$$

阶跃后 $V_{in}=3\ \mathrm{V}$ 保持不变。将 $V_{SB}=V_X$ 代入阈值公式得到 $V_{TH}(V_X)$，充电方程为

$$
C_1\frac{dV_X}{dt}
=\frac{\beta}{2}\big[3\ \mathrm{V}-V_X-V_{TH}(V_X)\big]^2
\qquad(V_{GS}>V_{TH}).
$$

在 $0^+$ 时，过驱动电压为 $3\ \mathrm{V}-0.7\ \mathrm{V}=2.3\ \mathrm{V}$。代入可得

$$
I_D(0^+)=\frac{\beta}{2}(2.3\ \mathrm{V})^2
=(2.645\ \mathrm{V^2})\beta,\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}=\frac{I_D(0^+)}{C_1}.
$$

### 第 3 步 — 计入体效应的终值

随着 $V_X$ 上升，$V_{GS}$ 降低而 $V_{TH}$ 升高。过驱动电压趋于零时，充电电流也趋于零。因此终值 $V_{X,\infty}$ 满足

$$
V_{DD}-V_{X,\infty}
=V_{TH0}+\gamma\left(
\sqrt{2|\phi_F|+V_{X,\infty}}-\sqrt{2|\phi_F|}
\right).
$$

令 $u=\sqrt{2|\phi_F|+V_{X,\infty}}$，则 $V_{X,\infty}=u^2-2|\phi_F|$。这样可消去含未知量的根式，得到

$$
u^2+\gamma u
=V_{DD}-V_{TH0}+2|\phi_F|+\gamma\sqrt{2|\phi_F|}.
$$

代入题给参数，得 $u^2+(0.45\ \mathrm{V}^{1/2})u\approx3.6269\ \mathrm{V}$。按根式定义 $u\ge0$，所以取二次方程的非负根。

$$
u=\frac{-\gamma+\sqrt{\gamma^2+4\left(V_{DD}-V_{TH0}+2|\phi_F|+\gamma\sqrt{2|\phi_F|}\right)}}{2}
\approx1.69269\ \mathrm{V}^{1/2}.
$$
$$

V_{X,\infty}=u^2-2|\phi_F|\approx1.965\ \mathrm{V}.
$$

在终值处，$V_{GS}=V_{TH}\approx1.035\ \mathrm{V}$。这也是 $C_1$ 的最终电压，栅极一侧为正。若取 $\gamma=0$，则终值为 $V_{DD}-V_{TH0}=2.30\ \mathrm{V}$。

### 第 4 步 — 上升形状与波形

记剩余的过驱动电压为 $V_{ov}=3\ \mathrm{V}-V_X-V_{TH}(V_X)$。由阈值公式可得

$$
\frac{dV_{TH}}{dV_X}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}>0.
$$

由链式法则，$dV_{ov}/dt=-(1+dV_{TH}/dV_X)\,dV_X/dt$。代入节点方程并对过驱动电压的倒数求导，得到

$$
\frac{d}{dt}\left(\frac{1}{V_{ov}}\right)
=\left(1+\frac{dV_{TH}}{dV_X}\right)\frac{\beta}{2C_1}.
$$

右侧为正，并趋向有限的正值。因此在充电末期，过驱动电压的倒数近似随时间线性增大。接近终值时，过驱动电压与 $V_{X,\infty}-V_X$ 成正比，所以剩余电压差按 $1/t$ 衰减。图中电压从 0 V 上升，斜率逐渐减小，电压趋近 1.965 V。

图中取 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1\ \mathrm{pF}$。初始斜率为 $2.645\ \mathrm{mA}/(1\ \mathrm{pF})=2.645\ \mathrm{V/ns}$。对充电方程数值积分，得到以下代表性采样点。

| $t$ (ns) | $V_X$ (V) |
|---|---:|
| $0^+$ | 0 |
| 0.5 | 0.780 |
| 1 | 1.113 |
| 5 | 1.700 |
| 50 | 1.935 |
| $\infty$ | 1.965 |

![R036 源极跟随器波形](/q/R036/solution-vx.zh.svg)
