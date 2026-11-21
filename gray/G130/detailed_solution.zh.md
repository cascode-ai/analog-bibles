# 详细步骤 - G130

忽略交越失真时，$V_o=\hat V\sin\theta$（$\theta=\omega t$），$Q_1$ 只在正半周向负载供电。把 $I_{c1}$、$V_{ce1}$ 及其乘积写成 $\theta$ 的函数，找出 $P_{c1}$ 的极大值，并对三种幅度求值。$V_{BE(\text{on})}$ 只影响交越，此处不出现；三种幅度都低于削波极限 $V_{CC}-V_{CE(\text{sat})}=14.8$ V。

### 第 1 步 — 波形表达式

$Q_1$ 是射极跟随器，集电极接 $V_{CC}$，发射极在 $V_o$。$V_o>0$ 时它导通并承担全部负载电流（$\beta_F$ 很大）；$V_o<0$ 时 $Q_2$ 导通，$Q_1$ 截止：

$$
I_{c1}=\begin{cases}\dfrac{\hat V}{R_L}\sin\theta,&0<\theta<\pi,\\[4pt]0,&\pi<\theta<2\pi,\end{cases}\qquad
V_{ce1}=V_{CC}-\hat V\sin\theta .
$$

$V_{ce1}$ 的表达式在整个周期内成立，因为即使 $Q_1$ 截止，其发射极也跟随 $V_o$；$Q_2$ 导通期间 $V_{ce1}$ 升到 $V_{CC}$ 以上，最高达 $V_{CC}+\hat V$。功耗为

$$
P_{c1}=I_{c1}V_{ce1}=\frac{\hat V}{R_L}\sin\theta\left(V_{CC}-\hat V\sin\theta\right)\quad(0<\theta<\pi),\qquad P_{c1}=0\quad(\pi<\theta<2\pi).
$$

### 第 2 步 — $P_{c1}$ 的峰值位置

令 $u=\hat V\sin\theta$，则 $P_{c1}=u(V_{CC}-u)/R_L$，是 $u$ 的抛物线，在 $u=V_{CC}/2$（负载线中点）处取最大值 $V_{CC}^2/(4R_L)$。

- 若 $\hat V>V_{CC}/2=7.5$ V，$u$ 在每个半周内两次经过 7.5 V，位置为 $\sin\theta=7.5\ \mathrm V/\hat V$：$P_{c1}$ 出现 **双峰**，峰高 $V_{CC}^2/(4R_L)=(15\ \mathrm V)^2/(8\ \mathrm{k\Omega})=28.1$ mW，在 $\theta=90^\circ$ 处下凹。
- 若 $\hat V\le V_{CC}/2$，$u$ 达不到 7.5 V：只有 **单峰**，在 $\theta=90^\circ$ 处取峰值 $(\hat V/R_L)(V_{CC}-\hat V)$。

### 第 3 步 — 三种幅度的关键数值

$\hat V=11.5$ V 时：$I_{c1}$ 峰值为 $11.5\ \mathrm V/2\ \mathrm{k\Omega}=5.75$ mA；$V_{ce1}$ 在 $15-11.5=3.5$ V 与 $15+11.5=26.5$ V 之间变化；$P_{c1}$ 在 $\sin\theta=7.5/11.5$ 处，即 $\theta=40.7^\circ$ 和 $139.3^\circ$，达到峰值 28.1 mW，在 $90^\circ$ 处下降到 $(5.75\ \mathrm{mA})(3.5\ \mathrm V)=20.1$ mW。其余幅度同理：

| $\hat V$ | $I_{c1}$ 峰值 | $V_{ce1}$ 范围 | $P_{c1}$ 形状与峰值 | 平均值 $\bar P_{c1}$ |
|---|---|---|---|---|
| 11.5 V | 5.75 mA | 3.5–26.5 V | 双峰，41° 与 139° 处 28.1 mW；90° 处谷值 20.1 mW | 10.9 mW |
| 6 V | 3 mA | 9–21 V | 单峰，90° 处 $3\ \mathrm{mA}\times9\ \mathrm V=27$ mW | 9.8 mW |
| 3 V | 1.5 mA | 12–18 V | 单峰，90° 处 $1.5\ \mathrm{mA}\times12\ \mathrm V=18$ mW | 6.0 mW |

平均值由 $P_{c1}$ 在导通半周内积分再除以 $2\pi$ 得到，利用整个周期内 $\overline{\sin\theta}=1/\pi$、$\overline{\sin^2\theta}=1/4$：

$$
\bar P_{c1}=\frac{\hat VV_{CC}}{\pi R_L}-\frac{\hat V^2}{4R_L}.
$$

例如 $\hat V=11.5$ V 时，

$$
\bar P_{c1}=\frac{(11.5)(15)}{\pi(2\ \mathrm{k\Omega})}\ \mathrm{V^2}-\frac{(11.5)^2}{4(2\ \mathrm{k\Omega})}\ \mathrm{V^2}=27.5\ \mathrm{mW}-16.5\ \mathrm{mW}=10.9\ \mathrm{mW}.
$$

### 第 4 步 — 波形

![Q1 集电极电流：0 至 180 度内为峰值 5.75、3、1.5 mA 的半正弦，180 至 360 度为零](/q/G130/solution-current.zh.svg)

![Q1 集电极-发射极电压：以 15 V 为中心、与输出反相的正弦波，90 度处最小值 3.5、9、12 V，270 度处最大值 26.5、21、18 V](/q/G130/solution-vce.zh.svg)

![Q1 瞬时功耗：11.5 V 时为 28.1 mW 双峰、中间谷值 20.1 mW，6 V 与 3 V 时为 27 mW 与 18 mW 单峰，后半周为零](/q/G130/solution-power.zh.svg)

电流在 $0<\theta<180^\circ$ 内为半正弦，之后为零；$V_{ce1}$ 是以 15 V 为中心、与输出反相的完整正弦波；$Q_1$ 截止期间 $P_{c1}$ 为零。最大瞬时功耗并不出现在最大输出处：11.5 V 时器件每个周期两次经过 28.1 mW 的最大值，而在输出峰值处只耗散 20.1 mW。
