# Golden Solution - A067

## Reference answer

$g_m = \dfrac{\partial i_D}{\partial v_{GS}} = \dfrac{W}{L}\,\dfrac{I_{D0}}{n(kT/q)}\exp\!\left(\dfrac{V_{GS}}{n(kT/q)}\right) = \dfrac{I_D}{n(kT/q)}$.

- $g_m$ is proportional to the drain current itself (not to $\sqrt{I_D}$ as in strong inversion) and, at a given current, independent of W/L and $K'$; $g_m/I_D = 1/(nkT/q)$ is the largest value a MOS transistor reaches (≈ 26 V⁻¹ for n = 1.5 at 300 K).
- Example: n = 1.5, $I_D$ = 1 µA → $g_m$ = 1 µA/38.8 mV ≈ 25.8 µS.

## Grading notes

+2: $g_m = I_D/(nkT/q)$, or the equivalent exponential form. Remarks on the proportionality to $I_D$ are a plus. +1: correct derivative with a slip in the final simplification. 0: n dropped (giving $I_D/(kT/q)$) in an otherwise correct derivation. −2 (asserted as fact): a strong-inversion form such as $\sqrt{2K'(W/L)I_D}$ or $K'(W/L)(V_{GS} - V_T)$, or $g_m$ claimed to be proportional to $\sqrt{I_D}$ in weak inversion.
