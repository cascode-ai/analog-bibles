# Detailed solution - A543

The second-order loop shapes the quantization noise by a fixed factor at the given oversampling ratio; the remaining freedom is the quantizer step $\Delta=V_{REF}/2^B$, which scales the noise directly. Compute the shaped noise for a general $B$, compare with the 16-bit limit, and take the smallest integer $B$ that meets it.

### Step 1 — Oversampling ratio and noise shaping

$$
M=\frac{f_s}{2f_B}=\frac{10\ \mathrm{MHz}}{200\ \mathrm{kHz}}=50 .
$$

For NTF $=(1-z^{-1})^L$ with white quantization error of power $\Delta^2/12$ over 0 to $f_s/2$, the in-band rms noise is

$$
n_0=\frac{\Delta}{\sqrt{12}}\,\frac{\pi^L}{\sqrt{2L+1}}\,M^{-(L+1/2)} .
$$

For $L=2$:

$$
n_0=\frac{\Delta}{\sqrt{12}}\,\frac{\pi^2}{\sqrt5}\,(50)^{-2.5}=\frac{\Delta}{\sqrt{12}}\,(4.414)(5.66\times10^{-5})=\frac{\Delta}{\sqrt{12}}\,(2.50\times10^{-4}).
$$

### Step 2 — Compare with the 16-bit limit

With $\Delta=V_{REF}/2^B$ and the allowed noise $V_{REF}/(2^{16}\sqrt{12})$,

$$
\frac{n_0}{V_{REF}/(2^{16}\sqrt{12})}=\frac{2^{16}\,(2.50\times10^{-4})}{2^B}=\frac{16.4}{2^B}\le1
\;\Longrightarrow\;
2^B\ge16.4 .
$$

| $B$ | Ratio | Margin | Result |
|---|---|---|---|
| 1 | 8.2 | −18.3 dB | fails |
| 4 | 1.02 | −0.2 dB | fails (just) |
| 5 | 0.51 | +5.8 dB | meets |

### Step 3 — Result

$$
B=5\ \text{bits}.
$$

Each extra quantizer bit halves $\Delta$ and gains about 6 dB. The 1-bit second-order loop is about 18 dB short, so about four more bits are needed; with $B=4$ the loop misses by only 0.2 dB, which strictly still fails the requirement.
