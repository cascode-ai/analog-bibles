# Golden Solution - G322

## Reference answer

$C_{m1} ≈ 16$ pF, $C_{m2} ≈ 13.4$ pF (independent of the value of $g_{m1}$).

- Dominant pole (Miller effect of $C_{m2}$): $p_1 ≈ -1/(g_{m1}R_1g_{m2}R_2R_0C_{m2})$, so the unity-gain frequency is $\omega_u ≈ a_0|p_1| = g_{m0}/C_{m2}$.
- High-frequency poles from $D'(s) = 1 + \frac{a_2}{a_1}s + \frac{a_3}{a_1}s^2$ with $\dfrac{a_2}{a_1} ≈ \dfrac{(g_{m2} - g_{m1})C_{m1}}{g_{m1}g_{m2}}$ and $\dfrac{a_3}{a_1} ≈ \dfrac{C_1C_2 + C_{m1}(C_1 + C_2)}{g_{m1}g_{m2}}$; for widely spaced real poles
$p_2 ≈ -\dfrac{g_{m1}g_{m2}}{(g_{m2} - g_{m1})C_{m1}} = -\dfrac{1.2\,g_{m1}}{C_{m1}}$, $p_3 ≈ -\dfrac{(g_{m2} - g_{m1})C_{m1}}{C_1C_2 + C_{m1}(C_1 + C_2)} = -\dfrac{5g_{m1}C_{m1}}{3\text{ pF}^2 + 6.5\text{ pF}\,C_{m1}}$.
- $|p_3| = 10|p_2|$: $5C_{m1}^2 = 12(3 + 6.5C_{m1})$ (pF) → $C_{m1} = 16.0$ pF; then $|p_2| = 0.075\,g_{m1}/\text{pF}$, $|p_3| = 0.75\,g_{m1}/\text{pF}$.
- 45° (place $|p_2|$ at $\omega_u$): $g_{m0}/C_{m2} = 1.2\,g_{m1}/C_{m1}$ → $C_{m2} = C_{m1}/1.2 = 13.4$ pF.
- Check: evaluating the loop gain with these values (the actual crossover is somewhat below $|p_2|$, and $p_3$ costs ≈ 5°) gives a phase margin of ≈ 48°, i.e. at least 45°; the actual pole ratio is then ≈ 7.7. Keeping the $C_0$ terms as well ($a_2 ∝ C_{m1}[C_0g_{m2} + C_{m2}(g_{m2} - g_{m1})]$, etc.) gives $C_{m1} ≈ 16.4$ pF and $C_{m2} ≈ 14.3$ pF by the same rule.
- Equally valid exact design: making the actual pole ratio exactly 10 (from the quadratic) and meeting the exact 45° phase and unity-magnitude conditions gives $C_{m1} ≈ 19.8$ pF and $C_{m2} ≈ 14.1$ pF (PM = 45.0°, $|p_3|/|p_2|$ = 10.0, independent of $g_{m1}$).

## Grading notes

+2: either (a) the widely-spaced design rule — $|p_2| ≈ g_{m1}g_{m2}/[(g_{m2} - g_{m1})C_{m1}]$, $|p_3| ≈ (g_{m2} - g_{m1})C_{m1}/[C_1C_2 + C_{m1}(C_1 + C_2)]$ ($C_0$ terms optional), $|p_3| = 10|p_2|$, $g_{m0}/C_{m2} = |p_2|$ — giving $C_{m1}$ ≈ 16 pF and $C_{m2}$ ≈ 13.4 pF (accept ±12%), or (b) an exact solution of the stated specifications in the $g_mR \gg 1$ limit (actual pole ratio 10 from the quadratic, exact 45° phase and unity-magnitude conditions), giving $C_{m1}$ ≈ 19.8 pF and $C_{m2}$ ≈ 14.1 pF (accept ±10%); in both cases the values must be independent of $g_{m1}$. +1: the simplified $p_3 ≈ (g_{m2}-g_{m1})/(C_1 + C_2)$ or $p_2 ≈ g_{m1}/C_{m1}$, or a mixture of the two approaches, giving values within ≈ 25% of either design, with otherwise correct reasoning. 0: correct structure but one capacitor wrong by a larger factor. −2 (asserted as fact): $C_{m2}$ placed around the last stage only (roles swapped), dominant pole attributed to $C_{m1}$, or a result that depends on an invented value of $g_{m1}$ asserted as given.
