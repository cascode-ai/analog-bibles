# Golden Solution - A334

## Reference answer

Use Miller compensation around each half of the second stage: a capacitor $C_c$, preferably in series with a nulling resistor $R_z$, from the drain of M6 ($v_{out}^+$) to the gate of M6 (the M1/M3 drain node), and an identical $C_c$–$R_z$ from the drain of M7 ($v_{out}^-$) to the gate of M7 (the M2/M4 drain node).

- The amplifier has two high-impedance nodes in each signal path (first-stage output and output), giving two low-frequency poles; for differential signals the sources of M6/M7 are an ac ground, so each half of the second stage is an inverting common-source stage with gain $g_{m6}(r_{ds6}\|r_{ds9})$ and Miller compensation splits the poles exactly as in a single-ended two-stage op amp.
- Design relations (per half): $GB = g_{m1}/C_c$; output pole $p_2 \approx -g_{m6}/C_L$ (use $2C_L$ if the load is one capacitor between the outputs); RHP zero $g_{m6}/C_c$ removed by $R_z \ge 1/g_{m6}$, or $R_z = (C_c + C_L)/(g_{m6}C_c)$ to cancel $p_2$; for 60° phase margin with the zero at ≥ 10 GB, $|p_2| \ge 2.2\,GB$, i.e., $C_c \ge 2.2(g_{m1}/g_{m6})C_L$ (the familiar $0.22C_L$ when $g_{m6} = 10g_{m1}$).
- The output common-mode level is not defined (current-source loads in both stages), so a common-mode feedback circuit must also be added, and its loop must be stable as well.

## Grading notes

+2: Miller capacitors (with or without nulling resistors) connected across each half of the second stage, gate to drain of M6 and of M7 (two identical networks, preserving symmetry), with the reasoning about two high-impedance nodes and pole splitting; standard design relations are a plus; mentioning the needed CMFB is a plus. +1: correct placement without justification, or a single capacitor between the two first-stage outputs and two outputs described in an equivalent way. 0: compensation by load capacitance only, presented tentatively. −2 (asserted as fact): load capacitance alone claimed sufficient, capacitors connected from an output to the opposite-side first-stage node (positive feedback), or a capacitor across the first stage only. Judge the topology by the transistors named: a capacitor from the gate of M6 to the drain of M6 (and M7 to M7) is the correct same-side connection even if the answer swaps the labels $v_{out}^+$ and $v_{out}^-$; that labelling error is minor (+1), not the cross-connected −2 case. A compensated output pole written as $1/[R_o(C_L + \dots)]$ instead of ≈ $g_{m6}/C_L$, beside a correct placement, is likewise a minor error (+1).
