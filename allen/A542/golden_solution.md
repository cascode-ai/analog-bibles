# Golden Solution - A542

## Reference answer

$L = 3$.

- Oversampling ratio $M = f_s/(2f_B) = 10\ \mathrm{MHz}/200\ \mathrm{kHz} = 50$.
- In-band noise of an $L$th-order loop: $n_0 = \dfrac{\Delta}{\sqrt{12}}\dfrac{\pi^L}{\sqrt{2L+1}}\left(\dfrac{1}{M}\right)^{L+1/2}$.
- With $\Delta = V_{REF}/2$, the ratio $n_0 / [V_{REF}/(2^{16}\sqrt{12})] = 2^{15}\,\dfrac{\pi^L}{\sqrt{2L+1}}M^{-(L+1/2)}$:
  - $L = 1$: 168 (fails);
  - $L = 2$: 8.2 (fails, about 18 dB short);
  - $L = 3$: 0.43 (meets, ≈ 7 dB margin).
- Equivalently, the peak SQNR for $L$ = 2 is ≈ 80 dB and for $L$ = 3 ≈ 105 dB, against the 98 dB needed for 16 bits.

## Grading notes

+2: L = 3, with M = 50 and the in-band noise (or dynamic-range) formula evaluated to show L = 2 fails and L = 3 meets the 16-bit requirement. +1: L = 3 with only the L = 3 case checked (L = 2 not shown to fail), or a small numerical slip that does not change the result. 0: correct method with M taken as $f_s/f_B$ = 100 (still L = 3) without justification, or the right formula with an error that leads to L = 2 while the reasoning is shown. −2 (asserted as fact): L = 1 or L = 2 claimed sufficient, or L ≥ 4 claimed necessary.
