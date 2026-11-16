# Golden Solution - grsim-04-05

## Reference answer

$R_o \approx 367$ MΩ.

- $V_{ov} = \sqrt{2I/(k'W/L)} = \sqrt{200\ \mu/(194\ \mu\times121.95)} = 0.092$ V; $g_m = 2I/V_{ov} = 2.18$ mS; $r_o = 1/(\lambda I) = 410$ kΩ.
- $R_o = r_{o2}(1 + g_{m2}r_{o1}) + r_{o1} = 410\ \mathrm{k}\times(1 + 892) + 410\ \mathrm{k} \approx 367$ MΩ.
- $I_{OUT}$–$V_{OUT}$ (0–3 V): both $M_1$ and $M_2$ in triode for $V_{OUT} < V_{ov} \approx 0.09$ V (steep rise); $M_1$ active and $M_2$ in triode up to $V_{OUT(\min)} = V_t + 2V_{ov} \approx 0.78$ V (slower rise toward 100 µA); above that both active and $I_{OUT} \approx 100$ µA, rising only ≈ 2.7 nA/V (1/367 MΩ).

Simulation (level-1 model: VTO = 0.6, KP = 194u, LAMBDA = 0.0244 with L = 0.82 µm, or L = 1 µm with LD = 0.09 µm; GAMMA = 0) should reproduce these values.

## Grading notes

A correct answer gives $R_o$ ≈ 350–380 MΩ (≈ $g_mr_o^2$), and an I–V characteristic with the two breakpoints (≈ 0.09 V and ≈ 0.78 V) and a flat region at ≈ 100 µA. A simulation matching within ±15 % (λ convention differences) is correct. $R_o = r_o$ or $2r_o$, or a knee at ≈ $2V_{ov}$ (that is the high-swing mirror, not this one), is wrong.
