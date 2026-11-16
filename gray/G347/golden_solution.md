# Golden Solution - G347

## Reference answer

With $R_E = 1$ kΩ: $\overline{v_i^2}/\Delta f \approx 4kT\left(r_b + \frac{1}{2g_m} + R_E\right) + 2qI_BR_E^2 = 4kT(1126\ \Omega) + 1.6\times10^{-18} \approx 2.0\times10^{-17}$ V²/Hz (≈ 4.5 nV/√Hz), rising to ≈ $2.2$–$2.3\times10^{-17}$ V²/Hz if the 10-kΩ load noise and correlation are included; $\overline{i_i^2}/\Delta f \approx 2qI_B = 1.6\times10^{-24}$ A²/Hz.

- $g_m = 19.2$ mS, $I_B = 5\ \mu$A; input resistance $r_\pi + (\beta+1)R_E \approx 106$ kΩ.
- Series (emitter) feedback: the transistor generators move unchanged to the input, plus the thermal noise of $R_E$ and the current generator times $R_E$: $\overline{v_i^2} = \overline{v_{ia}^2} + \overline{i_{ia}^2}R_E^2 + 4kTR_E$, $\overline{i_i^2} = \overline{i_{ia}^2}$.
- Load: gain $\approx R_L/(R_E + 1/g_m) = 9.5$, so $R_L$ adds $4kT R_L/A_v^2 \approx 4kT\cdot110\ \Omega$ (≈ 9%).
- $R_E$ thermal noise is the largest single term (≈ 80%).

## Grading notes

+2: an expression with $r_b$, $1/2g_m$, $R_E$ and (optionally) $\overline{i_i^2}R_E^2$ terms, value $1.9$–$2.4\times10^{-17}$ V²/Hz, and $\overline{i_i^2} \approx 2qI_B$ ≈ $1.6\times10^{-24}$ A²/Hz. Including or omitting the load-resistor term and the small $2qI_BR_E^2$ term is acceptable. +1: correct structure with a slip in one term. 0: $R_E$ thermal noise omitted ($\approx 4kT\cdot126\ \Omega$) with an otherwise sound method. −2 (asserted as fact): $R_E$ claimed to reduce the input noise voltage (e.g., dividing by $1+g_mR_E$), the current generator multiplied by $(\beta+1)$, or $\overline{i_i^2} = 2qI_C$.
