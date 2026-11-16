# Golden Solution - R147

## Reference answer

There is no unique number; a reasonable enumeration gives about 12 distinct topologies. Representative list (signal applied to a gate, a source or a bulk; the other device used as load, bias source, cascode or degeneration):
1. CS ($M_1$ input) with $M_2$ diode-connected as load (gate of $M_2$ to its drain at $V_{DD}$).
2. CS ($M_1$) with $M_2$'s gate at a fixed bias: a follower-type load (≈ $1/(g_{m2}+g_{mb2})$) or, with a high gate bias, a triode resistor load.
3. Cascode: $M_1$ CS, $M_2$ common gate (gate at bias), output at the top drain.
4. Source follower: $M_2$ input at its gate, output at the middle node, $M_1$ as bias current source.
5. Source follower $M_2$ with $M_1$ diode-connected (gate to the middle node) as load.
6. Common gate: input at the middle node (source of $M_2$), output at the top drain, $M_1$ biasing the input node as a current source.
7. Common gate with $M_1$: input at the bottom terminal (source of $M_1$), output at the middle node, $M_2$ as (diode or follower) load.
8. Degenerated CS: $M_2$ input, output at the top drain, $M_1$ as degeneration (triode resistor, diode or current source).
9. Bulk-driven versions of the above (signal into a bulk terminal, using $g_{mb}$).
10. With the source/drain of one device swapped so that both sources sit at the middle node: a source-coupled pair (differential pair with a tail current source at the middle node, inputs at both gates, outputs at the top and bottom terminals with external loads), or a CD→CG amplifier with one gate held at a bias.
11. Cascoded source follower: $M_1$ follower (input $G_1$, output at the bottom terminal with a resistor or bias path to ground), $M_2$ with its gate at a bias and top terminal at $V_{DD}$ as a common-gate drain shield; $M_2$ presents a low impedance at the middle node, so the follower still works, $A_v \approx g_{m1}R_S/[1+(g_{m1}+g_{mb1})R_S]$.
The 11 families above are representative, not an upper limit: larger counts (separating load variants, bulk-driven versions, swapped orientations, cross-wired multi-stage connections) are equally valid when the counting convention is stated. External passive elements, voltage sources and bias currents may be added; a third transistor may not. Every arrangement must have a DC path for each device's current (e.g., two NMOS devices that both sink current from the output node with no pull-up element cannot be biased).

## Grading notes

Open-ended: grade the list, not the count; accept any total whose counting convention is stated. +2: at least six valid, distinct topologies with correct input/output nodes and device roles, including the core ones (CS with diode-connected load, cascode, source follower with current-source bias, common gate, degenerated CS). +1: four or five valid topologies. 0: two or three valid topologies, or a list in which only about half of the entries can be biased. -1: only a number with no list. -2 (asserted as fact): most of the listed configurations cannot work (e.g., output taken at an isolated gate or bulk; two NMOS devices both sinking current from the output node with no pull-up, so no DC current can flow; a follower whose output current is forced by an ideal current source in its drain, so the output is fixed and the gain is ≈ 0). A source follower with $M_2$ in its drain as a gate-biased common-gate shield and a resistor or bias path at its output (cascoded follower) is valid, not an example of this error. Cross-wired or source/drain-swapped arrangements that work with external passive elements (source-coupled pair, CD→CG with a tail resistor, Darlington, self-cascode, two-stage cascades) count as valid entries. Mislabelling the role of a load in a configuration that does work, e.g. calling an NMOS whose source is the output node a "current-source load" when it is really a low-impedance follower-type load of ≈ $1/(g_m + g_{mb})$, is an error in that entry only: do not count that entry as fully valid, but do not score -2 for it alone. Apply the same treatment to every answer that makes the same mislabel.
