# 详细步骤 - A004

电路有两个未知节点电压：$R_3$ 上端的 $v_1$ 和 $R_4$ 上端的 $v_{out}$；第三个节点由 $v_{in}$ 确定。在两个未知节点上以电导形式 $G_k=1/R_k$ 列 KCL，再用克拉默法则求解这个 $2\times2$ 方程组。

### 第 1 步 — 节点 $v_1$ 的 KCL

对经 $R_1$（流向 $v_{in}$）、$R_3$（流向地）和 $R_2$（流向 $v_{out}$）离开节点 $v_1$ 的电流求和：

$$
G_1(v_1-v_{in})+G_3v_1+G_2(v_1-v_{out})=0
\;\Rightarrow\;
(G_1+G_2+G_3)\,v_1-G_2\,v_{out}=G_1v_{in}.
$$

### 第 2 步 — 节点 $v_{out}$ 的 KCL

受控源 $g_mv_1$ 的方向从 $v_{out}$ 节点向下指向地，因此它从该节点流出电流 $g_mv_1$。再计入流经 $R_2$ 和 $R_4$ 的电流：

$$
G_2(v_{out}-v_1)+g_mv_1+G_4v_{out}=0
\;\Rightarrow\;
(g_m-G_2)\,v_1+(G_2+G_4)\,v_{out}=0.
$$

### 第 3 步 — 用克拉默法则求解

写成矩阵形式：

$$
\begin{bmatrix}G_1+G_2+G_3 & -G_2\\ g_m-G_2 & G_2+G_4\end{bmatrix}
\begin{bmatrix}v_1\\ v_{out}\end{bmatrix}
=\begin{bmatrix}G_1v_{in}\\ 0\end{bmatrix}.
$$

行列式为

$$
\begin{aligned}
\Delta&=(G_1+G_2+G_3)(G_2+G_4)+G_2(g_m-G_2)\\
&=G_1G_2+G_1G_4+G_2G_3+G_2G_4+G_3G_4+g_mG_2 ,
\end{aligned}
$$

其中 $G_2^2$ 项相互抵消。把第二列换成右端向量，得

$$
v_{out}=\frac{1}{\Delta}\begin{vmatrix}G_1+G_2+G_3 & G_1v_{in}\\ g_m-G_2 & 0\end{vmatrix}
=\frac{G_1(G_2-g_m)}{\Delta}\,v_{in}.
$$

### 第 4 步 — 传递函数

$$
\frac{v_{out}}{v_{in}}=\frac{G_1(G_2-g_m)}{G_1G_2+G_1G_4+G_2G_3+G_2G_4+G_3G_4+g_mG_2}.
$$

分子、分母同乘 $R_1R_2R_3R_4$，得到电阻形式

$$
\frac{v_{out}}{v_{in}}=\frac{R_3R_4(1-g_mR_2)}{R_1R_2+R_1R_3+R_1R_4+R_2R_3+R_3R_4+g_mR_1R_3R_4}.
$$

有两项校核支持该结果。$g_m=0$ 时，它退化为 $R_1$–$R_3$–$R_2$–$R_4$ 无源梯形网络的结果。分子 $G_2-g_m$ 表明从 $v_1$ 到 $v_{out}$ 有两条符号相反的通路：经 $R_2$ 的正向传导，以及反相的电流 $g_mv_1$。当 $g_m=G_2$ 时二者抵消，输出为零；$g_mR_2\gg1$ 时反相通路占主导。
