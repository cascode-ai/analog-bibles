# Golden Solution - grsim-07-06

## Reference answer

Hand analysis ($g_m = 19.2$ mA/V, $r_\pi = 10.4\ \mathrm{k\Omega}$, $C_\pi = 5.82$ pF):
- DM: $A_{dm} = -g_mR_L\,r_\pi/(R_S + r_b + r_\pi) = -38.2$ (31.6 dB), single pole at ≈ 1.9 MHz (Miller: 1.93 MHz), so −20 dB/decade above it: ≈ 30.6 dB at 1 MHz, 17 dB at 10 MHz, 11 dB at 20 MHz.
- CM: $A_{cm} \approx -\dfrac{R_L}{2R_T}(1 + sR_TC_T)$: −0.0050 (−46 dB) at low frequency, zero at $1/(2\pi R_TC_T) = 265$ kHz, then +20 dB/decade (≈ −8.5 dB at 20 MHz by this approximation).
- CMRR: 7640 (77.7 dB) at low frequency, −20 dB/decade above 265 kHz, −40 dB/decade above ≈ 1.9 MHz; ≈ 20–22 dB at 20 MHz.

Expected simulation (linear model with all capacitances): DM 31.6 dB, −3 dB at 1.92 MHz; CM −46.1 dB with its zero at ≈ 380 kHz rather than 265 kHz, because the current fed through $C_\mu$ into $R_L$ partially cancels the tail-capacitance term (effective zero $1/[R_T(C_T - 2C_\mu)]$); CM gain ≈ −37 dB at 1 MHz, −17.5 dB at 10 MHz, −11.2 dB at 20 MHz; CMRR ≈ 77.7 dB at 10 kHz, 67.7 dB at 1 MHz, 34.7 dB at 10 MHz, 22.5 dB at 20 MHz.

## Grading notes

Hand part: +2 needs DM ≈ 31.6 dB with a pole ≈ 1.9 MHz, CM ≈ −46 dB with a zero near 265 kHz (from $R_TC_T$) rising at 20 dB/dec, and CMRR ≈ 78 dB falling at −20 then −40 dB/dec; values within ±1.5 dB. A correct simulation shows the same DM curve, a CM floor of −46 dB rising from a few hundred kHz to ≈ −11 dB at 20 MHz, and CMRR ≈ 22–23 dB at 20 MHz; the ≈ 1.4× shift of the CM zero (and ≈ 3 dB lower CM gain at high frequency than the simple formula) should be attributed to $C_\mu$ feedthrough, not to error. −2 (asserted as fact): CM gain decreasing with frequency, CMRR increasing with frequency, or a DM bandwidth in the hundreds of MHz.
