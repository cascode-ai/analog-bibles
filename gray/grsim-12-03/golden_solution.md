# Golden Solution - grsim-12-03

## Reference answer

(a) Expected result: with perfect matching, $V_{od}(V_{id})$ is an odd function, $V_{od}(-V_{id}) = -V_{od}(V_{id})$, passing through the origin. A differential sinusoidal input gives a $V_{od}$ spectrum with only odd harmonics; the 2nd harmonic is at the numerical-noise floor. The single-ended outputs $V_{o1}$, $V_{o2}$ do contain identical even harmonics, which cancel in $V_{od}$.
- Reason: swapping $V_{s1}$ and $V_{s2}$ in a symmetric circuit swaps $V_{o1}$ and $V_{o2}$, so reversing $V_{id}$ reverses $V_{od}$.
- Open-loop gain is about 7000 (hand: $|a_{dm0}| = g_{m1}(r_{o2}\|r_{o4})\,g_{m6}(r_{o6}\|r_{o7}) \approx 137 \times 53 \approx 7200$). So the open-loop sweep must cover only about ±0.3 mV to stay out of saturation, or the op amp must be placed in a feedback loop.

(b) Expected result: the symmetry is broken.
- An input offset of about $(|V_{ov1}|/2)(\Delta W/W) = (0.2/2)(0.01) \approx 1$ mV appears. Since 1 mV times the gain of ≈ 7000 exceeds the output range, the open-loop output saturates at $V_{id} = 0$; the sweep must be centred on the offset, or the op amp used in feedback.
- The characteristic is no longer odd about its zero crossing, and a 2nd harmonic appears in $V_{od}$, proportional to the mismatch.
- For the input pair alone (square law, $\beta_{1,2} = \beta(1 \pm \delta)$, $\delta = 0.005$, $|V_{ov}| = 0.2$ V, tail 200 μA): $\Delta I_d = a_0 + a_1v + a_2v^2 + a_3v^3$ with $a_2/a_1 \approx \delta/(2V_{ov}) = 0.0125\ \text{V}^{-1}$ in magnitude (zero when matched) and $a_3/a_1 = -1/(8V_{ov}^2) \approx -3.1\ \text{V}^{-2}$. So $HD_2 \approx \delta A/(4V_{ov})$ and $HD_3 \approx A^2/(32V_{ov}^2)$ for input amplitude $A$; both are small in absolute terms but $HD_2$ is no longer zero.

## Grading notes

(a) A correct simulation shows an odd $V_{od}(V_{id})$ characteristic (symmetric about the origin) or a $V_{od}$ spectrum with negligible even harmonics (2nd harmonic at least 60 dB below the 3rd, or at the numerical floor), while $V_{o1}$ alone shows a 2nd harmonic. (b) A correct simulation shows an input offset of order 1 mV (0.5–2 mV) and a clearly nonzero 2nd harmonic in $V_{od}$ (or a characteristic that is not odd about its zero crossing), which grows with the mismatch. Credit split equally between (a) and (b). Claims of even-order distortion in $V_{od}$ for the matched case, or of no even-order terms with mismatch, are wrong.
