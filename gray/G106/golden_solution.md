# Golden Solution - G106

## Reference answer

About 0.35 V ($I_CR \ge 13.4\,V_T \approx 0.35$ V).

- KVL for the two sources: $V_T\ln(I_{C3}/I_{S3}) + I_{C3}R_3 = V_T\ln(I_{C4}/I_{S4}) + I_{C4}R_4$. For small mismatches:
  $\dfrac{\Delta I_C}{I_C} \approx \dfrac{1}{1 + g_mR}\dfrac{\Delta I_S}{I_S} - \dfrac{g_mR}{1 + g_mR}\dfrac{\Delta R}{R}$, with $g_mR = I_CR/V_T$.
- The 2-mV $V_{BE}$ mismatch is equivalent to $\Delta I_S/I_S = 2/26 = 7.7\%$.
- Worst case (magnitudes add): $\dfrac{0.077 + 0.005\,x}{1 + x} \le 0.01$ with $x = I_CR/V_T$ → $0.067 \le 0.005x$ → $x \ge 13.4$.
- Required drop $I_CR \ge 13.4\times26\ \mathrm{mV} \approx 0.35$ V. (Equivalently $(\Delta V_{BE} + V_R\,\Delta R/R)/(V_T + V_R) \le 0.01$.)

## Grading notes

+2: 0.33–0.36 V, from a mismatch relation that weights the $V_{BE}$ term by $1/(1+g_mR)$ and the resistor term by $g_mR/(1+g_mR)$, with worst-case addition. A sign typo in a displayed rearrangement whose stated result is right (e.g. a denominator written $0.005 - 0.01$ instead of $0.01 - 0.005$) is trivial and does not lower +2. +1: correct method with a small slip (e.g. 0.30–0.40 V). 0: resistor mismatch neglected (≈ 0.17 V from $(2\ \mathrm{mV} - 0.26\ \mathrm{mV})/0.01$) or the $V_T$ term in the denominator dropped (≈ 0.4 V) without justification. -2 (asserted as fact): mismatches subtracted as if they cancel, a claim that emitter degeneration cannot improve matching, or a result off by an order of magnitude from a formula error (e.g. treating 2 mV as a 2 % current mismatch).
