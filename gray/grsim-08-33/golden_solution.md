# Golden Solution - grsim-08-33

## Reference answer

(a) With $V_i = 0$ the non-inverting input is grounded, so the $R_1$ side of the × sees $R_1\|R_i = 999$ Ω to ground, and the $R_2$ side leads through $R_2 + R_o = 5.1$ kΩ to the source $a_v(0 - v_-) = -a_vv_-$.
- Current injection: the × node is the inverting-input node ($v_-$). $i_d = v_-/(R_1\|R_i)$, $i_m = (-a_vv_- - v_-)/(R_2+R_o)$, so $\mathcal{R}'_i = (1+a_v)\dfrac{R_1\|R_i}{R_2+R_o} = 10{,}001\times999/5100 = 1959$.
- Voltage injection: $v_d = v_-$; the current $v_d/(R_1\|R_i)$ flows from the $R_2$ side: $(-a_vv_d - v_m)/(R_2+R_o) = v_d/(R_1\|R_i)$, so $\mathcal{R}'_v = a_v + \dfrac{R_2+R_o}{R_1\|R_i} = 10{,}005$.
- $\dfrac{1}{1+\mathcal{R}} = \dfrac{1}{1960} + \dfrac{1}{10{,}006} = 6.101\times10^{-4}$ → $\mathcal{R} = 1638$.
(b) Direct: a test voltage at the controlled source drives $R_o + R_2$ into $R_1\|R_i$: $\mathcal{R} = a_v\dfrac{R_1\|R_i}{R_o + R_2 + R_1\|R_i} = 10^4\times\dfrac{999}{6099} = 1638$. Identical to (a) (the combination formula is exact for this single-loop circuit).
(c) An ac simulation of the two injected circuits should give $\mathcal{R}'_i \approx 1959$ and $\mathcal{R}'_v \approx 10{,}005$ (frequency-independent here since the model has no capacitors), and the combined $\mathcal{R} \approx 1638$, matching (a) and (b).

## Grading notes

Correct results: $\mathcal{R}'_i$ ≈ 1959, $\mathcal{R}'_v$ ≈ 10,005, $\mathcal R$ ≈ 1638 from the combination and from the direct calculation (agreement to rounding), and a simulation reproducing the same values (±1%). Sign errors (negative $\mathcal R'$ values), $\mathcal{R}'_v = a_v$ exactly with the resistive term dropped and asserted exact (minor), or a combined $\mathcal R$ differing from the direct one indicate errors.
