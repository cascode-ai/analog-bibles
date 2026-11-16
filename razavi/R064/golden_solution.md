# Golden Solution - R064

## Reference answer

NMOS diode-connected load: $A_v \approx -1.95$ (body effect of $M_2$ included, λ neglected; ≈ −1.85 if $r_{O1}$ and $r_{O2}$ are also included; it would be −2.24 without body effect). PMOS diode-connected load: $A_v \approx -4.18$ (λ neglected; ≈ −3.57 if $r_{O1} = 20$ kΩ and $r_{O2} = 10$ kΩ are included).

- $g_{m1} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66$ mS; NMOS load $g_{m2} = \sqrt{2(134\ \mu\mathrm{A/V^2})(20)(0.5\ \mathrm{mA})} = 1.64$ mS (overdrive 0.611 V).
- NMOS load: $A_v = -g_{m1}/(g_{m2}+g_{mb2}) = -\sqrt{(W/L)_1/(W/L)_2}\,/(1+\eta)$. The source of $M_2$ is the output: $V_{out} = 3 - V_{TH2} - 0.611$ with $V_{TH2} = 0.7 + 0.45(\sqrt{0.9+V_{out}} - \sqrt{0.9})$ gives $V_{out} \approx 1.43$ V, $V_{TH2} \approx 0.96$ V, $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}}) \approx 0.147$, so $A_v = -2.236/1.147 \approx -1.95$. Including channel-length modulation: $-g_{m1}[1/(g_{m2}+g_{mb2}) \,\|\, r_{O1} \,\|\, r_{O2}] = -3.66\ \mathrm{mS} \times 505\ \Omega \approx -1.85$.
- PMOS load (source and bulk at $V_{DD}$, no body effect): $g_{m2} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(20)(0.5\ \mathrm{mA})} = 0.876$ mS, $A_v = -g_{m1}/g_{m2} = -\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]} \approx -4.18$; with channel-length modulation $-g_{m1}(1/g_{m2} \,\|\, 20\ \mathrm{k\Omega} \,\|\, 10\ \mathrm{k\Omega}) \approx -3.57$.
- Check: $V_{out} \approx 1.43$ V (NMOS load) and $3 - 0.8 - 1.14 \approx 1.06$ V (PMOS load) both exceed $M_1$'s overdrive of 0.27 V, so $M_1$ is saturated in both cases.

## Grading notes

Two parts, equal credit. +2: NMOS-load gain ≈ −1.95 (or ≈ −1.85 with $r_O$ included), ±4%, with the body effect of $M_2$ included, and PMOS-load gain ≈ −4.18 (or ≈ −3.57 with $r_O$ included), ±4%. Either λ convention is fine if stated. +1: body effect of $M_2$ neglected (−2.24, or −2.11 with $r_O$) with the PMOS part right, or one arithmetic slip. 0: one of the two gains right and the other wrong. -2 (asserted as fact): gain taken as the plain ratio without the square root in both parts (−5 for the NMOS load, $-\mu_n(W/L)_1/[\mu_p(W/L)_2] \approx -17.4$ for the PMOS load), or a positive gain. A model error confined to one of the two parts — e.g., $\mu_nC_{ox}$ used for the PMOS (giving −2.24 for the PMOS load) or a body effect attributed to the PMOS load, with the NMOS-load gain right — makes only that part wrong: 0.
