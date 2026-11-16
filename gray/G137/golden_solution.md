# Golden Solution - G137

## Reference answer

$R_L \approx 333\ \Omega$, $P_L \approx 269$ mW, $\eta \approx 70\%$ (peak device dissipation then ≈ 169 mW, below the limit).
- Swing limits: $V_o^- = -15 + 0.2 + 0.7 + 0.7 = -13.4$ V ($Q_{17}$ saturates; $Q_{23}$ and $Q_{20}$ are pnp followers), $V_o^+ = 14.1$ V ($Q_{13A}$ saturation) or $40.2\ \mathrm{mA}\cdot R_L$, whichever is lower.
- Dissipation: for a peak swing ≥ $V_{CC}/2 = 7.5$ V the peak device dissipation is $V_{CC}^2/(4R_L)$, and ≤ 200 mW requires $R_L \ge 281\ \Omega$. (Smaller loads are allowed only with peaks below 7.5 V, where $p_{max} = \hat V_o(V_{CC}-\hat V_o)/R_L$, giving < 100 mW of output.)
- But the positive swing is current-limited: at most the 0.2 mA of $Q_{13A}$ drives $Q_{14}$, so $I_{o,max} = 201 \times 0.2\ \mathrm{mA} = 40.2$ mA. At $R_L = 281\ \Omega$ the positive peak is only 11.3 V, so a symmetrical sine is limited to 11.3 V and $P_L = 227$ mW.
- For $R_L$ between 281 Ω and $13.4\ \mathrm{V}/40.2\ \mathrm{mA} = 333\ \Omega$, $\hat V_o = 40.2\ \mathrm{mA}\cdot R_L$ and $P_L = (40.2\ \mathrm{mA})^2R_L/2$ rises with $R_L$; above 333 Ω, $\hat V_o = 13.4$ V (negative limit) and $P_L$ falls. Optimum $R_L = 333\ \Omega$: $P_L = 13.4^2/(2\times333) = 269$ mW (335 Ω and 268 mW with $I_o = \beta_F\times0.2$ mA).
- $\eta = (\pi/4)(13.4/15) = 70.2\%$.

## Grading notes

+2: $R_L$ ≈ 333 Ω (325–340 Ω) and $P_L$ ≈ 269 mW (±5%), recognizing the 40 mA positive drive limit, with η ≈ 70%. +1: drive limit recognized and used, but the optimum not found (e.g. 227 mW at 281 Ω stated as the answer), or the voltage/current-limit intersection found with the negative swing taken as 14.1 V instead of 13.4 V (≈ 351 Ω, 283 mW, η ≈ 74%; the same swing slip earns +1 in 5.15(b)/5.16(a)). 0: $R_L$ = 281 Ω from dissipation alone with the drive limit ignored in the stated answer ($P_L$ ≈ 319 mW with 13.4 V, or ≈ 353 mW with 14.1 V), otherwise correct method; a drive-limit remark only as a side caveat does not raise this. −2 (asserted as fact): dissipation applied as an average, efficiency above 78.6%, or a load below 281 Ω claimed to meet the 200 mW limit at full swing (peak ≥ 7.5 V) or given as the optimum. Noting that a smaller load is feasible at a small swing is correct, not an error.
