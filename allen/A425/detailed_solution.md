# Detailed solution - A425

When every sink may be in error, the errors add at codes where several bits are on, and in the worst case all of them add with the same sign at full scale. The INL condition therefore becomes a single budget, half an LSB, that the sum of all sink errors must respect. Any split of that budget among the sinks is valid; two natural choices are worked out.

### Step 1 — Worst-case error

Let the sink of bit $b_i$ carry $(1+\varepsilon_i)\,I/2^{i+1}$. For a code with bits $b_i$ the output error is

$$
\Delta I_{OUT}=\sum_{i=0}^{N-1}b_i\,\varepsilon_i\frac{I}{2^{i+1}} .
$$

Its magnitude is largest when all bits are on and all $\varepsilon_i$ have the same sign. Requiring this to stay within $\tfrac12\,\mathrm{LSB}=I/2^{N+1}$:

$$
\sum_{i=0}^{N-1}|\varepsilon_i|\frac{I}{2^{i+1}}\le\frac{I}{2^{N+1}} .
$$

Keeping the full-scale error within half an LSB guarantees $|\mathrm{INL}|\le0.5$ LSB at every code, since every other code includes only a subset of the terms.

### Step 2 — Equal share of the budget per sink

Give each of the $N$ sinks an error of at most $\tfrac1N\cdot\tfrac12$ LSB:

$$
|\varepsilon_i|\frac{I}{2^{i+1}}\le\frac1N\cdot\frac{I}{2^{N+1}}
\quad\Rightarrow\quad
|\varepsilon_i|\le\frac{2^{i-N}}N,
$$

i.e. a tolerance of $\pm100\cdot2^{i-N}/N$ %, the single-sink value divided by $N$. The MSB sink then needs $\pm100/(N\cdot2^N)$ % and the LSB sink $\pm50/N$ %.

### Step 3 — One common tolerance for all sinks

Alternatively, give every sink the same fractional tolerance $\varepsilon$:

$$
\varepsilon\,I\sum_{i=0}^{N-1}\frac1{2^{i+1}}=\varepsilon\,I\bigl(1-2^{-N}\bigr)\le\frac{I}{2^{N+1}}
\quad\Rightarrow\quad
\varepsilon\le\frac1{2^{N+1}-2}\approx2^{-(N+1)} ,
$$

about half the MSB's single-sink tolerance, applied to every sink.

### Step 4 — Example, N = 10

| Allocation | MSB sink | LSB sink |
|---|---|---|
| Only one sink in error, all others exact | ±0.098 % | ±50 % |
| Equal share of the budget | ±0.0098 % | ±5 % |
| Common tolerance | ±0.049 % | ±0.049 % |

Both allocations keep $|\mathrm{INL}|\le0.5$ LSB. The common tolerance is simpler to specify and is set by the MSB; the equal-share allocation tightens the MSB further but lets the small sinks be much less accurate. In either case the large sinks dominate the error budget.
