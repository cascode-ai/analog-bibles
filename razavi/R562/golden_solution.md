# Golden Solution - R562

## Reference answer

$I_{D1} = I_{D2} \approx 167\ \mu$A, $(W/L)_1 \approx 90$, $(W/L)_2 \approx 358$. With the body effect of $M_2$, $R_S \approx 406$ Ω and $C_S \approx 49$ pF; with the ideal constant-$g_m$ relation (body effect neglected), $R_S = 500$ Ω and $C_S = 40$ pF. PMOS $(W/L)_{3,4}$ is not critical, e.g. ≈ 100 (overdrive ≈ 0.3 V).
- Current: 1 mW / 3 V = 333 μA, split equally between the two branches ($M_3 = M_4$): 167 μA each.
- $(W/L)_1 = g_{m1}^2/(2\mu_nC_{ox}I_{D1}) = (2\ \mathrm{mS})^2/(2 \times 134\ \mu\mathrm{A/V^2} \times 167\ \mu\mathrm{A}) = 89.6$; $(W/L)_2 = 4 \times 89.6 = 358$. Overdrives: $V_{ov1} = 2I/g_{m1} = 0.167$ V, $V_{ov2} = V_{ov1}/2 = 0.083$ V.
- Without body effect: $g_{m1} = (2/R_S)(1 - 1/\sqrt K) = 1/R_S$, so $R_S = 500$ Ω and $C_S = 1/(R_Sf_{CK}) = 40$ pF.
- With body effect ($M_2$'s source at $V_S = IR_S$, bulk at ground): $V_{ov1} - V_{ov2} = IR_S + 0.45(\sqrt{0.9 + IR_S} - \sqrt{0.9})$, i.e. $83.3\ \mathrm{mV} = IR_S + \Delta V_{TH2}$. This gives $IR_S = 67.6$ mV, so $R_S \approx 406$ Ω and $C_S \approx 49$ pF.
- PMOS: e.g. $(W/L)_{3,4} = 2(167\ \mu\mathrm{A})/(38.4\ \mu\mathrm{A/V^2} \times (0.3\ \mathrm{V})^2) \approx 96$. Check: $M_4$ is diode-connected, so $M_2$'s drain sits at $V_{DD} - |V_{GS4}| \approx 1.9$ V ≫ $V_{G2} - V_{TH2}$; $M_3$'s drain is at $V_{GS1} \approx 0.87$ V, giving $|V_{DS3}| \approx 2.1$ V > $|V_{ov3}|$. Any size with $|V_{GS4}| \lesssim 2.8$ V works.

## Grading notes

+2: 167 μA per branch, $(W/L)_1 \approx 90$ and $(W/L)_2 \approx 360$ (±5%), $C_S \approx 49$ pF including the body effect of $M_2$ (±10%), and a reasonable PMOS size with saturation checked or argued. +1: the same with the body effect neglected ($C_S = 40$ pF, $R_S = 500$ Ω, the ideal constant-$g_m$ formula), or PMOS sizes omitted. 0: correct current and $(W/L)_1$ but $C_S$ wrong through a slip in the switched-capacitor relation. -2 (asserted as fact): the whole 333 μA assigned to each branch (power budget doubled), $g_{m1} = 2/R_S$ used without the $(1 - 1/\sqrt K)$ factor ($C_S = 20$ pF), or $(W/L)_2 \ne K(W/L)_1$.
