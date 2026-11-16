# Golden Solution - R411

## Reference answer

$546\ \Omega \lesssim R_1 \lesssim 1.4\ \mathrm{k\Omega}$; $V_{in}$ from ≈ 1.31 V to ≈ 1.82 V (with body effect; 1.25–1.67 V without).

- $|I_{D4}| = I_{D2}$, so no current flows in $R_2$: $V_{out} = V_B$ (the $R_1$–$R_2$ junction), and $R_1$ carries $I_{D1}$: $V_{out} = V_B = 0.5\ \mathrm{mA}\cdot R_1$.
- $M_2$: $V_{GS2} = 0.7 + \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu \times 100)} = 0.973$ V, so the gate node (drain of $M_1$) sits at $V_A = 0.973$ V; overdrive 0.273 V for each NMOS.
- $M_2$ saturated: $V_{out} \ge V_A - V_{TH2} = 0.273$ V → $R_1 \ge 546\ \Omega$.
- $M_1$ saturated: $V_A - V_B \ge 0.273$ V → $V_B \le 0.70$ V → $R_1 \le 1.40\ \mathrm{k\Omega}$. ($M_4$ needs $V_{out} \le 3 - 0.51 = 2.49$ V and $M_3$ is comfortable, so $M_1$ sets the upper limit; with $M_1$ allowed into triode the currents could still flow up to $V_B < V_A$, i.e. $R_1 < 1.95$ kΩ.)
- $V_{in} = V_B + V_{TH1}(V_B) + 0.273$ V: at $R_1 = 546\ \Omega$, $V_B = 0.273$ V, $V_{TH1} = 0.761$ V → $V_{in} = 1.31$ V; at $R_1 = 1.4$ kΩ, $V_B = 0.70$ V, $V_{TH1} = 0.842$ V → $V_{in} = 1.82$ V.

## Grading notes

+2: $R_1$ from ≈ 0.55 kΩ (M2 saturation) to ≈ 1.4 kΩ (M1 saturation), and $V_{in}$ from ≈ 1.31 V to ≈ 1.82 V with body effect (±0.03 V). +1: $V_{in}$ range without body effect (1.25–1.67 V), or an upper bound of ≈ 1.95 kΩ argued from $M_1$ conducting in triode, otherwise right. 0: only the lower bound right. -2 (asserted as fact): current assumed in $R_2$ (so $V_{out} \ne V_B$) leading to wrong bounds, $M_2$ treated as a PMOS or a source follower, or an upper bound taken from $M_4$ (≈ 5 kΩ) while ignoring $M_1$.
