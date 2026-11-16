# Golden Solution - A003

## Reference answer

Rounding each sample to the nearest level (code = amplitude, $D$ = code/16):

| $t/T$ | sample | code | $b_3b_2b_1b_0$ | $D$ |
|---|---|---|---|---|
| 0 | 8.0 | 8 | 1000 | 0.5 |
| 1 | 11.5 | 12 | 1100 | 0.75 |
| 2 | 13.9 | 14 | 1110 | 0.875 |
| 3 | 14.4 | 14 | 1110 | 0.875 |
| 4 | 12.9 | 13 | 1101 | 0.8125 |
| 5 | 9.8 | 10 | 1010 | 0.625 |
| 6 | 6.2 | 6 | 0110 | 0.375 |
| 7 | 3.1 | 3 | 0011 | 0.1875 |
| 8 | 1.6 | 2 | 0010 | 0.125 |
| 9 | 2.1 | 2 | 0010 | 0.125 |
| 10 | 4.5 | 4 | 0100 | 0.25 |
| 11 | 8.0 | 8 | 1000 | 0.5 |

The sample values come from the curve $x(t) \approx 8 + 6.5\sin(2\pi t/11T)$ (dc 8, peak 14.5 at $t \approx 2.75T$, minimum 1.5 at $t \approx 8.25T$). Samples at $t/T$ = 1 (11.5), 3 (14.4–14.5), 8 (1.5–1.6) and 10 (4.5) lie essentially on a decision threshold, so the neighbouring code is equally valid there (1011, 1111, 0001, 0101). The digital signal is a staircase of integer levels 8, 12, 14, 14, 13, 10, 6, 3, 2, 2, 4, 8, each held from $nT$ to $(n+1)T$, i.e. the sampled-and-held waveform quantized to 16 levels (error at most ±½ LSB).

With truncation instead of rounding the codes are 8, 11, 13, 14, 12, 9, 6, 3, 1, 2, 4, 8 (1000, 1011, 1101, 1110, 1100, 1001, 0110, 0011, 0001, 0010, 0100, 1000). Under truncation the decision thresholds are the integers, and the samples at $t/T$ = 0, 2, 4, 5, 6, 7, 9 and 11 (8.0, 13.9, 12.9, 9.8, 6.2, 3.1, 2.1, 8.0) lie within about 0.2 of one, so the neighbouring code is equally valid there (e.g. 0111 at $t/T$ = 0 and 11, 1110 at $t/T$ = 2).

## Grading notes

+2: one 4-bit word per integer $t/T$ (12 words), MSB first and consistent with the stated $D$, matching the rounding table above or, if truncation is stated, the truncation list; ±1 LSB is accepted at samples within about 0.25 of a decision threshold (rounding: $t/T$ = 1, 3, 8, 10; truncation: $t/T$ = 0, 2, 4, 5, 6, 7, 9, 11, e.g. 0111 at $t/T$ = 0 and 11). The staircase sketch or the $D$ values may be brief. +1: one or two other codes off by one LSB, or codes right with the $D$ values or the sketch missing. An isolated binary-conversion slip in one or two words whose quantized level and $D$ are right (e.g. level 8 written as 1001) counts the same: +1. 0: right method with several codes wrong (curve misread by more than half a unit at several samples, or conversion slips in more than two words), or a different but explicitly stated full-scale mapping applied consistently. −2 (asserted as fact): words that do not correspond to the samples (wrong number of bits, codes above 1111, a systematically wrong encoding such as reversed bit order applied throughout), the analog values given without quantization as the digital output, or values from a misread curve (wrong period, phase or amplitude).
