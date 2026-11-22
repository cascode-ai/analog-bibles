# 详细步骤 - grsim-04-04

向 $Q_2$ 的集电极注入测试电流 $i_t$，跟踪其去向。$Q_2$ 的基极电流要么经 $R_1$ 返回，要么沿二极管叠接 $Q_4$–$Q_3$ 向下流；向下流的部分被 $Q_1$ 镜像到 $Q_2$ 的发射极。这种部分反馈决定了 $Q_2$ 的 $\beta_0$ 有多少用于提升 $r_{o2}$。然后在 $I_{IN}=0$、$R_1=10$ kΩ 下计算偏置，并用 ngspice 验证 $R_o$、$\beta_F$ 灵敏度和大信号曲线。

### 第 1 步 — 小信号模型

$I_{IN}=0$ 时只剩 $R_1$，它从 $V_{CC}$（交流地）接到 $Q_2$、$Q_4$ 的基极节点 $n$。从 $n$ 到地的二极管叠接的小信号电阻为

$$
r_d=\frac1{g_{m4}}+\frac1{g_{m3}}\approx\frac2{g_m}.
$$

$Q_3$–$Q_1$ 是单位增益电流镜：$Q_1$ 的集电极电流等于沿叠接向下流的电流 $i_d$。忽略 $r_{o1}$（$Q_2$ 发射极节点电阻很低），保留 $r_{o2}$。

### 第 2 步 — 基极节点的电流分配

设 $i_{b2}$ 为流入 $Q_2$ 基极的小信号电流。在节点 $n$（没有其他连接）列 KCL：

$$
\frac{v_n}{R_1}+\frac{v_n}{r_d}+i_{b2}=0
\;\Rightarrow\;
i_d=\frac{v_n}{r_d}=-f\,i_{b2},\qquad f=\frac{R_1}{R_1+r_d}.
$$

$Q_1$ 从 $Q_2$ 的发射极吸取 $i_d$，而 $Q_2$ 的发射极电流为 $i_t+i_{b2}$：

$$
i_t+i_{b2}=-f\,i_{b2}\;\Rightarrow\;i_{b2}=-\frac{i_t}{1+f},\qquad i_{e2}=\frac{f}{1+f}\,i_t .
$$

### 第 3 步 — 输出电阻

$Q_2$ 的基射极电压为 $v_{be2}=r_\pi i_{b2}=-r_\pi i_t/(1+f)$。集电极电流等于 $g_{m2}v_{be2}$ 加上流过 $r_{o2}$ 的电流，发射极电压可以忽略，故

$$
i_t=g_{m2}v_{be2}+\frac{v_x}{r_{o2}}
\;\Rightarrow\;
R_o=\frac{v_x}{i_t}=r_{o2}\left(1+\frac{\beta_0}{1+f}\right)\approx\frac{\beta_0r_{o2}}{1+f}.
$$

$R_1$ 很大时 $f\to1$：基极电流变化的一半被镜像回发射极，因此只有一半的 $\beta_0$ 用于提升 $r_{o2}$，$R_o\to\beta_0r_o/2$。$R_1\to0$ 时 $f\to0$，$R_o\to\beta_0r_o$。

### 第 4 步 — 数值

输入电流由跨在两个 $V_{BE}$ 上的 $R_1$ 决定：

$$
V_{BE}=26\ \mathrm{mV}\,\ln\frac{0.37\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.651\ \mathrm V,\qquad
I_{IN}=\frac{5\ \mathrm V-2(0.651\ \mathrm V)}{10\ \mathrm{k\Omega}}=0.370\ \mathrm{mA}.
$$

$\beta_F$ 有限时，共源共栅电流镜的输出电流为

$$
I_{OUT}=I_{IN}\left[1-\frac{4\beta_F+2}{\beta_F^2+4\beta_F+2}\right]=0.370\ \mathrm{mA}\,(1-0.0197)=0.363\ \mathrm{mA}.
$$

于是 $r_{o2}=V_A/I_{OUT}=358$ kΩ，$r_d=2(26\ \mathrm{mV}/0.37\ \mathrm{mA})=140\ \Omega$，$f=10/10.14=0.986$，

$$
R_o=358\ \mathrm{k\Omega}\left(1+\frac{200}{1.986}\right)=36.4\ \mathrm{M\Omega}\approx\frac{\beta_0r_o}2 .
$$

### 第 5 步 — 最低输出电压

$Q_2$ 的基极处于 $2V_{BE}$，因此其发射极（$Q_1$ 的集电极）比地高一个 $V_{BE}$。$Q_2$ 的 $V_{CE}$ 大于约 $V_{CE(\mathrm{sat})}\approx0.2$ V 时保持放大状态：

$$
V_{OUT(\min)}\approx V_{BE}+V_{CE(\mathrm{sat})}\approx0.65+0.2=0.85\ \mathrm V .
$$

低于该值时 $Q_2$ 饱和，其 $\beta$ 作用消失，$R_o$ 急剧下降。

### 第 6 步 — $\beta_F$ 灵敏度

$\beta_F=100$ 时误差项变为 $402/10402=3.87\%$，故

$$
I_{OUT}=0.370\ \mathrm{mA}\,(1-0.0387)=0.356\ \mathrm{mA},
$$

比 $\beta_F=200$ 时低 1.9%。由于 $R_o\propto\beta_0$，$R_o$ 也减半（约 19 MΩ）。

### 第 7 步 — SPICE 验证

```spice
* grsim-04-04 bipolar cascode current mirror
VCC  vcc 0 5
R1   vcc n 10k
Q4   n n m npn
Q3   m m 0 npn
Q2   out n e npn
Q1   e m 0 npn
VOUT out 0 3
.model npn npn is=5e-15 bf=200 vaf=130
.control
dc VOUT 0 5 1m
let iout = -i(VOUT)
wrdata iv.txt iout
op
tf v(n) VOUT
print all
.endc
.end
```

VOUT 在 3 V 处由 `.tf` 得到的输入电阻即为 $R_o$。用 `bf=100` 重复运行一次。

| 量 | 手算 | ngspice |
|---|---|---|
| 3 V 处 $I_{OUT}$，$\beta_F=200$ | 0.363 mA | 0.3634 mA |
| 3 V 处 $I_{OUT}$，$\beta_F=100$ | 0.356 mA | 0.3564 mA（−1.9%） |
| $R_o$，$\beta_F=200$ | 36.4 MΩ | 36.8 MΩ |
| $R_o$，$\beta_F=100$ | 18.8 MΩ | 19.2 MΩ |
| 拐点（$I_{OUT}$ 与终值相差 0.1% 以内） | ≈ 0.85 V | 0.85 V |

![双极型共源共栅电流镜在 BF = 200 与 BF = 100 时的 ngspice IOUT–VOUT 曲线，标出约 0.85 V 处的拐点和平坦区](/q/grsim-04-04/solution-iv.zh.svg)

拐点以上曲线平坦，电流为 0.363 mA，斜率为 $1/(36.8\ \mathrm{M\Omega})\approx0.03\ \mu\mathrm{A/V}$。低于约 0.85 V 时 $Q_2$ 饱和，电流急剧下降，在 0.63 V 处降到零。$V_{OUT}$ 更低时，$Q_2$ 的基集结强烈正偏：基极节点被拉低，$R_1$ 的电流（约 0.43 mA）从输出端流出，因此 $I_{OUT}$ 变为负值（$V_{OUT}=0$ 时为 $-0.43$ mA）。$\beta_F=100$ 时平坦段电流低 1.9%，斜率加倍，与预测一致。
