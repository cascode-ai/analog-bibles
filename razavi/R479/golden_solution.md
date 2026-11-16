# Golden Solution - R479

## Reference answer

PM ≈ 55° (loop gain 10, gain crossover ≈ 7.7×10⁹ rad/s ≈ 1.23 GHz).
- Break the loop at the gate of $M_2$, which draws no current: apply $V_t$ there and find the voltage returned to X.
- Follower: $g_{m2}(V_t - V_Y) = sC_YV_Y + (V_Y - V_A)/R_F$ with $V_A = V_Y/(1 + sR_FC_A)$. Common source: $V_X = -g_{m1}(R_D \parallel 1/sC_X)V_A$.
- Loop transmission (one inversion, so negative feedback): $T(s) = \dfrac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}$, with $T_0 = g_{m1}R_D = 10$.
- $R_FC_A$ = 1 ns, $R_DC_X$ = 0.1 ns, $C_Y/g_{m2} = C_A/g_{m2}$ = 10 ps, so the poles are at 0.99×10⁹, 1.0×10¹⁰ and 1.01×10¹¹ rad/s (essentially $1/R_FC_A$, $1/R_DC_X$ and $g_{m2}/C_Y$).
- $|T| = 1$ at $\omega_u \approx 7.74\times10^9$ rad/s. Phase = −(82.7° + 37.7° + 4.4°) = −124.8°, so PM ≈ 55°. (Treating the three poles as independent gives 54.9°.)

## Grading notes

+2: loop gain 10, poles near $1/(R_FC_A)$, $1/(R_DC_X)$, $g_{m2}/C_Y$, and PM 53–57°. +1: right analysis but the third pole ignored (PM ≈ 59–60°), or a small numerical inaccuracy. 0: right loop setup with a slip that moves the PM outside 50–60°. -2 (asserted as fact): wrong low-frequency loop gain (e.g., $g_{m1}R_F$ or $R_F/R_D$), the $R_F$–$C_A$ pole omitted, positive feedback assumed, or a PM above 75° or below 35°.
