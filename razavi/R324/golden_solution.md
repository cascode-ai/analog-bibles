# Golden Solution - R324

## Reference answer

Proof:
1. With the main input set to zero, the rest of the circuit (everything except $C_1$) contains only resistors and controlled sources. Seen from the two terminals A, B of $C_1$, it is a one-port with no independent sources and no energy storage, so its port relation is a frequency-independent resistance: $V_X = R_1I_{rest}$, where $R_1$ is, by definition, the resistance seen by $C_1$. Controlled sources may make $R_1$ differ from any physical resistor, or even make it negative, but it is still a real constant.
2. The test current $I_X$ splits between $C_1$ and that resistance, so $\dfrac{V_X}{I_X}(s) = R_1\Big\|\dfrac{1}{C_1s} = \dfrac{R_1}{1 + R_1C_1s}$, with a single pole at $s = -1/(R_1C_1)$, i.e. $|\omega_p| = 1/(R_1C_1)$.
3. This pole is the circuit's natural frequency: with all independent sources zero, the only possible free response is $C_1\,dV_X/dt = -V_X/R_1$, i.e. $V_X \propto e^{-t/(R_1C_1)}$. Any transfer function of the circuit (from the main input to any output) has as its poles the natural frequencies of the source-free network, since its denominator is the determinant of the nodal equations, which does not depend on where the excitation is applied or what is taken as output. Hence the main transfer function has the same, single pole $1/(R_1C_1)$ (barring a pole–zero cancellation).

## Grading notes

+2: argues that the network seen by $C_1$ (input zeroed) is purely resistive, hence $V_X/I_X = R_1\|1/(C_1s)$ with pole $1/(R_1C_1)$, and justifies that the main transfer function shares this pole (natural frequency / common determinant of the circuit equations, independent of excitation point). +1: the impedance step proven, the "same pole" part only asserted. 0: just restates $\tau = R_1C_1$ without the parallel-combination argument. -2 (asserted as fact): claims the pole depends on the input source location or on the output chosen, or derives a pole $1/(R_1C_1)$ with $R_1$ computed with the main input left active (not zeroed), stated as the general rule.
