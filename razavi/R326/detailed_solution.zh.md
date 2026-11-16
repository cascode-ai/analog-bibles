# 详细步骤 - R326

**思路。** 互不影响的各级传递函数直接相乘，因此总传递函数是单级传递函数的 $N$ 次幂。计算它在 $s = j\omega$ 处的幅值，令其等于直流值的 $1/\sqrt2$，再解出 $\omega$。

### 第 1 步 — 级联电路的传递函数与幅值

每级的传递函数为 $H_1(s) = A_0/(1 + s/\omega_p)$。由于每一级都不对前一级构成负载，

$$H(s) = \underbrace{H_1(s)\,H_1(s)\cdots H_1(s)}_{N\ \text{times}} = \frac{A_0^N}{\left(1 + s/\omega_p\right)^N},$$

其直流增益为 $H(0) = A_0^N$，在 $s = -\omega_p$ 处有一个 $N$ 阶极点。在 $s = j\omega$ 处，

$$|H_1(j\omega)| = \frac{A_0}{\left|1 + j\omega/\omega_p\right|} = \frac{A_0}{\sqrt{1 + (\omega/\omega_p)^2}} , \qquad |H(j\omega)| = |H_1(j\omega)|^N = \frac{A_0^N}{\left[1 + (\omega/\omega_p)^2\right]^{N/2}} .$$

### 第 2 步 — −3 dB 条件及其求解

在 $\omega_{-3dB}$ 处，幅值降到直流值的 $1/\sqrt2$（$20\log_{10}(1/\sqrt2) = -3.01$ dB）：

$$|H(j\omega_{-3dB})| = \frac{A_0^N}{\sqrt2}\quad\Longrightarrow\quad \frac{A_0^N}{\left[1 + (\omega_{-3dB}/\omega_p)^2\right]^{N/2}} = \frac{A_0^N}{\sqrt2}.$$

约去 $A_0^N$ 并取倒数：

$$\left[1 + \left(\frac{\omega_{-3dB}}{\omega_p}\right)^2\right]^{N/2} = \sqrt2 = 2^{1/2}.$$

将（均为正的）两边取 $2/N$ 次幂：

$$1 + \left(\frac{\omega_{-3dB}}{\omega_p}\right)^2 = \left(2^{1/2}\right)^{2/N} = 2^{1/N} = \sqrt[N]{2},$$

$$\left(\frac{\omega_{-3dB}}{\omega_p}\right)^2 = \sqrt[N]{2} - 1 .$$

由于 $\sqrt[N]{2} > 1$，取正根得

$$\omega_{-3dB} = \sqrt{\sqrt[N]{2} - 1}\;\omega_p ,$$

证毕。

### 第 3 步 — 验证以及带宽缩小的速度

| $N$ | $\sqrt[N]{2}$ | $\omega_{-3dB}/\omega_p$ |
|---|---|---|
| 1 | 2 | 1 |
| 2 | 1.414 | 0.644 |
| 3 | 1.260 | 0.510 |
| 4 | 1.189 | 0.435 |
| 5 | 1.149 | 0.386 |
| 10 | 1.072 | 0.268 |

- $N = 1$ 时 $\omega_{-3dB} = \omega_p$，这正是单极点应有的结果。
- **$N$ 很大时。** 利用 $\sqrt[N]{2} = e^{(\ln2)/N}\approx 1 + \dfrac{\ln2}{N}$，
$$\omega_{-3dB}\approx\omega_p\sqrt{\frac{\ln2}{N}}\approx\frac{0.83\,\omega_p}{\sqrt N},$$
当 $N = 10$ 时它给出 $0.263\,\omega_p$，与精确值 $0.268\,\omega_p$ 很接近。

在 $\omega_p$ 处每一级都已经下降了 3 dB，因此总的 −3 dB 点位于更低的频率处，在那里每一级只损失 $3/N$ dB。带宽大致按 $1/\sqrt N$ 而不是 $1/N$ 缩小，因为在直流附近每一级的损失按 $1 + (\omega/\omega_p)^2$ 呈二次方增长，所以 $N$ 个小损失累加起来为 $N(\omega/\omega_p)^2$。

### 第 4 步 — “互不影响”的作用，以及为什么仍然采用级联

**互不影响。** 只有当接入第 $k+1$ 级不改变第 $k$ 级的响应时（例如每一级都不对前一级构成负载，或者任何负载效应都已计入 $\omega_p$），$H = H_1^N$ 才成立。否则，一级的输入电容会成为前一级输出的负载，极点会移动，该公式就不能直接应用。

**为什么要级联。** 设每级的增益带宽积（gain–bandwidth product）固定为 $A_0\omega_p = \omega_{GBW}$，总增益为 $G = A_0^N = 1000$：

- $N = 1$：$A_0 = 1000$，$\omega_p = \omega_{GBW}/1000$，带宽为 $0.001\,\omega_{GBW}$；
- $N = 2$：$A_0 = 31.6$，$\omega_p = 0.0316\,\omega_{GBW}$，带宽为 $0.644\times0.0316 = 0.020\,\omega_{GBW}$；
- $N = 3$：$A_0 = 10$，$\omega_p = 0.1\,\omega_{GBW}$，带宽为 $0.510\times0.1 = 0.051\,\omega_{GBW}$。

即使考虑 $\sqrt{2^{1/N} - 1}$ 的带宽缩减，三个增益适中的级给出的带宽也约为具有相同总增益的单级电路的 50 倍。

### 结果

对于 $N$ 个相同且互不影响的级，

$$|H(j\omega)| = \frac{A_0^N}{\left[1 + (\omega/\omega_p)^2\right]^{N/2}},$$

令 $|H(j\omega_{-3dB})| = A_0^N/\sqrt2$，得 $1 + (\omega_{-3dB}/\omega_p)^2 = 2^{1/N}$，即

$$\omega_{-3dB} = \sqrt{\sqrt[N]{2} - 1}\;\omega_p .$$

例：$N = 1$ 时为 $\omega_p$；$N = 2$ 时为 $0.644\,\omega_p$；$N = 3$ 时为 $0.51\,\omega_p$；当 $N$ 很大时，$\omega_{-3dB}\approx\omega_p\sqrt{\ln2/N}\approx0.83\,\omega_p/\sqrt N$。

**常见错误。** 断言带宽恰好为 $\omega_p/N$ 或 $\omega_p/\sqrt N$。精确结果是 $\sqrt{2^{1/N} - 1}\,\omega_p$；$1/\sqrt N$ 只是它在 $N$ 很大时的趋势，系数为 $\sqrt{\ln2}\approx0.83$。

**常见错误。** 把幅值设为直流增益的一半，而不是其 $1/\sqrt2$。−3 dB 是半功率点；用 1/2（−6 dB）会得到 $\sqrt{4^{1/N} - 1}\,\omega_p$，这是错误的。

**常见错误。** 用相位来定义带宽，例如取总相位达到 $-45^\circ$ 的频率，这会得到 $\omega_p\tan(45^\circ/N)$。−3 dB 带宽只由幅值定义。
