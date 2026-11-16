# Golden Solution - A062

## Reference answer

(i) Saturation: n-channel $g_m$ ≈ 332 µS, $g_{mbs}$ ≈ 40.4 µS, $g_{ds}$ = 0.5 µS; p-channel $g_m$ ≈ 224 µS, $g_{mbs}$ ≈ 38.1 µS, $g_{ds}$ = 0.5 µS.
(ii) Nonsaturation: n-channel $g_m$ = 1.1 mS, $g_{mbs}$ ≈ 134 µS, $g_{ds}$ ≈ 3.28 mS ($r_{ds}$ ≈ 305 Ω); p-channel $g_m$ = 0.5 mS, $g_{mbs}$ ≈ 85.2 µS, $g_{ds}$ ≈ 1.43 mS ($r_{ds}$ ≈ 700 Ω).

- (i) $g_m = \sqrt{2K'(W/L)|I_D|}$: $\sqrt{2\times110\ \mu\times10\times50\ \mu}$ = 332 µS and $\sqrt{2\times50\ \mu\times10\times50\ \mu}$ = 224 µS. $g_{mbs} = g_m\gamma/[2\sqrt{2|\phi_F| + |V_{SB}|}]$: 0.4/(2√2.7) = 0.122 → 40.4 µS; 0.57/(2√2.8) = 0.170 → 38.1 µS. $g_{ds} \approx \lambda|I_D|$ = 0.01 × 50 µA = 0.5 µS for both.
- (ii) Thresholds with $|V_{SB}|$ = 2 V: $0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7})$ = 1.023 V and $0.7 + 0.57(\sqrt{2.8} - \sqrt{0.8})$ = 1.144 V (magnitude). β = K'W/L = 1.1 mA/V² and 0.5 mA/V². Currents $\beta[(V_{GS} - V_T)V_{DS} - V_{DS}^2/2]$ = 3.83 mA and 1.68 mA (nonsaturated, since $V_{DS} < V_{GS} - V_T$).
- $g_m = \beta V_{DS}$ = 1.1 mS and 0.5 mS; $g_{mbs} = \beta\gamma V_{DS}/[2\sqrt{2|\phi_F| + |V_{SB}|}]$ = 134 µS and 85.2 µS; $g_{ds} = \beta(V_{GS} - V_T - V_{DS})$ = 1.1 mA/V² × 2.977 V = 3.28 mS and 0.5 mA/V² × 2.856 V = 1.43 mS.

## Grading notes

+2: all twelve quantities within ±3% (six for (i), six for (ii); $r_{ds}$ accepted in place of $g_{ds}$). Including $(1+\lambda V_{DS})$ factors in nonsaturation (≈ 1% changes) is fine. Parts (i) and (ii) carry equal weight. +1: one or two values wrong through slips. 0: one part fully correct and the other wrong, the body effect ignored in the thresholds of (ii) (giving ≈ 3.63 mS and 1.65 mS for $g_{ds}$), or the right formulas with several slips. −2 (asserted as fact): saturation formulas used for part (ii) (e.g. $g_m = \sqrt{2\beta I_D}$, $g_{ds} = \lambda I_D$), $g_{mbs}$ computed with the other device's γ or without the square root, n- and p-channel parameters swapped, or values off by a factor of 10 from using W/L = 1.
