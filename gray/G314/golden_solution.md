# Golden Solution - G314

## Reference answer

$C_{L,\max} ≈ 10$ pF (using the usual design criterion $|p_2| = \omega_u ≈ g_{m1}/C_c$); an exact two-pole crossover calculation allows ≈ 14 pF.

- $L_{\text{eff}} = 8 - 0.6 - 1 = 6.4$ μm; all devices 100/8 have $W/L_{\text{eff}} = 15.6$ (except $M_3$, $M_4$).
- Currents: $M_5$, $M_7$ mirror the 20-μA reference (same size as $M_8$); $M_1$, $M_2$ carry 10 μA; $M_6$ carries 20 μA.
- $g_{m1} = \sqrt{2 \times 30.2\text{ μA/V}^2 \times 15.6 \times 10\text{ μA}} = 97$ μA/V; $g_{m6} = \sqrt{2 \times 60.4\text{ μA/V}^2 \times 15.6 \times 20\text{ μA}} = 194$ μA/V; $g_{m6}/g_{m1} = 2.0$.
- With the zero at infinity and parasitics neglected: dominant pole $p_1 ≈ -1/(g_{m6}R_1R_2C_c)$, unity-gain frequency $\omega_u ≈ g_{m1}/C_c = 19.4$ Mrad/s; the load creates the nondominant pole $p_2 ≈ -g_{m6}/C_L$ (the pole $-1/(R_ZC_1)$ is neglected as instructed).
- 45° phase margin: $|p_2| = \omega_u$ → $C_L = C_c\,g_{m6}/g_{m1} = 5\text{ pF} \times 2.0 = 10$ pF.
- Exact two-pole check: the loop gain magnitude at $\omega = |p_2|$ is $(g_{m1}/C_c|p_2|)/\sqrt{2}$; making the true crossover coincide with $|p_2|$ gives $C_L = \sqrt{2}\,C_c g_{m6}/g_{m1} ≈ 14$ pF.

## Grading notes

+2: $g_{m6}/g_{m1}$ ≈ 2, $p_2 ≈ -g_{m6}/C_L$, and $C_{L,\max}$ ≈ 10 pF (book criterion, accept 9–11 pF) or ≈ 14 pF (exact crossover, accept 13–15 pF) with the criterion stated. +1: correct method with a numerical slip below 20% in a transconductance. 0: correct method but a wrong current (e.g. $M_6$ at 10 μA) giving a wrong ratio. −2 (asserted as fact): $p_2$ taken as $g_{m1}/C_L$ or $1/(R_2C_L)$, the RHP zero reintroduced to limit $C_L$, or a claim that the load capacitance does not affect stability.
