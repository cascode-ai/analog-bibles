# Golden Solution - R381

## Reference answer

$$I_{n,in}\big|_{M1} = \frac{g_{m1}r_{O1}}{r_{O2}[(g_{m1}+g_{mb1})r_{O1} + 1]}V_{n1} \approx \frac{g_{m1}}{g_{m1}+g_{mb1}}\cdot\frac{V_{n1}}{r_{O2}},\qquad \overline{I_{n,in}^2}\big|_{M1} \approx \frac{4kT\gamma}{g_{m1}r_{O2}^2}$$
(up to the factor $[g_{m1}/(g_{m1}+g_{mb1})]^2$). $M_2$ contributes $4kT\gamma g_{m2}$ and $M_3$ ≈ $4kT\gamma g_{m3}$, so $M_1$'s contribution is smaller than $M_2$'s by about $(g_{m1}r_{O2})(g_{m2}r_{O2})$ ~ $(g_mr_O)^2$: negligible.

- Output due to $V_{n1}$ (input open): $V_{out} = -\dfrac{g_{m1}r_{O1}r_{O3}V_{n1}}{r_{O1} + r_{O2} + r_{O3} + (g_{m1}+g_{mb1})r_{O1}r_{O2}}$.
- Transimpedance for an input current $I_{in}$ into the source node: $\dfrac{V_{out}}{I_{in}} = \dfrac{[(g_{m1}+g_{mb1})r_{O1} + 1]\,r_{O2}r_{O3}}{r_{O1} + r_{O2} + r_{O3} + (g_{m1}+g_{mb1})r_{O1}r_{O2}}$ (≈ $r_{O3}$ for a high-impedance output: the CG stage passes the input current to the output).
- Ratio of the two gives $I_{n,in}|_{M1}$ (sign aside).

## Grading notes

+2: the referred current ≈ $V_{n1}/r_{O2}$ (or the exact form), PSD ≈ $4kT\gamma/(g_{m1}r_{O2}^2)$, and the comparison showing it is smaller than $M_2$'s $4kT\gamma g_{m2}$ and $M_3$'s ≈ $4kT\gamma g_{m3}$ by roughly $(g_mr_O)^2$, hence negligible. +1: correct conclusion with the transimpedance approximated as $r_{O3}$ without justification, or a small slip. 0: correct conclusion stated without derivation. -2 (asserted as fact): $M_1$'s contribution claimed comparable to or larger than $M_2$'s, or the referred current given as $g_{m1}V_{n1}$ (no degeneration).
