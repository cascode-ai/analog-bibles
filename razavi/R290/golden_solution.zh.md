$(W/L)_P \approx 326$（例如 $163\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$）；最大峰峰值摆幅 ≈ 2.2 V（输出在 ≈ 0.39 V 与 2.6 V 之间）。
- 只要 $V_{SD} \ge |V_{GS}| - |V_{TH}|$，PMOS 就保持饱和，因此 $V_{out,max} = V_{DD} - |V_{GS,P} - V_{TH,P}|$；要使 $V_{out,max} = 2.6$ V，过驱动电压（overdrive voltage）需为 0.4 V。
- $1\ \mathrm{mA} = \tfrac12(38.4\ \mu\mathrm{A/V^2})(W/L)_P(0.4)^2 \Rightarrow (W/L)_P = 325.5$。
- 下限：$M_1$ 饱和要求 $V_{out} \ge V_{GS1} - V_{TH1} = \sqrt{2I_D/[\mu_nC_{ox}(W/L)_1]} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V（输入信号很小）。
- 摆幅：$2.6 - 0.386 \approx 2.21$ V（峰峰值）。
（若在 $V_{SD} = 0.4$ V 处计入 $(1 + \lambda_P V_{SD})$，宽长比将降至 ≈ 301。）
