# Golden Solution - G345

## Reference answer

$\overline{v_i^2}/\Delta f \approx 4kT(13.1\ \Omega) = 2.17\times10^{-19}$ V²/Hz; $\overline{i_i^2}/\Delta f \approx 6.53\times10^{-24}$ A²/Hz. With $R_S = 1$ kΩ: total equivalent input noise ≈ $2.33\times10^{-23}$ A²/Hz → ≈ 6.8 nA rms in 2 MHz. The direct calculation gives ≈ $2.37\times10^{-23}$ A²/Hz → 6.9 nA rms; the two agree within about 1% (the small difference is the neglected correlation).

- $g_m = 38.5$ mS, $r_\pi = 1.3$ kΩ, $I_B = 20\ \mu$A.
- $\overline{v_i^2} = 4kT\left(r_b + \frac{1}{2g_m} + \frac{1}{g_m^2R_L}\right) = 4kT(0 + 13 + 0.068)\ \Omega$ (the last term is $R_L$ noise referred to the input).
- $\overline{i_i^2} = 2q\left(I_B + \frac{I_C}{\beta^2}\right) + \frac{4kT}{\beta^2R_L} = 6.4\times10^{-24} + 1.28\times10^{-25} + 6.6\times10^{-28} = 6.53\times10^{-24}$ A²/Hz.
- Total with source: $\frac{4kT}{R_S} + \overline{i_i^2} + \frac{\overline{v_i^2}}{R_S^2} = 1.66\times10^{-23} + 6.53\times10^{-24} + 2.2\times10^{-25} = 2.335\times10^{-23}$ A²/Hz; × 2 MHz = $4.67\times10^{-17}$ A² → 6.83 nA rms.
- Direct: output density $g_m^2R_L^2(R_S\parallel r_\pi)^2(4kT/R_S + 2qI_B) + R_L^2(2qI_C + 4kT/R_L) = 1.087\times10^{-12} + 3.2\times10^{-14} + 1.7\times10^{-16} = 1.119\times10^{-12}$ V²/Hz; transimpedance $g_mR_L(R_S\parallel r_\pi) = 217$ kΩ; input-referred $2.368\times10^{-23}$ A²/Hz → 6.88 nA rms. The difference comes from the collector shot noise appearing in both $v_i$ and $i_i$ (cross term $2\cdot 2qI_C/(g_mR_S\beta)$).

## Grading notes

+2: $\overline{v_i^2}$ ≈ $4kT(13\ \Omega)$ (±10%), $\overline{i_i^2}$ ≈ $2qI_B$ ≈ $6.4$–$6.5\times10^{-24}$ A²/Hz, total with $R_S$ ≈ 6.8 nA rms (±5%), and a direct-calculation comparison showing close agreement (≈ 6.9 nA, within a few percent). +1: generators and total right but the comparison missing or only qualitative. 0: generators right but the 2-MHz total wrong through an arithmetic slip, or the source-resistor noise $4kT/R_S$ left out of the total (≈ 3.7 nA) with otherwise correct work. −2 (asserted as fact): $\overline{v_i^2}$ taken as $4kT/g_m$ or $4kT\,r_\pi$, $\overline{i_i^2}$ set to $2qI_C$ or $2qI_C/\beta^2$ (any base shot noise other than $2qI_B$), the RS-dominated total missed by an order of magnitude, or a claim that the two methods differ greatly. A correct alternative (with $2qI_B$) offered only after a wrong main result, without saying correctly when it applies, earns at most −1.
