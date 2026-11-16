# Golden Solution - R406

## Reference answer

$|Z_{in}|$ is small at low frequencies (≈ $2/(G_{m1}G_{m2}R_0)$), rises with frequency above $1/(R_0C_1)$ like an inductor, and levels off at $2R_0$ above ≈ $G_{m1}G_{m2}R_0/C_1$; $Z_{in} = 2R_0(1 + sR_0C_1)/(1 + G_{m1}G_{m2}R_0^2 + sR_0C_1)$.

Intuition:
- Shunt feedback at the input: at low frequencies the loop gain $G_{m1}G_{m2}R_0^2$ is large, and the current returned by $G_{m1}$ almost cancels any input current, so the input node barely moves: low $Z_{in} = 2R_0/(1 + T)$.
- As frequency rises above $1/(R_0C_1)$, $C_1$ shunts the outputs of $G_{m2}$, the loop gain falls ∝ 1/ω, the feedback weakens, and $Z_{in}$ climbs toward its open-loop value $2R_0$.
- Equivalently, the two transconductors in a loop form a gyrator, $Z_{in} \approx 1/(G_{m1}G_{m2}Z_{load})$, which turns the load capacitance into an inductance $L = C_1/(G_{m1}G_{m2})$ per side (in series with $1/(G_{m1}G_{m2}R_0)$, all in parallel with $R_0$): an active inductor.

## Grading notes

+2: the rising (inductive) $|Z_{in}|$ between a low plateau and $2R_0$, explained by the loop gain falling as $C_1$ shunts the output of $G_{m2}$, and/or by the gyrator (active-inductor) picture with $L \propto C_1/(G_{m1}G_{m2})$. +1: correct trend with only one vague reason; or a correct trend and explanation whose plateau values are off only by the factor of two between the single-ended and differential definitions (e.g., $R_0/(1+T)$ and $R_0$ instead of $2R_0/(1+T)$ and $2R_0$). 0: correct trend without an explanation, or a correct explanation with plateaus of the wrong kind (e.g., $|Z_{in}|$ tending to zero or infinity). -2 (asserted as fact): $Z_{in}$ falling with frequency (capacitive input), $C_1$ reflected to the input as a capacitance, or the feedback claimed to be positive.
