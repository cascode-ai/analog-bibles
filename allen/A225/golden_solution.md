# Golden Solution - A225

## Reference answer

Circuit 1: $v_o(\max) = V_{DD}/2$, because at $v_{in} = V_{DD}$ the follower M1 and its identical diode-connected load M2 carry the same current with equal gate–source (and drain–source) voltages. This holds with or without channel-length modulation.

Others (square law, λ neglected in the large-signal calculation, which is the conventional reading; λ matters only for the small-signal parts of the book problem):
- C3 ≈ $0.59V_{DD} - 0.17V_T$ (n-follower against a p-diode to ground; above $V_{DD}/2$ whenever $V_{DD} > 2V_T$).
- C5 = $V_{DD}-V_T-V_{ov,N}$ with $V_{ov,N} = \sqrt{2I/\beta_N}$ (follower carrying $I$), which is above $V_{DD}/2$: the common current $I$ must be reachable in every circuit with both devices saturated, and the tightest bound comes from Circuit 2 (p-diode on a p-follower, largest current at $v_{in} = 0$ with $v_o = V_{DD}/2$): $V_{ov,P} = \sqrt2\,V_{ov,N} \le V_{DD}/2 - V_T$. So $V_{BN} = V_T + V_{ov,N} < V_{DD}/2$ and C5 ≥ $V_{DD} - V_T - (V_{DD}/2 - V_T)/\sqrt2 > V_{DD}/2$. (Circuit 1's own bound, $V_{ov,N} \le V_{DD}/2 - V_T$, already gives C5 ≥ $V_{DD}/2$.)
- C2 = C4 = $V_{DD}-V_T$ (load current going to zero as the follower cuts off); C6 = $V_{DD}$ for any $V_{BP}$ (the follower cuts off and the p-channel source pulls the output to $V_{DD}$).
So Circuit 1 alone has the lowest $v_o(\max)$.

With finite λ: at $v_{in} = V_{DD}$, $v_o = V_{DD}/2$ both n-devices of C5 have equal $V_{DS}$, so C5 < $V_{DD}/2$ only if $V_{BN} > V_{DD}/2$. Combining this with the Circuit 2 current bound (including λ, with $\lambda_P = 2\lambda_N$) shows that this requires $\lambda_N \ge 1/(2V_T)$ (e.g. ≥ 0.7 V⁻¹ for $V_T$ = 0.7 V), far outside any strong-inversion device; for realistic λ, Circuit 1 remains the unique answer. (Level-1 check, $V_{DD}$ = 3 V, $V_T$ = 0.7 V, $\lambda_N$ = 0.05 V⁻¹, $V_{BN}$ at the largest common current: C1 1.50 V, C3 1.62 V, C5 1.69 V, C4 2.30 V, C2 and C6 at the rail.)

## Grading notes

+2: Circuit 1 with the $V_{DD}/2$ argument. A correct finite-λ discussion that ends with Circuit 1 for realistic λ also earns +2. +1: Circuits 1 and 3 named as the low pair (diode loads to ground) with C1 lowest not singled out. 0: Circuits 1, 3 and 5 named as a group with a "threshold drop" argument (C5 is in fact much higher); or an answer that derives C1 = $V_{DD}/2$ correctly, names Circuit 1 as the answer under the usual model, but concludes that the lowest circuit cannot be determined because $V_{BN}$ or λ is unspecified, without applying the common-current constraint (hedged, with the right answer among its cases; a side claim that C6 depends on $V_{BP}$ is a minor error here). An answer that remarks that C5 depends on its overdrive but concludes Circuit 1 is not penalized for the remark. −2 (asserted as fact): a p-channel follower circuit (2, 4, 6) named as lowest, or Circuit 5 alone (or C5 asserted below C1) without the unrealistic-λ condition.
