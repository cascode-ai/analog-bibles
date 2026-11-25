# 详细步骤 - R011

**思路：** 由无负载分压器求出栅极电压，判断 PMOS 工作区，再用饱和区模型求 $I_X$ 与取正值的本征跨导 $g_m$。

### 1. 分压关系与工作区

在 $0\le V_X\le V_{DD}=3\ \mathrm{V}$ 内，上端为 PMOS 源极。源极与衬底等电位，故 $|V_{TH}|=0.8\ \mathrm{V}$，没有体效应引起的阈值变化。定义分压比 $k=R_1/(R_1+R_2)$；对正电阻有 $0<k<1$。令 $I_R$ 为从 $V_{DD}$ 流向 $V_X$ 的分压电流。忽略栅极电流，有

$$I_R=\frac{V_{DD}-V_X}{R_1+R_2},\qquad V_{SG}=I_RR_1=k(V_{DD}-V_X),\qquad V_{SD}=V_{DD}-V_X.$$

由于 $V_{SD}\ge V_{SG}$，只要 $V_{SG}>|V_{TH}|$，就满足饱和条件 $V_{SD}\ge V_{SG}-|V_{TH}|$，不存在导通的线性区段。图中 $I_X$ 是沟道电流，不包括分压器电流 $I_R$。

### 2. 导通区间与截止点

由导通条件 $k(V_{DD}-V_X)>|V_{TH}|$ 得

$$V_{X,\mathrm{off}}=V_{DD}-\frac{|V_{TH}|}{k}.$$

若 $kV_{DD}\le|V_{TH}|$，整个扫描范围均截止；否则在 $0\le V_X<V_{X,\mathrm{off}}$ 内导通。达到截止点及其后，理想模型给出 $I_X=g_m=0$。

### 3. 电流与本征跨导

在导通区间内，忽略沟道长度调制。由饱和区平方律对栅源电压求偏导，保持 $V_{SD}$ 和体偏压不变。

$$I_X=\frac{\beta_p}{2}(V_{SG}-|V_{TH}|)^2,\qquad
g_m=\left.\frac{\partial I_X}{\partial V_{SG}}\right|_{V_{SD},V_{SB}}
=\beta_p(V_{SG}-|V_{TH}|).$$

代入分压关系，过驱动为 $V_{SG}-|V_{TH}|=k(V_{DD}-V_X)-|V_{TH}|$。因此 $g_m$ 取正值，两条曲线的斜率分别为

$$\frac{dg_m}{dV_X}=-\beta_p k,\qquad \frac{dI_X}{dV_X}=-k g_m.$$

电流下降时二阶导数为正，即 $d^2I_X/dV_X^2=\beta_p k^2$，并与零电流段相切。跨导在线性下降段与零值段相接时改变斜率。

### 4. 示例与曲线

取 $R_1=R_2$ 与 $\beta_p=1\,\mathrm{mA/V^2}$ 绘图。截止点为 $1.4\,\mathrm{V}$。在 $V_X=0$ 时，过驱动为 $1.5\,\mathrm{V}-0.8\,\mathrm{V}=0.7\,\mathrm{V}$，故 $I_X=0.245\,\mathrm{mA}$，$g_m=0.700\,\mathrm{mS}$。

![漏极电流与本征跨导](/q/R011/solution-curves.zh.svg)

图中器件尺寸仅作示例。对同一分压比，电流和跨导均与器件参数 $\beta_p$ 成正比。平方律模型忽略亚阈值漏电。
