# Golden Solution - A226

## Reference answer

$\eta = \dfrac{P_{RL}}{P_{supply}} = \dfrac{V_p^2/(2R_L)}{(V_{DD}-V_{SS})V_p/(\pi R_L)} = \dfrac{\pi}{2}\dfrac{V_p}{V_{DD}-V_{SS}}$, maximum $\pi/4$ = 78.5% at $V_p = (V_{DD}-V_{SS})/2 = V_{DD}$.

- Load power: $P_{RL} = V_p^2/(2R_L)$.
- The upper device conducts only during the positive half-cycle, drawing $i = (V_p/R_L)\sin\omega t$ from $V_{DD}$; its average over a full period is $\frac{1}{T}\int_0^{T/2}\frac{V_p}{R_L}\sin\omega t\,dt = \frac{V_p}{\pi R_L}$. The lower device draws the same average from $V_{SS}$ during the negative half-cycle. Supply power: $V_{DD}\frac{V_p}{\pi R_L} + |V_{SS}|\frac{V_p}{\pi R_L} = (V_{DD}-V_{SS})\frac{V_p}{\pi R_L}$ (no quiescent current in Class B).
- Hence $\eta = \frac{\pi}{2}\frac{V_p}{V_{DD}-V_{SS}}$, which grows linearly with $V_p$. The largest possible swing is to the rails, $V_p = (V_{DD}-V_{SS})/2$, giving $\eta_{max} = \pi/4$ = 0.785 = 78.5%.

## Grading notes

+2: correct load power, half-wave average supply current $V_p/(\pi R_L)$ per supply, $\eta = (\pi/2)V_p/(V_{DD}-V_{SS})$ and the maximum π/4 at full swing. +1: correct result with a sloppy averaging step or the full-swing assumption left implicit. 0: correct setup with an integration error. −2 (asserted as fact): supply current taken as the rms or peak value, a quiescent current included for Class B, or a maximum of 25% or 50% claimed.
