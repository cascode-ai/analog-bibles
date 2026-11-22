# Golden Solution - grsim-06-22

## Reference answer

Hand design ($L_{eff} = 1 - 2(0.09) = 0.82\ \mu$m; λ ≈ 0.024 V⁻¹ (n), 0.049 V⁻¹ (p)):

Overdrive from the swing:
- The output can rise to $V_{DD} - V_{SD4} - |V_{ov}|$, where $V_{SD4} = V_{DD} - V_{BIAS2} = |V_{ov}| + 0.1$ V, and fall to $-V_{SS} + (V_{ov} + 0.1) + V_{ov}$.
- Swing $= 3.3 - 4|V_{ov}| - 0.2 \ge 2.5$ V gives $|V_{ov}| \le 0.15$ V. Choose 0.15 V for all devices; the output range is then ±1.25 V.

Sizes ($W/L = 2I/(\mu C_{ox}V_{ov}^2)$, effective):
- n-channel at 100 μA: 45.8 ($M_{1A}$, $M_{2A}$, $M_{21}$, $M_{22}$, $M_{33}$, $M_{34}$).
- n-channel at 200 μA: 91.6 ($M_{11}$, $M_{12}$, $M_{25}$).
- p-channel at 100 μA: 137 ($M_1$, $M_2$, $M_3$, $M_4$, $M_{3A}$, $M_{4A}$, $M_{23}$, $M_{24}$, $M_{31}$, $M_{32}$).
- p-channel at 200 μA: 275 ($M_5$, $M_{35}$).
- Bias circuit with 25 μA per branch: n-channel 11.5 ($M_{101}$–$M_{104}$, $M_{109}$, $M_{110}$, $M_{113}$), p-channel 34.3 ($M_{105}$, $M_{107}$, $M_{108}$, $M_{111}$, $M_{112}$).

Triode devices:
- $V_{SD106}$ must equal $|V_{ov}| + 0.1 = 0.25$ V with $M_{105}$ saturated at 0.15 V: $\tfrac12(W/L)_{105}V_{ov}^2 = (W/L)_{106}[V_{ov}V_{DS} + V_{DS}^2/2]$, so $(W/L)_{106} \approx 0.164(W/L)_{105} \approx 5.6$.
- Likewise $(W/L)_{114} \approx 0.164\times11.5 \approx 1.9$. Simulation fine-tunes both.
- Bias voltages: $V_{BIAS1} = V_{DD} - 0.85$ V, $V_{BIAS2} = V_{DD} - 0.25$ V, $V_{BIAS3} = -V_{SS} + 0.25$ V, $V_{BIAS4} = -V_{SS} + 0.85$ V.

Gain estimate:
- $G_m = g_{m1} = 1.33$ mS.
- Auxiliary gains $A_1 \approx A_2 \approx g_m(r_{on}\parallel r_{op}) \approx 1.33\ \mathrm{mS}\times137\ \mathrm{k\Omega} \approx 180$.
- $R_{out,M4A} \approx (A_1+1)g_{m4A}r_{o4A}r_{o4} \approx 181\times56\ \mathrm{M\Omega} \approx 10\ \mathrm{G\Omega}$, and similarly $R_{out,M2A} \approx (A_2+1)g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12}) \approx 10\ \mathrm{G\Omega}$.
- $A_v \approx 1.33\ \mathrm{mS}\times5\ \mathrm{G\Omega} \approx 7\times10^6$, versus ≈ $4\times10^4$ without the active cascodes. The simulated value will be lower (order $10^6$), limited by second-order effects.

Caveat at the A1 input pair:
- The $A_1$ inputs sit at $V_{BIAS2} = V_{DD} - 0.25$ V and its output (gate of $M_{4A}$) at $V_{DD} - 1.1$ V. The gate-drain voltage of $M_{22}$ is therefore $|V_{tp}| + |V_{ovp}| = 0.85$ V. $M_{22}$ stays active only because body effect raises its threshold to ≈ 0.92 V ($V_{SB} \approx 2.2$ V, $2\phi_F \approx 0.66$ V), leaving ≈ 70 mV by this estimate; the body effect of $M_{3A}$/$M_{4A}$ lowers the $A_1$ output by a further ≈ 30 mV, so in simulation $M_{22}$ is saturated by only ≈ 25 mV. Without body effect the hand analysis would put it at the triode edge. With equal overdrives the required 100-mV margin therefore cannot be met for $M_{22}$ (or $M_{32}$); the specification is not fully consistent.
- The $A_2$ pair $M_{31}$/$M_{32}$ is in the same situation with p-channel devices.

With $V_{t0} = 0.6$ V / −0.8 V:
- $M_{22}$'s gate-drain voltage rises to $|V_{tp}| + |V_{ovp}| \approx 0.95$ V, while its threshold with body effect is only ≈ 0.8 V. $M_{21}$/$M_{22}$ enter triode, the gain of $A_1$ collapses, and the gain boost of $M_{3A}$/$M_{4A}$ is lost.
- The op-amp gain falls by roughly the factor $A_1$, to the order of $10^5$ (set by the p-side cascode, ≈ $g_{m1}\cdot2g_mr_o^2$). The $A_2$ side improves slightly (its gate-drain voltage drops to $V_{tn} + V_{ovn} = 0.75$ V, below $|V_{tp}| \approx 1.0$ V).

## Grading notes

A correct simulation shows:
- with $V_{t0} = \pm0.7$ V and γ = 0.25, all transistors except $M_{106}$/$M_{114}$ saturated, with the 100-mV margins everywhere except at $M_{22}$/$M_{32}$, which with equal overdrives are saturated by only ≈ 20–30 mV (an answer that reports this is correct) (after tuning $W_{106}$, $W_{114}$ to about 1/6 of $W_{105}$, $W_{113}$), an output swing ≥ 2.5 V p-p and a very high dc gain (≳ $10^6$);
- with $V_{t0} = 0.6/-0.8$ V, a large gain drop (one to two orders of magnitude), traced to the $A_1$ input pair leaving saturation.
+2: sizes consistent with $|V_{ov}| = 0.15$ V and the given currents, triode-device sizing, gain estimate of the right order, and the correct explanation of the threshold change. +1: design right but the threshold-change explanation vague (e.g. "headroom is reduced") without identifying the $A_1$ input pair. 0: design with a wrong overdrive (e.g. 0.2 V, violating the swing with margins) but otherwise consistent. -2: sizes that contradict the currents/overdrives by large factors, or the claim that the gain increases with the new thresholds.
