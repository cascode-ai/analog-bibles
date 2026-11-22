# 详细步骤 - A185

小信号模型（b）有三个未知节点电压：$v_1$（D1 = S2）、$v_{out}$（D2 = D3）和 $v_4$（D4 = S3）。在各节点列基尔霍夫电流定律（KCL）方程，解这三个线性方程得到 $v_{out}/v_{in}$，再令 $g_m\gg g_{ds}$ 得到近似形式。

### 第 1 步 — 节点方程

由模型（b）：受控源 $g_{m1}v_{in}$ 和 $r_{ds1}$ 接在 $v_1$ 与地之间；$g_{m2}v_1$、$g_{mbs2}v_1$ 和 $r_{ds2}$ 接在 $v_1$ 与 $v_{out}$ 之间，受控源把电流从 $v_1$ 向上推入 $v_{out}$；$g_{m3}v_4$、$g_{mbs3}v_4$ 和 $r_{ds3}$ 以同样方式接在 $v_4$ 与 $v_{out}$ 之间；$r_{ds4}$ 接在 $v_4$ 与地之间。对流出各节点的电流求和：

$$
\begin{aligned}
v_1:&\quad (g_{ds1}+g_{ds2}+g_{m2}+g_{mbs2})v_1-g_{ds2}v_{out}=-g_{m1}v_{in},\\
v_{out}:&\quad -(g_{m2}+g_{mbs2}+g_{ds2})v_1+(g_{ds2}+g_{ds3})v_{out}-(g_{m3}+g_{mbs3}+g_{ds3})v_4=0,\\
v_4:&\quad -g_{ds3}v_{out}+(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})v_4=0.
\end{aligned}
$$

### 第 2 步 — 求解增益

为简化代数运算，记 $a=g_{m2}+g_{mbs2}+g_{ds2}$，$b=g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4}$。由第一个和第三个方程得

$$
v_1=\frac{g_{ds2}v_{out}-g_{m1}v_{in}}{a+g_{ds1}},\qquad v_4=\frac{g_{ds3}}{b}\,v_{out}.
$$

代入输出节点方程，利用 $(g_{m3}+g_{mbs3}+g_{ds3})=b-g_{ds4}$，并在两边乘以 $b(a+g_{ds1})$：

$$
\frac{v_{out}}{v_{in}}=\frac{-g_{m1}(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})}{g_{ds1}g_{ds2}(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})+g_{ds3}g_{ds4}(g_{m2}+g_{mbs2}+g_{ds1}+g_{ds2})}.
$$

### 第 3 步 — 化为近似表达式

分子分母同除以 $(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})$，并把每个 $g_{ds}$ 相对于其旁边的 $g_m$ 略去：

$$
\frac{v_{out}}{v_{in}}\approx\frac{-g_{m1}}{\dfrac{g_{ds1}g_{ds2}}{g_{m2}+g_{mbs2}}+\dfrac{g_{ds3}g_{ds4}}{g_{m3}+g_{mbs3}}}
=-g_{m1}\left(R_A\parallel R_B\right),
$$

其中 $R_A=(g_{m2}+g_{mbs2})r_{ds1}r_{ds2}$、$R_B=(g_{m3}+g_{mbs3})r_{ds3}r_{ds4}$ 分别是向下看进 M2 共源共栅和向上看进 M3 共源共栅的电阻。忽略体效应时，

$$
A_v\cong-g_{m1}\{[g_{m2}r_{ds1}r_{ds2}]\parallel[g_{m3}r_{ds3}r_{ds4}]\},
$$

即题中给出的表达式：$g_{m1}$ 乘以两个共源共栅输出电阻的并联，增益为 $(g_mr_{ds})^2$ 量级。保留 $g_{mbs2}$ 和 $g_{mbs3}$ 会使两个共源共栅电阻略为增大，从而使增益略有提高。
