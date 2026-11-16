某饱和区（saturation region）MOSFET 的紧凑模型（compact model）同时计入了纵向电场（拟合参数 θ）和横向电场引起的迁移率退化（mobility degradation）；横向电场的作用即速度饱和（velocity saturation），饱和速度为 $v_{sat}$，低场迁移率为 $\mu_0$。该模型给出
$$I_D = \frac12\mu_0C_{ox}\frac{W}{L}\,\frac{(V_{GS}-V_{TH})^2}{1 + \left(\dfrac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS}-V_{TH})} .$$
利用该式计算 MOSFET 的跨导（transconductance）。证明
$$g_m = \frac{I_D}{V_{GS}-V_{TH}}\left[1 + \frac{1}{1 + \left(\dfrac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS}-V_{TH})}\right].$$
