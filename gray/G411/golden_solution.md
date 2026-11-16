# Golden Solution - G411

## Reference answer

$V_{OC} \approx 0.6$ V.

- In steady state no charge is transferred from $C_1$ to $C_2$, so the charge on $C_1$ is the same in both phases: $C_1(V_{CM} - V_{CSBIAS}) = C_1(V_{OC} - V_{cmc})$, i.e. $V_{CM} - V_{OC} = V_{CSBIAS} - V_{cmc}$.
- Initially $0.5 - 0.5 = -1 - V_{cmc}$ → $V_{cmc} = -1$ V, which is the CMC bias the op amp needs to balance its currents.
- With $|a_{cmc}| \gg 1$, $V_{cmc}$ hardly moves (a tiny change in $V_{cmc}$ produces a large change in $V_{OC}$), so it stays ≈ −1 V.
- New: $0.5 - V_{OC} = -1.1 - (-1)$ → $V_{OC} = 0.6$ V. The 0.1-V error in $V_{CSBIAS}$ appears directly as a CM output shift.

## Grading notes

+2: 0.6 V with the charge-balance relation and $V_{cmc}$ ≈ constant. +1: 0.6 V with sketchy reasoning. 0: right relation but $V_{cmc}$ assumed to follow $V_{CSBIAS}$, giving 0.5 V with a hedge, or an arithmetic slip. −2 (asserted as fact): 0.5 V (claim that $V_{OC}$ is independent of $V_{CSBIAS}$), 0.4 V (wrong sign), or an answer scaled by $C_1/C_2$ (e.g. 0.52 V).
