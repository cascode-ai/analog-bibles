$\frac{480}{31}R \le R_9 \le \frac{480}{29}R$，即 $15.48R \le R_9 \le 16.55R$（标称值 16R）。

推导（1 LSB $= V_{REF}/256$）：
- $v_{out} = V_{REF}\left[\frac{m}{16} + \frac{R}{R_9}\cdot\frac{n}{16}\right]$，其中 $m$（位 $b_0$–$b_3$）和 $n$（位 $b_4$–$b_7$）各取 0…15。
- INL $= 256\cdot\frac{n}{16}\cdot\frac{R}{R_9} - n = n\left(\frac{16R}{R_9} - 1\right)$ LSB，在 $n = 15$ 时最大。
- $15\left|\frac{16R}{R_9} - 1\right| \le 0.5$ → $\frac{29}{30} \le \frac{16R}{R_9} \le \frac{31}{30}$ → $\frac{480}{31}R \le R_9 \le \frac{480}{29}R$。
