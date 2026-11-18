$v_{G1}(\max) = V_{DD} - V_{SG3} + V_{T1} = V_{DD} - |V_{T3}| - \sqrt{\dfrac{I_{SS}}{K'_P(W/L)_3}} + V_{T1}$

$v_{G1}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = \sqrt{\dfrac{2I_{SS}}{K'_N(W/L)_5}} + V_{T1} + \sqrt{\dfrac{I_{SS}}{K'_N(W/L)_1}}$

- 上限：M1 的漏极被流过 $I_{SS}/2$ 的 M3 钳在比 $V_{DD}$ 低一个二极管压降处：$V_{SG3} = |V_{T3}| + \sqrt{I_{SS}/\beta_3}$。当 $V_{G1} > V_{D1} + V_{T1}$ 时 M1 退出饱和。两个半边的二极管负载相同，因此 M2 支路给出相同的上限。
- 下限：公共源极节点 $V_{G1} - V_{GS1}$ 必须保持在 $V_{DS5}(\mathrm{sat}) = \sqrt{2I_{SS}/\beta_5}$ 以上（M5 流过 $I_{SS}$）。M1 流过 $I_{SS}/2$，因此 $V_{GS1} = V_{T1} + \sqrt{I_{SS}/\beta_1}$。
