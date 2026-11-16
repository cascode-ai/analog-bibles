# Golden Solution - R528

## Reference answer

Yes. The ringing frequency $f_1$ approximately marks the gain-crossover frequency of the loop transmission, $|\beta H| \approx 1$. There, the open-loop phase is close to −180°, i.e., the phase margin is small.

- Ringing at $f_1$ means the closed-loop transfer function $H/(1+\beta H)$ has lightly damped complex poles, and its frequency response peaks near $f_1$. Peaking occurs where $|1 + \beta H|$ is small, i.e., where $\beta H(j\omega)$ approaches −1: unity magnitude and phase near −180°.
- So $f_1$ ≈ the frequency at which $|\beta H|$ crosses unity, and the phase of $\beta H$ there is −180° + PM with a small PM. The longer the ringing persists (larger overshoot, slower decay), the closer that phase is to −180°.
- Quantitatively, for a two-pole loop the ringing frequency equals the crossover frequency within about 10%, and PM ≈ 100ζ degrees (for PM up to about 60°), where the damping ratio ζ can be estimated from the overshoot or the decay of the ringing.
- For unity feedback the crossover is the op amp's unity-gain frequency; with β < 1 it is where $|\beta H| = 1$.

## Grading notes

+2: "yes", with $f_1$ identified as approximately the frequency where the loop gain $|\beta H|$ is about 1, and the open-loop (loop) phase there close to −180° (small phase margin). The argument via $1 + \beta H \approx 0$, or relating the decay or overshoot to the PM, is a plus. +1: "yes" with only one of the two facts (crossover at $f_1$, or phase near −180° at $f_1$), or crossover attributed to $H$ instead of $\beta H$ for β ≠ 1. 0: only "the phase margin is low", with no link to $f_1$. -2 (asserted as fact): "no information", $f_1$ equal to an open-loop pole frequency (e.g., the dominant pole), or the phase at $f_1$ stated to be about −90°.
