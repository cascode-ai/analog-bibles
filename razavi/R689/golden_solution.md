# Golden Solution - R689

## Reference answer

The inverter's transfer characteristic is identical to the target case: the same switching threshold, the same break points and the same gain. Only the currents, including the peak (crowbar) current and the charging currents, are lower in proportion to $C_{ox}$, so the circuit is slower.

The curve, with $r = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:
- $V_{in} < 0.7$ V: $M_1$ is off, so $V_{out} = 3$ V.
- $V_{in} > V_{DD} - |V_{THP}| = 2.2$ V: $M_2$ is off, so $V_{out} = 0$.
- In between, the output falls steeply around the switching threshold. There both devices are saturated: $\tfrac12\mu_nC_{ox}(W/L)_1(V_M - 0.7)^2 = \tfrac12\mu_pC_{ox}(W/L)_2(2.2 - V_M)^2$, so $V_M = (2.2 + 0.7r)/(1 + r)$. That is 1.45 V for $r = 1$ and 1.22 V for equal $W/L$ ($r = 1.87$). Below $V_M$, $M_2$ is in triode and $V_{out}$ is near 3 V; above it, $M_1$ is in triode and $V_{out}$ is near 0.
- $C_{ox}$ multiplies both sides of every current equation, so a thicker oxide common to both devices does not move $V_M$ or the break points. With channel-length modulation, the gain at $V_M$, $-(g_{m1}+g_{m2})(r_{O1}\|r_{O2})$, is also unchanged: $g_m \propto C_{ox}$ and $r_O \propto 1/C_{ox}$ at the same overdrives.
- The currents are lower by the $C_{ox}$ ratio, so the inverter has weaker drive and slower edges.

## Grading notes

+2: the curve is unchanged because $C_{ox}$ cancels (thresholds fixed); the inverter curve is described correctly ($V_{out} = 3$ V below 0.7 V, 0 above 2.2 V, sharp transition at $V_M = (V_{DD} - |V_{THP}| + rV_{THN})/(1+r)$ or the equivalent); lower current/slower operation mentioned.
+1: "unchanged" with correct reasoning but the curve sketchy or $V_M$ not characterized; or a correct curve with the speed penalty omitted.
0: correct target curve, comparison hedged or missing.
-2 (asserted as fact): $V_M$ or the gain claimed to shift because of the thicker oxide, or the circuit misread (e.g., not recognized as an inverter).
