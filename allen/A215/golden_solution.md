# Golden Solution - A215

## Reference answer

$R_{out} \approx 1/g_{m1}$ ≈ 477 Ω (≈ 453 Ω including the 10-kΩ load).

At $v_{OUT}$ = 0 M1 carries the 200 µA of the sink: $g_{m1} = \sqrt{2\cdot110\cdot100\cdot200}$ µS = 2.10 mS → 477 Ω; $g_{ds1}$ = 8 µS gives 475 Ω; with $R_L$ in parallel 453 Ω.

## Grading notes

+2: 470–480 Ω (or ≈ 450 Ω with $R_L$ included and stated). +1: method right with a small slip. 0: expression without value. −2 (asserted as fact): values in the kΩ range (e.g. 4.3 kΩ), $R_{out} = r_{ds}$, or the p-channel parameters used.
