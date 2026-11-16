# Golden Solution - R625

## Reference answer

About 0.5 mV.
- After cancellation the overall offset is $V_{OS}/(1+A_v) \approx V_{OS}/A_v$ (with $C_{in}$ and charge injection neglected).
- Doubling W of the input pair at constant current: the threshold mismatch $\Delta V_{TH} \propto 1/\sqrt{WL}$ falls by √2, and the overdrive (which scales the load and W/L mismatch terms) also falls by √2, so the amplifier's own offset $V_{OS}$ drops by √2.
- The gain $A_v = g_m\times(\text{load})$ rises by √2 since $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} \propto \sqrt W$.
- Overall: $1\ \mathrm{mV}/(\sqrt2\cdot\sqrt2) = 0.5$ mV (for large $A_v$).

## Grading notes

+2: ≈ 0.5 mV with both effects: amplifier offset ÷√2 (larger area, lower overdrive) and gain ×√2 ($g_m \propto \sqrt W$), applied to the residual $V_{OS}/A_v$. +1: 0.5 mV with one of the two effects justified only loosely. 0: only one effect considered, giving ≈ 0.71 mV, with sound reasoning otherwise. -2 (asserted as fact): offset unchanged at 1 mV (claiming cancellation makes it independent of the amplifier), a larger offset, or 0.25 mV from gain ∝ W asserted for square-law devices.
