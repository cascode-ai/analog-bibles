# Golden Solution - R420

## Reference answer

Very low frequencies: $A_v = \dfrac{1 - g_{m1}(R_2+R_3)}{1 + g_{m1}R_1} = -\dfrac{19}{11} \approx -1.73$ (the ideal value would be $-(R_2+R_3)/R_1 = -2$). Very high frequencies: $A_v = -g_{m1}R_3\dfrac{R_2}{R_1+R_2} = -5$.

- Low frequencies: $C_1$ is open, the feedback resistor is $R_F = R_2 + R_3 = 4\ \mathrm{k\Omega}$. The output node has no other conductance (λ = 0, $M_2$ an ideal current source), so $M_1$'s drain current flows entirely through $R_F$: $g_{m1}v_G = (v_G - v_{out})/R_F$. At the gate, $(v_{in} - v_G)/R_1 = g_{m1}v_G$ → $v_G = v_{in}/(1 + g_{m1}R_1) = v_{in}/11$; $v_{out} = v_G(1 - g_{m1}R_F) = -19v_{in}/11$.
- High frequencies: $C_1$ shorts the $R_2$–$R_3$ junction to ground and the feedback disappears: the gate sees the divider $R_1$–$R_2$ ($v_G = v_{in}/2$) and the drain is loaded only by $R_3$: $v_{out} = -g_{m1}R_3v_G = -10 \times v_{in}/2 = -5v_{in}$.
- $g_{m2}$ plays no role (gate of $M_2$ at a fixed bias, λ = 0).

## Grading notes

+2: ≈ −1.73 (−1.7 to −1.8) at low frequencies and −5 at high frequencies. +1: low-frequency gain given as the ideal −2 with −5 right, or −1.73 with a slip at high frequency (e.g. −10 from forgetting the $R_1$–$R_2$ divider). 0: only one of the two correct. -2 (asserted as fact): positive gains, the same gain claimed at both ends ($C_1$'s role misread), a high-frequency gain of zero, or $M_2$'s $g_m$ used as a load conductance.
