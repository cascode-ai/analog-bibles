# 详细步骤 - R662

**思路。** 用作用于相位误差的平均 PFD/电荷泵/滤波器模型 $(I_P/2\pi)(R_P + 1/C_Ps)$ 代替第一幅图中的鉴相器（PD）和低通滤波器（LPF），仍让 $V_{ex}$ 在滤波器之后加入，并把 VCO 建模为 $K_{VCO}/s$。在 $\Phi_{in} = 0$ 下写出一个环路方程，解出 $\Phi_{out}/V_{ex}$，并将结果与 I 型环路比较。

### 第 1 步 — 各模块的线性模型

取 $\Phi_{in} = 0$，平均泵电流和滤波器输出（泵电流流过 $R_P$ 与 $C_P$ 的串联支路）分别为

$$I_{CP} = \frac{I_P}{2\pi}\,(\Phi_{in} - \Phi_{out}) = -\frac{I_P}{2\pi}\,\Phi_{out}, \qquad V_F = I_{CP}\left(R_P + \frac{1}{C_Ps}\right).$$

加法器给出 $V_{cont} = V_F + V_{ex}$，VCO 给出 $\Phi_{out} = (K_{VCO}/s)\,V_{cont}$。

### 第 2 步 — 环路方程

$$
\begin{aligned}
\Phi_{out} &= \frac{K_{VCO}}{s}\left(V_F + V_{ex}\right)\\
\Phi_{out} &= \frac{K_{VCO}}{s}\left[V_{ex} - \frac{I_P}{2\pi}\left(R_P + \frac{1}{C_Ps}\right)\Phi_{out}\right].
\end{aligned}
$$

### 第 3 步 — 求解 $\Phi_{out}/V_{ex}$

展开并合并含 $\Phi_{out}$ 的项：

$$
\begin{aligned}
\Phi_{out} &= \frac{K_{VCO}}{s}\,V_{ex} - \frac{I_PK_{VCO}}{2\pi s}\left(R_P + \frac{1}{C_Ps}\right)\Phi_{out}\\
\Phi_{out}\left[1 + \frac{I_PK_{VCO}}{2\pi s}\left(R_P + \frac{1}{C_Ps}\right)\right] &= \frac{K_{VCO}}{s}\,V_{ex}.
\end{aligned}
$$

两边同乘 $s^2$：

$$
\begin{aligned}
\Phi_{out}\left[s^2 + \frac{I_PK_{VCO}}{2\pi}\,s\left(R_P + \frac{1}{C_Ps}\right)\right] &= K_{VCO}\,s\,V_{ex}\\
\Phi_{out}\left[s^2 + \frac{I_PK_{VCO}R_P}{2\pi}\,s + \frac{I_PK_{VCO}}{2\pi C_P}\right] &= K_{VCO}\,s\,V_{ex},
\end{aligned}
$$

因此

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s}{s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}\,s + \dfrac{I_PK_{VCO}}{2\pi C_P}} .$$

分子、分母同乘 $2\pi C_P$：

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{2\pi C_PK_{VCO}\,s}{2\pi C_Ps^2 + I_PK_{VCO}R_PC_Ps + I_PK_{VCO}} .$$

**量纲检查。** $K_{VCO}$ 的单位是 rad/(s·V)，$s/(s^2 + \dots)$ 的单位是 s，因此结果的单位是 rad/V。

### 第 4 步 — 标准形式

分母就是 II 型环路的特征多项式 $s^2 + 2\zeta\omega_ns + \omega_n^2$，其中

$$\omega_n = \sqrt{\frac{I_PK_{VCO}}{2\pi C_P}}, \qquad 2\zeta\omega_n = \frac{I_PK_{VCO}R_P}{2\pi}\;\Rightarrow\;\zeta = \frac{R_P}{2}\sqrt{\frac{I_PC_PK_{VCO}}{2\pi}} ,$$

因此

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s}{s^2 + 2\zeta\omega_ns + \omega_n^2}.$$

