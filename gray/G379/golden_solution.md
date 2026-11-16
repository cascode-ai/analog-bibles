# Golden Solution - G379

## Reference answer

Each output can swing from −0.6 V to +2.3 V. The largest symmetric swing is obtained with $V_{OC} = 0.85$ V, which gives a peak differential output of 2.9 V (each output swings ±1.45 V around 0.85 V).

- Lower limit: with the inputs at about 0 V ($V_{ic} = 0$, $V_{id} \approx 0$), $M_1$ enters triode when $V_{GD1} = V_{tn}$, i.e. $V_{o1(\min)} = V_{i1} - V_{tn} \approx -0.6$ V.
- Upper limit: $M_3$ enters triode when $V_{SD3} = |V_{ov3}|$, i.e. $V_{o1(\max)} = V_{DD} - |V_{ov3}| = 2.5 - 0.2 = 2.3$ V.
- The same limits hold for $V_{o2}$ ($M_2$, $M_4$). The tail transistor $M_5$ is not limiting: its drain sits at $0 - V_{GS1} = -0.8$ V, so $V_{DS5} = 1.7$ V > 0.2 V.
- Best $V_{OC}$ is midway: $(2.3 + (-0.6))/2 = 0.85$ V. Then $V_{od(\text{peak})} = V_{o1(\max)} - V_{o2(\min)} = 2.3 - (-0.6) = 2.9$ V.

## Grading notes

+2: limits −0.6 V and 2.3 V for each output, $V_{OC} = 0.85$ V and peak $V_{od}$ = 2.9 V (±0.02 V). +1: right method and limits, with a slip in only one of the derived numbers, or the peak given as peak-to-peak 5.8 V without saying so but otherwise right. 0: only one swing limit right, or the limits right but $V_{OC}$/peak missing. −2 (asserted as fact): lower limit taken as $-V_{SS} + $ something (e.g. −2.3 V or −2.1 V, ignoring that $M_1$ leaves saturation when its drain falls a threshold below its gate), upper limit $V_{DD}$ or $V_{DD} - |V_{tp}|$, or the peak differential swing taken equal to the single-ended swing.
