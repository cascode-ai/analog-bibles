# 详细步骤 - R080

### 第 1 步 — 判断衬底偏置如何改变工作区

源极接地，所以 $V_{SB}=-V_B$。代入体效应公式，得到

$$V_{ov}=V_{GS}-V_{TH},\qquad
V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|-V_B}-\sqrt{2|\phi_F|}\right).$$

阈值对反向偏置的导数为

$$\frac{dV_{TH}}{dV_{SB}}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}}>0.$$

该导数在 $V_{SB}=0$ 时最大，随后随反偏增大而减小，因此扫描刚开始时 $V_{ov}$ 下降最快。

令 $V_{ov0}=V_{GS}-V_{TH0}>0$。在 $V_B=0$ 时，饱和条件为 $V_{DS}\ge V_{ov0}$。固定 $V_{DS}$ 后，随着 $V_{ov}$ 减小并趋于零，$V_{DS}\ge V_{ov}$ 一直成立。令 $V_{TH}=V_{GS}$，移项得到 $\sqrt{2|\phi_F|-V_{B,\mathrm{off}}}=\sqrt{2|\phi_F|}+V_{ov0}/\gamma$。两边平方可得有限的截止电压

$$V_{B,\mathrm{off}}=
2|\phi_F|-\left[\sqrt{2|\phi_F|}+\frac{V_{GS}-V_{TH0}}{\gamma}\right]^2.$$

### 第 2 步 — 推导饱和区的三条曲线

令 $\beta=\mu_nC_{ox}W/L$。过驱动电压为正时，饱和区平方律给出 $I_D=\tfrac12\beta V_{ov}^2$。固定漏极和衬底电压时，$\partial V_{ov}/\partial V_{GS}=1$，求导得 $g_m=\beta V_{ov}$。再用题给的电阻公式，得到

$$r_O=\frac{1}{\lambda I_D}=\frac{2}{\lambda\beta V_{ov}^2},\qquad
g_mr_O=\frac{2}{\lambda V_{ov}}.$$

利用 $V_{SB}=-V_B$，在 $V_{GS}$ 固定且器件仍导通时对 $g_m=\beta V_{ov}$ 求导。

$$\frac{dg_m}{dV_B}=-\beta\frac{dV_{TH}}{dV_B}=\frac{\beta\gamma}{2\sqrt{2|\phi_F|-V_B}}>0.$$

当 $V_B$ 向更负的方向扫描时，$g_m$ 下降且斜率幅值逐渐减小。截止边界处，导通侧的斜率有限且非零，截止侧的斜率为零，故曲线在 $g_m=0$ 处形成折角。电阻按过驱动电压的平方倒数增大，增益按过驱动电压的一次倒数增大。临近截止时，阈值导数有限，$V_{ov}$ 随到边界的电压差线性趋零。

### 第 3 步 — 代入示例偏置

题目未指定 $\beta$ 和固定端电压的数值。图中示例取 $V_{GS}=1.2\ \mathrm V$、$V_{DS}=1.0\ \mathrm V$、$\beta=13.4\ \mathrm{mA/V^2}$，得到 $V_{ov0}=0.5\ \mathrm V$。由第 1 步可知，从 $V_B=0$ 扫到 $V_{B,\mathrm{off}}\approx-3.342753\ \mathrm V$ 之前一直满足饱和条件。

例如，取 $V_B=-1\ \mathrm V$，可得

$$V_{TH}=0.7\ \mathrm V +(0.45\ \mathrm{V}^{1/2})
\bigl(\sqrt{1.9\ \mathrm V}-\sqrt{0.9\ \mathrm V}\bigr)
\approx 0.893375\ \mathrm V,\qquad V_{ov}\approx0.306625\ \mathrm V.$$

代入第 2 步的公式，得到 $I_D\approx0.630\ \mathrm{mA}$、$g_m\approx4.11\ \mathrm{mS}$、$r_O\approx15.9\ \mathrm{k}\Omega$、$g_mr_O\approx65.2\ \mathrm{V/V}$。

| $V_B$ (V) | $I_D$ (mA) | $g_m$ (mS) | $r_O$ (kΩ) | $g_mr_O$ (V/V) |
|---:|---:|---:|---:|---:|
| 0 | 1.675 | 6.70 | 5.97 | 40.0 |
| −1 | 0.630 | 4.11 | 15.9 | 65.2 |
| −2 | 0.173 | 2.15 | 57.9 | 124.5 |
| −3 | 0.00979 | 0.512 | 1021 | 523.2 |
| 截止点之前的极限 | 0 | 0 | $+\infty$ | $+\infty$ |

### 第 4 步 — 追踪曲线进入截止区

在截止点及其之后，理想平方律模型给出 $I_D=0$、$g_m=0$、$g_{ds}=0$。输出电阻形式上为无穷大。$g_mr_O$ 在截止区无定义，发散只发生在从饱和区趋近截止点的极限中。弱反型和结击穿需要额外的器件模型与参数。

横轴向右表示 $V_B$ 越来越负，截止区在图的右缘之外继续延伸。两条发散曲线在达到截止点以前已超出纵轴量程。

![栅跨导 g_m](/q/R080/solution-transconductance.zh.svg)

![输出电阻 r_O](/q/R080/solution-output-resistance.zh.svg)

![本征增益 g_m r_O](/q/R080/solution-intrinsic-gain.zh.svg)

![辅助图：漏极电流 I_D](/q/R080/solution-current.zh.svg)
