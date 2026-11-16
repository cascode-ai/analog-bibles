# Golden Solution - R688

## Reference answer

The $V_{out}$–$V_{in}$ characteristic is identical to the target case. A thicker oxide lowers $C_{ox}$ equally for both transistors, and $C_{ox}$ cancels in every equation that sets $V_{out}$. Only the current through the stage, and therefore its speed, drops, in proportion to $C_{ox}$ (i.e., by $t_{ox,\mathrm{target}}/t_{ox,\mathrm{actual}}$).

The curve (both in the target case and with the thick oxide), with $A = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:
- $0 \le V_{in} \le 0.7$ V: $M_1$ is off. The diode-connected $M_2$ carries no current, so conventionally $V_{out} = V_{DD} - |V_{THP}| = 2.2$ V. (Strictly, in the square-law model any $V_{out}$ between 2.2 V and 3 V gives zero current in both devices; subthreshold conduction of $M_2$ slowly pulls $V_{out}$ toward $V_{DD}$.)
- $M_1$ saturated: $\tfrac12\mu_nC_{ox}(W/L)_1(V_{in}-0.7)^2 = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_{out})^2$, so $V_{out} = 2.2 - A(V_{in} - 0.7)$. This is a straight line with slope (small-signal gain) $-A$.
- $M_1$ enters triode when $V_{out} = V_{in} - 0.7$, i.e., at $V_{in} = 0.7 + 2.2/(1+A)$. Beyond this point $V_{out}$ flattens toward a small nonzero value at $V_{in} = 3$ V, given by $\mu_n(W/L)_1[2.3V_{out} - V_{out}^2/2] = \tfrac12\mu_p(W/L)_2(2.2 - V_{out})^2$. Example: for $A = 2$ the break is at 1.43 V and $V_{out} = 0.22$ V at $V_{in} = 3$ V.
- Each equation has $C_{ox}$ on both sides, so the break points, the slope $-A$ and the end levels are unchanged. With channel-length modulation included, the curve is still unchanged: at a given operating point $g_m \propto C_{ox}$ and $r_O \propto 1/I_D \propto 1/C_{ox}$.
- What does change: the bias current and the transconductances are lower by the $C_{ox}$ ratio, so the stage is slower. Its gate capacitances also drop, but the junction and load capacitances do not.

## Grading notes

+2: concludes that the transfer characteristic is unchanged because $C_{ox}$ cancels in the current ratio (thresholds and mobilities fixed), describes the curve correctly (flat at $V_{DD} - |V_{THP}| = 2.2$ V up to $V_{in} = 0.7$ V, then a linear fall with slope $-\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$, then the triode region with a nonzero low level), and notes that the currents and speed are lower.
+1: "unchanged" with correct reasoning, but the curve's features missing or with a minor slip; or a correct curve with the lower current/speed not mentioned; or everything correct except that the $V_{in} < 0.7$ V level is given as $V_{DD}$ (3 V), with a jump to 2.2 V at turn-on. Such a 3 V plateau is a minor issue, not a critical error.
0: correct target curve but the comparison left vague or hedged.
-2 (asserted as fact): the gain or the curve claimed to change because of the thicker oxide (e.g., "gain drops because $g_m$ falls"), the curve shifted, or the load misread (e.g., $M_2$ treated as a current source, giving a curve that falls to 0 V).
