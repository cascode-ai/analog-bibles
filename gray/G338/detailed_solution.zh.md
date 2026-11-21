# 详细步骤 - G338

乘法器位于反相运放电路的反馈通路中。先假设为负反馈，利用虚地求出 $Z$ 与 $V_{\text{in}}$ 的关系，再由乘法器方程解出 $V_{\text{out}}$，最后检查 $V_{\text{ref}}$ 取何值时反馈确实为负。

### 第 1 步 — 虚地节点方程

理想运放处于负反馈环路中时，差分输入电压为零，输入端不吸取电流。同相输入端接地，因此反相节点为 0 V 的虚地（virtual ground）。两个相等的电阻 $R$ 分别把该节点接到 $V_{\text{in}}$ 和乘法器输出 $Z$；对该节点列 KCL：

$$
\frac{V_{\text{in}}-0}{R}+\frac{Z-0}{R}=0\quad\Longrightarrow\quad Z=-V_{\text{in}} .
$$

因此运放会把输出驱动到使乘法器恰好输出 $-V_{\text{in}}$ 的值。

### 第 2 步 — 乘法器方程与传输特性

乘法器的输入为 $X=V_{\text{out}}$（运放输出）和 $Y=V_{\text{ref}}$，故

$$
Z=0.1\,XY=0.1\,V_{\text{out}}V_{\text{ref}} .
$$

与第 1 步的结果相等：

$$
0.1\,V_{\text{out}}V_{\text{ref}}=-V_{\text{in}}\quad\Longrightarrow\quad
V_{\text{out}}=-\frac{10\,V_{\text{in}}}{V_{\text{ref}}}\qquad(\text{all in volts}).
$$

该电路是模拟除法器：以 $-10$ V 的比例因子计算 $V_{\text{in}}/V_{\text{ref}}$。$V_{\text{ref}}$ 固定时，直流传输特性 $V_{\text{out}}$–$V_{\text{in}}$ 是一条过原点、斜率为 $-10/V_{\text{ref}}$ 的直线；例如 $V_{\text{ref}}=10$ V 时斜率为 $-1$，$V_{\text{ref}}=1$ V 时斜率为 $-10$。

### 第 3 步 — 负反馈条件

第 1 步假设了负反馈，因此需检查环路符号。设 $V_{\text{out}}$ 升高一个小量 $\delta$。乘法器输出升高 $0.1V_{\text{ref}}\,\delta$，经 $R$–$R$ 分压后反相节点升高其一半，即 $0.05V_{\text{ref}}\,\delta$。该节点接运放反相输入端，只有当 $0.05V_{\text{ref}}\,\delta$ 与 $\delta$ 同号时，运放才会使输出下降，从而抵消原来的变化：

$$
V_{\text{ref}}>0 .
$$

当 $V_{\text{ref}}<0$ 时，乘法器使反馈信号反相，反馈变为正反馈，输出锁定在电源极限，上式不再适用。当 $V_{\text{ref}}\to0^+$ 时，经乘法器的环路增益趋于零，所需输出 $-10V_{\text{in}}/V_{\text{ref}}$ 无限增大，输出饱和。在典型的 $\pm10$ V 信号范围内，$|V_{\text{out}}|\le10$ V 要求 $|V_{\text{in}}|\le V_{\text{ref}}$。
