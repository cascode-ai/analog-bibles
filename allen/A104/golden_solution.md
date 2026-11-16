# Golden Solution - A104

## Reference answer

$R_1 = 2V_t\ln 10/I = 0.1197\ \mathrm{V}/I$ and $R_2/R_1 = (1.262\ \mathrm{V} - V_{EB3})/(2V_t\ln10)$: for $V_{EB3}$ = 0.6 V, $R_2/R_1$ = 5.53; with $I$ = 10 µA, $R_1$ = 12.0 kΩ and $R_2$ = 66.2 kΩ. Stacking doubles the PTAT voltage across $R_1$, which halves the required gain $R_2/R_1$ and with it the effect of the amplifier's offset (and noise) on $V_{REF}$; equivalently, 10:1 devices give the PTAT voltage of a single pair with a 100:1 area ratio ($2V_t\ln10 = V_t\ln100$), saving area.

- The ideal amplifier equalizes its inputs: $V_{EB2a} + V_{EB2b} = V_{EB1a} + V_{EB1b} + I_1R_1$. All currents are equal (identical M1–M5) and Q1a, Q1b have 10× the area, so $V_{R1} = 2V_t\ln 10 = 0.1197$ V (PTAT) and $I = V_{R1}/R_1$. (Q1a, Q1b must be the larger devices for $V_{R1} > 0$.)
- M5 copies $I$ into $R_2$ and Q3: $V_{REF} = V_{EB3} + (R_2/R_1)\,2V_t\ln10$.
- Zero TC at $T_0$: $dV_{PTAT}/dT = V_{PTAT}/T_0$ and $dV_{EB3}/dT = [V_{EB3} - V_{G0} - (\gamma - \alpha)V_{t0}]/T_0$, so $(R_2/R_1)\,2V_{t0}\ln10 = V_{G0} + (\gamma - \alpha)V_{t0} - V_{EB3}$, and then $V_{REF} = V_{G0} + (\gamma - \alpha)V_{t0} = 1.205 + 2.2\times0.026 = 1.262$ V regardless of $V_{EB3}$.
- Numbers: $R_2/R_1 = (1.262 - 0.6)/0.1197 = 5.53$; $I$ = 10 µA gives $R_1$ = 11.97 kΩ, $R_2$ = 66.2 kΩ.
- Stacking: an amplifier offset $V_{OS}$ adds directly to $V_{R1}$ and appears at the output multiplied by $R_2/R_1$. With two junctions per side, $V_{R1}$ is twice as large and $R_2/R_1$ half as large (≈ 5.5 instead of ≈ 11), so the output error from $V_{OS}$ and the amplifier noise is halved. The cost is more headroom ($2V_{EB} + V_{R1}$ ≈ 1.4 V).

## Grading notes

Design problem: accept any bias current; the resistor values must satisfy the zero-TC condition. +2: $V_{R1} = 2V_t\ln10$ (stack doubling recognized), $R_1 = 2V_t\ln10/I$, $R_2/R_1 = (V_{G0} + (\gamma - \alpha)V_t - V_{EB3})/(2V_t\ln10)$ ≈ 5.5 for $V_{EB3}$ = 0.6 V, and a concrete advantage stated: reduced sensitivity of $V_{REF}$ to amplifier offset/noise (the PTAT voltage is doubled and $R_2/R_1$ halved), or the same PTAT voltage as a single pair with a 100:1 area ratio obtained from 10:1 devices (area saving). Merely saying that the PTAT voltage is doubled or the ratio is smaller, without a consequence, is vague (+1). +1: correct design with the advantage missing or vague, or the advantage right with a slip in the ratio. 0: the stack doubling missed (ratio ≈ 11) with the rest of the method right. −2 (asserted as fact): $V_{REF}$ achieved by an arbitrary divider without the zero-TC condition, the 10× devices placed on the side that makes $V_{R1}$ negative, or the claim that stacking has no effect.
