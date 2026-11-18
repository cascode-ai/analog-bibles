$V_{Bias} = V_T + 2V_{ON} \approx 1.55$ V 时得到最小的 $V_{min} = 2V_{ON} \approx 0.85$ V；$R_{out} \approx g_{m4}r_{ds4}r_{ds2} \approx 29$ MΩ。

- 每个器件流过 100 µA：$V_{ON} = \sqrt{2\times100\ \mu/(110\ \mu\times10)} = 0.426$ V，$V_{GS} = 1.126$ V。M1 的栅极（M3 的漏极）稳定在 $V_{GS1}$ = 1.126 V。
- M3 与 M4 的电流和尺寸相同，因此两者的源极都在 $V_{Bias} - V_{GS}$，这就是 M1 和 M2 的 $V_{DS}$。要使 M1 和 M2 保持饱和，需要 $V_{Bias} - V_{GS} \ge V_{ON}$，因此最小偏置为 $V_{Bias} = V_T + 2V_{ON} = 1.553$ V。
- 此时 $V_{min} = V_{DS2} + V_{ON4} = V_{Bias} - V_T = 2V_{ON} = 0.853$ V。
- M3 保持饱和：$V_{DS3} = 1.126 - 0.426 = 0.70$ V > $V_{ON}$。（可用的偏置范围上限为 $V_T + V_{GS1}$ = 1.83 V。）
- $g_m = \sqrt{2\times110\ \mu\times10\times100\ \mu} = 469\ \mu\mathrm{A/V}$，$r_{ds} = 1/(0.04\times100\ \mu) = 250$ kΩ。$R_{out} = r_{ds2} + r_{ds4} + g_{m4}r_{ds4}r_{ds2} = 0.5 + 29.3 = 29.8$ MΩ（只取主导项时 ≈ 29.3 MΩ）。
