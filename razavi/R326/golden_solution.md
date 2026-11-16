# Golden Solution - R326

## Reference answer

The cascade has $H(s) = \dfrac{A_0^N}{(1 + s/\omega_p)^N}$, so $|H(j\omega)| = \dfrac{A_0^N}{[1 + (\omega/\omega_p)^2]^{N/2}}$.
- The −3-dB frequency is defined by $|H(j\omega_{-3dB})| = A_0^N/\sqrt2$: $[1 + (\omega_{-3dB}/\omega_p)^2]^{N/2} = 2^{1/2}$.
- Raise to the power $2/N$: $1 + (\omega_{-3dB}/\omega_p)^2 = 2^{1/N}$, hence $\omega_{-3dB} = \omega_p\sqrt{2^{1/N} - 1}$.
- Examples: N = 1 gives $\omega_p$; N = 2 gives $0.644\,\omega_p$; N = 3 gives $0.51\,\omega_p$; for large N, $\omega_{-3dB} \approx \omega_p\sqrt{\ln 2/N} \approx 0.83\,\omega_p/\sqrt N$.

## Grading notes

+2: product of N identical one-pole responses, magnitude set to $1/\sqrt2$ of the dc value, and correct algebra to $\omega_p\sqrt{2^{1/N} - 1}$. +1: correct with a minor gap (e.g., the $2/N$ power step not shown) or a slip corrected later. 0: correct setup but the algebra not completed. -2 (asserted as fact): bandwidth claimed to be $\omega_p/N$ or $\omega_p/\sqrt N$ exactly, phase used instead of magnitude, or the magnitude condition set to 1/2 of the dc gain.
