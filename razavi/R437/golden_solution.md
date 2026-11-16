# Golden Solution - R437

## Reference answer

Constraints: total current 6 mW/3 V = 2 mA; with $I_{SS} = 0.5$ mA, the output stage gets 1.5 mA, i.e. 0.75 mA per side (bias network neglected). A 4-V p-p differential swing means 2 V p-p per output, so $|V_{OD5}| + V_{OD7} \le 3 - 2 = 1$ V. One consistent design:
- Output stage: $|V_{OD5,6}| = 0.5$ V → $(W/L)_{5,6} = 2(0.75\ \mathrm{m})/(38.4\ \mu \cdot 0.25) \approx 156$; $V_{OD7,8} = 0.5$ V → $(W/L)_{7,8} \approx 45$. $V_{b2} = 0.7 + 0.5 = 1.2$ V.
- First-stage CM output level must equal $V_{DD} - |V_{GS5}| = 3 - 1.3 = 1.7$ V.
- First stage (0.25 mA per side): $M_3$/$M_4$ with $|V_{OD}| = 0.4$ V → $(W/L)_{3,4} \approx 81$, $V_{b1} = 3 - 1.2 = 1.8$ V; $M_1$/$M_2$ with $V_{OD} = 0.2$ V → $(W/L)_{1,2} \approx 93$; tail device (0.5 mA, 0.3 V overdrive) $W/L \approx 83$. Input CM must stay below $V_X + V_{TH1}$ (≈ 2.4 V or more).
- Resulting gain: $A_1 = g_{m1}(r_{O1}\|r_{O3}) = 2.5\ \mathrm{mS} \times (40\ \mathrm{k}\|20\ \mathrm{k}) = 33$; $A_2 = g_{m5}(r_{O5}\|r_{O7}) = 3\ \mathrm{mS} \times (6.67\ \mathrm{k}\|13.3\ \mathrm{k}) = 13.3$; $A_v \approx 440$.
- In practice the first stage also needs CMFB to hold X and Y at 1.7 V.

## Grading notes

Open design: grade consistency. +2: power budget used correctly (2 mA total, 1.5 mA in the output stage, 0.75 mA per side), swing condition $|V_{OD5}| + V_{OD7} \le 1$ V for 2 V p-p per output, aspect ratios of $M_5$–$M_8$ consistent with 0.75 mA and the chosen overdrives, the first stage sized so that the X/Y level equals $V_{DD} - |V_{GS5}|$, and a gain consistent with the design (a few hundred). +1: output stage right and first stage sized but the X/Y level consistency or the gain missing. 0: power or swing budget miscounted (e.g., 4 V treated as per output) but otherwise a sensible procedure. -2 (asserted as fact): design claimed to meet the specs while violating the 6-mW budget or the 1-V overdrive budget, or the topology misread (e.g., second stage taken as NMOS common-source).
