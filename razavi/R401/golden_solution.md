# Golden Solution - R401

## Reference answer

$Z_{in} = \dfrac{1}{g_{m1}} + \dfrac{1}{sC_2}$ (without body effect; with it, $\dfrac{1}{g_{m1}+g_{mb1}} + \dfrac{g_{m1}}{(g_{m1}+g_{mb1})sC_2}$); $\quad Z_{out} = \dfrac{C_1+C_2}{C_1(g_{m1} + sC_2)} = \dfrac{1 + C_2/C_1}{g_{m1}}\ \Big\|\ \dfrac{1}{sC_1C_2/(C_1+C_2)}$, i.e. ≈ $(1 + C_2/C_1)/g_{m1}$ at low frequencies.

- Topology: $M_1$ is common-gate with the input at its source; the divider applies $V_P = V_{out}C_1/(C_1+C_2)$ to its gate, so the output voltage is returned in series with the input (series–shunt), which raises $Z_{in}$.
- Open loop (gate at ac ground): $Z_{in,open} = 1/g_{m1}$ (λ = 0); the output is loaded only by $C_s = C_1C_2/(C_1+C_2)$; loop gain $T = g_{m1}\dfrac{C_1}{C_1+C_2}\cdot\dfrac{1}{sC_s} = \dfrac{g_{m1}}{sC_2}$. Closed loop: $Z_{in} = (1/g_{m1})(1 + T)$.
- $Z_{out}$ (input/source grounded): $I_X = g_{m1}v_XC_1/(C_1+C_2) + sC_sv_X$; open-loop resistance ∞ reduced to $1/(g_{m1}\beta)$ with $\beta = C_1/(C_1+C_2)$.

## Grading notes

+2: both impedances equivalent to the reference, with or without the body effect (either is accepted here since the source dc level is not given), the output capacitive branch included or explicitly neglected at low frequency. +1: one impedance right, the other with a minor slip. 0: one right, other wrong. -2 (asserted as fact): $Z_{in} = 1/g_{m1}$ unchanged by the feedback or reduced by it, the divider ratio inverted ($(1 + C_1/C_2)/g_{m1}$ for $Z_{out}$), or the circuit actually analysed as a common-source stage (input applied at the gate, leading to wrong impedances). A wrong name only (e.g. a heading calling it "common-source") while the analysis uses the source as the input port and both impedances are right is a trivial naming slip: +2, or +1 at most if it is repeated as a claim in the body.
