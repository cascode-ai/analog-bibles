# 详细步骤 - A113

题给的两个表达式来自传输特性的两端：输入较低时，二极管连接的负载在比 $V_{DD}$ 低一个阈值处截止；$v_{IN}=V_{DD}$ 时，M1 的线性区电流与 M2 的饱和电流相平衡。求出器件增益因子 $\beta_i=K'_iW_i/L_i$ 后代入即可。

### 第 1 步 — 最大输出

M2 为二极管连接（$v_{SD2}=v_{SG2}$），只要导通就处于饱和区。$v_{IN}<V_{TN}$ 时 M1 截止，输出上升，直到 M2 的电流降为零，即 $v_{SG2}=|V_{TP}|$ 时：

$$
v_{OUT}(\max)\cong V_{DD}-|V_{TP}|=5\ \mathrm V-0.7\ \mathrm V=4.3\ \mathrm V .
$$

### 第 2 步 — 最小输出表达式的来源

$v_{IN}=V_{DD}$ 时，M1 处于线性区，M2 饱和且 $v_{SG2}=V_{DD}-v_{OUT}$。令两管电流相等，并取 $V_{T1}=|V_{T2}|=V_T$：

$$
\beta_1\left[(V_{DD}-V_T)v_{OUT}-\frac{v_{OUT}^2}{2}\right]=\frac{\beta_2}{2}(V_{DD}-V_T-v_{OUT})^2 .
$$

令 $u=V_{DD}-V_T-v_{OUT}$，上式化为 $\beta_1[(V_{DD}-V_T)^2-u^2]=\beta_2u^2$，于是 $u=(V_{DD}-V_T)/\sqrt{1+\beta_2/\beta_1}$，即题给表达式：

$$
v_{OUT}(\min)=V_{DD}-V_T-\frac{V_{DD}-V_T}{\sqrt{1+\beta_2/\beta_1}} .
$$

### 第 3 步 — 器件增益因子

$$
\beta_1=K'_N\frac{W_1}{L_1}=(110\ \mu\mathrm{A/V^2})(5)=550\ \mu\mathrm{A/V^2},\qquad
\beta_2=K'_P\frac{W_2}{L_2}=(50\ \mu\mathrm{A/V^2})(1)=50\ \mu\mathrm{A/V^2},
$$

$$
\frac{\beta_2}{\beta_1}=0.0909,\qquad \sqrt{1+\beta_2/\beta_1}=\sqrt{1.0909}=1.0445 .
$$

### 第 4 步 — 最小输出

$$
v_{OUT}(\min)=4.3\ \mathrm V-\frac{4.3\ \mathrm V}{1.0445}=4.3-4.117\ \mathrm V=0.183\ \mathrm V .
$$

因此该反相器的输出从 $v_{OUT}(\min)\approx0.183$ V 摆动到 $v_{OUT}(\max)=4.3$ V。低电平很小，因为 M1 比负载强得多（$\beta_1/\beta_2=11$）；高电平则受二极管连接负载的阈值限制。
