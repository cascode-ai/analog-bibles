# 详细步骤 - R658

**思路。** PFD 和电荷泵把相位差转换为宽度正比于 $\Delta\phi$ 的电流脉冲；在一个输入周期内取平均，就是电流 $I_P\Delta\phi/2\pi$。该电流流过阻抗为 $R_P + 1/(C_Ps)$ 的 $R_P$–$C_P$ 串联支路。两者相乘即得传递函数，再用相位阶跃在时域中加以验证。

### 第 1 步 — PFD 产生的脉冲宽度

在锁定附近，两个输入的周期都是 $T_{in}$。若 $V_{in}$ 超前恒定的 $\Delta\phi$（rad），则时间上的超前量为

$$\Delta T = \frac{\Delta\phi}{2\pi}\,T_{in}.$$

$V_{in}$ 的边沿使 $Q_A$ 置位，$\Delta T$ 之后 $V_{out}$ 的边沿使 $Q_B$ 置位，随后与门把两者同时复位。因此每个周期内 $Q_A$ 为高电平的时间为 $\Delta T$，而 $Q_B$ 只在一个可忽略的复位毛刺期间为高（此期间两个相等的电流相互抵消）。若 $V_{out}$ 超前（$\Delta\phi < 0$），则改为 $Q_B$ 为高电平的时间为 $|\Delta T|$。

### 第 2 步 — 每周期电荷与平均电流

$Q_A$ 为高电平期间，$S_1$ 把 $I_1 = I_P$ 注入滤波器，因此每个周期的电荷为

$$Q_{cycle} = I_P\,\Delta T = I_P\,\frac{\Delta\phi}{2\pi}\,T_{in},$$

平均电流为

$$\overline{I_{CP}} = \frac{Q_{cycle}}{T_{in}} = \frac{I_P\,\Delta\phi\,T_{in}/2\pi}{T_{in}} = \frac{I_P}{2\pi}\,\Delta\phi .$$

当 $\Delta\phi < 0$ 时，$S_2$ 在 $|\Delta T|$ 时间内抽取 $I_2 = I_P$，得到 $-I_P|\Delta\phi|/2\pi$：这就是计入符号后的同一公式。PFD/电荷泵的特性是一条过原点、斜率为 $I_P/2\pi$（A/rad）的直线。

**连续时间近似。** 若 $\Delta\phi(t)$ 相对于 $T_{in}$ 变化缓慢（环路带宽远小于输入频率），就可以用脉冲串的周期平均值代替它，即 $I_{CP}(t) = (I_P/2\pi)\,\Delta\phi(t)$。这一关系不含动态，因此

$$\frac{I_{CP}(s)}{\Delta\phi(s)} = \frac{I_P}{2\pi}.$$

### 第 3 步 — 把环路滤波器看作阻抗

VCO 的输入端不吸取电流，因此 $I_{CP}$ 全部依次流过 $R_P$ 和 $C_P$ 到地，而 $V_{cont}$ 取自整个支路两端：$V_{R_P}(s) = R_P\,I_{CP}(s)$，$V_{C_P}(s) = I_{CP}(s)/(C_Ps)$（由 $V_{C_P}(t) = \frac{1}{C_P}\int_0^t I_{CP}\,dt'$ 得到）。两者相加，

$$V_{cont}(s) = I_{CP}(s)\left(R_P + \frac{1}{C_Ps}\right) = I_{CP}(s)\,Z(s), \qquad Z(s) = R_P + \frac{1}{C_Ps},$$

即 $R_P$–$C_P$ 串联支路的阻抗。

### 第 4 步 — 合并两部分

代入 $I_{CP}(s) = (I_P/2\pi)\,\Delta\phi(s)$，并除以 $\Delta\phi(s)$：

$$\boxed{\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)}$$

通分后，

$$\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}.$$

- 原点处的极点来自 $C_P$，它对电荷进行积分：恒定的相位误差会使 $V_{cont}$ 无限增长。
- $s = -1/(R_PC_P)$ 处的零点来自 $R_P$，它引入了一个正比于当前相位误差的项；在 PLL 中，正是这个零点提供了阻尼。

### 第 5 步 — 用相位阶跃进行时域验证

在环路断开的情况下施加 $\Delta\phi(t) = \phi_0u(t)$，于是电荷泵在每个周期内注入 $I_P$ 的时间为 $\Delta T = \phi_0T_{in}/2\pi$。

- 电阻电压在脉冲期间为 $I_PR_P$，在脉冲之间为零，因此其平均值为
$$\overline{V_{R_P}} = I_PR_P\,\frac{\Delta T}{T_{in}} = \frac{I_P\phi_0}{2\pi}\,R_P .$$
- 电容电压每个周期上升 $I_P\Delta T/C_P = I_P\phi_0T_{in}/(2\pi C_P)$，并在脉冲之间保持不变，形成一个阶梯波，其平均斜率为
$$\frac{I_P\phi_0T_{in}/(2\pi C_P)}{T_{in}} = \frac{I_P\phi_0}{2\pi C_P}\ \text{per second}.$$

因此平均控制电压是一个阶跃加一个斜坡：

$$V_{cont}(t) = \frac{I_P\phi_0}{2\pi}\left(R_P + \frac{t}{C_P}\right),\qquad t \ge 0 .$$

由传递函数，取 $\Delta\phi(s) = \phi_0/s$：

$$
\begin{aligned}
V_{cont}(s) &= \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\frac{\phi_0}{s} = \frac{I_P\phi_0}{2\pi}\left(\frac{R_P}{s} + \frac{1}{C_Ps^2}\right)\\
V_{cont}(t) &= \frac{I_P\phi_0}{2\pi}\left(R_P + \frac{t}{C_P}\right)u(t),
\end{aligned}
$$

两者一致。对阶跃响应求导得到冲激响应 $h(t) = \frac{I_P}{2\pi}\left[R_P\,\delta(t) + u(t)/C_P\right]$，其拉普拉斯变换同样是题中给出的结果。

**近似的适用范围。** 平均模型只在环路带宽远低于输入频率（大致相差 10 倍或以上）时成立，并且忽略了短暂的复位脉冲；在复位脉冲期间两个电流源同时导通，（若匹配）相互抵消。

### 结果

PFD/电荷泵输出平均电流 $\overline{I_{CP}} = I_P\Delta\phi/2\pi$（每个周期内宽度为 $\Delta\phi\,T_{in}/2\pi$ 的脉冲），$R_P$–$C_P$ 串联支路通过其阻抗 $R_P + 1/(C_Ps)$ 把它转换为电压。因此

$$\frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s},$$

它在原点处有一个极点（积分电容），在 $-1/(R_PC_P)$ 处有一个零点（经过 $R_P$ 的比例通路）。

**常见错误。** 把 $R_P$ 和 $C_P$ 当作并联，这会得到 $Z = R_P/(1 + R_PC_Ps)$，即一个没有积分器的低通函数。实际上它们串联在电荷泵输出端与地之间，因此阻抗相加。

**常见错误。** 写成 $\overline{I_{CP}} = I_P\Delta\phi$。由于一个完整周期是 $2\pi$ rad，电荷泵在每个周期内导通的时间比例为 $\Delta\phi/2\pi$。

**常见错误。** 断言 $V_{cont}$ 简单地正比于 $\Delta\phi$。$C_P$ 每个周期都在累积电荷，因此恒定的相位误差会使 $V_{cont}$ 无限地斜坡上升：传递函数必须包含 $1/s$。
