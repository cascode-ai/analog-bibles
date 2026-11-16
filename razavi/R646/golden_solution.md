# Golden Solution - R646

## Reference answer

Each diode can add at most ≈ 4.57 pF (to its own node), for a total of 5.07 pF per node.

Derivation:
- $V_{cont}$ is an ac ground, so each node's tank is $L_P$ with $C_{par} + C_D$ to ground: $\omega = 1/\sqrt{L_P(C_{par} + C_D)}$.
- $C_{tot} = 1/(\omega^2L_P) = 1/[(2\pi \times 10^9)^2 \times 5\times10^{-9}] = 5.07$ pF → $C_{D,max} = 5.07 - 0.50 = 4.57$ pF.
- Differential view: $2L_P = 10$ nH resonates with half of each node's capacitance (2.53 pF), giving the same result. Any larger diode capacitance would put the frequency below 1 GHz.

## Grading notes

+2: 4.57 pF (±3%) per diode (or the equivalent differential statement: 2.28 pF for $D_1$ and $D_2$ in series between X and Y). +1: total 5.07 pF per node found but the 500 fF not subtracted or a small slip. 0: correct method with an arithmetic or units slip in the final value. -2 (asserted as fact): $2L_P$ used with the single-ended capacitance (≈ 2.03 pF), rad/s and Hz confused, or the diodes treated as in series with the 500 fF.
