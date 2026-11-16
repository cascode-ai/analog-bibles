# Golden Solution - R269

## Reference answer

$C_1$ has no dc discharge path: its lower plate connects only to the bulk of $M_1$, whose junctions are reverse biased. So the series $C_1$ cannot keep supplying a current through $M_3$/$M_1$. Instead Y and the bulk of $M_1$ drop together, with $V_Y - V_{B1} \approx V_{DD}$ held by $C_1$. The negative bulk raises $V_{TH1}$, and the current dies out. The drop is fast: its speed is set only by the small parasitic capacitances of the bulk and of Y (about $I_{REF}/C_{par}$, not $I_{REF}/C_1$), and in the ideal circuit it is a step at $t = 0$. $V_X$ and $V_Y$ then stay at constant final levels.

- Let $u = \sqrt{2I_{REF}/\beta}$, so $V_{G1} = V_{GS2} = 0.7 + u$. The current stops when either $M_1$ is cut off by its reverse body bias or Y and X reach 0. Here $s(u) = (\sqrt{0.9} + u/0.45)^2 - 0.9$ is the $V_{SB1}$ at which $V_{TH1} = V_{G1}$.
- Case A, $u < 0.46$ V ($V_{G1} < V_{TH1}(V_{SB} = 3\ \mathrm{V}) \approx 1.16$ V): $M_1$ cuts off first. The bulk settles at $-s(u)$, $V_Y \to V_{DD} - s(u)$ (e.g. ≈ 1.96 V for $u$ = 0.2 V) and $V_X \to \min[V_Y,\ x_s]$, where $x_s$ solves $x_s + V_{TH3}(x_s) = V_b$. With a square-law model the approach has a slow $1/t$-like tail as $M_1$'s overdrive vanishes.
- Case B, $u > 0.46$ V: $M_1$ stays on, Y and X are pulled to ≈ 0 and the bulk goes to ≈ $-V_{DD}$.
- If $V_b \le V_{TH0}$ = 0.7 V, $M_3$ is off from the start: $V_Y$ stays at $V_{DD}$ and $V_X = 0$; nothing moves.
- In the strict ideal model (no parasitic capacitance), $C_1$ alone only fixes $V_Y - V_{B1}$, so the zero-current final state is not unique. The levels above are the limit of small parasitics, where the current decays continuously and stops at the first zero-current state. With a bulk capacitance $C_B$, $C_1$ loses only a fraction ≈ $C_B/C_1$ of the bulk's swing ($V_Y \approx V_{DD} + (1 + C_B/C_1)V_{B1}$). There is no slow $I_{REF}/C_1$ discharge.
- Transient simulation (square law, $I_{REF}$ = 100 μA, $V_b$ = 2 V, $C_1$ = 1 pF, 10 fF on the bulk, Y and X): $u$ = 0.2 V → $V_Y$ 3 → 2.30 V in 0.4 ns, 1.98 V at 8 ns (→ 1.95 V), bulk → −1.0 V, $V_X \approx$ 1.08 V ($= x_s$); $u$ = 0.6 V → $V_Y$, $V_X$ → 0 within ≈ 4 ns, bulk → −2.97 V, $C_1$ still at 2.97 V.

## Grading notes

Grade the mechanism and the final levels; the exact time scale is not determined by the givens.
+2: recognizes that $C_1$ goes to the bulk of $M_1$ so it has no dc discharge path; Y and the bulk drop together quickly (in a time set by parasitic or body/depletion capacitance, or instantly in the ideal model), the reverse body bias raises $V_{TH1}$ and the current stops; final $V_X$, $V_Y$ constant (≈ 0, or an intermediate level $V_{DD} - s(u)$ if $M_1$ is cut off by the body effect). A model that charges the body/depletion capacitance and gives a decaying transient with a $1/t$ tail and these final levels is correct. Covering only one of cases A/B with the other merely flagged as a caveat is acceptable. The $V_b \le 0.7$ V branch (nothing happens) is an optional extra.
+1: no-discharge-path argument and the body-effect cut-off right, but the final levels incomplete or one case mishandled.
0: the floating-bulk constraint ($V_Y - V_{B1}$ fixed, no sustained current) stated correctly but no waveform or final levels drawn from it; or the floating-bulk analysis offered only as one of several unresolved alternatives.
-2 (asserted as fact): $C_1$ treated as connected to ground or to the source of $M_1$ (or the bulk of $M_1$ as grounded), giving a sustained discharge of $V_Y$ at about $I_{REF}/C_1$; $V_Y$ held at $V_{DD}$ with current flowing.
