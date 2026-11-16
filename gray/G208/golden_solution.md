# Golden Solution - G208

## Reference answer

$v_o/v_i \approx -69.5$.

- $r_{\pi1} = 100/(1.92\ \mathrm{mA/V}) = 52\ \mathrm{k\Omega}$; $r_{\pi2} = 2.6\ \mathrm{k\Omega}$; $r_{\pi2}\|R_B = 2.22\ \mathrm{k\Omega}$.
- $R_i = r_{\pi1} + (\beta + 1)(r_{\pi2}\|R_B) = 52 + 223.8 = 275.8\ \mathrm{k\Omega}$; $i_{b1} = v_i/(R_S + R_i) = v_i/375.8\ \mathrm{k\Omega}$.
- $i_{b2} = (\beta + 1)i_{b1}\,R_B/(R_B + r_{\pi2}) = 86.1\,i_{b1}$; output current $\beta i_{b1} + \beta i_{b2} = 8708\,i_{b1}$.
- $v_o/v_i = -8708\times3\ \mathrm{k}/375.8\ \mathrm{k} = -69.5$.

## Grading notes

+2: −69.5 (±4%), with the current division between $R_B$ and $r_{\pi2}$ and the larger $r_{\pi1}$ handled. +1: $Q_1$'s collector current omitted (−68.7) or a small slip. 0: correct method, arithmetic error. −2 (asserted as fact): bleed resistor ignored in the small-signal circuit (giving −49 with the old bias or ≈ −88 with the new one), or $R_S$ ignored.
