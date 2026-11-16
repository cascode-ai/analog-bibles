# Golden Solution - G325

## Reference answer

$C_L ≈ 1.5$ pF using $\omega_u ≈ g_{m1}/C_L = |p_2|$; an exact two-pole crossover gives ≈ 1.06 pF.

- Unity-gain frequency of the loop $\omega_u ≈ g_{m1}/C_L$ (dominant output pole $-1/(R_oC_L)$, gain $g_{m1}R_o$).
- 45°: $\omega_u = |p_2|$ → $C_L = g_{m1}/|p_2| = 0.3 \times 10^{-3}/(2 \times 10^8) = 1.5$ pF.
- Exact: $|T(j|p_2|)| = (g_{m1}/C_L|p_2|)/\sqrt{2} = 1$ → $C_L = g_{m1}/(\sqrt{2}|p_2|) = 1.06$ pF.

## Grading notes

+2: $C_L$ ≈ 1.5 pF (±5%) with the $\omega_u = |p_2|$ rule, or ≈ 1.06 pF with the exact-crossover reasoning stated. +1: correct method with an arithmetic slip. 0: correct idea but a factor 2π error (treating 200 Mrad/s as Hz), giving ≈ 0.24 pF, with otherwise sound work. −2 (asserted as fact): $C_L$ from $g_{m1}/(2|p_2|)$ or other wrong criteria, or the dominant pole attributed to the cascode node.
