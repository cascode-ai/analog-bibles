# Golden Solution - R588

## Reference answer

Equivalent resistor: $R_{eq} = 1/(C_1f_{CK}) = 1/(1\ \mathrm{pF} \times 100\ \mathrm{MHz}) = 10$ kΩ. Output amplitude ≈ $V_{in,p}/(\omega R_{eq}C_2) = 0.5/(2\pi \times 10^7 \times 10^4 \times 10^{-12}) = 0.5/0.628 \approx 0.80$ V.

Sketch: a staircase with one step per 10-ns clock cycle, 10 steps per 100-ns input period. Each step is $-(C_1/C_2)V_{in}(kT) = -V_{in}(kT)$, up to 0.5 V. The staircase approximates a 10-MHz sinusoid of ≈ 0.8 V peak, shifted 90° from the input. The integrator inverts: $V_{out} \propto -\int V_{in}dt$, so a sine input gives +cos. The output sits on a dc level set by the initial condition; e.g., starting from 0 when the input sine starts at 0, it swings between about 0 and −1.6 V.

Exact discrete-time check: $|H| = (C_1/C_2)/|1 - e^{-j\omega T}| = 1/[2\sin(\pi/10)] = 1.62$, giving 0.81 V.

## Grading notes

+2: $R_{eq}$ = 10 kΩ and an amplitude of ≈ 0.8 V (0.75–0.85 V), with a staircase of 10 steps per input cycle and a 90° shift from the (inverted) integration; any dc level stated as set by the initial conditions is accepted. +1: amplitude right with an incomplete sketch (no staircase or no phase). 0: right $R_{eq}$ and formula with an arithmetic slip. -2 (asserted as fact): the circuit treated as an amplifier of gain $C_1/C_2$ (amplitude 0.5 V), a 2π error (≈ 5 V), or $R_{eq} = f_{CK}/C_1$ or $1/(2\pi C_1f_{CK})$.
