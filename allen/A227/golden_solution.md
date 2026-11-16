# Golden Solution - A227

## Reference answer

$V_{BIAS} = \dfrac{V_{T1} + |V_{T2}|}{2}$, with both thresholds evaluated at the crossover output voltage $v_{OUT}$ = 0:
$V_{T1} = 0.7 + 0.4\left(\sqrt{0.7+|V_{SS}|}-\sqrt{0.7}\right)$ V and $|V_{T2}| = 0.7 + 0.57\left(\sqrt{0.8+V_{DD}}-\sqrt{0.8}\right)$ V.

- At the crossover neither device conducts, so no load current flows and $v_{OUT}$ = 0.
- M1 starts to conduct when $v_{IN}+V_{BIAS} - 0 = V_{T1}$, i.e. at $v_{IN} = V_{T1} - V_{BIAS}$.
- M2 stops conducting when $0 - (v_{IN}-V_{BIAS}) = |V_{T2}|$, i.e. at $v_{IN} = V_{BIAS} - |V_{T2}|$.
- Equal transition points: $V_{T1} - V_{BIAS} = V_{BIAS} - |V_{T2}|$ → $V_{BIAS} = (V_{T1}+|V_{T2}|)/2$; the crossover then occurs at $v_{IN} = (V_{T1}-|V_{T2}|)/2$ (not exactly at 0 when the body-effect thresholds differ).
- Examples: ±2.5 V supplies: $V_{T1}$ = 1.08 V, $|V_{T2}|$ = 1.23 V → $V_{BIAS}$ ≈ 1.15 V; ±5 V: 1.32 V and 1.56 V → 1.44 V. Ignoring the body effect, $V_{BIAS} = V_T$ = 0.7 V. (With separate batteries one would set $V_{BIAS1} = V_{T1}$ and $V_{BIAS2} = |V_{T2}|$.)

## Grading notes

+2: $V_{BIAS} = (V_{T1}+|V_{T2}|)/2$ with body-effect thresholds at $v_{OUT}$ = 0 (or an equivalent statement that each battery equals its device's threshold when they may differ). +1: the correct condition $V_{BIAS} = (V_{T1}+|V_{T2}|)/2$ with the thresholds stated to be the body-effect values at $v_{OUT}$ = 0 ($V_{SB1} = |V_{SS}|$, $V_{BS2} = V_{DD}$) but not written out. 0: $V_{BIAS} = V_T$ = 0.7 V with the body effect explicitly ignored (the question supplies γ, $2|\phi_F|$ and the bulk connections), or the equal-quiescent-current condition $\sqrt{\beta_1}(V_{BIAS}-V_{T1}) = \sqrt{\beta_2}(V_{BIAS}-|V_{T2}|)$ given instead of the turn-on condition. −2 (asserted as fact): a $V_{BIAS}$ that leaves both devices conducting a large quiescent current at the crossover (e.g. $V_{T1}+|V_{T2}|$), or thresholds evaluated with the wrong body bias (e.g. $V_{SB1}$ = 0 claimed exact).
