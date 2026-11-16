# Golden Solution - A376

## Reference answer

$t_p \approx 36$–40 ns for 10 mV, ≈ 11.3–11.7 ns for 100 mV, and ≈ 3.6 ns for 1 V.

- Overdrive factors $k = V_{in}/V_{in}(\min)$: 15.58, 155.8, 1558. The output reaches half its swing when the normalized linear response equals $1/(2k)$.
- Small-time (parabolic) approximation: $v_{out} \approx A_v(0)V_{in}\,|p_1p_2|\,t^2/2$, so $t_p \approx 1/\sqrt{k\,|p_1p_2|}$ with $|p_1p_2| = 5\times10^{13}\ \mathrm{s^{-2}}$: 35.8 ns, 11.3 ns, 3.58 ns. (Normalized: $m = p_2/p_1 = 2$, $t_{pn} = |p_1|t_p = 1/\sqrt{mk}$ = 0.179, 0.0567, 0.0179.)
- Exact two-pole response: for $m = 2$ the normalized response is $(1-e^{-t_n})^2$, so $1-e^{-t_n} = 1/\sqrt{2k}$: $t_n$ = 0.197, 0.0583, 0.0181 → $t_p$ = 39.5 ns, 11.7 ns, 3.62 ns.
- These assume no slewing; for the larger inputs a real comparator would probably be slew-rate limited (and with 1 V the input stage is fully switched), so the 100 mV and 1 V values are lower bounds.

## Grading notes

+2: the three delays within ±12 % of either the parabolic values (35.8, 11.3, 3.58 ns) or the exact values (39.5, 11.7, 3.62 ns). +1: two of the three right, or all three with a consistent small slip. 0: correct method but a systematic error (e.g., time measured to the full swing) giving wrong values. −2 (asserted as fact): single-pole formula $\tau\ln[2k/(2k-1)]$ applied with one of the poles, $k$ computed upside down, $m$ used inconsistently so that delays are off by $\sqrt2$ or more without justification, or slewing assumed and an SR invented.
