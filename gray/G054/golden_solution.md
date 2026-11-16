# Golden Solution - G054

## Reference answer

$R_i = r_\pi \approx 20.8\ \mathrm{k\Omega}$, $G_m = g_m \approx 9.62$ mA/V, $R_o = R_C \| r_o \approx 19.3\ \mathrm{k\Omega}$.

- $g_m = I_C/V_T = 250\ \mu\mathrm{A}/26\ \mathrm{mV} = 9.62$ mA/V.
- $r_\pi = \beta_0/g_m = 200/(9.62\ \mathrm{mA/V}) = 20.8\ \mathrm{k\Omega}$; with $r_b = 0$ the input resistance is $r_\pi$.
- Short-circuit transconductance: with the output shorted, $i_o = g_m v_i$, so $G_m = g_m = 9.62$ mA/V.
- $r_o = V_A/I_C = 130\ \mathrm{V}/250\ \mu\mathrm{A} = 520\ \mathrm{k\Omega}$; output resistance $R_o = R_C \| r_o = 20\ \mathrm{k\Omega} \| 520\ \mathrm{k\Omega} = 19.26\ \mathrm{k\Omega}$.

## Grading notes

+2: all three values within ±3%: $R_i \approx 20.8$ kΩ, $G_m \approx 9.62$ mA/V, $R_o \approx 19.3$ kΩ. +1: $R_o$ given as $R_C = 20$ kΩ with $r_o$ explicitly neglected, rest correct; or one arithmetic slip. 0: two of the three quantities correct and the third wrong. −2 (asserted as fact): wrong formulas such as $r_\pi = g_m/\beta_0$ or $r_\pi = V_T/I_C$ (gives 104 Ω), $R_o = r_o$ alone (520 kΩ, ignoring $R_C$), or $G_m$ off by a factor $\beta_0$.
