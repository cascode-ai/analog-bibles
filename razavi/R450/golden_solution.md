# Golden Solution - R450

## Reference answer

About 0.42 ns: ≈ 0.36 ns of slewing with $M_2$ off, plus ≈ 0.05 ns while $M_2$ turns on and its current grows to 0.1 mA.

- The 1-V differential input far exceeds $\sqrt2 V_{OD} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)} = \sqrt{2(1\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.273$ V, so $M_1$ takes all of $I_{SS}$ and $M_2$ is off. $M_4$ mirrors 1 mA into the output, which charges the series $C_1$–$C_2$ (0.25 pF): $dV_{out}/dt = 4$ V/ns and node X rises at $dV_X/dt = I_{SS}/C_2 = 2$ V/ns.
- $M_2$ starts conducting when $V_{in} - V_X$ falls to 0.273 V: $t_1 = (1 - 0.273)\ \mathrm{V}/(2\ \mathrm{V/ns}) = 0.363$ ns.
- $I_{D2} = 0.1I_{SS}$ means $I_{D1} - I_{D2} = 0.8I_{SS}$; from $I_{D1} - I_{D2} = \tfrac12\mu_nC_{ox}\frac{W}{L}\Delta V\sqrt{4I_{SS}/(\mu_nC_{ox}W/L) - \Delta V^2}$ this occurs at $\Delta V = V_{in} - V_X = 0.173$ V.
- From 0.273 V to 0.173 V the charging current is $I_{D1} - I_{D2}$ (less than $I_{SS}$): $t_2 = C_2\int_{0.173}^{0.273} d\Delta V/(I_{D1} - I_{D2}) \approx 0.054$ ns (assuming the full $I_{SS}$ throughout would give 0.050 ns).
- Total ≈ 0.42 ns.

## Grading notes

+2: recognizes slewing ($M_2$ off, constant current $I_{SS}$ charging the series capacitance, X rising at $I_{SS}/C_2$ = 2 V/ns), uses the differential-pair characteristic to find the $\Delta V$ (≈ 0.17 V) at which $I_{D2} = 0.1I_{SS}$, and gives 0.40–0.44 ns. +1: stops at the turn-on of $M_2$ (≈ 0.36 ns) and presents that as the answer with otherwise correct slewing analysis, or the right method with a small slip. 0: slewing identified but X's slope wrong by a factor of 2 (e.g., using $I_{SS}/(C_1 + C_2)$ or the output slope for X), giving ≈ 0.2 or ≈ 0.8 ns. -2 (asserted as fact): a linear (small-signal) exponential settling with the time constant used for the 1-V step without considering slewing, or $M_2$ claimed to turn on immediately.
