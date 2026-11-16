# Golden Solution - R169

## Reference answer

CMRR ≈ 14,800 (≈ 83.4 dB).
- $g_m = 3.66$ mS, $R_{SS} = 1/(0.1 \times 1\ \mathrm{mA}) = 10$ kΩ, $1 + 2g_mR_{SS} = 74.2$.
- $A_{DM} = g_mR_D = 7.32$; $|A_{CM-DM}| = g_m\Delta R_D/(1 + 2g_mR_{SS}) = 4.93\times10^{-4}$.
- CMRR $= \dfrac{R_D}{\Delta R_D}(1 + 2g_mR_{SS}) = 200 \times 74.2 \approx 14{,}800$.

## Grading notes

+2: 14,000–15,500 (82.9–83.8 dB) with the correct expressions. +1: one slip, result within ±25%, or a stated alternative model (including $r_O$ of $M_1$, $M_2$ or body effect, giving up to ≈ 18,000) with consistent numbers. 0: correct formula with a gross numerical error. -2 (asserted as fact): CMRR from the symmetric CM gain $R_D/(2R_{SS})$ (≈ 37), a missing $(1 + 2g_mR_{SS})$ factor (CMRR = 200), or $R_{SS}$ computed with a wrong formula.
