# Golden Solution - grsim-11-27

## Reference answer

The white analysis is confirmed approximately (a full small-signal calculation gives $4kT(\approx 25\text{ k}\Omega)$, ≈ 20 nV/√Hz, the extra coming from base-current shot noise in the 33-kΩ and 22-kΩ resistors that the hand analysis drops). At 1 Hz the pnp active-load current sources $Q_{13}$ and $Q_{14}$ dominate the equivalent input noise voltage (≈ 80% of ≈ $3.7\times10^{-14}$ V²/Hz, i.e. ≈ 190 nV/√Hz total), followed by $Q_9$/$Q_{10}$ (≈ 20%); the input pair contributes < 1%. The input noise current at 1 Hz is dominated by $Q_3$/$Q_4$'s base-current flicker noise (≈ $9\times10^{-23}$ A²/Hz).

- Flicker corner 1 kHz with $a = 1$: $K_1 = 2q\cdot1000$ Hz $= 3.2\times10^{-16}$ A, so every base-current noise is $2qI_B(1 + 1000/f)$, i.e. ≈ 1000× its shot noise at 1 Hz.
- $Q_{13}$ (base at a low-impedance bias, $R_{13}$ in the emitter): base-current noise reaches the collector almost fully, $i_o \approx i_b\,R_{13}/(R_{13} + 1/g_{m13}) \approx 0.88\,i_b$ (equivalently the term $\overline{i_{b}^2}R_{13}^2$ in its series-feedback input voltage). With $I_{B13} = 0.6\ \mu$A: $2q\cdot0.6\ \mu\cdot1001 = 1.9\times10^{-22}$ A²/Hz; for both sides referred through $G_{m1}$: $2\times1.9\times10^{-22}\times(33/37)^2/(97\ \mu)^2 \approx 3.2\times10^{-14}$ V²/Hz.
- $Q_9$: $I_{B9} = 6\ \mu\text{A}/40 = 0.15\ \mu$A, smaller emitter resistor: $2\times(2q\cdot0.15\ \mu\cdot1001)(22/26)^2/(97\ \mu)^2 \approx 7\times10^{-15}$ V²/Hz.
- $Q_3$/$Q_4$: base-current noise only flows in $r_b$ when the inputs are shorted: $2\times9.6\times10^{-23}\times200^2 \approx 8\times10^{-18}$ V²/Hz.
- Total at 1 Hz ≈ $3.7\times10^{-14}$ V²/Hz versus ≈ $4\times10^{-16}$ white: the low-β pnp load transistors, whose large base current flows in the 33-kΩ degeneration resistors, set the 1/f noise.

## Grading notes

A correct answer shows a simulated white input noise of ≈ 18–21 nV/√Hz (equivalent resistance 20–26 kΩ) confirming the hand analysis, and identifies $Q_{13}$/$Q_{14}$ as the dominant 1-Hz noise source, with $Q_9$/$Q_{10}$ second, the total at 1 Hz of order 150–250 nV/√Hz, and the mechanism (large pnp base current, flicker noise through the emitter resistor to the output). Mentioning that the input current noise is dominated by $Q_3$/$Q_4$ is a plus. +2: correct identification with numbers in these ranges. +1: correct device with a qualitative argument only, or simulation missing. 0: $Q_9$/$Q_{10}$ named as dominant with a sound but slightly mis-scaled argument. −2: the input pair $Q_3$/$Q_4$ claimed to dominate the input noise voltage at 1 Hz, flicker noise placed in the collector current with β² amplification, or the active load said to contribute no 1/f noise.
