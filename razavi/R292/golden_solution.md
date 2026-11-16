# Golden Solution - R292

## Reference answer

$L \approx 159$ nH (≈ 121 nH if the overlap capacitance is left out of $C_{GS}$).
- $g_m = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18$ mS, $1/g_m = 193\ \Omega$.
- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = 64 + 20 = 84$ fF.
- Output impedance: $Z_{out} = \dfrac{1 + R_SC_{GS}s}{g_m + C_{GS}s}$, equal to $1/g_m$ at low frequencies and $R_S$ at high frequencies; since $R_S > 1/g_m$ it rises with frequency (inductive).
- Equivalent network: $R_2 = 1/g_m$ in series with $R_1 \| L$, where $R_1 = R_S - 1/g_m = 9.81\ \mathrm{k\Omega}$ and $L = \dfrac{C_{GS}}{g_m}\left(R_S - \dfrac{1}{g_m}\right) = \dfrac{84\ \mathrm{fF}}{5.18\ \mathrm{mS}}(9807\ \Omega) \approx 1.59\times10^{-7}$ H.
- Other equivalent forms give nearly the same value: the exact parallel form $R_S \| (R_x + sL)$ with $R_x = R_S/(g_mR_S - 1) \approx 197\ \Omega$ and $L = R_S^2C_{GS}/(g_mR_S - 1) \approx 165$ nH; the approximation $R_S \gg 1/g_m$ gives $L \approx R_SC_{GS}/g_m \approx 162$ nH.

## Grading notes

+2: L ≈ 159 nH (±5%, i.e. 151–167 nH) from a correct model: $Z_{out} = (1 + R_SC_{GS}s)/(g_m + C_{GS}s)$ with the series form $1/g_m + (R_S - 1/g_m)\|L$, $L = C_{GS}(R_S - 1/g_m)/g_m$; the low-frequency expansion $Z \approx 1/g_m + sL$; the exact parallel form $R_S\|(R_x + sL)$ with $L = R_S^2C_{GS}/(g_mR_S - 1)$ ≈ 165 nH; or the approximation $L \approx R_SC_{GS}/g_m$ ≈ 162 nH. Also +2: ≈ 121 nH (±5%) with $C_{GS}$ taken without overlap and this stated. +1: correct formula and model with an arithmetic slip beyond ±5%. 0: correct $Z_{out}$ expression but no inductance value, or $C_{GS}$ taken as the full $WLC_{ox}$ (+ overlap) for the saturated device (≈ 220 nH). -2 (asserted as fact): $L = R_SC_{GS}$ or $C_{GS}/g_m^2$, a capacitive output impedance claimed, or $g_m$ off by a formula error.
