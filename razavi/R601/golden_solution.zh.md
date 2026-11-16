只出现二次谐波（second harmonic），因为平方律漏极电流严格是二次函数：$\mathrm{HD2} = V_m/[4(V_{GS}-V_{TH})] \approx 5.8\%$。把 $W/L$ 加倍使其升高到 ≈ 8.2%（×√2）；把 $I$ 加倍使其降低到 ≈ 4.1%（÷√2）。
- 过驱动电压（overdrive voltage）：$V_{GS}-V_{TH} = \sqrt{2I/(\mu_nC_{ox}W/L)} = \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times40)} = 0.432$ V。
- $I_D = \tfrac12\mu_nC_{ox}\tfrac WL(V_{ov} + V_m\cos\omega t)^2 = I + \mu_nC_{ox}\tfrac WL V_{ov}V_m\cos\omega t + \tfrac14\mu_nC_{ox}\tfrac WL V_m^2[1+\cos 2\omega t]$，因此 $\mathrm{HD2} = V_m/(4V_{ov}) = 0.1/(4\times0.432) = 5.79\%$（THD = HD2；按功率之比为 $3.4\times10^{-3}$，即 −24.7 dB）。输出电压 $V_{DD} - R_DI_D$ 具有相同的比值。
- W/L 加倍：$V_{ov} = 0.305$ V → HD2 = 8.19%。I 加倍：$V_{ov} = 0.611$ V → HD2 = 4.09%。失真只取决于过驱动电压，$\propto\sqrt{(W/L)/I}$。
