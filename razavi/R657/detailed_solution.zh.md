# 详细步骤 - R657

**思路。** 把电荷泵建模为驱动 $R_P$–$C_P$ 串联支路的电流源，并针对 VCO 的两种接法分别计算从相位误差到控制电压的传递函数：一种接在电荷泵输出端（如图所示），另一种接在 $C_P$ 的上极板。然后比较两者的环路增益和闭环极点。关键事实是：与电流源串联的电阻不会改变电流，因而也不会改变电容上的电压。

### 第 1 步 — 电荷泵是电流源

相位误差 $\Delta\phi$ 使 PFD 在输入周期 $T_{in}$ 中占 $\Delta\phi/(2\pi)$ 的时间内闭合 $S_1$（或 $S_2$），因此在一个周期内取平均（连续时间近似），得

$$\overline{I_{CP}} = I_P\,\frac{\Delta\phi}{2\pi}.$$

**电荷泵是电流源：** 无论驱动什么，它都强制这个电流流过所驱动的元件。VCO 的输入端不吸取电流，因此全部泵电流依次流过 $R_P$ 和 $C_P$ 到地。

### 第 2 步 — 控制电压取自电荷泵输出节点（如图所示）

把电荷泵输出端记为 P，把 $R_P$ 与 $C_P$ 之间的节点（$C_P$ 的上极板）记为 X。同一电流 $I_{CP}$ 流过这两个元件，因此 $V_X(t) = \frac{1}{C_P}\int I_{CP}\,dt$，$V_P - V_X = I_{CP}R_P$：

$$V_{cont}(t) = V_P(t) = I_{CP}(t)\,R_P + \frac{1}{C_P}\int I_{CP}\,dt .$$

在拉普拉斯域中，代入 $I_{CP}(s) = (I_P/2\pi)\,\Delta\phi(s)$：

$$
\begin{aligned}
V_{cont}(s) &= I_{CP}(s)\left(R_P + \frac{1}{C_Ps}\right)\\
\frac{V_{cont}}{\Delta\phi}(s) &= \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}.
\end{aligned}
$$

积分项（原点处的极点）记住了累积的相位误差；$R_P$ 项则是一条**比例**通路，对当前误差立即作出响应。两者共同产生了 **$s = -1/(R_PC_P)$ 处的零点**。

### 第 3 步 — 正确接法下的环路增益与闭环特性

VCO 满足 $\Phi_{out} = (K_{VCO}/s)\,V_{cont}$，因此环路增益为

$$H_{open}(s) = \frac{I_P}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s}\cdot\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P}\cdot\frac{R_PC_Ps + 1}{s^2}.$$

特征方程 $1 + H_{open} = 0$ 两边同乘 $s^2$：

$$
\begin{aligned}
s^2 + \frac{I_PK_{VCO}}{2\pi C_P}\,(R_PC_Ps + 1) &= 0\\
s^2 + \frac{I_PK_{VCO}R_P}{2\pi}\,s + \frac{I_PK_{VCO}}{2\pi C_P} &= 0 .
\end{aligned}
$$

与 $s^2 + 2\zeta\omega_ns + \omega_n^2$ 比较：

$$
\begin{aligned}
\omega_n &= \sqrt{\frac{I_PK_{VCO}}{2\pi C_P}},\\
\zeta &= \frac{1}{2\omega_n}\cdot\frac{I_PK_{VCO}R_P}{2\pi} = \frac{R_P}{2}\sqrt{\frac{I_PC_PK_{VCO}}{2\pi}} .
\end{aligned}
$$

由于 $R_P > 0$，$\zeta > 0$：极点位于左半平面，环路能够稳定下来。阻尼**完全**来自 $R_P$；在伯德图上，该零点在增益交点附近把相位抬高到 $-180^\circ$ 以上，从而产生相位裕度。

### 第 4 步 — 控制电压取自 $C_P$ 的上极板

当 VCO 接在节点 X 时，流过 $C_P$ 的电流仍然恰好是 $I_{CP}$：$R_P$ 与电流源串联，只改变 $V_P$，而不改变电流。因此

