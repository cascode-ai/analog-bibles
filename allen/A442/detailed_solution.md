# Detailed solution - A442

Each bit's contribution to the output is set by a capacitor ratio. Find how an error in a ratio appears at the output in LSB, identify the bit for which it is largest (the MSB), and require that error to stay within ±0.5 LSB.

### Step 1 — Output in terms of capacitor ratios

During conversion the bit capacitors switched to $V_{REF}$ and the rest of the array (total $C_{tot}=2C$) form a capacitive divider onto the top plate, so

$$
v_{OUT}=V_{REF}\sum_{i=0}^{N-1}b_i\frac{C_i}{C_{tot}},\qquad \frac{C_i}{C_{tot}}=\frac{C/2^{i}}{2C}=2^{-(i+1)}\ \text{(nominal)} .
$$

Only the ratios matter: scaling every capacitor by the same factor changes nothing. Let ratio $i$ deviate by the relative error $\Delta C/C$, i.e. $C_i/C_{tot}=2^{-(i+1)}(1\pm\Delta C/C)$.

### Step 2 — Output error caused by each bit

With $1\,\mathrm{LSB}=V_{REF}/2^N$, the error that bit $i$ adds when it is 1 is

$$
\delta v_i=\frac{\Delta C}{C}\,2^{-(i+1)}V_{REF}=\frac{\Delta C}{C}\,2^{N-1-i}\ \mathrm{LSB}.
$$

It is largest for the MSB ($i=0$), whose capacitor is half of the array: $\delta v_0=2^{N-1}(\Delta C/C)$ LSB. With the same relative accuracy the LSB capacitor contributes only $(\Delta C/C)$ LSB, so the MSB ratio sets the requirement.

### Step 3 — Requirement for 11-bit resolution

Keeping the MSB error within ±0.5 LSB (integral nonlinearity within ±0.5 LSB) with $N=11$:

$$
2^{N-1}\frac{\Delta C}{C}\le\frac12
\quad\Longrightarrow\quad
\frac{\Delta C}{C}\le2^{-N}=\frac{1}{2048}=4.88\times10^{-4}=0.049\% .
$$

### Step 4 — Stricter DNL criterion

At the MSB transition (code $011\ldots1\to100\ldots0$) the MSB ratio and the sum of all other ratios can err in opposite directions, so the step can be wrong by up to $(2^N-1)(\Delta C/C)$ LSB. Requiring this differential nonlinearity to stay within ±0.5 LSB gives

$$
\frac{\Delta C}{C}\le\frac{0.5}{2^{11}-1}=2.44\times10^{-4}\approx0.024\%,
$$

whereas only requiring monotonicity ($\le1$ LSB) returns the 0.049% figure. The relative accuracy of the capacitor ratios must therefore be about 0.05% (one part in 2048), or 0.024% if the 0.5-LSB DNL criterion is also imposed.
