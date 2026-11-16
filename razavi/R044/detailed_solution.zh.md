# 详细步骤 - R044

**思路。** 把两个晶体管之间的节点记为 $X$。用 $V_{GS}$、$V_{DS}$ 和 $V_X$ 写出每个晶体管的平方律电流，判断每个器件所处的工作区，并令两个电流相等。消去 $V_X$ 后得到 $I_D(V_{GS}, V_{DS})$，它恰好就是宽长比为 $W/(2L)$ 的单个晶体管的特性。

### 第 1 步 — 端电压与截止情形

把上面的晶体管记为 $M_1$，下面的记为 $M_2$，所有电压都以底端端子为参考。令 $k = \mu_nC_{ox}W/L$，$V_{ov} = V_{GS} - V_{TH}$：

$$
\begin{aligned}
M_2:&\quad V_{GS2} = V_{GS}, & V_{DS2} &= V_X,\\
M_1:&\quad V_{GS1} = V_{GS} - V_X, & V_{DS1} &= V_{DS} - V_X .
\end{aligned}
$$

由于 $\gamma = 0$，尽管 $M_1$ 的源极处于 $V_X > 0$，它的 $V_{TH}$ 仍然相同；由于 $\lambda = 0$，饱和电流与 $V_{DS}$ 无关。当 $V_{DS} \ge 0$ 时，电流向下流动，且 $0 \le V_X \le V_{DS}$。

若 $V_{GS} \le V_{TH}$，$M_2$ 没有沟道，$M_1$ 也没有（$V_{GS1} = V_{GS} - V_X \le V_{TH}$），因此

$$I_D = 0 \qquad (V_{GS} \le V_{TH}).$$

以下设 $V_{ov} > 0$。

### 第 2 步 — $M_2$ 总是工作在线性区

要有电流流过，$M_1$ 必须导通：

$$V_{GS1} > V_{TH} \;\Longleftrightarrow\; V_{GS} - V_X > V_{TH} \;\Longleftrightarrow\; V_X < V_{ov} .$$

而 $V_X = V_{DS2}$，$V_{ov}$ 是 $M_2$ 的过驱动电压（overdrive voltage），因此 $V_{DS2} < V_{GS2} - V_{TH}$：**只要叠层导通，$M_2$ 就工作在线性区**。把它的电流写成便于使用的形式：

$$I_D = k\left[V_{ov}V_X - \frac{V_X^2}{2}\right] = \frac{k}{2}\left[2V_{ov}V_X - V_X^2\right] = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right],$$

即沟道源端过驱动电压（$V_{ov}$）与漏端过驱动电压（$V_{ov} - V_X$）的平方差的 $k/2$ 倍。

### 第 3 步 — $M_1$ 的工作区

$M_1$ 的过驱动电压为 $V_{ov1} = V_{GS} - V_X - V_{TH} = V_{ov} - V_X$，当 $V_{DS1} \ge V_{ov1}$ 时 $M_1$ 饱和：

$$V_{DS} - V_X \ge V_{ov} - V_X \;\Longleftrightarrow\; V_{DS} \ge V_{ov} .$$

$V_X$ 被消去，因此两种情形的分界是 $V_{DS} = V_{GS} - V_{TH}$，与单个晶体管完全相同。

### 第 4 步 — 情形 A：$V_{DS} \ge V_{ov}$（$M_1$ 饱和）

$M_1$ 的电流为 $I_D = \tfrac{k}{2}V_{ov1}^2 = \tfrac{k}{2}(V_{ov} - V_X)^2$。令它与 $M_2$ 的电流（第 2 步）相等：

$$\frac{k}{2}(V_{ov} - V_X)^2 = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right] \quad\Longrightarrow\quad 2\,(V_{ov} - V_X)^2 = V_{ov}^2 \quad\Longrightarrow\quad (V_{ov} - V_X)^2 = \frac{V_{ov}^2}{2} .$$

代回 $M_1$ 的方程：

$$I_D = \frac{k}{2}\cdot\frac{V_{ov}^2}{2} = \frac{k}{4}V_{ov}^2 = \frac12\,\mu_nC_{ox}\frac{W}{2L}\,(V_{GS} - V_{TH})^2 .$$

中间节点的电压为 $V_X = V_{ov}(1 - 1/\sqrt2) = 0.293\,V_{ov}$，与 $V_{DS}$ 无关；这正是 $M_1$ 作为电流源（current source）且 $\lambda = 0$ 时所预期的。

