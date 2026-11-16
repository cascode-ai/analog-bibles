# Golden Solution - R003

## Reference answer

$g_m r_O = \dfrac{\sqrt{2\mu_nC_{ox}(W/L)I_D}}{\lambda I_D} = \dfrac{1}{\lambda}\sqrt{\dfrac{2\mu_nC_{ox}(W/L)}{I_D}}$ (equivalently $2/[\lambda(V_{GS}-V_{TH})]$). With $\lambda = \lambda_0 L_0/L$: $g_m r_O = \dfrac{\sqrt{2\mu_nC_{ox}WL/I_D}}{\lambda_0 L_0}$.

Plot: for each L, a curve falling as $1/\sqrt{I_D}$ (very large at small current, flattening at large current). Longer L gives a higher curve: $g_m r_O \propto \sqrt{L}$ at fixed W (doubling L raises it by √2) and $\propto L$ at fixed W/L (doubling L doubles it).

Example (W = 50 µm, λ = 0.1 V⁻¹ × 0.5 µm / L): L = 0.5 µm: 164, 73, 52 at $I_D$ = 0.1, 0.5, 1 mA; L = 1 µm: 232, 104, 73; L = 2 µm: 328, 147, 104.

(Optional remark: the $1/\sqrt{I_D}$ rise stops at very low current, where the device enters subthreshold and $g_m r_O \to 1/(\lambda\zeta V_T)$ becomes constant.)

## Grading notes

+2: correct expression ($g_m r_O \propto \sqrt{(W/L)/I_D}/\lambda$ or an equivalent form), curves decreasing as $1/\sqrt{I_D}$, longer L giving higher curves, with the L scaling consistent with the stated assumption (√L at fixed W, L at fixed W/L). A numerical example is not required, and plotting code is not graded: a bug in an optional script that does not change the stated expression, trends or numbers is trivial and does not cost a point. +1: expression and trends right but the L scaling not quantified or the fixed-W vs fixed-W/L assumption left unclear. 0: correct expression but the plot wrong in one respect (e.g., wrong L scaling stated as fact). -2 (asserted as fact): $g_m r_O$ increasing with $I_D$, decreasing with L, or claimed independent of L.
