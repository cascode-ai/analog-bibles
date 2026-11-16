# Golden Solution - A470

## Reference answer

$\frac{480}{31}R \le R_9 \le \frac{480}{29}R$, i.e. $15.48R \le R_9 \le 16.55R$ (nominal 16R).

Derivation (1 LSB $= V_{REF}/256$):
- $v_{out} = V_{REF}\left[\frac{m}{16} + \frac{R}{R_9}\cdot\frac{n}{16}\right]$ with $m$ (bits $b_0$–$b_3$) and $n$ (bits $b_4$–$b_7$) each 0…15.
- INL $= 256\cdot\frac{n}{16}\cdot\frac{R}{R_9} - n = n\left(\frac{16R}{R_9} - 1\right)$ LSB, largest at $n = 15$.
- $15\left|\frac{16R}{R_9} - 1\right| \le 0.5$ → $\frac{29}{30} \le \frac{16R}{R_9} \le \frac{31}{30}$ → $\frac{480}{31}R \le R_9 \le \frac{480}{29}R$.

## Grading notes

+2: range 15.48R to 16.55R (±0.01R) with the worst case at all four LSBs = 1. +1: right method with a small arithmetic slip, or only one bound correct. 0: method right but worst case taken at the wrong code (e.g. n = 16 or n = 8) giving noticeably different bounds. −2 (asserted as fact): a range around R or 1/16 R (role confusion), or bounds from a ±0.5 LSB criterion applied to the LSB-subDAC LSB alone (e.g. ±0.5/16 relative error).
