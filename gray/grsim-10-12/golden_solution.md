# Golden Solution - grsim-10-12

## Reference answer

$I_o = \dfrac{\beta}{4}V_i^2 = 300\ \mu\mathrm{A/V^2} \times V_i^2$ for $|V_i| \le 2\sqrt{2I_1/\beta} = 0.577$ V, where $\beta = \mu_nC_{ox}(W/L)_n = \mu_pC_{ox}(W/L)_p = 1200\ \mu\mathrm{A/V^2}$ (NMOS and PMOS have equal β). $I_o$ runs from 0 at $V_i = 0$ to 100 µA (= $2I_1$) at the range limits.

Derivation:
- $M_1$, $M_5$ (and $M_4$, $M_8$) carry $I_1$ = 50 µA, so $V_{GS1} + |V_{GS5}| = 2V_t + 2\sqrt{2I_1/\beta} = 1.4 + 2(0.2887) = 1.977$ V, with $V_t$ = 0.7 V for both types.
- Branch $M_3$–$M_6$ (current $I_A$; $M_3$ gate at the − input, $M_6$ gate tied to $M_5$'s gate): $V_{GS3} + |V_{GS6}| = V_{GS1} + |V_{GS5}| - V_i$ → $2\sqrt{2I_A/\beta} = 2\sqrt{2I_1/\beta} - V_i$.
- Branch $M_2$–$M_7$ (current $I_B$; $M_2$ gate at the + input, $M_7$ gate tied to $M_8$'s gate): $2\sqrt{2I_B/\beta} = 2\sqrt{2I_1/\beta} + V_i$.
- Hence $I_{A,B} = \left(\sqrt{I_1} \mp V_i\sqrt{\beta/8}\right)^2$ and $I_A + I_B = 2I_1 + \beta V_i^2/4$.
- $M_9$–$M_{10}$ mirror $I_A + I_B$ to the output node, from which $M_1$ and $M_4$ each sink $I_1$: $I_o = I_A + I_B - 2I_1 = \beta V_i^2/4$, independent of $I_1$.
- Range: both branches must conduct ($I_A, I_B \ge 0$), so $|V_i| \le \sqrt{8I_1/\beta} = 0.577$ V. Beyond it one branch is off and $I_o = 150\ \mu\mathrm{A/V^2}(|V_i| + 0.577\ \text{V})^2 - 100\ \mu$A, which falls below the square law (273 vs 300 µA at $|V_i|$ = 1 V).
- The suggested bias (− input at 3 V, output at 3.5 V) keeps every device saturated over this range.

Expected simulation results: the dc sweep gives $I_o = 300\ \mu\mathrm{A/V^2}\,V_i^2$ exactly (to numerical precision) for $|V_i| \le 0.577$ V, symmetric in $V_i$ (25 µA at ±0.289 V, 75 µA at ±0.5 V, 100 µA at ±0.577 V), and the slower growth beyond. For $V_i = V_a\sin\omega t$ with $V_a \le 0.577$ V, $I_o = \tfrac{\beta}{8}V_a^2(1 - \cos 2\omega t)$: a dc term and a second harmonic, both of amplitude $150\ \mu\mathrm{A/V^2} \times V_a^2$ (37.5 µA for $V_a$ = 0.5 V). The fundamental is ideally zero, and higher harmonics are absent while the drive stays within the square-law range.

Comment: the circuit acts as a squarer / frequency doubler. A fundamental appears only through device mismatch or a dc offset $V_0$ in $V_i$ (amplitude $(\beta/2)V_0V_a$). Driving beyond ±0.577 V adds 4th and higher even harmonics.

## Grading notes

+2 level requires:
- the derivation showing that the two cross-coupled series branches carry $(\sqrt{I_1} \mp V_i\sqrt{\beta/8})^2$ and that the output (mirrored sum minus $2I_1$) is $I_o = (\beta/4)V_i^2 = 300\ \mu\mathrm{A/V^2}\,V_i^2$ (±3%);
- the range $|V_i| \le 0.577$ V (≈ 0.58 V), with $I_o$ = 100 µA at its ends;
- a simulation (or its correctly predicted outcome) confirming the parabola over that range;
- for the sine drive, a dominant second harmonic of $150\ \mu\mathrm{A/V^2}\,V_a^2$, a fundamental ≈ 0, and the frequency-doubling comment.

Wrong: $I_o$ linear in $V_i$, a range set by $V_t$ (e.g. ±0.7 V) or by $2I_1$ in the wrong way (e.g. ±0.29 V), a sign error making $I_o$ odd in $V_i$, or a claim that the fundamental dominates for a zero-mean sine input.
