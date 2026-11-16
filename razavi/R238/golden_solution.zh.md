$I_{out}$ 的标称值为 $I_{REF} = 100\ \mu$A（当 $M_3$ 的漏极处于 $V_X$ 时，输出支路精确地复制基准支路）。漏极电压高出 1 V 时，$I_{out}$ 只增加 ≈ 0.04–0.05 μA，约为 0.04–0.05%：小信号估算为 ≈ 45–55 nA，精确的大信号（large-signal）求解为 ≈ 40 nA。

- $\Delta I_{out} \approx \Delta V/R_{out}$，$R_{out} \approx [1 + (g_{m3}+g_{mb3})r_{O3}]r_{O2} + r_{O3}$。
- $g_{m3} = \sqrt{2(134\ \mu)(120)(100\ \mu)} = 1.79$ mS；$r_{O2} = r_{O3} = 1/(0.1\times100\ \mu\mathrm{A}) = 100$ kΩ；$g_{m3}r_{O3} = 179$。
- 不计 $g_{mb}$：$R_{out} \approx 18.1$ MΩ → $\Delta I_{out} \approx 55$ nA。计入 $g_{mb3} \approx 0.22g_{m3}$（$M_3$ 的源极位于 ≈ 0.2 V）：$R_{out} \approx 22$ MΩ → ≈ 46 nA。
- 计入 $(1+\lambda V_{DS})$ 和体效应（body effect），按平方律（square law）进行精确的大信号求解，$V_b$ 在 1.2 到 1.6 V 之间任取，得到 $\Delta I_{out} \approx$ 38–40 nA，略小一些，因为在该模型中 $r_O = (1+\lambda V_{DS})/(\lambda I_D)$ 和 $g_m$ 都稍大。
