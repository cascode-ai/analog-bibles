# Golden Solution - R509

## Reference answer

The closed-loop poles are the roots of $s^2/(\omega_{p1}\omega_{p2}) + (1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z)s + 1 + A_0 = 0$. With $A = A_0/(1 + A_0) = 0.998$:
- $\omega_z = 0.9\,\omega_{p2}$ (3.0×10⁹ rad/s): poles 1.62×10⁹ and 3.72×10⁹ rad/s, $V_{out}(t) = AV_0\left[1 - 0.814\,e^{-t/0.617\,\mathrm{ns}} - 0.186\,e^{-t/0.269\,\mathrm{ns}}\right]$.
- $\omega_z = 1.1\,\omega_{p2}$ (3.66×10⁹ rad/s): poles 2.09×10⁹ and 2.89×10⁹ rad/s, $V_{out}(t) = AV_0\left[1 - 1.550\,e^{-t/0.479\,\mathrm{ns}} + 0.550\,e^{-t/0.346\,\mathrm{ns}}\right]$.
- Both responses are monotonic (real poles, no overshoot) and start at 0. The residues follow from $K_A = (1 - \omega_{pA}/\omega_z)/(1 - \omega_{pA}/\omega_{pB})$ and $K_B = 1 - K_A$.
- Key point: here $\omega_{p2}$ ≈ 1.8 $(1 + A_0)\omega_{p1}$, so the doublet lies above the closed-loop bandwidth and the condition $\omega_{p2} \ll (1 + A_0)\omega_{p1}$ of the doublet approximation does not hold. The mismatch term decays as fast as or faster than the main exponential, and there is no slow-settling tail. The mismatch mainly changes the main time constant by ≈ ±12% (0.62 or 0.48 ns vs 0.55 ns), so the 0.1% settling time is ≈ 4.1 ns or 3.5 ns instead of 3.8 ns.
- (Applying the doublet formula mechanically gives a ≈ 10% term decaying with 1/$\omega_{p2}$ ≈ 0.3 ns: also a fast term, the same qualitative conclusion.)

## Grading notes

+2: closed-loop poles from the quadratic for at least one mismatch direction, with time constants within ±10% and coefficients within ±0.05 of the reference; or a sound approximate analysis concluding that, because $\omega_{p2} > (1 + A_0)\omega_{p1}$, the mismatch adds only a fast (≈ 0.3 ns) term of order 10–20% and no slow tail. A typo in an intermediate expression that the answer does not carry forward (e.g., a closed-loop numerator written without its constant term and then used correctly) is trivial. +1: doublet formula applied mechanically (a ≈ 10% term decaying at $\omega_{p2}$) without noticing that its assumption fails, but no false claim of slow settling. 0: right method with slips in both poles. -2 (asserted as fact): a long slow-settling tail with a time constant much larger than 0.55 ns, overshoot or ringing, or a steady-state error of 10%.
