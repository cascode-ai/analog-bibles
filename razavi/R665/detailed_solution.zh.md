# 详细步骤 - R665

**思路。** 把每个源/漏区建模为一个突变 $n^+$–$p$ 结（源/漏掺杂 $N_D$，衬底掺杂 $N_A$），同时也看作一个深度为 $x_j$ 的薄电阻层。针对耗尽宽度与结电容、方块电阻与接触电阻，以及决定 DIBL 的漏极耗尽区向沟道一侧的延伸，比较理想按比例缩小（$N_D \to \alpha N_D$）与 $N_D$ 固定这两种情况。

### 第 1 步 — 结的耗尽宽度

当反向偏压 $V_R$ 远大于内建电势时，

$$W_d = \sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)V_R},$$

由电荷中性（$qN_Ax_p = qN_Dx_n$），它分为沟道侧部分 $x_p$ 和 $n^+$ 侧部分 $x_n$：

$$x_p = W_d\,\frac{N_D}{N_A + N_D}, \qquad x_n = W_d\,\frac{N_A}{N_A + N_D}.$$

**理想按比例缩小**（$N_A \to \alpha N_A$，$N_D \to \alpha N_D$，$V_R \to V_R/\alpha$）：

$$W_d \to \sqrt{\frac{2\epsilon_{si}}{q}\cdot\frac{1}{\alpha}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)\cdot\frac{V_R}{\alpha}} = \frac{W_d}{\alpha}.$$

**$N_D$ 保持不变**（$N_A \to \alpha N_A$，$V_R \to V_R/\alpha$）：

$$
\begin{aligned}
W_d' &= \sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{\alpha N_A} + \frac{1}{N_D}\right)\frac{V_R}{\alpha}}\\
&= \frac{1}{\alpha}\sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{N_A} + \frac{\alpha}{N_D}\right)V_R} .
\end{aligned}
$$

由于 $\alpha/N_D > 1/N_D$，$W_d' > W_d/\alpha$：**耗尽宽度的缩小不到 $\alpha$ 倍**，因为源/漏一侧现在相对而言掺杂较轻，更多的耗尽区延伸进去。

### 第 2 步 — 结电容

单位面积电容为 $C_j = \epsilon_{si}/W_d$（理想情况下增大到 $\alpha$ 倍）：

$$
\begin{aligned}
\frac{C_j'}{C_j} = \frac{W_d}{W_d'} &= \alpha\sqrt{\frac{1/N_A + 1/N_D}{1/N_A + \alpha/N_D}}\\
&= \alpha\sqrt{\frac{N_D + N_A}{N_D + \alpha N_A}} \;<\; \alpha .
\end{aligned}
$$

- **底面电容** = 面积 × $C_j$。面积（$W \times E$，$E$ 为源/漏区长度）减小 $\alpha^2$ 倍，因此总电容减小 $\alpha^2/[\alpha\sqrt{(N_D+N_A)/(N_D+\alpha N_A)}]$ 倍，即**略多于 $\alpha$ 倍**。
- 单位周长的**侧壁电容**约为 $C_jx_j$；当 $x_j \to x_j/\alpha$ 时，它的变化因子为 $\sqrt{(N_D+N_A)/(N_D+\alpha N_A)}$，即略有**减小**，而不是保持不变。由于周长减小 $\alpha$ 倍，总侧壁电容的减小同样略多于 $\alpha$ 倍。

对于强单边结，这一效应非常小：

| $N_A$ (cm⁻³) | $N_D$ (cm⁻³) | $\alpha$ | 单位面积 $C_j$ 增大的倍数 | 总 $C$ 减小的倍数 |
|---|---|---|---|---|
| $10^{17}$ | $10^{20}$ | 2 | 1.999（理想值 2） | 2.001 |
| $10^{17}$ | $10^{20}$ | 10 | 9.96（理想值 10） | 10.04 |
| $10^{18}$ | $10^{20}$ | 10 | 9.58（理想值 10） | 10.4 |

因此结电容方面是一个小小的**好处**，只有当 $\alpha N_A$ 接近 $N_D$ 时才明显。（内建电势 $V_T\ln(N_AN_D/n_i^2)$ 的增量也略小：增大 $V_T\ln\alpha$，而不是 $2V_T\ln\alpha$。）

### 第 3 步 — 源/漏区的串联电阻

深度为 $x_j$ 的薄层的方块电阻为

$$R_\square = \frac{\rho}{x_j} = \frac{1}{q\mu_nN_Dx_j}.$$

- 理想按比例缩小：$N_D \times\alpha$ 与 $x_j/\alpha$ 使 $N_Dx_j$ 从而 $R_\square$ 保持**不变**。
- $N_D$ 固定：只有 $x_j$ 缩小，因此 $R_\square \to \alpha R_\square$。

栅边缘与接触孔之间的源/漏区有 $E/W$ 个方块，按比例缩小不改变这一数目，因此

$$R_{S/D} = R_\square\,\frac{E}{W} \;\to\; \alpha\,R_{S/D}\quad\text{(instead of staying constant)}.$$

**接触电阻。** $R_c = \rho_c/A_c$，其中 $\rho_c$ 为比接触电阻率，$A_c$ 为接触面积。$A_c$ 减小 $\alpha^2$ 倍，而在 $N_D$ 固定时 $\rho_c$ 并不改善（更高的表面掺杂才能使金属–硅势垒变薄），因此 $R_c$ 最多可增大到 $\alpha^2$ 倍。

