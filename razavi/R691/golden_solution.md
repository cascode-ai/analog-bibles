# Golden Solution - R691

## Reference answer

The inverter characteristic moves to the left and its transition region widens:
- The output starts falling at $V_{in} \approx 0$ instead of 0.7 V.
- It reaches 0 at $V_{in} = V_{DD} - |V_{THP}| = 2.0$ V instead of 2.2 V.
- The switching threshold drops from $V_M = (2.2 + 0.7r)/(1+r)$ to $V_M = 2.0/(1+r)$, with $r = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$. For $r = 1$ that is 1.45 V → 1.0 V; for equal $W/L$ ($r = 1.87$), 1.22 V → 0.70 V.

Details:
- Target: $V_{out} = 3$ V for $V_{in} < 0.7$ V, $V_{out} = 0$ for $V_{in} > 2.2$ V, and both devices on between 0.7 and 2.2 V (a 1.5-V window).
- No implant: $M_1$ is on for $V_{in} > 0$ and $M_2$ for $V_{in} < 2.0$ V, so both are on over 0–2.0 V (a 2.0-V window). At $V_M$, both saturated: $\sqrt{\mu_n(W/L)_1}(V_M - 0) = \sqrt{\mu_p(W/L)_2}(3 - V_M - 1)$, so $V_M = 2/(1+r)$. The shift is $(0.2 + 0.7r)/(1+r)$ to the left.
- Consequences: the transition sits off-center (low-side noise margin reduced); the NMOS is already at threshold at $V_{in} = 0$ (leakage, a slightly degraded high level); the crowbar current at $V_M$ is larger, $\tfrac12\mu_nC_{ox}(W/L)_1[2/(1+r)]^2$ vs. $\tfrac12\mu_nC_{ox}(W/L)_1[1.5/(1+r)]^2$, i.e. about 1.8 times.
- With channel-length modulation, the gain at $V_M$ falls to about 1.5/2.0 = 0.75 of the target value, because the overdrives at $V_M$ add up to 2.0 V instead of 1.5 V. This is optional.

## Grading notes

+2: uses $V_{THN} \approx 0$, $|V_{THP}| \approx 1$ V and concludes that the curve shifts left: the transition begins at $V_{in} \approx 0$, $V_{out}$ reaches 0 at 2.0 V (vs. 2.2 V), and $V_M$ decreases ($2/(1+r)$ vs. $(2.2+0.7r)/(1+r)$, or numbers for an assumed ratio), with a wider region where both devices conduct.
+1: left shift and lower $V_M$ correct, but one of the break points wrong or missing.
0: only the NMOS change considered (with the PMOS change ignored), or the shift described qualitatively without break points.
-2 (asserted as fact): $V_M$ shifted to the right, the curve claimed unchanged, or the transfer curve not an inverter (circuit misread).
