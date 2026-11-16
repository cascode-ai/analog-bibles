# Golden Solution - R391

## Reference answer

About 1.2. The open-loop gain is $A_0 = g_{m1}(r_{O2}\|r_{O4}) \approx 24.4$; with the first-order gain error $1/(\beta A_0) \le 5\%$ the nominal gain $1/\beta = 1 + C_2/C_1$ can be at most $0.05A_0 \approx 1.22$ (actual closed-loop gain $A_0/(1+\beta A_0) = 24.4/21 \approx 1.16$). With the exact definition (actual gain at least 95% of $1/\beta$), $\beta A_0 \ge 19$, $1/\beta \le 1.28$ and the actual gain is at most ≈ 1.22.

- $I_{D1,2} = 0.5$ mA: $g_{m1} = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{m})} = 3.66$ mS; $r_{O2} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20\ \mathrm{k\Omega}$, $r_{O4} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10\ \mathrm{k\Omega}$, $r_{O2}\|r_{O4} = 6.67\ \mathrm{k\Omega}$ → $A_0 = 24.4$.
- The divider feeds back $\beta = C_1/(C_1+C_2)$ of the output to the gate of $M_2$ (non-inverting configuration): $V_{out}/V_{in} = A_0/(1+\beta A_0) \approx (1/\beta)[1 - 1/(\beta A_0)]$.
- Gain error ≈ $1/(\beta A_0) \le 0.05$ → $1/\beta \le 1.22$.

## Grading notes

+2: $A_0 \approx 24.4$ (±5%) and a maximum closed-loop gain ≈ 1.16–1.28 with the convention made clear (nominal 1.22 or actual 1.16 for the first-order error; nominal 1.28 or actual 1.22 for the exact error). +1: correct method with a slip in $g_m$ or $r_O$ leading to a value within ±15%. 0: correct method but $A_0$ clearly wrong (e.g. λ values swapped) with the error handled correctly. -2 (asserted as fact): the gain error taken as $1/A_0$ rather than $1/(\beta A_0)$, a closed-loop gain near 0.95A0 claimed, $g_m$ computed with the full 1 mA in one transistor, or $A_0 = g_{m1}r_{O2}$ with the mirror's $r_{O4}$ ignored.
