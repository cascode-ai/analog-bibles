# Golden Solution - G277

## Reference answer

$\mathcal{R} \approx 42.8$, $v_o/i_i \approx -1.93$ kΩ (−1929 Ω), $R_{in} \approx 51.3$ Ω, $R_{out} \approx 35.2$ Ω (exact).

- $\mathcal{R}$: a test current into the collector node sees $R_L\|r_o\|(R_F + r_\pi) = 1960.8\|7.2\text{k} = 1541$ Ω; $v_{be} = v_c\,r_\pi/(r_\pi+R_F) = 0.722\,v_c$; $\mathcal{R} = g_m\times1541\times0.722 = 42.8$.
- $A_\infty = -R_F = -2$ kΩ; $d$ ($g_m = 0$): $v_{be} = i_i[r_\pi\|(R_F + R_L\|r_o)] = 2248\,i_i$, $v_o = v_{be}\cdot1960.8/3960.8$ → $d = 1113$ Ω.
- $A = -2000\cdot\frac{42.8}{43.8} + \frac{1113}{43.8} = -1954 + 25.4 = -1929$ Ω.
- $R_{in} = 2248/43.8 = 51.3$ Ω; $R_{out} = 1541/43.8 = 35.2$ Ω.

## Grading notes

Four quantities. +2: $\mathcal R$ 41–44.5, gain −1.90 to −1.96 kΩ, $R_{in}$ 49.5–53 Ω, $R_{out}$ 34–36.5 Ω, with $d$ included or shown small (here $d/(1+\mathcal R)$ is ≈ 1.3% of the gain; omitting it is a minor imprecision). +1: one value off by a slip. 0: two of four right. −2 (asserted as fact): $r_\pi$ ignored, wrong-sign gain, or Blackman ratio inverted.
