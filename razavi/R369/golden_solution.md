# Golden Solution - R369

## Reference answer

Equal overdrives $|V_{ov2}| = |V_{ov3}| \approx 0.363$ V, giving $(W/L)_2 \approx 56.5$ (≈ 28 μm/0.5 μm) and $(W/L)_3 \approx 197$ (≈ 99 μm/0.5 μm); then $g_{m2} = g_{m3} \approx 2.75$ mS and $\overline{I_{n,in}^2} = 4kT\gamma(g_{m2}+g_{m3}) \approx 4kT\gamma\times5.5$ mS (≈ 7.8 pA/√Hz for γ = 2/3).

- $\overline{I_{n,in}^2} = 4kT\gamma(g_{m2} + g_{m3})$ with $g_m = 2I_D/V_{ov}$, so minimize $1/V_{ov2} + 1/V_{ov3}$.
- Swing: $V_{out,max} = V_{DD} - |V_{ov3}|$; the lowest $V_b$ puts $M_2$ at the edge of saturation (input node at $V_{ov2}$), so $V_{out,min} = V_b - V_{TH1} = V_{ov2} + V_{ov1}$ (with body effect the $V_{TH1}$ terms still cancel). Swing $= V_{DD} - V_{ov1} - V_{ov2} - |V_{ov3}| = 2$ V.
- $V_{ov1} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu\times100)} = 0.273$ V, so $V_{ov2} + |V_{ov3}| = 0.727$ V. With a fixed sum, $1/a + 1/b$ is minimum at $a = b = 0.363$ V (e.g., 0.3/0.427 V gives 5.68 mS vs 5.50 mS at the optimum).
- $(W/L)_2 = 2I_D/(\mu_nC_{ox}V_{ov2}^2) = 56.5$; $(W/L)_3 = 2I_D/(\mu_pC_{ox}V_{ov3}^2) = 197$. If $(1 + \lambda V_{DS})$ is included, the widths drop by a few percent (≈ 54 and ≈ 184 at the edge-of-saturation $V_{DS}$).

## Grading notes

+2: noise current $4kT\gamma(g_{m2}+g_{m3})$, swing constraint $V_{ov1} + V_{ov2} + |V_{ov3}| = 1$ V with $V_{ov1} \approx 0.27$ V, the equal-overdrive optimum ≈ 0.36 V, and W/L values within ±10% (≈ 56 and ≈ 197; ≈ 54/184 with λ). +1: correct optimum overdrives with one W/L wrong (e.g., NMOS mobility used for $M_3$), or an iterated non-optimal split within ~5% of the optimum noise. 0: correct constraint but a clearly suboptimal split chosen without justification. -2 (asserted as fact): $M_2$'s noise omitted from the input-referred current, a swing constraint that ignores $V_{ov1}$ or $V_{ov2}$ (so the overdrives and W/L are wrong), or minimizing noise by maximizing $g_m$. Including $M_1$'s noise ($4kT\gamma g_{m1}$) in the input-referred current is a false claim, but it does not change the sizing because $g_{m1}$ is fixed by the given $(W/L)_1$ and $I_D$: cap at +1 when the $M_2$/$M_3$ sizes are right (only the stated noise value is off, ≈ 10.1 instead of ≈ 7.8 pA/√Hz for γ = 2/3), and -2 only if it changes the sizing (e.g., $V_{ov1}$ treated as a design variable).
