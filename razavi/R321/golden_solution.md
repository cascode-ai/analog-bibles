# Golden Solution - R321

## Reference answer

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D\left(1 + R_GC_{GD}s + \dfrac{R_GC_{GS}C_{GD}}{g_m}s^2\right)}{1 + g_mR_S + b_1s + b_2s^2}$$
$$b_1 = (R_S + R_G)C_{GS} + [R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)]C_{GD}$$
$$b_2 = (R_DR_G + R_DR_S + R_GR_S)C_{GS}C_{GD}$$
- Low-frequency gain $g_mR_D/(1 + g_mR_S)$; two poles; two left-half-plane zeros, roots of $R_GC_{GS}C_{GD}s^2 + g_mR_GC_{GD}s + g_m = 0$, produced by $R_G$ (they move to infinity as $R_G \to 0$).
- Checks: $C_{GD} = 0$ gives $g_mR_D/[1 + g_mR_S + (R_S + R_G)C_{GS}s]$, the known result. $R_G = 0$ gives $\dfrac{g_mR_D}{(1 + g_mR_S + R_SC_{GS}s)(1 + R_DC_{GD}s)}$.

Derivation (nodes S, G, D): $\dfrac{V_{in} - V_S}{R_S} + (V_G - V_S)C_{GS}s + g_m(V_G - V_S) = 0$; $-\dfrac{V_G}{R_G} + (V_S - V_G)C_{GS}s + (V_{out} - V_G)C_{GD}s = 0$; $-\dfrac{V_{out}}{R_D} + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0$.

## Grading notes

+2: a transfer function equivalent to the reference (all numerator and denominator coefficients), with the correct dc gain. +1: correct structure with one coefficient term wrong through a slip, verified limits right. 0: correct node equations but unsolved or with several errors; or a correct dominant-pole/ZVTC estimate only (time constants $(R_G + R_S)C_{GS}/(1+g_mR_S)$ and $[R_D + (1 + g_mR_D/(1+g_mR_S))R_G]C_{GD}$). -2 (asserted as fact): a first-order result ignoring $C_{GD}$'s coupling through $R_G$, a dc gain of $g_mR_D$, or $R_G$ claimed to have no effect.
