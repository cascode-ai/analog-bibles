# Golden Solution - A147

## Reference answer

$|V_{OS}|_{\max} \approx 26$ mV (0.0263 V), independent of $I_{SS}$.

- Assumptions: square-law devices, λ neglected. $\beta_1 = \beta_2 = 10^{-5}$ A/V² and $\beta_3 = \beta_4 = 10^{-6}$ A/V², all deviating from nominal by the same fraction (±5 %). Equal fractional changes keep $\beta_3/\beta_1 = \beta_4/\beta_2 = 0.1$ exactly, so they cause no offset. The thresholds vary independently within 1 ± 0.01 V. $V_{OS}$ is the input that makes the two diode voltages, and hence $v_{o1}$ and $v_{o2}$, equal.
- With $v_{o1} = v_{o2}$ the loads have the same $V_{SG}$: $I_1 = \frac{\beta_3}{2}(V_{SG} - |V_{T3}|)^2$ and $I_2 = \frac{\beta_4}{2}(V_{SG} - |V_{T4}|)^2$. Then $V_{GS1} - V_{T1} = \sqrt{2I_1/\beta_1} = \sqrt{\beta_3/\beta_1}(V_{SG} - |V_{T3}|)$, and similarly for M2.
- $V_{OS} = V_{GS1} - V_{GS2} = (V_{T1} - V_{T2}) + \sqrt{\beta_3/\beta_1}\,(|V_{T4}| - |V_{T3}|)$. $V_{SG}$, and hence $I_{SS}$, drops out because $\beta_3/\beta_1 = \beta_4/\beta_2$.
- Worst case: $V_{T1} - V_{T2} = 0.02$ V and $|V_{T4}| - |V_{T3}| = 0.02$ V with the same sign: $V_{OS} = 0.02 + \sqrt{0.1}(0.02) = 0.02 + 0.0063 = 0.0263$ V.

## Grading notes

+2: ≈ 26 mV (25–27 mV) with the load term weighted by $\sqrt{\beta_3/\beta_1} = g_{m3}/g_{m1} \approx 0.316$, and a stated recognition that the equal fractional β changes cause no offset (hence no dependence on $I_{SS}$). +1: the right structure with a slip (e.g. the load term weighted by 0.1 instead of 0.316, giving 22 mV), or only the input-pair term (20 mV) with the load term explicitly neglected. 0: the tolerances read as 0.01 V differences (≈ 13 mV) with otherwise correct structure; or a result that adds an independent β-mismatch term under an assumed $I_{SS}$, contradicting the stated equal Δβ/β, but with a correct threshold part. −2 (asserted as fact): the load term weighted by $\sqrt{10}$ (giving ≈ 83 mV), or an offset in volts from treating β tolerances as threshold changes.
