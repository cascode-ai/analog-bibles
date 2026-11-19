体效应通过阈值改变转移曲线，不改变 $\beta=\mu_nC_{ox}W/L$。通用体效应模型为

$$
V_{TH}(V_{BS})=V_{TH0}+\gamma
\left[\sqrt{2|\phi_F|-V_{BS}}-\sqrt{2|\phi_F|}\right],
\qquad V_{SB}=-V_{BS}.
$$

其中 $V_{TH0}$ 是零体偏压（$V_{SB}=0$）时的阈值，$\gamma$ 为体效应系数，$|\phi_F|$ 为费米势的幅值。该模型采用耗尽近似，适用于源-衬底结未明显正向导通的情况；本题画反偏范围 $V_{BS}\le0$。

代入 $V_{TH0}=0.7$ V、$\gamma=0.45\ \mathrm{V^{1/2}}$、$2|\phi_F|=0.9$ V，定义数值辅助函数

$$
T(s)=0.7\ \mathrm V+(0.45\ \mathrm{V^{1/2}})
\left[\sqrt{0.9\ \mathrm V+s}-\sqrt{0.9\ \mathrm V}\right].
$$

$$
V_{TH}(V_{BS})=T(-V_{BS}),\qquad V_{SB}=-V_{BS}.
$$

$$
\frac{I_D}{\beta}=\begin{cases}
0,&u\le0,\\
u^2/2,&0<u\le V_{DS},\\
uV_{DS}-V_{DS}^2/2,&u>V_{DS},
\end{cases}\qquad u=V_{GS}-V_{TH}(V_{BS}).
$$

分界点为 $V_{GS}=V_{TH}(V_{BS})$（截止 → 饱和）和 $V_{GS}=V_{TH}(V_{BS})+V_{DS}$（饱和 → 线性）。例如：

| $V_{BS}$ (V) | $V_{TH}$ (V) | $V_{TH}+0.5\ \mathrm V$ (V) |
|---|---|---|
| 0 | 0.700 | 1.200 |
| −1 | 0.893 | 1.393 |
| −2 | 1.039 | 1.539 |
| −3 | 1.162 | 1.662 |

$V_{BS}$ 越负，曲线越向右平移；每变化 1 V，位移依次约为 0.193、0.146、0.122 V，逐渐减小。第二分界点之后，实际电流 $I_D$ 的斜率为 $\beta V_{DS}$。图中分别选取固定 $V_{DS}=3$ V、0.5 V；前者在图示栅压范围内无导通后的线性区。正 $V_{BS}$ 降低阈值，但使源-衬底结正偏，限制了模型的适用范围。

![解答曲线：坐标、工作区、分界点和关键数值](/q/R005/solution-curves.zh.svg)
