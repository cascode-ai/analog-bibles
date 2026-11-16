每个输出可以在 $V_{DD} = 3$ V 与 $V_{in,CM} - V_{TH1} \approx 0.44$ V 之间摆动，即单端 ≈ 2.56 V 峰峰值，或差分 ≈ 5.1 V 峰峰值（以 ≈ 1.72 V 的输出共模电平为中心）。不考虑体效应（body effect）时：0.5 V、2.5 V 和 5.0 V。
- $M_1$、$M_2$ 必须保持在饱和区（saturation region）：$V_{out} \ge V_{in} - V_{TH1}$；输入摆幅很小时即为 $V_{in,CM} - V_{TH1}$。上限是 $V_{DD}$（晶体管电流降为零时的输出）。
- 0.25 mA 时的过驱动电压（overdrive voltage）：$\sqrt{2(0.25\ \mathrm{mA})/(134\ \mu \times 100)} = 0.193$ V。由 $V_P = 1.2 - 0.193 - V_{TH1}$ 和 $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - \sqrt{0.9})$ 得 $V_P \approx 0.25$ V，$V_{TH1} \approx 0.756$ V，因此 $V_{out,min} \approx 0.444$ V。
- 每个输出的摆幅：3 − 0.444 ≈ 2.56 V pp；差分摆幅 $2 \times 2.56 \approx 5.1$ V pp（要求输出共模电平位于中间，$(3 + 0.444)/2 \approx 1.72$ V）。
