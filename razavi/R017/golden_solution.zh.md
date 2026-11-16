$V_{in}$ 较小时，$M_1$（栅极接 2 V）工作在线性区（triode region），相当于一个闭合的开关，$V_{out} \approx V_{in}$（略小一些，由 $R_{on}$ 与 $R_1$ 分压决定）；一旦 $V_{in}$ 超过约 $2\ \mathrm{V} - V_{TH} \approx 1.1$ V，$M_1$ 就以 $V_{out}$ 为源极进入饱和区（saturation region），$V_{out}$ 保持在略低于 1.09 V 的某个恒定值。
- 电流从 $V_{in}$ 电源经 $M_1$ 流入 $R_1$，因此 $V_{out} \le V_{in}$：$V_{out}$ 节点是源极（$V_{GS} = 2 - V_{out}$，$V_{SB} = V_{out}$），$V_{in}$ 节点是漏极。
- 当 $V_{in} - V_{out} < 2 - V_{out} - V_{TH}$，即 $V_{in} < 2 - V_{TH}(V_{out})$ 时，器件处于线性区：$V_{out} = V_{in}R_1/(R_1 + R_{on})$，其中 $R_{on} \approx 1/[\beta(2 - V_{out} - V_{TH})]$；若 $R_1 \gg R_{on}$，则输出接近 $V_{in}$；随着 $V_{GS}$ 减小，斜率下降。
- $V_{in}$ 更大时处于饱和区：$V_{out}$ 由 $\tfrac12\beta(2 - V_{out} - V_{TH}(V_{out}))^2 = V_{out}/R_1$ 决定，与 $V_{in}$ 无关（λ = 0）。其上限（β$R_1$ → ∞）是 $2 - V_{out} = V_{TH}(V_{out})$ 的解：计入体效应（body effect）时为 1.09 V（不计时为 1.3 V）。
- 从该点起直到 $V_{in} = 3$ V 都保持平坦。
