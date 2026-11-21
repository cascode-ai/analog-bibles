# Detailed solution - G303

The closed-loop poles are the roots of $1+T(s)=0$ with $T=f\,a(s)$. Sketch the root locus from the standard rules and a few computed roots, find the exact $j\omega$-axis crossing with the Routh condition, and confirm it with the Nyquist criterion: the loop becomes unstable when $|T|=1$ at the frequency where $\angle T=-180^\circ$.

### Step 1 — Characteristic equation

Normalize $s$ to $2\pi\times2$ kHz, so the poles are at $-1$, $-100$ and $-2000$. Then
$$
a(s)=\frac{40{,}000}{(1+s)(1+s/100)(1+s/2000)},
$$
and with $T_0=a_0f=40{,}000f$,
$$
(s+1)(s+100)(s+2000)+2\times10^5T_0=s^3+2101s^2+202{,}100s+2\times10^5(1+T_0)=0 .
$$
As $f$ goes from 0 to 1, $T_0$ goes from 0 to 40,000.

### Step 2 — Root-locus construction

- **Real-axis segments:** between $-2$ kHz and $-200$ kHz, and to the left of $-4$ MHz.
- **Break-away point:** the branches from $-2$ kHz and $-200$ kHz meet where $\sum_i 1/(\sigma+p_i)=0$, at $\sigma\approx-99.7$ kHz; the gain there is $T_0=23.9$ ($f=6.0\times10^{-4}$). The pair then rises almost vertically, because the 4-MHz pole is far away.
- **Asymptotes:** $\pm60^\circ$ and $180^\circ$ from $(-0.002-0.2-4)/3=-1.40$ MHz. This centroid is far from the region where the pair crosses the $j\omega$ axis, so the asymptotes alone estimate the crossing poorly.
- **Third branch:** from $-4$ MHz to $-\infty$ along the real axis.

Calibration points (coordinates $s/2\pi$):

| $f$ | $T_0$ | Real root | Complex pair |
|---|---|---|---|
| $10^{-3}$ | 40 | $-4.004$ MHz | $-98.9\pm j81$ kHz |
| 0.01 | 400 | $-4.04$ MHz | $-80\pm j390$ kHz |
| 0.053 | 2122 | $-4.20$ MHz | $\pm j899$ kHz |
| 1 | 40,000 | $-5.90$ MHz | $+0.85\pm j3.18$ MHz |

![Root locus in the upper half-plane: the pair from the two low-frequency poles rises, crosses the jω axis at j899 kHz for f = 0.053 and reaches 0.85 + j3.18 MHz at f = 1; the third branch runs from −4 MHz to −∞](/q/G303/solution-root-locus.svg)

![Zoom near the origin: the branches from −2 kHz and −200 kHz meet at −99.7 kHz and rise almost vertically](/q/G303/solution-root-locus-zoom.svg)

### Step 3 — Critical feedback factor

For a cubic $s^3+b_2s^2+b_1s+b_0$, roots on the $j\omega$ axis occur when $b_2b_1=b_0$ (Routh array row $s^1$ vanishes), at $\omega^2=b_1$:
$$
2101\times202{,}100=2\times10^5(1+T_0)\ \Rightarrow\ T_0=2122,\qquad f=\frac{2122}{40{,}000}=0.053,
$$
$$
\omega=\sqrt{202{,}100}=449.6\ \Rightarrow\ 449.6\times2\ \mathrm{kHz}=899\ \mathrm{kHz}.
$$
For $f>0.053$ the complex pair is in the right half-plane.

### Step 4 — Nyquist check

The phase of $T(j\omega)$ is $-180^\circ$ at 899 kHz:
$$
\tan^{-1}449.6+\tan^{-1}4.50+\tan^{-1}0.225=89.9^\circ+77.5^\circ+12.7^\circ=180^\circ ,
$$
where the magnitude is
$$
\frac{|T|}{T_0}=\frac{1}{\sqrt{1+449.6^2}\sqrt{1+4.50^2}\sqrt{1+0.225^2}}=\frac{1}{449.6\times4.61\times1.025}=\frac{1}{2122}.
$$
The open-loop poles are all in the left half-plane, so the closed loop is stable if and only if the Nyquist plot does not encircle $-1$, i.e. if its negative-real-axis crossing $-T_0/2122$ lies to the right of $-1$. This requires $T_0<2122$, i.e. $f<0.053$, in agreement with the root locus. The amplifier becomes unstable for $f\approx0.053$.
