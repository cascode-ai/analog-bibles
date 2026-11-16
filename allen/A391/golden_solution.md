# Golden Solution - A391

## Reference answer

Gain ≈ 520 V/V ($v_1$ noninverting, $v_2$ inverting); $SR^- = 16$ V/µs, $SR^+ = 32$ V/µs.

Bias: M7 (2/2) and M9 (8/2) mirror M10 (2/2): tail 20 µA, M9 sinks 80 µA. M5 and M6 (1/4) mirror M11 (4/4): 5 µA each, injected into the drains of M1 and M2. Each input device carries 10 µA, so the diode loads M3 and M4 carry 10 − 5 = 5 µA. M8 (64/2) mirrors M4 (4/2) with ratio 16: $I_8 = 80\ \mu$A = $I_9$.

Gain: only the M2 side drives the output. $g_{m2} = \sqrt{2\cdot110\cdot5\cdot10}\ \mu\mathrm{S} = 104.9\ \mu$S; the node at M2/M4 has resistance ≈ $1/g_{m4}$ with $g_{m4} = \sqrt{2\cdot50\cdot2\cdot5}\ \mu\mathrm{S} = 31.6\ \mu$S; $g_{m8} = \sqrt{2\cdot50\cdot32\cdot80}\ \mu\mathrm{S} = 506\ \mu$S; $r_{ds8}\|r_{ds9} = (1/(0.01\cdot80\ \mu\mathrm{A}))/2 = 625$ kΩ.
$A_v = \dfrac{g_{m2}}{2}\cdot\dfrac{1}{g_{m4}}\cdot g_{m8}\,(r_{ds8}\|r_{ds9}) = 1.66\times316 \approx 524$ V/V (≈ 520 including the small conductances at the M4 node).

Slew rates: $v_1 \ll v_2$: M2 off, the M4 node rises, M8 turns off and M9 sinks 80 µA: $SR^- = 80\ \mu\mathrm{A}/5\ \mathrm{pF} = 16$ V/µs. $v_1 \gg v_2$: M2 takes all 20 µA, of which M6 supplies 5 µA, so M4 carries 15 µA and M8 sources $16\times15 = 240\ \mu$A; net $240-80 = 160\ \mu$A: $SR^+ = 32$ V/µs.

## Grading notes

+2: gain ≈ 500–540 V/V (the factor 1/2 from the differential split included; ≈ 1050 is accepted only as $v_{out}$ per half-differential input $(v_1-v_2)/2$ with that normalisation stated and the requested $v_{out}/(v_1-v_2)$ ≈ 520 recoverable from it; ≈ 1050 claimed as $v_{out}/(v_1-v_2)$, e.g. for $v_2$ ac-grounded, is a gain error, since the tail node then moves and the gain is still ≈ 520), $SR^-$ = 16 V/µs and $SR^+$ = 32 V/µs with the 5 µA of M6 subtracted. +1: gain right and $SR^-$ right, $SR^+$ given as 48 V/µs because the 5 µA from M6 was overlooked; or both slew rates right and the gain off by a slip. 0: only the bias currents and one of the three results right. −2 (asserted as fact): misread topology (e.g., M5/M6 treated as the loads, or M8 mirroring M3), mirror ratio 64/4 = 16 applied to the wrong current giving very different values, or gain computed as $g_{m2}r_{ds}$ of the first stage only.
