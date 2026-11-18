在阶跃后 ≈ 3.16 ns 使能锁存器；最小总延迟 ≈ 4.64 ns（3.16 ns + 1.48 ns）。
- 放大器时间常数 $\tau_A = 1/(2\pi\cdot100\ \mathrm{MHz}) = 1.59$ ns；其输出（归一化）为 $v_{il}(t) = 0.5(1-e^{-t/\tau_A})$。
- 总延迟 $T(t) = t + \tau_L\ln\dfrac{0.5}{v_{il}} = t - \tau_L\ln(1-e^{-t/\tau_A})$。
- $dT/dt = 0$：$1 = \dfrac{\tau_L}{\tau_A}\dfrac{e^{-t/\tau_A}}{1-e^{-t/\tau_A}}$ → $e^{-t/\tau_A} = \dfrac{\tau_A}{\tau_A+\tau_L} = 0.137$ → $t = \tau_A\ln(7.28) = 3.16$ ns。
- 于是 $v_{il} = 0.5(1-0.137) = 0.431(V_{OH}-V_{OL})$，锁存器延迟为 $10\ \mathrm{ns}\times\ln(0.5/0.431) = 1.48$ ns；最小总延迟为 4.64 ns。
