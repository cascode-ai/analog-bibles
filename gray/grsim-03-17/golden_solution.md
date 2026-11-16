# Golden Solution - grsim-03-17

## Reference answer

$v_o/v_i \approx -183$ (−180 to −185 depending on small details). With velocity-saturation degeneration ($R_{SX1} = 11.1\ \Omega$, $R_{SX2} = 167\ \Omega$): $v_o/v_i \approx -145$, about 20% lower.

- Bias chain: $10\ \mathrm{k\Omega}$ from 5 V into diode-connected $Q_2$ and $M_2$: $I \approx 0.325$ mA, $V_{BE2} \approx 0.75$ V, $V_{GS,M2} = 0.6 + \sqrt{2I/(200\ \mu \times 20)} \approx 1.00$ V, so $Q_1$'s base is at $V_X \approx 1.75$ V.
- Self-consistent operating point ($V_{G1} = V_O$): $V_O \approx 0.98$ V, $I_{D1} \approx 4.3$ mA (≈ 4.0 mA from $R_{L1}$ plus $I_{E1}$), $I_{C1} \approx 0.31$ mA, $V_{C1} \approx 1.76$ V ($Q_1$ just at the edge of saturation, $V_{CB} \approx 0$), $I_{C3} \approx 0.97$ mA.
- Small signal: $g_{m1} = \sqrt{2(200\ \mu)(300)(4.32\ \mathrm{m})} = 22.8$ mA/V. $M_1$'s drain current is shared between $R_{L1} = 1$ kΩ and the emitter of $Q_1$ ($r_{e1} \approx 82$–88 Ω): fraction ≈ 0.92 enters $Q_1$, and $\alpha \approx 0.99$ of it reaches $Q_1$'s collector. Load at $Q_1$'s collector: $R_{L2} \| R_{i3} = 10\ \mathrm{k} \| 100\ \mathrm{k} = 9.1$ kΩ, with $R_{i3} = r_{\pi3} + 101(1\ \mathrm{k}\|30\ \mathrm{k}) \approx 100$ kΩ. Emitter follower $Q_3$: gain $101 \times 968/100.4\ \mathrm{k} = 0.973$.
- $v_o/v_i \approx -22.8\ \mathrm{m} \times 0.92 \times 0.99 \times 9.1\ \mathrm{k} \times 0.973 \approx -183$. (With an ideal input voltage source the 30-kΩ resistor only loads the output.)
- Velocity saturation: $R_{SX1} = 1/(1.5\times10^6 \times 200\ \mu \times 300\ \mu) = 11.1\ \Omega$ reduces $M_1$'s effective transconductance to $g_{m1}/(1 + g_{m1}R_{SX1}) \approx 18$ mA/V; $R_{SX2} = 167\ \Omega$ raises $V_{GS,M2}$ by ≈ 50 mV, shifting the bias slightly. The gain falls to ≈ −145.

## Grading notes

Hand part: +2 requires a gain of −175 to −190 with the stages identified correctly (CS $M_1$ → CB $Q_1$ with current division against $R_{L1}$ → $R_{L2}$ loaded by $Q_3$ → follower $Q_3$) and a consistent operating point. A correct simulation, with the stated bias convention, gives a gain of about −180 and, with $R_{SX}$ added, about −140 to −150 (a reduction of roughly 20%, dominated by $M_1$'s degeneration); the simulated operating point should show $Q_1$ near the edge of saturation. −2 (asserted as fact): the 30-kΩ resistor treated as effective negative feedback that reduces the gain to about $-30$ with an ideal input source, $Q_1$ treated as a common-emitter stage, or the current division at $M_1$'s drain ignored in a way that changes the gain by more than 10%.
