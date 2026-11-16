# Golden Solution - R483

## Reference answer

$C_{X,max} \approx 0.20$ pF (PM = 55° at 100 fF).
- Loop gain (loop broken at X): $T(s) = \dfrac{10}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}$. $C_X$ sets the first nondominant pole $1/R_DC_X$ (10¹⁰ rad/s at 100 fF).
- Raising $C_X$ brings this pole toward the crossover. PM = 45° at $C_X \approx 196$ fF (pole at 5.1×10⁹ rad/s, $\omega_u \approx 6.2\times10^9$ rad/s). The independent-pole approximation gives ≈ 193 fF.
- (The dependence is not monotonic: the PM bottoms out at ≈ 35° near $C_X$ ≈ 1 pF, where the two lowest poles coincide, and recovers above 45° only for $C_X \gtrsim 4.2$ pF, when node X becomes the dominant pole. The answer to the question as posed, starting from 100 fF, is ≈ 0.2 pF.)

## Grading notes

+2: $C_{X,max}$ = 0.18–0.22 pF. Mentioning the recovery at very large $C_X$ is optional; an answer that gives both 45° points (≈ 0.2 pF and ≈ 4.2 pF) and therefore says there is no global maximum is also +2. +1: correct method, value within 0.15–0.25 pF. 0: right setup with a slip outside that range. -2 (asserted as fact): PM improving with $C_X$ near 100 fF, or a $C_{X,max}$ outside 0.15–0.25 pF obtained from a wrong loop-gain model (e.g., a return ratio taken with respect to $R_F$, an arbitrary normalization of the characteristic equation used as the loop gain, or a loop gain whose low-frequency value is not $g_{m1}R_D$ = 10).
