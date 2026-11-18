$R_o \approx 367$ MΩ。

- $V_{ov} = \sqrt{2I/(k'W/L)} = \sqrt{200\ \mu/(194\ \mu\times121.95)} = 0.092$ V；$g_m = 2I/V_{ov} = 2.18$ mS；$r_o = 1/(\lambda I) = 410$ kΩ。
- $R_o = r_{o2}(1 + g_{m2}r_{o1}) + r_{o1} = 410\ \mathrm{k}\times(1 + 892) + 410\ \mathrm{k} \approx 367$ MΩ。
- $I_{OUT}$–$V_{OUT}$（0–3 V）：当 $V_{OUT} < V_{ov} \approx 0.09$ V 时 $M_1$ 和 $M_2$ 都处于线性区（triode region）（电流急剧上升）；直到 $V_{OUT(\min)} = V_t + 2V_{ov} \approx 0.78$ V 之前，$M_1$ 处于有源区而 $M_2$ 处于线性区（电流较缓慢地升向 100 µA）；高于此值两管都处于有源区，$I_{OUT} \approx 100$ µA，仅以约 2.7 nA/V（1/367 MΩ）的速率上升。

仿真（level-1 模型：VTO = 0.6，KP = 194u，LAMBDA = 0.0244，取 L = 0.82 µm，或取 L = 1 µm 并设 LD = 0.09 µm；GAMMA = 0）应能重现这些数值。
