# 详细步骤 - R001

先判断工作区，再用饱和区平方律求电流。为便于在同一坐标系比较 NFET 与 PFET，纵轴均取电流绝对值。

### 第 1 步 — 阈值与工作区

$W/L=(50\ \mu\mathrm m)/(0.5\ \mu\mathrm m)=100$。源极与衬底相连，$V_{SB}=0$，无体效应引起的阈值偏移，故 $V_{TH,n}=0.7$ V、$|V_{TH,p}|=0.8$ V；忽略亚阈值电流。

导通时，饱和条件为 $|V_{DS}|\ge V_{ov}=|V_{GS}|-|V_{TH}|$。最大栅压处有
$$
V_{ov,n}=3-0.7=2.3\ \mathrm V<3\ \mathrm V,\qquad
V_{ov,p}=3-0.8=2.2\ \mathrm V<3\ \mathrm V.
$$
因此，两器件在整个扫描范围内都不会进入线性区。

### 第 2 步 — 电流函数

包含一阶沟道长度调制（CLM）的饱和区平方律模型为
$$
|I_D|=\frac12\mu C_{ox}\frac WL V_{ov}^2(1+\lambda|V_{DS}|).
$$
分别计算电流系数和固定的 CLM 因子：
$$
\begin{aligned}
k_n&=\tfrac12(134\ \mu\mathrm{A/V^2})(100)=6.70\ \mathrm{mA/V^2}, &F_n&=1+(0.1\ \mathrm{V^{-1}})(3\ \mathrm V)=1.3,\\
k_p&=\tfrac12(38.4\ \mu\mathrm{A/V^2})(100)=1.92\ \mathrm{mA/V^2}, &F_p&=1+(0.2\ \mathrm{V^{-1}})(3\ \mathrm V)=1.6.
\end{aligned}
$$
令 $x=|V_{GS}|$，$[z]_+=\max(z,0)$，作图函数为
$$
I_{D,n}=k_n[x-0.7\ \mathrm V]_+^2 F_n,\qquad
|I_{D,p}|=k_p[x-0.8\ \mathrm V]_+^2 F_p.
$$
忽略 CLM 的对照曲线取 $F_n=F_p=1$。若以流入漏极为正，PFET 的带符号漏极电流为负。

### 第 3 步 — 端点与曲线

$x=3$ V 时，忽略 CLM 得
$$
I_{D,n}=(6.70\ \mathrm{mA/V^2})(2.3\ \mathrm V)^2=35.4\ \mathrm{mA},\qquad
|I_{D,p}|=(1.92\ \mathrm{mA/V^2})(2.2\ \mathrm V)^2=9.29\ \mathrm{mA}.
$$
分别乘以 1.3、1.6，得到计入 CLM 的电流 46.1 mA、14.9 mA。

![标出阈值与端点数值的漏极电流曲线](/q/R001/solution-curves.zh.svg)

阈值以下电流为零；阈值以上斜率为 $2k(x-|V_{TH}|)F$，从零开始线性增大，故曲线为开口向上的抛物线。在 3 V 处，NFET/PFET 电流比为 $35.4/9.29\approx3.8$（忽略 CLM）或 $46.1/14.9\approx3.1$（计入 CLM）。这些是平方律模型曲线，不包含高场效应。
