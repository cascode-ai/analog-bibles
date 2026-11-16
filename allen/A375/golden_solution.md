# Golden Solution - A375

## Reference answer

Maximum slope ≈ 36.8 V/µs, occurring at $t = 1/|p| = 100$ ns after the step; the slew rate must exceed ≈ 36.8 V/µs.
- With two equal poles, $v_{out}(t) = A_v(0)V_{in}\left[1-(1+t/\tau)e^{-t/\tau}\right]$, $\tau = 1/|p| = 100$ ns.
- Slope: $dv_{out}/dt = A_v(0)V_{in}\,(t/\tau^2)\,e^{-t/\tau}$, maximum at $t = \tau = 100$ ns (second derivative zero), where it equals $A_v(0)V_{in}\,e^{-1}/\tau$.
- $A_v(0)V_{in} = 10(V_{OH}-V_{OL}) = 10$ V, so the maximum slope is $10\ \mathrm{V}\times10^7\ \mathrm{s^{-1}}\times0.368 = 3.68\times10^7$ V/s = 36.8 V/µs.
- To avoid slewing: $SR > 36.8$ V/µs.
- (Remark: the output limits at its swing once the linear response has risen by 1 V, at $t \approx 53$ ns, before the maximum-slope instant; the largest slope actually reached is then ≈ 31 V/µs. Requiring $SR \ge 36.8$ V/µs is sufficient in any case.)

## Grading notes

+2: maximum slope ≈ 36.8 V/µs (±3 %) at $t = 100$ ns, and the slew-rate requirement $SR > 36.8$ V/µs; stating it as $SR \ge 36.8$ V/µs ("at least 36.8 V/µs") is equally correct, so do not deduct for the form of the inequality. An answer that additionally accounts for output limiting and concludes ≈ 31 V/µs at ≈ 53 ns (with the explanation) is also +2. +1: correct slope but the time missing or wrong by a slip, or the SR requirement not stated. 0: correct method (equal-pole response, maximum at $t = \tau$) with an arithmetic error in the value. −2 (asserted as fact): slope taken at $t = 0$ (the two-pole response starts with zero slope) or treated as single-pole ($A_vV_{in}|p| = 100$ V/µs), maximum placed at $t = \tau\ln 2$, or the factor 10 overdrive ignored.
