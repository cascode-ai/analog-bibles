# Golden Solution - R671

## Reference answer

50 Ω, unchanged.
- With λ = γ = 0, the input impedance of a common-gate stage is $1/g_m$, whatever the load.
- $g_m = \mu C_{ox}(W/L)(V_{GS}-V_{TH}) \to \mu(\alpha C_{ox})\dfrac{W/\alpha}{L/\alpha}\cdot\dfrac{V_{GS}-V_{TH}}{\alpha} = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$: unchanged. Equivalently, in $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$, $C_{ox}$ rises by α and $I_D$ falls by α.
- So $R_{in} = 1/g_m$ stays 50 Ω, while the bias current (and the power) drop.

## Grading notes

- +2: 50 Ω, with the argument that $g_m$ is invariant under ideal scaling.
- +1: 50 Ω with a sketchy justification.
- 0: correct $1/g_m$ and scaling method, with a slip that changes the number.
- -2 (asserted as fact): 50/α, 50α, 50√α or any other changed value, or an input impedance depending on the load with λ = 0.
