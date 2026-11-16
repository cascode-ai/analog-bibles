# Golden Solution - R672

## Reference answer

Still ≈ 50 Ω. Every small-signal parameter in the input-impedance expression is invariant (to first order) under ideal scaling. The only deviation is a slight rise caused by the incomplete scaling of the body effect.
- $R_{in} = \dfrac{r_{O1} + r_{O2}}{1 + (g_{m1}+g_{mb1})r_{O1}}$, where $r_{O2}$ is the output resistance of the current-source load.
- $g_m$: unchanged, since $\mu(\alpha C_{ox})(W/L)(V_{GS}-V_{TH})/\alpha = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$.
- $r_O = 1/(\lambda I_D)$: $\lambda = (\Delta L/L)/V_{DS}$ rises by α (ΔL and L both shrink by α while $V_{DS}$ falls by α), and $I_D$ falls by α. So $r_{O1}$ and $r_{O2}$ are unchanged.
- $g_{mb} = \eta g_m$ with $\eta = C_d/C_{ox} = \gamma/(2\sqrt{2\phi_F + V_{SB}})$. In the ideal theory both the depletion capacitance and $C_{ox}$ rise by α, so η and $g_{mb}$ are unchanged, giving $R_{in}$ = 50 Ω.
- Refinement: $\gamma = \sqrt{2q\epsilon_{si}N_{sub}}/C_{ox}$ falls by √α and $V_{SB}$ falls by α, but $2\phi_F$ does not scale. So η falls by a factor between 1 and √α, $g_{mb}$ drops a little, and $R_{in}$ rises slightly above 50 Ω: a few percent, e.g. ≈ 52–53 Ω for α = 2 with $g_{mb} \approx 0.2g_m$.

## Grading notes

- +2: ≈ 50 Ω (unchanged), with $g_m$, $r_{O1}$ and $r_{O2}$ shown invariant (λ × α, $I_D$ ÷ α) and $g_{mb}$ invariant or nearly so. Noting a slight increase from the non-scaling $2\phi_F$ term of the body effect is a plus, not required.
- +1: 50 Ω with the $r_O$ invariance asserted without reason; or the main mechanisms right but the body-effect deviation overstated (e.g., "noticeably higher").
- 0: correct $R_{in}$ formula but one parameter's scaling wrong, with a hedged conclusion.
- -2 (asserted as fact): $R_{in}$ changing by a power of α (e.g., $r_O$ claimed to fall by α, giving a much lower $R_{in}$).
