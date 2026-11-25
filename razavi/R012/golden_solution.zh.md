# 参考答案 - R012

随 $V_X$ 升高，$I_X$ 与本征跨导 $g_m$ 均降至零。

令 $k=R_2/(R_1+R_2)$。源极接 $V_X$，衬底接地，因此

$$V_{GS}=k(V_{DD}-V_X),\qquad V_{DS}=V_{DD}-V_X,\qquad V_{SB}=V_X,$$

$$V_{TH}(V_X)=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_X}-\sqrt{2|\phi_F|}\right).$$

由于 $V_{DS}\ge V_{GS}$，$M_1$ 导通时均处于饱和区。当 $V_{GS}>V_{TH}$ 时，忽略沟道长度调制，有

$$I_X=\frac{\beta}{2}(V_{GS}-V_{TH})^2,\qquad g_m=\beta(V_{GS}-V_{TH}).$$

### 截止与截距

若 $kV_{DD}\le V_{TH0}$，全程截止。否则，两者在 $k(V_{DD}-V_{X,\mathrm{off}})=V_{TH}(V_{X,\mathrm{off}})$ 的唯一根处同时降为零，之后保持为零。

体效应使截止提前，两条曲线均为 $V_X$ 的非线性函数。$I_X$ 以零斜率达到截止点，且不含分压器电流。

导通时的起点由下式给出。忽略体效应时，截止点为 $V_{DD}-V_{TH0}/k$。

$$I_X(0)=\frac{\beta}{2}(kV_{DD}-V_{TH0})^2,\qquad g_m(0)=\beta(kV_{DD}-V_{TH0}).$$

![漏极电流与本征跨导](/q/R012/solution-curves.zh.svg)
