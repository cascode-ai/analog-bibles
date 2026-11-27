# Golden Solution - R066

## 参考答案

$V_{out}$ 的范围是从 $V_{GS1} - V_{TH1} \approx 0.27$ V 到 $V_{DD} - |V_{GS2} - V_{TH2}| \approx 1.98$ V，摆幅 ≈ 1.71 V。

- $M_1$：过驱动电压（overdrive voltage）为 $\sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 100)} = 0.273$ V；当 $V_{out} \ge 0.273$ V 时饱和。
- $M_2$：过驱动电压为 $\sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 25)} = 1.021$ V；当 $V_{out} \le 3 - 1.021 = 1.979$ V 时饱和。
- 摆幅 $= 3 - 0.273 - 1.021 \approx 1.71$ V。

## 评分说明

+2：摆幅约为 1.71 V（±3%），并且上下限均正确，约为 0.27 V 和 1.98 V。+1：给出正确表达式 $V_{DD}-V_{ov1}-|V_{ov2}|$，但有一处数值小误差。0：只得到两个限值中的一个。−2（明确断言错误结论）：把阈值电压计入上下限，例如 $V_{out,min}=V_{GS1}$ 或 $V_{out,max}=V_{DD}-|V_{GS2}|$，或者把 $(W/L)_2$ 取为 50/0.5、对 PMOS 使用 $\mu_nC_{ox}$。
