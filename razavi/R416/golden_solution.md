# Golden Solution - R416

## Reference answer

Without feedback: $\partial V_{out}/\partial V_{DD} = (g_{m2} + 1/r_{O2})(r_{O1}\|r_{O2}) = (1 + g_{m2}r_{O2})\dfrac{r_{O1}}{r_{O1}+r_{O2}} \approx 7.5$. With feedback: $\dfrac{g_{m2} + 1/r_{O2}}{1/R_0 + 1/R_2 + \alpha(G_m - 1/R_2)} \approx 2.5$ ($\alpha = R_1/(R_1+R_2)$). The feedback circuit is less sensitive, by roughly 1 + loop gain ≈ 3. (With λ included in the bias: 7.7 and 2.7 with $g_o = \lambda I_D$; differentiating $I_D = \tfrac{k}{2}V_{ov}^2(1+\lambda V_{DS})$ exactly, i.e. $g_m = 8.36$ mS, 4.90 mS and $g_o = 0.206$ mS, 0.343 mS, gives 9.5 and 2.84. Same conclusion.)

- Bias (both): $V_M = 1.223$ V, $I_D = 1.83$ mA, $g_{m1} = 7.01$ mS, $g_{m2} = 3.75$ mS, $r_{O1} = 5.46\ \mathrm{k\Omega}$, $r_{O2} = 2.73\ \mathrm{k\Omega}$, $R_0 = 1.82\ \mathrm{k\Omega}$, $G_m = 10.76$ mS.
- A supply change $v_{dd}$ moves the source (and bulk) of $M_2$; with the gate fixed, $M_2$ injects $g_{m2}v_{dd} + (v_{dd} - v_{out})/r_{O2}$ into the output, which flows into $r_{O1}$: $v_{out}(1/r_{O1} + 1/r_{O2}) = v_{dd}(g_{m2} + 1/r_{O2})$ → $4.12\ \mathrm{mS} \times 1.82\ \mathrm{k\Omega} = 7.5$.
- With feedback ($V_{in}$ at ac ground through $R_1$): $v_G = v_{out}R_1/(R_1+R_2)$; KCL at the output: $v_{out}[1/R_0 + 1/R_2 + \alpha(G_m - 1/R_2)] = v_{dd}(g_{m2} + 1/r_{O2})$ → $4.12\ \mathrm{mS}/1.62\ \mathrm{mS} \approx 2.54$.

## Grading notes

+2: ≈ 7.5 (7–8) for the plain inverter and ≈ 2.5 (2.3–2.8) with feedback, or, with λ kept in the bias and the square-law-with-λ model differentiated exactly ($g_o = \lambda\cdot\tfrac{k}{2}V_{ov}^2$, $g_m$ including the $(1+\lambda V_{DS})$ factor), ≈ 9.5 and ≈ 2.84; together with the conclusion that the feedback circuit is less sensitive (by about 1 + loop gain). Mixing conventions (bias with λ but $g_m = \mu C_{ox}(W/L)V_{ov}$ without the $(1+\lambda V_{DS})$ factor and $g_o = \lambda I_D$, giving ≈ 5.9 and ≈ 2.3) is not a consistent model and does not earn +2. +1: correct conclusion with one value right and the other off by a slip. 0: correct conclusion with both values wrong but a partly sound method, or correct values with no conclusion. -2 (asserted as fact): the circuits claimed equally sensitive or the plain inverter claimed less sensitive, or the sensitivity taken as the shift of the trip point $dV_M/dV_{DD}$ (≈ 0.35) although $V_{in}$ is held fixed.
