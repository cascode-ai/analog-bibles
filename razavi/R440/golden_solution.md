# Golden Solution - R440

## Reference answer

$A_v = g_{m1}(R_{down}\|R_{up})\times g_{m9}(r_{O9}\|r_{O11}) \approx 4.9\times10^3$ (≈ 74 dB). With the full cascode output resistances $R_{down} = (g_{m3}+g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3}$ and $R_{up} = (g_{m5}+g_{mb5})r_{O5}r_{O7} + r_{O5} + r_{O7}$ this is $271 \times 18.5 \approx 5.0\times10^3$; an exact small-signal analysis of the half circuit gives $4.87\times10^3$; dropping the $r_{O1} + r_{O3}$ and $r_{O5} + r_{O7}$ terms gives $250 \times 18.5 \approx 4.6\times10^3$. If the body effect of the cascodes is neglected: ≈ $4.2\times10^3$ (exact; ≈ 4.3×10³ with the full formula, ≈ 3.95×10³ with the simplified one).

- $g_{m1} = g_{m3} = 2(0.5\ \mathrm{mA})/0.67\ \mathrm{V} = 1.49$ mS, $r_{O1} = r_{O3} = 20$ kΩ. Source of $M_3$ at 0.4 + 0.67 = 1.07 V → $g_{mb3} = g_{m3}\cdot 0.45/(2\sqrt{0.9 + 1.07}) = 0.16g_{m3}$ → $R_{down} = 1.73\ \mathrm{mS} \times 20\ \mathrm{k} \times 20\ \mathrm{k} + 40\ \mathrm{k} \approx 0.69 + 0.04 = 0.73$ MΩ (0.64 MΩ without $g_{mb}$).
- $g_{m5} = 2(0.5\ \mathrm{mA})/0.53\ \mathrm{V} = 1.89$ mS, $r_{O5} = r_{O7} = 10$ kΩ. Source of $M_5$ about 0.53 V below $V_{DD}$ → $g_{mb5} \approx 0.17g_{m5}$ → $R_{up} \approx 0.22 + 0.02 = 0.24$ MΩ (0.21 MΩ without).
- First stage: $A_1 = g_{m1}(R_{down}\|R_{up}) \approx 1.49\ \mathrm{mS} \times 182\ \mathrm{k\Omega} \approx 271$ (exact half-circuit analysis 264; 250 with the simplified resistances $(g_m + g_{mb})r_Or_O$ alone; ≈ 235 without body effect).
- Second stage: $g_{m9} = \sqrt{2(38.4\ \mu)(200)(0.5\ \mathrm{m})} = 2.77$ mS, $r_{O9} = 10$ kΩ, $r_{O11} = 20$ kΩ → $A_2 = 2.77\ \mathrm{mS} \times 6.67\ \mathrm{k\Omega} = 18.5$.
- $A_v \approx 4.9\times10^3$, i.e. 4.6–5.0×10³ depending on the cascode approximation (≈ 4.2×10³ without body effect).

## Grading notes

+2: correct expression (cascode first stage times common-source second stage), body effect included in the cascode resistances, and a value of 4400–5100 (≈ 4.6×10³ with the simplified cascode resistances, ≈ 5.0×10³ with the full form including the $r_{O1} + r_{O3}$ and $r_{O5} + r_{O7}$ terms, 4.87×10³ exact). +1: body effect neglected with otherwise correct work (≈ 3950–4330, accept 3800–4400), or correct values with a small slip. 0: one stage right, the other off by a slip (e.g., W/L = 100 for M9 giving $A_2 \approx 13$). -2 (asserted as fact): first stage taken as $g_{m1}(r_{O1}\|r_{O7})$ without cascoding, second stage gain using $r_{O9}$ alone, or a gain off by an order of magnitude.
