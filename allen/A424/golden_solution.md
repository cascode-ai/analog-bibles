# Golden Solution - A424

## Reference answer

Sink of bit $b_i$: tolerance $\pm 2^{i-N}\times100\% = \pm\dfrac{100}{2^{N-i}}\%$.

- An error $\varepsilon_i$ in the sink $I/2^{i+1}$ shifts the output by $\varepsilon_i I/2^{i+1}$; this must stay below 0.5 LSB = $I/2^{N+1}$, so $\varepsilon_i \le 2^{i+1}/2^{N+1} = 2^{i-N}$.
- MSB ($b_0$, $I/2$): $\pm100/2^N$ % (e.g. ±0.098 % for N = 10); LSB ($b_{N-1}$, $I/2^N$): ±50 %. Each bit toward the MSB needs twice the accuracy of the next lower one.
- (Numbering the sinks k = 1 … N from the MSB instead, the same result reads $2^{k-N}/2 \times 100\%$.)

## Grading notes

+2: $\pm2^{i-N}\times100\%$ for the sink of $b_i$ (or an equivalent with a clearly stated different index), MSB tightest at $100/2^N$ %, LSB ±50 %. +1: correct values with the index mapping left ambiguous. 0: correct method but off by a factor of 2 throughout. −2 (asserted as fact): tolerances that loosen toward the MSB, the same tolerance for all sinks given as the answer, or an error of a factor $2^N$.
