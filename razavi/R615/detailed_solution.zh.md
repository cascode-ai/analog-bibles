# 详细步骤 - R615

**思路。** 把随栅极电压变化的迁移率代入平方律，利用 $(1 + \epsilon)^{-1} \approx 1 - \epsilon$ 把漏极电流化为过驱动电压（overdrive voltage）的二次项加一个小的三次项，代入正弦变化的过驱动电压，再挑出 $\cos3\omega t$ 分量。输出 $V_{DD} - R_DI_D$ 的三次谐波是电流三次谐波的 $R_D$ 倍。

### 第 1 步 — 计入迁移率退化的漏极电流

设 $V = V_{GS} - V_{TH}$ 为瞬时过驱动电压，$k_0 = \mu_0C_{ox}W/L$。采用给定迁移率的平方律为

$$I_D = \frac12\mu C_{ox}\frac{W}{L}V^2 = \frac12\cdot\frac{\mu_0}{1 + \theta V}C_{ox}\frac{W}{L}V^2 = \frac{k_0V^2}{2(1 + \theta V)},$$

因此电流的上升比 $V^2$ 平缓。

### 第 2 步 — 多项式近似

由 $\epsilon = \theta V \ll 1$，$(1 + \theta V)^{-1} \approx 1 - \theta V$：

$$I_D \approx \frac{k_0}{2}V^2(1 - \theta V) = \frac{k_0}{2}\left(V^2 - \theta V^3\right).$$

理想的 $V^2$ 项最多只产生二次谐波（second harmonic）；新增的三次项 $-\tfrac{k_0\theta}{2}V^3$ 产生三次谐波。级数中被忽略的下一项 $+\theta^2V^4$ 只会使三次谐波发生 $\theta V_0$ 量级的相对变化。

### 第 3 步 — 代入正弦变化的过驱动电压

令 $V = V_0 + V_m\cos\omega t$，$V_0 = V_{GS0} - V_{TH}$：

$$
\begin{aligned}
V^2 &= V_0^2 + 2V_0V_m\cos\omega t + V_m^2\cos^2\omega t,\\
V^3 &= V_0^3 + 3V_0^2V_m\cos\omega t + 3V_0V_m^2\cos^2\omega t + V_m^3\cos^3\omega t ,
\end{aligned}
$$

以及

$$\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta, \qquad \cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta .$$

只有 $\cos^3\omega t$ 含有 $\cos3\omega t$，而它只出现在 $V^3$ 的 $V_m^3\cos^3\omega t$ 项中。

### 第 4 步 — 漏极电流的三次谐波

$$-\frac{k_0\theta}{2}\cdot V_m^3\cos^3\omega t \;\supset\; -\frac{k_0\theta}{2}\cdot\frac{V_m^3}{4}\cos3\omega t = -\frac{k_0\theta V_m^3}{8}\cos3\omega t ,$$

因此漏极电流的三次谐波幅度为

$$I_{D,3} = \frac{\mu_0C_{ox}(W/L)\,\theta\,V_m^3}{8},$$

相对于基波带负号：迁移率退化使峰值受到**压缩**。

### 第 5 步 — 基波（用于归一化）与二次谐波

**基波**（$\cos\omega t$ 项）：

$$
\begin{aligned}
I_{D,1} &= \frac{k_0}{2}\left[2V_0V_m - \theta\left(3V_0^2V_m + \tfrac34V_m^3\right)\right]\\
&= k_0V_0V_m - \tfrac32k_0\theta V_0^2V_m - \tfrac38k_0\theta V_m^3\\
&\approx k_0V_0V_m\left(1 - \tfrac32\theta V_0\right)\qquad(V_m^2 \ll V_0^2\ \text{for the small last term}).
\end{aligned}
$$

**三次谐波失真：**

$$\mathrm{HD3} = \frac{k_0\theta V_m^3/8}{k_0V_0V_m(1 - \tfrac32\theta V_0)} = \frac{\theta V_m^2}{8V_0\,(1 - 1.5\,\theta V_0)} \approx \frac{\theta V_m^2}{8\,(V_{GS0} - V_{TH})}.$$

**二次谐波**，用于比较（$\cos2\omega t$ 项）：

$$I_{D,2} = \frac{k_0}{2}\left[\tfrac12V_m^2 - \theta\cdot\tfrac32V_0V_m^2\right] = \frac{k_0V_m^2}{4}\left(1 - 3\theta V_0\right),$$

它因迁移率项而略有减小；该迁移率项还引入了理想平方律中不存在的三次谐波。

### 第 6 步 — 输出电压

$V_{out} = V_{DD} - R_DI_D$ 把每个交流电流分量都乘以 $-R_D$，因此

$$V_{out,3} = R_D\,I_{D,3} = \frac{\mu_0C_{ox}(W/L)\,\theta\,R_D\,V_m^3}{8},$$

而输出的 HD3 与电流的相同，$\approx \theta V_m^2/[8(V_{GS0} - V_{TH})]$。

**示例。** 取 $\theta = 0.1\ \mathrm{V^{-1}}$，$V_0 = 0.4$ V，$V_m = 0.1$ V（因此 $\theta V \le 0.05$，近似成立）：HD3 $= (0.1)(0.01)/(8\times0.4) = 3.1\times10^{-4} = 0.031\ \%$，而 HD2 $\approx V_m(1 - 3\theta V_0)/[4V_0(1 - 1.5\theta V_0)] = 5.9\ \%$。新增的奇次失真虽小，但在偶次项相互抵消的差分电路中却很重要。

### 结果

以 $V = V_0 + V_m\cos\omega t$ 展开 $I_D = \dfrac{k_0V^2}{2(1 + \theta V)} \approx \dfrac{k_0}{2}(V^2 - \theta V^3)$，只有三次项产生三次谐波：

$$I_{D,3} = \frac{\mu_0C_{ox}(W/L)\,\theta\,V_m^3}{8}, \qquad V_{out,3} = R_D\,\frac{\mu_0C_{ox}(W/L)\,\theta\,V_m^3}{8},$$

相对于基波 $k_0V_0V_m(1 - \tfrac32\theta V_0)$：

$$\mathrm{HD3} \approx \frac{\theta V_m^2}{8\,(V_{GS0} - V_{TH})}.$$

**常见错误。** 认为平方律放大级没有三次谐波。迁移率退化增加了三次项 $-\tfrac{k_0\theta}{2}V^3$，它产生与 $\theta V_m^3$ 成正比的三次谐波。

**常见错误。** 漏掉 $\cos^3\theta$ 中的 $\tfrac14$（得到 $k_0\theta V_m^3/2$），或者从 $3V_0V_m^2\cos^2\omega t$ 这类项中提取 $\cos3\omega t$，而这些项只贡献直流和二次谐波。三次谐波必须按 $V_m^3$ 变化，并且在 $\theta = 0$ 时为零。
