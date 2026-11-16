# Golden Solution - R693

## Reference answer

The drain–n-well junction of $M_2$ (the p+ drain of $M_2$ to its n-well).

- The spike shorts $M_2$'s p+ drain, i.e. the output node, to the n-well, which is tied to $V_{DD}$. $V_{out}$ is therefore held near $V_{DD}$, apart from a small drop across the well resistance, and the stage has essentially no gain.
- Other junctions:
  - $M_2$'s source to the n-well: no effect (both at $V_{DD}$).
  - $M_1$'s drain to the substrate: $V_{out}$ near ground, not $V_{DD}$.
  - $M_1$'s source to the substrate: bypasses $R_S$, so the current increases and $V_{out}$ goes down, not up.

## Grading notes

+2: identifies the drain junction of $M_2$ (p+ drain to the n-well at $V_{DD}$), explaining that the output is shorted to the well and hence to $V_{DD}$.
+1: correct junction with thin reasoning.
0: the right device ($M_2$) but the junction ambiguous between source and drain.
-2 (asserted as fact): $M_1$'s drain or source junction, or $M_2$'s source junction, as the cause.
