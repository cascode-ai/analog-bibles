# Golden Solution - G290

## Reference answer

The closed-loop gain at that frequency is about 2.88 times (+9.2 dB) the low-frequency value $1/f$.

At the frequency $\omega_0$ where $|T| = 1$, a 20° phase margin means $T(j\omega_0) = e^{-j160°}$. Then
$A(j\omega_0) = \dfrac{a}{1+T} = \dfrac{1}{f}\,\dfrac{T}{1+T}$, and $|1 + e^{-j160°}| = 2\cos 80° = 0.347$, so $|A(j\omega_0)| = \dfrac{1}{f} \times \dfrac{1}{0.347} = \dfrac{2.88}{f}$.
With a large low-frequency loop gain the low-frequency closed-loop gain is $\approx 1/f$, so the peaking is a factor 2.88, i.e. 9.2 dB.

## Grading notes

+2: factor ≈ 2.9 (±3%) or ≈ 9.2 dB, from $|T/(1+T)|$ with $|T| = 1$ and phase −160°. Writing the ratio as $1/|1+T|$ is equivalent at this frequency (where $|T| = 1$) and is not an error. +1: correct method and expression $1/[2\sin(\text{PM}/2)]$ with an arithmetic slip, or the answer given only in dB or only as a ratio with a minor rounding issue. 0: correct setup but wrong evaluation of $|1+T|$. −2 (asserted as fact): using a phase of −20° (or +20°) for $T$ instead of −160°, giving a peak below 1, or claiming no peaking.
