# Golden Solution - grsim-07-10

## Reference answer

$g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF.

1-kΩ load: low-frequency gain $g_mR_L/(1 + g_mR_L) = 0.659$ (−3.6 dB). $v_o/v_i = 0.659(1 + sC_{gs}/g_m)/(1 + as + bs^2)$ with $a = [R_L C_{gs} + R_S(C_{gs}+C_{gd}) + R_Sg_mR_LC_{gd}]/(1 + g_mR_L) = 0.42$ ns and $b = R_SR_LC_{gs}C_{gd}/(1 + g_mR_L) = 3.6\times10^{-21}\ \mathrm{s^2}$: poles at 387 MHz and 18.4 GHz, zero at $g_m/C_{gs}$ = 4.13 GHz. Magnitude flat at −3.6 dB to ≈ 30 MHz, −3 dB point ≈ 390 MHz, ≈ −12 dB at 1 GHz, slope reduced by the zero, ≈ −27 dB at 20 GHz (falling toward zero because $C_{gd}$ shunts the gate). Phase: −13° at 100 MHz, ≈ −58° at 1 GHz, recovering to ≈ −49° near 10 GHz, then ≈ −58° at 20 GHz. Step: rises in ≈ 0.9 ns (10–90%) to 0.66 mV, no overshoot (real poles).

400-pF load (no resistive load): gain 1 (0 dB) at low frequency; with $R_L \to \infty$, $a = [(C_{gs} + C_L) + R_Sg_mC_{gd}]/g_m = 207$ ns, $b = R_S[C_L(C_{gs} + C_{gd}) + C_{gs}C_{gd}]/g_m = 1.83\times10^{-16}\ \mathrm{s^2}$: poles at 0.773 MHz ($\approx g_m/2\pi C_L$) and 179 MHz, zero at 4.13 GHz. Magnitude: −3 dB at 0.77 MHz, −20 dB/decade to ≈ 180 MHz (−22 dB at 10 MHz), then −40 dB/decade (≈ −77 dB at 1 GHz), slope easing above 4 GHz. Phase: −53° at 1 MHz, −89° at 10 MHz, ≈ −156° near 1 GHz, returning toward −90° at 20 GHz. Step: single-time-constant exponential, τ ≈ 0.21 µs, rise time ≈ 0.45 µs, final value 1 mV, no overshoot.

Expected simulation: identical curves for a linear model with these elements; a level-1 MOS model with the same $k'$, $W/L$, CGSO/CGDO set to reproduce $C_{gs}$ and $C_{gd}$ agrees within a few percent.

## Grading notes

Hand part: +2 needs gain 0.66 (−3.6 dB) with a −3-dB frequency ≈ 390 MHz for 1 kΩ, and gain 1 with a −3-dB frequency ≈ 0.77 MHz ($\approx g_m/2\pi C_L$) for 400 pF, plus the main phase features and non-oscillatory step responses (rise times ≈ 0.9 ns and ≈ 0.45 µs). A correct simulation shows these curves within ±10%. −2 (asserted as fact): gain above 1, a −3-dB frequency of the capacitively loaded follower in the hundreds of MHz, or ringing claimed for the capacitive load in this MOS follower (its output impedance $1/g_m$ is not inductive here, since $R_S$ acts only through the small $C_{gd}$ and $C_{gs}$).
