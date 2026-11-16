# Golden Solution - R435

## Reference answer

$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS5}| \approx 1.69$ V. The input CM level must then satisfy $V_{in,CM} \le V_X + V_{TH1} \approx 2.66$ V (with body effect, $V_{TH1} \approx 0.97$ V); without body effect the limit is ≈ 2.39 V.

- $|V_{GS5}| = 0.8 + \sqrt{2(1\ \mathrm{mA})/(38.4\ \mu \cdot 200)} = 0.8 + 0.510 = 1.310$ V → $V_X = 1.690$ V.
- $M_1$ saturated requires $V_X \ge V_{in,CM} - V_{TH1}$. At that limit the source node is $V_P = V_X - V_{OD1}$ with $V_{OD1} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.193$ V, so $V_P = 1.497$ V and $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + 1.497} - \sqrt{0.9}) = 0.970$ V → $V_{in,CM,max} \approx 2.66$ V.
- So the first stage's output CM level, fixed by the PMOS second-stage devices, caps the input CM range at one threshold above $V_X$.

## Grading notes

+2: $V_X \approx 1.69$ V (±0.03 V) from $V_{DD} - |V_{GS5}|$ at 1 mA, and the constraint $V_{in,CM} \le V_X + V_{TH1}$ with a value ≈ 2.66 V (body effect) — 2.6–2.7 V. +1: same but the body effect neglected (≈ 2.39 V), or the constraint given only symbolically. 0: $V_X$ right but the constraint wrong, or the constraint right with a wrong $V_X$ through a slip (e.g., W/L = 100 giving 1.48 V). -2 (asserted as fact): $V_X$ set by $V_{b1}$ or by $V_{GS}$ of an NMOS device, the constraint written as $V_{in,CM} \le V_X$ or $\le V_X - V_{TH1}$, or presented as a minimum input level.
