# 详细步骤 - R659

**思路。** 锁定时平均控制电压不变，因此环路滤波器电容在每个参考周期内得到的净电荷必须为零。UP 与 DOWN 电流失配时，脉冲对齐无法做到这一点，于是环路会移动反馈边沿，直到较弱的支路导通足够长的时间，抵消较强支路的电荷。由这一电荷平衡可求得时间偏移，再将其换算为相位。

### 第 1 步 — 哪条支路更强

$Q_A$ 为高电平时 $M_4$ 导通，向电容**注入** $|I_{D4}|$；$Q_{B\Delta}$ 为高电平时 $M_3$ 导通，$M_1$ 从电容中**抽出** $I_{D3}$。失配为

$$\Delta I = |I_{D4}| - I_{D3} > 0, \qquad \Delta I \ll I_{D3} \approx I_P,$$

因此 UP 支路略强。复位重叠时间 $T_P$ 是有意设置的：它可以避免过窄的脉冲所导致的死区。

### 第 2 步 — 波形 (a)：脉冲对齐不是稳态

相位差为零时，两条支路同时导通恰好 $T_P$ 的时间，在此期间流入电容 $C$ 的净电流为

$$I_{net} = |I_{D4}| - I_{D3} = \Delta I > 0 .$$

每个周期的净电荷为 $Q_{net} = \Delta I\,T_P$，因此控制电压每个周期都上升

$$\Delta V_{cont} = \frac{\Delta I\,T_P}{C}$$

这就是波形 (a) 中的斜坡。$V_{cont}$ 以及随之变化的 VCO 频率不断缓慢上升，因此这不是锁定状态。

### 第 3 步 — 波形 (b)：环路移动相位，直到净电荷为零

锁定时 $V_{cont}$ 的平均值不变，因此每个周期的净电荷必须为零；由于 UP 电流较大，DOWN 支路必须导通更长时间。环路通过让**反馈边沿比参考边沿提前** $\Delta t$ 到达来实现这一点：

1. 反馈边沿使 $Q_B$ 置位，因此在 $\Delta t$ 内只有 $I_{D3}$ 流动：净电流为 $-I_{D3}$，$V_{cont}$ 下降。
2. 随后参考边沿使 $Q_A$ 置位，$T_P$ 之后复位动作发生。在这段重叠时间内，净电流为 $+\Delta I$，$V_{cont}$ 斜坡式回升。
3. 然后两条支路同时关断。

因此 DOWN 支路导通 $T_P + \Delta t$，UP 支路导通 $T_P$，与波形 (b) 中的电流曲线一致。（波形 (b) 中 $\overline{Q_A}$ 和 $Q_{B\Delta}$ 曲线的边沿先后顺序是反着画的；决定电荷的是电流曲线，而较弱的支路必须先开始导通。）

### 第 4 步 — 电荷平衡

每个周期内，UP 支路注入 $Q_{UP} = |I_{D4}|\,T_P$，DOWN 支路抽出 $Q_{DN} = I_{D3}\,(T_P + \Delta t)$。令净电荷为零：

$$
\begin{aligned}
|I_{D4}|\,T_P &= I_{D3}\,(T_P + \Delta t)\\
(|I_{D4}| - I_{D3})\,T_P &= I_{D3}\,\Delta t\\
\Delta I\,T_P &= I_{D3}\,\Delta t\\
\Delta t &= T_P\,\frac{\Delta I}{I_{D3}} .
\end{aligned}
$$

等价地，在波形 (b) 中，净电流的负面积 $I_{D3}\Delta t$ 等于正面积 $\Delta I\,T_P$。

### 第 5 步 — 把时间偏移换算为相位偏移

一个输入周期 $T_{in}$ 对应 $2\pi$ rad，因此

$$\Delta\phi = 2\pi\,\frac{\Delta t}{T_{in}} = 2\pi\,\frac{\Delta I}{I_{D3}}\cdot\frac{T_P}{T_{in}} \approx 2\pi\,\frac{\Delta I}{I_P}\cdot\frac{T_P}{T_{in}},$$

这里利用了 $I_{D3} \approx I_P$（$\Delta I \ll I_P$）。反馈（VCO）边沿比参考边沿超前这一数值。

**数值示例。** 取 $T_{in} = 10$ ns（100 MHz 参考频率），$T_P = 0.5$ ns，失配为 10 %，即 $\Delta I/I_P = 0.1$：

$$
\begin{aligned}
\Delta t &= (0.5\ \mathrm{ns})(0.1) = 50\ \mathrm{ps},\\
\Delta\phi &= 2\pi\,\frac{50\ \mathrm{ps}}{10\ \mathrm{ns}} = 2\pi(0.005) = 0.0314\ \mathrm{rad} \approx 1.8^\circ .
\end{aligned}
$$

### 第 6 步 — 解读

- **偏移随 $T_P$ 而不是随 $T_{in}$ 成比例变化**，因为只有在两条支路同时导通时失配才起作用。更短的复位脉冲可以减小偏移，但 $T_P$ 必须足够长，使开关和电流源能完全导通，否则就会出现死区。
- **偏移正比于 $\Delta I/I_P$**，因此仔细匹配 UP 与 DOWN 电流（包括它们随输出电压的变化）是主要的解决办法。
- **纹波依然存在。** 即使在锁定状态下，$V_{cont}$ 每个周期也会下降约 $I_{D3}\Delta t/C$，再斜坡式回升 $\Delta I\,T_P/C$（另加任何串联电阻上的跳变），从而在输出端产生参考边带（reference sideband），也称“杂散”。

### 结果

锁定时每个周期的净电荷必须为零，这要求较弱的（DOWN）支路导通 $T_P + \Delta t$，而 UP 支路导通 $T_P$：

$$|I_{D4}|\,T_P = I_{D3}\,(T_P + \Delta t) \quad\Rightarrow\quad \Delta t = T_P\,\frac{\Delta I}{I_{D3}},$$

$$\Delta\phi = 2\pi\,\frac{\Delta t}{T_{in}} = 2\pi\,\frac{\Delta I}{I_{D3}}\cdot\frac{T_P}{T_{in}} \approx 2\pi\,\frac{\Delta I}{I_P}\cdot\frac{T_P}{T_{in}} .$$

反馈边沿比参考边沿超前 $\Delta t$。偏移同时正比于相对电流失配和复位脉冲宽度。

**常见错误。** 写成与 $T_P$ 无关的 $\Delta\phi = 2\pi\,\Delta I/I_P$。失配电流只在重叠时间 $T_P$ 内流动；在周期的其余时间里，两条支路都是关断的。

**常见错误。** 以“PFD 总是使边沿对齐”为由，断言偏移为零。环路驱使趋于零的是**净电荷**，而不是边沿的时间差；电流不相等时，这就要求导通时间不相等。

**常见错误。** 把时间换算为相位时除以 $T_P$ 而不是 $T_{in}$：一个完整周期 $T_{in}$ 对应 $2\pi$ rad，因此 $\Delta\phi = 2\pi\Delta t/T_{in}$。
