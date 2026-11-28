# 参考答案 - R077

## 参考答案

令 $V_{ov}=V_{GS}-V_{TH}$。图中各点满足 $V_{ov}>0$，并假设 $V_{DS}\geq V_{ov}$。

$I_D$ 和 $L$ 固定时，$r_O=1/(\lambda I_D)$ 为常数，且 $g_m=\sqrt{2\mu C_{ox}(W/L)I_D}$。

$$g_mr_O=\frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}}.$$

本征增益随 $\sqrt{W/L}$ 增大，$W/L$ 增至四倍时增益翻倍。

![本征增益 g_m r_O](/q/R077/solution-gain.zh.svg)

## 评分说明

+2：给出随 $W/L$ 增大的 $\sqrt{W/L}$ 曲线，并说明 $g_m\propto\sqrt{W/L}$、$r_O$ 恒定。+1：趋势和理由正确但未写幂律，或写出幂律但缺少理由。0：趋势增大但幂律错误，例如写成线性，并以保留态度表述。−2（明确断言错误结论）：声称增益恒定、下降或与 $W/L$ 成线性关系。
