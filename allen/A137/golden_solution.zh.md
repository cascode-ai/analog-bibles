$V_{IC}(\max) = V_{DD} - V_{SD5}(\mathrm{sat}) - V_{SG1} = V_{DD} - \sqrt{\dfrac{2I_{DD}}{K'_P(W_5/L_5)}} - |V_{T1}| - \sqrt{\dfrac{I_{DD}}{K'_P(W_1/L_1)}}$

$V_{IC}(\min) = V_{SS} + V_{GS3} - |V_{T1}| = V_{SS} + V_{T3} + \sqrt{\dfrac{I_{DD}}{K'_N(W_3/L_3)}} - |V_{T1}|$

- 上限：随着栅极电压升高，公共源极节点 $V_{S1} = V_{IC} + V_{SG1}$ 升高，直到 M5 在 $V_{S1} = V_{DD} - V_{SD5}(\mathrm{sat})$ 处退出饱和。M5 流过 $I_{DD}$，故 $V_{SD5}(\mathrm{sat}) = \sqrt{2I_{DD}/\beta_5}$。M1 流过 $I_{DD}/2$，故 $V_{SG1} = |V_{T1}| + \sqrt{I_{DD}/\beta_1}$。
- 下限：只要 $V_{SD1} \ge V_{SG1} - |V_{T1}|$，即 $V_{D1} \le V_{G1} + |V_{T1}|$，M1 就保持饱和。M1 的漏极被二极管连接的 M3（$I_{DD}/2$）钳在 $V_{SS} + V_{GS3}$，故 $V_{IC} \ge V_{SS} + V_{GS3} - |V_{T1}|$。在平衡状态下（输出处于电流镜节点电压），M2/M4 支路给出相同的限制。
- 忽略 M1、M2 的体效应（衬底与各自源极相连）；若衬底接 $V_{DD}$，$|V_{T1}|$ 将与 $V_{SB}$ 有关。
