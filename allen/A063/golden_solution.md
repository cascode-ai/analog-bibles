# Golden Solution - A063

## Reference answer

The transistor is saturated: $g_m$ ≈ 1.12 mS, $g_{mbs}$ ≈ 136 µS, $g_{ds}$ ≈ 21–23 µS ($r_{ds}$ ≈ 44–48 kΩ), $C_{gs}$ ≈ 18.7 fF, $C_{gd}$ = 2.2 fF, $C_{gb}$ = 0.7 fF. The bulk junctions are reverse biased, so $g_{bd} \approx g_{bs} \approx 0$; $C_{bd}$ and $C_{bs}$ are their depletion capacitances (at 4 V and 2 V reverse bias) and $r_D$, $r_S$ the small series resistances, all of which need the layout.

- $V_{GS}$ = 2 V, $V_{DS}$ = 2 V, $V_{SB}$ = 2 V: $V_T = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7})$ = 1.023 V; $V_{GS} - V_T$ = 0.977 V < $V_{DS}$ → saturation.
- $I_D = \frac{110\ \mu\times10}{2}(0.977)^2(1 + 0.04\times2)$ = 567 µA (525 µA without the λ factor).
- $g_m = \sqrt{2K'(W/L)I_D}$ = 1.12 mS (1.08–1.16 mS depending on how the λ factor is handled).
- $g_{mbs} = g_m\gamma/(2\sqrt{2|\phi_F| + V_{SB}}) = 0.122\,g_m$ = 136 µS.
- $g_{ds} = \lambda I_D/(1 + \lambda V_{DS})$ = 21.0 µS (≈ λ$I_D$ = 22.7 µS).
- $C_{gs}$ = CGSO·W + (2/3)$C_{ox}WL$ = 2.2 + (2/3)(24.7) = 18.7 fF; $C_{gd}$ = CGDO·W = 2.2 fF; $C_{gb}$ = CGBO·L = 0.7 fF (CGBO taken as the total gate–bulk overlap per unit channel length, as in SPICE; counting CGBO·L on each of the two gate edges would give 1.4 fF).
- $V_{BD}$ = −4 V and $V_{BS}$ = −2 V: both junctions reverse biased ($g_{bd}$, $g_{bs}$ ≈ 0); $C_{bd}$, $C_{bs}$ = CJ·A/(1 + V_R/PB)^{MJ} + CJSW·P/(1 + V_R/PB)^{MJSW} of each diffusion.

## Grading notes

+2: saturation identified with the body effect ($V_T$ ≈ 1.02 V), and $g_m$ (1.05–1.18 mS), $g_{mbs}$ (125–145 µS), $g_{ds}$ (20–24 µS), $C_{gs}$ (18–19.5 fF), $C_{gd}$ ≈ 2.2 fF and $C_{gb}$ ≈ 0.7 fF (1.4 fF is also accepted when the answer states that it counts CGBO·L on each of the two gate edges, i.e. $2\,\mathrm{CGBO}\cdot L$), plus $C_{bd}$ and $C_{bs}$ identified as the reverse-biased junction capacitances (at 4 V and 2 V) that need the diffusion geometry; also stating $g_{bd} \approx g_{bs} \approx 0$ and the series resistances $r_D$, $r_S$ is a plus, not required. +1: one quantity wrong by a slip, or the junction elements not mentioned at all. 0: body effect neglected ($V_T$ = 0.7 V, $g_m$ ≈ 1.4–1.5 mS) with the method otherwise right, or conductances right and capacitances missing. −2 (asserted as fact): nonsaturation assumed, $g_{ds}$ given as 0.0228 µS (1000 times too small), the channel capacitance split equally between $C_{gs}$ and $C_{gd}$, or $g_{mbs}$ larger than $g_m$.
