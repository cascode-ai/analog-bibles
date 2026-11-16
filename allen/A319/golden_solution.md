# Golden Solution - A319

## Reference answer

Currents: $I_5 = 120\ \mu$A, $I_1 = I_2 = I_3 = I_4 = 60\ \mu$A, $I_6 = I_7 = 40\ \mu$A, $I_9 = 200\ \mu$A (Q2 emitter; $I_{C2} \approx 198\ \mu$A), $I_{E1} = I_{B2} \approx 2\ \mu$A, $I_{B1} \approx 0.02\ \mu$A. Gain $A_v \approx 534$ V/V. $R_{out} \approx 0.29$ kΩ.

- Mirrors from M8 (2/2): M5 (12/2) ×6 → 120 µA; M7 (4/2) ×2 → 40 µA; M9 (20/2) ×10 → 200 µA. M1–M4 share $I_5$: 60 µA each. M6 carries M7's 40 µA (the closed loop sets the input so that it does).
- First stage: $g_{m2} = \sqrt{2(25\ \mu)(4)(60\ \mu)} = 109.5\ \mu$S, $g_{ds2} + g_{ds4} = 2(0.04)(60\ \mu) = 4.8\ \mu$S, gain 22.8.
- Second stage: $g_{m6} = \sqrt{2(10\ \mu)(7)(40\ \mu)} = 74.8\ \mu$S, $g_{ds6} + g_{ds7} = 3.2\ \mu$S, gain 23.4.
- $A_v = 22.8\times23.4 \approx 534$ (Darlington follower gain ≈ 1).
- Output resistance (Darlington): $R_{B2} = (r_{\pi1} + r_{ds6}\|r_{ds7})/(1+\beta)$ with $r_{\pi1} = 100(25.9\ \mathrm{mV})/1.96\ \mu\mathrm{A} = 1.32$ MΩ and $r_{ds6}\|r_{ds7} = 1/3.2\ \mu\mathrm{S} = 312.5$ kΩ: $R_{B2} = 16.2$ kΩ. $r_{\pi2} = 100(25.9\ \mathrm{mV})/198\ \mu\mathrm{A} = 13.1$ kΩ. $R_{out} = (r_{\pi2} + R_{B2})/(1+\beta) = (13.1 + 16.2)\ \mathrm{k}/101 \approx 290\ \Omega$ ($r_{ds9}$ = 125 kΩ in parallel is negligible).

## Grading notes

Credit split: currents 30%, gain 35%, output resistance 35%. +2: currents as listed (Q1 ≈ 2 µA, Q2/M9 ≈ 200 µA), gain 510–560 V/V, $R_{out}$ 270–310 Ω (Darlington: base-side resistance divided by $(1+\beta)^2$ plus $r_{\pi2}/(1+\beta)$). +1: one of the three parts with a slip. 0: currents and gain right, output resistance wrong (e.g., only $1/g_{m,Q2}$ ≈ 130 Ω, or the Q1 stage ignored). −2 (asserted as fact): mirror ratios misread (e.g., 20 µA in M5), M6 current taken as 84 µA from $V_{SG6} = V_{SG4}$ without the M7 constraint, or output resistance equal to $r_{ds6}\|r_{ds7}$.
