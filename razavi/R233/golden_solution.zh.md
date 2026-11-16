当 $V_{DD} < |V_{THP}| = 0.8$ V 时，$V_{out} = 0$；$V_{DD}$ 更大时输出上升，一旦 $M_1$ 进入饱和，即 $V_{DD} \ge |V_{GS2}| + (V_{in} - 0.7)$ 时，输出就恒定为 $V_{out,max} = R_L\dfrac{(W/L)_3}{(W/L)_2}\cdot\tfrac12\mu_nC_{ox}\Big(\dfrac{W}{L}\Big)_1(V_{in}-0.7)^2$（前提是 $M_3$ 处于饱和，$V_{DD} - V_{out} \ge |V_{GS3}| - 0.8$）。

- 二极管连接（diode-connected）的 $M_2$ 需要 $|V_{GS2}| > 0.8$ V 才能导通，因此在 $V_{DD} = 0.8$ V 以下没有电流：$I_{D1} = I_{D3} = 0$，$V_{out} = 0$。
- 当 $V_{DD}$ 略高于 0.8 V 时，$M_1$（栅极接固定的 $V_{in}$）处于线性区（triode region），$V_{DS1} = V_{DD} - |V_{GS2}|$ 很小；支路电流随 $V_{DD}$ 增大，$M_3$ 复制该电流：$V_{out} = R_L\frac{(W/L)_3}{(W/L)_2}I_{D1}$ 从零开始上升。
- 当 $V_{DS1}$ 达到 $V_{in} - 0.7$ 时，$M_1$ 进入饱和，$I_{D1} = \tfrac12\mu_nC_{ox}(W/L)_1(V_{in}-0.7)^2$ 不再依赖于 $V_{DD}$：从这里到 3 V，$V_{out}$ 保持平坦。
- 如果 $R_L$ 太大，使得 $V_{out,max}$ 留给 $M_3$ 的电压小于其过驱动电压（overdrive voltage），$M_3$ 就会进入线性区，$V_{out}$ 略低于 $V_{DD}$ 并跟随其变化，直到 $V_{DD}$ 大到足以使 $M_3$ 饱和；平台值不变。
