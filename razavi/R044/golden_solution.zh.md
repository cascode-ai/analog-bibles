令 $k = \mu_nC_{ox}W/L$，$V_{ov} = V_{GS} - V_{TH}$：
当 $V_{GS} \le V_{TH}$ 时，$I_D = 0$；当 $V_{DS} \le V_{ov}$ 时，$I_D = \dfrac{k}{2}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right] = \mu_nC_{ox}\dfrac{W}{2L}\left[V_{ov}V_{DS} - \dfrac{V_{DS}^2}{2}\right]$；当 $V_{DS} \ge V_{ov}$ 时，$I_D = \tfrac12\mu_nC_{ox}\dfrac{W}{2L}V_{ov}^2$。这些正是宽长比为 $W/(2L)$ 的单个晶体管的方程。

推导：设中间节点的电压为 $V_X$。下管：$V_{GS2} = V_{GS}$，$V_{DS2} = V_X$；上管：$V_{GS1} = V_{GS} - V_X$，$V_{DS1} = V_{DS} - V_X$（由于 γ = 0，两管的 $V_{TH}$ 相同）。只有当 $V_{GS} - V_X > V_{TH}$，即 $V_X < V_{ov}$ 时，上管才导通，因此下管总是工作在线性区（triode region）：$I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_X)^2]$。
- 上管工作在饱和区（saturation region），即 $V_{DS} \ge V_{ov}$：$I_D = \tfrac{k}{2}(V_{ov} - V_X)^2$。令两式相等得 $(V_{ov} - V_X)^2 = V_{ov}^2/2$，因此 $I_D = \tfrac{k}{4}V_{ov}^2 = \tfrac12\mu_nC_{ox}\tfrac{W}{2L}V_{ov}^2$。
- 上管工作在线性区，即 $V_{DS} < V_{ov}$：$I_D = \tfrac{k}{2}[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2]$。把两个表达式相加：$2I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_{DS})^2]$，因此 $I_D = \tfrac{k}{2}[V_{ov}V_{DS} - V_{DS}^2/2]$。
（等价地，也可以在总沟道长度 2L 上对 $I_D\,dx = \mu_nC_{ox}W(V_{GS} - V - V_{TH})dV$ 积分得到这一结果。）

## 评分说明

- +2 分：线性区和饱和区的 $I_D$ 都正确，均含 $W/(2L)$ 因子；通过节点电压代数推导或在 $2L$ 上作渐变沟道积分给出有效证明；指出下方器件始终在线性区，或指出两器件阈值相同需要 $\gamma=0$。
- +1 分：证明了饱和区情形，线性区情形只给结论，或反之。
- 0 分：最终结论正确，但证明有明显缺口。
- −2 分（作为正确结论明确断言）：等效宽长比为 $W/L$ 或 $2W/L$，假设两器件同时饱和来推导结果，或给出与 $W/(2L)$ 不一致的 $I_D$ 表达式。
