# Golden Solution - R228

## Reference answer

$I_{out}$ drops by about 27%, from 0.5 mA to ≈ 0.365 mA (−0.135 mA).

- $V_{GS}$ is set by the divider and $V_{TH}$ does not change, so the overdrive stays at 0.273 V and $I_{out} \propto \mu_n$.
- $\mu_n(370)/\mu_n(300) = (370/300)^{-3/2} = 1.2333^{-1.5} = 0.730$.
- $I_{out} = 0.5\ \mathrm{mA} \times 0.730 = 0.365$ mA.

## Grading notes

+2: $I_{out} \approx 0.365$ mA, i.e., a decrease of 27% (±1%), with the reasoning that the overdrive is unchanged and $I_{out} \propto \mu_n$. +1: correct ratio with a small arithmetic slip. 0: correct method with the exponent misapplied in a way the answer flags as uncertain. -2 (asserted as fact): current increasing with temperature, the exponent applied as $T^{+3/2}$ or as $(370/300)^{-1/2}$, or a claim that $I_{out}$ does not change.
