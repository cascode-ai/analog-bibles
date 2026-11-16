# Golden Solution - A473

## Reference answer

$C_x = \frac{8}{7}C \approx 1.143C$, giving $v_{OUT} = V_{REF}\sum_{i=0}^{5} b_i/2^{i+1}$.

Derivation:
- LSB side: $4C$ ($b_3$), $2C$ ($b_4$), $C$ ($b_5$) and the terminating $C$ to ground, total $8C$. MSB side: $4C$ ($b_0$), $2C$ ($b_1$), $C$ ($b_2$), total $7C$.
- $C_x$ in series with $8C$ must act as a unit capacitor $C$ terminating the MSB array (MSB node total $8C$): $\frac{1}{C_x} + \frac{1}{8C} = \frac{1}{C}$ → $C_x = 8C/7$.
- Check by charge balance: with $A = 4b_0 + 2b_1 + b_2$ and $B = 4b_3 + 2b_4 + b_5$, $v_{OUT} = V_{REF}\frac{A(8C + C_x) + C_x B}{56C + 15C_x}$; for $C_x = 8C/7$ this is $V_{REF}\left(\frac{A}{8} + \frac{B}{64}\right)$.

## Grading notes

+2: $C_x = 8C/7$ with a correct justification (series combination with the 8C LSB side equals C) or a correct charge-balance check. +1: right value with a weak justification. 0: right method with a counting slip (e.g. LSB side taken as 7C, giving $C_x = 7C/6$). −2 (asserted as fact): $C_x = C/8$, $C_x = C$, $C_x = 8C$ or another value from a wrong attenuation argument.
