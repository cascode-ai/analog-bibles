# Golden Solution - R429

## Reference answer

$V_{in,CM,max} = V_{b1} - V_{GS3} + V_{TH1} \approx 1.51$ V.

- Each branch 0.5 mA: $V_{OD3} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.193$ V, $V_{GS3} = 0.893$ V, so the drains of $M_1$/$M_2$ sit at $V_{b1} - V_{GS3} = 0.807$ V.
- $M_1$ stays saturated while $V_{in,CM} - V_{TH1} \le 0.807$ V → $V_{in,CM} \le 1.507$ V.

## Grading notes

+2: ≈ 1.51 V (±0.03 V) from $V_{b1} - V_{GS3} + V_{TH1}$. A side check that $M_3$ stays saturated using $V_X = V_{DD} - |V_{GS7}| ≈ 1.84$ V is correct (the gates of $M_7$/$M_8$ are tied to X), not a false claim. +1: ≈ 1.51 V with a minor false claim confined to a side remark or optional check. 0: correct expression or idea (M1 at edge of saturation) with a numerical slip in the final value, e.g., W/L taken as 100 giving ≈ 1.43 V, or a wrong drain voltage of M1 through a slip. -2 (asserted as fact): limit given as $V_{b1} - V_{GS3}$ or $V_{b1}$, or as a lower bound, or derived from the PMOS load instead of the input pair/cascode.
