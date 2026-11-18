$V_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = V_{T1} + V_{DS1}(\mathrm{sat}) + V_{DS5}(\mathrm{sat})$（$V_{SS} = 0$）。

$V_{IC}(\max) = v_3 + V_{T1} = V_{CM} + V_{T1}$（M1 饱和），由于负载要求 $V_{CM} \le V_{DD} - V_{SD3}(\mathrm{sat})$，其最大为 $V_{DD} - V_{SD3}(\mathrm{sat}) + V_{T1}$。在电源范围内，$V_{IC}(\max) = \min(V_{DD},\,V_{CM} + V_{T1})$，当 $V_{CM} \ge V_{DD} - V_{T1}$ 时它等于 $V_{DD}$（这是可能的，因为通常 $V_{T1} > V_{SD3}(\mathrm{sat})$；这是书中的答案）。

最小电源电压（理想共模反馈，信号通路 M1–M5）：$V_{DD}(\min) = V_{DS1}(\mathrm{sat}) + V_{DS5}(\mathrm{sat}) + \max[V_{T1},\,V_{SD3}(\mathrm{sat})] = V_{T1} + V_{DS1}(\mathrm{sat}) + V_{DS5}(\mathrm{sat}) \approx V_T + 2V_{DS}(\mathrm{sat})$，对应通常情形 $V_{T1} \ge V_{SD3}(\mathrm{sat})$。

- 下限：源极节点 $V_{IC} - V_{GS1}$ 必须保持在 $V_{DS5}(\mathrm{sat})$ 以上，其中 $V_{GS1} = V_{T1} + V_{DS1}(\mathrm{sat})$。
- 上限：只要 $V_{G1} \le V_{D1} + V_{T1}$，M1 就保持饱和。共模反馈使 $v_3 = v_4 = V_{CM}$，与输入共模无关。
- 在 0 到 $V_{DD}$ 内范围为零：令 $V_{IC}(\min) = V_{DD}$ 得 $V_{DD} = V_{T1} + V_{DS1}(\mathrm{sat}) + V_{DS5}(\mathrm{sat})$；此时 M1 要求 $V_{CM} \ge V_{DS1}(\mathrm{sat}) + V_{DS5}(\mathrm{sat})$，M3 要求 $V_{CM} \le V_{DD} - V_{SD3}(\mathrm{sat})$，当 $V_{T1} \ge V_{SD3}(\mathrm{sat})$ 时二者相容（否则采用上面的 max 形式）。无论把 $V_{CM}$ 视为固定值（位于该窗口内）还是可选值，这一结论都成立。
- 若计入共模反馈电路的器件（MC3 和 MC4 均为二极管连接；MC1、MC2 的栅极分别接 $V_{CM}$ 和检测到的输出共模），它们增加了条件 $V_{CM} \ge V_{TC1} + V_{DSC1}(\mathrm{sat}) + V_{DSC5}(\mathrm{sat})$（MC5）和 $V_{CM} \le V_{DD} - |V_{TP}| - V_{SDC3}(\mathrm{sat}) + V_{TC1}$（MC1）。这时存在电源轨内工作点的最小电源电压为 $\max\{V_{T1}+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat}),\ \max[V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat}),\,V_{TC1}+V_{DSC1}(\mathrm{sat})+V_{DSC5}(\mathrm{sat})] + \max[V_{SD3}(\mathrm{sat}),\,|V_{TP}|+V_{SDC3}(\mathrm{sat})-V_{TC1}]\}$；若阈值匹配且饱和电压相等，该值为 $V_T + 3V_{DS}(\mathrm{sat})$，而此时电源轨内的范围已约有 $V_{SD3}(\mathrm{sat})$ 宽，因此按这种理解不会出现严格为零宽度的范围。
