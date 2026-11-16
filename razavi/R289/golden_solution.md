# Golden Solution - R289

## Reference answer

With λ neglected (as in the drawn model): poles at $\omega_{p1} \approx 2.46\times10^9$ rad/s ($f \approx 392$ MHz) and $\omega_{p2} \approx 3.33\times10^{10}$ rad/s ($f \approx 5.3$ GHz), both in the left half plane; zero at $s = +g_m/C_{GD} \approx +2.59\times10^{11}$ rad/s ($f \approx 41$ GHz), in the right half plane. Low-frequency gain $-g_mR_D = -10.4$.
Including $r_O = 1/(\lambda I_D) = 10\ \mathrm{k\Omega}$ ($R_D\|r_O = 1.67\ \mathrm{k\Omega}$): poles ≈ $2.84\times10^9$ rad/s (453 MHz) and $3.47\times10^{10}$ rad/s (5.5 GHz); same zero; gain −8.6.

Derivation:
- $g_m = \sqrt{2(134\ \mu)(100)(1\ \mathrm{mA})} = 5.18$ mS ($V_{GS} - V_{TH} = 0.386$ V).
- $WLC_{ox} = 96$ fF; $C_{GS} = \tfrac23(96) + 50(0.4) = 84.0$ fF; $C_{GD} = 50(0.4) = 20.0$ fF; $C_{DB} = 50(1.5)(0.56) + 2(51.5)(0.0035) = 42.4$ fF.
- Exact transfer function (λ = 0): $\dfrac{V_{out}}{V_{in}} = \dfrac{(C_{GD}s - g_m)R_D}{R_SR_D\xi s^2 + [R_S(1 + g_mR_D)C_{GD} + R_SC_{GS} + R_D(C_{GD} + C_{DB})]s + 1}$, $\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB} = 6.08\times10^{-27}\ \mathrm{F^2}$.
- Coefficients: $s^2$: $R_SR_D\xi = 1.22\times10^{-20}\ \mathrm{s^2}$; $s$: $2.27\times10^{-10} + 0.84\times10^{-10} + 1.25\times10^{-10} = 4.36\times10^{-10}$ s. Roots: $2.46\times10^9$ and $3.33\times10^{10}$ rad/s.
- Dominant-pole approximations give $\omega_{p1} \approx 1/(4.36\times10^{-10}) = 2.29\times10^9$ rad/s and $\omega_{p2} \approx 3.6\times10^{10}$ rad/s, close to the exact roots. (A pure Miller nodal estimate gives 0.51 GHz for the input pole and 1.24 GHz for the output pole; the latter is far from the true second pole.)

## Grading notes

+2: capacitances computed correctly ($C_{GS}$ ≈ 84 fF, $C_{GD}$ = 20 fF, $C_{DB}$ ≈ 42 fF), two poles within ±15% of either set (≈ 392 MHz and ≈ 5.3 GHz without $r_O$, or ≈ 453 MHz and ≈ 5.5 GHz with $r_O$; dominant-pole approximations accepted), and the zero $+g_m/C_{GD}$ ≈ 41 GHz identified as right-half-plane. +1: poles right, zero value right but its RHP location not stated (or vice versa), or one capacitance slightly off with the method right. 0: only Miller nodal estimates (≈ 0.51 GHz and ≈ 1.28 GHz) given as the poles, or poles right and zero missing. -2 (asserted as fact): left-half-plane zero, zero at $g_m/C_{GS}$, Miller effect omitted so that the dominant pole is several GHz, or only one pole claimed for this circuit.
