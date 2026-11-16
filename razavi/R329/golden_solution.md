# Golden Solution - R329

## Reference answer

The specification cannot be met with $V_{DD} = 3$ V: it forces $|V_{GS2} - V_{TH2}| \approx 3.05$ V, so the allowed output range has negative width (formally $V_{DD} - V_{ov1} - |V_{ov2}| \approx -0.18$ V). There is no usable output swing; the circuit cannot even be biased with both devices saturated.

- $\overline{V_{n,in}^2} = 4kT\gamma\left(\dfrac{1}{g_{m1}} + \dfrac{g_{m2}}{g_{m1}^2}\right)$, so the ratio of the rms contributions is $\sqrt{g_{m2}/g_{m1}} = 1/5$, i.e. $g_{m2} = g_{m1}/25$.
- $g_{m1} = \sqrt{2(134\ \mu)(100)(0.1\ \mathrm{m})} = 1.64$ mS, $V_{ov1} = 2I_D/g_{m1} = 0.122$ V.
- $g_{m2} = 65.5\ \mu$S, so $|V_{ov2}| = 2I_D/g_{m2} = 25V_{ov1} = 3.05$ V and $(W/L)_2 = g_{m2}^2/(2\mu_pC_{ox}I_D) \approx 0.56$.
- Both saturated requires $V_{ov1} \le V_{out} \le V_{DD} - |V_{ov2}|$: $0.122\ \mathrm{V} \le V_{out} \le -0.05\ \mathrm{V}$, impossible. Equivalently $V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| \approx -0.85$ V would lie below ground. A supply above ≈ 3.2 V would be needed for zero swing.
- (For comparison only: if the 1/5 applied to noise power, $g_{m2} = g_{m1}/5$, $|V_{ov2}| = 0.61$ V and the swing would be ≈ 2.27 V.)

## Grading notes

+2: $g_{m2} = g_{m1}/25$ from the rms (not power) ratio, $|V_{ov2}| \approx 3.05$ V (±5%) with $V_{ov1} \approx 0.12$ V, and the conclusion that the requirement cannot be met / no output swing is possible with a 3-V supply (formal swing ≈ −0.18 V). +1: correct numbers and the negative swing value, but infeasibility not stated in words; or a small numerical slip that does not change the conclusion. 0: correct noise expression and ratio but the overdrive/swing step missing or left open. -2 (asserted as fact): a positive swing reported as achievable (e.g., ≈ 2.27 V from applying 1/5 to the noise power, or a swing that ignores $V_{ov2}$), $g_{m2} = g_{m1}/5$, or the PMOS noise term written as $4kT\gamma/g_{m2}$.
