# Golden Solution - G182

## Reference answer

$V_{CC(min)} \approx 1.8$ V, set by the input-stage tail current source $Q_{11}$. The next limits are $Q_{18}$ (≈ 1.7 V), $Q_{63}$ (≈ 1.54 V) and $Q_{16}$/$Q_{19}$ (1.5 V).

- $Q_{11}$: its emitter is at $V_{CC} - 6\ \mu\mathrm{A}\times33\ \mathrm{k\Omega} \approx V_{CC} - 0.2$ V. Its collector (the common emitters of $Q_3$, $Q_4$, $Q_5$) is at $\min(V_{IC}, 0.8\ \mathrm{V}) + 0.7$ V, which reaches 1.5 V once $V_{IC} \ge 0.8$ V (then $Q_5$ conducts with its base at 0.8 V). So $V_{CC} - 0.2 - 1.5 \ge 0.1$, giving $V_{CC} \ge 1.8$ V.
- $Q_{18}$: node 26 is two $V_{BE}$ above ground ($Q_{68}$ emitter follower into the base of $Q_{75}$), 1.4 V. Its emitter is at $V_{CC} - 21\ \mu\mathrm{A}\times9.3\ \mathrm{k\Omega} = V_{CC} - 0.195$ V, so $V_{CC} \ge 1.4 + 0.1 + 0.195 \approx 1.7$ V.
- $Q_{63}$: Pbase $= V_{CC} - 0.7$, base of $Q_{65}$ (emitter of $Q_{64}$) $= V_{CC} - 1.4$ V. Its emitter is at $33\ \mu\mathrm{A}\times1.2\ \mathrm{k\Omega} = 0.04$ V, so $V_{CC} \ge 1.54$ V.
- $Q_{16}$/$Q_{19}$: their collectors are at the emitters of the pnp followers $Q_{21}$/$Q_{22}$, $0.5 + 0.7 = 1.2$ V; their emitters are at $V_{CC} - 0.2$ V. So $V_{CC} \ge 1.5$ V.
- Less restrictive:
  - $Q_{25}$ (collector at node 25 $= V_{CC} - 0.7$ V, emitter at node 29 $= 1.2 - 0.7 = 0.5$ V): $V_{CC} \ge 1.3$ V.
  - $Q_{15}$ (collector at $\mathrm{Bias_{CM}} = 0.9$ V): 1.2 V.
  - $Q_{12}$ (collector at 0.8 V): 1.1 V.
  - $Q_{61}$ (collector at ≈ 0.78 V): ≈ 1.1 V.
  - $Q_{20}$ (collector at 0.7 V): 1.0 V.
  - $Q_{13}$/$Q_{14}$ (collectors at 0.5 V): 0.8 V.
  - $Q_{17}$ (from $V_{CC} - 0.2$ V to node 25 at $V_{CC} - 0.7$ V) and the npn input pair (collectors at $V_{CC} - 0.2$ V) do not depend on $V_{CC}$.
- Criterion: "forward-active" is checked, as the question directs, by $|V_{CE}| \ge |V_{CE(sat)}| = 0.1$ V. A strict $V_{BC} \le 0$ test cannot be what is meant: $Q_9$/$Q_{10}$ (base 0.9 V, collector 0.5 V) and $Q_3$/$Q_4$ at $V_{IC} = 0$ (base 0, collector 0.2 V) have forward-biased collector junctions at every $V_{CC}$; applied to $Q_{11}$ (base at $\mathrm{Bias_1} \approx V_{CC} - 0.9$ V) it would give 2.4 V.
- Currents in nodes 1/2: the Bias$_1$ figure is the current in the emitter resistor, so $R_{13}$/$R_{14}$ carry 6 μA; when $Q_1$–$Q_2$ conduct they take 3 μA each and $Q_{13}$/$Q_{14}$ carry about 3 μA. Their emitters stay at $V_{CC} - 0.2$ V either way.
- Crossover: $Q_6$ has its emitter at about 0.06 V and its collector at $V_{IC} - 0.7$ V, so it is marginal for $V_{IC}$ just above 0.8 V (≈ 0.80–0.86 V); this does not depend on $V_{CC}$ and does not change the result.
- If the common-mode input were restricted to $V_{IC} \le V_{IC,max} < 0.8$ V, $Q_{11}$ would need $V_{CC} \ge 1.0\ \mathrm{V} + V_{IC,max}$, so $V_{CC(min)} \approx \max(1.7\ \mathrm{V},\ 1.0\ \mathrm{V} + V_{IC,max})$: $Q_{18}$ sets 1.7 V only for $V_{IC,max} \lesssim 0.7$ V.

## Grading notes

+2: about 1.8 V (1.75–1.85 V) identified as set by $Q_{11}$ (tail current source of the input stage) with the shared emitter node at 1.5 V when $V_{IC} > 0.8$ V, and a check of the other critical paths (at least $Q_{18}$ against node 26 at 1.4 V). Do not penalize: $Q_{13}$/$Q_{14}$ carrying about 3 μA when $Q_1$–$Q_2$ are on (correct, see reference); a remark that $Q_6$ is marginal just above $V_{IC} = 0.8$ V; or a remark that $Q_9$/$Q_{10}$ have a forward-biased collector junction while keeping the given $V_{CE(sat)}$ criterion.
+1: 1.7 V from $Q_{18}$ with an explicit statement that the common-mode input is assumed to stay below about 0.7 V (so $Q_{11}$ needs at most 1.7 V), or 1.8 V with little checking of other paths or with misread side connections that do not change the result.
0: a value between 1.5 and 1.7 V from a correct analysis of some paths with the critical one missed; or an analysis that replaces the given $V_{CE(sat)}$ criterion by a strict $V_{BC} \le 0$ test but applies it consistently (2.4 V from $Q_{11}$, noting that $Q_9$/$Q_{10}$ cannot meet it).
-2 (asserted as fact): $V_{CC(min)}$ below 1.3 V or above 2.5 V from a misread circuit (e.g. output-stage devices treated as emitter followers with $V_{BE}$ drops on both sides, or the 0.2-V emitter-resistor drops ignored and thresholds stacked incorrectly); a value set by a criterion applied inconsistently (e.g. 2.1 V from a $V_{BC} \le 0$ test on $Q_{16}$/$Q_{19}$ while $Q_{11}$ is checked by $V_{CE}$ only); 1.7 V asserted for the full common-mode range; or the claim that the op amp works for any $V_{CC} > 2V_{BE}$ without analysis.
