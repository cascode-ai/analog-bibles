# Golden Solution - A373

## Reference answer

$V_{in} \gtrsim 100$ mV.
- The single-pole step response is $v_{out}(t) = A_v(0)V_{in}(1 - e^{-\omega_c t})$, whose slope is largest at $t = 0$: $A_v(0)V_{in}\,\omega_c$.
- Slewing occurs when this exceeds the slew rate: $V_{in} > \dfrac{SR}{A_v(0)\,\omega_c} = \dfrac{10^6\ \mathrm{V/s}}{10^4\times10^3\ \mathrm{s^{-1}}} = 0.1$ V.
- If instead the slope is required to exceed SR still at the moment the output has moved half its swing (0.5 V), $\omega_c(A_vV_{in} - 0.5\ \mathrm{V}) > SR$ gives $V_{in} > 100.05$ mV — practically the same.

## Grading notes

+2: threshold ≈ 100 mV (anything 100–100.1 mV) from comparing the linear-response slope $A_vV_{in}\omega_c$ with SR. +1: correct criterion with a small arithmetic slip, or the right value with the criterion only sketched. 0: correct method but a slip that changes the value by an order of magnitude. −2 (asserted as fact): criterion based on the propagation-delay formulas giving e.g. 10 mV, using $SR\cdot\tau$ without the gain, or claiming the comparator never slews.
