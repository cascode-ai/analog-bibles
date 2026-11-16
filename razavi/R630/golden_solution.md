# Golden Solution - R630

## Reference answer

$I_{SS,min} = \dfrac{4}{\mu_nC_{ox}(W/L)R_1^2} \approx \dfrac{2.99\times10^{4}\ \mathrm{A\,\Omega^2}}{(W/L)R_1^2}$ (e.g., 0.6 mA for $W/L = 50$, $R_1 = 1$ kΩ).

Derivation:
- At the edge of oscillation the swings are small, so each differential pair operates around equilibrium with each transistor carrying $I_{SS}/2$: $g_m = \sqrt{2\mu_nC_{ox}(W/L)(I_{SS}/2)} = \sqrt{\mu_nC_{ox}(W/L)I_{SS}}$.
- Each stage has a differential low-frequency gain $A_0 = g_mR_1$ and one dominant pole at its output nodes; a three-stage ring needs $A_0 \ge 2$ (60° per stage at $\sqrt3\,\omega_0$, $A_0^3/8 \ge 1$).
- $\sqrt{\mu_nC_{ox}(W/L)I_{SS}}\,R_1 \ge 2$ → $I_{SS} \ge 4/[\mu_nC_{ox}(W/L)R_1^2]$.
- (Including $r_O = 2/(\lambda I_{SS})$, the condition is $g_m(R_1 \parallel r_O) \ge 2$, requiring slightly more current.)

## Grading notes

+2: $g_mR_1 \ge 2$ at equilibrium with $g_m$ evaluated at $I_{SS}/2$ per transistor, giving $I_{SS} \ge 4/[\mu_nC_{ox}(W/L)R_1^2]$ (equivalent forms, or a version including $r_O$, accepted). +1: correct condition and $g_m$ with an algebra slip in the final expression. 0: correct condition $g_mR_1 \ge 2$ stated but not turned into a bound on $I_{SS}$. -2 (asserted as fact): per-stage gain requirement of 1, $\sqrt2$ or 8; $g_m$ computed with the full $I_{SS}$ in one transistor (giving $2/[\mu_nC_{ox}(W/L)R_1^2]$); or a bound based on the large-signal swing $I_{SS}R_1$ instead of the small-signal gain.
