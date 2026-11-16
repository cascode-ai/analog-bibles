# 详细步骤 - R530

**思路。** 在双极点环路中，45° 的相位裕度意味着 $|\beta H|$ 恰好在次极点处穿越单位增益。$C_L$ 加倍会使该极点减半，因此增益交点必须下移到新的极点处：主极点必须减半，采用密勒补偿时，这意味着把 $C_C$ 加倍。

### 第 1 步 — 原来的设计条件

主极点远低于增益交点（gain crossover）时，

$$|\beta H(j\omega)| \approx \frac{\omega_T}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}},\qquad \angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}},$$

其中 $\omega_T = \beta A_0\omega_{p1}$。当增益交点位于 $\omega_{p2}$ 时，相位裕度为 45°（$\tan^{-1}1 = 45^\circ$），该处的幅值条件给出

$$\frac{\omega_T}{\omega_{p2}\sqrt2} = 1 \quad\Longrightarrow\quad \omega_T = \sqrt2\,\omega_{p2},\qquad\text{i.e.}\qquad \omega_{p1} = \frac{\sqrt2\,\omega_{p2}}{\beta A_0}.$$

所需的主极点与输出极点成正比。

### 第 2 步 — $C_L$ 加倍的影响

密勒补偿下的输出极点为

$$\omega_{p2} \approx \frac{g_{m2}C_C}{C_EC_C + C_EC_L + C_CC_L} \approx \frac{g_{m2}}{C_L}\qquad(C_C \gg C_E),$$

其中 $C_E$ 是第一级输出端的电容。$C_L$ 加倍后，

$$\omega'_{p2} \approx \frac{g_{m2}}{2C_L} = \frac{\omega_{p2}}{2}.$$

主极点以及 $\omega_T$ 都不变，因此增益交点现在位于新的输出极点**之上**，相位裕度下降（降到约 33°）。

### 第 3 步 — 主极点所需的变化

对新的极点应用第 1 步的条件：

$$\omega'_T = \sqrt2\,\omega'_{p2} = \sqrt2\,\frac{\omega_{p2}}{2} = \frac{\omega_T}{2}
\quad\Longrightarrow\quad
\omega'_{p1} = \frac{\omega'_T}{\beta A_0} = \frac{\omega_{p1}}{2}.$$

**主极点（以及随之的环路单位增益频率）必须降低 2 倍。** 验算：

$$\beta H'(s) = \frac{\beta A_0}{\left(1 + \dfrac{2s}{\omega_{p1}}\right)\left(1 + \dfrac{2s}{\omega_{p2}}\right)} = \beta H(2s),$$

即原环路增益在频率上向下平移了一个倍频程，因此相位裕度再次恰好为 45°，此时位于 $\omega_c = \omega_{p2}/2$。

### 第 4 步 — 用密勒补偿实现

由 $\omega_{p1} \approx 1/(R_1\,g_{m2}R_L\,C_C)$ 和 $A_0 = g_{m1}R_1\,g_{m2}R_L$（$R_1$、$R_L$ 为各级的输出电阻），运放的单位增益频率为 $A_0\omega_{p1} = g_{m1}/C_C$，因此 $\omega_T = \beta g_{m1}/C_C$。$\omega_{p1}$ 和 $\omega_T$ 都按 $1/C_C$ 变化，因此

$$\boxed{C'_C = 2\,C_C}$$

即可按要求使它们减半。副作用：
- 一旦 $C_C \gg C_E$，输出极点 $\omega_{p2} \approx g_{m2}/(C_L + C_E + C_EC_L/C_C)$ 几乎与 $C_C$ 无关（更大的 $C_C$ 甚至会使它略微升高）。
- 右半平面零点（right-half-plane zero）$g_{m2}/C_C$ 也像输出极点一样减半，因此它与极点的相对位置不变。
- 若使用调零电阻 $R_z$，零点 $1/[C_C(R_z - 1/g_{m2})]$ 同样减半，因此原先放在旧输出极点 $g_{m2}/C_L$ 上的零点，在一阶近似下会落在新的输出极点 $g_{m2}/(2C_L)$ 上；可能只需微调。

### 第 5 步 — 代价与另一种方案

| | 修改前 | $C_L$ 加倍，不作修改 | $C_L$ 和 $C_C$ 都加倍 |
|---|---|---|---|
| 输出极点 | $\omega_{p2}$ | $\omega_{p2}/2$ | $\omega_{p2}/2$ |
| 主极点 | $\omega_{p1}$ | $\omega_{p1}$ | $\omega_{p1}/2$ |
| 增益交点 | $\omega_{p2}$ | $0.77\,\omega_{p2}$ | $\omega_{p2}/2$ |
| 相位裕度 | 45° | ≈ 33° | 45° |

- **速度：** 环路的增益交点以及闭环带宽都减半；建立时间变为原来的两倍。
- **压摆率（slew rate）：** 约为 $I_{SS}/C_C$，因此也减半。
- **另一种方案（不属于补偿的修改）：** 把输出级的 $g_{m2}$ 加倍来恢复 $\omega_{p2}$。这样可以保持带宽，但要付出功耗，并且改变了运放本身。

### 结果

将主极点降低 2 倍（即减半），这会使环路的单位增益频率减半，从而使 $|\beta H|$ 重新恰好在新的输出极点 $\omega_{p2}/2$ 处达到单位增益。采用密勒补偿时（$\omega_{p1} \propto 1/C_C$，$\omega_T = \beta g_{m1}/C_C$），这意味着**把 $C_C$ 加倍**。新的环路增益就是旧的环路增益在频率上按 2 倍缩小的结果，因此相位裕度再次为 45°。右半平面零点（或调零电阻产生的零点）随之同比例变化。代价是闭环带宽减半，压摆率也减半。

**常见错误。** 为了“加快速度”而减小 $C_C$（提高主极点）。这会把增益交点推得更高，远在已降低的输出极点之上，使相位裕度更差。

**常见错误。** 认为“环路仍然稳定”而不修改补偿。环路确实稳定，但其相位裕度已降到约 33°，而要求是 45°。

**常见错误。** 只说“增大 $C_C$”而不给出倍数。45° 条件 $\omega_T = \sqrt2\,\omega_{p2}$ 使 $\omega_T$ 与 $\omega_{p2}$ 成线性关系，因此 $\omega_{p2}$ 减半就要求 $\omega_T$ 恰好减半，即 $C_C$ 加倍。
