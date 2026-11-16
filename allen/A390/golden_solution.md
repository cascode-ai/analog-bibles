# Golden Solution - A390

## Reference answer

Open-loop gain ≈ $5.05\times10^9$ V/V; output-inverter delay ≈ 57.5 ps.
- Sizes: $W_8/L_8 = 940$, $W_{10}/L_{10} = 9400$, $W_9/L_9 = 427$, $W_{11}/L_{11} = 4273$ (equal β for each inverter).
- Inverter gain $(g_{mp}+g_{mn})/(g_{dsp}+g_{dsn})$: first inverter $g_{m8} = g_{m9} = \sqrt{2\cdot50\cdot940\cdot100}\ \mu\mathrm{S} = 3.07$ mS, $g_{ds8}+g_{ds9} = 100\ \mu\mathrm{A}(0.09) = 9\ \mu$S → 681; second inverter $g_{m10} = g_{m11} = 21.7$ mS, $g_{ds} = 45\ \mu$S → 963.5.
- Total: $7696\times681\times963.5 \approx 5.05\times10^9$ V/V (the two inverters each invert, so the sign is unchanged).
- Output stage: with its gate at a rail, M10 (or M11) has $|V_{GS}| = 5$ V and can deliver $\tfrac{50}{2}\cdot9400\cdot(4.3)^2\ \mu\mathrm{A} \approx 4.35$ A; $t_p = 100\ \mathrm{pF}\times2.5\ \mathrm{V}/4.35\ \mathrm{A} \approx 57.5$ ps (same for both edges).
- (Remark: such currents are unrealistic, and the overall delay is set by the earlier stages, e.g. M7's 95 µA charging the ≈ 2.5 pF gate capacitance of M8–M9 takes ≈ 65–70 ns; the question asks only for the output-stage contribution.)

## Grading notes

+2: gain ≈ $5.05\times10^9$ (±5 %) with the two inverter gains ≈ 680 and ≈ 960, and the output-inverter delay ≈ 55–60 ps from a peak current ≈ 4.3 A (≈ 60 ps when the triode-region part of the swing is integrated is also +2). Additional remarks about the earlier stages dominating the total delay are welcome but not required. +1: gain right and delay right within a factor from a stated different swing convention (e.g., full 5 V swing → 115 ps), or delay right and gain off by a slip in one inverter. 0: exactly one of the two results right, including when the other is wrong because of a critical error such as an inverter gain from one device's $g_m$ only (≈ 340 and 480, giving ≈ $1.3\times10^9$), a gain formula $g_m/(g_m+g_{ds})$ (≈ 1 per inverter), or a slewing current equal to the quiescent 500 µA (≈ 0.5 µs). −2 (asserted as fact): both results wrong because of critical errors such as those above, or the sizes misread (e.g., $W_{10}/L_{10} = 940$) so that both are wrong.
