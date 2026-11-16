# Golden Solution - R587

## Reference answer

$C_1 \approx 19.8$ pF, $C_2 \approx 2.2$ pF, and a maximum nominal gain of ≈ 8.9 (8.91 with the first-order gain error and $\tau = (C_1 + C_{in})/G_m$; 9.01 with the exact gain error $x/(1+x) \le 1\%$, $x = (C_1 + C_2 + C_{in})/(A_{v1}C_2)$, which gives $C_2$ = 2.198 pF. If the exact single pole $\tau = (C_1 + C_{in})/[G_m(1 + 1/(A_{v1}\beta))]$, $\beta = C_2/(C_1 + C_2 + C_{in})$, is used as well: $C_1$ = 20.0 pF, $C_2$ = 2.22 pF, gain 9.01).

- With no load capacitance, the closed-loop time constant is $\tau = (C_1 + C_{in})/G_m$, independent of $C_2$. (The general form is $[C_L(C_1 + C_{in} + C_2) + (C_1 + C_{in})C_2]/(G_mC_2)$ with $C_L = 0$: the series combination of $C_2$ and $C_1 + C_{in}$, driven by $G_m$ reduced by the feedback factor.) So $\tau \le 2$ ns requires $C_1 + C_{in} \le 2\ \mathrm{ns} \times 10\ \mathrm{mS} = 20$ pF, i.e., $C_1 \le 19.8$ pF.
- Gain error $\approx (C_1 + C_2 + C_{in})/(1000\,C_2) \le 1\%$ requires $C_2 \ge (C_1 + C_{in})/9$, so $C_1/C_2 \le 9C_1/(C_1 + C_{in})$. This bound rises with $C_1$ because a larger $C_1$ dilutes $C_{in}$.
- Choose the largest $C_1$ allowed by the speed limit: $C_1 = 19.8$ pF, $C_2 = 20/9 = 2.22$ pF, $C_1/C_2 = 8.91$.
- For comparison, with $C_1 = 2$ pF τ would be only 0.22 ns, but the gain would be limited to ≈ 8.2.

## Grading notes

+2: τ = $(C_1 + C_{in})/G_m$ (no load), or the exact single pole $R_0C_2(C_1 + C_{in})/(C_1 + C_2 + C_{in} + A_{v1}C_2)$, which reduces to it for $A_{v1}\beta \gg 1$; $C_1$ ≈ 19.8–20.0 pF, $C_2$ ≈ 2.2 pF, and a gain of 8.9–9.0 (9.01 with the exact expressions). +1: the right structure, stopping at the bound (gain approaching 9) without computing $C_1$ and $C_2$, or a load capacitance explicitly assumed and handled consistently. 0: right formulas with an arithmetic slip. -2 (asserted as fact): τ taken as $C_2/G_m$, $(C_1 + C_2 + C_{in})/G_m$ or $R_0C_2$; or $C_1$ kept at 2 pF with the gain claimed to be limited by the time constant.
