# Golden Solution - A249

## Reference answer

$GB = A_v(0)\,|p_1| \cong g_{mI}/C_c$.

- dc gain: $A_v(0) = g_{mI}g_{mII}R_IR_{II}$.
- Dominant pole (widely spaced poles, Miller term dominant in the $s$ coefficient): $|p_1| \cong 1/(g_{mII}R_IR_{II}C_c)$.
- For $|p_1| \ll \omega$ below the nondominant pole and zero, $|A_v(j\omega)| \approx A_v(0)|p_1|/\omega$, which equals 1 at $\omega = GB = A_v(0)|p_1| = \dfrac{g_{mI}g_{mII}R_IR_{II}}{g_{mII}R_IR_{II}C_c} = \dfrac{g_{mI}}{C_c}$.
- Equivalent view: above $|p_1|$ the Miller capacitor holds node 1 near virtual ground and the second stage acts as an integrator, so $v_{out} \approx g_{mI}v_{in}/(sC_c)$; its magnitude is unity at $g_{mI}/C_c$. For the CMOS op amp $g_{mI} = g_{m1} = g_{m2}$.

## Grading notes

+2: GB $= A_v(0)|p_1|$ (or the integrator argument) leading to $g_{mI}/C_c$, with the dominant-pole expression justified. +1: correct result with the dominant-pole step only asserted. 0: correct idea with an algebra slip. −2 (asserted as fact): $GB = g_{mII}/C_c$, $g_{mI}/C_{II}$, or $g_{mI}/(C_c + C_I)$ as the main result.
