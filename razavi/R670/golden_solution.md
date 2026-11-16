# Golden Solution - R670

## Reference answer

The subthreshold slope $S = 2.3\,\zeta\,kT/q$ does not scale. At best it improves slightly (ζ moves toward 1), and it never falls below ≈ 60 mV/dec at room temperature. Meanwhile $V_{TH}$ is divided by α, so the off current rises exponentially.

How each parameter scales:
- $W/L$: unchanged (both divided by α).
- μ: unchanged ideally (in practice lower, since the higher doping increases impurity scattering).
- $C_d = \sqrt{\epsilon_{si}qN_{sub}/(4\phi_B)}$: $N_{sub}$ rises by α while $\phi_B$ grows only by $(kT/q)\ln\alpha$, so $C_d$ rises by about √α (slightly less). It does not rise by α, because the surface potential at threshold ($2\phi_B$) does not scale.
- $C_{ox}$: rises by α.
- $\zeta = 1 + C_d/C_{ox}$: $C_d/C_{ox}$ falls by about √α, so ζ decreases somewhat toward 1 (e.g., 1.5 → 1.35 for α = 2). If all depletion widths are assumed to scale ideally ($C_d$ × α), ζ stays constant.
- $V_T = kT/q$: unchanged, since the temperature does not scale.
- $V_{GS}$, $V_{TH}$, $V_{GS} - V_{TH}$, $V_{DS}$: all divided by α. The factor $1 - \exp(-V_{DS}/V_T)$ stays ≈ 1 as long as $V_{DD}/\alpha$ is still many $V_T$; it becomes $V_{DS}$-dependent once the supply approaches a few $V_T$.
- Prefactor $\mu C_d(W/L)V_T^2$: rises by ≈ √α.

Subthreshold slope:
- $S = \zeta V_T/\log_{10}e = 2.3\,\zeta\,kT/q$ per decade. Since $kT/q$ is fixed and ζ ≥ 1, S stays roughly constant (≈ 60–100 mV/dec) instead of shrinking by α like every other voltage.
- The exponent $(V_{GS}-V_{TH})/(\zeta V_T)$ therefore shrinks by α, and at $V_{GS} = 0$ the off current $\propto \exp[-V_{TH}/(\zeta V_T)]$ rises exponentially. For example, $V_{TH}$: 0.7 → 0.35 V with ζ ≈ 1.5 raises it by about $e^{9} \approx 10^4$.
- This non-scalability of S is what limits the scaling of $V_{TH}$, and with it the supply voltage.

## Grading notes

- +2: correct scaling of W/L (constant), the voltages (÷ α), $C_{ox}$ (× α), $C_d$ (increases: √α from the formula, or α if ideal depletion scaling is assumed, both accepted), ζ (constant or slightly smaller) and $V_T$ (constant). Conclusion: S does not scale and stays ≈ constant, bounded by $2.3kT/q$ ≈ 60 mV/dec. Noting that, with $V_{TH}/\alpha$, the subthreshold (off) current rises exponentially (or that S worsens relative to the scaled supply) is a plus but not required, since the question asks only what happens to the slope.
- +1: the S conclusion and its reason ($kT/q$ fixed) right, but the parameter list incomplete.
- 0: parameters mostly right, but the S conclusion missing or vague.
- -2 (asserted as fact): S claimed to scale down by α (or to improve proportionally), $V_T = kT/q$ claimed to scale, or W/L claimed to change.
