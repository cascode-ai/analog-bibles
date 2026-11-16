# Golden Solution - R692

## Reference answer

The source–substrate junction of $M_1$ (the n+ source of $M_1$ to the grounded p-substrate).

- The metal spike penetrates that n+ region and shorts it to the p-substrate, which is grounded. The source of $M_1$ is then tied to ground, through at most a small substrate resistance, in parallel with $R_S$. The degeneration disappears.
- The nominal gain is $A_v \approx -\dfrac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}$, i.e. the diode load $1/g_{m2}$ over $R_S + 1/g_{m1}$. With the source grounded it becomes $\approx -g_{m1}/g_{m2}$, which is larger.
- The other junctions do not fit:
  - $M_1$'s drain shorted to the substrate pulls $V_{out}$ to ground (gain ≈ 0).
  - $M_2$'s drain shorted to the n-well ties $V_{out}$ to $V_{DD}$ (gain ≈ 0).
  - $M_2$'s source shorted to the n-well changes nothing, since both are already at $V_{DD}$.

## Grading notes

+2: identifies the source junction of $M_1$ (n+ source to p-substrate), explaining that the spike shorts the source to the grounded substrate and bypasses $R_S$, so the gain rises from about $g_{m1}/[g_{m2}(1+g_{m1}R_S)]$ toward $g_{m1}/g_{m2}$.
+1: correct junction with vague reasoning (e.g., "removes degeneration" without saying why), or correct but with a minor wrong side remark.
0: correct physical idea of spiking (junction shorted to bulk) but the junction not pinned down among several candidates.
-2 (asserted as fact): any other junction ($M_1$ drain, $M_2$ drain or source), or spiking misdescribed as an open circuit or a gate short leading to a different junction.
