# Golden Solution - G073

## Reference answer

$$A_{dm} = -\frac{g_m\,(R_C \| \tfrac{R_L}{2})}{1 + g_m R_E/2},\qquad A_{cm} = 0 .$$

- Differential mode: the midpoints of $R_L$ and $R_E$ are at ac ground; the half circuit is a common-source stage with source degeneration $R_E/2$ (no body effect, $\lambda = 0$, so $G_m = g_m/(1 + g_m R_E/2)$) driving $R_C \| (R_L/2)$.
- Common mode: no current in $R_L$ or $R_E$; each source sees only the ideal current source, so the drain currents cannot change: $A_{cm} = 0$ (and CMRR → ∞).
- (With $g_m = \sqrt{2k'(W/L)I_{EE}}$ in terms of the bias. The input resistances are infinite at the gates.)

## Grading notes

+2: both results correct with half-circuit reasoning (load $R_C\|(R_L/2)$, degeneration $R_E/2$; $A_{cm} = 0$ because the sources see ideal current sources). +1: correct $A_{dm}$ structure with one slip, or $A_{cm} = 0$ stated with weak justification. 0: only one of the two results correct. −2 (asserted as fact): full $R_L$ or $R_E$ in the differential half circuit, a nonzero finite common-mode gain such as $-R_C/(R_E/2)$ claimed, or bipolar terms ($r_\pi$, $\beta_0$) carried over into the MOS result in a way that changes it.
