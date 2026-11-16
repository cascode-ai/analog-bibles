# Golden Solution - G036

## Reference answer

$I_C \approx 0.11$ mA (about 110 μA): the onset of high-level injection in the base.

- 0.5 Ω-cm $n$-type silicon: $N_D \approx 1.0\times10^{16}\ \mathrm{cm^{-3}}$.
- Fall-off begins when the injected hole density at the emitter edge of the base, $p_n(0) = J_pW_B/(qD_p)$, reaches the majority-carrier density $N_D$: $I_C = qAN_DD_p/W_B$.
- The holes that reach the collector are injected laterally from the emitter sidewall; taking the sidewall as a quarter-cylinder: $A = 3\ \mu\mathrm{m}\times(4\times30\ \mu\mathrm{m})\times\pi/2 = 565\ \mu\mathrm{m}^2 = 5.65\times10^{-6}$ cm².
- $I_C = (1.6\times10^{-19})(5.65\times10^{-6})(10^{16})(10)/(8\times10^{-4}) = 113\ \mu$A — ten times the value for a 5 Ω-cm ($10^{15}$) epi.

## Grading notes

+2: $N_D \approx (0.9$–$1.2)\times10^{16}$, high-level-injection criterion $p_n(0) \approx N_D$ (i.e. $I_C = qAN_DD_p/W_B$), effective area = emitter sidewall (≈ 360–570 μm², with or without the π/2 factor), result in 70–150 μA. +1: correct criterion and doping but the bottom area included (giving ≈ 0.2–0.3 mA) with the choice stated, or a single slip. 0: right method with a doping read off by more than ±50%, or a result without the injection-level reasoning. −2 (asserted as fact): fall-off attributed to something else with an unrelated number, $N_D$ taken as $10^{15}$ (the 5 Ω-cm value) or off by an order of magnitude, or $W_B$ and $D_p$ inverted in the formula.
