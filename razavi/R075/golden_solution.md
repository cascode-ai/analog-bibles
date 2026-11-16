# Golden Solution - R075

## Reference answer

Again $g_mr_O = \dfrac{2}{\lambda(V_{GS} - V_{TH})}$: a decreasing hyperbola, unbounded as $V_{GS} \to V_{TH}$ — the same curve as for constant drain current.

- With $\beta = \mu C_{ox}W/L$ fixed: $g_m = \beta V_{ov}$ grows linearly, but $I_D = \tfrac12\beta V_{ov}^2$ grows quadratically, so $r_O = 2/(\lambda\beta V_{ov}^2)$ falls as $1/V_{ov}^2$; the product falls as $1/V_{ov}$.
- Example (λ = 0.1 V⁻¹): 100 at $V_{ov}$ = 0.2 V, 40 at 0.5 V, 20 at 1 V.
- (Optional: in weak inversion the real curve levels off near $1/(\lambda\zeta V_T)$.)

## Grading notes

+2: decreasing $\propto 1/(V_{GS} - V_{TH})$ with the reasoning ($g_m \propto V_{ov}$, $r_O \propto 1/V_{ov}^2$). +1: correct trend with incomplete reasoning, or the expression without justification. 0: decreasing trend with a wrong law. -2 (asserted as fact): gain increasing with $V_{GS}$ (because $g_m$ increases, ignoring the fall of $r_O$), or constant.
