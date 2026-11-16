# Golden Solution - G154

## Reference answer

Both outputs change at the same average rate, 0.2 V/μs ($\tau = RC_I = C_I/(fC_S) = 1\ \mathrm{M\Omega}\times5\ \mathrm{pF} = 5\ \mu$s), but the waveforms differ in shape and in sign:
- Continuous-time circuit [Fig. 2]: $R = 1/(10^6 \times 10^{-12}) = 1$ MΩ feeds the inverting input, so $V_o(t) = -\dfrac{1}{RC_I}\displaystyle\int_0^t V_s\,dt = -(0.2\ \mathrm{V/\mu s})\,t$. This is a smooth linear ramp reaching −4 V at 20 μs.
- Switched-capacitor circuit [Fig. 1]: a staircase of +0.2-V steps, one per clock period, reaching about +4 V at 20 μs. It holds its value between transfers and responds to the input sampled at the end of $\phi_1$ (half-period delay). The switch phasing makes it noninverting, $V_o[n+1] = V_o[n] + (C_S/C_I)V_s[n]$.
- So the magnitudes agree at the clock instants (the staircase follows the ramp to within one step of 0.2 V), as expected for input frequencies far below the clock frequency. The differences are the discrete steps/sampling delay and the opposite polarity. An inverting switch phasing (or swapping which plate goes to the summing node) would reproduce the sign of the RC integrator.

## Grading notes

+2: same time constant / slope magnitude (0.2 V/μs, ±4 V after 20 μs), continuous ramp vs. staircase with 0.2-V steps, and the polarity difference (the RC integrator ramps negative, the switched-capacitor one steps positive). A sign slip confined to an optional side remark (e.g. about a hypothetical inverting phasing) is trivial and does not lower +2. +1: ramp vs. staircase and the equal rate correctly described, but the polarity difference not mentioned (or both said to go positive). 0: only a qualitative "they are equivalent at low frequency" without numbers or shape comparison. -2 (asserted as fact): different time constants (e.g. $R = fC_S$ or τ = 0.2 μs), the RC integrator saturating or reaching a final value of 1 V, or the switched-capacitor output said to ramp smoothly with no steps while the ideal-op-amp, zero-rise-time assumption is stated.
