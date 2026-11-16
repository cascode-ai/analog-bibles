# Golden Solution - G268

## Reference answer

$i_o/v_s \approx 4.37$ mA/V (= 1/229 Ω), loop transmission $T \approx 6.98$, $R_{in} \approx 34.3$ kΩ, $R_{out} \approx 0.64$ MΩ.

- $g_m = 38.46$ mS, $r_\pi = \beta/g_m = 3.9$ kΩ, $r_o = 80$ kΩ.
- Feedback view: error voltage across $r_\pi$; $a = \dfrac{g_m}{1 + (r_b+R_E)/r_\pi} = \dfrac{38.46\text{m}}{1.1026} = 34.9$ mA/V, $f = R_E = 200$ Ω, $T = af = 6.98$.
- $A = a/(1+T) = 34.9\text{m}/7.98 = 4.37$ mA/V; equivalently $1/A = R_E + 1/g_m + (r_b+R_E)/\beta = 200 + 26 + 2.67 = 228.7$ Ω.
- $R_{in} = (1+T)(r_b + r_\pi + R_E) = 7.98\times4.3\text{k} = 34.3$ kΩ $= r_b + r_\pi + (\beta+1)R_E$.
- $R_{out} \approx r_o\left(1 + \dfrac{g_mR_E}{1 + (r_b+R_E)/r_\pi}\right) = 80\text{k}\times7.98 = 638$ kΩ (adding $R_E\|(r_\pi+r_b)$ changes it negligibly).

## Grading notes

Four quantities. +2: gain 4.3–4.45 mA/V, $T$ ≈ 7.0 (6.5–7.7 accepted; $T = g_mR_E = 7.7$ when the $(r_b+R_E)/r_\pi$ term is neglected is a minor imprecision only if stated as an approximation), $R_{in}$ 33.5–35 kΩ, $R_{out}$ 0.60–0.67 MΩ. +1: one quantity off by a slip, or $r_b$ ignored throughout (giving $R_{in} \approx 34.1$ kΩ and $R_{out} \approx 0.65$ MΩ — accepted as +2 if values fall in range). 0: two of four right. −2 (asserted as fact): $R_{in} = r_\pi + R_E$ without the $(\beta+1)$ factor, $R_{out} = r_o$ (feedback ignored), or gain $= g_m$.
