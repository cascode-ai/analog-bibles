# Golden Solution - G359

## Reference answer

Noise bandwidth $f_N = \frac{\pi}{2}f_1 \approx 45$ MHz with $f_1 \approx 28.5$ MHz; total output noise ≈ $2.1\times10^{-11}$ V², i.e. ≈ 4.6 µV rms.

- $I_D = 0.465$ mA, $r_d = 55.9\ \Omega$, $R_{eq} = r_d\parallel20\text{ k} = 55.8\ \Omega$.
- Low-frequency density $S_0 = (2qI_D + 4kT/20\text{ k})R_{eq}^2 = 4.65\times10^{-19}$ V²/Hz.
- Single pole: $f_1 = 1/(2\pi R_{eq}C) = 1/(2\pi\cdot55.8\cdot100\text{ pF}) = 28.5$ MHz; for a one-pole response $f_N = \frac{\pi}{2}f_1 = 44.8$ MHz.
- Total: $S_0f_N = 4.65\times10^{-19}\times4.48\times10^7 = 2.09\times10^{-11}$ V² → 4.57 µV rms. Check: shot noise of the diode equals half the thermal noise of $r_d$, so the total ≈ $kT/2C = 2.07\times10^{-11}$ V².

## Grading notes

+2: $f_N$ ≈ 44–46 MHz (with $f_1$ ≈ 28.5 MHz) and total ≈ 4.4–4.7 µV rms. +1: correct $f_1$ but the total computed with $f_1$ instead of $(\pi/2)f_1$ (≈ 3.6 µV), with the noise-bandwidth concept otherwise explained; or a slip <10%. 0: right method with an arithmetic error in $f_1$ or $S_0$. −2 (asserted as fact): pole computed with the 20-kΩ resistor alone (≈ 80 kHz), noise bandwidth claimed equal to infinity or to the 3-dB bandwidth by definition, or the diode modeled with $4kTr_d$ (gives $kT/C$, 6.4 µV) stated as the answer.
