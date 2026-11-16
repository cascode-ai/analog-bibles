# Golden Solution - G263

## Reference answer

Increasing the 200-Ω output load resistors increases $T$ (decreasing them decreases $T$), less than proportionally.

Reason: the feedback factor $f = 50/550$ does not depend on them, while the forward gain is proportional to the total load at the collector of $Q_3$, $R_{C3}\|(R_E + R_F) = 200\|550 = 147$ Ω. Because $R_E+R_F = 550$ Ω is in parallel, $T$ grows sublinearly with $R_{C3}$ and saturates toward the value set by 550 Ω (nominal $T \approx 10$; +20% in $R_{C3}$ gives ≈ +14% at fixed bias). (The 200-Ω resistors also affect the dc current of $Q_3$/$Q_4$, which tempers the increase somewhat, same direction.)

## Grading notes

+2: $T$ increases with the load resistors, because $a$ is proportional to $R_{C3}\|(R_E+R_F)$ while $f$ is unchanged; noting the sublinear dependence is expected for full credit. +1: correct direction and reason without the parallel-loading remark. 0: vague statement that "T depends on the load". −2 (asserted as fact): $T$ decreases with larger load resistors, or the change in $T$ attributed mainly to a change in the feedback factor $f$. A remark that $f$ is unchanged or only weakly dependent on the load, with the change in $T$ attributed to $a$, is not a critical error. Taking the output loading as $R_{C3}\|R_F$ (≈ 500 Ω, the return-ratio view in which $Q_1$'s emitter is nearly a short) instead of $R_{C3}\|(R_E+R_F)$ (550 Ω) is acceptable.
