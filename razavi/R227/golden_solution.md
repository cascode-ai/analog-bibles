# Golden Solution - R227

## Reference answer

About ±35%: if $V_{TH}$ rises by 50 mV, $I_{out}$ falls to ≈ 0.334 mA (−0.166 mA, −33%); if $V_{TH}$ falls by 50 mV, $I_{out}$ rises to ≈ 0.700 mA (+0.20 mA, +40%).

- Nominal overdrive $V_{GS}-V_{TH} = \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times 100)} = 0.273$ V; $V_{GS} = 0.973$ V is fixed by the divider.
- $V_{TH} = 0.75$ V: $I_{out} = \tfrac12(13.4\ \mathrm{mA/V^2})(0.223)^2 = 0.334$ mA.
- $V_{TH} = 0.65$ V: $I_{out} = \tfrac12(13.4\ \mathrm{mA/V^2})(0.323)^2 = 0.700$ mA.
- Small-signal estimate: $\Delta I_{out} \approx -g_m\Delta V_{TH} = -(3.66\ \mathrm{mS})(50\ \mathrm{mV}) = \mp 0.18$ mA (∓37%), between the two exact values.

## Grading notes

+2: exact square-law values (0.33 mA and/or 0.70 mA, i.e., −33% / +40%) or the linearized ±0.18 mA (±37%), within ±5%, with the direction right (higher $V_{TH}$, lower current). Giving one direction only is fine if stated. +1: correct method with a small slip. 0: right method but the overdrive from a wrong design point. -2 (asserted as fact): change of only a few percent (e.g., treating the dependence as $\Delta V_{TH}/V_{GS}$), current increasing when $V_{TH}$ increases, or a linear-law answer such as 50 mV/0.273 V ≈ 18%.
