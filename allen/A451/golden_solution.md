# Golden Solution - A451

## Reference answer

$2^N$: the largest capacitor is $C_X = 2^NC$ and the smallest is $C$, so $C_X/C = 2^N$ (within the switched array alone the spread is $2^{N-1}C/C = 2^{N-1}$).

## Grading notes

+2: $2^N$ (mentioning $2^{N-1}$ for the array alone is fine). +1: $2^{N-1}$ explicitly restricted to the switched array, with $C_X$ overlooked. −2 (asserted as fact): N, 2N, $2^N - 1$ claimed as the spread, or a spread of 2. An answer whose boxed or main result is a mismatch tolerance (e.g. $\varepsilon < 1/(2^N - 1)$) instead of the largest-to-smallest capacitance ratio answers a different question: −2 if $2^N$ (or $2^{N-1}$) is never given; +1 if it also states the largest-to-smallest ratio $2^N$ (including $C_X$) but does not identify it as the requested spread.
