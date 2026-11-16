# Golden Solution - G355

## Reference answer

$\overline{v^2}/\Delta f = 2\cdot4kT\left(r_b + \frac{1}{2g_m}\right) = 4kT(53\text{ k}\Omega) \approx 8.8\times10^{-16}$ V²/Hz (≈ 30 nV/√Hz); $\overline{i^2}/\Delta f = 2q\left(I_B + \frac{I_C}{\beta^2}\right) \approx 2qI_B = 3.2\times10^{-29}$ A²/Hz (≈ 5.7 fA/√Hz).

- Each device: $I_C = 0.5\ \mu$A, $g_m = 19.2\ \mu$A/V, $1/2g_m = 26$ kΩ, $I_B = 0.1$ nA.
- Single transistor: $\overline{v_i^2} = 4kT(r_b + 1/2g_m) = 4kT(26.5\text{ k})$, $\overline{i_i^2} = 2qI_B$.
- Differential pair: the two independent voltage generators combine into one of twice the mean-square value in series with one input, while each input keeps its own current generator.

## Grading notes

+2: $\overline{v^2}$ ≈ $8.8\times10^{-16}$ V²/Hz (±10%, i.e. twice a single device's $4kT(r_b + 1/2g_m)$) and $\overline{i^2}$ ≈ $3.2\times10^{-29}$ A²/Hz. +1: single-device value given for $\overline{v^2}$ ($4.4\times10^{-16}$) with the current generator right, or a small slip. 0: correct method with $g_m$ computed for the full 1 µA (giving $4kT\cdot27$ kΩ) as a slip. −2 (asserted as fact): $\overline{i^2}$ = $2qI_C$ or $2qI_{EE}$, $r_b$ treated as dominant over $1/2g_m$, or values off by orders of magnitude because of a wrong formula or a wrong bias current. A unit-conversion slip with the correct formula and correct bias currents written out (e.g. 0.1 nA substituted as $10^{-7}$ A) is a computational slip: that quantity scores at most 0, so one quantity right and the other off only by such a slip is 0.
