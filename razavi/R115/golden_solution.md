# Golden Solution - R115

## Reference answer

$A_v = \dfrac{(1 + g_{m1}r_{O1})R_L}{r_{O1} + R_L}$ with $R_L = r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}$ (the PMOS cascode load); since $R_L \gg r_{O1}$, $A_v \approx 1 + g_{m1}r_{O1}$ (non-inverting).

- $M_1$ is an NMOS common-gate stage (gate at $V_{b1}$, source driven by $v_{in}$, drain at the output); $M_2$–$M_3$ form a PMOS cascode current source of output resistance $R_L$.
- KCL at the output (zero source resistance): $(v_{out} - v_{in})/r_{O1} - g_{m1}v_{in} + v_{out}/R_L = 0$ → $v_{out}(1/R_L + 1/r_{O1}) = v_{in}(g_{m1} + 1/r_{O1})$.

## Grading notes

+2: the expression above or an equivalent form (positive gain, cascode load resistance $r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}$ or ≈ $g_{m2}r_{O2}r_{O3}$). +1: approximate $\approx 1 + g_{m1}r_{O1}$ or $g_{m1}r_{O1}$ with the load argued to be much larger than $r_{O1}$, or one slip. 0: correct method with an algebra error in the final expression. -2 (asserted as fact): load resistance taken as $r_{O3}$ or $r_{O2}$ only (cascode ignored), inverting gain, $M_1$ read as a PMOS or as a common-source device, or gain $g_{m1}R_L$ ignoring $r_{O1}$ in a way that gives a vastly larger value.
