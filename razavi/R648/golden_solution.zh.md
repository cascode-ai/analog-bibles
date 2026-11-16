可以：乘法器后接低通滤波器（low-pass filter）求平均，就构成鉴相器，因为其平均输出 $\overline{V_{out}} = \tfrac12 K_mAB\cos\Delta\phi$ 只取决于相位差。不是，该特性并非线性：它是余弦函数（以 2π 为周期），只有在偏离正交（$\Delta\phi = \pi/2$）不多时才近似线性；在正交点处输出过零，增益的幅值最大（每弧度 $K_mAB/2$）。

- 输入为 $V_1 = A\cos\omega t$ 和 $V_2 = B\cos(\omega t + \Delta\phi)$，二者频率相同。乘法器给出 $V_{out} = K_mV_1V_2 = \tfrac12K_mAB[\cos\Delta\phi + \cos(2\omega t + \Delta\phi)]$。
- $2\omega$ 项的平均值为零，环路的低通滤波器会将其滤除。直流项 $\tfrac12K_mAB\cos\Delta\phi$ 只是 Δφ 的函数，因此该电路能检测相位差。
- 非线性：输出在 Δφ = 0 时最大（$K_mAB/2$），在 ±π/2 处为零，在 π 处最小。增益 $d\overline{V_{out}}/d\Delta\phi = -\tfrac12K_mAB\sin\Delta\phi$ 随 Δφ 变化，并在 0 和 π 处降为零并改变符号。在正交点附近，$\overline{V_{out}} \approx -\tfrac12K_mAB(\Delta\phi - \pi/2)$；在 ±30° 处误差约为 4.5%。
- 增益还与输入幅度 A 和 B 成正比。相比之下，硬开关的异或门增益为 $V_0/\pi$，与幅度无关。若两个输入频率不同，输出是差频处的拍频信号，其平均值为零。