### 第 5 步 — 情形 B：$0 \le V_{DS} < V_{ov}$（$M_1$ 处于线性区）

把 $M_1$ 的线性区电流也写成同样的平方差形式，其源端过驱动电压为 $V_{ov} - V_X$，漏端过驱动电压为 $V_{ov1} - V_{DS1} = (V_{ov} - V_X) - (V_{DS} - V_X) = V_{ov} - V_{DS}$：

$$
\begin{aligned}
I_D &= k\left[(V_{ov} - V_X)(V_{DS} - V_X) - \frac{(V_{DS} - V_X)^2}{2}\right]\\
&= \frac{k}{2}\left[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2\right].
\end{aligned}
$$

把它与 $M_2$ 的表达式 $I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_X)^2]$ 相加，未知量 $(V_{ov} - V_X)^2$ 被消去：

$$2I_D = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_{DS})^2\right] = \frac{k}{2}\left[2V_{ov}V_{DS} - V_{DS}^2\right] = k\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right],$$

$$I_D = \frac{k}{2}\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] = \mu_nC_{ox}\frac{W}{2L}\left[(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2}\right].$$

**验证。** 在 $V_{DS} = V_{ov}$ 处，上式给出 $\tfrac{k}{2}\cdot\tfrac{V_{ov}^2}{2} = \tfrac{k}{4}V_{ov}^2$，与情形 A 连续。由 $M_2$ 的方程，$(V_{ov} - V_X)^2 = V_{ov}^2 - 2I_D/k = \tfrac12[V_{ov}^2 + (V_{ov} - V_{DS})^2]$，它介于 $(V_{ov} - V_{DS})^2$ 和 $V_{ov}^2$ 之间，因此 $0 \le V_X \le V_{DS}$，与假设一致。

### 第 6 步 — 解释：一条长度为 $2L$ 的沟道

阈值和栅极都相同时，两条沟道构成一条长度为 $2L$ 的连续沟道，$X$ 位于其中点。把缓变沟道（gradual-channel）关系式 $I_D = \mu_nC_{ox}W\,[V_{GS} - V(x) - V_{TH}]\,dV/dx$（其中 $V(x)$ 为沟道电势）对 $x$ 从 0 积分到 $2L$、对 $V$ 从 0 积分到 $V_{DS}$，即可证实这一点：

$$I_D\cdot2L = \mu_nC_{ox}W\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] \quad\Longrightarrow\quad I_D = \mu_nC_{ox}\frac{W}{2L}\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right],$$

与第 5 步的结果相同。这就是为什么常把器件串联叠接，用最小长度的单元构成长沟道晶体管。

### 结果

令 $V_{ov} = V_{GS} - V_{TH}$：

$$
I_D = \begin{cases}
0, & V_{GS} \le V_{TH},\\[4pt]
\mu_nC_{ox}\dfrac{W}{2L}\left[(V_{GS} - V_{TH})V_{DS} - \dfrac{V_{DS}^2}{2}\right], & 0 \le V_{DS} \le V_{GS} - V_{TH},\\[10pt]
\dfrac12\,\mu_nC_{ox}\dfrac{W}{2L}\,(V_{GS} - V_{TH})^2, & V_{DS} \ge V_{GS} - V_{TH}.
\end{cases}
$$

这些正是宽长比为 $W/(2L)$ 的单个晶体管的线性区和饱和区方程，阈值相同，饱和边界 $V_{DS} = V_{GS} - V_{TH}$ 也相同。下面的器件总是工作在线性区；上面的器件决定了组合器件的工作区。

**常见错误。** 假设两个晶体管都饱和，并把 $V_{DS}$ 分配给它们。要使上管导通，$V_X$ 必须保持在 $V_{GS} - V_{TH}$ 以下，这使下管处于线性区；令两个饱和电流相等会迫使 $V_X = 0$，这与下管饱和相矛盾。

**常见错误。** 把等效宽长比取为 $W/L$（“宽度相同，电流相同”）或 $2W/L$（好像是并联）。**串联**的器件沟道长度相加，因此宽长比为 $W/(2L)$，饱和电流是单个器件的一半。

**常见错误。** 忘记这一结果需要 $\gamma = 0$。存在体效应（body effect）时，上管的阈值随 $V_X$ 升高，叠层就不再严格等效于一个长度为 $2L$ 的晶体管。
