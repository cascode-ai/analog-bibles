该响应为严重欠阻尼（underdamped）：$\omega_n = 2\pi(10\ \mathrm{MHz}) = 6.28\times10^7$ rad/s，ζ = 0.05。对于输入频率阶跃 Δω（输出相位对输入相位阶跃的响应形状完全相同）：
$\Delta\omega_{out}(t) = \Delta\omega\left[1 - \dfrac{1}{\sqrt{1 - \zeta^2}}e^{-\zeta\omega_nt}\sin\left(\omega_n\sqrt{1 - \zeta^2}\,t + \theta\right)\right]u(t)$，其中 $\theta = \cos^{-1}\zeta \approx 87.1^\circ$，
即 $\Delta\omega_{out}(t) \approx \Delta\omega\left[1 - 1.001\,e^{-t/318\ \mathrm{ns}}\cos(2\pi\cdot 9.99\ \mathrm{MHz}\cdot t - 2.9^\circ)\right]$。
- 衰减时间常数为 $1/(\zeta\omega_n) = 2/\omega_{LPF} = 318$ ns。
- 振铃频率为 $\omega_n\sqrt{1 - \zeta^2} \approx 2\pi \times 9.99$ MHz（周期 ≈ 100 ns）。第一个峰值出现在 ≈ 50 ns 处，过冲（overshoot）≈ 85%。
- 建立之前约振铃 15 个周期：≈ 0.95 µs 后误差在 5% 以内，≈ 1.47 µs 后在 1% 以内。

推导：
- $K_{VCO} = 2\pi\times10^8$ rad/s/V，因此 $K_{PD}K_{VCO} = 2\pi\times10^8\ \mathrm{s^{-1}}$。
- 闭环传递函数为 $H(s) = \omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$。
- $\omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}} = \sqrt{(2\pi\cdot10^6)(2\pi\cdot10^8)} = 2\pi\times10^7$ rad/s。
- $\zeta = \tfrac12\sqrt{\omega_{LPF}/(K_{PD}K_{VCO})} = \tfrac12\sqrt{0.01} = 0.05$。
- 过冲为 $e^{-\pi\zeta/\sqrt{1 - \zeta^2}} = 0.854$。
- 相位裕度（phase margin）只有 ≈ 5.7°。要达到 ζ ≥ 0.7，需要大得多的 $\omega_{LPF}$ 或小得多的 $K_{PD}K_{VCO}$。
