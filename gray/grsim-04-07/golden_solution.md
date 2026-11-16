# Golden Solution - grsim-04-07

## Reference answer

One design: $V_{ov} = 0.1$ V; $L_{\text{eff}} \approx 0.32$ µm ($L_{\text{drwn}} \approx 0.50$ µm); $W/L_{\text{eff}} \approx 51.5$ ($W \approx 16.2$ µm) for $M_1$, $M_2$, $M_3$, $M_5$, $M_6$; $M_4$ with $(W/L)/4$ ($W_4 \approx 4.1$ µm); total gate area ≈ 5.25 × 16.2 × 0.50 ≈ 42 µm².

- With $M_4$ at one quarter of the W/L, $V_{GS4} = V_t + 2V_{ov}$, the gate of $M_5$ is at $2V_t + 3V_{ov}$, the gate of $M_2$ at $V_t + 2V_{ov}$, so $V_{DS1} = V_{ov}$ and $V_{OUT(\min)} = 2V_{ov}$ → (i) gives $V_{ov} \le 0.1$ V.
- (iii): $R_o \ge 1\ \mathrm{V}/(0.0002\times50\ \mu\mathrm{A}) = 100$ MΩ. With $V_{ov}$ = 0.1 V, $g_m = 2I/V_{ov} = 1$ mS and $r_o = L_{\text{eff}}/(0.02\ \mu\mathrm{m/V}\times50\ \mu\mathrm{A}) = (L_{\text{eff}}/1\ \mu\mathrm{m})\times1$ MΩ; $R_o = r_o(2 + g_mr_o) \ge 100$ MΩ → $L_{\text{eff}} \ge 0.315$ µm.
- Area ∝ $L^2/V_{ov}^2$, so use the largest $V_{ov}$ (0.1 V) and the shortest $L$: $W/L_{\text{eff}} = 2I/(k'V_{ov}^2) = 51.5$.
- $V_{DS1} = V_{ov}$ puts $M_1$ exactly at the edge of saturation; a practical design makes $M_4$ slightly smaller than $(W/L)/4$ for margin.

Expected simulation: $I_{OUT}$ ≈ 50 µA (a few percent off depending on λ effects), essentially flat above $V_{OUT}$ ≈ 0.2 V with a slope ≤ 0.01 µA/V (≈ 100 MΩ); below 0.2 V the current falls toward zero.

## Grading notes

Design problem: accept any design meeting (i)–(iii) with correct supporting calculations and an area near the minimum (≈ $V_{ov}$ = 0.1 V, $L_{\text{eff}}$ ≈ 0.3–0.35 µm, $W/L$ ≈ 50, $M_4$ ≈ one quarter of the others). A correct simulation shows ≈ 50 µA, a knee near 0.2 V and an incremental output resistance ≥ ≈ 100 MΩ. Using $V_{OUT(\min)} = V_t + 2V_{ov}$ (the simple cascode) or making $M_4$ equal to the others is wrong for this circuit.
