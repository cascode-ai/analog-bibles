# Golden Solution - A317

## Reference answer

$R_{out} \approx \dfrac{r_{\pi10} + (r_{ds6}\|r_{ds7})}{1+\beta_F} \approx \dfrac{1}{g_{m10}} + \dfrac{r_{ds6}\|r_{ds7}}{1+\beta_F} \approx 1.15$ kΩ.

- The resistance from the base of Q10 to ac ground is now the second-stage output resistance $r_{ds6}\|r_{ds7}$ instead of ≈ $1/g_{m9}$; it is divided by $1 + \beta_F$ at the emitter.
- Numbers: $1/g_{m10} = 25.9\ \mathrm{mV}/0.5\ \mathrm{mA} = 51.8\ \Omega$; $r_{ds6} = 1/(0.04\times100\ \mu) = 250$ kΩ (n-channel M6), $r_{ds7} = 1/(0.05\times100\ \mu) = 200$ kΩ, parallel 111.1 kΩ; $111.1\ \mathrm{k}/101 = 1100\ \Omega$. $R_{out} \approx 52 + 1100 \approx 1152\ \Omega$.
- Comparison: with the follower the second term is $1/[g_{m9}(1+\beta_F)]$, only a few ohms (e.g., ≈ 7 Ω for $g_{m9}$ ≈ 1.5 mS), so $R_{out}$ ≈ 1/$g_{m10}$ (tens of ohms); without it the base-side term dominates and $R_{out}$ rises by about 20 times. In addition, driving Q10 directly loads the second stage with $r_\pi + (1+\beta_F)R_L$, reducing the op amp gain.

## Grading notes

+2: expression with the base-side resistance $r_{ds6}\|r_{ds7}$ divided by $1 + \beta_F$ (plus $1/g_{m10}$ or $r_\pi/(1+\beta)$), value 1.10–1.20 kΩ, and the comparison that the follower version replaces $r_{ds6}\|r_{ds7}$ by ≈ $1/g_{m9}$, making that term negligible. +1: correct expression and value with a missing or vague comparison. 0: correct expression with a wrong numerical evaluation through a slip (e.g., an arithmetic slip in $r_{ds6}$, $r_{ds7}$ or $1/g_{m10}$ giving a value outside 1.10–1.20 kΩ). Swapping $\lambda_N$ and $\lambda_P$ between M6 and M7 is harmless here: both carry 100 µA, so $r_{ds6}\|r_{ds7}$ = 111 kΩ either way. −2 (asserted as fact): output resistance ≈ $1/g_{m10}$ only (base resistance ignored), the base resistance not divided by $1+\beta_F$, or $r_{ds6}\|r_{ds7}$ replaced by $1/g_{m9}$ although M9 is absent.
