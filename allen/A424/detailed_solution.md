# Detailed solution - A424

A relative error in one current sink shifts the output by that fraction of the sink's nominal current, at every code where the bit is on. With all other bits ideal, that shift is the INL, so the tolerance follows by requiring it to stay below half an LSB. Larger sinks need proportionally tighter tolerances.

### Step 1 — Error caused by one sink

Let the sink of bit $b_i$ carry $(1+\varepsilon_i)\,I/2^{i+1}$ instead of $I/2^{i+1}$. With all other sinks ideal, the output differs from the ideal value by

$$
\Delta I_{OUT}=\varepsilon_i\frac{I}{2^{i+1}}\quad\text{whenever }b_i=1,
$$

and by zero otherwise. This deviation from the ideal characteristic is the INL.

### Step 2 — Require INL below half an LSB

With $1\ \mathrm{LSB}=I/2^N$, the condition $|\Delta I_{OUT}|\le\tfrac12\,\mathrm{LSB}=I/2^{N+1}$ gives

$$
|\varepsilon_i|\frac{I}{2^{i+1}}\le\frac{I}{2^{N+1}}
\quad\Rightarrow\quad
|\varepsilon_i|\le2^{i-N}=\frac1{2^{N-i}} .
$$

So the sink of bit $b_i$ needs a tolerance of

$$
\pm\frac{100}{2^{N-i}}\ \% .
$$

### Step 3 — Extremes

| Bit | Nominal current | Tolerance | Example, N = 10 |
|---|---|---|---|
| $b_0$ (MSB) | $I/2$ | $\pm100/2^N\ \%$ | ±0.098 % |
| $b_i$ | $I/2^{i+1}$ | $\pm100/2^{N-i}\ \%$ | — |
| $b_{N-1}$ (LSB) | $I/2^N$ | ±50 % | ±50 % |

Each step toward the MSB halves the allowed tolerance, because that sink's current doubles while the half-LSB budget stays fixed. The MSB sink, carrying half of full scale, must match to better than $1/2^N$, which is what limits the resolution of binary-weighted DACs. When several sinks are in error at once, their errors add at codes where they are all on, so in practice each must be tighter still.
