# Golden Solution - G346

## Reference answer

With $R = 100$ kΩ: $\overline{v_i^2}/\Delta f \approx 4kT\left(R + r_b + \frac{1}{2g_m}\right) + 2qI_B(R+r_b)^2 \approx 1.66\times10^{-15} + 1.60\times10^{-14} \approx 1.8\times10^{-14}$ V²/Hz (≈ 0.13 µV/√Hz); $\overline{i_i^2}/\Delta f = 2q(I_B + I_C/\beta^2) \approx 1.6\times10^{-24}$ A²/Hz (≈ 1.3 pA/√Hz).

- $g_m = 19.2$ mS ($1/2g_m = 26\ \Omega$), $r_\pi = 5.2$ kΩ, $I_B = 5\ \mu$A.
- Transistor generators at its base: $4kT(r_b + 1/2g_m)$ and $2qI_B$. Moving them through the series 100 kΩ: the voltage generator gains the 100-kΩ thermal noise $4kTR$ and the current generator times $R$ (both carry the same base-current noise, so they are strongly correlated); the current generator is unchanged.
- The base-current shot noise flowing in 100 kΩ dominates (≈ 90% of $\overline{v_i^2}$), then the 100-kΩ thermal noise (≈ 9%).
- Small extras: collector shot noise referred with the large base resistance, $2qI_C(1/g_m + R/\beta)^2$, ≈ $4kT\cdot10.7$ kΩ, and the 10-kΩ load referred through the gain $|A_v| = g_mR_L r_\pi/(r_\pi+R+r_b) \approx 9.5$, ≈ $4kT\cdot110\ \Omega$; an exact calculation gives $\overline{v_i^2} \approx 1.79\times10^{-14}$ V²/Hz.

## Grading notes

+2: expressions containing the 100-kΩ thermal noise, $r_b$ and $1/2g_m$ terms and the $2qI_B R^2$ term, with $\overline{v_i^2}$ ≈ $1.7$–$1.9\times10^{-14}$ V²/Hz and $\overline{i_i^2}$ ≈ $1.6\times10^{-24}$ A²/Hz. +1: the $2qI_BR^2$ term included but the 100-kΩ thermal noise forgotten (≈ $1.6\times10^{-14}$) or a minor slip. 0: only the 100-kΩ thermal noise plus transistor $v_i$ (≈ $1.7\times10^{-15}$, missing the dominant $i_iR$ term) with an otherwise sound and honest analysis. −2 (asserted as fact): the current generator multiplied by $\beta$ or referred incorrectly, the 100-kΩ resistor claimed to be noiseless, or $\overline{i_i^2}$ taken as $2qI_C$.
