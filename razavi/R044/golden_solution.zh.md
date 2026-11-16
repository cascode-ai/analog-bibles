令 $k = \mu_nC_{ox}W/L$，$V_{ov} = V_{GS} - V_{TH}$：
当 $V_{GS} \le V_{TH}$ 时，$I_D = 0$；当 $V_{DS} \le V_{ov}$ 时，$I_D = \dfrac{k}{2}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right] = \mu_nC_{ox}\dfrac{W}{2L}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right]$；当 $V_{DS} \ge V_{ov}$ 时，$I_D = \tfrac12\mu_nC_{ox}\dfrac{W}{2L}V_{ov}^2$。这些正是宽长比为 $W/(2L)$ 的单个晶体管的方程。

推导：设中间节点的电压为 $V_X$。下管：$V_{GS2} = V_{GS}$，$V_{DS2} = V_X$；上管：$V_{GS1} = V_{GS} - V_X$，$V_{DS1} = V_{DS} - V_X$（由于 γ = 0，两管的 $V_{TH}$ 相同）。只有当 $V_{GS} - V_X > V_{TH}$，即 $V_X < V_{ov}$ 时，上管才导通，因此下管总是工作在线性区（triode region）：$I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_X)^2]$。
- 上管工作在饱和区（saturation region），即 $V_{DS} \ge V_{ov}$：$I_D = \tfrac{k}{2}(V_{ov} - V_X)^2$。令两式相等得 $(V_{ov} - V_X)^2 = V_{ov}^2/2$，因此 $I_D = \tfrac{k}{4}V_{ov}^2 = \tfrac12\mu_nC_{ox}\tfrac{W}{2L}V_{ov}^2$。
- 上管工作在线性区，即 $V_{DS} < V_{ov}$：$I_D = \tfrac{k}{2}[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2]$。把两个表达式相加：$2I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_{DS})^2]$，因此 $I_D = \tfrac{k}{2}[V_{ov}V_{DS} - V_{DS}^2/2]$。
（等价地，也可以在总沟道长度 2L 上对 $I_D\,dx = \mu_nC_{ox}W(V_{GS} - V - V_{TH})dV$ 积分得到这一结果。）
