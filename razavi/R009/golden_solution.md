# Golden Solution - R009

## Reference answer

Because of the body effect (bulk at 3 V), $M_1$ is off for $V_X \lesssim 1.98$ V; above that it conducts with the $V_X$ node as source, first in saturation (up to $V_X$ ≈ 2.49 V) and then in triode, reaching $I_X \approx 0.715\beta_p$ at $V_X = 3$ V.
- PMOS source = higher terminal. For $V_X < 1.9$ V the source is the 1.9-V node: $V_{SG} = 0.9$ V, $V_{BS} = 1.1$ V, $|V_{TH}| = 0.8 + 0.4(\sqrt{1.9} - \sqrt{0.8}) = 0.99$ V > 0.9 V → off. For $V_X > 1.9$ V the source is the $V_X$ node: $V_{SG} = V_X - 1$, $|V_{TH}| = 0.8 + 0.4(\sqrt{3.8 - V_X} - \sqrt{0.8})$; it turns on at $V_X$ ≈ 1.98 V. So $I_X = 0$, $g_m = 0$ for $0 \le V_X \lesssim 1.98$ V.
- 1.98 V < $V_X$ < 2.49 V: saturation ($V_{SD} = V_X - 1.9 > V_{SG} - |V_{TH}|$ while $|V_{TH}| > 0.9$ V): $I_X = \tfrac12\beta_p(V_X - 1 - |V_{TH}|)^2$ (current flows from the $V_X$ source into $M_1$, $I_X > 0$): 0.009β_p at 2.1 V, 0.068β_p at 2.3 V, 0.174β_p at 2.49 V. $g_m = \beta_p(V_X - 1 - |V_{TH}|)$ rises from 0 to ≈ 0.59β_p.
- $V_X$ > 2.49 V: triode, $I_X = \beta_p[(V_X - 1 - |V_{TH}|)(V_X - 1.9) - (V_X - 1.9)^2/2]$, reaching 0.715β_p at 3 V ($|V_{TH}| = 0.8$ V there); $g_m = \beta_p V_{SD} = \beta_p(V_X - 1.9)$, continuing up to 1.1β_p at 3 V.
- Without body effect $M_1$ would conduct for all $V_X$: a tiny reverse current $-\tfrac12\beta_p(0.1)^2 = -0.005\beta_p$ for $V_X < 1.8$ V, then triode with the $V_X$ node as source above 1.9 V.

## Grading notes

+2: PMOS recognized with source = higher-potential terminal; body effect (bulk at 3 V) keeps $M_1$ off up to ≈ 1.98 V (±0.05 V); conduction above with $I_X > 0$, saturation then triode (transition ≈ 2.5 V), $I_X$ ≈ 0.7β_p at 3 V; $g_m$ rising from 0 to ≈ 1.1β_p. +1: body effect neglected (small −0.005β_p region below 1.8 V, turn-on at 1.9 V) with an otherwise correct analysis, or correct regions without values. 0: correct turn-on but the region of operation above it wrong. -2 (asserted as fact): $M_1$ treated as an NMOS, source fixed at the 1.9-V node for all $V_X$, or large conduction for small $V_X$.
