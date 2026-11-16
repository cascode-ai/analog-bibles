# Golden Solution - G176

## Reference answer

About $6.4\times10^4$, half the gain with the original resistors (≈ $1.25\times10^5$). The input-stage gain drops from ≈ 58 to ≈ 30.

- New bias: $|I_{C11}| = (33/66)\times6 = 3\ \mu$A, so $|I_{C3}| = |I_{C4}| = 1.5\ \mu$A. $|I_{C13}| = |I_{C14}| = 3\ \mu$A, so $I_{C9} = I_{C10} = 3\ \mu$A. All voltage drops stay the same ($R$ doubled, $I$ halved).
- Transconductance: $g_{m3} = 1.5\ \mu\mathrm{A}/26\ \mathrm{mV} = 57.7\ \mu$A/V. The fraction of $Q_3$'s signal current that reaches node 9 is $\rho = \alpha_9R_9/[R_9 + \tfrac{\beta_0}{\beta_0+1}V_T/I_{C9}] = 0.976\times44\ \mathrm{k}/(44\ \mathrm{k} + 8.46\ \mathrm{k}) = 0.82$ (unchanged): 0.84 enters $Q_9$'s emitter and $\alpha_9 = 40/41$ of that reaches its collector. $G_{m1} = g_{m3}\rho = 47.2\ \mu$A/V, half the original 94 μA/V.
- Output resistance:
  - Up (common-base $Q_{13}$ with $R_{13} = 66$ kΩ): $R_{up1} \approx r_{o13}\dfrac{1 + g_{m13}R_{13}(\beta_0+1)/\beta_0}{1 + g_{m13}R_{13}/\beta_0}$ with $r_{o13} = 20/3\ \mu$A = 6.67 MΩ, $g_{m13}R_{13} = 7.6$, giving ≈ 35.5 MΩ.
  - Down ($Q_9$ with $R_9 = 44$ kΩ): $R_{down1} \approx r_{o9}\dfrac{1 + g_{m9}R_9}{1 + g_{m9}R_9/\beta_0}$ with $r_{o9} = 10$ MΩ, $g_{m9}R_9 = 5.08$, giving ≈ 54 MΩ.
  - $R_{o1} \approx 21$ MΩ (doubled).
- Loaded gain: each output node sees half the second-stage input resistance, 0.65 MΩ, so $a_{v1} = G_{m1}(R_{o1}\parallel 0.65\ \mathrm{M\Omega}) = 47.2\ \mu\mathrm{A/V}\times0.63\ \mathrm{M\Omega} \approx 29.8$ (original ≈ 58).
- Overall: $a_v = 29.8\times120\times18 \approx 6.4\times10^4$. The higher stage output resistance hardly helps because the second stage's 0.65 MΩ load dominates, so halving $G_{m1}$ halves the gain.

## Grading notes

+2: overall gain $(6.0$–$7.2)\times10^4$, with the halved bias currents, halved $G_{m1}$ (≈ 47–48 μA/V), the load set by $R_{in2}/2 = 0.65$ MΩ dominating the doubled $R_{o1}$, and the unchanged later-stage gains. +1: correct conclusion "about half the original gain" with the input-stage gain ≈ 30 but a modest error in $R_{o1}$ or $\rho$; or $R_{in2}$ used instead of $R_{in2}/2$ (giving ≈ 33–35 and ≈ $7.5\times10^4$) with everything else right. 0: currents halved correctly but the load ignored ($a_{v1} = G_{m1}R_{o1} \approx 1000$), giving a much larger gain, while the reasoning is otherwise sound. -2 (asserted as fact): gain unchanged because resistor ratios are unchanged, gain doubled because resistances doubled, or bias currents claimed unchanged.
