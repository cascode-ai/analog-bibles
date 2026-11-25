# 详细步骤 - R012

**思路：** 由分压器求栅源电压，计入衬底接地引起的阈值变化，并且只在沟道导通时使用饱和区平方律。

### 1. 分压、体效应与工作区

在 $0\le V_X\le V_{DD}=3\ \mathrm{V}$ 内，下端为 NMOS 源极。定义分压比 $k=R_2/(R_1+R_2)$。忽略栅极电流，得

$$V_{GS}=k(V_{DD}-V_X),\qquad V_{DS}=V_{DD}-V_X,\qquad V_{SB}=V_X.$$

源极电位高于接地衬底，故

$$V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right),$$

其中 $V_{TH0}=0.7\ \mathrm{V}$，$\gamma=0.45\ \mathrm{V^{1/2}}$，$2|\phi_F|=0.9\ \mathrm{V}$。阈值从 $V_X=0$ 时的 0.700 V 增至 $V_X=1\ \mathrm{V}$ 时的 0.893 V。由于 $0<k<1$，导通时有 $V_{DS}\ge V_{GS}>V_{GS}-V_{TH}$，不存在导通的线性区段。$I_X$ 是晶体管漏极电流，不包括分压器电流。

### 2. 电流与本征跨导

忽略沟道长度调制，仅在 $V_{GS}>V_{TH}$ 时使用饱和区模型：

$$I_X=\frac{\beta}{2}[k(V_{DD}-V_X)-V_{TH}(V_X)]^2,\qquad g_m=\left.\frac{\partial I_X}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta[k(V_{DD}-V_X)-V_{TH}(V_X)].$$

本征跨导 $g_m$ 为正。定义无量纲阈值灵敏度

$$\eta=\frac{dV_{TH}}{dV_X}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}>0.$$

沿扫描方向求导，得

$$\frac{dI_X}{dV_X}=-(k+\eta)g_m<0,\qquad \frac{dg_m}{dV_X}=-\beta(k+\eta)<0.$$

由于 $\eta$ 随 $V_X$ 减小，

$$\frac{d^2g_m}{dV_X^2}=\frac{\beta\gamma}{4(2|\phi_F|+V_X)^{3/2}}>0.$$

因此 $g_m$ 下降时具有正二阶导数，只是近似线性。电流对过驱动电压服从平方律，但不是 $V_X$ 的严格二次函数；当截止点处 $g_m\to0$ 时，电流曲线斜率也趋于零。

### 3. 截止点与全程截止分支

若 $kV_{DD}\le V_{TH0}$，晶体管全程截止；否则，递减函数 $k(V_{DD}-V_X)-V_{TH}(V_X)$ 在扫描范围内恰有一个零点，满足

$$k(V_{DD}-V_{X,\mathrm{off}})=V_{TH}(V_{X,\mathrm{off}}).$$

令 $u=\sqrt{2|\phi_F|+V_{X,\mathrm{off}}}$，代回截止方程并取正根。

$$ku^2+\gamma u=k(V_{DD}+2|\phi_F|)-V_{TH0}+\gamma\sqrt{2|\phi_F|}\equiv C.$$

$$u=\frac{\sqrt{\gamma^2+4kC}-\gamma}{2k},\qquad V_{X,\mathrm{off}}=u^2-2|\phi_F|.$$

当 $V_X\ge V_{X,\mathrm{off}}$ 时，应取 $I_X=g_m=0$，不能将平方表达式延伸到其适用范围以外。忽略体效应时，截止点为 $V_{DD}-V_{TH0}/k$；源极电压为正时阈值高于 $V_{TH0}$，所以体效应使截止提前。

### 4. 等值电阻示例与曲线

取 $R_1=R_2$ 与 $\beta=1\,\mathrm{mA/V^2}$ 绘图。将 $k=1/2$ 代入截止方程，得 $V_{X,\mathrm{off}}=1.16\,\mathrm{V}$。忽略体效应时，截止点为 $1.60\,\mathrm{V}$。在 $V_X=0$ 时，过驱动为 $1.5\,\mathrm{V}-0.7\,\mathrm{V}=0.8\,\mathrm{V}$，故 $I_X=0.320\,\mathrm{mA}$，$g_m=0.800\,\mathrm{mS}$。

![漏极电流与本征跨导](/q/R012/solution-curves.zh.svg)

图中器件尺寸仅作示例。对同一分压比，电流和跨导均与器件参数 $\beta$ 成正比。平方律模型忽略亚阈值漏电。
