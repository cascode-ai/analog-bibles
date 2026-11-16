# Golden Solution - R179

## Reference answer

$V_b \approx 1.74$ V.
- $I_{D5} = 0.4$ mA: $|V_{GS5}| - 0.8 = \sqrt{2(0.4\ \mathrm{mA})/(38.4\ \mu\times100)} = 0.456$ V, so $|V_{GS5}| = 1.256$ V and $V_b = 3 - 1.256 = 1.744$ V.
- (Including $\lambda_p = 0.2\ \mathrm{V^{-1}}$ with $V_{SD5} = |V_{GS3}| \approx 1.03$ V gives $V_b \approx 1.78$ V.)

## Grading notes

+2: 1.74 V (±0.02 V), or ≈ 1.78 V with a stated λ correction. +1: correct method, small slip (±0.05 V). 0: $|V_{GS5}|$ = 1.256 V found but $V_b$ given as 1.256 V (gate voltage referred to ground missed). -2 (asserted as fact): NMOS parameters used, current 0.5 mA or 0.1 mA used, or $V_b = V_{DD} - |V_{TH}|$.
