# Golden Solution - A282

## Reference answer

Small-signal values: $g_{m1} = \sqrt{2(110\,\mu)(3)(15\,\mu)} = 99.5\ \mu$S, $g_{m6} = \sqrt{2(50\,\mu)(94)(95\,\mu)} = 945\ \mu$S, $G_I = g_{ds2}+g_{ds4} = (0.04+0.05)(15\ \mu\mathrm{A}) = 1.35\ \mu$S, $g_{ds6} = 4.75\ \mu$S, $g_{ds7} = 3.8\ \mu$S, $G_{II} = 8.55\ \mu$S; $A_v(0) = g_{m1}g_{m6}/(G_IG_{II}) \approx 8.1\times10^3$ (78 dB); $GB = g_{m1}/C_c = 33.2$ Mrad/s (5.3 MHz); $|p_2| = g_{m6}/C_L = 94.5$ Mrad/s (15 MHz).

With the ratio defined in the question, $A_v(s)$ and the supply gain have the same denominator, so the op-amp poles $p_1$ and $p_2$ cancel and only the numerators remain.

PSRR⁺ $= \dfrac{A_v}{A_{dd}} = \dfrac{g_{mI}g_{mII}}{G_Ig_{ds6}}\cdot\dfrac{1 - sC_c/g_{mII}}{1+s\,g_{mII}C_c/(G_Ig_{ds6})}$:
- low-frequency value $g_{m1}g_{m6}/(G_Ig_{ds6}) \approx 1.47\times10^4$ (83 dB);
- pole at $G_Ig_{ds6}/(g_{m6}C_c) = 2.26$ krad/s (≈ 360 Hz), i.e. $GB\,g_{ds6}/(G_{II}A_v(0))$;
- −20 dB/decade from 360 Hz, through ≈ 0 dB at $GB$ (5.3 MHz; pole × dc value $= g_{m1}/C_c$);
- the RHP zero of $A_v$ at $g_{m6}/C_c = 315$ Mrad/s (≈ 50 MHz) is a break in slope (no notch): above it the curve levels off at $g_{m1}/g_{m6} \approx -20$ dB (at very high frequency the supply gain exceeds the differential gain).

PSRR⁻ (bias independent of $V_{SS}$) $= \dfrac{g_{mI}g_{mII}}{G_Ig_{ds7}}\cdot\dfrac{1 - sC_c/g_{mII}}{(1+sC_c/G_I)(1+sC_{gd7}/g_{ds7})}$:
- low-frequency value $g_{m1}g_{m6}/(G_Ig_{ds7}) \approx 1.83\times10^4$ (85 dB);
- pole at $G_I/C_c = 4.5\times10^5$ rad/s (≈ 72 kHz);
- −20 dB/decade down to ≈ 48 dB at $GB$ and ≈ 28 dB at 50 MHz;
- flat between the RHP zero $g_{m6}/C_c$ (≈ 50 MHz) and the pole $g_{ds7}/C_{gd7} = 3.8\times10^8$ rad/s (≈ 60 MHz), then −20 dB/decade again (≈ 4 dB at 1 GHz).

So PSRR⁻ is far better than PSRR⁺ above a few hundred hertz; PSRR⁺ starts to fall at only ≈ 360 Hz and is ≈ 0 dB at $GB$, because the gate of M6 follows $V_{DD}$ (its $V_{SG}$ is fixed by the M7 current) and $C_c$ couples that gate to the output.

