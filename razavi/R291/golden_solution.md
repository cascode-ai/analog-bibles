# Golden Solution - R291

## Reference answer

With channel-length modulation: poles at ≈ $6.6\times10^8$ rad/s ($f \approx 105$ MHz) and ≈ $1.29\times10^{10}$ rad/s ($f \approx 2.05$ GHz); zero at $s = +g_{m1}/C_{GD1} \approx +2.59\times10^{11}$ rad/s (≈ 41 GHz, right half plane). Low-frequency gain $-g_{m1}(r_{O1}\|r_{O2}) \approx -17$.
(If λ is neglected, as in an ideal current-source load, the output resistance is infinite: one pole at the origin and the other at ≈ $1.27\times10^{10}$ rad/s ≈ 2.0 GHz; same zero.)

Derivation:
- $g_{m1} = 5.18$ mS; $r_{O1} = 1/(0.1 \times 1\ \mathrm{mA}) = 10\ \mathrm{k\Omega}$, $r_{O2} = 1/(0.2 \times 1\ \mathrm{mA}) = 5\ \mathrm{k\Omega}$, $R_{out} = 3.33\ \mathrm{k\Omega}$.
- $M_1$: $C_{GS1} = 84$ fF, $C_{GD1} = 20$ fF, $C_{DB1} = 42.4$ fF. $M_2$ ($W = 162.8\ \mu$m): $C_{DB2} = 162.8(1.5)(0.94) + 2(164.3)(0.0032) = 230.6$ fF; $C_{GD2} = 162.8(0.3) = 48.8$ fF, from the output to the ac-grounded gate; $C_{GS2}$ sits between two ac grounds and does not matter.
- Total output capacitance to ground: $C_{out} = C_{DB1} + C_{DB2} + C_{GD2} \approx 322$ fF.
- The CS transfer function with $R_D \to R_{out}$ and $C_{DB} \to C_{out}$: denominator $R_SR_{out}\xi s^2 + [R_S(1 + g_{m1}R_{out})C_{GD1} + R_SC_{GS1} + R_{out}(C_{GD1} + C_{out})]s + 1$ with $\xi = C_{GS1}C_{GD1} + C_{GS1}C_{out} + C_{GD1}C_{out} = 3.51\times10^{-26}\ \mathrm{F^2}$: $1.17\times10^{-19}s^2 + 1.59\times10^{-9}s + 1$, roots $6.6\times10^8$ and $1.29\times10^{10}$ rad/s.
- Zero from the feedforward through $C_{GD1}$: $s_z = +g_{m1}/C_{GD1}$.

## Grading notes

+2: $M_2$'s drain junction and gate–drain capacitances added to the output node (≈ 320 fF total, ±10%), poles within ±15% of ≈ 105 MHz and ≈ 2.05 GHz (with $r_{O1}\|r_{O2}$ ≈ 3.3 kΩ), and the RHP zero $g_{m1}/C_{GD1}$ ≈ 41 GHz. Also +2: the λ = 0 version stated as such (pole at the origin, second pole ≈ 2.0 GHz) with the same capacitances. +1: method right with the PMOS capacitances partly omitted (e.g., only $C_{DB2}$), or zero's RHP location not stated. 0: $M_2$'s capacitances ignored entirely (poles ≈ 0.23 GHz/5.4 GHz class results) or zero missing. -2 (asserted as fact): output resistance taken as $R_D = 2$ kΩ or $1/g_m$, left-half-plane zero, or no Miller/feedforward effect of $C_{GD1}$ at all.
