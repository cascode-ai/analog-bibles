# Detailed solution - A546

Substitute the quantizer step of a 1-bit quantizer and the third-order coefficient into the given in-band noise formula, require the result not to exceed the rms quantization noise of an ideal 16-bit converter, and solve for the oversampling ratio.

### Step 1 — Parameters

For $B=1$, $\Delta=V_{REF}/(2^1-1)=V_{REF}$. For $L=3$,

$$
\frac{\pi^L}{\sqrt{2L+1}}=\frac{\pi^3}{\sqrt7}=\frac{31.01}{2.646}=11.72 .
$$

With $OSR=f_s/(2f_B)$, the factor $(2f_B/f_s)^{L+0.5}$ becomes $OSR^{-3.5}$.

### Step 2 — 16-bit condition

$$
n_o=\frac{V_{REF}}{\sqrt{12}}\,(11.72)\,OSR^{-3.5}\le\frac{V_{REF}}{2^{16}\sqrt{12}}
\;\Longrightarrow\;
OSR^{3.5}\ge2^{16}\times11.72=7.68\times10^5 .
$$

### Step 3 — Minimum oversampling ratio

$$
OSR\ge\left(7.68\times10^5\right)^{1/3.5}=48.0 .
$$

The minimum oversampling ratio is about 48; in practice the next power of two, 64, would be used, since decimation filters are simplest for power-of-two ratios.
