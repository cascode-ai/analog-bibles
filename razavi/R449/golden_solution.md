# Golden Solution - R449

## Reference answer

$\tau = \dfrac{R_{out}\,C_1C_2/(C_1+C_2)}{1 + A_vC_1/(C_1+C_2)} \approx 91$ ps (≈ $C_2/g_{m1}$ = 97 ps for large loop gain).

- Op amp: $A_v = g_{m1}(r_{O2}\|r_{O4})$, $R_{out} = r_{O2}\|r_{O4}$. With 0.5 mA per side: $g_{m1} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS; $r_{O2} = 20$ kΩ, $r_{O4} = 10$ kΩ → $R_{out} = 6.67$ kΩ, $A_v = 34.5$.
- The output drives the series combination $C_1C_2/(C_1+C_2) = 0.25$ pF, and the feedback factor is $\beta = C_1/(C_1+C_2) = 0.5$.
- $V_{out}/V_{in} = \dfrac{A_v}{1+\beta A_v}\cdot\dfrac{1}{1 + s\tau}$ with $\tau = R_{out}(0.25\ \mathrm{pF})/(1 + 0.5 \times 34.5) = 1.667\ \mathrm{ns}/18.3 = 91$ ps.
- Step response: $V_{out}(t) = \dfrac{A_v}{1+\beta A_v}V_0(1 - e^{-t/\tau})$, settling to ≈ 1.89 $V_0$.

## Grading notes

+2: τ ≈ 91 ps (85–100 ps, so the large-loop-gain value $C_2/g_{m1} \approx 97$ ps is also accepted) with the correct closed-loop single-pole derivation (load = series $C_1$, $C_2$; feedback factor 1/2). +1: correct expression with a numerical slip, or open-loop and closed-loop time constants both given with the closed-loop one identified correctly but a minor arithmetic error. 0: the open-loop time constant $R_{out}C_1C_2/(C_1+C_2) = 1.67$ ns given as the answer with a correct description otherwise, or correct method with a significant slip. -2 (asserted as fact): load taken as $C_1 + C_2$ or $C_1$ alone with a wrong value, feedback factor taken as 1 or 2 with a wrong τ, or τ computed as $R_{out}C$ ignoring the feedback while claiming it is the closed-loop value. The unshown bias network of X is taken as an ac open circuit (high-impedance bias, as usual for a capacitive-feedback amplifier); an answer that says so, or notes that a finite bias impedance would add a low-frequency pole, still earns +2 with 91 ps. Treating the gate of $M_2$ (node X) as an ac ground contradicts the figure and the stated feedback configuration, where X is driven by the $C_1$–$C_2$ divider from $V_{out}$: an answer that does so as its main result (load $C_1$, τ = $R_{out}C_1$ ≈ 3.3 ns, or the 1.67-ns open-loop value) has misread the topology (−2).
