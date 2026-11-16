# Golden Solution - R656

## Reference answer

The response is strongly underdamped: $\omega_n = 2\pi(10\ \mathrm{MHz}) = 6.28\times10^7$ rad/s and ζ = 0.05. For an input frequency step Δω (the output phase responds identically to an input phase step):
$\Delta\omega_{out}(t) = \Delta\omega\left[1 - \dfrac{1}{\sqrt{1 - \zeta^2}}e^{-\zeta\omega_nt}\sin\left(\omega_n\sqrt{1 - \zeta^2}\,t + \theta\right)\right]u(t)$, with $\theta = \cos^{-1}\zeta \approx 87.1^\circ$,
i.e., $\Delta\omega_{out}(t) \approx \Delta\omega\left[1 - 1.001\,e^{-t/318\ \mathrm{ns}}\cos(2\pi\cdot 9.99\ \mathrm{MHz}\cdot t - 2.9^\circ)\right]$.
- Decay time constant $1/(\zeta\omega_n) = 2/\omega_{LPF} = 318$ ns.
- Ringing at $\omega_n\sqrt{1 - \zeta^2} \approx 2\pi \times 9.99$ MHz (period ≈ 100 ns). The first peak is at ≈ 50 ns, with ≈ 85% overshoot.
- About 15 ringing cycles before settling: within 5% after ≈ 0.95 µs, within 1% after ≈ 1.46 µs.

Derivation:
- $K_{VCO} = 2\pi\times10^8$ rad/s/V, so $K_{PD}K_{VCO} = 2\pi\times10^8\ \mathrm{s^{-1}}$.
- The closed loop is $H(s) = \omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$.
- $\omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}} = \sqrt{(2\pi\cdot10^6)(2\pi\cdot10^8)} = 2\pi\times10^7$ rad/s.
- $\zeta = \tfrac12\sqrt{\omega_{LPF}/(K_{PD}K_{VCO})} = \tfrac12\sqrt{0.01} = 0.05$.
- Overshoot $e^{-\pi\zeta/\sqrt{1 - \zeta^2}} = 0.854$.
- The phase margin is only ≈ 5.7°. Reaching ζ ≥ 0.7 would need a much larger $\omega_{LPF}$ or a much smaller $K_{PD}K_{VCO}$.

## Grading notes

+2: $\omega_n \approx 2\pi\times10$ MHz (6.3 × 10⁷ rad/s) and ζ ≈ 0.05 (±5%), with an underdamped second-order step response that has a decay time constant ≈ 0.32 µs and ringing near 10 MHz, given as the explicit formula or an equivalent description (overshoot ≈ 85%). A frequency-step or a phase-step input is equally fine. +1: correct $\omega_n$, ζ and "severely underdamped", with the time response only qualitative (no time constant or ringing frequency). 0: $K_{VCO}$ used as 10⁸ rad/s/V (2π dropped), giving ζ ≈ 0.125 and $\omega_n \approx 2.5\times10^7$ rad/s, with an otherwise correct method; or correct numbers with a garbled response formula. -2 (asserted as fact): an overdamped, critically damped, or first-order exponential response; or ζ from an inverted formula (e.g., $\tfrac12\sqrt{K_{PD}K_{VCO}/\omega_{LPF}} = 5$).
