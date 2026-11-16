在 $t = 0$ 时两个节点都下降 $V_{TH}$，然后保持不变：当 $t > 0$ 时，$V_X = V_{DD} - V_{TH}$，$V_Y = V_{DD} - V_{GS1} - V_{TH} = V_{DD} - 2V_{TH} - \sqrt{2I_1/\beta}$。
- X 只与栅极和 $C_1$ 相连，因此 $V_X - V_Y = V_{GS1} = V_{TH} + \sqrt{2I_1/\beta}$ 保持不变，$V_X$ 跟随 $V_Y$。
- 阶跃之后，$M_1$ 的 $V_{GS}$ 不变，$V_{DS}$ 增大（$V_{GS1} + V_{TH}$），因此它保持在饱和区（saturation region），恰好流过 $I_1$（λ = 0）。没有净电流流入 $C_2$，电压保持不变；这里假设 $I_1$ 仍有足够的电压余度（headroom）。
