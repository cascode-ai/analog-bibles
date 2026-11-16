# Golden Solution - R648

## Reference answer

Yes: a multiplier followed by low-pass filtering (averaging) is a phase detector, because its average output, $\overline{V_{out}} = \tfrac12 K_mAB\cos\Delta\phi$, depends only on the phase difference. No, the characteristic is not linear: it is a cosine (periodic in 2π) and is approximately linear only for small departures from quadrature ($\Delta\phi = \pi/2$), where the output crosses zero and the gain magnitude is largest ($K_mAB/2$ per rad).

- Inputs $V_1 = A\cos\omega t$ and $V_2 = B\cos(\omega t + \Delta\phi)$, with the same frequency. The multiplier gives $V_{out} = K_mV_1V_2 = \tfrac12K_mAB[\cos\Delta\phi + \cos(2\omega t + \Delta\phi)]$.
- The $2\omega$ term averages to zero (the loop's low-pass filter removes it). The dc term $\tfrac12K_mAB\cos\Delta\phi$ is a function of Δφ alone, so the circuit detects the phase difference.
- Nonlinearity: the output is maximum ($K_mAB/2$) at Δφ = 0, zero at ±π/2 and minimum at π. The gain $d\overline{V_{out}}/d\Delta\phi = -\tfrac12K_mAB\sin\Delta\phi$ varies with Δφ, and it falls to zero and reverses sign at 0 and π. Near quadrature, $\overline{V_{out}} \approx -\tfrac12K_mAB(\Delta\phi - \pi/2)$; the error is about 4.5% at ±30°.
- The gain is also proportional to the input amplitudes A and B. A hard-switching XOR, by contrast, has gain $V_0/\pi$, independent of the amplitudes. If the two input frequencies differ, the output is a beat at the difference frequency with zero average.

## Grading notes

+2: product-to-sum step showing a dc term proportional to cos Δφ (or sin Δφ if the phases are defined from a sine and a cosine) plus a 2ω term that filtering removes, so the average output depends only on Δφ; and the conclusion that the characteristic is not linear (sinusoidal), with approximately linear operation near quadrature, where the output crosses zero. Noting the amplitude dependence is a plus, not required. +1: correct proof and "nonlinear" conclusion without saying where it is approximately linear, or a missing factor 1/2. 0: correct proof with the linearity question unanswered, or "nonlinear" asserted without deriving the cosine dependence. -2 (asserted as fact): the characteristic claimed linear over the whole range (like the XOR triangle), the phase information claimed to sit in the 2ω component, or an average output claimed independent of Δφ.
