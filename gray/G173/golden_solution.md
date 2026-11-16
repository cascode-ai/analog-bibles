# Golden Solution - G173

## Reference answer

$M_{109}$ enters the triode region first, at an overdrive of about $V_{ov} \approx 0.3$ V (≈ 0.275 V with the 100-mV margin). Its branch stacks three gate-source drops between the rails.

Voltages with all overdrives $V_{ov}$ and $|V_t| = 0.7$ V; total supply 3.3 V:
- $M_{101}$/$M_{102}$ are stacked n-channel diodes: $V_{BIAS4} = -V_{SS} + V_t + V_{ov}$, and the gate node of $M_{101}$, $M_{104}$, $M_{109}$ is at $-V_{SS} + 2(V_t + V_{ov})$.
- $M_{107}$/$M_{108}$ are stacked p-channel diodes: $V_{BIAS1} = V_{DD} - (|V_t| + |V_{ov}|)$, and the drain of $M_{108}$ (= drain of $M_{109}$) is at $V_{DD} - 2(|V_t| + |V_{ov}|)$.
- $M_{109}$'s source sits one $V_{GS}$ below its gate: $-V_{SS} + V_t + V_{ov}$ (so $M_{110}$ has $V_{DS} = V_t + V_{ov}$). Therefore $V_{DS109} = 3.3 - 3(V_t + V_{ov}) = 1.2 - 3V_{ov}$.
- Active needs $V_{DS109} \ge V_{ov}$, i.e. $V_{ov} \le 0.3$ V. With the 100-mV margin, $V_{ov} \le 0.275$ V.
- The other non-diode devices have more room. $M_{103}$, $M_{110}$, $M_{111}$: $|V_{DS}| = |V_t| + |V_{ov}|$, always fine. $M_{104}$ (drain at $V_{DD} - (V_{ov} + 0.1) - (|V_t| + |V_{ov}|)$, source at $-V_{SS} + V_t + V_{ov}$) and $M_{112}$ (mirror image): $|V_{DS}| = 3.3 - 2|V_t| - 3|V_{ov}| - 0.1$, which reaches $|V_{ov}| + 0.1$ only at $V_{ov} \approx 0.43$ V. Diode-connected devices always have $|V_{DS}| = |V_t| + |V_{ov}|$.

Redesign (any scheme that removes the three-$V_{GS}$ stack is acceptable), e.g.:
- Generate $V_{BIAS1}$ and the cascode-gate voltage for $M_{112}$ in separate branches. A single diode-connected p-device ($M_{107}$) is fed by its own n-channel current source to give $V_{BIAS1}$. A second p-device biases $M_{112}$'s gate: a diode with reduced $W/L$, or a diode plus a triode device as in $M_{105}$/$M_{106}$. Each branch then has at most two gate-source drops plus one overdrive between the rails, and the overdrive limit rises to about 0.4–0.6 V (the next limit is $M_{104}$/$M_{112}$ at ≈ 0.43 V).
- Or bias the n-cascode $M_{109}$ (and $M_{104}$) with a high-swing scheme, so that $M_{110}$ runs at $V_{DS} \approx V_{ov}$ + margin instead of $V_t + V_{ov}$. This frees one threshold of headroom ($V_{DS109} = 3.3 - 2|V_t| - 3V_{ov} - 0.1 = 1.8 - 3V_{ov}$, so the limit rises to about 0.43 V, the same as $M_{104}$/$M_{112}$).

Disadvantages:
- More bias branches mean more current (power) and area.
- More separately generated bias voltages give more sensitivity to mismatch and to process/temperature variation of the threshold/overdrive relationship ($W/L$-ratio or triode-based level shifts track only approximately, and the body effect is ignored in sizing).
- If cascodes are removed from some current sources, their currents depend more on $V_{DS}$ (channel-length modulation), lowering bias accuracy and supply rejection.
- Additional nodes may need start-up/settling care.

## Grading notes

+2: $M_{109}$ identified, with the explanation that its drain is two diode drops below $V_{DD}$ (the $M_{107}$/$M_{108}$ stack) while its source is one $V_{GS}$ above $-V_{SS}$, so $V_{DS109} = V_{DD}+V_{SS} - 3(V_t+V_{ov})$, triode at about 0.28–0.3 V of overdrive; plus a workable redesign that removes one stacked $V_{GS}$ from that branch, and at least one real disadvantage (extra power/area, poorer tracking/accuracy). +1: correct transistor and reason, redesign or disadvantages only vague. 0: correct transistor with a wrong or missing explanation, or a different transistor ($M_{104}$/$M_{112}$) chosen with a correct but non-limiting $V_{DS}$ analysis. -2 (asserted as fact): a diode-connected transistor claimed to enter triode, $M_{106}$/$M_{114}$ chosen despite the exclusion, or a redesign that adds further stacked devices to the same branch.
