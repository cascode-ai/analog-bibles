# Golden Solution - A040

## Reference answer

On log–log axes: flat at 100 nV/√Hz above about 10 kHz, and rising as $1/\sqrt{f}$ (slope −1/2 decade per decade, −10 dB/decade) below the corner.

- The 1/f noise power density equals the thermal density at $f_c = 10$ kHz, so $e_n^2(f) = (100\ \mathrm{nV}/\sqrt{\mathrm{Hz}})^2\,(1 + f_c/f)$, i.e. $e_n(f) = 100\ \mathrm{nV}/\sqrt{\mathrm{Hz}}\cdot\sqrt{1 + 10^4/f}$.
- Values: 10 µV/√Hz at 1 Hz, 3.16 µV/√Hz at 10 Hz, 1.0 µV/√Hz at 100 Hz, ≈ 330 nV/√Hz at 1 kHz, ≈ 141 nV/√Hz at 10 kHz (the asymptotes cross at 100 nV/√Hz there), ≈ 105 nV/√Hz at 100 kHz, → 100 nV/√Hz at higher frequencies.
- Equivalently, as mean-square density: $10^{-14}\ \mathrm{V^2/Hz}$ flat above 10 kHz, rising as $1/f$ (one decade per decade) below it: $10^{-13}$ at 1 kHz, $10^{-10}\ \mathrm{V^2/Hz}$ at 1 Hz.

## Grading notes

+2: correct shape (flat white region at 100 nV/√Hz, 1/f region below 10 kHz) with the correct slope for the quantity plotted (−1/2 decade/decade for V/√Hz, −1 decade/decade for V²/Hz) and the corner at 10 kHz; a few labelled values or the 3-dB rise at the corner are pluses. +1: correct shape and corner with the slope not quantified, or one value inconsistent. 0: only a qualitative description ("1/f at low frequency, flat at high"). −2 (asserted as fact): the 1/f region placed above the corner, a slope of −1 decade/decade applied to the V/√Hz density, or the noise falling to zero above the corner.
