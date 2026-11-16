# Golden Solution - G318

## Reference answer

$R_Z = 1/g_{m6} = 500$ Ω.

With $R_Z$ in series with $C$, the zero of $v_o/v_x$ is at $z = 1/[C(1/g_{m6} - R_Z)]$. As $\omega \to \infty$ the capacitor is a short and the feedforward current through the branch is $-v_x/R_Z$ while the controlled source gives $g_{m6}v_x$; the total output current related to $v_x$ vanishes, and the zero moves to infinity, when $R_Z = 1/g_{m6}$ = 1/(2 mA/V) = 500 Ω. (A larger $R_Z$ moves the zero into the left half-plane.)

## Grading notes

+2: $R_Z = 1/g_{m6}$ = 500 Ω with a brief justification (zero formula or the feedforward-current argument). +1: 500 Ω with no justification. 0: correct formula with a slip in the number. −2 (asserted as fact): $R_Z = 1/g_{m1}$ (2 kΩ), $R_Z = R_1$ or $R_2$, or a claim that a series resistor cannot remove the zero.
