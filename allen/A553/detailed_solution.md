# Detailed solution - A553

Shape the white quantization-noise density by $|NTF_Q|^2$ evaluated on the unit circle, integrate over the signal band, and compare with the 16-bit noise power. A small-angle expansion is valid because the band is a tiny fraction of $f_s$.

### Step 1 — Magnitude of the NTF

On the unit circle $z=e^{j\omega T}$ with $\omega T=2\pi f/f_s$:

$$
|1-e^{-j\omega T}|=\left|e^{-j\omega T/2}\left(e^{j\omega T/2}-e^{-j\omega T/2}\right)\right|=2\sin\frac{\pi f}{f_s},
\qquad
|NTF_Q|^2=16\sin^4\frac{\pi f}{f_s}.
$$

### Step 2 — In-band noise power

The quantization error power $\Delta^2/12$ is spread uniformly over $0$ to $f_s/2$, a one-sided density of $(\Delta^2/12)(2/f_s)$. After shaping and the ideal decimation filter,

$$
n_0^2=\frac{\Delta^2}{12}\,\frac{2}{f_s}\int_0^{f_B}16\sin^4\frac{\pi f}{f_s}\,df
\approx\frac{\Delta^2}{12}\,\frac{32}{f_s}\,\frac{\pi^4}{f_s^4}\,\frac{f_B^5}{5}
=\frac{\Delta^2}{12}\,\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5 ,
$$

using $\sin x\approx x$ and $32=2^5$. This is the familiar second-order result $\frac{\Delta^2}{12}\frac{\pi^{2L}}{2L+1}M^{-(2L+1)}$ with $L=2$ and $M=f_s/(2f_B)$.

### Step 3 — Apply the 16-bit criterion

With full scale $\Delta$, the requirement is $n_0^2\le\Delta^2/(12\cdot2^{32})$:

$$
\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5\le2^{-32}
\;\Rightarrow\;
\left(\frac{2f_B}{f_s}\right)^5\le\frac{5}{\pi^4\,2^{32}}=1.195\times10^{-11}.
$$

### Step 4 — Maximum bandwidth

The fifth root gives

$$
\frac{2f_B}{f_s}\le6.539\times10^{-3}\quad(M\ge152.9),\qquad
f_B\le\frac{(6.539\times10^{-3})(10\ \mathrm{MHz})}{2}=32.7\ \mathrm{kHz}.
$$

The oversampling ratio is $M=f_s/(2f_B)\approx153$, so the band edge is $f_s/(2M)$, not $f_s/M$. A numerical integration of the exact $\sin^4$ form gives the same 32.7 kHz, since $\pi f_B/f_s\approx0.010$ rad.
