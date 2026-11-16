# Golden Solution - R498

## Reference answer

Poles ≈ 8.7×10⁵ rad/s (input node), ≈ 3.5×10⁸ rad/s (output node Y, now dominated by the 0.5-pF load) and ≈ 1.1×10¹⁰ rad/s (drain of $M_1$). Loop gain ≈ 1.2×10⁵, so the loop is unstable (PM ≈ −32°).
- Small signal as without the load: $g_{m1}$ = 5.18 mS, $r_{O1}$ = 10 kΩ, $g_{m2}$ = 2.77 mS, $r_{O2}$ = 5 kΩ, $g_{m3}$ = 0.164 mS, $r_{O3}$ = 1 MΩ, $T_0 = g_{m3}r_{O3}g_{m1}r_{O1}g_{m2}r_{O2} \approx 1.17\times10^5$. Capacitances: $C_{GS1}$ = 84, $C_{GD1}$ = 20, $C_{GS2}$ = 79, $C_{GD2}$ = 15, $C_{GS3}$ = 8.4, $C_{GD3}$ = 2 fF.
- Input node A: $1/\{r_{O3}[C_{GS1} + (1 + g_{m1}r_{O1})C_{GD1} + C_{GD3}]\}$ ≈ 1/(1 MΩ × 1.14 pF) ≈ 8.8×10⁵ rad/s (unchanged).
- Output node Y: $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})]$ = 1/(5 kΩ × 0.525 pF) ≈ 3.8×10⁸ rad/s (full model 3.5×10⁸).
- Drain of $M_1$: split away by $C_{GD1}$ (and the now heavier Y node), ≈ 1.1×10¹⁰ rad/s in the full model. A per-node Miller estimate, 1/(10 kΩ × 0.32 pF) ≈ 3×10⁸ rad/s, is misleading here.
- $T_0\omega_A \approx 10^{11}$ rad/s ≫ the nondominant poles: unstable (full model PM ≈ −32°).

## Grading notes

+2: dominant pole ≈ 8.8×10⁵ rad/s, an output pole ≈ (3.5–3.8)×10⁸ rad/s set by the 0.5-pF load and $r_{O2}$, and a third pole ≳ 10⁹–10¹⁰ rad/s (pole splitting) or explicitly identified as high. A remark on stability or compensation is welcome but not required, since the question asks only for the poles. +1: dominant and output poles right, the drain-of-$M_1$ pole from a per-node Miller estimate (≈ 3×10⁸ rad/s). 0: only the dominant pole right. -2 (asserted as fact): output pole computed with $1/g_{m2}$ instead of $r_{O2}$ (i.e., $M_2$ treated as a follower). A wrong side remark on the loop gain or on stability (e.g., the loop declared stable) after correct poles is a minor false claim (+1), not −2.
