# Detailed solution - A550

The in-band noise power is the integral of $|N(f)|^2$ from 0 to $f_B$, since the ideal decimation filter removes everything above $f_B$. Because $f_B\ll f_s$, a small-angle expansion turns the integral into a power of $f_B$, which is then set equal to the 16-bit noise power.

### Step 1 — In-band noise power

With $\omega/(2f_s)=\pi f/f_s$, squaring the given density gives

$$
|N(f)|^2=\frac{4V_{REF}^2}{12}\,\frac{2}{f_s}\,\sin^4\!\left(\frac{\pi f}{f_s}\right),
\qquad
n_0^2=\int_0^{f_B}|N(f)|^2\,df .
$$

### Step 2 — Small-angle evaluation

For $f\le f_B\ll f_s$, $\sin(\pi f/f_s)\approx\pi f/f_s$, so

$$
n_0^2\approx\frac{4V_{REF}^2}{12}\,\frac{2}{f_s}\,\frac{\pi^4}{f_s^4}\,\frac{f_B^5}{5}
=\frac{V_{REF}^2}{12}\,\frac{8\pi^4}{5}\left(\frac{f_B}{f_s}\right)^5 .
$$

The fifth power of $f_B$ is the signature of first-order noise shaping: the density grows as $f^2$ in amplitude, $f^4$ in power, and integrating adds one more power.

### Step 3 — Apply the 16-bit criterion

The requirement is $n_0^2\le V_{REF}^2/(12\cdot2^{32})$. Cancelling $V_{REF}^2/12$:

$$
\frac{8\pi^4}{5}\left(\frac{f_B}{f_s}\right)^5\le 2^{-32}
\;\Rightarrow\;
\left(\frac{f_B}{f_s}\right)^5\le\frac{5}{8\pi^4\,2^{32}}=1.494\times10^{-12}.
$$

### Step 4 — Maximum bandwidth

Taking the fifth root,

$$
\frac{f_B}{f_s}\le 4.314\times10^{-3},\qquad
f_B\le(4.314\times10^{-3})(10\ \mathrm{MHz})=43.1\ \mathrm{kHz}.
$$

The corresponding oversampling ratio is $f_s/(2f_B)=116$. Integrating $\sin^4$ exactly (numerically) gives the same 43.1 kHz, because $\pi f_B/f_s=0.0136$ rad makes the small-angle error negligible.
