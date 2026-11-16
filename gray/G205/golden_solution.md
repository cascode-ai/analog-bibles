# Golden Solution - G205

## Reference answer

$v_o/v_i = -\dfrac{\beta(\beta + 1)R_L}{R_S + r_{\pi1} + (\beta + 1)r_{\pi2}} \approx -48.7$.

- $r_{\pi1} = 260\ \mathrm{k\Omega}$, $r_{\pi2} = 2.6\ \mathrm{k\Omega}$; $R_i = r_{\pi1} + (\beta+1)r_{\pi2} = 522.6\ \mathrm{k\Omega}$.
- $i_{b2} = (\beta+1)i_{b1}$, $i_{c2} = \beta(\beta+1)i_{b1} = 10100\,i_{b1}$, $i_{b1} = v_i/(R_S + R_i)$.
- $v_o/v_i = -10100\times3\ \mathrm{k}/622.6\ \mathrm{k} = -48.7$.

## Grading notes

+2: −48.7 (±3%). +1: small slip (e.g., β² instead of β(β+1), −48.2). 0: correct method, arithmetic error. −2 (asserted as fact): $R_S$ or the input-resistance division ignored (e.g., −115 or ≈ −80), or $Q_1$'s collector current added to the output.
