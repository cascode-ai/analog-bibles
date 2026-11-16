# Golden Solution - R150

## Reference answer

About 25 mV.
- Glitch on $L_2$: $3 \times 9/(9+100) = 0.248$ V; on $L_3$: $3 \times 10/(10+100) = 0.273$ V.
- Both glitches have the same polarity (same clock edge), so they cancel in $V_X - V_Y$ except for the mismatch: $0.273 - 0.248 \approx 0.025$ V.
- This is about 11 times smaller than the 0.27-V single-ended glitch; with perfect symmetry it would vanish.

## Grading notes

+2: 24–28 mV (25.0 mV from the two dividers, or ≈ 27 mV from 3 V × 1 fF/110 fF), with the cancellation of the common part explained. +1: 30 mV from using 100 fF as the denominator, or the right method with a slip. 0: identifies the cancellation but gives no valid number. -2 (asserted as fact): zero glitch (perfect cancellation despite the mismatch), the two glitches added (≈ 0.52 V), or the single-ended 0.27 V given as the differential glitch.
