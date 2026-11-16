# Golden Solution - R206

## Reference answer

$A_v = -\dfrac{g_{m1}}{g_{m5} - g_{m3}}$; with $W_{3,4} = 0.8W_{5,6}$, $A_v = -5\,g_{m1}/g_{m5}$.
- Half circuit: the left output sees the diode $M_5$ (conductance $g_{m5}$) and $M_3$, whose gate is driven by the right output ($-v_X$), injecting $g_{m3}v_X$: net conductance $g_{m5} - g_{m3}$. $P$ is a virtual ground, so $v_X = -g_{m1}v_{in}/(g_{m5} - g_{m3})$.
- At balance $M_3$ and $M_5$ have the same $V_{SG}$ (both outputs equal), so $I_3/I_5 = W_3/W_5 = 0.8$ and $g_{m3} = 0.8g_{m5}$: $A_v = -g_{m1}/(0.2g_{m5}) = -5g_{m1}/g_{m5}$.
- In device terms: $I_5 = I_{D1}/1.8$, so $|A_v| = 5\sqrt{1.8\,\mu_n(W/L)_1/[\mu_p(W/L)_5]} \approx 6.7\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_5]}$.

## Grading notes

+2: $-g_{m1}/(g_{m5} - g_{m3})$ and $-5g_{m1}/g_{m5}$ (or the equivalent device expression); magnitude accepted. +1: correct general expression with the 0.8 ratio applied as a current ratio but a slip in the final factor (e.g., using $g_m \propto \sqrt{W}$ to get $g_{m3} = 0.89g_{m5}$, gain ≈ 9). 0: correct general expression only. -2 (asserted as fact): $g_{m1}/(g_{m5} + g_{m3})$, $g_{m1}/g_{m5}$ (cross-coupled pair ignored), or a negative-resistance latch claimed for this ratio.
