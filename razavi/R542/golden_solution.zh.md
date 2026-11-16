$\Delta V_{out} = V_T\ln\dfrac{\beta(\beta + 2)}{(\beta + 1)^2} \approx -\dfrac{V_T}{(\beta + 1)^2}$：可以忽略（β = 10 时 ≈ −0.2 mV，β = 5 时为 −0.7 mV）。与绝对温度成正比（PTAT）的电流，以及被 $1 + R_2/R_1$ 放大的那一项，都不受影响。

推导（所有 PMOS 电流都等于 $I$，$\alpha = \beta/(\beta + 1)$）：
- $Q_2$ 的基极电流 $I/(\beta + 1)$ 从其基极流出，流入 $Q_1$ 的发射极：$I_{E1} = I_{C1} = I(\beta + 2)/(\beta + 1)$。$Q_2$ 的集电极电流为 $\alpha I$。另一侧的情况相同：$I_{C3} = I(\beta + 2)/(\beta + 1)$，$I_{C4} = \alpha I$。
- 环路：$|V_{EB1}| + |V_{EB2}| = V_T\ln\dfrac{I(\beta+2)/(\beta+1)}{I_S} + V_T\ln\dfrac{\alpha I}{I_S}$，而 $|V_{EB3}| + |V_{EB4}|$ 的对数宗量相同，只是分母为 $nI_S$。因此 $IR_1 = 2V_T\ln n$ 严格成立：基极电流引起的误差在两半中完全相同，相互抵消。
- $V_{out} = |V_{EB3}| + |V_{EB4}| + I(R_1 + R_2)$ 只通过 $|V_{EB3}| + |V_{EB4}|$ 发生变化：$V_T\ln\frac{\beta+2}{\beta+1} + V_T\ln\frac{\beta}{\beta+1}$，这就是上述结果，且不被放大。
- 如果（较不准确地）用发射极电流来计算发射极-基极电压，偏移为 $V_T\ln[(\beta+2)/(\beta+1)] \approx V_T/(\beta+1)$，仍然不被放大。当两半不对称时（例如 $Q_2$ 和 $Q_4$ 的 β 不同），基极电流的抵消就变得重要，因为此时差值会被乘以 $1 + R_2/R_1$。
