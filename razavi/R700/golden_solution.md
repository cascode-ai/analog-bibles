# Golden Solution - R700

## Reference answer

$r_{max} \approx 6.1$ mΩ including the body effect, or ≈ 7.5 mΩ if the body effect is neglected.

- Nominal current: $I = \tfrac12(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{V})^2 = 0.67$ mA, and $g_m = \mu_nC_{ox}(W/L)(V_b - V_{TH}) = 2.68$ mS.
- Segment $k$ of the line (between node $k-1$ and node $k$, with node 0 = ground) carries $(N-k+1)I$, so the source voltage of $M_k$ is $V_k = rI[k(N+1) - k(k+1)/2]$. This gives $V_1 = NIr$ (smallest) and $V_N = \tfrac{N(N+1)}{2}Ir$ (largest).
- A source-voltage rise $V$ lowers the current by $(g_m + g_{mb})V$, since $V_{GS}$ falls and $V_{TH}$ rises. Here $g_{mb} = \eta g_m$ with $\eta = \gamma/(2\sqrt{2|\phi_F|}) = 0.237$, so $g_m + g_{mb} = 3.32$ mS.
- The largest mismatch is between $I_1$ and $I_N$: $\dfrac{I_1 - I_N}{I} = (g_m + g_{mb})\,r\left[\dfrac{N(N+1)}{2} - N\right] = (g_m+g_{mb})\,r\,\dfrac{N(N-1)}{2} = 496\,(g_m+g_{mb})\,r$.
- Setting this to 0.01: $r \le 0.01/(496 \times 3.32\ \mathrm{mS}) = 6.1$ mΩ. Without the body effect, $r \le 0.01/(496 \times 2.68\ \mathrm{mS}) = 7.5$ mΩ.
- Check: $V_N \approx 2.2$ mV, so the small-signal (equal-current) approximation holds. A full nonlinear solution of the ladder gives a 0.99% mismatch at this $r$.

## Grading notes

+2: $r_{max} \approx 6.1$ mΩ (±5%), from $(I_1 - I_N)/I = (g_m+g_{mb})rN(N-1)/2$ with $I = 0.67$ mA, $g_m = 2.68$ mS and the body effect ($\eta \approx 0.24$).
+1: 7.5 mΩ (±5%), with the body effect neglected and the rest correct; or the mismatch interpreted as the deviation of $I_N$ from the ideal current, $(I - I_N)/I = g_m rN(N+1)/2$, giving ≈ 5.7 mΩ (with body effect) or ≈ 7.1 mΩ (without), with that interpretation stated.
0: the right method (node voltages from the ladder, $g_m$ times the voltage difference) with an arithmetic slip that changes the value by more than 5%.
-2 (asserted as fact): a wrong ladder analysis (e.g., using only $N\cdot I r$ or $N r I/2$ as the voltage difference, or a mismatch ∝ $N$ instead of $N^2$), a wrong $g_m$ (e.g., missing the factor $W/L$ or using $I/(V_b - V_{TH})$), or a result off by an order of magnitude.
