# Detailed solution - A505

In each clock period the shift register's single 1 selects the bit being guessed; that bit is set on top of the bits already decided, the DAC output is compared with the held input, and the comparator output decides whether the guessed bit is kept.

### Step 1 — DAC weights and decision rule

With $V_{REF}=5$ V, the DAC weights are

$$
V_{out}=V_{REF}\left(\frac{D_0}{2}+\frac{D_1}{4}+\frac{D_2}{8}+\frac{D_3}{16}\right),\qquad
\frac{V_{REF}}{2}=2.5\ \mathrm V,\ \frac{V_{REF}}{4}=1.25\ \mathrm V,\ \frac{V_{REF}}{8}=0.625\ \mathrm V,\ \frac{V_{REF}}{16}=0.3125\ \mathrm V .
$$

The held input (3 V) drives the comparator's + input and $V_{out}$ its − input, so the comparator output is 1 when $v_{in}>V_{out}$; a 1 keeps the guessed bit and a 0 clears it.

### Step 2 — Clock periods 1 to 4

Representative period 2: $D_0=1$ was kept, and the register's 1 now selects $D_1$, so the guess is 1100 and

$$
V_{out}=2.5\ \mathrm V+1.25\ \mathrm V=3.75\ \mathrm V>3\ \mathrm V,
$$

the comparator outputs 0 and $D_1$ is cleared, leaving 1000.

| Clock | $B_0B_1B_2B_3$ | Guessed $D_0D_1D_2D_3$ | $V_{out}$ | Comparator | Actual $D_0D_1D_2D_3$ |
|---|---|---|---|---|---|
| 1 | 1000 | 1000 | 2.5 V | 1 | 1000 |
| 2 | 0100 | 1100 | 3.75 V | 0 | 1000 |
| 3 | 0010 | 1010 | 3.125 V | 0 | 1000 |
| 4 | 0001 | 1001 | 2.8125 V | 1 | 1001 |

### Step 3 — Result

The conversion ends with

$$
D_0D_1D_2D_3=1001,\qquad V_{out}=2.5\ \mathrm V+0.3125\ \mathrm V=2.8125\ \mathrm V,
$$

the largest DAC level not exceeding 3 V; the residual $3-2.8125=0.1875$ V is less than 1 LSB $=0.3125$ V.
