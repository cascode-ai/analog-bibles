# Golden Solution - R549

## Reference answer

$n \approx 6.9$ (≈ 7) and $R_1 = R_2 \approx 8$ kΩ (7.9 kΩ with the "$V_{BE} + 17.2V_T$" rule) when −1.5 mV/K is taken as the TC of $V_{BE2}$; ≈ 9 kΩ when it is taken as the TC of $V_{BE1}$. The question does not say which transistor it refers to, and the two TCs differ by $(k/q)\ln n \approx 0.17$ mV/K.
- $V_{R3} = V_T\ln n = 50$ mV, so $\ln n = 50/25.85 = 1.93$ and $n = 6.9$.
- $V_{out} = V_{BE2} + (1 + R_2/R_3)V_T\ln n$. The PTAT term has TC $(1 + R_2/R_3)(50\ \mathrm{mV}/300\ \mathrm{K}) = (1 + R_2/R_3)(0.167\ \mathrm{mV/K})$, which must equal +1.5 mV/K. So $1 + R_2/R_3 = 9$ and $R_2 = 8$ kΩ. (With $(1 + R_2/R_3)\ln n = 17.2$: $R_2 = 7.9$ kΩ.)
- Equivalently, $V_{out} = V_{BE1} + IR_1 = V_{BE1} + (R_1/R_3)V_T\ln n$ (exact). Applying −1.5 mV/K to $V_{BE1}$ gives $R_1/R_3 = 1.5/0.167 = 9$, i.e. $R_1 = R_2 \approx 9$ kΩ.
- $R_1 = R_2$ also carries 50 μA ($V_X = V_Y$). $V_{out} \approx V_{BE2} + 0.45$ V ≈ 1.2–1.25 V.

## Grading notes

+2: $n$ in 6.5–7.3 (or rounded to 7) and $R_1 = R_2$ with the correct relations ($V_T\ln n = I R_3$ and the TC balance), either in 7.5–8.5 kΩ (−1.5 mV/K applied to $V_{BE2}$ in $V_{out} = V_{BE2} + (1 + R_2/R_3)V_T\ln n$, or $(1 + R_2/R_3)\ln n \approx 17.2$) or in 8.5–9.2 kΩ (−1.5 mV/K applied to $V_{BE1}$ in the equivalent $V_{out} = V_{BE1} + (R_1/R_3)V_T\ln n$). +1: both values with one arithmetic slip. 0: $n$ right but $R_2 \approx 8.9$–9 kΩ from the incorrect expression $V_{out} = V_{BE2} + (R_2/R_3)V_T\ln n$ (the "1 +" genuinely dropped). -2 (asserted as fact): $n$ from a wrong relation (e.g., $\ln n = 17.2$, or $n = 50\ \mathrm{mV}/V_T$), $R_2$ off by a large factor, or a design that ignores the zero-TC condition.
