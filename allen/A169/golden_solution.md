# Golden Solution - A169

## Reference answer

$R_{s2} = \dfrac{r_{ds2} + R_D}{1 + g_{m2}r_{ds2}}$, where $R_D$ is the small-signal resistance from the drain of M2 to ac ground. With a cascode current source, $R_D \approx g_mr_{ds}^2$, so $R_{s2} \approx g_mr_{ds}^2/(g_mr_{ds}) = r_{ds}$.

- Derivation: inject a test current $i$ into the source of M2 (gate at ac ground). It flows through M2 and out of the drain into $R_D$, so $v_d = iR_D$. The drain-to-source current of M2 is $-i = g_{m2}(0 - v_s) + (v_d - v_s)/r_{ds2}$; substituting $v_d$ gives $v_s(1+g_{m2}r_{ds2}) = i(r_{ds2}+R_D)$.
- Simple load: $R_D = r_{ds3}$ ≈ $r_{ds}$ → $R_{s2} \approx 2r_{ds}/(g_mr_{ds}) = 2/g_m$.
- Cascode load (current source M4 with cascode M3'): $R_D = r_{ds3'} + r_{ds4} + g_{m3'}r_{ds3'}r_{ds4} \approx g_mr_{ds}^2$ → $R_{s2} = (r_{ds} + g_mr_{ds}^2 + r_{ds})/(1+g_mr_{ds}) \approx r_{ds}$.
- Principle: the resistance seen looking into a source is set by what is connected at the drain, divided by about $g_mr_{ds}$.

## Grading notes

+2: the general relation $R_{s2} = (r_{ds2}+R_D)/(1+g_{m2}r_{ds2})$ (derived or correctly used) and $R_D \approx g_mr_{ds}^2$ for the cascode source, giving $R_{s2} \approx r_{ds}$. +1: correct conclusion from the intuitive current-division argument without the formula, or a minor algebra slip. 0: only the simple-load case ($2/g_m$) worked out. −2 (asserted as fact): $R_{s2} = 1/g_{m2}$ regardless of the drain load, or $R_D$ for the cascode source taken as $r_{ds}$.