### 第 4 步 — 串联电阻增大为何重要

线性区（triode region）中的沟道导通电阻在按比例缩小时保持不变：$C_{ox} \times\alpha$，$W/L$ 不变，过驱动电压（overdrive voltage）$/\alpha$，于是

$$R_{on} = \frac{1}{\mu C_{ox}\,(W/L)\,(V_{GS} - V_{TH})} \;\to\; \frac{1}{\alpha\cdot1\cdot(1/\alpha)}\cdot\frac{1}{\mu C_{ox}(W/L)V_{ov}} = R_{on}.$$

寄生的源/漏电阻增大到 $\alpha$ 倍，而沟道电阻不变，因此寄生电阻所占的比例越来越大：

- **源极负反馈：** $g_{m,eff} = g_m/(1 + g_mR_S)$；$g_m$ 不变而 $R_S \times\alpha$，因此 $g_mR_S$ 增大到 $\alpha$ 倍；
- **驱动电流降低**，MOS 开关的导通电阻增大。

这是固溶度限制带来的主要代价。

### 第 5 步 — DIBL：漏极耗尽区向沟道延伸多远

DIBL 取决于**沟道（p）侧**的耗尽宽度 $x_p$ 与 $L$ 的相对大小。由第 1 步，

$$x_p^2 = W_d^2\left(\frac{N_D}{N_A + N_D}\right)^2 = \frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A\,(N_A + N_D)} .$$

**理想按比例缩小：**

$$x_p^2 \to \frac{2\epsilon_{si}V_R}{q\alpha}\cdot\frac{\alpha N_D}{\alpha N_A\,(\alpha N_A + \alpha N_D)} = \frac{1}{\alpha^2}\cdot\frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A(N_A + N_D)} = \frac{x_p^2}{\alpha^2}.$$

**$N_D$ 固定：**

$$x_p'^2 = \frac{2\epsilon_{si}V_R}{q\alpha}\cdot\frac{N_D}{\alpha N_A\,(\alpha N_A + N_D)} = \frac{1}{\alpha^2}\cdot\frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A(\alpha N_A + N_D)} .$$

由于 $\alpha N_A + N_D > N_A + N_D$，

$$\frac{x_p'}{x_p/\alpha} = \sqrt{\frac{N_A + N_D}{\alpha N_A + N_D}} < 1 :$$

耗尽区向沟道一侧的延伸缩小得**至少与 $L$ 一样快**（略快一些）。第 1 步中多出来的耗尽宽度位于 $n^+$ 一侧：$x_n' = x_p'\,\alpha N_A/N_D$ 超过其理想缩放值 $x_n/\alpha$（因此相对于 $L$ 更大），但它位于漏区内部，在那里不会降低源端势垒。有电流流过时，更大的漏极串联电阻还会降低引起 DIBL 的内部漏源电压。

**结论：** 保持源/漏掺杂不变**不会**使 DIBL 更显著；如果说有变化，反而会略微减弱，而对于强单边结则基本不变。

**另一个需要注意的问题。** 实际上内建电势和体费米势并不按 $1/\alpha$ 缩小，因此所有耗尽宽度的缩小都慢于 $L$：单位面积结电容的增大不到 $\alpha$ 倍（介于零偏时的约 $\sqrt\alpha$ 倍与 $\alpha$ 倍之间），在实际按比例缩小中 DIBL 确实会恶化。即使 $N_D$ 能够按比例变化，这种情况也会发生；它并不是由固定的源/漏掺杂引起的。

### 结果

- **结电容：** 耗尽宽度的缩小不到 $\alpha$ 倍，因此单位面积电容增大到 $\alpha\sqrt{(N_A+N_D)/(\alpha N_A+N_D)} < \alpha$ 倍，源/漏总电容的减小略多于 $\alpha$ 倍（这是一个小小的好处，在 $N_D \gg \alpha N_A$ 时可以忽略）。
- **串联电阻：** 由于 $x_j$ 缩小而 $N_D$ 不变，$R_\square = 1/(q\mu_nN_Dx_j)$ 增大到 $\alpha$ 倍，因此源/漏电阻约增大到 $\alpha$ 倍（接触电阻最多增大到 $\alpha^2$ 倍），而不是保持不变，同时沟道电阻保持不变。这是主要的代价：源极负反馈更强，驱动电流更小。
- **DIBL：** 不会更显著。沟道侧耗尽宽度 $x_p$ 缩小得至少与 $L$ 一样快；多出来的耗尽区出现在源/漏一侧，在那里不会降低源端势垒。DIBL 略有减弱，对于强单边结则基本不变。

**常见错误。** 以器件变小为由，认为串联电阻保持不变。理想按比例缩小之所以能保持 $R_\square$ 不变，只是因为 $N_D$ 随 $x_j$ 的减小而升高；当 $N_D$ 达到上限时，更薄的层电阻就更高。

**常见错误。** 因为漏极耗尽区的**总**宽度没有缩小 $\alpha$ 倍，就断定 DIBL 会恶化。起作用的是沟道一侧的部分，而它缩小得比 $L$ 略快。

**常见错误。** 声称总结电容会增大。单位面积电容确实增大（略少于 $\alpha$ 倍），但面积减小了 $\alpha^2$ 倍。
