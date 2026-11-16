# Golden Solution - A280

## Reference answer

The specifications cannot all be met: $V_{ic}(\max) = 2$ V is incompatible with $V_{ic}(\min) = 1$ V together with the GB/phase-margin conditions and the fixed 10:1 output-current ratio. The best design meets everything else and reaches $V_{ic}(\max) \approx 1.8$ V:

| $C_c$ | $I$ | $W_1 = W_2$ | $W_3 = W_4$ | $W_5 = W_8$ | $W_6$ | $W_7$ | $W_9 = W_{10}$ | $W_{11} = W_{12}$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|---|
| 2 pF | 20 µA | 33 µm | 7 µm | 202 µm | 165 µm | 800 µm | 80 µm | 120 µm | 450 µW |

Design steps:
- Phase margin rule: $z = g_{m6}/C_c = 10GB = 10g_{m1}/C_c$ → $g_{m6} = 10g_{m1}$; $|p_2| = g_{m6}/C_L = 2GB = 2g_{m1}/C_c$ → $C_c = 0.2C_L = 2$ pF.
- Slew rate: the first-stage output can source or sink a net current $I$ (with one input device off, the 1.5I sources and the I mirror leave ±I), so $SR = I/C_c$ → $I = 20$ µA.
- GB: $g_{m1} = GB\cdot C_c = 125.7\ \mu$S, $I_1 = I/2 = 10$ µA → $S_1 = g_{m1}^2/(2K'_N I_1) = 32.9$ → $W_1 = W_2 = 33$ µm ($V_{GS1} = 0.75 + 0.159 = 0.909$ V).
- $V_{ic}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = 1$ V → $V_{DS5}(\mathrm{sat}) = 0.091$ V → $S_5 = 2I/(K'_N \cdot 0.091^2) = 202$; M8 = M5 (same current $I$).
- M3/M4 carry $I$ (1.5I − I/2). M2's drain is at $V_{GS3}$, so $V_{ic}(\max) = V_{GS3} + V_{TN} = 2$ V needs $V_{GS3} = 1.25$ V, $V_{ov3} = 0.5$ V → $S_3 = 2(20)/(24 \cdot 0.25) = 6.7$ → 7 µm. Mirror pole $g_{m3}/(2C_{gs3})$ ≈ 1.8 × 10¹⁰ rad/s ≫ 10GB ✓.
- $g_{m6} = 1.257$ mS at $I_6 = 10I = 200$ µA → $S_6 = 164.5$ → 165 µm ($V_{GS6} = 1.068$ V, $V_{DS6}(\mathrm{sat})$ = 0.32 V, so $V_{out}(\min)$ = 0.75 V is met with margin).
- $V_{out}(\max) = 1.25$ V → $V_{SD7}(\mathrm{sat}) = 0.25$ V → $S_7 = 2(200)/(8 \cdot 0.0625) = 800$. The p-channel mirror devices share $V_{SG}$ with M7, so W scales with current: $W_9 = W_{10} = 800/10 = 80$ µm, $W_{11} = W_{12} = 1.5 \times 80 = 120$ µm (M11: $V_{SD}$ = 1.5 − 1.068 = 0.43 V > 0.25 V ✓; M12: $V_{SD}$ = 1.5 − 1.25 = 0.25 V, at the edge ✓).
- $P_{diss} = 1.5\ \mathrm V \times (I + I + 3I + 10I) = 1.5 \times 300\ \mu\mathrm A = 450\ \mu$W.

Why $V_{ic}(\max) = 2$ V is impossible: M1's drain is the first-stage output, held at $V_{GS6}$, so M1 stays saturated only up to $V_{ic} = V_{GS6} + V_{TN}$; reaching 2 V needs $V_{ov6} \ge 0.5$ V, i.e. $g_{m6} = 2(10I)/V_{ov6} \le 40I$. With $g_{m6} \ge 10g_{m1}$ this requires $I \ge g_{m1}/4$. But $V_{ic}(\min) = 1$ V requires $V_{ov1} + V_{DS5}(\mathrm{sat}) \le 0.25$ V with $V_{ov1} = I/g_{m1}$, i.e. $I \le g_{m1}(0.25\ \mathrm V - V_{DS5}(\mathrm{sat})) < g_{m1}/4$. The two conditions conflict for any $C_c$, $I$ and sizes. In the design above, $V_{ic}(\max)$ is limited by M1 to $1.068 + 0.75 \approx 1.82$ V (sizing M3 alone does not help); raising $I$ to ≈ 31 µA would restore $V_{ic}(\max)$ but push $V_{ic}(\min)$ above 1 V.

## Grading notes

Design problem. +2: a complete, consistent design (≈ the table: $C_c$ = 2 pF, $I$ ≈ 20 µA, $W_1$ ≈ 33, $W_3$ ≈ 7–16 (7 µm sets $V_{GS3}$ = 1.25 V, 16 µm sets $V_{GS4} = V_{GS6}$; either is acceptable), $W_5 = W_8$ ≈ 200, $W_6$ ≈ 165, $W_7$ ≈ 800, $W_9$ ≈ 80, $W_{11}$ ≈ 120 µm, $P_{diss}$ ≈ 450 µW, or an equally valid variant) AND a demonstration that $V_{ic}(\max) = 2$ V cannot be met together with the other specifications, because M1's drain sits at $V_{GS6}$ (achievable ≈ 1.8 V). +1: correct design that reports the M1-limited $V_{ic}(\max)$ ≈ 1.8 V without proving that no design can reach 2 V. 0: design partly right, $V_{ic}(\max)$ not checked on the M1 side, without claiming that all specs are met. GB used in Hz as if in rad/s is a units slip: the sizes it affects count as wrong, overall at most 0 (a separate −2 error, such as a wrong slew relation, still gives −2). −2 (asserted as fact): a design presented as meeting every specification including $V_{ic}(\max)$ = 2 V (e.g. sizing only M3 for $V_{GS3}$ = 1.25 V and claiming the ICMR is met), or $I$ from $SR = I/(2C_c)$, $1.5I/C_c$ or $10I/C_c$.
