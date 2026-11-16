# Golden Solution - R344

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- Voltage (input shorted): $R_1$ goes from the output to ac ground, in parallel with $R_D$. Output short-circuit noise current: $I_{n1} + I_{n,RD} + I_{n,R1}$. Signal: driving the source with $V_{in}$ gives a short-circuit output current $(g_m + 1/R_1)V_{in}$ (voltage gain $(g_m + 1/R_1)(R_D\|R_1)$). Divide.
- Current (input open): the source node is connected only to $M_1$ and $R_1$, so the total current through $M_1$ and $R_1$ together is zero; $M_1$'s and $R_1$'s noise only circulate in that loop. The output noise is $4kTR_D$, and an input current flows through $M_1$/$R_1$ into $R_D$ (transimpedance $R_D$), so $\overline{I_{n,in}^2} = 4kT/R_D$.

## Grading notes

+2: both results (any equivalent form). +1: voltage expression with a minor slip (e.g., $1/R_1$ missing in the numerator or denominator but not both) while the current is right. 0: one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. $M_1$'s or $R_1$'s noise kept in the input-referred current (such as quoting the input-shorted source current, or $4kT(\gamma g_m + 1/R_D + 1/R_1)$) with the voltage right, or a voltage gain of $g_mR_D$ with $R_1$ ignored in the voltage while the current is right. -2 (asserted as fact): both quantities wrong, e.g. $R_1$ treated as a source-degeneration or gate resistor so that both results are affected.