极点与 $\Phi_{out}/\Phi_{in}$ 的极点相同（它们属于环路本身），但分子现在有一个**位于原点的零点**。

### 第 5 步 — 低频与高频特性

**低频（$s \to 0$）。** $\Phi_{out}/V_{ex} \to 0$，由终值定理，$V_{ex}$ 上的阶跃 $\Delta V$ 留下的最终相位变化为

$$\phi_{out}(\infty) = \lim_{s\to0} s\cdot\frac{\Delta V}{s}\cdot\frac{K_{VCO}\,s}{s^2 + 2\zeta\omega_ns + \omega_n^2} = 0 .$$

锁定时 $V_{cont}$ 必须回到原值，而只有当平均泵电流（即相位误差）为零时，$C_P$ 才停止充电。因此电荷泵持续积分，直到 $C_P$ 上的电压恰好变化了 $-\Delta V$，相位误差也回到零。在 I 型环路中（滤波器中没有积分器），同样的阶跃会使相位永久偏移 $\Delta V/K_{PD}$，因为必须靠一个静态相位误差把滤波器输出维持在 $-\Delta V$。

**高频（$s \to \infty$）：**

$$\frac{\Phi_{out}}{V_{ex}} \approx \frac{K_{VCO}\,s}{s^2} = \frac{K_{VCO}}{s},$$

即开环 VCO 响应：$V_{ex}$ 的快速变化在环路来得及反应之前就已经调制了 VCO。

**峰值。** 该响应是带通的。在 $s = j\omega_n$ 处，$s^2$ 项与 $\omega_n^2$ 项相互抵消（$-\omega_n^2 + \omega_n^2 = 0$），只剩下

$$\left|\frac{\Phi_{out}}{V_{ex}}(j\omega_n)\right| = \frac{K_{VCO}\,\omega_n}{2\zeta\omega_n\cdot\omega_n} = \frac{K_{VCO}}{2\zeta\omega_n} = \frac{K_{VCO}}{I_PK_{VCO}R_P/2\pi} = \frac{2\pi}{I_PR_P}.$$

**从频率的角度看。** 由 $\Omega_{out} = s\Phi_{out}$ 得

$$\frac{\Omega_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s^2}{s^2 + 2\zeta\omega_ns + \omega_n^2},$$

这是一个二阶高通函数：$V_{ex}$ 的缓慢变化既不会改变输出频率，也不会（在稳态下）改变其相位；而远快于 $\omega_n$ 的变化则以 VCO 的全部增益通过。

### 结果

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s}{s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}\,s + \dfrac{I_PK_{VCO}}{2\pi C_P}} = \frac{2\pi C_PK_{VCO}\,s}{2\pi C_Ps^2 + I_PK_{VCO}R_PC_Ps + I_PK_{VCO}}$$

即 $K_{VCO}s/(s^2 + 2\zeta\omega_ns + \omega_n^2)$，其中 $\omega_n^2 = I_PK_{VCO}/(2\pi C_P)$，$\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$。它是带通的：直流处为零（$V_{ex}$ 的阶跃不会留下永久的相位变化），在 $\omega_n$ 处有峰值 $2\pi/(I_PR_P)$，高频时为 $K_{VCO}/s$。

**常见错误。** 照搬 I 型环路的结果，以为直流值不为零。电荷泵加上 $C_P$ 构成一个积分器，因此 VCO 输入端的任何恒定扰动都会被完全消除：这就是 $s = 0$ 处零点的由来。

**常见错误。** 把环路滤波器建模为 $R_P \parallel C_P$，即 $R_P/(1 + R_PC_Ps)$。$R_P$ 和 $C_P$ 是从电荷泵输出端到地串联的：$R_P + 1/(C_Ps)$。

**常见错误。** 忘记 VCO 的 $1/s$，或者让 $V_{ex}$ 在滤波器之前注入。$V_{ex}$ 直接到达 VCO，这正是高频极限为 $K_{VCO}/s$ 的原因。
