# Golden Solution - R315

## Reference answer

$$s_z = -\frac{2g_{mP}}{C_E}$$
a left-half-plane zero at twice the mirror pole $g_{mP}/C_E$.
- With $V_{out} = 0$, the Thevenin branch ($V_X$ in series with $R_X$) drives node E, whose impedance to ground is $Z_E = 1/(g_{mP} + C_Es)$:
  $V_E = -V_X\dfrac{Z_E}{Z_E + R_X}$, and the current in the branch (from the output into it) is $I_X = -\dfrac{V_X}{Z_E + R_X}$.
- Current into the shorted output: from $M_4$, $-g_{mP}V_E$, and from the branch, $-I_X$:
  $I_{short} = -g_{mP}V_E - I_X = \dfrac{V_X(g_{mP}Z_E + 1)}{Z_E + R_X}$.
- $I_{short} = 0$ requires $g_{mP}Z_E = -1$, i.e. $g_{mP} + C_Es = -g_{mP}$, so $s_z = -2g_{mP}/C_E$.
- Interpretation: the fast path (directly through $R_X$) and the slow path (through the mirror, with pole $g_{mP}/C_E$) add; the sum $1 + 1/(1 + s/\omega_E)$ vanishes at $s = -2\omega_E$.

## Grading notes

+2: zero at $s = -2g_{mP}/C_E$ (magnitude $2g_{mP}/C_E$, left half plane) obtained by setting the output-short current to zero, with the two contributions ($M_4$'s current and the Thevenin branch current) correctly written. +1: correct magnitude with the half-plane not stated. 0: the right zero-current equation with a slip in solving it (a sign slip giving the right-half plane, or an algebra slip giving $g_{mP}/C_E$). -2 (asserted as fact): a right-half-plane zero, or a zero at $g_{mP}/C_E$ or $1/(R_XC_E)$, that comes from a wrong equation or circuit model, or a claim that the circuit has no zero.
