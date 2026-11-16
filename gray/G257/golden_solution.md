# Golden Solution - G257

## Reference answer

(1) $\mathcal{R} \approx 3904$, $v_o/i_i \approx -9.996$ kΩ, $Z_{in} \approx 3.72$ Ω, $Z_{out} \approx 1.16$ Ω. (2) $Z_{out} \approx 12.8$ Ω.

- $g_m = 3.464$ mS, $r_o = 50$ kΩ, each drain node $R_D\|r_o = 4545$ Ω.
- $\mathcal{R}$ (input open, $i_i = 0$): a test current $i_t$ replacing $g_{m1}v_{gs1}$ gives $v_{d1} = -4545\,i_t$, then gains of $-15.75$ for $M_2$ and $-15.75$ for $M_3$ (no current in $R_F$ because the gate node is otherwise open, so $v_{gs1} = v_o$). $\mathcal{R} = (g_m\cdot4545)^3 = 15.75^3 = 3904$.
- $A_\infty = -R_F = -10$ kΩ; $d$ ($g_{m1} = 0$, so $M_2$, $M_3$ get no signal): $i_i$ flows through $R_F$ into 4545 Ω, $d = +4545$ Ω.
- $A = -10\text{k}\cdot\frac{3904}{3905} + \frac{4545}{3905} = -9997.4 + 1.2 = -9996$ Ω.
- $Z_{in}$: $Z(g_{m1}{=}0) = R_F + 4545 = 14.55$ kΩ, $\mathcal{R}$(shorted) = 0, $\mathcal{R}$(open) = 3904 → 3.72 Ω. $Z_{out}$: $Z(g_{m1}{=}0) = 4545$ Ω, $\mathcal{R}$(shorted) = 0 → $4545/3905 = 1.164$ Ω.
- (2) With 1 kΩ at the input: $M_3$ load $4545\|11\text{k} = 3216$ Ω, $v_{gs1} = v_o/11$, $\mathcal{R} = 15.75^2\times(3.464\text{m}\cdot3216)/11 = 251$; $Z_{out} = 3216/252 = 12.76$ Ω.

## Grading notes

Two parts, weighted 75% (part 1) / 25% (part 2). +2: $\mathcal R$ ≈ 3900 (±3%), gain ≈ −9.996 kΩ (or ≈ −10 kΩ with $d$ shown negligible), $Z_{in}$ ≈ 3.72 Ω, $Z_{out}$ ≈ 1.16 Ω, and ≈ 12.8 Ω with the source resistance. Note that $\mathcal R$ (3904) legitimately differs from the two-port loop gain (2684); quoting 2684 as the return ratio is a critical error for that quantity. +1: one quantity off by a slip. 0: about half of the quantities right. −2 (asserted as fact): wrong sign of the gain, Blackman's ratio inverted, or $R_F$ loading included in $\mathcal R$ with the input open in a way that changes it by more than 20%.
