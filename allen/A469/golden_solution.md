# Golden Solution - A469

## Reference answer

$R_9 = 16R$ and $R_{10} = R$, giving $v_{out} = V_{REF}\sum_{i=0}^{7} b_i/2^{i+1}$.

Derivation:
- Upper-left inverting summer (inputs $b_4$–$b_7$ through $R_5$–$R_8$ from $V_{REF}$, feedback R): $V_A = -V_{REF}\left(\frac{b_4}{2} + \frac{b_5}{4} + \frac{b_6}{8} + \frac{b_7}{16}\right)$.
- Lower inverting amplifier (input $R_{10}$ from $V_{REF}$, feedback R): $V_B = -\frac{R}{R_{10}}V_{REF}$; it drives $b_0$–$b_3$.
- Output summer (feedback R): $v_{out} = -R\left[\frac{V_A}{R_9} + V_B\left(\frac{b_0}{2R} + \frac{b_1}{4R} + \frac{b_2}{8R} + \frac{b_3}{16R}\right)\right] = \frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2} + \cdots + \frac{b_3}{16}\right) + \frac{R}{R_9}V_{REF}\left(\frac{b_4}{2} + \cdots + \frac{b_7}{16}\right)$.
- An ideal 8-bit DAC needs the LSB nibble weighted 1/16 of the MSB nibble, $R/R_9 = \frac{1}{16}R/R_{10}$, i.e. $R_9 = 16R_{10}$; the usual full scale $v_{out} = V_{REF}\sum b_i/2^{i+1}$ then gives $R/R_{10} = 1$ and $R/R_9 = 1/16$.

## Grading notes

+2: $R_9 = 16R$ and $R_{10} = R$ with a correct output expression. An answer also correct if it writes the output with an overall sign consistent with its analysis. Binary weighting fixes only the ratio $R_9 = 16R_{10}$; an answer that explicitly states a different full-scale normalization and keeps $R_9 = 16R_{10}$ (e.g. $R_{10} = R/2$, $R_9 = 8R$) is also +2. +1: both values right with a sloppy or partly wrong expression. 0: one of the two values right. −2 (asserted as fact): $R_9 = R/16$, $R_{10} = 16R$, or the roles of $R_9$ and $R_{10}$ swapped.
