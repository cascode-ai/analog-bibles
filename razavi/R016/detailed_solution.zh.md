# 详细步骤 - R016

**思路：** 联立输出节点的电流平衡与长沟道 NMOS 模型，求出传输曲线。

### 端电压与截止

忽略栅极和结漏电，由输出节点 KCL 得 $I_D=V_{out}/R_1$，其中 $I_D$ 是固定电压端通过沟道流入输出节点的电流。$1\,\mathrm{V}$ 电源经沟道向负载供电。若输出为负，沟道与 $R_1$ 都会向节点注入电流。若输出达到或超过 $1\,\mathrm{V}$，沟道无法向负载提供正向电流。因此 $0\le V_{out}<1\,\mathrm{V}$。按对称 MOS 模型，电位较低的输出端为电学源极。两个扩散区与接地衬底之间的结均为零偏或反偏。

$$V_{GS}=V_{in}-V_{out},\quad V_{DS}=1\,\mathrm{V}-V_{out},\quad V_{SB}=V_{out}.$$

体效应阈值公式为

$$V_{TH}(V_{out})=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right).$$

代入 $V_{TH0}=0.7\,\mathrm{V}$、$\gamma=0.45\,\mathrm{V}^{1/2}$ 和 $2|\phi_F|=0.9\,\mathrm{V}$。在 $V_{out}=0$ 时，阈值为 $0.7\,\mathrm{V}$，所以当 $V_{in}\le0.7\,\mathrm{V}$ 时器件截止，$V_{out}=0$。在输出上限 $V_{out}=1\,\mathrm{V}$ 处，阈值为 $0.89337\,\mathrm{V}$。

### 饱和区与曲线斜率

定义过驱动 $V_{ov}=V_{GS}-V_{TH}(V_{out})$。刚导通时，$V_{ov}$ 很小，$V_{DS}$ 接近 $1\,\mathrm{V}$，沟道处于饱和区。取 $\lambda=0$，由平方律与 KCL 得

$$\frac{V_{out}}{R_1}=\frac{\beta}{2}V_{ov}^2.$$

在导通支路上取正平方根，得到

$$V_{in}=V_{out}+V_{TH}(V_{out})+\sqrt{\frac{2V_{out}}{\beta R_1}}.$$

在两个导通区均令 $\eta=dV_{TH}/dV_{out}>0$。$g_m=\partial I_D/\partial V_{GS}$、$g_{ds}=\partial I_D/\partial V_{DS}$ 是保持其余端电压不变时的器件偏导数。由 $dV_{GS}=dV_{in}-dV_{out}$ 和 $dV_{DS}=-dV_{out}$ 对 KCL 求微分，得到

$$\frac{dV_{out}}{dV_{in}}=\frac{g_m}{1/R_1+(1+\eta)g_m+g_{ds}}.$$

饱和区中 $g_m=\beta V_{ov}$，$g_{ds}=0$，所以斜率大于零且小于 1，并在开启点趋于零。

### 工作区交界与线性区

沟道导通时，饱和条件 $V_{DS}\ge V_{ov}$ 化为 $V_{in}\le1\,\mathrm{V}+V_{TH}(V_{out})$。记边界处的输入和输出为 $V_{in,k}$、$V_{out,k}$。边界上等式成立，取 $V_D=1\,\mathrm{V}$，KCL 化为

$$V_{out,k}=\frac{\beta R_1}{2}(V_D-V_{out,k})^2.$$

取满足 $0<V_{out,k}<V_D$ 的根，得到

$$V_{out,k}=V_D\left(1-\frac{2}{1+\sqrt{1+2\beta R_1 V_D}}\right),\qquad
V_{in,k}=V_D+V_{TH}(V_{out,k}),\quad V_D=1\,\mathrm{V}.$$

$\beta R_1$ 的单位为 $\mathrm{V}^{-1}$，所以 $2\beta R_1 V_D$ 无量纲。在模型中，$\beta R_1$ 从零趋向无穷时，$V_{out,k}$ 从零趋向 $V_D$。因此，对有限正 $\beta R_1$，计入体效应的 $V_{in,k}$ 介于 $1.700$ 和约 $1.89337\,\mathrm{V}$ 之间。

超过转折点后，$0<V_{DS}<V_{ov}$，将线性区电流代入 KCL，得到

$$\frac{V_{out}}{R_1}=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right).$$

此时 $g_m=\beta V_{DS}$，$g_{ds}=\beta(V_{ov}-V_{DS})$。在边界处 $g_{ds}=0$，两种 $g_m$ 表达式也给出相同值，故两段曲线的斜率连续。线性区内斜率仍为正，并可随 $V_{DS}$ 减小而变得很小。在固定 $\beta R_1$ 的模型中，若在扫描范围之外继续增加输入，输出将渐近于 $1\,\mathrm{V}$。在题给扫描范围内，3 V 对应的输出可以远低于该上限。

### 曲线计算

取 $\beta R_1=10\,\mathrm{V}^{-1}$，将 $V_D=1\,\mathrm{V}$ 代入边界根式，得到 $V_{out,k}=0.64174\,\mathrm{V}$、$V_{in,k}=1.83184\,\mathrm{V}$。绘图时逐点求解 KCL，每个阈值均按对应输出电压计算。

| $\beta R_1$ ($\mathrm{V}^{-1}$) | $V_{in,k}$ (V) | $V_{out,k}$ (V) | $V_{in}=3\,\mathrm{V}$ 时的 $V_{out}$ (V) |
|---:|---:|---:|---:|
| 0.1 | 1.7107 | 0.0455 | 0.1449 |
| 10 | 1.8318 | 0.6417 | 0.9206 |
| 100 | 1.8715 | 0.8682 | 0.9911 |

![三组器件与负载参数下的输出电压随输入电压变化曲线](/q/R016/solution-r016.zh.svg)
