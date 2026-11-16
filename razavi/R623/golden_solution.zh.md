$|V_{OS,in}| = \Delta V_{TH}\,\dfrac{g_{m3}r_{O3}}{1+g_{m3}r_{O3}}\cdot\dfrac{1}{g_{m1}r_{O1}} \approx \dfrac{\Delta V_{TH}}{g_{m1}r_{O1}}$，与 $R_D$ 无关。当 $R_D \to \infty$ 时，输入参考失调保持不变；只有增益和输出失调增大，输出失调趋于 ≈ $g_{m3}r_{O3}\Delta V_{TH}$。
- 尾电流源为理想电流源时，$V_{out} = 0$ 要求 $I_{D3} = I_{D4} = I_{SS}/2$，因此两个漏极都处于 $V_{DD} - R_DI_{SS}/2$，$R_D$ 不再出现。
- 于是 $M_3$ 和 $M_4$ 的电流相等，栅极电压和漏极电压也相等，但阈值相差 $\Delta V_{TH}$，因此它们的源极（即 $M_1$、$M_2$ 的漏极）电压相差 $\Delta V_S = \Delta V_{TH}\,g_{m3}/(g_{m3} + 1/r_{O3})$。
- $M_1$ 和 $M_2$ 必须流过相等的电流，而它们的漏源电压相差 $\Delta V_S$；$\lambda \neq 0$ 时，这需要 $\Delta V_{GS} = \Delta V_S/(g_{m1}r_{O1})$，这就是输入失调。（若 λ = 0，失调将为零。）
- 小信号验算：与 $M_4$ 栅极串联的电压源 $v$ 产生的输出电流为 $g_{m4}r_{O4}v/D$，输入产生的输出电流为 $g_{m2}r_{O2}(1+g_{m4}r_{O4})v_{in}/D$，其中 $D = r_{O2} + r_{O4} + g_{m4}r_{O2}r_{O4} + R_D$ 为二者共有；两者之比不含 $R_D$。当 $R_D \to \infty$ 时：$A_v \to g_{m1}r_{O1}(1+g_{m3}r_{O3})$，输出失调 $\to g_{m3}r_{O3}\Delta V_{TH}$。取 λ = 0.1 V⁻¹ 的大信号（large-signal）数值求解验证了该公式，也验证了它与 $R_D$ 无关。
- 实际上，当 $R_D \to \infty$ 且尾电流源为理想电流源时，输出共模电平（common-mode level）不确定，需要采用共模反馈（common-mode feedback）。
