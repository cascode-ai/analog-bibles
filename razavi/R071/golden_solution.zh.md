$V_{out} = 1$ V 时：$I_D = 1$ mA，$g_m \approx 5.18$ mS。$V_{out} = 2.5$ V 时：$I_D = 0.25$ mA，$g_m \approx 2.59$ mS。

- $I_D = (V_{DD} - V_{out})/R_D$。
- $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$：$\sqrt{2(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 5.18$ mS，以及 $\sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59$ mS。在两种情况下 $M_1$ 都处于饱和区（saturation region），因为过驱动电压（overdrive voltage）0.386 V 和 0.193 V 都低于 $V_{out}$。

## 评分说明

+2：四个数值（两处 $I_D$ 和两处 $g_m$）均在 ±3% 内。+1：只有一个数值因计算小误差偏离。0：电流正确但跨导错误，或反之。若明确断言使用错误的 $g_m$ 公式，或把电流写成不同于 $(V_{DD}-V_{out})/R_D$ 的表达式，则扣 2 分。
