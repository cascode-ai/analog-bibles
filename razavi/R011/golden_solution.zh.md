PMOS 的源极和衬底均接 $V_{DD}=3\,\mathrm{V}$。忽略栅极电流，由分压关系得

$$
k=\frac{R_1}{R_1+R_2},\quad V_{SG}=k(V_{DD}-V_X),\quad V_{SD}=V_{DD}-V_X.
$$

由于 $V_{SD}\ge V_{SG}$，$M_1$ 导通时均处于饱和区。当 $V_{SG}>|V_{TH}|=0.8\,\mathrm{V}$ 时，取 $\lambda=0$，平方律给出漏极电流 $I_X$ 和取正值的本征跨导 $g_m$。

$$I_X=\frac{\beta_p}{2}(V_{SG}-|V_{TH}|)^2,\qquad
g_m=\beta_p(V_{SG}-|V_{TH}|).$$

若 $kV_{DD}>|V_{TH}|$，两条曲线的初值、导通段的跨导斜率和截止电压为

$$
\begin{aligned}
I_X(0)&=\frac{\beta_p}{2}\left[(3\,\mathrm{V})\frac{R_1}{R_1+R_2}-0.8\,\mathrm{V}\right]^2,\\
g_m(0)&=\beta_p\left[(3\,\mathrm{V})\frac{R_1}{R_1+R_2}-0.8\,\mathrm{V}\right],\\
\frac{dg_m}{dV_X}&=-\beta_p\frac{R_1}{R_1+R_2},\\
V_{X,\mathrm{off}}&=3\,\mathrm{V}-(0.8\,\mathrm{V})\frac{R_1+R_2}{R_1}.
\end{aligned}
$$

电流按二次函数下降，以零斜率达到零。跨导线性下降。在截止点及其后，两者均为零。若 $kV_{DD}\le |V_{TH}|$，则全程截止。$I_X$ 不含分压器电流。

![漏极电流与本征跨导随输入电压的两张曲线](/q/R011/solution-curves.zh.svg)

## 评分说明

+2：分压比 $R_1/(R_1+R_2)$ 正确，指出晶体管导通时始终处于饱和区，晶体管电流按二次关系下降，取正值的本征跨导 $g_m$ 线性下降，并正确标出截止点及截止后的零值。写明 $(3\ \mathrm{V})R_1/(R_1+R_2)\le0.8\ \mathrm{V}$ 时，全程截止的分支也正确。接受等效的归一化图，坐标轴须保留单位。

+1：曲线形状正确，但截止点有小误差，或缺少处于饱和区的依据。

0：只给出定性曲线，缺少必要的端电压关系或工作区判断。

−2（明确作为结论）：声称 $I_X$ 随扫描增大、导通时处于线性区，或采用颠倒的分压比、把器件判为 NMOS、把分压器电流计入晶体管电流 $I_X$。注意区分本征跨导 $g_m$ 与负的扫描斜率 $dI_X/dV_X$。
