# Golden Solution - A471

## Reference answer

$R_{10} \le \frac{16}{15}R \approx 1.067R$ (strictly $R_{10} < 16R/15$ for a strictly increasing output); any smaller $R_{10}$ keeps the DAC monotonic, although it increases the DNL.

Derivation (1 LSB $= V_{REF}/256$):
- $v_{out} = V_{REF}\left[g\frac{m}{16} + \frac{n}{256}\right]$ with $g = R/R_{10}$, $m$ = MSB nibble, $n$ = LSB nibble: output $= 16g\,m + n$ LSB.
- Inside a group of 16 codes the step is always 1 LSB. At the major transitions ($n$: 15 → 0, $m$ → $m+1$) the step is $16g - 15$ LSB.
- Monotonic requires $16g - 15 \ge 0$ → $g \ge 15/16$ → $R_{10} \le 16R/15$. A larger gain ($R_{10} < R$) only enlarges these steps (positive DNL), so there is no lower limit for monotonicity.

## Grading notes

+2: $R_{10} \le 16R/15$ (≈ 1.067R), with the major-carry step $16R/R_{10} - 15$ identified. Stating the strict inequality or noting the absence of a lower bound is fine. +1: correct bound with a minor slip in wording (e.g. also imposing an unnecessary lower bound such as $R_{10} \ge 15R/16$ based on DNL ≤ 1). 0: correct step expression but the inequality solved in the wrong direction while hedged. −2 (asserted as fact): $R_{10} < 15R/16$ (the inverted ratio, which would exclude the ideal $R_{10} = R$), or a bound derived from INL instead of monotonicity presented as the answer.
