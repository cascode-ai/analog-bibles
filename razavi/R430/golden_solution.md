# Golden Solution - R430

## Reference answer

$V_X = V_{DD} - |V_{GS7}| \approx 1.84$ V.

- Node X drives the gates of $M_7$ and $M_8$; $M_7$ carries $I_{SS}/2 = 0.5$ mA, so $|V_{GS7}| = 0.8 + \sqrt{2(0.5\ \mathrm{m})/(38.4\ \mu \cdot 200)} = 0.8 + 0.361 = 1.161$ V.
- $V_X = 3 - 1.161 = 1.84$ V (independent of $V_{b2}$ as long as $M_5$ and $M_7$ are saturated).

## Grading notes

+2: ≈ 1.84 V (±0.03 V) as $V_{DD} - |V_{GS7}|$ with $M_7$ at 0.5 mA. +1: correct expression with W/L taken as 100 (≈ 1.69 V) or another slip. 0: right idea with an arithmetic error of more than 0.1 V. -2 (asserted as fact): $V_X$ taken as $V_{DD} - |V_{GS5}| - |V_{GS7}|$ (treating it as a standard cascode mirror, ≈ 0.68 V), or $V_X$ set by $V_{b1}$.
