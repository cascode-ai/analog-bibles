# Golden Solution - R260

## Reference answer

$I_{out} \approx I_{REF}\dfrac{1+\lambda(V_{GS1}-V_{GS4})}{1+\lambda V_{GS1}}$, i.e., $I_{out} - I_{REF} \approx -\dfrac{\lambda V_{GS4}}{1+\lambda V_{GS1}}I_{REF} \approx -\lambda V_{TH}I_{REF}$: about 6–7% low for λ = 0.1 V⁻¹.

- $V_{b1} = V_{GS0} + V_{GS1}$; the gate of $M_3$ is at $V_{b1} - V_{GS4}$; $V_{DS2} = V_{b1} - V_{GS4} - V_{GS3}$.
- With γ = 0 and identical devices at (nearly) the same current, $V_{GS3} = V_{GS0}$, so $V_{DS2} = V_{GS1} - V_{GS4}$. A wide $M_4$ at small current has $V_{GS4} \approx V_{TH}$, hence $V_{DS2} \approx V_{GS1} - V_{TH}$ — the edge of saturation, as intended.
- $M_1$ (diode) has $V_{DS1} = V_{GS1}$. Same $V_{GS}$, different $V_{DS}$: $I_{out}/I_{REF} = (1+\lambda V_{DS2})/(1+\lambda V_{DS1})$, a deficit of $\lambda V_{GS4}/(1+\lambda V_{GS1}) \approx 0.07/1.09 \approx 6.4\%$ for $V_{GS1} \approx 0.9$ V.
- Example: $I_{REF}$ = 100 μA, $M_0$–$M_3$ = 20/0.5, $M_4$ = 200/0.5 at 5 μA → $V_{DS2}$ = 0.186 V, $I_{out}$ = 93.6 μA (−6.4%).

## Grading notes

+2: $V_{DS2} \approx V_{GS1} - V_{GS4} \approx V_{GS1} - V_{TH}$ versus $V_{DS1} = V_{GS1}$, giving $I_{out}$ lower than $I_{REF}$ by ≈ $\lambda V_{TH}/(1+\lambda V_{GS1})$, i.e., about 6–7% (5–8% accepted). +1: correct mechanism and sign, magnitude given only as λ·ΔV without the identification ΔV ≈ $V_{TH}$, or a factor-of-1.5 slip. 0: correct $V_{DS2}$ but mismatch not quantified. -2 (asserted as fact): zero mismatch (claiming the cascode removes channel-length modulation error entirely), $I_{out}$ higher than $I_{REF}$, or a mismatch based on $V_{GS}$ differences of tens of percent.
