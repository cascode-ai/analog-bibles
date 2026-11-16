# Golden Solution - A160

## Reference answer

$\overline{v_{eq}^2} = \overline{v_{n1}^2} + \overline{v_{n2}^2} + \left(\dfrac{g_{m3}}{g_{m1}}\right)^2\left(\overline{v_{n3}^2} + \overline{v_{n4}^2}\right) + \left(\dfrac{g_{m6}}{g_{m1}}\right)^2\left(\overline{v_{n6}^2} + \overline{v_{n7}^2}\right) = 2\overline{v_{n1}^2} + 2\left(\dfrac{g_{m3}}{g_{m1}}\right)^2\overline{v_{n3}^2} + 2\left(\dfrac{g_{m6}}{g_{m1}}\right)^2\overline{v_{n6}^2}$

M5 does not contribute.

- Short-circuit output noise current: M1 and M2 each give $g_{m1}v_{n1}$ (M1 via the M3–M4 mirror, M2 directly). M3's noise current flows into its own diode, sets the M3/M4 gate voltage and is copied by M4, giving $g_{m3}v_{n3}$. M4 gives $g_{m4}v_{n4}$ directly. M6's noise current enters the M1/M3 node and goes into the low-impedance diode M3, then is mirrored to the output, giving $g_{m6}v_{n6}$. M7 gives $g_{m7}v_{n7}$ directly.
- M5's noise splits equally between M1 and M2 (common mode). Its two halves arrive at the output with opposite signs and cancel.
- Dividing $\overline{i_{to}^2}$ by $g_{m1}^2$ gives the result. With these sizes M3 and M1 are both n-channel at 50 µA, so $g_{m3} = g_{m1}$ and $\overline{v_{eq}^2} = 2\overline{v_{n1}^2} + 2\overline{v_{n3}^2} + 2(g_{m6}/g_{m1})^2\overline{v_{n6}^2}$ with $(g_{m6}/g_{m1})^2 = (K'_P \cdot 100\ \mu\mathrm{A})/(K'_N \cdot 50\ \mu\mathrm{A}) = 0.91$. For equal $\overline{v_{n1}^2} = \overline{v_{n3}^2}$ this becomes $4\overline{v_{n1}^2} + 2(g_{m6}/g_{m1})^2\overline{v_{n6}^2}$.

## Grading notes

+2: all three pairs present with the weightings $(g_{m3}/g_{m1})^2$ and $(g_{m6}/g_{m1})^2$ (or the simplified form with $g_{m3} = g_{m1}$), and M5 recognized as non-contributing (or simply absent). A more exact form that keeps the $g_{ds}$ terms (e.g. a common factor $4(1+\eta^2)/(1+\eta)^2$ with $\eta = g_{m3}/(g_{m3} + g_{ds1} + g_{ds3} + g_{ds6}) \approx 0.99$, which differs from 2 only by terms of order $(g_{ds}/g_m)^2$), or a remark that M5 leaves a negligible residue in an exact single-ended analysis, is equivalent and earns full credit, not a false claim. +1: one weighting slip (e.g. M6/M7 pair with weight 1) with the rest right. 0: one of the three pairs missing. −2 (asserted as fact): a weighting inverted, such as $(g_{m1}/g_{m6})^2$, M5 claimed to contribute fully, noise voltages added linearly, or M6/M7 claimed not to contribute.
