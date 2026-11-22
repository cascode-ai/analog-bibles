# 详细步骤 - grsim-05-09

令两个饱和器件的漏极电流相等，得到大信号传输函数 $V_o(V_i)$。由于两管的 $k'W/L$ 相同，平方律相互抵消，只剩 $M_2$ 的体效应（body effect），它使 $V_o$ 恰好是 $V_i$ 的二次函数。由其泰勒系数可求 $HD_2$，再用 level-1 ngspice 瞬态仿真加傅里叶分析加以验证。

### 第 1 步 — 由漏极电流相等求传输函数

饱和区中 $I_D=\frac12k'\frac WL(V_{GS}-V_t)^2$（$\lambda=0$）。对 $M_1$，$V_{GS1}=V_i$，$V_{SB1}=0$。$M_2$ 的栅极与源极相连，故 $V_{GS2}=0$，但其源极比接地的衬底高 $V_o$，故 $V_{SB2}=V_o$：

$$
V_{t2}=-0.6\ \mathrm V+\gamma\left(\sqrt{2\phi_f+V_o}-\sqrt{2\phi_f}\right),\qquad
I_{D2}=\tfrac12k'\tfrac WL\,V_{t2}^2 .
$$

两电流相等且 $k'W/L$ 相消，因此 $V_i-V_{t1}=-V_{t2}$（两个过驱动电压均为正）：

$$
V_i=0.6\ \mathrm V+0.6\ \mathrm V-0.5\left(\sqrt{0.6\ \mathrm V+V_o}-\sqrt{0.6\ \mathrm V}\right).
$$

若没有体效应，$V_{t2}$ 为常数，$V_i$ 被固定，增益将为无穷大。正是体效应同时决定了增益和非线性。

### 第 2 步 — 直流工作点

$V_o=1$ V 时，

$$
V_{t2}=-0.6+0.5\left(\sqrt{1.6}-\sqrt{0.6}\right)=-0.6+0.5(1.26491-0.77460)=-0.35484\ \mathrm V,
$$

$$
I_D=\tfrac12(200\ \mu\mathrm{A/V^2})(100)(0.35484\ \mathrm V)^2=1.259\ \mathrm{mA},\qquad V_I=0.6+0.35484=0.95484\ \mathrm V.
$$

两管都处于饱和区：$V_{DS1}=1\ \mathrm V>V_{ov1}=0.355$ V，$V_{DS2}=2\ \mathrm V>V_{ov2}=0.355$ V。

### 第 3 步 — 反解为精确的二次式

把常数合并为 $C=1.2\ \mathrm V+0.5\sqrt{0.6\ \mathrm V}=1.58730$ V。于是 $\sqrt{0.6+V_o}=2(C-V_i)$，平方得

$$
V_o=4\left(C-V_i\right)^2-0.6\ \mathrm V
$$

（$V_i$ 以伏为单位，系数 4 的单位为 $\mathrm{V^{-1}}$）。令 $v_i=V_i-V_I$，在 $V_I$ 处展开，$C-V_I=0.5\sqrt{1.6}=0.63246$ V：

$$
v_o=a_1v_i+a_2v_i^2,\qquad a_1=-8(C-V_I)=-5.0596,\qquad a_2=4\ \mathrm{V^{-1}},\qquad a_3=0.
$$

小信号增益为 $-5.06$，没有三次项。

### 第 4 步 — 二次谐波失真

$v_i=\hat v_i\sin\omega t$ 时，$v_i^2$ 项在直流处产生 $a_2\hat v_i^2/2$，在 $2\omega$ 处产生幅值为 $a_2\hat v_i^2/2$ 的分量，因此

$$
HD_2=\frac{|a_2|\hat v_i^2/2}{|a_1|\hat v_i}=\frac12\left|\frac{a_2}{a_1}\right|\hat v_i=\frac12\cdot\frac{4\ \mathrm{V^{-1}}}{5.0596}\cdot0.01\ \mathrm V=3.95\times10^{-3}\approx0.40\ \%.
$$

由于 $a_3=0$，只要两管保持饱和，三次谐波就为零；对 50 mV 的输出摆幅，这一条件很容易满足。

### 第 5 步 — SPICE 验证

level-1 模型采用题给参数；先由 $V_o=1$ V 求出直流输入，再叠加 10 mV、1 kHz 的正弦，用 `fourier` 分析最后一个周期。

```spice
* grsim-05-09 CS amplifier with depletion load
.model nen nmos level=1 kp=200u vto=0.6  gamma=0.5 phi=0.6 lambda=0
.model nde nmos level=1 kp=200u vto=-0.6 gamma=0.5 phi=0.6 lambda=0
VDD vdd 0 3
Vi  in  0 dc 0.954842 sin(0.954842 0.01 1k)
M1 out in  0   0 nen w=100u l=1u
M2 vdd out out 0 nde w=100u l=1u
.dc Vi 0.94 0.97 0.0001
.tran 2u 5m 3m 1u
.four 1k v(out)
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $V_O=1$ V 时的 $V_I$ | 0.95484 V | 0.95484 V |
| 小信号增益 | −5.060 | −5.060 |
| $v_o$ 的基波 | 50.6 mV | 50.60 mV |
| 二次谐波 | 0.200 mV | 0.200 mV |
| $HD_2$ | 0.395 % | 0.395 % |
| $HD_3$ | 0 | ≈ $10^{-13}$（数值噪声） |

直流输出也上升 $a_2\hat v_i^2/2=0.2$ mV，仿真结果为 1.0002 V，与之相符。仿真与手算一致，因为 level-1 模型正是采用相同体效应表达式的平方律：$HD_2\approx0.40\ \%$，$HD_3$ 可以忽略。
