# Golden Solution - G258

## Reference answer

(1) $\mathcal{R} \approx 4.0\times10^5$, $v_o/i_i \approx -10.0$ kΩ (−9999.97 Ω), $Z_{in} \approx 9.6$ mΩ, $Z_{out} \approx 8.7$ mΩ. (2) $Z_{out} \approx 39$ mΩ.

- $g_m = 38.46$ mS, $r_\pi = 5.2$ kΩ, $r_o = 50$ kΩ. Collector nodes of $Q_1$, $Q_2$: $5\text{k}\|50\text{k}\|r_\pi = 2425$ Ω (stage gain magnitude 93.3).
- $\mathcal{R}$ (input open): $Q_3$ drives $4545\|(R_F + r_{\pi1}) = 4545\|15.2\text{k} = 3499$ Ω; $v_{be1} = v_o\,r_{\pi1}/(r_{\pi1}+R_F) = 0.342\,v_o$. $\mathcal{R} = 93.3^2\times(38.46\text{m}\cdot3499)\times0.342 = 4.01\times10^5$.
- $A_\infty = -10$ kΩ; $d$: $i_i$ into $r_{\pi1}\|(R_F + 4545) = 3831$ Ω, $v_o = 3831\,i_i\times4545/14{,}545 = 1197\,i_i$ → $d = 1.2$ kΩ (negligible after division by $1+\mathcal R$). $A = -9999.97$ Ω.
- $Z_{in} = 3831/(1+\mathcal{R}) = 9.56$ mΩ; $Z_{out} = 3499/(1+\mathcal{R}) = 8.73$ mΩ.
- (2) With 1 kΩ: input node $r_{\pi1}\|1\text{k} = 839$ Ω, $Q_3$ load $4545\|10.84\text{k} = 3204$ Ω, $v_{be1}/v_o = 0.0774$; $\mathcal{R} = 93.3^2\times123.2\times0.0774 = 8.29\times10^4$; $Z_{out} = 3204/(1+\mathcal R) = 38.6$ mΩ.

## Grading notes

Two parts, 75% / 25%. +2: $\mathcal R$ ≈ 4.0×10⁵ (±5%), gain ≈ −10 kΩ, $Z_{in}$ ≈ 9.6 mΩ, $Z_{out}$ ≈ 8.7 mΩ, and ≈ 39 mΩ with the 1-kΩ source (±5%). The return ratio legitimately differs from the two-port $T$ (≈ 3.58×10⁵); either value of the impedances agrees. +1: one quantity off by a slip. 0: about half right. −2 (asserted as fact): impedances multiplied by $(1+\mathcal R)$, wrong sign of gain, or $r_\pi$ loading ignored so that $\mathcal R$ is off by more than ×2.
