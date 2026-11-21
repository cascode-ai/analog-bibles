# 详细步骤 - grsim-11-25

先用单管的漏极噪声表示电流镜的输出噪声电流，再把每种噪声机理写成固定电流下 $W$ 和 $L$ 的函数，最后在面积和最小尺寸约束下选出使其最小的几何尺寸。对面积相同的三种几何尺寸做 SPICE 噪声分析，以验证预测的标度关系。

### 第 1 步 — 电流镜的输出噪声

设 $\overline{i_d^2}$ 为单管的漏极噪声电流。$M_1$ 的噪声电流流入二极管连接的器件本身，其小信号电阻为 $1/g_{m1}$（输入电流源理想且无噪声），因此产生 $v_{gs}=i_{d1}/g_{m1}$。对于相同器件，$M_2$ 又将其转换回 $g_{m2}v_{gs}=i_{d1}$。$M_2$ 自身互不相关的漏极噪声直接叠加，故

$$
\overline{i_o^2}=\overline{i_{d1}^2}+\overline{i_{d2}^2}=2\,\overline{i_d^2}.
$$

因此使输出噪声最小，就是在固定电流 $I=I_{IN}$ 下使每管的 $\overline{i_d^2}$ 最小。面积限制给出每管 $WL\le5\ \mu\mathrm m^2$，且 $W,L\ge0.6\ \mu$m。

### 第 2 步 — (a) 闪烁噪声占主导

栅极参考噪声源乘以 $g_m^2$ 到达漏极。由平方律 $g_m^2=2k'(W/L)I$，得

$$
\frac{\overline{i_d^2}}{\Delta f}=g_m^2\frac{K_f}{WLC_{ox}f}=\frac{2k'(W/L)I}{WL}\cdot\frac{K_f}{C_{ox}f}=\frac{2k'IK_f}{C_{ox}L^2f}.
$$

固定电流时宽度被消去：器件越宽，栅极参考噪声源越小，但 $g_m^2$ 按比例增大。输出噪声按 $1/L^2$ 下降，所以 $L$ 应尽可能大。在 $WL\le5\ \mu\mathrm m^2$ 下，最小宽度对应最大的 $L$：

$$
W=0.6\ \mu\mathrm m,\qquad L=\frac{5\ \mu\mathrm m^2}{0.6\ \mu\mathrm m}=8.33\ \mu\mathrm m.
$$

### 第 3 步 — (b) 热噪声占主导

$$
\frac{\overline{i_d^2}}{\Delta f}=4kT\tfrac23g_m=4kT\tfrac23\sqrt{2k'(W/L)I}\ \propto\ \sqrt{W/L},
$$

所以 $W/L$ 应尽可能小。面积给定时 $W/L=W^2/(WL)$，最小比值对应最小宽度并用满面积：仍为 $W=0.6\ \mu$m、$L=8.33\ \mu$m，即 $W/L=0.072$。

两种机理都导向同一个细长器件，每管都用满 5 µm² 的面积配额。与同面积的 $1.58\times1.58\ \mu$m 方形器件相比，闪烁噪声降低到 $(8.33/1.58)^2=27.8$ 分之一，热噪声降低到 $\sqrt{1/0.072}=3.73$ 分之一（均指功率）。

### 第 4 步 — 设计的代价

$W/L$ 减小时过驱动电压（overdrive voltage）增大：

$$
V_{ov}=\sqrt{\frac{2I}{k'(W/L)}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.072)}}=1.20\ \mathrm V
$$

（$I_{IN}=10\ \mu$A），是方形器件 0.32 V 的 3.7 倍。输入电压 $V_{GS}=1.8$ V 和电流镜的最小输出电压 $V_{ov}$ 都随之升高。

### 第 5 步 — SPICE 验证

采用 level-1 NMOS：$K_P=194\ \mu$A/V²，$V_{TO}=0.6$ V，$t_{ox}=80$ Å（$C_{ox}=4.32$ fF/µm²），$\lambda=0$，AF $=1$，并设定温度使 $4kT=1.66\times10^{-20}$ V·C。ngspice-46 的 level-1 闪烁噪声项等于 $\mathrm{KF}\,g_m^2/(C_{ox}WLf)$（通过扫描 $W$、$L$、$t_{ox}$ 和 $K_P$ 验证），因此 KF $=K_f=3\times10^{-24}$ 即再现题给模型；KF $=0$ 时只剩热噪声。$I_{IN}=10\ \mu$A 为理想源，输出端固定在 3 V，使各种几何尺寸下 $M_2$ 都处于饱和区。输出电流噪声由零伏电压源和无噪声 CCVS 检测，在 10 Hz 处读取（此处闪烁噪声比热噪声大四个数量级以上）。

```spice
* grsim-11-25 mirror noise (long, narrow design)
IIN 0 d1 dc 10u ac 1
M1 d1 d1 0 0 nm W=0.6u L=8.3333u
M2 d2 d1 0 0 nm W=0.6u L=8.3333u
VS d2 vo 0
VO vo 0 3
H1 out 0 VS 1
.model nm nmos level=1 vto=0.6 kp=194u tox=80e-10 lambda=0 kf=3e-24 af=1
.temp 27.4
.noise v(out) IIN dec 1 10 100
.end
```

三种几何尺寸均为 $WL=5\ \mu\mathrm m^2$：

| $W/L$（µm/µm） | $V_{GS}$（V） | $g_m$（µS） | 10 Hz 闪烁噪声 $\overline{i_o^2}/\Delta f$，SPICE（A²/Hz） | 手算 $2\cdot\dfrac{2k'IK_f}{C_{ox}L^2f}$ | 热噪声 $\overline{i_o^2}/\Delta f$，SPICE（A²/Hz） | 手算 $2\cdot4kT\tfrac23g_m$ |
|---|---|---|---|---|---|---|
| 0.6/8.33 | 1.80 | 16.7 | $7.75\times10^{-21}$ | $7.78\times10^{-21}$ | $3.70\times10^{-25}$ | $3.70\times10^{-25}$ |
| 1.58/1.58 | 0.92 | 62.2 | $2.15\times10^{-19}$ | $2.16\times10^{-19}$ | $1.38\times10^{-24}$ | $1.38\times10^{-24}$ |
| 8.33/0.6 | 0.69 | 232 | $1.50\times10^{-18}$ | $1.50\times10^{-18}$ | $5.13\times10^{-24}$ | $5.13\times10^{-24}$ |

比值与预测一致：方形器件的闪烁噪声是细长器件的 27.8 倍，即 $(8.33/1.58)^2$；其热噪声是 3.73 倍，即 $\sqrt{1/0.072}$。短而宽的器件在两种情况下都最差。所选设计——两管均取 $W=0.6\ \mu$m、$L=8.33\ \mu$m——在两种情况下输出噪声都最低。