$$V_{cont}(t) = V_X(t) = \frac{1}{C_P}\int I_{CP}\,dt \qquad\Rightarrow\qquad \frac{V_{cont}}{\Delta\phi}(s) = \frac{I_P}{2\pi C_Ps}.$$

**$R_P$ 从传递函数中消失了**：无论其取值如何，VCO 看到的电压都与 $R_P = 0$ 时相同，因此零点不复存在。

### 第 5 步 — 上极板接法下的环路增益与闭环特性

$$H_{open}(s) = \frac{I_P}{2\pi C_Ps}\cdot\frac{K_{VCO}}{s} = \frac{I_PK_{VCO}}{2\pi C_P\,s^2}.$$

这是**两个理想积分器**（电荷泵加 $C_P$，然后是 VCO），每个贡献 $-90^\circ$，因此在**所有**频率上 $\angle H_{open}(j\omega) = -180^\circ$，相位裕度为零。特征方程两边同乘 $s^2$：

$$s^2 + \frac{I_PK_{VCO}}{2\pi C_P} = 0 \quad\Rightarrow\quad s_{1,2} = \pm j\sqrt{\frac{I_PK_{VCO}}{2\pi C_P}} = \pm j\omega_n ,$$

闭环传递函数为

$$H(s) = \frac{I_PK_{VCO}/(2\pi C_P)}{s^2 + I_PK_{VCO}/(2\pi C_P)},$$

其中 **$\zeta = 0$**：两个极点都在 $j\omega$ 轴上。任何扰动都会激起相位和控制电压在 $\omega_n$ 处的振荡，且永不衰减。实际上，任何寄生极点（VCO 输入端、PFD 延迟、离散时间采样）都会带来额外的相位滞后，把极点推入右半平面，因此环路是不稳定的。

### 第 6 步 — 物理图像

采用上极板接法时，相位超前会使 $V_X$ 以及 VCO 频率斜坡式上升；等到相位误差降为零时，VCO 频率已经过高，于是相位过冲，环路就永远来回摆动，就像没有摩擦的弹簧振子。采用正确接法时，$I_{CP}R_P$ 项会立即按误差的比例抬高 $V_{cont}$，在相位过冲之前消除多余的频率：它起到了阻尼器的作用。

代价是每个泵电流脉冲都会在节点 P 上产生 $I_PR_P$ 的电压跳变，这让人想改用节点 X。标准的解决办法则是从节点 P 到地接一个小电容 $C_2$（通常 $\lesssim C_P/5$），在保留零点的同时平滑这些跳变。

### 结果

不能用 $C_P$ 的上极板驱动 VCO，因为电荷泵是电流源：与之串联的 $R_P$ 不改变流入 $C_P$ 的电流，所以电容电压就是 $\frac{1}{C_P}\int I_{CP}\,dt$，$R_P$ 从环路中消失。$-1/(R_PC_P)$ 处起稳定作用的零点随之丢失，环路增益变为 $I_PK_{VCO}/(2\pi C_Ps^2)$（两个积分器，在所有频率上相位均为 $-180^\circ$），闭环极点位于 $\pm j\sqrt{I_PK_{VCO}/(2\pi C_P)}$，$\zeta = 0$：环路振荡，而不是稳定下来。若从电荷泵输出端取控制电压，则 $V_{cont} = I_{CP}R_P + \frac{1}{C_P}\int I_{CP}\,dt$；比例项 $I_{CP}R_P$ 提供了零点和阻尼 $\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$。

**常见错误。** 认为上极板接法行不通是因为 VCO 会给 $C_P$“加载”或使其“放电”。VCO 的输入端不吸取电流；真正的问题在于动态特性：环路失去了零点，没有阻尼。

**常见错误。** 只说“零点丢失了”而不给出原因：与理想电流源串联的电阻无法影响电容电压，只有电阻上方的节点才带有比例校正项 $I_{CP}R_P$。

**常见错误。** 因为控制电压更平滑而偏爱上极板接法。$\zeta = 0$ 的环路永远无法干净地锁定；减小纹波应该靠在 $R_P$–$C_P$ 支路两端并联第二个较小的电容，而不是把 $R_P$ 从通路中移除。