Derivation (two-node model, differential input zero; $V_1$ = first-stage output): for the $V_{DD}$ ripple, $G_IV_{dd} = (G_I+sC_c)V_1 - sC_cV_{out}$ and $(g_{mII}+g_{ds6})V_{dd} = (g_{mII}-sC_c)V_1 + (G_{II}+sC_c+sC_L)V_{out}$, so $A_{dd} = [G_Ig_{ds6} + sC_c(g_{mII}+g_{ds6}+G_I)]/D(s)$ with $D(s) = G_IG_{II} + s[C_c(g_{mII}+G_I+G_{II}) + C_LG_I] + s^2C_cC_L$, the same denominator as $A_v = g_{mI}(g_{mII}-sC_c)/D(s)$. For $V_{SS}$ with the M7 gate–source voltage fixed, only $g_{ds7}$ (and $C_{gd7}$) inject the ripple: $0 = (G_I+sC_c)V_1 - sC_cV_{out}$ and $(g_{ds7}+sC_{gd7})V_{ss} = (g_{mII}-sC_c)V_1 + (G_{II}+sC_c+sC_L+sC_{gd7})V_{out}$, so $A_{ss} = (g_{ds7}+sC_{gd7})(G_I+sC_c)/D(s)$ (with $C_{gd7}$ added to the output capacitance in $D$). A full nodal solution of the circuit gives the same curves (PSRR⁺ ≈ −5.5 dB at 10 MHz and −19.6 dB at 1 GHz).

Textbook method: the book measures PSRR with the op amp connected as a unity-gain follower, which gives $(1+A_v)/A_{supply}$. Below $GB$ this equals the ratio above; above $GB$ its zeros are the follower's closed-loop poles (≈ $GB$ and $|p_2|$; exactly a complex pair near 8.9 MHz), so PSRR⁺ stays near 0 dB up to ≈ 15 MHz and then rises, and PSRR⁻ levels off near 48 dB and rises to ≈ 60 dB. That high-frequency shape belongs to the follower measurement, not to the ratio defined in the question.

Remark: this two-node model ignores the tail transistor M5. In this ratio-matched design the $V_{SS}$ ripple injected through $g_{ds5}$ (mirrored to the output by the first stage and M6) nearly cancels the $g_{ds7}$ injection, so a complete small-signal analysis gives a much higher low-frequency PSRR⁻ (of order 100–120 dB, with an extra break in the kHz range); above ≈ 70 kHz the curve is essentially the one above.

## Grading notes

+2: both sketches with the right shapes and values for the ratio defined in the question: PSRR⁺ flat at ≈ 80–85 dB, one pole at a few hundred hertz (accept 250–600 Hz; ≈ 400 Hz if the design targets $g_{m1} = 94.25\ \mu$S, $g_{m6} = 942.5\ \mu$S are used), −20 dB/decade through ≈ 0 dB near $GB$ ≈ 5 MHz, levelling off near −20 dB above the RHP zero $g_{m6}/C_c$ ≈ 50 MHz; PSRR⁻ higher at low frequency (≈ 85 dB from the two-node model; a higher value of order 100–120 dB justified by including the M5 path is also correct), pole near $G_I/C_c$ ≈ 70 kHz (±30%), ≈ 45–50 dB at $GB$, flat between ≈ 50 MHz ($g_{m6}/C_c$) and ≈ 60 MHz ($g_{ds7}/C_{gd7}$), falling above. Numbers within ±3 dB and ±30% in frequency. Drawing the RHP zero as a notch is a minor error. An answer that uses the textbook unity-gain-follower measurement, $(1+A_v)/A_{supply}$, and says so (zeros near $GB$ and $|p_2|$: PSRR⁺ ≈ 0 dB between $GB$ and $|p_2|$ and rising above; PSRR⁻ levelling near 48 dB and rising to ≈ 60 dB) has everything below $GB$ right but a different high-frequency part from the ratio defined: +1. The same follower shape presented as the defined ratio without saying it comes from the follower measurement: the high-frequency part counts as wrong, at most 0. +1 also: correct shapes and breakpoint expressions with one numerical slip, or only one of the two curves with numbers and the other with correct shape. 0: one curve right and the other missing or wrong. −2 (asserted as fact): PSRR⁺ flat up to $GB$, PSRR⁺ higher than PSRR⁻ between a few hundred hertz and $GB$, PSRR increasing from dc, the PSRR⁺ pole placed at the op-amp's $GB$, or the supply ripple coupling to the output through $C_c$ ignored so that PSRR⁺ ≈ PSRR⁻.
