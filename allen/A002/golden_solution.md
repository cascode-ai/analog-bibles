# Golden Solution - A002

## Reference answer

The output is a staircase (zero-order hold): at each sample time $t = nT$ the output jumps to the value of the sinusoid at that instant and holds it, unquantized, until the next sample at $(n+1)T$. Held values (amplitude units, read from the curve, ±0.1):

- $0 \le t/T < 1$: 8.0
- $1 \le t/T < 2$: 11.5
- $2 \le t/T < 3$: 13.9
- $3 \le t/T < 4$: 14.4
- $4 \le t/T < 5$: 12.9
- $5 \le t/T < 6$: 9.8
- $6 \le t/T < 7$: 6.2
- $7 \le t/T < 8$: 3.1
- $8 \le t/T < 9$: 1.6
- $9 \le t/T < 10$: 2.1
- $10 \le t/T < 11$: 4.5
- $t/T = 11$: 8.0 (held from there on)

The curve is $x(t) \approx 8 + 6.5\sin(2\pi t/11T)$: dc level 8, peak 14.5 at $t \approx 2.75T$, minimum 1.5 at $t \approx 8.25T$, period $11T$, so the samples are $8 + 6.5\sin(2\pi n/11)$. The staircase follows the sinusoid with an average delay of about half a sample period ($T/2$); its highest step (14.4) and lowest step (1.6) fall just short of the true extremes, which occur between sample times. The output changes only at the sample instants and is constant in between; the amplitudes remain analog (not quantized).

## Grading notes

+2: a staircase that changes only at the integer sample times and holds each sampled value for one period $T$ (from $nT$ to $(n+1)T$), with the 12 held values within ±0.4 of 8.0, 11.5, 13.9, 14.4, 12.9, 9.8, 6.2, 3.1, 1.6, 2.1, 4.5, 8.0. +1: correct staircase with one or two values off by more than the tolerance, or the held values rounded to whole numbers while still described as the analog held values. 0: the hold concept right but most values missing or misread, or the steps placed before the sample instants (held value applied over $((n-1)T, nT]$). −2 (asserted as fact): output tracking the continuous sinusoid between samples, only isolated sample points with no hold, the output quantized to digital codes and presented as what a sample-and-hold does, or values from a misread curve (wrong period, phase or amplitude).
