# 详细步骤 - R475

**思路。** 闭环增益为 4 对应于反馈系数 $\beta = 1/4$，环路增益为 $\beta A_0/(1 + j\omega/\omega_p)^2$。60° 的相位裕度确定了交点频率，该处环路增益幅值为 1 的条件限定了乘积 $\beta A_0$，再除以 $\beta$ 即得允许的最大 $A_0$。

### 第 1 步 — 反馈系数与环路增益

当 $\beta A \gg 1$ 时，闭环增益 $A_{CL} = A/(1 + \beta A) \approx 1/\beta$，因此名义闭环增益为 4 意味着

$$\beta = \frac14 .$$

环路增益及其幅值和相位为

$$\beta H(j\omega) = \frac{\beta A_0}{\left(1 + j\omega/\omega_p\right)^2},$$

$$
\begin{aligned}
|\beta H(j\omega)| &= \frac{\beta A_0}{\left|1 + j\omega/\omega_p\right|^2} = \frac{\beta A_0}{1 + \omega^2/\omega_p^2},\\
\angle\beta H(j\omega) &= -2\tan^{-1}\frac{\omega}{\omega_p}.
\end{aligned}
$$

### 第 2 步 — 相位条件：交点频率

在增益交点（gain crossover）$\omega_u$ 处，$\mathrm{PM} = 180° + \angle\beta H(j\omega_u) = 60°$：

$$
\begin{aligned}
180° - 2\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
\tan^{-1}\frac{\omega_u}{\omega_p} &= 60°\\
\omega_u &= \omega_p\tan60° = \sqrt3\,\omega_p .
\end{aligned}
$$

两个相同的极点各贡献 60°，共 120°。相位只由极点决定，因此无论闭环增益为多少，交点都必须位于 $\sqrt3\,\omega_p$。

### 第 3 步 — 幅值条件：环路增益

$\omega_u$ 处幅值为 1：

$$
\begin{aligned}
\frac{\beta A_0}{1 + (\sqrt3)^2} &= 1\\
\frac{\beta A_0}{4} &= 1\\
\beta A_0 &= 4 .
\end{aligned}
$$

更大的 $\beta A_0$ 会使交点移到 $\sqrt3\,\omega_p$ 以上，那里的相位更负，相位裕度将低于 60°。因此

$$\beta A_0 \le 4 .$$

### 第 4 步 — $\beta = 1/4$ 时的最大 $A_0$

$$A_{0,max} = \frac{4}{\beta} = \frac{4}{1/4} = 16 .$$

对稳定性起作用的只是**环路**增益 $\beta A_0$：由于只有四分之一的输出被反馈回来，放大器的增益可以是单位增益情形（$A_0 = 4$）的四倍。

当 $A_0 = 16$、$\beta = 1/4$ 时，实际闭环增益为

$$A_{CL} = \frac{A_0}{1 + \beta A_0} = \frac{16}{1 + 4} = 3.2,$$

即名义值 4 因有限的环路增益 4 而减小（增益误差 $1/(1 + \beta A_0) = 20\,\%$）。

### 第 5 步 — 若实际闭环增益必须恰好为 4

此时 $\beta$ 不再是 $1/4$：

$$
\begin{aligned}
\frac{A_0}{1 + \beta A_0} &= 4\\
1 + \beta A_0 &= \frac{A_0}{4}\\
\beta A_0 &= \frac{A_0}{4} - 1 .
\end{aligned}
$$

稳定性限制 $\beta A_0 \le 4$ 变为

$$\frac{A_0}{4} - 1 \le 4 \quad\Longrightarrow\quad A_0 \le 20,$$

在极限情况下 $\beta = 4/20 = 0.2$。验证：$20/(1 + 0.2\times20) = 20/5 = 4$。✓

### 结果

60° 的相位裕度要求 $\omega_u = \sqrt3\,\omega_p$，且环路增益 $\beta A_0 \le 4$。对于闭环增益 4（$\beta = 1/4$）：

$$A_{0,max} = 16 .$$

（若实际闭环增益 $A_0/(1 + \beta A_0)$ 必须恰好为 4，则 $\beta = 0.2$，$A_{0,max} = 20$。）

**常见错误。** 沿用单位增益情形的结果 $A_0 = 4$。稳定性条件限制的是**环路**增益 $\beta A_0$，而不是 $A_0$ 本身；当 $\beta = 1/4$ 时，放大器增益可以大四倍。

**常见错误。** 取 $\beta = 4$ 而不是 $1/4$。无源网络的反馈系数最大为 1；闭环增益是它的倒数。

**常见错误。** 使用错误的相位条件，例如把交点放在 $\omega_p$ 处（得到 $\beta A_0 = 2$ 和 $A_0 = 8$），或让每个极点贡献 30° 而不是 60°。PM = 60° 时交点处的总相位为 $-120°$，即每个极点 60°，这使交点位于 $\sqrt3\,\omega_p$。
