# Golden Solution - A098

## Reference answer

$V_{REF} = V_T$ (the threshold voltage of M1), independent of $I$ and of the supply.

- Let $V_{ON} = \sqrt{2I/(4K')}$ be the overdrive of a $W/L = 4$ device at current $I$. M1 and M3 carry $I$: $V_{GS1} = V_{GS3} = V_T + V_{ON}$, so the gate of M3 and M4 is at $2V_T + 2V_{ON}$.
- M2 has M1's gate voltage and size, so (saturated) it carries $I$; M4 is in series with it and also carries $I$, but with $W/L = 1$ its overdrive is $\sqrt{2I/K'} = 2V_{ON}$, so $V_{GS4} = V_T + 2V_{ON}$.
- $V_{REF} = V_{G4} - V_{GS4} = 2V_T + 2V_{ON} - V_T - 2V_{ON} = V_T$.
- Validity: M2 saturated requires $V_{DS2} = V_T \ge V_{ON}$, i.e. $I \le 2K'V_T^2$ (≈ 108 µA with $K'$ = 110 µA/V², $V_T$ = 0.7 V). With body effect included, $V_{REF} = V_{T1} + V_{T3} - V_{T4}$, slightly above $V_T$.

## Grading notes

+2: $V_{REF} = V_T$ (of M1), derived from the equal currents and the 2× overdrive of the 1/1 device M4. +1: correct result with a gap in the derivation (e.g. M2's current asserted), or an expression that reduces to $V_T$ but is left unsimplified. 0: correct setup with an algebra slip giving a current-dependent result. −2 (asserted as fact): $V_{REF} = V_T + V_{ON}$, $2V_T$, or $V_{DD}/2$, or $V_{REF}$ said to depend on $\sqrt{I}$ in the final answer.
