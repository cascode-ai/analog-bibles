$V_X$ 是 100 MHz 的正弦波，峰值幅度 ≈ 62 mV（0.0624 V），超前 $V_{in}$ ≈ 86°（接近 90°）。节点 X 的行为就像微分器的输出，$V_X \approx (C_1/G_m)\,dV_{in}/dt$，因为 100 MHz 远低于位于 ≈ 1.6 GHz 的极点。

- $H(j\omega) = j\omega R_{out}C_1/(1 + G_mR_{out} + j\omega R_{out}C_1)$，其中 $\omega R_{out}C_1 = 2\pi(10^8)(20\ \mathrm{k\Omega})(1\ \mathrm{pF}) = 12.57$，$1 + G_mR_{out} = 201$。
- $|H| = 12.57/\sqrt{201^2 + 12.57^2} = 0.0624$；$\angle H = 90° - \arctan(12.57/201) = 86.4°$。
- 对于 $V_{in} = 1\ \mathrm{V}\cdot\sin\omega t$：$V_X(t) = 62.4\ \mathrm{mV}\cdot\sin(\omega t + 86.4°)$，以运放的直流电平（0 V）为中心。
- 因此“虚地”（virtual ground）上带有 62 mV 的纹波，而 $C_1$ 两端的电压（$V_{in} - V_X$）幅度为 0.998 V，滞后 $V_{in}$ ≈ 3.6°。
