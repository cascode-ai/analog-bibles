# Detailed solution - A556

Solve the loop of [Fig. 1] for the noise transfer function, evaluate it on the unit circle to get $N(f)$, and integrate $|N(f)|^2$ over the narrow band around $f_o=f_s/4$ using a linear expansion about the noise zero. Then apply the 14-bit criterion.

### Step 1 — Loop equation and NTF

The feedback block $1/(1+z^{-2})$ returns $Y$ to the input summer; the sum passes through $z^{-2}$, and the quantizer adds $Q$:

$$
Y=z^{-2}\left(X+\frac{Y}{1+z^{-2}}\right)+Q .
$$

Collecting $Y$ terms, $1-\dfrac{z^{-2}}{1+z^{-2}}=\dfrac{1}{1+z^{-2}}$, so

$$
\frac{Y}{1+z^{-2}}=z^{-2}X+Q
\;\Rightarrow\;
Y=(1+z^{-2})\left(z^{-2}X+Q\right),\qquad NTF=\frac{Y}{Q}=1+z^{-2}.
$$

The NTF zeros are at $z^2=-1$, i.e. $z=\pm j$, which is $f=f_s/4=f_o$: the noise is notched at the centre of the band, not at dc. (As drawn, the signal path $z^{-2}(1+z^{-2})$ carries the same factor.)

### Step 2 — Noise spectral density

On the unit circle $z^{-2}=e^{-j4\pi f/f_s}$. With $\theta=2\pi f/f_s$, $|1+e^{-j2\theta}|=|e^{-j\theta}(e^{j\theta}+e^{-j\theta})|=2|\cos\theta|$, so

$$
N(f)=\frac{\Delta}{\sqrt{6f_s}}\left|1+e^{-j4\pi f/f_s}\right|
=\frac{2\Delta}{\sqrt{6f_s}}\left|\cos\frac{2\pi f}{f_s}\right| .
$$

### Step 3 — In-band noise power

Write $f=f_o+u$. Since $2\pi f_o/f_s=\pi/2$, $|\cos\theta|=|\sin(2\pi u/f_s)|\approx2\pi|u|/f_s$ for $|u|\le f_B/2\ll f_s$. Then

$$
\begin{aligned}
n_o^2&=\int_{f_1}^{f_2}|N(f)|^2df\approx\frac{4\Delta^2}{6f_s}\int_{-f_B/2}^{f_B/2}\left(\frac{2\pi u}{f_s}\right)^2du
=\frac{4\Delta^2}{6f_s}\,\frac{4\pi^2}{f_s^2}\,\frac{2}{3}\left(\frac{f_B}{2}\right)^3\\
&=\frac{2\pi^2\Delta^2}{9}\left(\frac{f_B}{f_s}\right)^3 .
\end{aligned}
$$

With $f_B/f_s=1/(2M)$:

$$
n_o^2=\frac{\pi^2\Delta^2}{36M^3},\qquad n_o=\frac{\pi\Delta}{6M^{3/2}} .
$$

This equals the in-band noise of a first-order low-pass modulator with the same $M$: the band-pass loop simply moves the single noise zero from dc to $f_s/4$.

### Step 4 — Bandwidth for 14 bits at 10 MHz

The requirement $n_o\le\Delta/(2^{14}\sqrt{12})$ gives

$$
\frac{\pi}{6M^{1.5}}\le\frac{1}{2^{14}\sqrt{12}}
\;\Rightarrow\;
M^{1.5}\ge\frac{\pi}{6}\,2^{14}\sqrt{12}=2.97\times10^4
\;\Rightarrow\;
M\ge959 .
$$

$$
f_B=\frac{f_s}{2M}\le\frac{10\ \mathrm{MHz}}{2(959)}=5.2\ \mathrm{kHz}.
$$

Integrating the exact $\cos^2$ density numerically gives the same 5.21 kHz, because the band spans only $\pm0.0016$ rad around the zero.
