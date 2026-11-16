# Golden Solution - R322

## Reference answer

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D(1 + R_GC_{GD}s)}{(1 + g_mR_S) + b_1s + (1 + g_mR_S)R_DR_GC_{GD}C_{DB}s^2}$$
$$b_1 = (1 + g_mR_S)R_DC_{DB} + [R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)]C_{GD}$$
- DC gain $g_mR_D/(1 + g_mR_S)$; two poles; one left-half-plane zero at $s = -1/(R_GC_{GD})$, created by $R_G$.
- Check: $R_G = 0$ gives $\dfrac{g_mR_D}{(1 + g_mR_S)[1 + R_D(C_{GD} + C_{DB})s]}$ (single output pole).
- Dominant-pole estimate: $\omega_{p1} \approx (1 + g_mR_S)/b_1$, i.e. $1/\{R_DC_{DB} + [R_D + (1 + \tfrac{g_mR_D}{1 + g_mR_S})R_G]C_{GD}\}$: $R_G$ makes $C_{GD}$ see a Miller-like multiplication.

Derivation (nodes S, G, D; $V_{GS} = V_G - V_S$): S: $\dfrac{V_{in} - V_S}{R_S} + g_m(V_G - V_S) = 0$; G: $-\dfrac{V_G}{R_G} + (V_{out} - V_G)C_{GD}s = 0$; D: $-\dfrac{V_{out}}{R_D} - V_{out}C_{DB}s + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0$.

## Grading notes

+2: transfer function equivalent to the reference (zero at $-1/(R_GC_{GD})$, correct $s$ and $s^2$ coefficients, dc gain $g_mR_D/(1 + g_mR_S)$). +1: correct structure with one coefficient term slipped, limits right. 0: node equations right but unsolved, or only a ZVTC/dominant-pole estimate with correct time constants. -2 (asserted as fact): a result in which $R_G$ has no effect, a right-half-plane zero, or a dc gain of $g_mR_D$.
