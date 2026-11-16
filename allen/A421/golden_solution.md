# Golden Solution - A421

## Reference answer

Noise ≤ about 21.6–30.5 µV rms depending on the peak/rms convention (21.6 µV with the book's convention, 30.5 µV for rms ≤ 0.5 LSB); temperature coefficient ≤ 0.305 ppm/°C.

- LSB = 1 V/2^14 = 61.0 µV; the reference-induced error must stay within ±0.5 LSB = ±30.5 µV (the output is proportional to $V_{REF}$, so the full-scale output sees the whole reference error).
- Noise: the most direct criterion, rms noise ≤ 0.5 LSB, gives $V_{n,rms}$ ≤ 30.5 µV. The book instead takes ±0.5 LSB as the peak noise with peak = √2 × rms (sinusoid-like noise): $V_{n,rms}$ ≤ 30.5 µV/√2 = 21.6 µV. (Stricter criteria give the same order: noise below the quantization noise LSB/√12 → 17.6 µV; Gaussian noise with a ≈3σ peak within 0.5 LSB → ≈10 µV.)
- Temperature coefficient: the drift over the 100 °C range must stay below 0.5 LSB: ΔV/V ≤ 30.5 µV/1 V = 30.5 ppm over 100 °C → TC ≤ 0.305 ppm/°C.

## Grading notes

Two parts, equal credit.
Noise: correct if the answer uses LSB = 61 µV and a 0.5-LSB (or quantization-noise) criterion, giving a value between about 10 µV and 31 µV; 21.6 µV (book, peak = √2·rms) and 30.5 µV (rms ≤ 0.5 LSB, itself a stated criterion that needs no further peak/rms argument) are both reference values.
TC: 0.305 ppm/°C (0.5 LSB over 100 °C); 0.61 ppm/°C is accepted only if the answer explicitly references the error to the mid-range temperature (±50 °C swing). A 1-LSB figure (61 µV, 0.61 ppm/°C) offered only as a conditional alternative after the correct 0.5-LSB results does not lower the score.
+2: both parts correct as above. +1: one part correct and the other with a minor issue (e.g. 0.61 ppm/°C from a 1-LSB allowance, or a noise value without a stated criterion). 0: one part correct, the other wrong. −2 (asserted as fact): both wrong, e.g. LSB computed with the wrong power of 2, a noise limit of 1 LSB or more, or ppm confused with percent.
