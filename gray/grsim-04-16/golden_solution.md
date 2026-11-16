# Golden Solution - grsim-04-16

## Reference answer

$R_o \approx 2.5\times10^3\ \mathrm{V}/I_{TAIL}$ (≈ 25 MΩ at 100 µA); $v_o/v_i \approx +4.6\times10^4$ to $4.8\times10^4$, independent of $I_{TAIL}$.

- Each transistor carries $I_{TAIL}/2$; $g_m = I_{TAIL}/(2V_T)$, $r_{o,npn} = 2V_{An}/I_{TAIL}$, $r_{o,pnp} = 2V_{Ap}/I_{TAIL}$.
- Looking down into $Q_4$ (cascode on $Q_2$, base at ac ground through the battery): $R_{down} \approx \beta_nr_{o4} = 2\beta_nV_{An}/I_{TAIL} = 52{,}000\ \mathrm{V}/I_{TAIL}$ (520 MΩ at 100 µA).
- Looking up into $Q_6$: $Q_5$–$Q_8$ form a cascode current mirror; the base current of $Q_6$ returns through diode $Q_5$ into the mirror input $Q_7$ and is mirrored into $Q_6$'s emitter, so (as in a bipolar cascode mirror) $R_{up} \approx r_{o6}(1 + \beta_p/2) \approx \beta_pr_{o6}/2 = 2600\ \mathrm{V}/I_{TAIL}$ (26 MΩ at 100 µA).
- $R_o = R_{down}\|R_{up} \approx 2.48\times10^3\ \mathrm{V}/I_{TAIL}$ (24.8 MΩ at 100 µA; full small-signal 24.9 MΩ).
- $v_o/v_i = g_{m1}R_o \approx (I_{TAIL}/2V_T)(2476\ \mathrm{V}/I_{TAIL}) = 1238/V_T \approx 4.8\times10^4$ (≈ $4.6\times10^4$ with the mirrors' base-current errors).
- Transfer characteristic ($V_{SUP}$ = 2.5 V): extremely steep (≈ 30 µV of input for the full swing), centred near a small positive input (systematic offset from the pnp base currents); the output limits are set by saturation of $Q_6$ (upper, a little above the base of $Q_6$ at $V_{SUP} - 2|V_{BE}| \approx 1.1$ V, i.e. ≈ 1.4–1.6 V) and of $Q_4$ (lower, ≈ 0.1 V, since its base is 1.3 V above the emitters of $Q_1$/$Q_2$).

## Grading notes

A correct answer gives a gain of ≈ (4.2–5.0)×10⁴ independent of $I_{TAIL}$ and $R_o$ ≈ (2.3–2.7)×10³ V/$I_{TAIL}$, recognizing that the pnp cascode-mirror side limits $R_o$ to ≈ $\beta_pr_o/2$. Using $\beta_pr_{o6}$ without the factor 1/2 (gain ≈ 8.7×10⁴) is a significant error; a simulation (if reported) should agree within ≈ 15 %. Non-cascode values (≈ 1.4×10³) are wrong.
