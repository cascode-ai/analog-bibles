$A_v \approx +3.2$（精确节点分析为 3.23，二端口分析为 3.27），$R_{out} \approx 0.11\ \mathrm{k\Omega}$（114 Ω），均已计入体效应（body effect）和 λ；理想值 $1 + R_2/R_1$ 为 4.08。

- 偏置：$R_2$ 中没有电流，$V_{out} = V_B = 0.5\ \mathrm{mA} \times 0.973\ \mathrm{k\Omega} = 0.487$ V = $V_{SB1}$。$g_{m1} = g_{m2} = 3.66$ mS，$g_{mb1} = g_{m1}\cdot 0.45/(2\sqrt{1.387}) = 0.70$ mS（$\eta = 0.19$）；$r_{O1} = r_{O2} = 20\ \mathrm{k\Omega}$，$r_{O3} = r_{O4} = 10\ \mathrm{k\Omega}$。
- 电压串联反馈（series–shunt feedback），$\beta = R_1/(R_1+R_2) = 0.245$。
- 开环：$M_1$ 由 $R_1\|R_2 = 0.735\ \mathrm{k\Omega}$ 提供源极负反馈（source degeneration）：$G_{m1} = g_{m1}/[1 + (g_{m1}+g_{mb1})0.735\ \mathrm{k\Omega}] = 0.871$ mS；节点 A：$r_{O3}$ 与从 $M_1$ 看进去的 ≈ 85 kΩ 并联，≈ 8.9 kΩ → $A_1 \approx -7.8$；输出端：$r_{O2}\|r_{O4}\|(R_1+R_2) = 2.49\ \mathrm{k\Omega}$ → $A_2 = -9.1$；$A_{v,open} \approx 71$。
- 环路增益（loop gain）$\beta(1+\eta)A_{v,open} \approx 0.245 \times 1.19 \times 71 \approx 20.7$ → $A_v \approx 71/21.7 \approx 3.27$；$R_{out} \approx 2.49\ \mathrm{k\Omega}/21.7 \approx 115\ \Omega$。精确值：3.23，114 Ω。
- 不计体效应时：≈ 3.83–3.86 和 ≈ 120 Ω。若 λ = 0，开环增益（open-loop gain）将为无穷大：增益 → 4.08/(1+η)，$R_{out}$ → 0，因此必须保留 λ。
