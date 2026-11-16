$546\ \Omega \lesssim R_1 \lesssim 1.4\ \mathrm{k\Omega}$；$V_{in}$ 从 ≈ 1.31 V 到 ≈ 1.82 V，此为计入体效应（body effect）的结果；不计体效应时为 1.25–1.67 V。

- $|I_{D4}| = I_{D2}$，因此 $R_2$ 中没有电流：$V_{out} = V_B$（即 $R_1$–$R_2$ 连接点的电压），$R_1$ 中流过 $I_{D1}$：$V_{out} = V_B = 0.5\ \mathrm{mA}\cdot R_1$。
- $M_2$：$V_{GS2} = 0.7 + \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu \times 100)} = 0.973$ V，因此栅极节点（$M_1$ 的漏极）的电压为 $V_A = 0.973$ V；每个 NMOS 的过驱动电压（overdrive voltage）均为 0.273 V。
- $M_2$ 饱和：$V_{out} \ge V_A - V_{TH2} = 0.273$ V → $R_1 \ge 546\ \Omega$。
- $M_1$ 饱和：$V_A - V_B \ge 0.273$ V → $V_B \le 0.70$ V → $R_1 \le 1.40\ \mathrm{k\Omega}$。$M_4$ 要求 $V_{out} \le 3 - 0.51 = 2.49$ V，$M_3$ 的裕量很大，因此上限由 $M_1$ 决定；若允许 $M_1$ 进入线性区（triode region），则只要 $V_B < V_A$，即 $R_1 < 1.95$ kΩ，这些电流仍能流通。
- $V_{in} = V_B + V_{TH1}(V_B) + 0.273$ V：当 $R_1 = 546\ \Omega$ 时，$V_B = 0.273$ V，$V_{TH1} = 0.761$ V → $V_{in} = 1.31$ V；当 $R_1 = 1.4$ kΩ 时，$V_B = 0.70$ V，$V_{TH1} = 0.842$ V → $V_{in} = 1.82$ V。
