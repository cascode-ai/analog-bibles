# Golden Solution - G057

## Reference answer

$R_i = r_e = \alpha_0/g_m \approx 103.5\ \Omega$ (≈ 104 Ω), $G_m = g_m = 9.62$ mA/V, $R_o = R_C = 10\ \mathrm{k\Omega}$.

- $g_m = I_C/V_T = 9.62$ mA/V; $\alpha_0 = \beta_0/(\beta_0+1) = 0.995$.
- Input resistance looking into the emitter with the base grounded: $r_e = r_\pi \| (1/g_m) = \alpha_0/g_m = 0.995 \times 104\ \Omega = 103.5\ \Omega$.
- With the output shorted the collector current is $g_m v_e = g_m v_i$, so $G_m = g_m$.
- With $r_o$ neglected the collector is an ideal current source, so $R_o = R_C = 10$ kΩ.

## Grading notes

+2: $R_i \approx 104\ \Omega$ (100–106 Ω; $1/g_m = 104\ \Omega$ is acceptable), $G_m \approx 9.6$ mA/V, $R_o = 10$ kΩ. +1: one value with a small slip. 0: two of three correct. −2 (asserted as fact): $R_i = r_\pi$ (20.8 kΩ) or $(\beta_0+1)/g_m$, $G_m = \alpha_0 g_m/\beta_0$ or similar, or $R_o$ given as something other than $R_C$ despite $r_o$ being neglected.
