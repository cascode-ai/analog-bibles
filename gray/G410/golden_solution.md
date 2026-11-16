# Golden Solution - G410

## Reference answer

Peak $V_{od}$ = 3.4 V (each output swings between −1.7 V and +1.7 V; $V_{OC} = 0$).

- Upper limit of an output: the PMOS current source $M_3$ and cascode $M_{3A}$ each need $|V_{DS}| \ge |V_{ov}|$, so with $V_{BB4}$ chosen to put $M_3$ just at the edge of saturation, $V_{o1(\max)} = V_{DD} - |V_{ov3}| - |V_{ov3A}| = 2 - 0.3 = 1.7$ V.
- Lower limit: NMOS $M_{11}$ and cascode $M_{1A}$: $V_{o1(\min)} = -V_{SS} + V_{ov11} + V_{ov1A} = -2 + 0.3 = -1.7$ V.
- With the CM output at the midpoint (0 V), $V_{od(\text{peak})} = V_{o1(\max)} - V_{o2(\min)} = 1.7 - (-1.7) = 3.4$ V.

## Grading notes

+2: 3.4 V peak (equivalently 6.8 V peak-to-peak, if labelled), from two overdrives at each end. +1: per-output limits ±1.7 V right and the differential value implied or given as peak-to-peak without label. 0: one overdrive per side (±1.85 V, 3.7 V) or thresholds included with otherwise sound reasoning. −2 (asserted as fact): 1.7 V (single-ended swing given as differential), or limits including threshold voltages as if the cascodes were diode-biased with no justification.
