# Golden Solution - G053

## Reference answer

$g_m \approx 0.77$ mA/V, $r_o \approx 15$ kΩ, $C_{gs} \approx 0.46$ fF, $C_{gd} = 0.05$ fF, $I_G \approx 55$–60 pA.

- $L_{\text{eff}} = 0.1 - 0.01 = 0.09\ \mu$m, $W/L = 5.56$.
- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2(539\ \mu)(5.56)(100\ \mu)} = 774\ \mu$A/V ($V_{ov} = 0.26$ V, saturated).
- $\lambda = 0.06/0.09 = 0.67\ \mathrm{V^{-1}}$; $r_o = 1/(\lambda I_D) = 15$ kΩ. (Because λ is so large, keeping $(1+\lambda V_{DS}) = 1.67$ in the square law changes the results noticeably: $V_{ov} = 0.20$ V, $g_m \approx 1.0$ mA/V and $r_o = (1+\lambda V_{DS})/(\lambda I_D) = 25$ kΩ.)
- $C_{gs} = \tfrac23WL_{\text{eff}}C_{ox} + WC_{ol} = \tfrac23(0.5)(0.09)(13.8) + 0.05 = 0.41 + 0.05 = 0.46$ fF; $C_{gd} = WC_{ol} = 0.05$ fF.
- $I_G = J_G\times$ gate area $= 1.2\ \mathrm{nA/\mu m^2}\times0.5\ \mu\mathrm{m}\times0.1\ \mu\mathrm{m} = 60$ pA (54 pA using $L_{\text{eff}}$).

## Grading notes

Five quantities. +2: $g_m$ 0.73–0.82 mA/V with $r_o$ 14–17 kΩ, or the consistent $(1+\lambda V_{DS})$ convention $g_m$ ≈ 0.95–1.05 mA/V with $r_o$ ≈ 24–26 kΩ (state which); $C_{gs}$ 0.42–0.53 fF (drawn L acceptable); $C_{gd}$ 0.05 fF; $I_G$ 50–65 pA. +1: four of five, the fifth off by an omission or a slip (e.g. overlap omitted from $C_{gs}$, or $I_G$ using only the channel area with a slip). A fifth value wrong from a wrong model given as the answer (e.g. $C_{gd}$ including a third of the channel capacitance, ≈ 0.26 fF, even with 0.05 fF offered as an alternative) is a critical error in that part: 0. 0: about half right. −2 (asserted as fact): $I_G$ off by 10³ (nA vs pA unit error, e.g. 0.06 A or 60 nA), triode equations used, λ taken as 0.06 V⁻¹ (giving 167 kΩ), or $C_{gs}$ including the full $WLC_{ox}$ plus a channel share in $C_{gd}$.
