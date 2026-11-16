# Golden Solution - G010

## Reference answer

$g_m = 7.69$ mA/V, $r_\pi = 13$ kΩ, $r_o = 130$ kΩ, $r_\mu = 65$ MΩ, $C_\pi = 0.155$ pF ($C_b = 0.115$ pF + $C_{je} = 40$ fF), $C_\mu \approx 3.9$ fF, $C_{cs} \approx 7.0$ fF, $r_b = 200\ \Omega$, $r_c = 100\ \Omega$, $r_{ex} = 4\ \Omega$.

Circuit: external base B – $r_b$ – internal base B′; $r_\pi \parallel C_\pi$ from B′ to the internal emitter E′ (the voltage across them is $v_1$); $r_{ex}$ from E′ to the emitter terminal E; $r_\mu \parallel C_\mu$ from B′ to the internal collector C′; current source $g_mv_1$ and $r_o$ from C′ to E′; $r_c$ from C′ to the collector terminal C; $C_{cs}$ from C′ to the substrate (ac ground).

- $g_m = I_C/V_T = 0.2/26 = 7.69$ mA/V; $r_\pi = \beta_0/g_m = 13$ kΩ.
- $r_o = 1/(\eta g_m) = V_A/I_C$ with $V_A = V_T/\eta = 26$ V: 130 kΩ; $r_\mu = 5\beta_0r_o = 65$ MΩ.
- $C_b = \tau_Fg_m = 15\ \mathrm{ps}\times7.69\ \mathrm{mA/V} = 0.115$ pF; $C_\pi = C_b + 2C_{je0} = 0.155$ pF.
- $C_\mu = 10/\sqrt{1+3/0.55} = 10/2.54 = 3.9$ fF; $C_{cs} = 20/\sqrt{1+4/0.55} = 20/2.88 = 7.0$ fF.

## Grading notes

+2: correct topology and all element values within ±5% ($g_m$, $r_\pi$, $r_o$, $r_\mu$, $C_\pi$, $C_\mu$, $C_{cs}$, plus the given $r_b$, $r_c$, $r_{ex}$). +1: correct topology with one value wrong through a slip, or one parasitic element omitted. 0: topology right but two or three values wrong (e.g. $r_o$ from misreading η as $1/V_A$, or $C_\mu$, $C_{cs}$ left at their zero-bias values). -2 (asserted as fact): wrong topology (e.g. $C_\mu$/$r_\mu$ to the emitter, $r_b$ in the emitter lead, $C_{cs}$ across collector–emitter), or several values off by formula errors ($r_\pi = g_m/\beta_0$, $C_b = \tau_F/g_m$, $r_o = \eta/g_m$). Drawing $C_{cs}$ from the external collector terminal C (outside $r_c$) to the substrate instead of from C′ is a minor modelling variant, not a wrong topology (the collector–substrate junction is distributed along the buried layer, and lumping it at C or C′ are both approximations; here $r_cC_{cs} \approx 0.7$ ps): +1 if everything else is right.
