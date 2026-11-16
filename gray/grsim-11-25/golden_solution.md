# Golden Solution - grsim-11-25

## Reference answer

In both cases: $W = 0.6\ \mu$m and $L = 5\ \mu\text{m}^2/0.6\ \mu\text{m} \approx 8.3\ \mu$m for each transistor (each device uses its full 5-µm² share; W/L ≈ 0.072).

- Output noise: $M_1$'s drain noise flows into its own $1/g_m$ and is mirrored with unity gain, so $\overline{i_o^2} = 2\overline{i_d^2}$ for identical devices.
- (a) Flicker: $\overline{i_d^2} = g_m^2\frac{K_f}{WLC_{ox}f} = \frac{2k'(W/L)I}{WL}\cdot\frac{K_f}{C_{ox}f} = \frac{2k'IK_f}{C_{ox}L^2f}$ — independent of W, so maximize L. With $WL \le 5\ \mu$m² per device, L is largest at the minimum W: W = 0.6 µm, L = 8.33 µm.
- (b) Thermal: $\overline{i_d^2} = 4kT\frac{2}{3}g_m$ with $g_m = \sqrt{2k'(W/L)I}$ — minimize W/L: W = 0.6 µm, L = 8.33 µm again.
- Benefit vs a square 1.58 × 1.58 µm device: flicker output noise ≈ 28× lower, thermal ≈ 3.7× lower (in power). Cost: the overdrive $V_{ov} = \sqrt{2I/(k'W/L)}$ is ≈ 3.7× larger (e.g., ≈ 1.2 V at 10 µA with k' = 194 µA/V²), raising the minimum output voltage; a simulation should show the output noise current scaling as predicted.

## Grading notes

A correct answer chooses W = 0.6 µm, L ≈ 8.3 µm (area 5 µm² per device) for both (a) and (b), with the reasoning that 1/f output noise ∝ $1/L^2$ and thermal output noise ∝ $\sqrt{W/L}$, and a simulation comparing at least two geometries showing the lower noise of the long, narrow device (flicker ratio ≈ $(L_1/L_2)^2$, thermal ratio ≈ $\sqrt{(W/L)_1/(W/L)_2}$). +2: both designs right with reasons (simulation numbers may vary with the chosen model and current). +1: right designs with incomplete reasoning, or one design right and the other a near miss (e.g., using less than the full area). 0: one design right, the other wrong. −2: maximum W (short, wide devices) chosen for either case, or the claim that geometry does not affect the 1/f noise of the output current when the model given makes it ∝ $1/L^2$.
