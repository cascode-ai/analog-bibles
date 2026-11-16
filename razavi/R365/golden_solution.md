# Golden Solution - R365

## Reference answer

$(W/L)_2 \approx 0.027$ (e.g., W = 0.5 μm, L ≈ 18.6 μm), from $g_{m2} = 60\ \mu$S. Note that this requires an overdrive $V_{GS2} - V_{TH} = 2I_D/g_{m2} \approx 16.7$ V, far beyond any 3-V supply, so the requirement is not realizable at 0.5 mA.

- With the input open, $M_1$ carries exactly $M_2$'s current, so $\overline{I_{n,in}^2} = 4kT/R_D + 4kT\gamma g_{m2}$ ($M_1$ contributes nothing).
- rms condition: $\sqrt{4kT\gamma g_{m2}} = \tfrac15\sqrt{4kT/R_D}$ → $g_{m2} = \dfrac{1}{25\gamma R_D} = 60\ \mu$S.
- $(W/L)_2 = \dfrac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \dfrac{(60\ \mu)^2}{2(134\ \mu)(0.5\ \mathrm{m})} = 0.0269$.
- (With γ = 1: $g_{m2} = 40\ \mu$S, $(W/L)_2 = 0.0119$, overdrive 25 V.)

## Grading notes

+2: $g_{m2} = 1/(25\gamma R_D)$ = 60 μS and $(W/L)_2 \approx 0.027$ (±5%); noting the impractical overdrive (≈ 16.7 V) is a plus but not required. +1: correct $g_{m2}$ with a slip in converting to W/L. 0: correct noise expression but the ratio applied to the noise power ($g_{m2} = 1/(5\gamma R_D)$), clearly stated as such. -2 (asserted as fact): $M_1$'s noise included in the input-referred current, $M_2$'s noise said not to appear in the input-referred current, or a W/L derived from $g_{m2} = \mu_nC_{ox}(W/L)V_{ov}$ with an invented overdrive.
