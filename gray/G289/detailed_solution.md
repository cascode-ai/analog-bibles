# Detailed solution - G289

With a frequency-independent $f$, the loop gain is $T(j\omega)=f\,a(j\omega)$: it has the phase of $a$ and a magnitude scaled by $f$. So the open-loop Bode plots fix both answers. Instability begins when $|af|=1$ at the frequency where $\angle a=-180^\circ$; a $60^\circ$ phase margin requires $|af|=1$ where $\angle a=-120^\circ$.

### Step 1 — Open-loop transfer function

With $a_0=200$ and poles at 1, 2 and 4 MHz, and $x$ the frequency in MHz,
$$
a(jx)=\frac{200}{(1+jx)(1+jx/2)(1+jx/4)},
$$
$$
|a|_{\mathrm{dB}}=46.0\ \mathrm{dB}-10\log_{10}\!\left[(1+x^2)\left(1+\frac{x^2}{4}\right)\left(1+\frac{x^2}{16}\right)\right],\qquad
\angle a=-\left(\tan^{-1}x+\tan^{-1}\frac x2+\tan^{-1}\frac x4\right),
$$
where $20\log_{10}200=46.0$ dB.

### Step 2 — Bode plots

The gain asymptotes are flat at 46.0 dB, then break to $-20$ dB/dec at 1 MHz, $-40$ dB/dec at 2 MHz and $-60$ dB/dec at 4 MHz. Each pole contributes $-45^\circ$ at its own frequency and tends to $-90^\circ$, so the phase goes from $0^\circ$ to $-270^\circ$. Exact values from Step 1:

| $f$ (MHz) | 0.1 | 1 | 1.63 | 2 | 3.74 | 4 | 10 | 20 |
|---|---|---|---|---|---|---|---|---|
| $\lvert a\rvert$ (dB) | 46.0 | 41.8 | 37.5 | 35.1 | 25.0 | 23.7 | 3.2 | $-14.2$ |
| $\angle a$ | $-10.0^\circ$ | $-85.6^\circ$ | $-120^\circ$ | $-135^\circ$ | $-180^\circ$ | $-184.4^\circ$ | $-231.2^\circ$ | $-250.1^\circ$ |

For example, at 2 MHz, $|a|=200/\sqrt{5\cdot2\cdot1.25}=56.6$ (35.1 dB) and $\angle a=-(63.4^\circ+45^\circ+26.6^\circ)=-135^\circ$.

![Open-loop gain in dB versus log frequency with asymptotes breaking at 1, 2 and 4 MHz](/q/G289/solution-gain.svg)

![Open-loop phase versus log frequency, passing −120° at 1.63 MHz and −180° at 3.74 MHz](/q/G289/solution-phase.svg)

### Step 3 — Feedback factor that just causes instability

The phase reaches $-180^\circ$ where the imaginary part of the denominator vanishes. Expanding $(1+s)(1+s/2)(1+s/4)=(s^3+7s^2+14s+8)/8$ with $s=jx$, the imaginary part $x(14-x^2)$ is zero at $x=\sqrt{14}$, i.e. $f_{180}=3.74$ MHz. There the real part is $(8-7\cdot14)/8=-11.25$, so
$$
|a(f_{180})|=\frac{200}{11.25}=17.8\quad(25.0\ \mathrm{dB}).
$$
The loop gain reaches unity at $-180^\circ$ when
$$
f=\frac{1}{|a(f_{180})|}=\frac{11.25}{200}=0.056 .
$$
For larger $f$, $|T|>1$ at $-180^\circ$ and the loop is unstable.

### Step 4 — Feedback factor for a $60^\circ$ phase margin

A $60^\circ$ phase margin means the loop-gain crossover must occur where $\angle a=-180^\circ+60^\circ=-120^\circ$. Solving $\tan^{-1}x+\tan^{-1}(x/2)+\tan^{-1}(x/4)=120^\circ$ numerically gives $x=1.634$, i.e. 1.63 MHz, where
$$
|a|=\frac{200}{\sqrt{(1+1.634^2)(1+1.634^2/4)(1+1.634^2/16)}}=74.8\quad(37.5\ \mathrm{dB}).
$$
Setting $|af|=1$ there:
$$
f=\frac1{74.8}=0.0134 .
$$
Thus $f\approx0.056$ just causes instability and $f\approx0.0134$ gives a $60^\circ$ phase margin.
