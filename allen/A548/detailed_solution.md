# Detailed solution - A548

Substitute the quantizer step and loop order into the given in-band noise formula, set it equal to the rms quantization noise of an ideal 16-bit converter, and solve for the oversampling ratio.

### Step 1 — Specialize the noise formula

Writing $2f_B/f_s=1/OSR$, the in-band rms noise of an $L$th-order modulator is

$$
n_o=\frac{\Delta}{\sqrt{12}}\,\frac{\pi^L}{\sqrt{2L+1}}\,OSR^{-(L+0.5)} .
$$

A 3-bit quantizer has $2^3-1=7$ steps across $V_{REF}$, so $\Delta=V_{REF}/7$. For the second-order loop, $L=2$:

$$
\frac{\pi^L}{\sqrt{2L+1}}=\frac{\pi^2}{\sqrt5}=4.414,\qquad
n_o=\frac{V_{REF}}{7\sqrt{12}}\,(4.414)\,OSR^{-2.5}.
$$

### Step 2 — Apply the 16-bit criterion

The requirement is $n_o\le V_{REF}/(2^{16}\sqrt{12})$. The factor $V_{REF}/\sqrt{12}$ cancels:

$$
\frac{4.414}{7}\,OSR^{-2.5}\le 2^{-16}
\;\Rightarrow\;
OSR^{2.5}\ge\frac{2^{16}(4.414)}{7}=4.13\times10^4 .
$$

### Step 3 — Minimum oversampling ratio

Taking the $1/2.5=0.4$ power,

$$
OSR_{\min}=(4.13\times10^4)^{0.4}=70.2\approx 70 .
$$

Check: at $OSR=70.2$, $n_o=(4.414/7)(70.2)^{-2.5}\,V_{REF}/\sqrt{12}=1.00\times2^{-16}\,V_{REF}/\sqrt{12}$. In practice the decimation filter favours a power of 2, so the next convenient choice is $OSR=128$, which leaves $n_o$ at about 0.22 of the 16-bit limit.
