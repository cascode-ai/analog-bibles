# 详细步骤 - R029

**思路：** $M_1$（栅极固定在 2 V）把充电到 3 V 的 $C_1$ 与空的 $C_2$ 连接起来。电流从 $C_1$ 经 $M_1$ 流入 $C_2$，因此 $V_X$ 下降、源极电压 $V_S$ 上升，并满足总电荷守恒。电荷转移在 $M_1$ 截止或 $V_X$ 与 $V_S$ 先相等时停止。采用忽略沟道长度调制的长沟道平方律模型（$\lambda=0$）。

### 第 1 步 — 电荷守恒

把源极节点（$C_2$ 的上极板）记为 S；衬底接地，因此 $V_{SB}=V_S$。流出 $C_1$ 的电流进入 $C_2$：

$$I_X=-C_1\frac{dV_X}{dt}=C_2\frac{dV_S}{dt}.$$ 

从 $t=0$ 积分得

$$C_1(3-V_X)=C_2V_S\quad\Longrightarrow\quad V_X=3-\frac{C_2}{C_1}V_S.$$ 

令 $r=C_2/C_1$，体效应阈值为

$$V_{TH}(V_S)=0.7+0.45\left(\sqrt{0.9+V_S}-0.9487\right)\ \mathrm{V}.$$ 

### 第 2 步 — 初始电流

在 $t=0^+$ 时，$V_X=3$ V、$V_S=0$、$V_{GS}=2$ V、$V_{DS}=3$ V、$V_{TH}=0.7$ V。由于 $V_{DS}=3\ \mathrm{V}>V_{GS}-V_{TH}=1.3\ \mathrm{V}$，$M_1$ 处于饱和区：

$$I_X(0^+)=\tfrac12\beta(2-0.7)^2=\tfrac12\beta(1.3\ \mathrm{V})^2=(0.845\ \mathrm{V^2})\beta.$$ 

### 第 3 步 — 工作区与电流变化

电荷转移时，$V_{GS}=2-V_S$ 下降，$V_{TH}(V_S)$ 上升，$V_{DS}=V_X-V_S$ 减小。对 $\lambda=0$，正过驱动时

$$I_X=\begin{cases}\tfrac12\beta(V_{GS}-V_{TH})^2,&V_{DS}\ge V_{GS}-V_{TH},\\[2pt]\beta\left[(V_{GS}-V_{TH})V_{DS}-\tfrac12V_{DS}^2\right],&0\le V_{DS}<V_{GS}-V_{TH},\end{cases}$$

当 $V_{GS}\le V_{TH}$ 时电流为零。因此 $I_X$ 从 $(0.845\ \mathrm{V^2})\beta$ 单调下降到零。饱和边界为

$$V_X-V_S\ge2-V_S-V_{TH}\quad\Longleftrightarrow\quad V_X\ge2-V_{TH}(V_S).$$

### 第 4 步 — 源极截止电压

若 $M_1$ 保持饱和，截止条件为 $V_{GS}=V_{TH}$：

$$2-V_S=0.7+0.45\sqrt{0.9+V_S}-0.4269.$$ 

令 $u=\sqrt{0.9+V_S}$，则

$$
\begin{aligned}
2-(u^2-0.9)&=0.2731+0.45u\\
u^2+0.45u-2.6269&=0\\
u&=\frac{-0.45+\sqrt{0.2025+10.5076}}{2}\approx1.411\\
V_{S,\mathrm{off}}&=u^2-0.9\approx1.092\ \mathrm{V}.
\end{aligned}
$$

此时 $V_{TH}\approx0.91$ V。平方律电流渐近趋于零，所以 1.092 V 是极限值。

### 第 5 步 — 电容比条件

情形 1： $M_1$ 在饱和区截止。截止极限处

$$V_{X,\mathrm{final}}=3-V_{S,\mathrm{off}}r.$$ 

两种情形的边界满足 $V_X=V_S=V_{S,\mathrm{off}}$，由电荷守恒

$$3-rV_{S,\mathrm{off}}=V_{S,\mathrm{off}}\quad\Longrightarrow\quad r_{\mathrm{crit}}=\frac{3-V_{S,\mathrm{off}}}{V_{S,\mathrm{off}}}\approx1.748.$$ 

当 $r<r_{\mathrm{crit}}$ 时，$V_S\to1.092$ V，$V_X\to3-1.092(C_2/C_1)$ V；$V_X$ 仍高于 $V_S$，$M_1$ 截止。

情形 2： 当 $r>r_{\mathrm{crit}}$ 时，两个节点先相等。$M_1$ 进入线性区并导通到 $V_{DS}=0$，所以 $V_X=V_S=V_f$。电荷守恒给出

$$C_1(3-V_f)=C_2V_f\quad\Longrightarrow\quad V_f=\frac{3C_1}{C_1+C_2}.$$ 

当且仅当 $r>1.748$ 时 $V_f<1.092$ V，因此相遇时晶体管仍导通。当 $r=r_{\mathrm{crit}}$ 时，两种停止条件在 $V_X=V_S=V_{S,\mathrm{off}}$ 处重合。

### 第 6 步 — 数值示例

取 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1$ pF，对应 1 ns 的时间尺度。当 $C_2=C_1$（$r=1$）时，$V_S\to1.092$ V、$V_X\to1.91$ V：

| $t$ (ns) | $V_X$ (V) | $V_S$ (V) | $I_X$ (mA) |
|---|---:|---:|---:|
| $0^+$ | 3.00 | 0 | 0.845 |
| 0.5 | 2.70 | 0.30 | 0.43 |
| 1 | 2.53 | 0.47 | 0.27 |
| 2 | 2.34 | 0.66 | 0.13 |
| 5 | 2.14 | 0.86 | 0.036 |
| 20 | 1.98 | 1.02 | 0.003 |
| $\infty$ | 1.91 | 1.092 | 0 |

当 $C_2=3C_1$（$r=3$）时，$V_f=0.75$ V。数值轨迹约在 5.0 ns 离开饱和区（$V_X\approx1.17$ V、$V_S\approx0.61$ V），随后在线性区趋近 0.75 V。

## 结果

### 答案图

![V_X 随时间变化](/q/R029/solution-vx.zh.svg)

![I_X 随时间变化](/q/R029/solution-ix.zh.svg)

图中曲线使用题给 MOS 模型并取 $\lambda=0$；归一化示例为 $\beta=1\ \mathrm{mA/V^2}$、$C_1=1$ pF。

$M_1$ 把电荷从 $C_1$ 转移到 $C_2$，满足 $C_1(3-V_X)=C_2V_S$。$I_X$ 从 $(0.845\ \mathrm{V^2})\beta$ 开始并下降到零，$V_X$ 下降而 $V_S$ 上升。当 $C_2/C_1<1.748$ 时在 $V_S\to1.092$ V 截止；当 $C_2/C_1>1.748$ 时两节点稳定在 $3C_1/(C_1+C_2)$。

**常见错误：** 把源极当作接地而令 $V_X$ 放电到 0 V。节点 S 通过 $C_2$ 充电，两个最终电压由电荷守恒确定。

**常见错误：** 只假设一种停止机制。结果取决于 $C_2/C_1$ 与 $r_{\mathrm{crit}}\approx1.748$ 的关系。

**常见错误：** 把 $I_X$ 画成随时间增加。$V_{GS}$ 下降、$V_{TH}$ 上升、$V_{DS}$ 减小都会使电流减小。
