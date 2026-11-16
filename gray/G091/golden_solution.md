# Golden Solution - G091

## Reference answer

$I_{OUT} \approx 10.9$ µA.

- This is a Widlar source: $I_{IN} = (15 - V_{BE1})/20\ \mathrm{k\Omega}$ with $V_{BE1} = V_T\ln(I_{IN}/I_S) \approx 0.668$ V, so $I_{IN} \approx 0.717$ mA.
- KVL: $V_{BE1} - V_{BE2} = I_{OUT}R_2$, i.e. $V_T\ln(I_{IN}/I_{OUT}) = I_{OUT}(10\ \mathrm{k\Omega})$ (base currents neglected).
- Iteration: $I_{OUT} = 10$ µA gives 111 mV vs 100 mV; 10.9 µA gives 108.8 mV vs 109 mV → $I_{OUT} \approx 10.9$ µA (10.84 µA if the emitter current $(\beta_F+1)I_{OUT}/\beta_F$ is used).

## Grading notes

+2: $I_{OUT}$ in 10.6–11.1 µA from the transcendental Widlar equation solved by iteration or equivalent. +1: method right, answer within about ±5 %. 0: correct equation set up but not solved (or solved with a slip giving a value off by more than 5 %). -2 (asserted as fact): $I_{OUT} = V_{BE}/R_2$ (≈ 70 µA), $I_{OUT} = I_{IN}$ or a simple-mirror ratio, or the logarithm inverted giving a current larger than $I_{IN}$.
