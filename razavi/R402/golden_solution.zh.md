$I_{D1} \approx 0.76$ mA；形式上 $V_{in} \approx 2.72$ V；小信号增益 ≈ +1.50（二端口反馈分析；精确节点分析得 1.53）。但这个工作点在物理上并不自洽：它使 $M_1$ 的源极（≈ 1.68 V）高于其漏极（≈ 1.48 V），因此在这些电阻值下实际上无法建立 $I_{D2} = 1$ mA。

- $M_2$：$|V_{GS2}| = 0.8 + \sqrt{2(1\ \mathrm{mA})/(38.4\ \mu \times 100)} = 0.8 + 0.722 = 1.522$ V → $V_X = 1.478$ V → $I_{D1} = (3 - 1.478)/2\ \mathrm{k\Omega} = 0.761$ mA。
- 输出网络：设 $I_F$ 从 $V_{out}$ 经 $R_F$ 流入源极节点，则 $V_{out} = 2\ \mathrm{k\Omega}(1\ \mathrm{mA} - I_F)$，$V_S = 2\ \mathrm{k\Omega}(0.761\ \mathrm{mA} + I_F)$，$I_F = (V_{out} - V_S)/2\ \mathrm{k\Omega}$ → $I_F = 0.080$ mA，$V_{out} = 1.84$ V，$V_S = 1.68$ V。
- $V_{GS1} = 0.7 + \sqrt{2(0.761\ \mathrm{mA})/(134\ \mu \times 100)} = 1.037$ V → $V_{in} = 2.72$ V。
- 自洽性：$V_{DS1} = V_X - V_S \approx -0.20$ V；$M_1$ 不可能从 X 向其源极传导 0.76 mA 的电流，因此形式上求得的 $V_{in}$ 并不是有效的偏置点，$M_1$ 当然也不工作在饱和区（saturation region）。
- 按题给电流计算小信号参数：$g_{m1} = 4.52$ mS（$1/g_{m1} = 221\ \Omega$），$g_{m2} = 2.77$ mS。$A_{v,open} = \dfrac{R_{D1}}{R_F\|R_S + 1/g_{m1}}\,g_{m2}[R_{D2}\|(R_F+R_S)] = \dfrac{2}{1.221}(2.77\ \mathrm{mS})(1.333\ \mathrm{k\Omega}) = 6.05$；$g_{21} = R_S/(R_F+R_S) = 0.5$；环路增益（loop gain）为 3.03；$A_v = 6.05/4.03 = 1.50$（精确节点分析为 1.53；理想值 $1/g_{21}$ = 2）。
