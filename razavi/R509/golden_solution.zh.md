闭环极点是方程 $s^2/(\omega_{p1}\omega_{p2}) + (1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z)s + 1 + A_0 = 0$ 的根。令 $A = A_0/(1 + A_0) = 0.998$，则：
- $\omega_z = 0.9\,\omega_{p2}$（3.0×10⁹ rad/s）：极点为 1.62×10⁹ 和 3.72×10⁹ rad/s，$V_{out}(t) = AV_0\left[1 - 0.814\,e^{-t/0.617\,\mathrm{ns}} - 0.186\,e^{-t/0.269\,\mathrm{ns}}\right]$。
- $\omega_z = 1.1\,\omega_{p2}$（3.66×10⁹ rad/s）：极点为 2.09×10⁹ 和 2.89×10⁹ rad/s，$V_{out}(t) = AV_0\left[1 - 1.550\,e^{-t/0.479\,\mathrm{ns}} + 0.550\,e^{-t/0.346\,\mathrm{ns}}\right]$。
- 两个响应都是单调的：极点均为实数，没有过冲（overshoot）；并且都从 0 开始。各留数（residue）由 $K_A = (1 - \omega_{pA}/\omega_z)/(1 - \omega_{pA}/\omega_{pB})$ 和 $K_B = 1 - K_A$ 求得。
- 要点：这里 $\omega_{p2}$ ≈ 1.8 $(1 + A_0)\omega_{p1}$，因此零极点对（doublet）位于闭环带宽（closed-loop bandwidth）之上，零极点对近似所要求的条件 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$ 并不成立。失配项的衰减速度与主指数项相当或更快，不存在缓慢建立的拖尾。失配的主要作用是使主时间常数改变 ≈ ±12%（0.62 或 0.48 ns，对比 0.55 ns），因此 0.1% 建立时间（settling time）≈ 4.1 ns 或 3.5 ns，而不是 3.8 ns。
- （若机械地套用零极点对公式，会得到一个幅度 ≈ 10%、以 1/$\omega_{p2}$ ≈ 0.3 ns 衰减的项：这同样是一个快速项，定性结论相同。）
