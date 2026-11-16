# Golden Solution - G266

## Reference answer

$i_o/i_s \approx -25.7$; loop gain $T \approx 133$; $Z_{in} \approx 19.4$ Ω; $Z_{out} \approx 14$ MΩ (exact small-signal value; the two-port shortcut would give ≈ 49 MΩ, which exceeds the $(\beta+1)r_{o2} = 20$ MΩ limit).

- $f = -\dfrac{R_E}{R_E+R_F}\dfrac{1}{\alpha_2} = -\dfrac{200}{5200}\cdot\dfrac{201}{200} = -0.0387$; $A_\infty = -25.9$.
- Basic amplifier: input node $(R_E+R_F)\|r_{\pi1} = 5.2\text{k}\|5.2\text{k} = 2.6$ kΩ; $R_{in2} = r_{\pi2} + 201\times(R_E\|R_F = 192.3) = 43.9$ kΩ; $Q_1$ load $10\text{k}\|100\text{k}\|43.9\text{k} = 7.53$ kΩ. $a = -2.6\text{k}\cdot38.5\text{m}\cdot7.53\text{k}\cdot200/43.9\text{k} = -3434$.
- $T = af = 132.7$; $A = -3434/133.7 = -25.68$; $Z_{in} = 2600/133.7 = 19.4$ Ω.
- $Z_{out}$: $z_{oa} \approx 366$ kΩ; $(1+T)z_{oa} = 49$ MΩ is impossible because the base current of $Q_2$ bypasses the sensing resistor; exact nodal analysis gives 14.3 MΩ. (Return ratio of $g_{m1}$: 131; of $g_{m2}$: 142.)
- Loop-transmission definitions: the two-port $T = af = 132.7$ and the return ratios of the controlled sources ($g_{m1}$: 130.8, $g_{m2}$: 142.1) are the loop gains that set the desensitivity. A Blackman return ratio can also be taken for the passive element $R_F$: with $R_F$ removed, the impedance between its terminals is $Z_\Delta = 1.346$ MΩ, so $T_{R_F} = Z_\Delta/R_F = 269.2$. That number is exact for its definition, but its companion "ideal" gain is the gain with $R_F$ shorted, not $-\alpha_2(1+R_F/R_E)$, so it is not the feedback loop transmission $af$. It is close to, but not the same as, the loading error of $a_{unloaded}f \approx 255$–$267$ ($R_F$ opened at the input with no $R_F+R_E$ loading, or $r_{\pi1}/Z_{in} - 1 = 266$).
- Small-signal check (linear hybrid-π netlist): $i_o/i_s = -25.68$, $Z_{in} = 19.45$ Ω, $Z_{out} = 14.32$ MΩ, $T_{g_{m1}} = 130.8$, $T_{g_{m2}} = 142.1$, $Z_\Delta/R_F = 269.2$.

## Grading notes

Four quantities. +2: gain −25.5 to −25.9, $T$ 128–137 (two-port $T$ or the return ratio of $g_{m1}$; a return ratio explicitly taken with respect to $g_{m2}$, ≈ 142, is also correct), $Z_{in}$ 18.8–20 Ω, $Z_{out}$ 13–16 MΩ (or a correct statement that it is limited below $(\beta+1)r_{o2} \approx 20$ MΩ with a value in that range). An answer that gives one of these loop gains and additionally a correctly derived return ratio of $R_F$ (≈ 269) is not penalized.
Loop transmission ≈ 255–270: if obtained as an unloaded forward gain (with $R_F$ removed from the input) times $R_E/[\alpha(R_E+R_F)]$, or from $r_{\pi1}/Z_{in} - 1$, it ignores the input loading $R_F+R_E$ and is a critical error for that quantity (score at most 0 overall). If instead it is explicitly derived as the return ratio of the element $R_F$ ($Z_\Delta/R_F$ with $Z_\Delta \approx 1.35$ MΩ the impedance across the removed $R_F$) and not claimed to equal $af$, it is correct for that definition but is not the loop transmission asked for: +1 overall when the other three quantities are right. An answer that pairs such a branch return ratio with a statement that the conventional $af$ is also ≈ 255–270 asserts the loading error and is at most 0.
+1: the only deviation is $Z_{out}$ from the $(1+T)z_{oa}$ shortcut (≈ 45–50 MΩ), or one other quantity off by a slip, or the $R_F$-branch case above. 0: two of four right. −2 (asserted as fact): impedances scaled the wrong way by $(1+T)$, or the gain far from $1/f$.
