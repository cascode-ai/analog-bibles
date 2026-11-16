# Golden Solution - G303

## Reference answer

Instability for $f \approx 0.053$ ($T_0 \approx 2120$), the complex poles crossing the $j\omega$ axis at ±$j$899 kHz; the Nyquist check gives the same value.

Root locus (coordinates as $s/2\pi$; poles of $T$ at −2 kHz, −200 kHz, −4 MHz):
- Real-axis segments: between −2 kHz and −200 kHz, and to the left of −4 MHz.
- Break-away between the first two poles at ≈ −99.7 kHz (rule: sum of reciprocal distances = 0), reached at $T_0 = 23.9$ ($f = 6.0 \times 10^{-4}$); the pair then moves roughly vertically (calibration: $f = 10^{-3}$: $-98.9 \pm j81$ kHz; $f = 0.01$: $-80 \pm j390$ kHz) and bends toward the right half-plane as the 4-MHz pole's influence grows.
- Asymptotes ±60°, 180° from the centroid $(-0.002 - 0.2 - 4)/3 = -1.40$ MHz (far from the region of interest, so the asymptote estimate of the crossing is poor).
- The third branch moves left from −4 MHz to −∞ (−4.2 MHz at the crossing).
- At $f = 1$ ($T_0 = 40{,}000$): $-5.90$ MHz and $+0.85 \pm j3.18$ MHz (unstable).

Instability (Routh, $s$ normalized to $2\pi \times 2$ kHz, poles −1, −100, −2000): $s^3 + 2101s^2 + 202{,}100s + 2 \times 10^5(1+T_0) = 0$; marginal when $2101 \times 202{,}100 = 2 \times 10^5(1+T_0)$ → $T_0 = 2122$, $f = 2122/40{,}000 = 0.053$, $\omega = \sqrt{202{,}100}$ → 899 kHz.

Nyquist check: the phase of $T(j\omega)$ is −180° at 899 kHz ($\arctan 449.6 + \arctan 4.50 + \arctan 0.225 = 180°$), where $|T|/T_0 = 1/(449.6 \times 4.61 \times 1.025) = 1/2122$. The plot does not encircle −1 only if $T_0 < 2122$, i.e. $f < 0.053$, in agreement with the root locus.

## Grading notes

+2: locus sketch with the break-away near −100 kHz, complex branches heading into the right half-plane and the third branch to −∞; $f$ ≈ 0.053 (accept 0.045–0.06) and a Nyquist check giving the −180° frequency ≈ 0.9 MHz with the same critical $T_0$ ≈ 2100. +1: correct $f$ and Nyquist check with a sketchy locus, or a correct locus with the critical $f$ from a rough estimate within ±30% and the Nyquist check confirming the right value. 0: only one of locus / critical value / check correct. −2 (asserted as fact): a critical $f$ taken from the asymptote crossing (≈ 0.4) without correction, a claim that the amplifier is stable up to $f = 1$, or $f$ confused with $T_0$.
