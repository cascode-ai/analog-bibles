# Golden Solution - A269

## Reference answer

One design (all L = 2 µm): M3 = M4 = 4 µm/2 µm, M6 = 16/2, M8 = 4/2, M5 ≈ 10.8/2, M7 ≈ 21.5/2; $C_c$ ≈ 16.7 pF; $R_z = 1/g_{m6}$ = 2.5 kΩ; $A_v \approx 1.05\times10^4$; $C_L \lesssim$ 37 pF (60° margin); SR ≈ 6.0 V/µs.

- $g_{m1} = \sqrt{2(110\ \mu)(1)(50\ \mu)} = 104.9\ \mu$S → $C_c = g_{m1}/(2\pi \times 1\ \mathrm{MHz}) = 16.7$ pF.
- Gain with λ = 0.01: $(g_{ds2} + g_{ds4}) = 0.01 \times 50\ \mu \times 2 = 1\ \mu$S, $(g_{ds6} + g_{ds7}) = 4\ \mu$S, so $A_v = g_{m1}g_{m6}/(4\times10^{-12})$ ≥ 5000 needs $g_{m6} \ge 191\ \mu$S.
- M3 = M4 = 4/2 ($S = 2$): $V_{SG3} = 0.7 + \sqrt{2(50\ \mu)/(50\ \mu \cdot 2)} = 1.7$ V. For $V_{SG6} = V_{SG4}$: $S_6 = S_4 I_6/I_4 = 2 \times 200/50 = 8$ (16/2), $g_{m6} = \sqrt{2(50\ \mu)(8)(200\ \mu)} = 400\ \mu$S → $A_v = (104.9\ \mu)(400\ \mu)/(4\times10^{-12}) = 1.05\times10^4$ ✓. (Alternatively, $g_{m6}$ = 191 µS, $S_6$ = 1.8 with $S_4$ = 0.45, e.g. 2 µm/4.4 µm, gives ≈ 5000–7000.)
- Bias: M8 = 4/2 ($S_8 = 2$): $I_8 = (5 - V_{GS8})/100\ \mathrm k$ → $I_8$ = 37.2 µA; $S_5 = 2 \times 100/37.2 = 5.38$ (≈ 10.8/2), $S_7 = 10.8$ (≈ 21.5/2).
- Saturation at zero common-mode input: $V_{GS1} = 0.7 + \sqrt{2(50)/110} = 1.65$ V, so $V_{DS5} = 0.85$ V > $V_{DS5}(\mathrm{sat}) = 0.58$ V ✓; M1 drain at $V_{DD} - V_{SG3} = 0.8$ V, $V_{DS1} = 2.45$ V > 0.95 V ✓; output range ≈ −1.92 V to +1.5 V.
- $R_z = 1/g_{m6} = 2.5$ kΩ removes the RHP zero.
- Load: $|p_2| = g_{m6}/C_L \ge 1.73\,GB$ for 60° → $C_L \le 400\ \mu/(1.73 \times 2\pi \times 10^6) = 36.8$ pF (≈ 64 pF for 45°).
- $SR = I_5/C_c = 100\ \mu\mathrm A/16.7\ \mathrm{pF} = 6.0$ V/µs.

## Grading notes

Design problem: accept any design meeting gain ≥ 5000, GB = 1 MHz, saturation of all devices, RHP-zero cancellation, with correct supporting calculations. Key items: $g_{m1}$ ≈ 105 µS for 2/2 at 50 µA, $C_c$ ≈ 16.7 pF, $g_{m6}$ ≥ ≈ 191 µS (with λ for L = 2 µm), M3/M4 and M6 consistent with $V_{SG4} = V_{SG6}$ (or a stated offset trade-off), M5 sized from the M8 bias current for 100 µA with a saturation check, $R_z = 1/g_{m6}$ (or a value placing the zero on $p_2$), $C_L(\max)$ ≈ $g_{m6}/(1.73\,GB)$ (60°) or $g_{m6}/GB$ (45°) with the criterion stated, SR $= I_5/C_c$. +2: all consistent. +1: one item missing or wrong. 0: about half. GB used in Hz as rad/s ($C_c$ ≈ 105 pF, SR ≈ 1 V/µs) is a units slip: at most 0. Saturation is checked at an input common-mode voltage of 0 (or at a stated common-mode level near 0). A sizing error that leaves one device (e.g. M5) out of saturation, or M6 sized without $V_{SG6} = V_{SG4}$ and without stating the offset, counts as one wrong item (+1 if everything else is right, 0 if another item is also wrong). Designs aimed at exactly $A_v = 5000$ are judged the same way; note that with minimum devices and $V_{SG6} = V_{SG4}$ the gain is already ≥ 7.4×10³, so the gain specification is a lower bound. −2 (asserted as fact): currents not doubled in the calculations, or $R_z$ leaving an RHP zero.
