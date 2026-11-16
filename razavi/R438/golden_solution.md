# Golden Solution - R438

## Reference answer

$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS9}| \approx 1.84$ V.

$|V_{GS9}| = 0.8 + \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 200)} = 0.8 + 0.361 = 1.161$ V, so $V_X = 3 - 1.161 = 1.839$ V ($M_9$/$M_{10}$ have their sources at $V_{DD}$, so no body effect).

## Grading notes

+2: ≈ 1.84 V (±0.03 V) as $V_{DD} - |V_{GS9}|$ with 0.5 mA and W/L = 200. +1: right expression with a slip (e.g., W/L = 100 giving 1.69 V). 0: right idea, arithmetic error larger than 0.1 V. -2 (asserted as fact): level set by the NMOS $M_{11}$/$M_{12}$, by $V_{b2}$ or $V_{b1}$, or computed as $V_{DD} - |V_{TH9}|$ alone presented as exact.
