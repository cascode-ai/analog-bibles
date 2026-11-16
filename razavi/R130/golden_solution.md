# Golden Solution - R130

## Reference answer

$A_v \approx -3.65$ (with channel-length modulation and body effect).

- $g_m = 3.66$ mS, $r_O = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ; $V_{SB} = I_DR_S = 0.1$ V → $\eta = 0.45/(2\sqrt{1.0}) = 0.225$, $g_{mb} = 0.824$ mS.
- $A_v = -\dfrac{g_mr_OR_D}{R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O} = -\dfrac{146.4\ \mathrm{k\Omega}}{40.1\ \mathrm{k\Omega}} \approx -3.65$.
- For comparison: body effect only −3.86, λ only −3.97, neither $-g_mR_D/(1 + g_mR_S) = -4.23$.

## Grading notes

+2: −3.65 (±3%) with both λ and the body effect. +1: one of the two effects omitted (−3.86 or −3.97); also −3.51 from the approximation $-g_m(R_D\|r_O)/[1+(g_m+g_{mb})R_S]$, which puts $r_O$ in parallel with $R_D$ and ignores its feedback at the source. 0: both omitted (−4.23) with a correct degeneration formula. -2 (asserted as fact): degeneration ignored ($-g_mR_D = -7.3$), gain $-R_D/R_S = -10$ asserted as the answer, or $g_{mb}$ computed with a wrong $V_{SB}$ that changes the result substantially.
