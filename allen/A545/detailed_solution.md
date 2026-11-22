# Detailed solution - A545

Square the given noise spectral density, integrate it over the signal band to obtain the in-band noise power, and set that power equal to the quantization noise power of an ideal 18-bit quantizer of full scale $\Delta$. Solving for $f_B$ gives the usable bandwidth.

### Step 1 — Assumptions

- Linearized model: the quantization error is white, so the given $|N(f)|$ is the one-sided output noise density.
- The decimation filter is an ideal low-pass at $f_B$, so only noise in 0 to $f_B$ counts.
- $f_B\ll f_s$, so $\sin x\approx x$ in the band (checked at the end).

### Step 2 — In-band noise power

With $\omega\tau/2=\pi f/f_s$,

$$
n_0^2=\int_0^{f_B}|N(f)|^2df=\frac{16\Delta^2}{12}\,\frac2{f_s}\int_0^{f_B}\sin^4\frac{\pi f}{f_s}\,df .
$$

Using $\sin x\approx x$,

$$
n_0^2\approx\frac{16\Delta^2}{12}\,\frac2{f_s}\,\frac{\pi^4}{f_s^4}\,\frac{f_B^5}{5}
=\frac{\Delta^2}{12}\,\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5 .
$$

### Step 3 — 18-bit requirement

$$
\frac{\Delta^2}{12}\,\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5\le\frac{\Delta^2}{12\cdot2^{36}}
\;\Longrightarrow\;
\left(\frac{2f_B}{f_s}\right)^5\le\frac{5}{\pi^4\,2^{36}}=7.47\times10^{-13},
$$

$$
\frac{2f_B}{f_s}\le3.76\times10^{-3}
\;\Longrightarrow\;
f_B\le\frac{(3.76\times10^{-3})(10\ \mathrm{MHz})}{2}=18.8\ \text{kHz}.
$$

The oversampling ratio is $f_s/(2f_B)\approx266$.

### Step 4 — Check of the approximation

At $f_B$, $\pi f_B/f_s=5.9\times10^{-3}$, so $\sin x\approx x$ is excellent; integrating $\sin^4$ exactly gives $f_B=18.78$ kHz, the same to better than 0.1%.
