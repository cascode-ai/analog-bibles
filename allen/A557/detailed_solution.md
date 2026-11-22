# Detailed solution - A557

Reduce the inner loop of [Fig. 1] to a resonator, close the outer loop to get the signal and noise transfer functions, evaluate the NTF on the unit circle, and integrate $|N(f)|^2$ over the narrow band around $f_o=f_s/4$. Then apply the 12-bit criterion.

### Step 1 — Inner loop: a resonator

Let $U=X+z^{-1}Y$ be the output of the first summer and $V$ the output of the forward $z^{-1}$ block. The inner loop subtracts $z^{-1}V$ before that block:

$$
V=z^{-1}\left(U-z^{-1}V\right)
\;\Rightarrow\;
V=\frac{z^{-1}}{1+z^{-2}}\,U .
$$

Its poles at $z=\pm j$ make it a resonator at $f_s/4$, the band-pass counterpart of an integrator.

### Step 2 — Outer loop: STF and NTF

With $Y=V+Q$:

$$
Y=\frac{z^{-1}\left(X+z^{-1}Y\right)}{1+z^{-2}}+Q
\;\Rightarrow\;
Y\,\frac{1+z^{-2}-z^{-2}}{1+z^{-2}}=\frac{z^{-1}X}{1+z^{-2}}+Q ,
$$

$$
Y(z)=z^{-1}X(z)+(1+z^{-2})Q(z),\qquad STF=z^{-1},\quad NTF=1+z^{-2}.
$$

The signal passes with one sample of delay, and the noise has zeros at $z=\pm j$, i.e. at $f_s/4=f_o$.

### Step 3 — Noise spectral density

On the unit circle, with $\theta=2\pi f/f_s$, $|1+e^{-j2\theta}|=2|\cos\theta|$, so

$$
N(f)=\frac{\Delta}{\sqrt{6f_s}}\left|1+e^{-j4\pi f/f_s}\right|
=\frac{2\Delta}{\sqrt{6f_s}}\left|\cos\frac{2\pi f}{f_s}\right|
\approx\frac{2\Delta}{\sqrt{6f_s}}\,\frac{2\pi|f-f_o|}{f_s}\quad(\text{near }f_o),
$$

since $2\pi f_o/f_s=\pi/2$ turns $\cos\theta$ into $-\sin(2\pi(f-f_o)/f_s)$.

### Step 4 — In-band noise power

With $u=f-f_o$ running from $-f_B/2$ to $f_B/2$:

$$
n_o^2=\frac{4\Delta^2}{6f_s}\int_{-f_B/2}^{f_B/2}\left(\frac{2\pi u}{f_s}\right)^2du
=\frac{4\Delta^2}{6f_s}\,\frac{4\pi^2}{f_s^2}\,\frac{f_B^3}{12}
=\frac{2\pi^2\Delta^2}{9}\left(\frac{f_B}{f_s}\right)^3 .
$$

Substituting $f_B/f_s=1/(2M)$:

$$
n_o^2=\frac{\pi^2\Delta^2}{36M^3},\qquad n_o=\frac{\pi\Delta}{6M^{3/2}} .
$$

### Step 5 — Bandwidth for 12 bits at 100 MHz

The requirement $n_o\le\Delta/(2^{12}\sqrt{12})$ gives

$$
M^{1.5}\ge\frac{\pi}{6}\,2^{12}\sqrt{12}=7.43\times10^3
\;\Rightarrow\;
M\ge381 ,
$$

$$
f_B=\frac{f_s}{2M}\le\frac{100\ \mathrm{MHz}}{2(380.7)}=131\ \mathrm{kHz}.
$$

A numerical integration of the exact $\cos^2$ density gives the same 131 kHz, centred on $f_o=25$ MHz.
