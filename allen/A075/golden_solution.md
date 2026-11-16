# Golden Solution - A075

## Reference answer

About 127 ps ($\approx 4.6\,r_{ON}C_1$, using the worst-case ON resistance).

- Near the end of the charging, both channel terminals approach 2 V: $V_{GS} = 3$ V, $V_{SB} = 2$ V, $V_T = 1.023$ V, so the (largest) ON resistance is $r_{ON} = 1/[110\ \mu \times 5 \times (3 - 1.023)] = 920\ \Omega$.
- $\tau = r_{ON}C_1 = 920 \times 30\ \mathrm{fF} = 27.6$ ps; reaching 99% of the final value takes $\tau\ln(100) = 4.6\tau \approx 127$ ps.
- Earlier in the transient the resistance is lower (larger $V_{GS}$, smaller $V_T$), so a large-signal integration of $C_1\,dv/dt = i_D$ gives a slightly shorter time, ≈ 114 ps; the worst-case-$r_{ON}$ estimate is the conservative design value. (The 10-ns edges of the pulse are additional.)

## Grading notes

+2: 110–135 ps, from $4.6\,r_{ON}C_1$ with the worst-case $r_{ON}$ ≈ 0.9 kΩ (body effect at $V_{SB} = 2$ V), or from a correct large-signal integration. +1: body effect neglected ($r_{ON}$ ≈ 790 Ω, ≈ 109 ps) with otherwise correct reasoning, or 5τ (≈ 138 ps) used instead of ln(100)τ. 0: correct $r_{ON}$ but a wrong settling multiple (e.g. τ alone or 2.3τ). −2 (asserted as fact): times in the nanosecond range from a wrong formula (or the 10-ns gate edge given as the answer), or the best-case resistance at the start of charging ($V_{GS} = 5$ V, $V_{SB} = 0$: ≈ 420 Ω, ≈ 58 ps) presented as the time needed.
