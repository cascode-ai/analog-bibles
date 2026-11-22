# 详细步骤 - A229

在输入的每个极端处，一只共源器件截止，另一只以其全部栅极驱动被强烈导通。由于负载接地，导通器件的漏源电压很小，工作在非饱和区（nonsaturation region），因此输出由其沟道电阻与 $R_L$ 的分压决定。用非饱和区电流列 KCL，解二次方程并化简。两管源极都接各自衬底，不涉及体效应；$V_{T1}$ 和 $|V_{T2}|$ 是器件阈值，与电池电压 $V_{TR1}$、$V_{TR2}$ 不同。

### 第 1 步 — 各极端处哪只管导通

- $v_{IN}=V_{SS}$：M1 栅极为 $V_{SS}-V_{TR1}$，故 $V_{GS1}=-V_{TR1}<V_{T1}$，M1 截止。M2 栅极为 $V_{SS}+V_{TR2}$，故 $V_{SG2}=V_{DD}-V_{SS}-V_{TR2}$，为其最大值。这给出**最大**输出。
- $v_{IN}=V_{DD}$：M2 栅极为 $V_{DD}+V_{TR2}$，故 $V_{SG2}=-V_{TR2}$，M2 截止。M1 的栅极驱动为 $V_{GS1}=V_{DD}-V_{TR1}-V_{SS}$。这给出**最小**输出。

定义这两个极端处的过驱动电压：

$$
V_2=V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|,\qquad V_1=V_{DD}-V_{SS}-V_{TR1}-V_{T1}.
$$

### 第 2 步 — 导通器件的工作区

在最大值处，由于 $R_L$ 接地，$v_{OUT}\ge0$，故 $V_{SD2}=V_{DD}-v_{OUT}\le V_{DD}$。当 $V_{SD2}<V_2$ 时 M2 处于非饱和区；只要 $V_{DD}<V_2$，即 $|V_{SS}|>V_{TR2}+|V_{T2}|$（通常的双电源情况），这一点就有保证。同理，当 $V_{DD}>V_{TR1}+V_{T1}$ 时，M1 在最小值处处于非饱和区。

### 第 3 步 — 最大输出

M2 的非饱和区电流全部流入 $R_L$（$G_L=1/R_L$）。令 $x=V_{SD2}=V_{DD}-v_{OUT}$：

$$
\frac{v_{OUT}}{R_L}=\beta_2\Big[V_2(V_{DD}-v_{OUT})-\frac{(V_{DD}-v_{OUT})^2}{2}\Big]
\;\Rightarrow\;
\frac{\beta_2}{2}x^2-(\beta_2V_2+G_L)x+G_LV_{DD}=0 .
$$

有物理意义的是较小的根（$x<V_2$）：

$$
v_{OUT}(\max)=V_{DD}-\frac{(\beta_2V_2+G_L)-\sqrt{(\beta_2V_2+G_L)^2-2\beta_2G_LV_{DD}}}{\beta_2}.
$$

$V_{SD2}$ 较小时 $x^2$ 项可忽略，M2 相当于电阻 $1/(\beta_2V_2)$，与 $R_L$ 构成分压：

$$
v_{OUT}(\max)\approx V_{DD}\frac{\beta_2V_2}{\beta_2V_2+G_L}=\frac{V_{DD}}{1+\dfrac{1}{\beta_2R_L(V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|)}} .
$$

### 第 4 步 — 最小输出

M1 的非饱和区电流从 $R_L$ 中抽出。令 $y=V_{DS1}=v_{OUT}-V_{SS}$：

$$
-\frac{v_{OUT}}{R_L}=\beta_1\Big[V_1(v_{OUT}-V_{SS})-\frac{(v_{OUT}-V_{SS})^2}{2}\Big]
\;\Rightarrow\;
\frac{\beta_1}{2}y^2-(\beta_1V_1+G_L)y-G_LV_{SS}=0,
$$

$$
v_{OUT}(\min)=V_{SS}+\frac{(\beta_1V_1+G_L)-\sqrt{(\beta_1V_1+G_L)^2+2\beta_1G_LV_{SS}}}{\beta_1}
\approx\frac{V_{SS}}{1+\dfrac{1}{\beta_1R_L(V_{DD}-V_{SS}-V_{TR1}-V_{T1})}} .
$$

### 第 5 步 — 解释

当 $\beta R_LV\gg1$ 时，两个极限都接近电源轨，只差一个沟道电阻压降。这正是共源推挽级相对于源极跟随器的优点：后者在每一端都要损失一个被体效应增大的阈值电压。只有当另一侧电源很小且负载很重时，导通器件才可能保持饱和；此时 $v_{OUT}(\max)=\beta_2R_LV_2^2/2$（在其不超过 $V_{DD}-V_2$ 时成立），$v_{OUT}(\min)=-\beta_1R_LV_1^2/2$（在其不低于 $V_{SS}+V_1$ 时成立）。
