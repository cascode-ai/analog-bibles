# Detailed solution - A040

Thermal noise and 1/f noise are uncorrelated, so their mean-square spectral densities add. The thermal part is flat; the 1/f part, in mean-square terms, falls as $1/f$ and by definition equals the thermal part at the corner frequency. Build $e_n^2(f)$ from these two facts, take the square root, and plot on log–log axes, where both pieces are straight lines.

### Step 1 — Spectral density model

Let $e_{th}=100\ \mathrm{nV/\sqrt{Hz}}$ and $f_c=10$ kHz. The 1/f mean-square density is $K_f/f$, and setting it equal to $e_{th}^2$ at $f_c$ gives $K_f=e_{th}^2f_c$. Adding the two:

$$
e_n^2(f)=e_{th}^2\left(1+\frac{f_c}{f}\right),\qquad
e_n(f)=100\ \mathrm{nV/\sqrt{Hz}}\cdot\sqrt{1+\frac{10^4\ \mathrm{Hz}}{f}} .
$$

### Step 2 — Asymptotes

- For $f\gg f_c$: $e_n\to100\ \mathrm{nV/\sqrt{Hz}}$, a horizontal line.
- For $f\ll f_c$: $e_n\approx e_{th}\sqrt{f_c/f}\propto f^{-1/2}$, a line of slope $-1/2$ decade per decade, i.e. $-10$ dB/decade.

The two asymptotes cross at $f_c=10$ kHz at 100 nV/√Hz. At the corner itself the actual curve is $\sqrt2$ higher.

### Step 3 — Representative values

For example, at $f=1$ kHz,

$$
e_n=100\ \mathrm{nV/\sqrt{Hz}}\cdot\sqrt{1+10}=332\ \mathrm{nV/\sqrt{Hz}} .
$$

| $f$ | 1 Hz | 10 Hz | 100 Hz | 1 kHz | 10 kHz | 100 kHz | ≥ 1 MHz |
|---|---|---|---|---|---|---|---|
| $e_n$ | 10.0 µV/√Hz | 3.16 µV/√Hz | 1.00 µV/√Hz | 332 nV/√Hz | 141 nV/√Hz | 105 nV/√Hz | → 100 nV/√Hz |
| $e_n^2$ (V²/Hz) | $10^{-10}$ | $10^{-11}$ | $10^{-12}$ | $1.1\times10^{-13}$ | $2\times10^{-14}$ | $1.1\times10^{-14}$ | $10^{-14}$ |

### Step 4 — Plot

![Noise voltage spectral density on log–log axes: a −1/2-slope 1/f region below 10 kHz merging into a flat 100 nV per root-hertz thermal floor](/q/A040/solution-curves.svg)

The curve rises as $1/\sqrt f$ below about 10 kHz and flattens to the 100 nV/√Hz thermal floor above it. Plotted as mean-square density instead, the low-frequency slope would be $-1$ decade per decade, with the floor at $10^{-14}\ \mathrm{V^2/Hz}$.
