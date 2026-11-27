$\Delta V_{GS} \approx 90$ mV（每十倍电流）；$g_m \approx 0.26$ mS（256 µS）。
- $I_2/I_1 = \exp(\Delta V_{GS}/\zeta V_T) = 10$，因此 $\Delta V_{GS} = \zeta V_T\ln 10 = 1.5 \times 26\ \mathrm{mV} \times 2.303 \approx 89.8$ mV（若 $V_T$ = 25 mV，则为 86 mV）。
- $g_m = \partial I_D/\partial V_{GS} = I_D/(\zeta V_T) = 10\ \mu\mathrm{A}/(1.5 \times 26\ \mathrm{mV}) \approx 256\ \mu$S（≈ 1/3.9 kΩ；若 $V_T$ = 25 mV，则为 267 µS）。

## 评分说明

两部分各占一半分值。

- 接受 $V_T$ 在 25–26 mV 之间。$\Delta V_{GS}$ 的合理范围为 86–90 mV，$g_m$ 的合理范围为 256–267 µS，超出范围可接受约 ±3% 的误差。
- +2：两问都正确，且使用了 $\zeta V_T$ 与 $\ln 10$。
- 0：一问正确，另一问错误。
- −2（明确作为结论）：漏掉或倒置 $\zeta$，例如写成每十倍 60 mV 或 40 mV；漏掉 $\ln 10$ 而写成 39 mV；或在亚阈值区使用平方律跨导公式。
