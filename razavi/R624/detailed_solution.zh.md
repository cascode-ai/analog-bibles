# 详细步骤 - R624

**思路。** 把放大器建模为理想增益 $A_v$，其失调 $V_{OS}$ 与输入端 X 串联。求解失调消除相的单位增益环路，得到存储在 X 与 Y 之间的电压。在放大相 X 和 Y 浮空，由电荷守恒可求出 $V_{in}$ 有多少到达 X–Y；然后求出使输出为零的输入。

### 第 1 步 — 放大器模型与符号约定

如图 2 所示，$V_{OS}$ 与输入端 X 串联（$+$ 端在 X），因此内部差分输入为 $V_{XY} - V_{OS}$，其中 $V_{XY} = V_X - V_Y$。$S_3$ 接回 X 的输出是反相输出；把 $V_{out}$ 定义为该输出减去 $S_4$ 接回 Y 的输出，则

$$V_{out} = -A_v\left(V_{XY} - V_{OS}\right).$$

### 第 2 步 — 失调消除相：存储的电压

$S_3$ 和 $S_4$ 使 $V_{XY} = V_{out}$，因此

$$V_{XY} = -A_v\left(V_{XY} - V_{OS}\right) \quad\Longrightarrow\quad V_{XY}\,(1 + A_v) = A_vV_{OS} \quad\Longrightarrow\quad V_{XY,0} = \frac{A_v}{1 + A_v}V_{OS}.$$

内部输入停留在 $V_{XY} - V_{OS} = -V_{OS}/(1 + A_v)$：接近零但不完全为零，因为有限增益需要非零输入才能维持其输出。此时 $C_1$ 和 $C_2$ 的左极板都接 $V_{CM}$，$C_1$、$C_2$ 和 $C_{in}$ 上的电荷记录下这一状态。

### 第 3 步 — 放大相：$V_{in}$ 有多少到达 X–Y

把 $C_1$ 和 $C_2$ 的左极板分别记为节点 A 和 B。开关切换后，它们的电压分别变化 $\Delta V_A$ 和 $\Delta V_B$，且 $\Delta V_A - \Delta V_B = V_{in}$（切换前 $V_{AB} = 0$）。此时 X 和 Y 浮空（它们只连接电容极板和栅极输入），因此其电荷守恒：

**节点 X**（$C_1$ 接 A，$C_{in}$ 接 Y）：

$$C\left(\Delta V_X - \Delta V_A\right) + C_{in}\left(\Delta V_X - \Delta V_Y\right) = 0 .$$

**节点 Y**（$C_2$ 接 B，$C_{in}$ 接 X）：

$$C\left(\Delta V_Y - \Delta V_B\right) + C_{in}\left(\Delta V_Y - \Delta V_X\right) = 0 .$$

两式相减：

$$C\left(\Delta V_X - \Delta V_Y\right) - C\left(\Delta V_A - \Delta V_B\right) + 2C_{in}\left(\Delta V_X - \Delta V_Y\right) = 0 .$$

利用 $\Delta V_{XY} = \Delta V_X - \Delta V_Y$ 和 $\Delta V_A - \Delta V_B = V_{in}$：

$$\Delta V_{XY}\,(C + 2C_{in}) = C\,V_{in} \quad\Longrightarrow\quad \Delta V_{XY} = \frac{C}{C + 2C_{in}}\,V_{in}.$$

对差分信号而言，$C_1$ 和 $C_2$ 串联（$C/2$），与 $C_{in}$ 构成分压器，$\frac{C/2}{C/2 + C_{in}} = \frac{C}{C + 2C_{in}}$；共模（common-mode）输入的变化使 X 和 Y 一起移动，不影响 $V_{XY}$。

<!-- diagram: diagram-01.cir -->

上图为这一相的电路：$V_{in}$ 驱动 $C_1$ 和 $C_2$，$C_{in}$ 接在 X 与 Y 之间，放大器表示为失调源 $V_{OS}$ 后接理想增益 $-A_v$。各电容在这一相开始时带有第 2 步中存储的电荷。

### 第 4 步 — 放大相的输出

$$V_{XY} = V_{XY,0} + \Delta V_{XY} = \frac{A_v}{1 + A_v}V_{OS} + \frac{C}{C + 2C_{in}}V_{in}.$$

代入 $V_{out} = -A_v(V_{XY} - V_{OS})$：

$$
\begin{aligned}
V_{out} &= -A_v\left[\frac{A_v}{1 + A_v}V_{OS} - V_{OS} + \frac{C}{C + 2C_{in}}V_{in}\right]\\
&= -A_v\left[\frac{A_v - (1 + A_v)}{1 + A_v}V_{OS} + \frac{C}{C + 2C_{in}}V_{in}\right]\\
&= -A_v\left[-\frac{V_{OS}}{1 + A_v} + \frac{C}{C + 2C_{in}}V_{in}\right].
\end{aligned}
$$

### 第 5 步 — 整个电路的输入参考失调

方括号内为零时 $V_{out} = 0$：

$$\frac{C}{C + 2C_{in}}V_{in} = \frac{V_{OS}}{1 + A_v} \quad\Longrightarrow\quad V_{OS,tot} = \frac{V_{OS}}{1 + A_v}\cdot\frac{C + 2C_{in}}{C} = \frac{V_{OS}}{1 + A_v}\left(1 + \frac{2C_{in}}{C}\right).$$

**验算。** $V_{in} = 0$ 时输出失调为 $A_vV_{OS}/(1 + A_v)$，而从 $V_{in}$ 到输出的增益为 $-A_vC/(C + 2C_{in})$；二者之比给出同样的 $V_{OS,tot}$。

残余量 $-V_{OS}/(1 + A_v)$ 直接位于放大器输入端，而信号在到达那里的途中被 $C/(C + 2C_{in})$ 衰减，因此折合到 $V_{in}$ 时，残余量增大为 $(C + 2C_{in})/C$ 倍。要使这一代价很小，需要 $C \gg 2C_{in}$。

### 结果

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v}\left(1 + \frac{2C_{in}}{C}\right) \approx \frac{V_{OS}}{A_v}\cdot\frac{C + 2C_{in}}{C}\quad(A_v \gg 1).$$

失调消除相在 X–Y 之间存储了 $A_vV_{OS}/(1 + A_v)$，在放大器内部输入端留下残余量 $V_{OS}/(1 + A_v)$。在放大相，输入只能经分压器 $C/(C + 2C_{in})$ 到达 X–Y，这使输入参考的残余失调增大为 $1 + 2C_{in}/C$ 倍。当 $C_{in} = 0$ 时，即回到熟悉的结果 $V_{OS}/(1 + A_v)$。

**常见错误。** 使用分压比 $C/(C + C_{in})$。对差分输入而言，$C_1$ 和 $C_2$ 串联（$C/2$）后再与 $C_{in}$ 分压，得到 $C/(C + 2C_{in})$ 和因子 $1 + 2C_{in}/C$。

**常见错误。** 把分压比作用在残余误差上而不是输入上，例如 $V_{OS,tot} = [V_{OS}/(1 + A_v)]\cdot C/(C + 2C_{in})$，这会使 $C_{in}$ 看起来反而**减小**了失调。存储的电压和残余量都直接作用在 X–Y 上；只有新加入的 $V_{in}$ 才经过分压器。

**常见错误。** 认为失调存储能完全消除失调，或认为 $C_{in}$ 没有影响。增益有限时仍残留 $V_{OS}/(1 + A_v)$，而信号的衰减会放大其输入参考值。
