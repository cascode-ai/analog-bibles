# Golden Solution - R074

## Reference answer

$g_mr_O = \dfrac{2}{\lambda(V_{GS} - V_{TH})}$: a hyperbola that decreases as $V_{GS}$ increases (halving each time the overdrive doubles) and grows without bound as $V_{GS} \to V_{TH}$.

- At constant $I_D$: $g_m = 2I_D/(V_{GS}-V_{TH}) \propto 1/V_{ov}$, while $r_O = 1/(\lambda I_D)$ is fixed (λ is fixed because $L$ is constant). To keep $I_D$ constant, $W \propto 1/V_{ov}^2$.
- Example (λ = 0.1 V⁻¹): 100 at $V_{ov}$ = 0.2 V, 40 at 0.5 V, 20 at 1 V.
- (Optional remark: near $V_{TH}$ the device enters weak inversion, $g_m$ saturates at about $I_D/(\zeta V_T)$, and the real curve levels off at roughly $1/(\lambda\zeta V_T)$ instead of diverging.)

## Grading notes

+2: $g_mr_O \propto 1/(V_{GS} - V_{TH})$ (e.g. $2/(\lambda V_{ov})$), decreasing hyperbola, with the reason ($g_m \propto 1/V_{ov}$ at fixed $I_D$, $r_O$ constant). +1: correct decreasing trend and reason without the explicit expression, or the expression without the reason. 0: decreasing trend with a wrong law (e.g., linear decrease). -2 (asserted as fact): gain increasing with $V_{GS}$, constant, or $\propto \sqrt{V_{GS} - V_{TH}}$.
