# Golden Solution - G189

## Reference answer

Each transistor: $I_D = 0.5$ mA, $g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF.

- DM gain: $A_{dm} = -g_mR_L = -5.81$ (15.3 dB). Its pole (Miller): $1/\{R_S[C_{gs} + C_{gd}(1 + g_mR_L)]\} = 1/(5\ \mathrm{k\Omega}\times170\ \mathrm{fF}) = 1.18\times10^9$ rad/s ≈ 187 MHz (exact ≈ 182 MHz), so $|A_{dm}|$ is flat at 15.3 dB over 10 kHz–20 MHz (−0.05 dB at 20 MHz).
- CM gain: CM half-circuit with $2R_T \| (C_T/2)$ from source to ground: $A_{cm} \approx -\dfrac{g_mR_L}{1 + g_mZ_T} \approx -\dfrac{R_L}{Z_T} = -\dfrac{R_L}{2R_T}(1 + sR_TC_T)$. Low-frequency value $-R_L/(2R_T) = -0.0050$ (−46 dB); zero at $1/(2\pi R_TC_T) = 265$ kHz; above it $|A_{cm}|$ rises at +20 dB/decade: ≈ 0.019 (−34 dB) at 1 MHz, ≈ 0.19 (−14.6 dB) at 10 MHz, ≈ 0.37 (−8.6 dB) at 20 MHz. (The other capacitances only act above ≈ 100 MHz; $C_{gd}$ feedthrough moves the zero negligibly, to ≈ 269 kHz.)
- CMRR $= |A_{dm}/A_{cm}| = 2g_mR_T/|1 + sR_TC_T|$: 1162 (61.3 dB) at low frequency, falling at −20 dB/decade above 265 kHz: ≈ 300 (49.6 dB) at 1 MHz, ≈ 31 (29.9 dB) at 10 MHz, ≈ 15.5 (23.8 dB) at 20 MHz.

## Grading notes

Three quantities, equal weight. +2: $A_{dm} \approx -5.8$ (15.3 dB) flat over the band (its pole near 180–190 MHz), $|A_{cm}| \approx 0.005$ (−46 dB) rising at +20 dB/dec above ≈ 265 kHz to ≈ −8.5 dB at 20 MHz, and CMRR ≈ 61 dB falling at −20 dB/dec above ≈ 265 kHz to ≈ 24 dB at 20 MHz; values within ±1.5 dB. +1: all shapes and break frequencies right with one level off by a slip, or the CM zero off by a factor of 2 (wrong halving/doubling of $R_T$ or $C_T$) with everything else right. 0: two of the three quantities right. −2 (asserted as fact): the CM gain decreasing with frequency or flat, CMRR increasing with frequency, or a DM pole placed inside the band through a modeling error (e.g., $C_T$ or $R_T$ included in the DM half-circuit, Miller multiplication applied to $C_{gs}$, or $g_m$ wrong by 10× from a wrong formula). If the DM transfer function is set up correctly and only an arithmetic slip in one coefficient puts the pole inside the band (making the DM gain and CMRR curves wrong), score it as a computational slip, not −2: 0 when the setup and the CM gain are right.
