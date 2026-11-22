# 详细步骤 - A050

判断在 $v_{DS}$ 的各个范围内两个阶跃函数哪个有效，分段化简模型，并确定其中一项关断的边界；再在固定 $v_{GD}$ 的条件下重复。取 $V_{TS}=V_{TD}=V_T>0$，$\beta=K'W/L$。

### 第 1 步 — 用 $v_{DS}$ 改写模型

漏端的栅压为 $v_{GD}=v_{GS}-v_{DS}$。模型是源端项与漏端项之差：

$$
i_D=\frac\beta2\Big\{(v_{GS}-V_T)^2u(v_{GS}-V_T)-(v_{GD}-V_T)^2u(v_{GD}-V_T)\Big\}.
$$

每一项只有在沟道该端反型（栅到该端的电压高于 $V_T$）时才存在。两端都反型时沟道连续（非饱和区）；只有一端反型时，沟道在另一端夹断，电流不再依赖该端电压（饱和区，$\lambda=0$）。

### 第 2 步 — 固定 $v_{GS}=V_{GS}>V_T$

源端项始终有效。漏端项在 $v_{GD}=V_{GS}-v_{DS}>V_T$ 即 $v_{DS}<V_{GS}-V_T$ 时有效：

$$
\begin{aligned}
v_{DS}<V_{GS}-V_T:&\quad i_D=\frac\beta2\big[(V_{GS}-V_T)^2-(V_{GS}-V_T-v_{DS})^2\big]=\beta\Big[(V_{GS}-V_T)v_{DS}-\frac{v_{DS}^2}{2}\Big],\\
v_{DS}\ge V_{GS}-V_T:&\quad i_D=\frac\beta2(V_{GS}-V_T)^2 .
\end{aligned}
$$

- **饱和区**，$v_{DS}\ge V_{GS}-V_T$：水平直线；沟道在漏端夹断。
- **非饱和区**，所有 $v_{DS}<V_{GS}-V_T$（正值和负值）：一条开口向下、过原点的抛物线，原点处斜率为 $\beta(V_{GS}-V_T)$。其导数 $\beta(V_{GS}-V_T-v_{DS})$ 恰在 $v_{DS}=V_{GS}-V_T$ 处为零，因此抛物线在最大值处与水平线光滑连接。
- $v_{DS}<0$ 时，同一抛物线延伸到第三象限：$i_D<0$，且 $|i_D|$ 按平方无限增大。此时漏极是电位较低的一端，起源极作用；$v_{GS}$ 固定时，其栅驱动 $v_{GD}=V_{GS}+|v_{DS}|$ 不断增大，因此这一支永远不会饱和。

![固定 vGS 时 iD 随 vDS 的变化：vDS 小于 Vov 时为过原点的抛物线，vDS 为负时电流向大的负值延伸，vDS = Vov 以上为 0.5 βVov² 的水平饱和线](/q/A050/solution-curves.zh.svg)

坐标按 $V_{ov}=V_{GS}-V_T$ 归一化：$v_{DS}/V_{ov}$ 和 $i_D/(\beta V_{ov}^2)$，因此饱和电平为 $0.5$，边界位于 $v_{DS}/V_{ov}=1$。

### 第 3 步 — 固定 $v_{GD}=V_{GD}>V_T$

此时漏端项始终有效，且 $v_{GS}=V_{GD}+v_{DS}$。源端项在 $V_{GD}+v_{DS}>V_T$ 即 $v_{DS}>-(V_{GD}-V_T)$ 时有效：

$$
\begin{aligned}
v_{DS}>-(V_{GD}-V_T):&\quad i_D=\frac\beta2\big[(V_{GD}-V_T+v_{DS})^2-(V_{GD}-V_T)^2\big]=\beta\Big[(V_{GD}-V_T)v_{DS}+\frac{v_{DS}^2}{2}\Big],\\
v_{DS}\le-(V_{GD}-V_T):&\quad i_D=-\frac\beta2(V_{GD}-V_T)^2 .
\end{aligned}
$$

- **饱和区**，$v_{DS}\le-(V_{GD}-V_T)$：电流为负值的水平直线；源极与漏极角色互换，沟道在源端夹断。
- **非饱和区**，$v_{DS}>-(V_{GD}-V_T)$：一条开口向上、过原点的抛物线，原点处斜率为 $\beta(V_{GD}-V_T)$；在边界处以零斜率与水平线连接，$v_{DS}>0$ 时按平方增大且不饱和。

![固定 vGD 时 iD 随 vDS 的变化：vDS 低于 −Vov 时为 −0.5 βVov² 的负值水平饱和线，其上为过原点上升的抛物线](/q/A050/solution-curves-vgd.zh.svg)

此处 $V_{ov}=V_{GD}-V_T$。作替换 $v_{DS}\to-v_{DS}$、$i_D\to-i_D$，第 3 步的表达式即变为第 2 步的表达式，因此第二幅草图是第一幅绕原点旋转 180° 的结果。这种点对称正是模型内含的源漏对称性：交换两个端子只改变电流的符号。

若 $V_{TS}\ne V_{TD}$，曲线形状相同，但 $v_{DS}=0$ 时 $i_D\ne0$，工作区边界变为 $v_{DS}=v_{GS}-V_{TD}$（固定 $v_{GS}$）和 $v_{DS}=V_{TS}-v_{GD}$（固定 $v_{GD}$）。
