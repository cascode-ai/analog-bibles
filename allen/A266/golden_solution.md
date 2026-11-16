# Golden Solution - A266

## Reference answer

Only the input common-mode range changes appreciably: with worst-case thresholds it becomes about −0.93 V to +2.5 V (instead of −1.0 V to +2.0 V), i.e. the lower limit is degraded by ≈ 75 mV while the upper limit improves by ≈ 0.5 V. Gain, GB, slew rate, output swing and power are unchanged.

- Body effect: $V_{T1} = V_{T0} + 0.4\left(\sqrt{0.7 + V_{SB1}} - \sqrt{0.7}\right)$, with the source of M1/M2 at $V_{SS} + V_{SB1}$.
- Lower limit: at $V_{in}(\min)$ the tail transistor is at the edge of saturation, $V_{SB1} = V_{DS5}(\mathrm{sat}) = \sqrt{2(30\ \mu)/(110\ \mu \cdot 4.5)} = 0.348$ V, so $V_{T1} = 0.85 + 0.4(1.024 - 0.837) = 0.925$ V; with $\sqrt{I_5/\beta_1} = \sqrt{30/(110 \cdot 3)} = 0.302$ V: $V_{in}(\min) = -2.5 + 0.348 + 0.302 + 0.925 = -0.93$ V (−1.00 V without body effect).
- Upper limit: $V_{in}(\max) = V_{DD} - V_{SG3} + V_{T1}$ with $V_{SG3} = \sqrt{30/(50 \cdot 15)} + 0.85 = 1.05$ V. The source of M1 is then at $1.45 - 0.302 = 1.148$ V, $V_{SB1} = 3.65$ V, $V_{T1} = 0.55 + 0.4(2.085 - 0.837) = 1.05$ V, so $V_{in}(\max) \approx 2.5$ V (2.0 V without body effect): a larger input threshold raises the upper limit.
- ICMR width ≈ 3.4 V instead of 3.0 V; the −1 V specification is now missed by ≈ 75 mV (with nominal thresholds the range is about −1.08 V to above 2.5 V).
- Unchanged: $g_{m1}$ (current fixed by M5) hence GB (≈ 5.3 MHz from the W/L values shown, $g_{m1}$ = 99.5 µS; 5 MHz design target), the differential gain (the common-source node is an ac ground for differential signals, so $g_{mbs}$ does not enter) ≈ 8.1 × 10³ from the W/L values shown ($g_{m1}$ = 99.5 µS, $g_{m6}$ = 945 µS; ≈ 7.7 × 10³ with the design-target $g_{m1}$ = 94 µS), SR = 10 V/µs, output swing and $P_{diss}$.
- Secondary effects: at a common-mode input of 0 V, $V_{T1}$ rises to ≈ 0.93 V (nominal), so the tail node sits ≈ 0.23 V lower; $g_{mbs}$ slightly changes the common-mode gain (CMRR) and lets $V_{SS}$ fluctuations reach the pair through the bulks (slight PSRR⁻ change); the bulk capacitance adds to the tail node.

## Grading notes

+2: identifies the ICMR as the affected performance, evaluates $V_{T1}$ at the actual $V_{SB}$ at each limit, and gives $V_{in}(\min)$ ≈ −0.93 V (higher by ≈ 0.07–0.08 V) and an upper limit that rises (≈ 2.5 V), with gain/GB/SR noted as unchanged. Consistent use of nominal thresholds (≈ −1.08 V, above 2.5 V) is equally fine. +1: lower limit right but the upper limit claimed unchanged, or only qualitative. 0: correct statement that only ICMR changes, values wrong through slips. −2 (asserted as fact): body effect evaluated at $V_{SB}$ ≈ 2.5 V giving $V_{in}(\min)$ ≈ −0.62 V (ICMR ≈ 2.6 V) as the result, the upper limit claimed to fall, or the differential gain or GB claimed to change substantially because of $g_{mbs}$. Gain values between 7.7 × 10³ and 8.2 × 10³ and GB of 5–5.3 MHz are all correct (design targets vs. the W/L values shown); do not list them as false claims.
