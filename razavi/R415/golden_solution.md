# Golden Solution - R415

## Reference answer

$A_v \approx -6.0$ and $R_{out} \approx 0.62\ \mathrm{k\Omega}$ (0.50 kΩ if λ is included in the bias). The ideal value $-R_2/R_1 = -10$ is far off because the loop gain is only ≈ 1.5.

- Bias: no dc current in $R_1$, $R_2$, so the inverter sits at $V_M = 1.223$ V, $I_D = 1.83$ mA: $G_m = g_{m1}+g_{m2} = 10.76$ mS, $R_0 = r_{O1}\|r_{O2} = 1.82\ \mathrm{k\Omega}$ (open-loop gain 19.6).
- Shunt–shunt feedback with a Norton input current $V_{in}/R_1$: loaded open-loop transimpedance $-(R_1\|R_2)G_m(R_0\|R_2) = -0.909\ \mathrm{k\Omega} \times 10.76\ \mathrm{mS} \times 1.54\ \mathrm{k\Omega} = -15.0\ \mathrm{k\Omega}$; feedback factor $-1/R_2$; loop gain 1.50; closed-loop transimpedance −6.0 kΩ → $A_v = -6.0\ \mathrm{k\Omega}/R_1 = -6.0$ (exact nodal: −5.99).
- $R_{out} = (R_0\|R_2)/(1 + 1.50) = 0.61\ \mathrm{k\Omega}$; exact $1/[1/R_0 + (1-\alpha)/R_2 + \alpha G_m]$ with $\alpha = R_1/(R_1+R_2) = 1/11$: 618 Ω.

## Grading notes

+2: gain ≈ −5.5 to −6.5 and $R_{out}$ ≈ 0.48–0.65 kΩ. The loop gain is only ≈ 1.5, so the result is sensitive to how λ is handled: λ neglected in the bias gives −5.99 / 618 Ω; λ in the bias with $g_m = 2I_D/V_{OV}$ and $r_O = 1/(\lambda I_D)$ gives −6.01 / 502 Ω; λ in the bias with $g_o = \lambda I_D/(1+\lambda V_{DS})$ gives −6.48 / 542 Ω; λ in the bias with $g_m = \mu C_{ox}(W/L)V_{OV}$ gives −5.56 / 558 Ω. All are acceptable. +1: gain right with $R_{out}$ off (e.g. loading by $R_2$ ignored), or the gain from a cruder estimate that ignores the loading of $R_2$ on the output, such as $-(R_2/R_1)A/(A + 1 + R_2/R_1) \approx -6.4$ with $A = G_mR_0 = 19.6$ (+1 even though this number lies in the +2 range), with $R_{out}$ right. 0: correct method with both numbers off by a bias error. -2 (asserted as fact): gain = −10 (ideal $-R_2/R_1$, ignoring the small loop gain), a positive gain, or $R_{out}$ larger than $r_{O1}\|r_{O2}$.
