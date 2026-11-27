# Golden Solution - R067

## 参考答案

$A_v = -g_mR_D \approx -10.35$。

- $g_m = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18$ mS，对应的过驱动电压（overdrive voltage）为 0.386 V，$V_{in} = 1.086$ V。
- $V_{out} = 3 - 2 = 1$ V > 0.386 V，因此 $M_1$ 确实处于饱和区。
- $A_v = -5.18\ \mathrm{mS} \times 2\ \mathrm{k\Omega} \approx -10.35$。

## 评分说明

+2：$A_v=-10.35$，误差在 ±3% 内。+1：幅值正确但漏写反相负号，或只有一次不影响方法和主要结论的舍入误差。0：公式和方法基本正确，但 $g_m$ 或增益存在实质数值错误。−2（明确断言错误结论）：使用错误的 $g_m$ 公式，例如 $\mu_nC_{ox}(W/L)I_D$ 或 $2I_D/V_{GS}$，或者把增益写成 $R_D/r_O$ 类型的表达式。
