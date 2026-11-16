# Golden Solution - R170

## Reference answer

SNR ≈ 2,030 (≈ 66.1 dB): signal ≈ 73 mV pp, noise ≈ 36 µV pp.
- Both devices see the same $V_{GS}$, so their overdrives differ by 1 mV: $\Delta g_m = \mu_nC_{ox}(W/L)\Delta V_{TH} = 13.4\ \mathrm{mA/V^2}\times 1\ \mathrm{mV} = 13.4\ \mu$S, with $g_m = 3.66$ mS ($\Delta g_m/g_m = 1\ \mathrm{mV}/0.273\ \mathrm{V} = 0.37\%$).
- $|A_{CM-DM}| = \dfrac{\Delta g_mR_D}{1 + (g_{m1} + g_{m2})R_{SS}} = \dfrac{13.4\ \mu\times 2\ \mathrm{k}}{74.2} = 3.61\times10^{-4}$, $R_{SS} = 10$ kΩ: output noise 36.1 µV pp.
- $A_{DM} \approx g_mR_D = 7.32$: output signal 73.2 mV pp. SNR = 73.2 mV/36.1 µV ≈ 2,030.

## Grading notes

+2: SNR ≈ 1,900–2,150 (≈ 65.6–66.6 dB) with $\Delta g_m = \beta\Delta V_{TH}$ (or $g_m\Delta V_{TH}/V_{ov}$) and the conversion factor $\Delta g_mR_D/(1 + 2g_mR_{SS})$. +1: one slip (within ±25%). 0: correct approach with a major numerical error, or only CMRR given. -2 (asserted as fact): treating the 1-mV mismatch as an input signal (noise unaffected), $\Delta g_m$ from a wrong relation (e.g., $\Delta g_m/g_m = \Delta V_{TH}/V_{GS}$ or $= 2\Delta V_{TH}/V_{ov}$), or a missing $(1 + 2g_mR_{SS})$ factor.
