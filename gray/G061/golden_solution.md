# Golden Solution - G061

## Reference answer

$R_i \approx 105.7\ \mathrm{k\Omega}$, $v_o/v_s \approx 0.908$, $R_o \approx 46.1\ \Omega$.

- $g_m = 1\ \mathrm{mA}/26\ \mathrm{mV} = 38.5$ mA/V, $r_\pi = \beta_0/g_m = 5.2\ \mathrm{k\Omega}$.
- $R_i = r_\pi + (\beta_0+1) R_L = 5.2\ \mathrm{k} + 201 \times 500 = 105.7\ \mathrm{k\Omega}$.
- $v_o/v_s = \dfrac{(\beta_0+1)R_L}{R_S + r_\pi + (\beta_0+1)R_L} = 100.5/110.7 = 0.908$.
- Resistance looking into the emitter: $(R_S + r_\pi)/(\beta_0+1) = 10.2\ \mathrm{k}/201 = 50.7\ \Omega$; with $R_L$ in parallel, $R_o = 50.7 \| 500 = 46.1\ \Omega$.

## Grading notes

+2: $R_i$ ≈ 105–106 kΩ, gain ≈ 0.91 (0.90–0.915), $R_o$ ≈ 46 Ω (45–47 Ω); using $\beta_0$ instead of $\beta_0+1$ is fine. +1: $R_o$ given as 50.7 Ω (without $R_L$, contrary to the instruction) with the rest correct, or one slip. 0: two of three correct. −2 (asserted as fact): $R_i = r_\pi$ only, a gain above 1 or with a minus sign, $R_o = R_L$, or $R_o$ computed without $R_S$ ($r_\pi/(\beta_0+1) \| R_L$) presented as the answer.
