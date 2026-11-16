# Golden Solution - R389

## Reference answer

About 12 stages (13 is practically identical), each with a closed-loop gain of $500^{1/12} \approx 1.68$ (1.61 for 13 stages) and a bandwidth of 1 GHz/1.68 ≈ 596 MHz, giving an overall bandwidth of ≈ 145 MHz.

- Each feedback stage has gain $a = A_0/(1+\beta A_0)$ and bandwidth $(1+\beta A_0)\cdot 10$ MHz, so $a\,f_s = 1$ GHz (constant gain–bandwidth product); $a \le 100$.
- $n$ identical single-pole stages: $|H| = a^n/[1 + (f/f_s)^2]^{n/2}$ → $f_{3dB} = f_s\sqrt{2^{1/n} - 1}$.
- With $a^n = 500$: $f_{3dB}(n) = (1\ \mathrm{GHz})\,500^{-1/n}\sqrt{2^{1/n} - 1}$. Values: n = 2: 28.8 MHz; 3: 64.2; 4: 92.0; 6: 124; 8: 138; 10: 143.9; 11: 145.0; 12: 145.3; 13: 145.1; 14: 144.5 MHz.
- Large-n estimate: $2^{1/n} - 1 \approx \ln 2/n$; maximizing $a^{-1}/\sqrt{n}$ with $\ln a = \ln 500/n$ gives $\ln a = 1/2$, i.e. $a \approx \sqrt{e} \approx 1.65$ and $n \approx 2\ln 500 \approx 12.4$.
- The optimum is flat: 8 stages already reach ≈ 95% of the maximum bandwidth with fewer stages.

## Grading notes

+2: n ≈ 12 (12 or 13) with a per-stage gain ≈ 1.6–1.7, based on the cascade shrinkage factor $\sqrt{2^{1/n}-1}$ and the constant gain–bandwidth product of each feedback stage; the overall bandwidth, if given, ≈ 145 MHz (±5%). +1: correct method with n between 10 and 15 from an approximation, or the right n with incomplete justification. 0: correct cascade bandwidth formula but no optimization, or a wrong optimum offered tentatively. -2 (asserted as fact): a single stage with gain 500 (impossible with an open-loop gain of 100), two stages of √500 ≈ 22.4 claimed optimal, the cascade bandwidth taken equal to one stage's bandwidth, or "more stages are always better" without a maximum.
