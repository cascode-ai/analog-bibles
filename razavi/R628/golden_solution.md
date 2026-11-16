# Golden Solution - R628

## Reference answer

$R_{D,min} = 400\ \Omega$ (independent of $C_L$).

Derivation:
- Each stage: $-A_0/(1 + s/\omega_0)$ with $A_0 = g_mR_D$ and $\omega_0 = 1/(R_DC_L)$. Loop gain $H(s) = -A_0^3/(1 + s/\omega_0)^3$.
- Barkhausen: the frequency-dependent phase must reach 180°, i.e., 60° per stage → $\tan^{-1}(\omega_{osc}/\omega_0) = 60^\circ$, $\omega_{osc} = \sqrt3\,\omega_0$.
- $|H(j\omega_{osc})| = A_0^3/(1 + 3)^{3/2} = A_0^3/8 \ge 1$ → $A_0 \ge 2$.
- $g_mR_D \ge 2$ → $R_D \ge 2 \times 200\ \Omega = 400\ \Omega$.

## Grading notes

+2: 400 Ω from the requirement of a low-frequency gain of 2 per stage (60° per stage at $\sqrt3\,\omega_0$). +1: 400 Ω with the gain-of-2 rule quoted without justification, or the right condition with an arithmetic slip. 0: correct method left unfinished. -2 (asserted as fact): a different per-stage gain requirement (1, $\sqrt2$, 8, $2^{1/3}$), giving e.g. 200 Ω, 283 Ω or 1.6 kΩ; or a claim that the circuit cannot oscillate.
