# Golden Solution - R629

## Reference answer

$C_L \approx 0.55$ pF, with $R_D \approx 504\ \Omega$.

Derivation:
- Low-frequency loop gain $A_0^3 = 16$ → $A_0 = g_mR_D = 16^{1/3} = 2.52$ → $R_D = 2.52 \times 200\ \Omega = 504\ \Omega$.
- A three-stage ring oscillates where each stage contributes 60°: $\omega_{osc} = \sqrt3\,\omega_0 = \sqrt3/(R_DC_L)$.
- $C_L = \sqrt3/(2\pi \cdot 10^9\ \mathrm{s^{-1}} \cdot 504\ \Omega) = 0.547$ pF.
- Alternative model (accepted): with $A_0 > 2$ the closed-loop poles are $s = \omega_0[A_0(1 \pm j\sqrt3)/2 - 1]$, so the growing small-signal oscillation has $\omega = \sqrt3A_0\omega_0/2$; setting that to $2\pi \cdot 1$ GHz gives $C_L = \sqrt3A_0/(2\omega R_D) = \sqrt3\,g_m/(2\omega) = 0.69$ pF. The steady-state frequency is set by large-signal behavior; $\sqrt3\,\omega_0$ is the usual design value.

## Grading notes

+2: $R_D = 504\ \Omega$ (it need not be stated separately if used) and $C_L$ ≈ 0.55 pF (±5%) from $\omega_{osc} = \sqrt3\,\omega_0$, or ≈ 0.69 pF (±5%) from the explicitly stated pole-frequency model $\sqrt3A_0\omega_0/2$ with $A_0 = 2.52$. +1: correct method with a numerical slip. 0: loop-gain specification ignored and $R_D = 400\ \Omega$ used (even though this happens to give 0.69 pF with $\sqrt3\,\omega_0$), or correct $R_D$ with $C_L$ missing. -2 (asserted as fact): 16 taken as the per-stage gain ($R_D$ = 3.2 kΩ), oscillation frequency taken as $\omega_0$ (no $\sqrt3$), Hz and rad/s confused (factor 2π), or $C_L$ off by a formula error.
