# Detailed solution - A547

Substitute the step of a 2-bit quantizer and the third-order coefficient into the given in-band noise formula, require the result not to exceed the rms quantization noise of an ideal 16-bit converter, and solve for the oversampling ratio. The extra quantizer bit reduces $\Delta$ and therefore the required oversampling.

### Step 1 — Parameters

For $B=2$, $\Delta=V_{REF}/(2^2-1)=V_{REF}/3$. For $L=3$,

$$
\frac{\pi^L}{\sqrt{2L+1}}=\frac{\pi^3}{\sqrt7}=11.72 ,
$$

and $(2f_B/f_s)^{L+0.5}=OSR^{-3.5}$ with $OSR=f_s/(2f_B)$.

### Step 2 — 16-bit condition

$$
n_o=\frac{V_{REF}/3}{\sqrt{12}}\,(11.72)\,OSR^{-3.5}\le\frac{V_{REF}}{2^{16}\sqrt{12}}
\;\Longrightarrow\;
OSR^{3.5}\ge\frac{2^{16}\times11.72}{3}=2.56\times10^5 .
$$

### Step 3 — Minimum oversampling ratio

$$
OSR\ge\left(2.56\times10^5\right)^{1/3.5}=35.1 .
$$

The minimum oversampling ratio is about 35, compared with about 48 for a 1-bit quantizer: dividing $\Delta$ by 3 lowers the required $OSR$ by $3^{1/3.5}=1.37$. A power-of-two design would use 64, since 32 is not enough.
