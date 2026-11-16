# Golden Solution - R584

## Reference answer

A return-to-zero sample-and-hold waveform.

- Each 10-ns sampling phase: $V_{out} \approx 0$. The op amp is in unity-gain feedback with X at virtual ground, and $C_H$ tracks $V_{in}$.
- Each 10-ns amplification phase: $C_H$ is flipped around the op amp, and $V_{out}$ rises (after the op amp settles or slews) to the sampled value $V_{0k}$, the value of $V_{in}$ when $S_2$ turned off. It holds that value until the next sampling phase. The output is noninverted, $V_{out} \approx V_{0k}$.
- With sampling phases at 0–10 ns, 20–30 ns, …: pulses of 0.794, 0.976, 0.500, 0.024 and 0.206 V, repeating every 100 ns (5 pulses per input cycle), each followed by a return to ≈ 0.
- The output is valid only during the hold phase. With a finite op-amp gain A and input capacitance $C_{in}$: $V_{out} \approx V_0/[1 + (1 + C_{in}/C_H)/A]$.

## Grading notes

+2: output ≈ 0 during the sampling phases and equal to the sampled $V_{in}$ (0–1 V, noninverted) during the hold phases, 10 ns each, 5 samples per input period. +1: correct pulses with the return to zero not stated, or a minor timing issue. 0: only "the output holds the sampled value" without the waveform. -2 (asserted as fact): $V_{out}$ tracking $V_{in}$ during the sampling phase, an inverted output, or a gain other than 1.
