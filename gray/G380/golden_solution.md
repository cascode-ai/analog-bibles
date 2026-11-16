# Golden Solution - G380

## Reference answer

Each output can swing from −2.3 V to +2.3 V. The largest symmetric swing is obtained with $V_{OC} = 0$, which gives a peak differential output of 4.6 V.

- The outputs are the drains of the second-stage devices: $V_{o1}$ at the drains of $M_6$ (NMOS) and $M_7$ (PMOS current source); $V_{o2}$ at $M_9$/$M_{10}$.
- Upper limit: $M_7$ enters triode at $V_{o1(\max)} = V_{DD} - |V_{ov7}| = 2.3$ V.
- Lower limit: $M_6$ enters triode at $V_{o1(\min)} = -V_{SS} + V_{ov6} = -2.3$ V.
- The first stage does not limit the outputs (its nodes are isolated from the outputs by the second stage, apart from the compensation capacitors).
- $V_{OC} = (2.3 - 2.3)/2 = 0$; $V_{od(\text{peak})} = V_{DD} + V_{SS} - V_{ov6} - |V_{ov7}| = 2.3 - (-2.3) = 4.6$ V.

## Grading notes

+2: ±2.3 V limits, $V_{OC} = 0$, peak $V_{od}$ = 4.6 V. +1: correct limits and $V_{OC}$ with the peak stated as peak-to-peak 9.2 V and labelled as such, or a single slip. 0: limits right but $V_{OC}$ or peak missing. −2 (asserted as fact): limits set by the input stage or by threshold voltages (e.g. ±1.9 V), or a peak differential swing of 2.3 V.
