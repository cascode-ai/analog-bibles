$A_v \approx +1.55$，$R_{out} \approx 0.17\ \mathrm{k\Omega}$；计入 λ 和体效应（body effect）的精确小信号分析给出 1.554 和 166 Ω。不计体效应时：≈ 1.77，≈ 0.17 kΩ。

- 偏置：$V_S = V_{out} = 1.5$ V（$R_F$ 中没有电流），因此 $V_{SB1} = 1.5$ V。$g_{m1} = 3.66$ mS，$g_{mb1} = g_{m1}\gamma/(2\sqrt{0.9 + 1.5}) = 0.145g_{m1} = 0.53$ mS，$g_{m3} = 1.96$ mS，$r_{O1} = 20\ \mathrm{k\Omega}$，$r_{O2} = r_{O3} = 10\ \mathrm{k\Omega}$。
- 电压串联反馈（series–shunt feedback）：$R_F$–$R_{S1}$ 检测 $V_{out}$，并把其中的 $\beta = 0.5$ 送回 $M_1$ 的源极。
- 开环（按二端口方法计入负载效应）：$M_1$ 由 $R_{S1}\|R_F = 1.5\ \mathrm{k\Omega}$ 提供源极负反馈（source degeneration）：$G_{m1} = g_{m1}/[1 + (g_{m1}+g_{mb1})1.5\ \mathrm{k\Omega}] = 0.50$ mS；节点 X：$r_{O2}$ 与从带源极负反馈的 $M_1$ 看进去的 ≈ 147 kΩ 并联，≈ 9.4 kΩ → $A_1 \approx -4.7$；$M_3$ 的负载为 $R_{D2}\|(R_F+R_{S1})\|r_{O3} = 1.67\ \mathrm{k\Omega}$ → $A_2 = -3.27$；$A_{v,open} \approx 15.2$。
- 反馈电压以权重 $g_{m1}+g_{mb1}$ 作用于源极，因此环路增益（loop gain）为 $\beta(1+\eta)A_{v,open} \approx 0.5 \times 1.145 \times 15.2 \approx 8.7$（$\eta = g_{mb1}/g_{m1}$），$A_v \approx 15.2/9.7 \approx 1.57$（精确值为 1.554；环路增益无穷大时的极限为 $(1/\beta)/(1+\eta) = 1.75$，而不是 2）。$R_{out} \approx 1.67\ \mathrm{k\Omega}/9.7 \approx 0.17\ \mathrm{k\Omega}$（二端口分析），精确值为 0.166 kΩ。若采用普通的二端口公式 $A/(1+\beta A)$，只在源极负反馈中计入 $g_{mb1}$，则得到 ≈ 1.77 和 ≈ 0.19 kΩ，与不计体效应时的值接近。
- 电流源 $M_2$ 的 λ 至关重要：若 $r_{O2} = \infty$，开环增益将为无穷大。
