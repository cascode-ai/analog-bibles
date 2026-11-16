# Golden Solution - R242

## Reference answer

CMRR ≈ $(1 + 2g_{m1,2}r_{O5})\,g_{m3,4}(r_{O1,2}\|r_{O3,4}) \approx 1.9\times10^3$ (≈ 66 dB) neglecting body effect; ≈ $2.3\times10^3$ (≈ 67 dB) if the body effect of $M_1$, $M_2$ is included in the tail term.

- $A_{DM} \approx g_{m1}(r_{O1}\|r_{O3})$, $A_{CM} \approx -\dfrac{1}{1+2g_{m1}R_{SS}}\cdot\dfrac{g_{m1}}{g_{m3}}$ with $R_{SS} = r_{O5}$.
- $g_{m1} = \sqrt{2(134\ \mu)(100)(0.25\ \mathrm{m})} = 2.59$ mS; $g_{m3} = \sqrt{2(38.4\ \mu)(100)(0.25\ \mathrm{m})} = 1.39$ mS; $r_{O1} = 40$ kΩ, $r_{O3} = 20$ kΩ → $r_{O1}\|r_{O3} = 13.3$ kΩ; $r_{O5} = 1/(0.1\times0.5\ \mathrm{mA}) = 20$ kΩ.
- $1 + 2g_{m1}r_{O5} = 104.5$; $g_{m3}(r_{O1}\|r_{O3}) = 18.5$; CMRR ≈ 1.93×10³ (65.7 dB).
- With body effect ($V_P \approx 0.50$ V, $\eta = \gamma/(2\sqrt{2|\phi_F|+V_P}) \approx 0.19$): $1 + 2(g_{m1}+g_{mb1})r_{O5} = 124$ → CMRR ≈ 2.3×10³ (67.2 dB).
- Exact node analysis (all $r_O$, body effect): $A_{DM} \approx 33.9$, $A_{CM} \approx -0.0144$, CMRR ≈ 2.36×10³ (67.4 dB); without body effect 1.99×10³ (66.0 dB).
- If the $(1+\lambda V_{DS})$ factor is also kept in the bias calculation ($g_m = 2I_D/V_{ov}$): $V_{ov1} \approx 0.180$ V, $g_{m1} \approx 2.77$ mS, $g_{m3} \approx 1.52$ mS, CMRR ≈ 2.76×10³ (68.8 dB) with body effect, 2.33×10³ (67.3 dB) without. This needs a PMOS threshold for $V_{SD3}$, but $|V_{THP}|$ = 0.7–0.9 V changes the result by less than 0.1 dB.

## Grading notes

+2: CMRR ≈ 1.9×10³ (65–66 dB) or ≈ 2.3×10³ (67 dB, body effect included), within ±15%, with the structure $(1+2g_{m1}r_{O5})g_{m3}(r_{O1}\|r_{O3})$. If the answer keeps $(1+\lambda V_{DS})$ in the bias calculation, ≈ 2.3×10³ (no body effect) or ≈ 2.8×10³ (68.8 dB, body effect) within ±15% is equally +2; the PMOS threshold such an answer assumes to find $V_{SD3}$ (e.g., 0.7 V) barely affects the result and is not an invented given. +1: correct expression with a numerical slip within ±40%, or the answer in dB only without the derivation of $A_{CM}$. 0: correct $A_{DM}$ but $A_{CM}$ off by a large factor (e.g., the tail resistance computed for the per-branch current, or $1+2g_mR_{SS}$ replaced by $g_mR_{SS}/2$). -2 (asserted as fact): infinite CMRR because the circuit is symmetric (the five-transistor OTA has finite CMRR even when matched), $A_{CM}$ taken as zero, or $r_{O5}$ computed with the PMOS λ or the per-branch current.
