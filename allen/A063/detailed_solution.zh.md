# 详细步骤 - A063

由各端电压（计入体效应）判断工作区，计算直流电流，再求饱和区小信号模型中的电导和电容。对需要扩散区几何尺寸的元件，指出其含义并给出偏置条件。

### 第 1 步 — 阈值与工作区

相对源极：$V_{GS}=4-2=2$ V，$V_{DS}=4-2=2$ V，$V_{SB}=2-0=2$ V。体效应使阈值升高：

$$
V_T=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\Big)=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V .
$$

$V_{GS}-V_T=0.977\ \mathrm V<V_{DS}=2$ V，因此晶体管处于饱和区。

### 第 2 步 — 直流电流

取 $\beta=K'W/L=(110\ \mu\mathrm{A/V^2})(10)=1.1\ \mathrm{mA/V^2}$：

$$
I_D=\frac\beta2(V_{GS}-V_T)^2(1+\lambda V_{DS})=\frac{1.1\ \mathrm{mA/V^2}}{2}(0.977\ \mathrm V)^2(1+0.04\times2)=567\ \mu\mathrm A
$$

（不计 $\lambda$ 因子时为 525 µA）。

### 第 3 步 — 小信号电导

对饱和区电流求导：

$$
\begin{aligned}
g_m&=\frac{\partial I_D}{\partial V_{GS}}\approx\sqrt{2\beta I_D}=\sqrt{2(1.1\ \mathrm{mA/V^2})(567\ \mu\mathrm A)}=1.12\ \mathrm{mS},\\
g_{mbs}&=\frac{\partial I_D}{\partial V_{BS}}=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}}=1.12\ \mathrm{mS}\times\frac{0.4}{2\sqrt{2.7}}=0.122\,g_m=136\ \mu\mathrm S,\\
g_{ds}&=\frac{\partial I_D}{\partial V_{DS}}=\frac{\lambda I_D}{1+\lambda V_{DS}}=\frac{0.04\times567\ \mu\mathrm A}{1.08}=21.0\ \mu\mathrm S\quad(r_{ds}=47.6\ \mathrm{k\Omega}).
\end{aligned}
$$

常用近似 $g_{ds}\approx\lambda I_D=22.7\ \mu$S 与之仅相差 $\lambda V_{DS}=8\%$。

### 第 4 步 — 栅电容

$C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(10\ \mu\mathrm m)(1\ \mu\mathrm m)=24.7$ fF，按饱和区的分配方式（沟道归属源极，取氧化层电容的 $\tfrac23$）：

$$
\begin{aligned}
C_{gs}&=\mathrm{CGSO}\cdot W+\tfrac23C_{ox}WL=2.2\ \mathrm{fF}+16.5\ \mathrm{fF}=18.7\ \mathrm{fF},\\
C_{gd}&=\mathrm{CGDO}\cdot W=2.2\ \mathrm{fF},\\
C_{gb}&=\mathrm{CGBO}\cdot L=0.7\ \mathrm{fF},
\end{aligned}
$$

其中 CGBO 取为单位沟道长度的栅-衬底交叠电容总值。

### 第 5 步 — 衬底结与串联电阻

衬底为 0 V，漏极为 4 V，源极为 2 V，因此 $V_{BD}=-4$ V、$V_{BS}=-2$ V：两个结都反偏，其小信号电导可忽略，$g_{bd}\approx g_{bs}\approx0$。它们贡献耗尽层电容

$$
C_{bx}=\frac{\mathrm{CJ}\cdot A_X}{(1+V_R/\mathrm{PB})^{\mathrm{MJ}}}+\frac{\mathrm{CJSW}\cdot P_X}{(1+V_R/\mathrm{PB})^{\mathrm{MJSW}}},
$$

$C_{bd}$ 取 $V_R=4$ V，$C_{bs}$ 取 $V_R=2$ V，$A_X$ 和 $P_X$ 为各扩散区的面积和周长。漏区和源区的欧姆串联电阻 $r_D$、$r_S$（方块电阻与接触孔）同样取决于版图。由于未给出几何尺寸，这四个元件只能以上述形式给出。

| 元件 | 数值 |
|---|---|
| $g_m$ | 1.12 mS |
| $g_{mbs}$ | 136 µS |
| $g_{ds}$（$r_{ds}$） | 21.0 µS（47.6 kΩ） |
| $C_{gs}$、$C_{gd}$、$C_{gb}$ | 18.7 fF、2.2 fF、0.7 fF |
| $g_{bd}$、$g_{bs}$ | ≈ 0（反偏） |
| $C_{bd}$、$C_{bs}$、$r_D$、$r_S$ | 需要扩散区几何尺寸 |
