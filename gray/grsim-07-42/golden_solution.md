# Golden Solution - grsim-07-42

## Reference answer

Nondominant pole ≈ $-5.0\times10^9$ rad/s (≈ 800 MHz); phase contribution at the unity-gain frequency ≈ 2.8°.

- Capacitance at the drain of $M_1$ (all other capacitors shorted, gates at ac ground): $C_{gd1} + C_{db1} + C_{gd11} + C_{db11} + C_{gs1A} + C_{sb1A} = 3 + 10 + 6 + 20 + 20 + 10 = 69$ fF.
- Resistance in parallel with it: with $\lambda = 0$, $M_1$ and $M_{11}$ drains are open, and the source of $M_{1A}$ presents $1/g_{m1A}$; $g_{m1A} = \sqrt{2(60\ \mu)(10)(100\ \mu)} = 0.346$ mA/V → 2.89 kΩ.
- $\tau_s = 69\ \mathrm{fF}\times2.89\ \mathrm{k\Omega} = 0.199$ ns → $|p_{nd}| = 5.02\times10^9$ rad/s (799 MHz); the drain node of $M_2$ gives the same pole.
- Unity-gain frequency: $\omega_u = g_{m1}/C_L$ with $g_{m1} = \sqrt{2(30\ \mu)(10)(100\ \mu)} = 0.245$ mA/V → $2.45\times10^8$ rad/s (39 MHz); including the ≈ 26 fF of drain capacitance at the output, $2.39\times10^8$ rad/s.
- Phase: $\arctan(\omega_u/|p_{nd}|) = \arctan(0.049) \approx 2.8°$.
- Expected simulation: unity-gain frequency ≈ 38 MHz with total phase ≈ −96° (−90° from the output pole, ≈ 2.7° from each folding-node pole path and the rest from the mirror pole near 430 MHz); folding-node poles at ≈ 800 MHz.

## Grading notes

Hand part: +2 needs the node capacitance ≈ 69 fF (doubled $M_{11}$ capacitances included), resistance $1/g_{m1A} \approx 2.9$ kΩ, pole ≈ 5×10⁹ rad/s (≈ 0.8 GHz, ±10%), unity-gain frequency ≈ 39 MHz, and phase ≈ 2.7–2.9°. A correct simulation confirms the unity-gain frequency within ±10% and an excess phase of a few degrees attributable to the folding nodes and the mirror. −2 (asserted as fact): the pole computed with a large resistance (e.g., the output resistance), the unity-gain frequency computed with $g_m$ of the cascode device, or a phase contribution of tens of degrees.
