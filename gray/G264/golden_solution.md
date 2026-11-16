# Golden Solution - G264

## Reference answer

$i_o/i_s \approx -10.7$; loop gain $T \approx 47$; $Z_{in} \approx 9.9$ Ω (including $R_S$); $Z_{out} \approx 8.5$ MΩ (exact small-signal value; the two-port shortcut gives ≈ 14 MΩ).

- $g_m = 38.5$ mS, $r_\pi = 5.2$ kΩ, $r_o = 100$ kΩ.
- Feedback network (g parameters): $g_{11f} = 1/(R_E+R_F) = 1/1.1$ kΩ at the input; $g_{22f} = R_E\|R_F = 90.9$ Ω in the emitter of $Q_2$; $f = -\dfrac{R_E}{R_E+R_F}\dfrac{1}{\alpha_2} = -0.0914$, so $A_\infty = 1/f = -10.94$.
- Basic amplifier: input node $R_S\|(R_E+R_F)\|r_{\pi1} = 476$ Ω; $Q_2$ input $R_{in2} = r_{\pi2} + 201\times90.9 = 23.5$ kΩ; $Q_1$ load $R_{L1}\|r_{o1}\|R_{in2} = 3305$ Ω. $a = -476\cdot g_{m1}\cdot3305\cdot\beta/R_{in2} = -515$.
- $T = af = 47.1$; $A = a/(1+T) = -515/48.1 = -10.72$.
- $Z_{in} = 476/48.1 = 9.9$ Ω.
- $Z_{out}$: basic-amplifier output resistance $z_{oa} \approx r_{o2}[1 + g_{m2}R'_E\,r_{\pi2}/(r_{\pi2} + R_b + R'_E)] \approx 299$ kΩ ($R'_E = 90.9$ Ω, $R_b = R_{L1}\|r_{o1}$). The shortcut $(1+T)z_{oa} = 14.4$ MΩ overestimates, because the loop senses the emitter current of $Q_2$ and its base current is not controlled; exact nodal analysis gives 8.5 MΩ (below the $(\beta+1)r_{o2} = 20$ MΩ limit). The figure's emitter-current label $i_o/\alpha_2$ is the two-port approximation; with finite $r_{o2}$ the emitter current is $i_o/\alpha_2 - (v_{c2}-v_{e2})/(\beta r_{o2})$, which matters for $Z_{out}$, so the output impedance needs the full hybrid-π relations (or Blackman: $307.6\text{k}\times(1+45.75)/(1+0.70) = 8.46$ MΩ).
- Loop-transmission definitions: the two-port $T = af = 47.1$ and the return ratio of $g_{m1}$ (45.75) set the desensitivity and agree. Other return ratios are exact for their own definitions but are not $af$ here: $g_{m2}$ gives 83.5 (it also contains the local degeneration loop of $Q_2$), and the passive element $R_F$ gives $Z_\Delta/R_F = 86.4\text{k}/1\text{k} = 86.4$ ($Z_\Delta$ = impedance across the removed $R_F$, $i_s = 0$, $R_S$ kept).
- Small-signal check (linear hybrid-π netlist, all $r_o$): $i_o/i_s = -10.718$, $Z_{in} = 9.893$ Ω (with $R_S$; 9.99 Ω without), $Z_{out} = 8.458$ MΩ, $T_{g_{m1}} = 45.75$, $T_{g_{m2}} = 83.5$, $Z_\Delta/R_F = 86.4$.

## Grading notes

Four quantities. +2: gain −10.6 to −10.8 (negative sign with $i_o$ into the collector, or magnitude with the sign convention stated), $T$ 44–49 (two-port $T$ or the return ratio of $g_{m1}$), $Z_{in}$ 9.5–10.3 Ω (with or without $R_S$, stated), $Z_{out}$ 7.5–9.5 MΩ. +1: the only deviation is $Z_{out}$ from the $(1+T)z_{oa}$ shortcut (≈ 13–15 MΩ), or one other quantity off by a slip, or the loop transmission given only as an explicitly defined return ratio of $g_{m2}$ (≈ 84) or of $R_F$ (≈ 86) that is correct for that definition and not claimed to equal $af$ (an answer that also gives $af$ or the $g_{m1}$ return ratio ≈ 46–47 is not penalized). A node equation with a missing term (e.g. dropping the $Q_2$ base current from the $Q_1$ collector KCL) is a setup error, not a slip. 0: two of four right. −2 (asserted as fact): $Z_{in}$ multiplied by $(1+T)$, $Z_{out}$ divided by $(1+T)$, or a current gain near $-(1 + R_F/R_E) = -11$ obtained by ignoring α and loading while claiming it exact (−11 stated as the approximate $1/f$ is fine).
