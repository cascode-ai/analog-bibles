# Golden Solution - G068

## Reference answer

$R_i \to \infty$; $G_m \approx 2.10$ mA/V ($\approx g_{m1} = 2.12$ mA/V); $R_o \approx 3.81$ MΩ; $A_v = -G_m R_o \approx -8.00\times10^3$.

- $g_m = \sqrt{2 k' (W/L) I_D} = \sqrt{2(90\ \mu)(100)(250\ \mu)} = 2.12$ mA/V for both; $r_o = 1/(\lambda I_D) = 40$ kΩ; $g_{mb2} = 0.1 g_{m2} = 0.212$ mA/V.
- $R_i$: input at the gate, infinite.
- $G_m = g_{m1}\left[1 - \dfrac{1}{1 + (g_{m2} + g_{mb2}) r_{o1} + r_{o1}/r_{o2}}\right] = 2.12\ \mathrm{mA/V}\,(1 - 1/95.3) = 2.099$ mA/V.
- $R_o = r_{o1} + r_{o2} + (g_{m2} + g_{mb2}) r_{o1} r_{o2} = 40\ \mathrm{k} + 40\ \mathrm{k}\,(1 + 2.33\ \mathrm{m} \times 40\ \mathrm{k}) = 3.81$ MΩ.
- $A_v = -G_m R_o = -g_{m1} r_{o1}\left[(g_{m2} + g_{mb2}) r_{o2} + 1\right] = -84.9 \times 94.3 = -8005$.

## Grading notes

+2: $G_m$ 2.05–2.15 mA/V, $R_o$ 3.7–3.9 MΩ, $|A_v|$ 7700–8200 (negative), $R_i$ infinite. +1: the approximation $G_m = g_{m1}$ with $|A_v| \approx 8090$, or a single slip. 0: $g_{mb}$ ignored ($R_o \approx 3.47$ MΩ, $A_v \approx -7285$) though it is given, or only $R_i$, $G_m$ right. −2 (asserted as fact): $R_o = r_{o1}\|r_{o2}$ or $r_{o2}$ only, $A_v$ of the order of $g_m r_o$ (≈ 85) claimed as the cascode gain, or $g_m$ off by a formula error.
