# Golden Solution - R638

## Reference answer

$\dfrac{V_{out}}{V_{in}} = \dfrac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1+C_2)L_Ps^2 + [g_mL_P + R_P(C_1+C_2)]s + g_mR_P}$
The denominator is the same as with a current stimulus at the source: the natural frequencies do not depend on where the stimulus is applied, as long as zeroing it restores the original circuit (a zero voltage source returns the gate to ac ground).
- Imaginary part zero at $s = j\omega_R$: $\omega_R^2 = \dfrac{g_mL_P + R_P(C_1+C_2)}{R_PL_PC_1C_2} \approx \dfrac{1}{L_P\,C_1C_2/(C_1+C_2)}$ (for $g_mL_P \ll R_P(C_1+C_2)$).
- Real part zero: $(C_1+C_2)L_P\omega_R^2 = g_mR_P$ → $g_mR_P = \dfrac{(C_1+C_2)^2}{C_1C_2} = \dfrac{C_1}{C_2}\left(1 + \dfrac{C_2}{C_1}\right)^2$. Oscillation requires $g_mR_P \ge (C_1+C_2)^2/(C_1C_2)$, whose minimum, 4, occurs at $C_1 = C_2$.

Derivation: source node S: $g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = C_1sV_S$. Drain node: $V_{out}/(L_Ps) + V_{out}/R_P + g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = 0$, which with the first equation becomes $V_{out}(1/L_Ps + 1/R_P) = -C_1sV_S$. Solving, $V_S/V_{in} = g_m(R_P + L_Ps)/D(s)$ and $V_{out}/V_{in}$ as above.

## Grading notes

+2: correct $V_{out}/V_{in}$ (numerator ∝ $g_mC_1R_PL_Ps^2$; sign convention may differ) with the cubic denominator above, $\omega_R^2 \approx (C_1+C_2)/(L_PC_1C_2)$, $g_mR_P \ge (C_1+C_2)^2/(C_1C_2)$, and the minimum of 4 at $C_1 = C_2$. +1: correct denominator and conditions with a slip in the numerator, or the $C_1 = C_2$ minimization missing. 0: correct node equations with the conditions not extracted or one of them wrong through an algebra slip. -2 (asserted as fact): $V_{out}/V_{in} = 0$ / the circuit cannot oscillate, an oscillation frequency such as $1/\sqrt{L_P(C_1+C_2)}$, a start-up condition $g_mR_P \ge 1$, or a denominator different from the current-stimulus one asserted as giving different natural frequencies.
