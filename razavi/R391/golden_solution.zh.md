约为 1.2。开环增益（open-loop gain）为 $A_0 = g_{m1}(r_{O2}\|r_{O4}) \approx 24.4$；若一阶增益误差 $1/(\beta A_0) \le 5\%$，则标称增益 $1/\beta = 1 + C_2/C_1$ 最大为 $0.05A_0 \approx 1.22$（实际闭环增益为 $A_0/(1+\beta A_0) = 24.4/21 \approx 1.16$）。若采用严格定义（实际增益至少为 $1/\beta$ 的 95%），则 $\beta A_0 \ge 19$，$1/\beta \le 1.28$，实际增益最大 ≈ 1.22。

- $I_{D1,2} = 0.5$ mA：$g_{m1} = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{m})} = 3.66$ mS；$r_{O2} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20\ \mathrm{k\Omega}$，$r_{O4} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10\ \mathrm{k\Omega}$，$r_{O2}\|r_{O4} = 6.67\ \mathrm{k\Omega}$ → $A_0 = 24.4$。
- 分压器把输出电压的 $\beta = C_1/(C_1+C_2)$ 反馈到 $M_2$ 的栅极（同相结构）：$V_{out}/V_{in} = A_0/(1+\beta A_0) \approx (1/\beta)[1 - 1/(\beta A_0)]$。
- 增益误差 ≈ $1/(\beta A_0) \le 0.05$ → $1/\beta \le 1.22$。
