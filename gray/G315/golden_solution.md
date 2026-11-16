# Golden Solution - G315

## Reference answer

$C_{L,\max} ≈ 10$ pF (criterion $|p_2| = \omega_u ≈ g_{m1}/C_c$); ≈ 14 pF from an exact two-pole crossover calculation. Counting the capacitance at the gate of $M_6$ ($C_1 ≈ 0.24$–$0.31$ pF: $C_{gs6}$, plus the $C_{gd2}$, $C_{gd4}$ overlaps) in $|p_2| = g_{m6}C_c/[C_1C_2 + C_c(C_1 + C_2)]$ lowers the limit slightly, to ≈ 9.1–9.3 pF (≈ 9.7 pF with the cruder $|p_2| ≈ g_{m6}/(C_1 + C_2)$).

- $L_{\text{eff}} = 0.72$ μm. $g_{m1} = \sqrt{2 \times 64.7\text{ μA/V}^2 \times 208 \times 100\text{ μA}} = 1.64$ mA/V; $g_{m6} = \sqrt{2 \times 194\text{ μA/V}^2 \times 139 \times 200\text{ μA}} = 3.28$ mA/V; ratio 2.0.
- $\omega_u ≈ g_{m1}/C_c = 3.28 \times 10^8$ rad/s (52 MHz); nondominant pole from the load $|p_2| ≈ g_{m6}/C_L$.
- $|p_2| = \omega_u$ → $C_L = C_c\,g_{m6}/g_{m1} = 10$ pF. Exact crossover version: $\sqrt{2} \times 10 ≈ 14$ pF.
- (For reference, $C_{gs6} = \tfrac23 \times 100 \times 0.72 \times 4.32 + 0.35 \times 100 ≈ 0.24$ pF.)

## Grading notes

+2: $g_{m1}$ ≈ 1.6 mA/V, $g_{m6}$ ≈ 3.3 mA/V, and $C_{L,\max}$ ≈ 10 pF (accept 9–11 pF, including a small correction for $C_1$) or ≈ 14 pF with the exact-crossover criterion stated. +1: correct method with an arithmetic slip below 20%. 0: correct circuit reading and method but an arithmetic slip of 20% or more. −2 (asserted as fact): $p_2 = g_{m1}/C_L$, $1/(R_2C_L)$, a result that grows with $C_c$ squared or is independent of $g_{m6}$, or bias currents taken from a misread mirror (e.g. $M_7$ treated as a copy of $M_1$/$M_2$ so that $I_{D6} = 100$ μA; its gate is on the $M_8$/$M_5$ gate line, so $I_{D6} = 200$ μA).
