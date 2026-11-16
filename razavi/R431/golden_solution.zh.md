约 0.51 V：$V_{b1} - V_{TH4} = 1.0\ \mathrm{V} \le V_{out} \le V_{b1} - V_{GS4} + V_{TH2} \approx 1.51$ V，即摆幅为 $V_{TH} - V_{OD4}$。

- $M_1$–$M_4$ 的 $V_{OD} = 0.193$ V（$W/L = 200$，0.5 mA），$V_{GS4} = 0.893$ V。
- 下限：$M_4$ 饱和要求 $V_{out} \ge V_{b1} - V_{TH4} = 1.0$ V。
- 上限：$M_2$ 的漏极电压为 $V_{b1} - V_{GS4} = 0.807$ V；其栅极接 $V_{out}$，当 $V_{out} \le 0.807 + 0.7 = 1.507$ V 时 $M_2$ 保持饱和。
- PMOS 一侧是低电压共源共栅（low-voltage cascode）结构，允许输出高达 $V_{DD} - |V_{OD8}| - |V_{OD6}| \approx 2.28$ V，不构成约束。尾电流源处 $V_P = V_{out} - V_{GS2} \ge 0.1$ V。
- 摆幅 ≈ 1.507 − 1.0 = 0.51 V。
