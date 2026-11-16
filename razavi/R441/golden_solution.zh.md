$\overline{V^2_{n,in}} \approx 4kT\gamma\left(\dfrac{1}{g_{m1}} + \dfrac{g_{mP2}}{g_{m1}^2}\right)$（γ = 2/3）；在低频下，共源共栅（cascode）管 $M_2$、辅助放大器（auxiliary amplifier）$M_3$ 及其负载 $M_{P1}$ 的贡献可以忽略。

- 该电路是共源级（common-source stage）$M_1$ 加上一个调节型共源共栅（regulated cascode）管 $M_2$，即采用了增益提升（gain boosting）技术，其中以 $I_1$ 为负载的 $M_3$ 是辅助放大器；输出节点接有 PMOS 电流源 $M_{P2}$。
- $M_1$：其噪声电流经 $M_2$ 流到输出端（从 $M_2$ 源极看进去的阻抗很低，≈ $1/[g_{m2}(1 + A_3)]$），因此折合到输入端为 $4kT\gamma/g_{m1}$。
- $M_{P2}$：噪声电流 $4kT\gamma g_{mP2}$ 注入输出端；除以 $g_{m1}^2$ 得到 $4kT\gamma g_{mP2}/g_{m1}^2$。
- $M_2$：作为一个具有很强源极负反馈（source degeneration）的共源共栅管（源极阻抗 $r_{O1}$ 又被局部环路进一步提升），它到达输出端的噪声电流被减小为原来的 ≈ $1/[(1+A_3)g_{m2}r_{O1}]$：可以忽略。
- $M_3$ 和 $M_{P1}$：它们的噪声在 $M_2$ 的栅极产生电压；环路把它对 X 的影响抑制了 $A_3 = g_{m3}(r_{O3}\|r_{OP1})$ 倍，而 X 处的电压折合到输入端时还要再除以 $g_{m1}r_{O1}$。当 $A_3$ 很大时，它们的输入参考功率谱密度（power spectral density，PSD）≈ $4kT\gamma\,(1/g_{m3} + g_{mP1}/g_{m3}^2)/(g_{m1}r_{O1})^2$：除非 $g_{m3}$ 极小，否则可以忽略。
