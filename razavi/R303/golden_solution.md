# Golden Solution - R303

## Reference answer

$Z_{in} = 0$ and $\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{g_{m2}R_S}$.
- $M_1$ is a common-gate NMOS (source at X, gate $V_{b2}$, drain at the output); $M_2$ is an NMOS source follower (drain $V_{DD}$, gate at $V_{out}$, source at X).
- KCL at the output: $I_1$ ideal and the gate of $M_2$ open force $M_1$'s current $-g_{m1}v_X$ to zero: $v_X = 0$, $Z_{in} = 0$.
- KCL at X: $i_{in} + g_{m2}(v_{out} - v_X) - g_{m1}v_X = 0 \Rightarrow v_{out} = -i_{in}/g_{m2} = -V_{in}/(g_{m2}R_S)$.
- Remark: here the loop (X up → $M_1$ current down → output up → follower pulls X up) is positive feedback; with finite $r_O$, $Z_{in} = -r_{O2}/(g_{m1}g_{m2}r_{O1}r_{O2} - 1) < 0$, which tends to $0^-$ as λ → 0. The ideal small-signal result is $Z_{in} = 0$, but such a bias point would not be stable in practice.

## Grading notes

+2: $Z_{in} = 0$ and $V_{out}/V_{in} = -1/(g_{m2}R_S)$ with the KCL argument. Mentioning positive feedback/instability is a plus, not required. +1: right results with a vague argument, or a sign slip in the gain. 0: one of the two right. -2 (asserted as fact): $Z_{in} = 1/g_{m1}$, $1/(g_{m1} + g_{m2})$ or ∞, a gain of $g_{m1}/g_{m2}$, or $M_2$ misread as a PMOS.
