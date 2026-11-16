# Golden Solution - R073

## Reference answer

$W/L = 50/0.5$: NMOS $g_mr_O \approx 73$ ($g_m = 3.66$ mS, $r_O = 20$ kΩ); PMOS ≈ 19.6 ($g_m = 1.96$ mS, $r_O = 10$ kΩ).
$W/L = 100/1$: NMOS ≈ 146; PMOS ≈ 39.2.

- $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$ depends only on the ratio $W/L$ = 100 in both cases, so $g_m$ is unchanged.
- $r_O = 1/(\lambda|I_D|)$: doubling $L$ halves λ (NMOS 0.05 V⁻¹, PMOS 0.1 V⁻¹), so $r_O$ doubles to 40 kΩ (NMOS) and 20 kΩ (PMOS), and the intrinsic gain doubles.

## Grading notes

+2: all four values within ±3% (≈ 73, 19.6, 146, 39.2). +1: one value off by a slip. 0: the 50/0.5 case right but the 100/1 case left unchanged (λ not scaled), or vice versa. -2 (asserted as fact): wrong formulas (e.g., $r_O = \lambda/I_D$, $g_m = \mu C_{ox}(W/L)I_D$), λ swapped between devices, or the gain claimed to quadruple or to halve for the longer device.
