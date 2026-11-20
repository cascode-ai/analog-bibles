# 详细步骤 - R005

先计算各体偏压下的阈值，再平移分段转移曲线并标出工作区分界。

### 第 1 步 — 体效应模型

先用通用模型确定阈值随体偏压的变化，再代入题给参数。NMOS 的体效应关系为

$$
V_{TH}(V_{SB})=V_{TH0}+\gamma
\left[\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right].
$$
$$
V_{TH}(V_{BS})=V_{TH0}+\gamma
\left[\sqrt{2|\phi_F|-V_{BS}}-\sqrt{2|\phi_F|}\right].
$$

其中 $V_{TH0}$ 是零体偏压（$V_{SB}=0$）时的阈值，$\gamma$ 为体效应系数，$|\phi_F|$ 为费米势的幅值。该模型采用耗尽近似，适用于源-衬底结未明显正向导通的情况；本题画反偏范围 $V_{BS}\le0$。

本题以 $V_{BS}=V_B-V_S$ 为参量，而模型常用 $V_{SB}=V_S-V_B=-V_{BS}$，因此第二式直接给出题目所需的参数关系。反偏增大耗尽电荷，栅极需更高电压才能形成反型层，故阈值升高。忽略 CLM 和亚阈值电流。

代入 $V_{TH0}=0.7$ V、$\gamma=0.45\ \mathrm{V^{1/2}}$、$2|\phi_F|=0.9$ V，阈值电压可直接写为

$$
V_{TH}(V_{BS})=0.7\ \mathrm V+(0.45\ \mathrm{V^{1/2}})
\left[\sqrt{0.9\ \mathrm V-V_{BS}}-\sqrt{0.9\ \mathrm V}\right],
\qquad V_{SB}=-V_{BS}.
$$

$$
V_{TH}(-1\ \mathrm V)=0.7\ \mathrm V+(0.45\ \mathrm{V^{1/2}})
[\sqrt{1.9\ \mathrm V}-\sqrt{0.9\ \mathrm V}]=0.893\ \mathrm V.
$$

| $V_{BS}$ (V) | $V_{TH}$ (V) | $V_{TH}+0.5\ \mathrm V$ (V) |
|---|---|---|
| 0 | 0.700 | 1.200 |
| −1 | 0.893 | 1.393 |
| −2 | 1.039 | 1.539 |
| −3 | 1.162 | 1.662 |

### 第 2 步 — 工作区与分界点坐标

固定正的 $V_{DS}$，饱和条件为 $V_{DS}\ge V_{GS}-V_{TH}$；取等号并解出 $V_{GS}$，即得第二个分界点。平方律分段表达式为

$$
\frac{I_D}{\beta}=\begin{cases}
0,&u\le0,\\
u^2/2,&0<u\le V_{DS},\\
uV_{DS}-V_{DS}^2/2,&u>V_{DS},
\end{cases}\qquad u=V_{GS}-V_{TH}(V_{BS}).
$$

在 $u=V_{DS}$ 处，两段均给出 $I_D/\beta=V_{DS}^2/2$。归一化斜率 $d(I_D/\beta)/dV_{GS}$ 均为 $V_{DS}$，实际电流斜率 $dI_D/dV_{GS}$ 均为 $\beta V_{DS}$，因此两段相切。

### 第 3 步 — 间距与作图示例

$$
\frac{dV_{TH}}{dV_{SB}}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}}>0.
$$

该灵敏度随反偏增大而减小，因此阈值间距递减。体偏压只通过 $V_{TH}$ 进入公式，故各曲线是水平平移；相同过驱动电压下电流与斜率相同。

当 $V_{DS}=3$ V、$V_{GS}\le3$ V 时，最大过驱动电压为 2.3 V，导通段均饱和。$V_{DS}=0.5$ V 时第二分界点见上表。例如 $V_{BS}=-2$ V、$V_{GS}=2$ V 时，3 V 曲线给出 $I_D/\beta=\tfrac12(2-1.039)^2\ \mathrm{V^2}=0.461\ \mathrm{V^2}$。

![解答曲线：坐标、工作区、分界点和关键数值](/q/R005/solution-curves.zh.svg)
