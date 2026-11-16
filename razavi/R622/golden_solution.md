# Golden Solution - R622

## Reference answer

Second harmonic: $\alpha_2A^2\sin\theta\,\sin(2\omega t + \theta)$, magnitude $\alpha_2A^2|\sin\theta| \approx \alpha_2A^2|\theta|$.
- Only the quadratic terms give a second harmonic: $\alpha_2(x_1^2 - x_2^2) = \alpha_2A^2[\cos^2\omega t - \cos^2(\omega t+\theta)] = \tfrac{\alpha_2A^2}{2}[\cos2\omega t - \cos(2\omega t + 2\theta)] = \alpha_2A^2\sin\theta\,\sin(2\omega t+\theta)$; the dc parts cancel.
- The cubic terms produce only the fundamental and the third harmonic.
- The result is the same if the second path is driven with the inverted signal $-A\cos(\omega t+\theta)$ (differential drive), because $x_2^2$ is unchanged; with differential drive the fundamental is ≈ $2\alpha_1A$, so HD2 ≈ $\alpha_2A\theta/(2\alpha_1)$: a phase mismatch alone creates even-order distortion in a differential circuit.

## Grading notes

+2: magnitude $\alpha_2A^2|\sin\theta|$ ≈ $\alpha_2A^2\theta$, from the quadratic terms. +1: correct result with a slip in the phase of the harmonic, or only the relative value given correctly. 0: correct method with a factor-of-2 slip (e.g., $\alpha_2A^2\theta/2$). -2 (asserted as fact): zero second harmonic (perfect cancellation), a second harmonic proportional to $\theta^2$ or to $\alpha_3$, or the cubic terms claimed to produce a second harmonic.
