# Golden Solution - G104

## Reference answer

$I_{BIAS} = \dfrac{2}{\mu_nC_{ox}R^2}\left(\dfrac{1}{\sqrt{(W/L)_1}} - \dfrac{1}{\sqrt{(W/L)_2}}\right)^2 = \dfrac{2}{\mu_nC_{ox}(W/L)_1R^2}\left(1 - \sqrt{\dfrac{(W/L)_1}{(W/L)_2}}\right)^2$. It is independent of $V_{DD}$ and of $V_t$, and varies as $1/(\mu_nR^2)$: with $\mu_n \propto T^{-1.5}$ it rises with temperature, $TC_F = 1.5/T - 2\,TC_R$ (≈ +5000 ppm/°C for a temperature-independent resistor; a resistor with positive TC partly compensates). $I = 0$ is also an equilibrium, so a start-up circuit is needed.

- The $M_3$–$M_4$ mirror (identical devices) forces equal currents in both branches: $I_{D1} = I_{D2} = I_{BIAS}$.
- KVL around the gate loop: $V_{GS1} = V_{GS2} + I_{BIAS}R$; equal thresholds cancel: $V_{ov1} - V_{ov2} = I_{BIAS}R$.
- $\sqrt{\dfrac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_1}} - \sqrt{\dfrac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_2}} = I_{BIAS}R$; dividing by $\sqrt{I_{BIAS}}$ and squaring gives the result above (a nonzero solution requires $(W/L)_2 > (W/L)_1$).
- Temperature: $C_{ox}$ and the W/L ratios are constant, so $\frac{1}{I}\frac{dI}{dT} = -\frac{1}{\mu}\frac{d\mu}{dT} - \frac{2}{R}\frac{dR}{dT}$.

## Grading notes

+2: the expression (any equivalent form) with $I \propto 1/(\mu_nC_{ox}R^2)$, plus a correct temperature comment: increases with T through the mobility (≈ $T^{1.5}$ for constant R), modified by the resistor's TC ($-2TC_R$). Mentioning the zero-current state is a plus, not required. +1: expression right but the temperature comment vague or missing the resistor term. 0: correct KVL set up but solved incorrectly, with a sound temperature comment. -2 (asserted as fact): $I \propto V_t/R$ or $\propto 1/R$, W/L ratios inverted so the current would require $(W/L)_1 > (W/L)_2$, or a claim that the current is temperature independent or falls with temperature for a constant resistor.
