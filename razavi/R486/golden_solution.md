# Golden Solution - R486

## Reference answer

$C_{Y,max} \approx 1.15$–1.2 pF.
- From the small-signal values: $R_X \approx 16$ kΩ (or 13.3 kΩ with $r_{O2} \parallel r_{O3}$), so $\omega_X = 1.25\times10^8$ rad/s; $A_0 \approx 20$; $R_Y = (1/g_{m4}) \parallel r_{O4} \approx 270\ \Omega$; GBW ≈ $(g_m/2)A_{v4}/C_X = 2.55\times10^9$ rad/s.
- PM = 60° needs $\tan^{-1}(\omega_u/\omega_X) + \tan^{-1}(\omega_u/\omega_Y) = 120°$ together with $A_0/\sqrt{(1 + \omega_u^2/\omega_X^2)(1 + \omega_u^2/\omega_Y^2)} = 1$. This gives $\omega_u \approx 2.13\times10^9$ rad/s and $\omega_Y \approx 3.2\times10^9$ rad/s, so $C_Y = 1/(270\ \Omega \times 3.2\times10^9) \approx 1.15$ pF (1.19 pF with $R_X$ = 13.3 kΩ). The dominant pole contributes only ≈ 87°, not 90°, because $A_0$ is only about 20.
- If the dominant pole's phase is taken as exactly 90°: $\omega_Y = 1.5\,$GBW = 3.8×10⁹ rad/s, so $C_Y$ ≈ 0.97 pF (≈ 0.84 pF if $|1 + j\omega_u/\omega_Y|$ is also neglected in the magnitude).
- The two-pole conditions have a second root with the roles swapped: for a huge $C_Y$ node Y becomes dominant ($\omega_Y \approx 4.8\times10^6$ rad/s, $\omega_u \approx 8.2\times10^7$ rad/s), and PM = 60° again at $C_Y \approx 770$ pF. So strictly PM ≥ 60° holds for $C_Y \lesssim 1.15$ pF or $C_Y \gtrsim 770$ pF; with X as the dominant pole (the intended design, and the first limit reached as $C_Y$ grows from zero) the maximum is 1.15 pF.

## Grading notes

+2: $C_{Y,max}$ = 0.95–1.25 pF from a correct two-pole calculation (approximations stated). Mentioning the swapped-dominance branch ($C_Y \gtrsim 770$ pF, so no finite global maximum) is optional and correct; an answer that gives ≈ 1.15 pF as the limit with X dominant and also notes that branch is +2. +1: 0.8–0.95 pF from the cruder approximation, stated as such; or ≈ 770 pF given as the larger of the two exact-60° roots from a correct derivation that also states the ≈ 1.15 pF root and that values between them fail. 0: right method, slip giving a value outside 0.8–1.3 pF. -2 (asserted as fact): $C_{Y,max}$ below 0.5 pF (i.e., claiming 0.5 pF already violates 60°), or above 2 pF while implying every smaller $C_Y$ meets 60° (only the swapped-branch value ≈ 770 pF presented as described above is exempt), $G_m = g_m$ used, or $R_Y$ taken as $r_{O4}$.
