# Golden Solution - R175

## Reference answer

CMRR ≈ 2,200 (≈ 67 dB).
- $M_1$, $M_2$ carry 0.25 mA each, so do the loads: $g_{m3} = \sqrt{2(38.4\ \mu)(20)(0.25\ \mathrm{m})} = 0.620$ mS ($1/g_{m3} = 1.614$ kΩ), $g_{m4} = \sqrt{1.1}\,g_{m3} = 0.650$ mS ($1/g_{m4} = 1.539$ kΩ); load mismatch $\Delta R = 75$ Ω (≈ 4.8%, about half the 10% width mismatch).
- $g_{m1} = 2.59$ mS, $R_{SS} = 20$ kΩ, $1 + 2g_{m1}R_{SS} = 104.5$.
- $A_{DM} = g_{m1}(1/g_{m3} + 1/g_{m4})/2 = 4.08$; $|A_{CM-DM}| = g_{m1}\Delta R/(1 + 2g_{m1}R_{SS}) = 1.86\times10^{-3}$; CMRR ≈ 2,190.

## Grading notes

+2: 2,000–2,400 (≈ 66–67.6 dB), with the load mismatch ≈ 4.8% (from $g_m \propto \sqrt{W}$ at equal currents) and $R_{SS}$ = 20 kΩ. +1: load mismatch taken as 10% (CMRR ≈ 1,050–1,100) with otherwise correct reasoning, or a slip. 0: correct structure, gross numerical error. -2 (asserted as fact): unequal load currents assumed (claiming $M_4$ carries 10% more current), infinite CMRR, or no $(1 + 2g_mR_{SS})$ factor.
