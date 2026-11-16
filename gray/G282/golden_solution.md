# Golden Solution - G282

## Reference answer

$T \approx 1638$, $v_o/v_i \approx 5.996$, $R_{in} \approx 1.64$ GΩ, $R_{out} \approx 0.060$ Ω.

- Feedback network: $f = h_{12f} = R_1/(R_1+R_2) = 1/6$; $h_{11f} = R_1\|R_2 = 833$ Ω (in series with the op-amp input); $h_{22f} = 1/(R_1+R_2)$ (6 kΩ across the output).
- Basic amplifier: $v_x = v_i\,R_i/(R_i + 833) = 0.99917\,v_i$; $v_o = a_vv_x\cdot6\text{k}/6.1\text{k}$ → $a = 10^4\times0.99917\times0.98361 = 9828$.
- $T = af = 1638$; $A = 9828/1639 = 5.9963$.
- $R_{in} = (R_i + 833)(1+T) = 1.0008\text{ M}\times1639 = 1.64$ GΩ.
- $R_{out} = (R_o\|6\text{k})/(1+T) = 98.4/1639 = 0.060$ Ω.

## Grading notes

Four quantities. +2: $T$ 1630–1645 (feedback-network loading included), gain 5.995–5.997 (or ≈ 6 with the 0.06% error stated), $R_{in}$ 1.63–1.65 GΩ (i.e. $(R_i + R_1\|R_2)(1+T)$), $R_{out}$ 0.058–0.062 Ω. +1: one value off by a slip, or the feedback-network loading neglected ($a = a_v$, giving $T$ ≈ 1667 and $R_{in}$ ≈ 1.668 GΩ) with otherwise correct method. 0: two of four right. −2 (asserted as fact): $R_{in}$ divided by $(1+T)$, $R_{out}$ multiplied, $f = R_2/(R_1+R_2)$, or gain $R_2/R_1 = 5$.
