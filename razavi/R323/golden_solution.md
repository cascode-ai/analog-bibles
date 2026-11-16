# Golden Solution - R323

## Reference answer

For differential signals the tail node is a virtual ground and the load gates stay at ac ground, so the circuit reduces to a CS half circuit with source resistance $R_S$, load $R_L = r_{O1}\|r_{O3}$ and output capacitance $C_L$:
$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + [R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)]s + 1}$$
with $\xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L$ and $R_L = r_{O1}\|r_{O3}$ ($V_{out} = V_{out1} - V_{out2}$, $V_{in} = V_{in1} - V_{in2}$; the same expression holds per half).
- DC gain $-g_{m1}(r_{O1}\|r_{O3})$; right-half-plane zero at $g_{m1}/C_{GD1}$.
- Because $R_L$ is large, the output pole is usually dominant: $\omega_{p1} \approx 1/\{R_L(C_L + C_{GD1}) + R_S[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}]\} \approx 1/[(r_{O1}\|r_{O3})C_L]$ when $C_L$ dominates.
- The second pole is $\omega_{p2} \approx \dfrac{R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)}{R_SR_L\xi}$.
- Note that $C_{GD1}$ is Miller-multiplied by the large gain $1 + g_{m1}R_L$ only at frequencies below the output pole, so the input-node estimate based on the low-frequency gain is pessimistic.

## Grading notes

+2: identifies the differential half circuit (tail at ac ground, PMOS gates at ac ground) and gives the CS transfer function with $R_D \to r_{O1}\|r_{O3}$ and the output capacitance (any equivalent form), including the RHP zero $g_{m1}/C_{GD1}$. +1: correct structure but one capacitance term misplaced, or only the two-pole dominant-pole approximation with correct expressions. 0: correct half-circuit idea but a first-order result (only the output pole or only a Miller input pole). -2 (asserted as fact): load resistance taken as $1/g_{m3}$ or $r_{O3}$ alone, the tail node treated as having signal (degeneration) for differential inputs, or a left-half-plane zero.
